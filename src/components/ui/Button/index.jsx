import { cva } from "class-variance-authority";
import mergeClass from "../../../utils";

export const ButtonVariants = cva("btn", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
      jelly: "jelly",
      white: "white",
      black: "black",
      gray: "gray",
      danger: "danger",
      background: "background",
      link: "link",
      green: "green",
    },
    border: {
      primary: "border-primary",
      secondary: "border-secondary",
      jelly: "border-jelly",
      white: "border-white",
      black: "border-black",
      gray: "border-gray",
      danger: "border-danger",
      background: "border-background",
      link: "border-link",
      russian: "border-russian",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      icon: "icon rounded-full text-center p-0",
    },
    align: {
      left: "text-start",
      start: "text-start",
      center: "text-center",
      right: "text-end",
      end: "text-end",
    },
    shadow: {
      true: "shadow",
    },
    rounded: {
      true: "rounded",
      false: "rounded-none",
      full: "rounded-full",
      md: "rounded-md",
      sm: "rounded-sm",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    align: "center",
    rounded: "md",
  },
});

export default function Button({
  children,
  variant,
  fullWidth,
  size,
  border,
  shadow,
  align,
  rounded,
  className = "",
  ...rest
}) {
  return (
    <button
      className={`${mergeClass(
        ButtonVariants({
          className,
          variant,
          size,
          fullWidth,
          align,
          border,
          shadow,
          rounded,
        })
      )} `}
      {...rest}
    >
      {children}
    </button>
  );
}
