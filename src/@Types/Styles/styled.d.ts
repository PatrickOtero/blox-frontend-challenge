import "styled-components";
import { blackTheme } from "../../Styles/themes/blackTheme";
import { defaultTheme } from "../../Styles/themes/default";

type ThemeType = typeof defaultTheme | blackTheme;

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
}