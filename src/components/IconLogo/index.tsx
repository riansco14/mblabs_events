import React from "react";
import theme from "../../config/styles/theme";

import GooglePay from "../../assets/icons/logos/google_pay.svg";
import Pix from "../../assets/icons/logos/pix.svg";
import Visa from "../../assets/icons/logos/visa.svg";

enum IconNames {
  google_pay = "google_pay",
  pix = "pix",
  visa = "visa",
}

type IconNamesType = `${IconNames}`;

export interface IconProps {
  name: IconNamesType;
  width?: number;
  height?: number;
}

export function IconLogo({
  name = IconNames.google_pay,
  width = 20,
  height = 20,
}: IconProps) {
  switch (name) {
    case IconNames.google_pay:
      return <GooglePay width={width} height={height} />;
    case IconNames.visa:
      return <Visa width={width} height={height} />;
    case IconNames.pix:
      return <Pix width={width} height={height} />;
  }
}
