import { hexToURL } from "@src/utils/hexToURL";
import React, { memo, useMemo } from "react";
import "./preview.scss";
type PreviewProps = {
  hex: string;
};

const Preview = ({ hex }: PreviewProps) => {
  const url = useMemo(() => hexToURL({ hex, size: 64 }), [hex]);

  return <img className="preview" src={url} />;
};

export default memo(Preview);
