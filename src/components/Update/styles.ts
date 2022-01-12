import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
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
        display: block;
      }

      input,
      select {
        margin-bottom: 10px;
        display: block;
        width: 100%;
        padding-left: 16px;
        border-radius: 4px;
        border: 1px solid #cecece;
        color: #5b5b5b;
        font-size: 20px;
        height: 40px;
        background: transparent;
      }

      button {
        margin: 5px 0;
        height: 40px;
        padding: 0 16px;
        font-weight: bold;
        font-size: 16px;
        border-radius: 20px;
        border: 1px solid #006bb7;
        background-color: #006bb7;
        color: #fff;

        transition: background-color 0.2s;

        &:hover {
          background-color: ${shade(0.2, "#006bb7")};
        }
      }
    }
  }
`;
