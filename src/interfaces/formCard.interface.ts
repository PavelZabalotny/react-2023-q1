import { TCardBorderColor } from "@/interfaces/cardBorderColor.type";

export interface IFormCard {
  id: string;
  title: string;
  date: string;
  category: string;
  isCardVisible: boolean;
  cardBorderColor: TCardBorderColor;
  img: string;
}
