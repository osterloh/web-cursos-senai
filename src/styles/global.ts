import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        color: #5B5B5B;
    }
    body, input, button {
        font: 16px MuseoSans,Arial,sans-serif;
    }
    #root {
        margin: 0 auto;
    }
    button {
        cursor: pointer;
    }
`;
