import { Validator } from "./types";

export const hexValidator: Validator = (value: string) =>
  /^#[0-9A-F]{6}$/i.test(value);
