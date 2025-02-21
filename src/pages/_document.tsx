import { Head, Html, Main, NextScript } from "next/document";
import { CSSProperties, useMemo } from "react";

import { getColors } from "@/lib/data";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Document() {
  const style = useMemo(() => {
    const cssVariables: Record<string, any> = {};
    const colors = getColors();

    Object.entries(colors).forEach(([key, value]) => {
      cssVariables[`--${key}`] = value;
    });

    return cssVariables as CSSProperties;
  }, []);

  return (
    <Html lang="en" style={style}>
      <Head />
      <GoogleTagManager gtmId="G-N1MW6X36C2" />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
