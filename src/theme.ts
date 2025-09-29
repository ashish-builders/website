'use client';
import { createTheme, lighten } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    gradient: string;
    quaternary: {
      light: string;
      main: string;
    };
    quinary: {
      main: string;
    };
    senary: {
      main: string;
    };
    septenary: {
      contrastText: string;
      dark: string;
      light: string;
      main: string;
    };
    tertiary: {
      contrastText: string;
      dark: string;
      light: string;
      main: string;
    };
  }
  interface Palette {
    gradient: string;
    quaternary: {
      light: string;
      main: string;
    };
    quinary: {
      main: string;
    };
    senary: {
      main: string;
    };
    septenary: {
      contrastText: string;
      dark: string;
      light: string;
      main: string;
    };
    tertiary: {
      contrastText: string;
      dark: string;
      light: string;
      main: string;
    };
  }
  interface TypographyVariants {
    fontWeightSemibold: number;
  }
  interface TypographyVariantsOptions {
    fontWeightSemibold?: number;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    quaternary: true;
    quinary: true;
    senary: true;
    septenary: true;
    tertiary: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    quaternary: true;
    quinary: true;
    senary: true;
    septenary: true;
    tertiary: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    quaternary: true;
    quinary: true;
    senary: true;
    septenary: true;
    tertiary: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    quaternary: true;
    quinary: true;
    senary: true;
    septenary: true;
    tertiary: true;
  }
}

declare module '@mui/material/Pagination' {
  interface PaginationPropsColorOverrides {
    quaternary: true;
    quinary: true;
    senary: true;
    septenary: true;
    tertiary: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    quaternary: true;
    quinary: true;
    senary: true;
    septenary: true;
    tertiary: true;
  }
}

const darkSeptenary = '#030711';
const septenaryMain = '#7c3bed';
const septenaryLight = lighten(septenaryMain, 0.6);

const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1270,
      md: 900,
      sm: 600,
      xl: 1536,
      xs: 0,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {},
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  palette: {
    gradient: 'linear-gradient(90deg, #F8EEBC 0%, #CA9E3F 100%)',
    mode: 'light',
    quaternary: {
      contrastText: '#ffffff',
      light: '#ecd48c',
      main: '#a88343',
    },
    quinary: {
      main: '#4d543d',
    },
    senary: {
      main: '#8a4548',
    },
    septenary: {
      contrastText: '#ffffff',
      dark: darkSeptenary,
      light: septenaryLight,
      main: septenaryMain,
    },
    tertiary: {
      contrastText: '#ffffff',
      dark: '#7f0000',
      light: '#e57373',
      main: '#b5171b',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'var(--font-primary)',
    fontWeightSemibold: 600,
  },
});

export default theme;
