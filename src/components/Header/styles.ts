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
      text-decoration: none;
      border-bottom: 1px solid;
      padding: 0.15em 0.1em;
      transition: all 0.1s ease;

      &:hover {
        color: #006bb7;
        border-bottom: 1px solid #006bb7;
        opacity: 1;
      }
    }
  }

  .linksInstitucionais {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-block-start: 1em;
    margin-block-end: 1em;
    padding: 0px 60px;

    #linkCasas {
      font-weight: 300;

      a {
        font-family: MuseoSans, Arial, sans-serif;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        padding: 0px 10px;
        color: #5b5b5b;
        opacity: 0.8;

        transition: 0.2s;

        &:hover {
          color: #006bb7;
          opacity: 1;
        }
      }
    }

    #bannerSenai {
      a {
        text-decoration: none;
        img {
          width: 200px;
        }
      }
    }

    #linksMidias {
      #redes {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;

        a {
          text-decoration: none;
          color: #006bb7;
          font-size: 18px;
          min-height: 30px;
          padding: 0 8px;
        }
      }

      #internos {
        padding: 5px 0 5px 0;
        margin: 0;
        font-weight: 300;

        display: flex;
        align-items: center;
        justify-content: flex-end;

        a {
          color: #5b5b5b;
          text-decoration: none;
          font-family: MuseoSans, Arial, sans-serif;
          line-height: 1.4em;
          font-weight: bold;

          margin-left: 1.3em;

          transition: 0.2s;

          &:hover {
            color: #006bb7;
            opacity: 1;
          }
        }
      }
    }
  }

  #linkSobre {
    font-size: 16px;
    line-height: 1.4;
    font-family: MuseoSans, Arial, sans-serif;
    font-weight: 300;

    max-height: 40em;
    background-color: #006bb7;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 44px;

    a {
      text-decoration: none;
      color: rgb(236, 236, 236);
      font-weight: 700;
      font-size: 10.4px;
      padding: 0 1em;

      height: 100%;

      display: flex;
      align-items: center;

      transition: 0.2s;

      &:hover {
        background-color: #219ce1;
      }
    }
  }
`;
