export type Validator = (value: string) => boolean;
export type ControlledComponentProps = {
  value: string;
  onChange?: (value: string) => void;
};
