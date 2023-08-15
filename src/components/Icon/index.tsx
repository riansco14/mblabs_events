import React from "react";
import theme from "../../config/styles/theme";

import Heart from "../../assets/icons/heart.svg";
import Home from "../../assets/icons/home.svg";
import Map_pin from "../../assets/icons/map_pin.svg";
import Share from "../../assets/icons/share.svg";
import Ticket from "../../assets/icons/ticket.svg";
import User from "../../assets/icons/user.svg";

enum IconNames {
  heart = "heart",
  home = "home",
  map_pin = "map_pin",
  share = "share",
  ticket = "ticket",
  user = "user",
}

type IconNamesType = `${IconNames}`;

export interface IconProps {
  name: IconNamesType;
  color?: string;
  width?: number;
  height?: number;
}

export function Icon({
  name = IconNames.heart,
  color = theme.colors.black,
  width = 20,
  height = 20,
}: IconProps) {
  switch (name) {
    case IconNames.heart:
      return <Heart color={color} width={width} height={height} />;
    case IconNames.home:
      return <Home color={color} width={width} height={height} />;
    case IconNames.map_pin:
      return <Map_pin color={color} width={width} height={height} />;
    case IconNames.share:
      return <Share color={color} width={width} height={height} />;
    case IconNames.ticket:
      return <Ticket color={color} width={width} height={height} />;
    case IconNames.user:
      return <User color={color} width={width} height={height} />;
  }
}
