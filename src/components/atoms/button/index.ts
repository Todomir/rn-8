import styled, { css } from "styled-components";

const BUTTON_VARIANTS = {
  primary: css`
    background-color: var(--color-purple-500);
    color: var(--color-white);
  `,
  secondary: css`
    background-color: var(--color-white);
    color: var(--color-purple-400);
  `,
};

interface IButtonProps {
  variant?: keyof typeof BUTTON_VARIANTS;
}

const Button = styled.button<IButtonProps>`
  font-family: "DM Sans", sans-serif;
  font-size: var(--font-size-body);
  font-weight: 700;

  padding: 19px 52px;

  border: none;
  border-radius: 10px;

  ${({ variant = "primary" }) => BUTTON_VARIANTS[variant]}

  cursor: pointer;

  width: 100%;
`;

export default Button;
