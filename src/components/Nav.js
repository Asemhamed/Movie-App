import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image from '../download__1_-removebg-preview.png';
import { Link } from 'react-router-dom';

const Nav = ({ getSearch }) => {
    
    const onSearch = (word)=>{
        getSearch(word);
    }
  return (
    <div className="nav-style w-100" >
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href='/'>
              <img className="logo" src={image} />
            </a>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="fa fa-search"></i>
              <input
                type="text"
                placeholder="ابحث"
                className="form-control"
                onChange={(e) => {
                  onSearch(e.target.value);
                }}
              ></input>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nav