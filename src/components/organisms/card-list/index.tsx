import React from "react";

import Card from "../../molecules/card";
import { CardVariants } from "../../molecules/card/styles";
import * as S from "./styles";

interface ICard {
  id: string;
  plan: "Starter" | "Premium" | "Enterprise";
  price: number;
  features: string[];
  variant?: CardVariants;
}

interface ICardListProps {
  cards: ICard[];
}

export default function CardList({ cards }: ICardListProps) {
  return (
    <S.Container>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </S.Container>
  );
}
