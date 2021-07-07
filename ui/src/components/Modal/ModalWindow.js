import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 80vw;
    height: 100%:
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 15
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 60%;
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
  const modalRef = useRef();

  // const animation = useSpring({
  //   config: {
  //     duration: 250,
  //   },
  //   opacity: showModal ? 1 : 0,
  //   transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  // });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        showModal(false);
      }
    }
    // [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          {/* <animated.div style={animation}> */}
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
          {/* </animated.div> */}
        </Background>
      ) : null}
    </>
  );
};
