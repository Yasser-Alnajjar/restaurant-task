import toast from 'react-hot-toast';

export default function ToastErrorMessage(errors, isMoreTow) {
  if (isMoreTow) {
    Object.values(errors).forEach((item) => {
      toast.error(item);
    });
  } else {
    Object.values(errors).forEach((item) => {
      toast.error(item);
    });
  }
}
