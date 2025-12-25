import { createPortal } from 'react-dom'
import { useImperativeHandle, useRef, forwardRef } from 'react'

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      }
    }
  });

  return createPortal(
    <dialog ref={dialogRef}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.querySelector('#modal-root')
  );
});

export default Modal;
