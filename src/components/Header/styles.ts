import styled from "styled-components";

export const Container = styled.div`
  font-size: 16px;

  .conteudo {
    display: block;

    padding: 7px 0 7px;
    text-align: center;
    letter-spacing: 1px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #cecece;
    margin-bottom: 1px;

    color: #5b5b5b;
    font-size: 0.75em;
    font-weight: 600;
    line-height: 1.4;
    font-family: MuseoSans, Arial, sans-serif;
    overflow-x: hidden;

    a {
      color: #006bb7;
      text-decoration: none;
      padding: 0.15em 0.1em;
      border-bottom: 1px solid #006bb7;
      transition: all 0.1s ease;
    }
  }
`;
