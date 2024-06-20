import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 32px;
  justify-content: flex-end;
`;
export const Buttons = styled.div`
  display: flex;
  gap: 24px;
`;

export const Button = styled.button`
  display: grid;
  grid-template-columns: 1fr 16px;
  align-items: center;
  gap: 8px;
`;
export const Day = styled(Button)`
  color: var(--day);
`;
export const Night = styled(Button)`
  color: var(--night);
`;
