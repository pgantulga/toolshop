import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const container = style({
    display: 'flex',
    flexDirection: 'column'
})

export const leadCard = style({
    margin: '16px 0',
    background: vars.colors.grey50,
    padding: '2rem',
    border: '1px solid ' + vars.colors.grey200,
    borderRadius: '8px'
})