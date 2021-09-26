import React from "react";

import { CardVariants } from "./components/molecules/card/styles";
import { CardList } from "./components/organisms";

interface ICard {
  id: string;
  plan: "Starter" | "Premium" | "Enterprise";
  price: number;
  features: string[];
  variant?: CardVariants;
}

const cards: ICard[] = [
  {
    id: "o39iu4oiuj",
    plan: "Starter",
    price: 0,
    features: ["1 Website", "5 GB Hosting", "Limited Support"],
  },
  {
    id: "aq234trwedf",
    plan: "Premium",
    price: 29,
    variant: "selected",
    features: ["10 Website", "15 GB Hosting", "Premium Support"],
  },
  {
    id: "32rqwefasdf",
    plan: "Enterprise",
    price: 49,
    features: ["Unlimited Websites", "50 GB Hosting", "Premium Support"],
  },
];

function App() {
  return (
    <main>
      <CardList cards={cards} />
    </main>
  );
}

export default App;
