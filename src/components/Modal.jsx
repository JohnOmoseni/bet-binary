import ReactDOM from "react-dom";

const modal = document.getElementById("modal-root");

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="w-full p-4 absolute inset-0 z-[999] bg-black bg-opacity-30 grid items-center overflow-hidden transition">
      <div className="relative bg-white rounded-md py-8 px-4 shadow-md min-w-[30em] max-w-full">
        {children}
      </div>
    </div>,
    modal
  );
}

export default Modal;
