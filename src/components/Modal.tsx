import React, { ReactNode } from "react";
import "../styles/modal.scss";

interface ModalProps {
  children: ReactNode;
  isVisible?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  isVisible = false,
  ...props
}) => {
  const onStopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (isVisible) {
    return (
      <div
        className={`modal-overlay ${isVisible ? "open" : ""}`}
        onClick={onClose}
        {...props}
      >
        <div
          className={`modal-content ${isVisible ? "open" : ""}`}
          onClick={onStopPropagation}
        >
          {children}
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;
