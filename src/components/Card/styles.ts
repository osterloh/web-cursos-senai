import styled from "styled-components";

export const Container = styled.div`
  width: 395px;
  margin: 5px;
  border: 2px solid #006bb7;
  border-radius: 4px;

  img {
    width: 100%;
  }

  h3,
  h4 {
    text-align: center;
  }

  #curso {
    margin-bottom: 10px;
  }

  div {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .clarear {
      opacity: 0.8;
    }

    h1,
    h3 {
      margin-left: 10px;
    }
  }

  p {
    margin: 10px;
  }

  a {
    display: block;
    width: 100px;
    text-align: center;
    margin: 10px;
    text-decoration: none;
    font-size: 18px;
    padding: 2px;
    border: solid 2px;
    border-radius: 15px;

    transition: all 0.3s ease-out;

    &:hover {
      background-color: #006bb7;
      color: #fff;
    }
  }
`;
