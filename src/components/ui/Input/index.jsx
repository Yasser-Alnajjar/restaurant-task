import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import mergeClass from '../../../utils';

export const ButtonVariants = cva('control', {
  variants: {
    variant: {
      primary: 'primary',
      secondary: 'secondary',
      jelly: 'jelly',
      white: 'white',
      black: 'black',
      gray: 'gray',
      danger: 'danger',
      background: 'background',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      icon: 'icon rounded-full text-center p-0',
    },
    align: {
      left: 'text-start',
      start: 'text-start',
      center: 'text-center',
      right: 'text-end',
      end: 'text-end',
    },

    rounded: {
      true: 'rounded',
      false: 'rounded-none',
      full: 'rounded-full',
      md: 'rounded-md',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
    },
    fullWidth: {
      true: 'w-full',
    },
    border: {
      primary: 'border-primary',
      secondary: 'border-secondary',
      jelly: 'border-jelly',
      white: 'border-white',
      black: 'border-black',
      gray: 'border-gray',
      danger: 'border-danger',
      background: 'border-background',
    },
  },
  defaultVariants: { variant: 'link', rounded: 'md' },
});

export default forwardRef(function Input(
  {
    type = 'text',
    placeholder,
    className,
    variant,
    size,
    align,
    rounded,
    border,
    fullWidth,
    ...rest
  },
  ref,
) {
  return (
    <input
      ref={ref}
      className={`${mergeClass(
        ButtonVariants({
          className,
          variant,
          size,
          align,
          rounded,
          border,
          fullWidth,
        }),
      )} `}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
});
