import toast from 'react-hot-toast';

export default function onErrorMessage(errors) {
  Object.values(errors).forEach((item) => {
    toast.error(item.message);
  });
}
