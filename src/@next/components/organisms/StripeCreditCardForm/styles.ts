import { DefaultTheme, styled } from "@styles";

type WrapperProps = {
  active?: boolean;
  error?: boolean;
  disabled?: boolean;
  theme: DefaultTheme;
};

const getEdgeColor = (
  { active, error, disabled, theme }: WrapperProps,
  hovered = false
) => {
  if (disabled) {
    return theme.colors.disabled;
  }

  if (error) {
    return theme.colors.error;
  }

  if (hovered) {
    return theme.colors.secondary;
  }

  return active ? theme.colors.secondary : theme.colors.dark;
};

export const Form = styled.form`
  padding: 1rem 0;
`;

export const Card = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  .StripeElement {
    padding: 0.8rem 1rem;
    margin: 0;
    /* border: 1px solid ${props => getEdgeColor(props)}; */
    width: 100%;
    font-size: ${props => props.theme.typography.baseFontSize};
    outline: none;
    background-color: transparent;
    ::placeholder {
      font-size: 0;
      visibility: hidden;
    }
    &--empty {
      font-size: 0;
    }
  }
`;

export const Label = styled.label``;