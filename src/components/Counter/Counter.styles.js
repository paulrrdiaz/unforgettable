import styled from "@emotion/styled";

export const Counter = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;

  h3 {
    font-size: 180px;
    margin-bottom: 20px;
  }

  button {
    background-color: rgb(var(--blue));
    color: rgb(var(--white));
    border-radius: 5px;
    width: 40px;
    height: 40px;

    & + button {
      margin-left: 20px;
    }
  }
`;
