import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components'

// Components
import BookingModal from './BookingModal'


export default class TableBooking extends Component {
    render() {
        return (
            <div className="content text-center">
                <h1 className="text-center my-3">Book a table</h1>
                <Container className="text-center">
                    <Row className="text-center mx-auto">
                        <Col md="4" className="py-2" id="1"><Table>1 <BookingModal id="1" /></Table></Col>
                        <Col md="4" className="py-2" id="2"><Table>2 <BookingModal id="2" /></Table></Col>
                        <Col md="4" className="py-2" id="3"><Table>3 <BookingModal id="3" /></Table></Col>
                        <Col md="4" className="py-2" id="4"><Table>4 <BookingModal id="4" /></Table></Col>
                        <Col md="4" className="py-2" id="5"><Table>5 <BookingModal id="5" /></Table></Col>
                        <Col md="4" className="py-2" id="6"><Table>6 <BookingModal id="6" /></Table></Col>
                        <Col md="4" className="py-2" id="7"><Table>7 <BookingModal id="7" /></Table></Col>
                        <Col md="4" className="py-2" id="8"><Table>8 <BookingModal id="8" /></Table></Col>
                        <Col md="4" className="py-2" id="9"><Table>9 <BookingModal id="9" /></Table></Col>

                    </Row>
                </Container>
            </div>
        )
    }
}


const Table = styled.div`
  border: 2px solid black;
  border-radius: 3px;
  color: grey;
  text-align: center;
  padding: 2em 0em;
  /* margin: 1em 0.5em; */
  width: 100%;
  &:hover {
      background-color: blue;
      color: white;
      /* cursor: pointer; */
  }
  `