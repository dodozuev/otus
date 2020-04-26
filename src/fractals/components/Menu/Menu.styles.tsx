import styled from "@emotion/styled";

export const FormStyled = styled.form`
  border: 0.2em;
  border-radius: 0.3em;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 24em;
  text-align: center;
  flex-wrap: wrap;
  width: 100%;
  & > div {
    width: 100%;
  }
`;

export const ButtonStyled = styled.button`
  width: 100%;
  border-radius: 20px;
  height: 3em;
`;

export const MenuStyled = styled.div`
  font-size: 1.2em;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
