import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 100%;
    height: 100%:
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
  width: 95%;
  height: 95%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: var(--mainBlack);
  color: var(--justWhite);
  display: flex;
  position: relative;
  z-index: 10;
  border-radius: 5px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const ModalWindow = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalImg
              src="https://images.cgames.de/images/gamestar/227/the-witcher-serie_6084849.jpg"
              alt="movie"
            />
            <ModalContent>
              <h1>the movie name</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                animi sed laboriosam nesciunt perferendis earum suscipit
                exercitationem adipisci eveniet ipsam?
              </p>
              <button>Play</button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
