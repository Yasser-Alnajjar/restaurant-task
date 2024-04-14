import { cva } from 'class-variance-authority';
import mergeClass from '../../../utils';

export const ButtonVariants = cva('badge rounded-full', {
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
      link: 'link',
      yellow: 'yellow',
      success: 'success',
    },
  },
  defaultVariants: { variant: 'success' },
});

export default function Badge({ className, variant, ...rest }) {
  return (
    <span
      className={`${mergeClass(
        ButtonVariants({
          className,
          variant,
        }),
      )} `}
      {...rest}
    />
  );
}
