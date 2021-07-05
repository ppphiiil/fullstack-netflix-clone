import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalWindow } from './ModalWindow';

const Container = styled.div`
    display: flex,
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 1rem 2rem;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export default function ModalR() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <Container>
        <Button onClick={openModal}>I'm a modal</Button>
        <ModalWindow showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </div>
  );
}
