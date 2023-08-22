import React from "react";
import theme from "../../config/styles/theme";

import Heart from "../../assets/icons/heart.svg";
import Home from "../../assets/icons/home.svg";
import Map_pin from "../../assets/icons/map_pin.svg";
import Share from "../../assets/icons/share.svg";
import Ticket from "../../assets/icons/ticket.svg";
import User from "../../assets/icons/user.svg";
import ArrowLeft from "../../assets/icons/arrow_left.svg";
import Calendar from "../../assets/icons/calendar.svg";
import DollarSign from "../../assets/icons/dollar_sign.svg";
import Edit from "../../assets/icons/edit.svg";
import ChevronRight from "../../assets/icons/chevron_right.svg";
import TicketFill from "../../assets/icons/ticket_fill.svg";
import HeartFill from "../../assets/icons/heart_fill.svg";
import ChevronDown from "../../assets/icons/chevron_down.svg";
import Search from "../../assets/icons/search.svg";
import ShoppingBag from "../../assets/icons/shopping_bag.svg";
import PlusCircle from "../../assets/icons/plus_circle.svg";
import MinusCircle from "../../assets/icons/minus_circle.svg";

export enum IconNames {
  heart = "heart",
  home = "home",
  map_pin = "map_pin",
  share = "share",
  ticket = "ticket",
  user = "user",
  arrow_left = "arrow_left",
  calendar = "calendar",
  dollar_sign = "dollar_sign",
  edit = "edit",
  chevron_right = "chevron_right",
  ticket_fill = "ticket_fill",
  heart_fill = "heart_fill",
  chevron_down = "chevron_down",
  search = "search",
  shopping_bag = "shopping_bag",
  plus_circle = "plus_circle",
  minus_circle = "minus_circle",
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
    case IconNames.arrow_left:
      return <ArrowLeft color={color} width={width} height={height} />;
    case IconNames.calendar:
      return <Calendar color={color} width={width} height={height} />;
    case IconNames.dollar_sign:
      return <DollarSign color={color} width={width} height={height} />;
    case IconNames.edit:
      return <Edit color={color} width={width} height={height} />;
    case IconNames.chevron_right:
      return <ChevronRight color={color} width={width} height={height} />;
    case IconNames.ticket_fill:
      return <TicketFill color={color} width={width} height={height} />;
    case IconNames.heart_fill:
      return <HeartFill color={color} width={width} height={height} />;
    case IconNames.chevron_down:
      return <ChevronDown color={color} width={width} height={height} />;
    case IconNames.search:
      return <Search color={color} width={width} height={height} />;
    case IconNames.shopping_bag:
      return <ShoppingBag color={color} width={width} height={height} />;
    case IconNames.plus_circle:
      return <PlusCircle color={color} width={width} height={height} />;
    case IconNames.minus_circle:
      return <MinusCircle color={color} width={width} height={height} />;
  }
}
