import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import { cloneElement, createContext, useContext, useState } from "react";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

//1. Create context
const ModalContext = createContext();

//2. Create parent component
function Modal({ children }) {
  const [openName, setOpenName] = useState();

  const close = () => setOpenName("");
  const open = setOpenName;

  //Closing on overlay click
  const closeModalOnOverlayClick = (e) => {
    const targetElement = e.target;

    if (targetElement === e.currentTarget) close();
  };

  return (
    <ModalContext.Provider
      value={{ openName, close, open, closeModalOnOverlayClick }}
    >
      {children}
    </ModalContext.Provider>
  );
}

//3. create child components

function Window({ children, name }) {
  const { openName, close, closeModalOnOverlayClick } =
    useContext(ModalContext);
  if (name !== openName) return null;
  return createPortal(
    <Overlay onClick={closeModalOnOverlayClick}>
      <StyledModal>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: () => close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  // we use cloneElement to add a custom function to children component
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Close({ children }) {
  const { close } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => close });
}

Modal.Open = Open;
Modal.Close = Close;
Modal.Window = Window;

export default Modal;
