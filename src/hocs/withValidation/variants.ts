import { hexValidator } from "./validators";
import withValidation from "./withValidation";

export const withHexValidation = withValidation(hexValidator);
