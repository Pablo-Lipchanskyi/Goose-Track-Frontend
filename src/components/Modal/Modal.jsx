import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import clsx from 'clsx';

import scss from './Modal.module.scss';
import { MdClose } from 'react-icons/md';

/**
 *
 * @parentElementComponents
 * import { useToggle } from 'hooks/useToggle';
 *  const {isOpen, onOpen,onClose} = useToggle();
 *
 * Example
 * <button type='button' onClick={onOpen}>Open Modal</button>
 *
 * { isOpen &&
 * <BasicModal onClose={onClose}>
 * <h2>Modal title</h2>
 * <p>Modal content goes here</p>
 * <button type='submit' onClick={onClose}>DONE</button>
 * </BasicModal>}
 */

const Modal = ({ onClose, children }) => {
  const theme = localStorage.getItem('theme') || 'lightTheme';

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose && onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };
  const handleClose = e => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };

  return createPortal(
    <div className={clsx(scss.modalBox, theme)}>
      <div
        className={clsx(scss.modalOverlay, theme)}
        onClick={handleClickBackdrop}
      ></div>
      <div className={clsx(scss.modalBody, theme)}>
        <button onClick={handleClose} className={clsx(scss.closeButton, theme)}>
          <MdClose className={clsx(scss.closeButtonIcon, theme)} />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
