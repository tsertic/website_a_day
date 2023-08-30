import { ReactElement } from "react";

export interface IOrderCardData {
  index?: number;
  cardData: {
    name: string;
    iconSrc: string;
  };
}
