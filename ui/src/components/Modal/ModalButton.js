import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalWindow } from './ModalWindow';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const Button = styled.button`
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;

  cursor: pointer;
`;

export default function ModalButton( props ) {

  //console.log( props.openModal );
  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal((prev) => !prev);
  // };

  const handleClick = () => {
    props.openModal();
    props.selectItem( props.data )
    console.log( "CLICKKKKKKK the ModalButton" );
    // console.log( "props.data", props.data );

  }

  return (
    <div>
      <Container>
        {/* <img src={ props.data.image } alt="" width="240" /> */ }

        {/* {props.data.img} */ }

        <Button onClick={ handleClick }>
          <i class="fa-2x  fas fa-info-circle" />
        </Button>

        {/* <div className="VideoItem-detail-container">
          <div className="VideoItem-icon-container">
            <div>
              <i class=" fa-2x fas fa-play-circle" />
              <i class=" fa-2x far fa-arrow-alt-circle-up" />
              <i class=" fa-2x far fa-arrow-alt-circle-down" />
            </div>
          
          </div>
          <div className="VideoItem-details">
            <div
              className="VideoItem-detail-season"
              style={ { color: '#808080' } }
            >
              <p style={ { color: '#46d369' } }>98% match</p>
              <div className="VideoItem-detail-season">
                <p>12 Seasons</p>
                <p>16</p> <p>2017</p>
              </div>
            </div>
            <p className="VideoItem-detail-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              enim sdfsfs fd sdfsdfs df
            </p>
            <p className="VideoItem-detail-genre">Test - Test -Test</p>
          </div>
        </div> */}
        {/* <ModalWindow showModal={showModal} setShowModal={setShowModal} /> */ }
      </Container>
    </div>
  );
}
