import { Button, Heading, Text } from "../../atoms";
import * as S from "./styles";

export interface ICard {
  plan: "Starter" | "Premium" | "Enterprise";
  price: number;
  features: string[];
  variant?: S.CardVariants;
}

export default function Card({
  plan,
  price,
  features,
  variant = "default",
}: ICard) {
  const buttonVariant = variant === "selected" ? "primary" : "secondary";

  return (
    <S.Card variant={variant}>
      <Text as="h2">{plan}</Text>
      <Heading>
        {price === 0 ? (
          "Free"
        ) : (
          <>
            ${price}
            <span>/month</span>
          </>
        )}
      </Heading>
      <S.List>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </S.List>
      <footer>
        <Button variant={buttonVariant}>Get started</Button>
      </footer>
    </S.Card>
  );
}
