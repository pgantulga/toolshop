import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
export const subHeaderContainer = style({
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '16px 0'
})

export const separator = style({
    display: "block",
    height: '0.3rem',
    width: '2rem',
    borderRadius: '0.5rem',
    backgroundColor: vars.colors.primary
})