import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  max-width: 95%;
  margin: 10px auto;
  padding: 10px;
  border: solid 2px #006bb7;
  border-radius: 5px;

  h2 {
    text-align: center;
    padding: 0 0 20px;
  }

  div {
    form {
      width: 70%;
      margin: auto;

      label {
        color: #5b5b5b;
        font-weight: bold;
        font-size: 15px;
      }

      input {
        margin-bottom: 10px;
        display: block;
        width: 100%;
        padding-left: 16px;
        border-radius: 4px;
        border: 1px solid #cecece;
        color: #5b5b5b;
        font-size: 20px;
        height: 40px;
      }

      button {
        margin: 5px 0;
        height: 40px;
        padding: 0 16px;
        font-weight: bold;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #fff;
        background-color: #3e3e3e;
        color: #fff;

        transition: background-color 0.2s;

        &:hover {
          background-color: ${shade(0.2, "#3e3e3e")};
        }
      }
    }
  }
`;
