export const headerColor = {
  default: {
    wrapperClass: "border-neutral-100",
    innerClass: "text-primary-800",
  },
  primary: {
    wrapperClass: "bg-primary-600 border-primary-700",
    innerClass: "text-primary-50",
  },
  danger: {
    wrapperClass: "bg-danger-600 border-danger-700",
    innerClass: "text-danger-50",
  },
  info: {
    wrapperClass: "bg-info-500 border-info-600",
    innerClass: "text-info-50",
  },
  success: {
    wrapperClass: "bg-success-500 border-success-600",
    innerClass: "text-success-50",
  },
  secondary: {
    wrapperClass: "bg-secondary-500 border-secondary-600",
    innerClass: "text-secondary-900",
  },
  warning: {
    wrapperClass: "bg-warning-500 border-warning-600",
    innerClass: "text-warning-900",
  },
  light: {
    wrapperClass: "bg-neutral-200 border-neutral-300",
    innerClass: "text-neutral-900",
  },
  dark: {
    wrapperClass: "bg-neutral-800 border-neutral-900",
    innerClass: "text-neutral-50",
  },
} as const;
