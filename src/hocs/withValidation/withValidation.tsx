import React, { memo, useCallback, useState } from "react";
import { ControlledComponentProps, Validator } from "./types";
import clsx from "clsx";

const withValidation =
  (validator: Validator) =>
  <T extends ControlledComponentProps>(Wrapped: React.ComponentType<T>) => {
    const Component = ({ value, onChange, ...rest }: T) => {
      const [displayedValue, setDisplayedValue] = useState<string>(value);
      const [oldValue, setOldValue] = useState<string>(value);

      if (oldValue !== value) {
        setOldValue(value);
        setDisplayedValue(value);
      }

      const handleChange = useCallback(
        (value: string) => {
          if (displayedValue === value) return;

          setDisplayedValue(value);
          if (validator(value)) {
            onChange?.(value);
          }
        },
        [displayedValue, onChange]
      );

      return (
        <Wrapped
          {...(rest as T)}
          value={displayedValue}
          onChange={handleChange}
        />
      );
    };

    Component.displayName = clsx("WithValidation", Wrapped.displayName);
    return memo(Component);
  };

export default withValidation;
