import React, { useRef, useState, useEffect, useCallback } from "react";

import styled from "styled-components";
import { MdClose } from "react-icons/md";
import EpisodesContainer from "./EpisodesContainer";
import VideoPlayer from "./VideoPlayer";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(29, 27, 27, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  padding-top: 5%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
`;

const ModalWrapper = styled.div`
  width: 80%;
  /* height: 60%; */
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: var(--mainBlack);
  color: var(--justWhite);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  border-radius: 5px;
  overflow: auto;

  /* .example::-webkit-scrollbar {
    display: none;
} */
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #000;
`;

const SeasonBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex - start;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.8;
  color: var(--justWhite);
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #c4c0c0;
    color: #000000;
    border: none;
    margin-right: 5px;
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

export const ModalWindow = ({
  showModal,
  setShowModal,
  select,
  openVideo,
  showVideo,
  epNumber,
  closeVideo,
}) => {
  console.log("render ModalWindow");
  const modalRef = useRef();

  const [selectedSeason, setSelectedSeason] = useState(
    select ? select.seasons[0] : null
  );

  useEffect(() => {
    setSelectedSeason(select ? select.seasons[0] : null);
  }, [select]);

  // console.log( "select", select );

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
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [showModal, setShowModal]
  );

  // const seasons = select.seasons.map( ( item ) => {
  //   return <h2>{ item.title }</h2>
  // } )

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          {showVideo ? (
            <VideoPlayer epNumber={epNumber} closeVideo={closeVideo} />
          ) : null}
          {/* <animated.div style={animation}> */}
          <ModalWrapper showModal={showModal}>
            <ModalImg
              src={
                select
                  ? `https://image.tmdb.org/t/p/original${select.image}`
                  : ""
              }
              alt="movie"
            />
            <ModalContent>
              <button>Play</button>
              <h1>{select.title}</h1>
              <p>{select.overview}</p>
              {/* Seasons */}
              <SeasonBtnContainer>
                {" "}
                {select.seasons.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className="seasonBtn"
                      onClick={() => setSelectedSeason(item)}
                    >{`Season ${index + 1}`}</button>
                  );
                })}
              </SeasonBtnContainer>

              <h2>Episodes</h2>
              <EpisodesContainer
                openVideo={openVideo}
                selectedSeason={selectedSeason}
              />
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal(false)}
            />
          </ModalWrapper>
          {/* </animated.div> */}
        </Background>
      ) : null}
    </>
  );
};
