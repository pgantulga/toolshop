import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";


export const navbar  = style ({
    fontFamily: vars.fonts.body,
    flexDirection: "column",
    paddingBottom: "0 !important"
})

export const brand = style ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

})

export const logo = style({
    width: 120
})
export const topbar = style({
    paddingBottom: "16",
    height: "100"
})

export const nav = style({
    backgroundColor: vars.colors.primary,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
})

export const navLink = style({
    color: 'white !important',
    fontSize: vars.fontSizes["3x"],
    textTransform: "uppercase",
    transition: "0.2s ease-in",
    ":hover": {
      color: vars.colors.accent
    }
  })