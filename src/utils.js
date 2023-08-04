import { toast } from 'react-toastify';
import { errorNotifyOptions, succesNotifyOptions } from 'notification';

export const handleNotification = (text, type) => {
  if (type === 'success') return toast.success(text, succesNotifyOptions);
  toast.error(text, errorNotifyOptions);
};
