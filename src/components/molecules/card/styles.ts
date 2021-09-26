import styled, { css } from "styled-components";

import { Heading as CardHeading } from "../../atoms";

const CARD_VARIANTS = {
  selected: css`
    background-color: var(--color-purple-400);
    color: var(--color-white);

    h2 {
      color: hsla(0, 0%, 100%, 0.7);
    }
  `,
  default: css`
    background-color: var(--color-gray-100);
    color: var(--color-gray-500);

    h2 {
      color: var(--color-gray-300);
    }
  `,
};

export type CardVariants = keyof typeof CARD_VARIANTS;

interface ICardProps {
  variant?: CardVariants;
}

export const Card = styled.article<ICardProps>`
  max-width: 376px;

  padding: 50px 35px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 22px;
  }

  ${CardHeading} {
    margin-bottom: 28px;
  }

  footer {
    width: 100%;
  }

  ${({ variant = "default" }) => CARD_VARIANTS[variant]}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  margin-bottom: 48px;
`;
