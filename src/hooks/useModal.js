import { useState, useCallback } from 'react';

export const useModal = (initialState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialState);

  const toggleOpenModal = useCallback(
    () => setIsModalOpen((prevState) => !prevState),
    []
  );

  return {
    isModalOpen,
    toggleOpenModal,
  };
};
