/* eslint-disable */
import { IoClose } from 'react-icons/io5';
import { cva } from 'class-variance-authority';
import mergeClass from '../../../utils';
import { memo } from 'react';

const ContentModalVariants = cva('modal-content', {
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
    },
    size: {
      sm: 'w-3',
      md: 'w-4',
      lg: 'w-6',
    },
    fullWidth: {
      true: 'w-full',
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
  },
  defaultVariants: {
    size: 'lg',
    rounded: 'lg',
    variant: 'white',
  },
});

function Modal({
  open,
  setOpenModel,
  actions,
  title,
  size,
  variant,
  fullWidth,
  children,
}) {
  function closeModal() {
    setOpenModel(false);
  }
  return (
    <div className={`modal ${open ? 'show' : 'hide'}`}>
      <div className="modal-overlay" onClick={closeModal} />
      <div
        className={`${mergeClass(ContentModalVariants({ size, fullWidth }))}`}
      >
        <div className="modal-header">
          <h4>{title}</h4>
          <button className="close-btn" onClick={closeModal}>
            <IoClose />
          </button>
        </div>
        <div className="modal-text"> {children}</div>
        <div className="btn-group mt-2 gap-4">{actions}</div>
      </div>
    </div>
  );
}
export default memo(Modal);
