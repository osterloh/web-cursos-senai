import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  #cabecalho {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    border-bottom: 1px solid #006bb7;

    h2 {
      text-align: center;
      margin: 10px;
      padding: 10px;
    }

    a {
      text-decoration: none;
      font-size: 14px;
      color: #fff;
      background-color: #006bb7;
      border: 1px solid #006bb7;
      border-radius: 4px;
      width: 120px;
      text-align: center;
      padding: 3px;

      transition: all 0.5s ease-out;

      &:hover {
        background-color: ${shade(0.2, "#006bb7")};
      }
    }
  }
  #main {
    min-width: 95%;
    margin: 10px auto 10px auto;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
