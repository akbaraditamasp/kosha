export const basicColors = {
  primary: "bg-primary-600 text-white",
  danger: "bg-danger-600 text-white",
  info: "bg-info-500 text-white",
  success: "bg-success-500 text-white",
  dark: "bg-neutral-900 text-white",
  secondary: "bg-secondary-500 text-neutral-900",
  warning: "bg-warning-500 text-neutral-900",
} as const;

export const lightColors = {
  primary: "bg-primary-50 text-primary-700",
  danger: "bg-danger-50 text-danger-700",
  info: "bg-info-50 text-info-700",
  success: "bg-success-50 text-success-700",
  dark: "bg-neutral-200 text-neutral-900",
  secondary: "bg-secondary-100 text-secondary-800",
  warning: "bg-warning-100 text-warning-800",
} as const;

export const styling = {
  basic: {
    base: "rounded",
    colors: basicColors,
  },
  light: {
    base: "rounded",
    colors: lightColors,
  },
} as const;
