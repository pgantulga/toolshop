import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const hero= style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignContent: "center",
    height: '300px',
    overflow: 'hidden'

})
export const image = style({
    position: 'absolute',
    width: '100%',
})
export const content = style({
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    position: 'absolute',
    background: 'rgba(0,0,0,0.5)',
    color: vars.colors.white,
    width: '100%',
    top: '0',
   height: '100%',
   overflow: 'hidden'
})

export const heroButton = style({
    backgroundColor: vars.colors.primary,
    border: 'none',
    borderRadius: '4px',
    color: vars.colors.white,
    paddingRight: '8px',
    paddingLeft: '8px',
})

export const link = style({
    textDecoration: 'none',
    color: 'white'
})

export const btnFlat = style({
    color: 'blue'
})