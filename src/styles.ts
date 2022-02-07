import { COLOR } from "constant";
import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const lightTheme: DefaultTheme = {
  bgColor: COLOR.DARK_YELLOW,
  bgColor2: COLOR.YELLOW,
  fontColor: COLOR.BLACK,
  fontColor2: COLOR.DARK_ORANGE,
};

export const darkTheme: DefaultTheme = {
  bgColor: COLOR.BLACK,
  bgColor2: COLOR.DARK_ORANGE,
  fontColor: COLOR.DARK_YELLOW,
  fontColor2: COLOR.YELLOW,
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        background: ${({ theme }: { theme: DefaultTheme }) => theme.bgColor};
        color: ${({ theme }: { theme: DefaultTheme }) => theme.fontColor};
        
        transition: color, background 0.2s ease-in;

        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;
