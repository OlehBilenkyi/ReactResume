// src/components/Sidebar/Avatar/Avatar.tsx
import React, { useState } from "react";
import styles from "./Avatar.module.scss";
import Modal from "../../Modal/Modal";
import FotoAvatar from "../../../../public/avatar.jpg";

const Avatar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.photoWrapper}>
        <div
          className={styles.photoLink}
          onClick={openModal}
          role="button"
          tabIndex={0}
        >
          <img
            src={FotoAvatar}
            alt="User avatar"
            className={styles.photoImage}
            loading="lazy"
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img
          src={FotoAvatar}
          alt="User avatar enlarged"
          className={styles.modalImage}
        />
      </Modal>
    </>
  );
};

export default Avatar;
