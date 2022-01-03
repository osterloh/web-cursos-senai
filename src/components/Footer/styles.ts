import styled from "styled-components";

export const Container = styled.h1`
  background-color: #006bb7;

  #linksInternos {
    max-width: 100%;
    width: 1140px;

    margin-left: auto;
    margin-right: auto;

    border-bottom: 1px solid #fff;

    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      /* padding: 1.25rem 0; */
      width: 280px;
      font-size: 16px;

      p {
        font-weight: bold;
        font-size: 0.9em;
        color: #fff;
        width: 100%;
        display: block;
        padding: 1.25rem 0;
      }

      a {
        text-decoration: none;
        color: #fff;
        font-weight: 300;
        font-size: 0.875em;
        line-height: 1.5;

        width: 100%;
      }
    }
  }
`;
