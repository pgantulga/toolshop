import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";


export const holder = style ({
    maxWidth: "150px",
    height: 'auto',
})

export const itemBox = style ({
    width: '270px',
    display: "flex",
    flexDirection: 'column',
    padding: "16px 0 8px 0",
    alignItems: "center",
    border: '1px solid ' + vars.colors.grey200,
    borderRadius: '8px'

})
export const productName = style({
    margin: '4px 0'
})
export const price = style ({
    color: vars.colors.warning
})
