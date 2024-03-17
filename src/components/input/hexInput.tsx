import { withHexValidation } from "@src/hocs/withValidation/variants";
import Input from "./input";

export const HexInput = withHexValidation(Input);
