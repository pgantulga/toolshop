import { globalStyle } from '@vanilla-extract/css';
import { vars } from "./themes.css";

// Box-sizing rules
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box"
})

// Remove default margin
globalStyle("body, h1, h2, h3, h4, p, figure, blockquote, dl, dd", {
  margin: '0',
})
globalStyle("a", {
  textDecoration: 'none !important',
  color: vars.colors.primary+ '!important'
  
})
// Set core root defaults
globalStyle("html:focus-within", {
  scrollBehavior: "smooth"
})

// Set core body defaults
globalStyle("body", {
  minHeight: "100vh",
  textRendering: "optimizeSpeed",
  lineHeight: 1.5
  // ...
});

// Set core anchor settings
globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

// Make images easier to work with
globalStyle("img, picture", {
//   width: "100%",
//   display: "block"
});

// Inherit fonts for inputs and buttons
globalStyle("input, button, textarea, select", {
  font: "inherit"
})

// globalStyle()

