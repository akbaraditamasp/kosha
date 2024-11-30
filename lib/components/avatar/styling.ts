export const sizes = ["sm", "base", "lg", "xl"] as const;
export const statuses = [
  "primary",
  "secondary",
  "info",
  "warning",
  "danger",
  "success",
  "light",
  "dark",
] as const;

export const statusColor: Record<(typeof statuses)[number], string> = {
  danger: "bg-danger-500",
  dark: "bg-neutral-800",
  info: "bg-info-500",
  light: "bg-neutral-200",
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
};

export const sizing: Record<(typeof sizes)[number], string> = {
  sm: "w-8 h-8 text-base",
  base: "w-10 h-10 text-lg",
  lg: "w-12 h-12 text-2xl",
  xl: "w-16 h-16 text-4xl",
};
