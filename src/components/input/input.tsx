import React, { forwardRef, memo } from "react";
import clsx from "clsx";
export type InputProps = {
  value: string;
  onChange?: (value: string) => void;
  addonLeft?: React.ReactNode;
  addonRight?: React.ReactNode;
  className?: string;
  placeholder?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      onChange,
      className,
      placeholder,
      addonLeft,
      addonRight,
      ...common
    },
    ref
  ) => {
    return (
      <div className="input">
        {addonLeft && <div className="addon addonLeft">{addonLeft}</div>}
        <input
          ref={ref}
          {...common}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          className={clsx("control", className)}
        />
        {addonRight && <div className="addon addonRight">{addonRight}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default memo(Input);
