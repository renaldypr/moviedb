import React, { useEffect, useState, useRef } from "react"
import ReactDOM from "react-dom"
import styles from '../../styles/Modal.module.css'

export default function  Modal({ show, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false)
  const modalWrapperRef = useRef()

  const backDropHandler = e => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      onClose();
    }
  }

  useEffect(() => {
    setIsBrowser(true)

    // window.addEventListener('click', backDropHandler)
    // return () => window.removeEventListener('click', backDropHandler)
  }, [])

  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null
  }
};
