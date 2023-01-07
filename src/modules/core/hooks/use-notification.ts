import { toast, ToastOptions } from 'react-toastify'
import { useTheme } from '..'

type StatusProps = 'error' | 'warning' | 'success' | 'info' | 'default' | undefined

export const useNotification = () => {
  const { isLight } = useTheme()

  const options: ToastOptions = {
    autoClose: 3400,
    closeButton: true,
    draggable: true,
    position: 'top-center',
    hideProgressBar: true,
    theme: isLight ? 'light' : 'dark'
  }

  const setNotification = (message: string, status: StatusProps = 'error') => {
    switch (status) {
      case 'error':
        toast.error(message, options)
        break
      case 'success':
        toast.success(message, options)
        break
      case 'info':
        toast.info(message, options)
        break
      case 'warning':
        toast.warning(message, options)
        break
      case 'default':
        toast(message, options)
        break
      default:
        toast(message, options)
    }
  }

  return { setNotification }
}
