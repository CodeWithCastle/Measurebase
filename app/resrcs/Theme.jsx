// Contexts ------------------------------------------------------

const Typography = {
  fontFamily: {
    regular: '',
    medium: '',
    bold: '',
  },
  sizes: {
    h1: 32,
    h2: 28,
    h3: 24,
    title: 20,
    subTitle: 18,
    body: 16,
    bodySmall: 14,
    caption: 12,
  },
}

// Contexts ------------------------------------------------------

const Colors = {
  light: {
    dullText: 'grey',
    background: 'black',
  },

  dark: {
    dullText: 'grey',
    background: 'black',
  },
}

// Contexts ------------------------------------------------------

const Layout = {
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    sd: 16,
    lg: 24,
    xl: 32,
  },
  gap: {
    sm: 4,
    md: 8,
    lg: 12,
  },
  radius: {
    sm: 6,
    md: 10,
    lg: 16,
    pill: 999,
    circle: '50%',
  },
  elevation: {
    none: 0,
    low: 2,
    medium: 4,
    high: 6,
  },
  icons: {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
  },
  image: {
    corer: 8,
    padding: 16,
    avatar: 42,
    fab: 56,
  },
  button: {
    height: 48,
    width: 48,
    minHeight: 48,
    minWidth: 48,
    corner: {
      sm: 4,
      md: 8,
      lg: 12,
    },
  },
}

// Contexts ------------------------------------------------------

const Glass = {
  blur: 20,
  light: '',
  dark: '',
  borderLight: '',
  borderDark: '',
}

// Contexts -----------------------------------------------------

const Custom = {
  mainMenuBar: {
    h: 80,
    w: 0,
    icons: {
      h: 30,
      w: 30,
      stroke: 0.4,
    },
  },
}

// Theme Compilation =============================================

export const LightTheme = {
  mode: 'light',
  colors: Colors.light,
  typography: Typography,
  layout: Layout,
  custom: Custom,
  glass: Glass,
}

export const DarkTheme = {
  mode: 'dark',
  colors: Colors.dark,
  typography: Typography,
  layout: Layout,
  custom: Custom,
  glass: Glass,
}
