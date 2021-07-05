import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import VideoItem from '../VideoSlider/VideoItem';
import Button from 'react-bootstrap/button';

export default class Modal extends Component {
  render() {
    return (
      <ModalContainer>
        <div className="container">
          <div className="row">
            <div id="modal" className="item">
              <h3>Movie Name</h3>
              <img src={this.props.videoLink} alt="Video" />
              <h5 className="video-title">
                <Link to="/">
                  <Button></Button>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </ModalContainer>
    );
  }
}
