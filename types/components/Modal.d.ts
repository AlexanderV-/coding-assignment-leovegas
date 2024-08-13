import React, { ReactNode } from "react";
import "../styles/modal.scss";
interface ModalProps {
    children: ReactNode;
    isVisible?: boolean;
    onClose?: () => void;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
