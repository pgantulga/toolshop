import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const image = style({
    maxWidth: "350px",
    height: 'auto',
})

export const imageContainer = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
})

export const price = style ({
    color: vars.colors.warning
})

export const actions = style({
    display: "flex",
    flexDirection: "row",
    justifyContent:"end"
})

export const button = style({
    margin: "0 16px 0 0"
})

