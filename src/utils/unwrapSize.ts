import { Size, Dimensions } from "@src/types";

export const unwrapSize = (size: Size): Dimensions => {
  if ("size" in size) {
    return { width: size.size, height: size.size };
  } else {
    return size;
  }
};
