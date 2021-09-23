import "styled-components";
// ----------------------------------
//
export const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
} as const;

// ----------------------------------
//

type AppTheme = typeof theme;

// ----------------------------------
//

declare module "styled-components" {
  interface DefaultTheme extends AppTheme {}
}
