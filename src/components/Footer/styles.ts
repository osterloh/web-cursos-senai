import styled from "styled-components";

export const Container = styled.div`
  background-color: #006bb7;

  #linksInternos {
    max-width: 100%;
    width: 1140px;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 55px;

    border-bottom: 1px solid #fff;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      padding: 1.25rem 0;
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

      div {
        a {
          text-decoration: none;
          color: #fff;
          font-weight: 300;
          font-size: 0.875em;
          line-height: 1.5;

          width: 100%;
        }

        div {
          display: flex;
          align-items: center;
          justify-content: space-around;

          margin: -0.5rem 0;

          img {
            width: 50px;
          }
          div {
            width: 80%;

            p {
              margin: -1.25rem 0;
              font-weight: 300;
            }
          }

          #faleConosco {
            text-align: center;

            a {
              font-weight: bold;
              text-decoration: none;
              border: 2px solid #fff;
              width: 180px;
              height: 39px;
              margin: 0 0.5em 0.5em 0;

              display: flex;
              align-items: center;
              justify-content: center;

              transition: all 0.5s ease-out;

              &:hover {
                background-color: #fff;
                color: #006bb7;
              }
            }
          }
        }
      }
    }
  }

  #midiasSociais {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;

    a {
      text-decoration: none;
      margin-bottom: 50px;

      img {
        width: 190px;
      }
    }

    div {
      margin-bottom: 50px;
      margin-top: 5px;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 10px 0 5px 0;

      a {
        text-decoration: none;
        margin: 0.5em;

        svg {
          width: 1em;
          color: #006bb7;
          background-color: #fff;
          border: solid 2px #fff;
          border-radius: 50%;
          text-align: center;

          transition: all 0.3s ease;

          &:hover {
            color: #fff;
            background-color: #006bb7;
          }
        }
      }
    }
  }
`;
