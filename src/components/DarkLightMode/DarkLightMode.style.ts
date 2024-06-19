import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 32px;
`;
export const Buttons = styled.div`
  display: flex;
  gap: 24px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Day = styled(Button)`
  color: var(--day);
`;
export const Night = styled(Button)`
  color: var(--night);
`;
