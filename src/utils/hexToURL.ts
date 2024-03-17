import { hexValidator } from "@src/hocs/withValidation/validators";
import { Size } from "@src/types";
import { unwrapSize } from "./unwrapSize";

type Props = { hex: string } & Size;

export const hexToURL = (props: Props): string | undefined => {
  const { hex } = props;
  const { width, height } = unwrapSize(props);

  if (!hexValidator(hex)) {
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  ctx.fillStyle = hex;
  ctx.fillRect(0, 0, width, height);

  const url = canvas.toDataURL();

  return url;
};
