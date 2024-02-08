import { styled } from "styled-components";

const StyledFormRow = styled.div`
  display: flex;

  justify-content: space-between;
  flex-direction: column;

  padding: 0.5rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey--100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 0.1rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1.2rem;
`;

const Error = styled.span`
  font-size: 1rem;
  color: var(--color-red-700);
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
