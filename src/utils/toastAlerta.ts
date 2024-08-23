import { toast } from 'react-toastify';

export function toastAlerta(mensagem: string, tipo: string) {
  const toastId = mensagem;

  if (!toast.isActive(toastId)) {
    switch (tipo) {
      case 'sucesso':
        toast.success(mensagem, {
          toastId,
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
        });
        break;

      case 'info':
        toast.info(mensagem, {
          toastId,
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
        });
        break;

      case 'erro':
        toast.error(mensagem, {
          toastId,
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
        });
        break;

      default:
        toast.info(mensagem, {
          toastId,
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined,
        });
        break;
    }
  }
}