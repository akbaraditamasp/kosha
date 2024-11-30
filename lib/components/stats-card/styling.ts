export const colors = [
  "primary",
  "secondary",
  "info",
  "warning",
  "danger",
  "success",
  "light",
  "dark",
] as const;

export const colorsStyle: Record<(typeof colors)[number], string> = {
  danger: "from-danger-500 to-danger-600 text-danger-100",
  dark: "from-neutral-800 to-neutral-900 text-neutral-100",
  info: "from-info-500 to-info-600 text-info-100",
  light: "from-neutral-200 to-neutral-300 text-neutral-800",
  primary: "from-primary-600 to-primary-700 text-primary-100",
  secondary: "from-secondary-500 to-secondary-600 text-secondary-800",
  success: "from-success-500 to-success-600 text-success-100",
  warning: "from-warning-500 to-warning-600 text-warning-800",
};
