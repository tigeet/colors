import React, { memo, useMemo } from "react";
import clsx from "clsx";
import { cn } from "@bem-react/classname";

import { hexToURL } from "@src/utils/hexToURL";

import "./preview.scss";

type PreviewProps = {
  hex: string;
  size?: 16 | 32 | 64;
  className?: string;
};

const cnPreview = cn("preview");
const Preview = ({ hex, className, size = 16 }: PreviewProps) => {
  const url = useMemo(() => hexToURL({ hex, size }), [hex, size]);

  return <img className={clsx(className, cnPreview({ size }))} src={url} />;
};

export default memo(Preview);
