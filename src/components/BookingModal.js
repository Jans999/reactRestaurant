import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import styled from 'styled-components'

// Validators
const required = (val) => val && val.length;
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



export default class BookingModal extends React.Component {

  constructor() {
    super();
    this.state = {
      modalOpen: false,
      tableId: "",
    }
  }

  // Add validators

  handleChange = (e) => { this.setState({[e.target.name]: e.target.value})   }

  // handleUpdate(form) { ... }

  handleSubmit = (values) => {

    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    this.toggle();

    // this.setState({tableId: this.props.id})
    // console.log("submit working")
    // console.log(values) 
    // this.toggle()
  }

  // Bridging tasks
  // Get validation working
  // Get passing of table ID working



  toggle = () => this.setState(prevstate => ({modalOpen: !prevstate.modalOpen}));

  render() {


    return (
      <div>
      <Button color="danger" onClick={this.toggle}>Book</Button>

        <Modal isOpen={this.state.modalOpen} toggle={this.stoggle} className="">
        <LocalForm
        // onUpdate={(form) => this.handleUpdate(form)}
        onSubmit={(values) => this.handleSubmit(values)}
      >

          <ModalHeader toggle={this.toggle}>Book table {this.props.id}</ModalHeader>
          <ModalBody>
          <BookingForm>

          <div className="field">
            <label htmlFor="firstname">First Name:</label>
            <Control.text 
              model=".firstName"
              id="firstName"
              name="firstName"
              className="form-control"
              validators={{
                required 
            }} />
             <Errors
                className="text-danger"
                model=".firstName"
                show="touched"
                messages={{
                    required: 'Required'
              }} />
          </div>

          <div className="field">
            <label>Last Name:</label>
            <Control.text
              className="form-control"
              onChange={(e) => this.handleChange(e)} model=".lastName" 
              validators={{
                required 
            }}
              />
              <Errors
                className="text-danger"
                model=".lastName"
                show="touched"
                messages={{
                    required: 'Required'
              }} />
          </div>

          <div className="field">
            <label>Email:</label>
            <Control.text 
              onChange={(e) => this.handleChange(e)} 
              model=".emailAddress" 
              type="email" 
              className="form-control"
              validators={{
                validEmail
            }}
              />
            <Errors
                className="text-danger"
                model=".emailAddress"
                show="touched"
                messages={{
                    validEmail: 'Please enter a valid email address'
              }} />
          </div>

          <div className="field">
            <label>Date:</label>
            <Control.text 
            onChange={(e) => this.handleChange(e)}
             model=".date" 
             type="date" 
             validators={{
                required
            }}
             />
              <Errors
                className="text-danger"
                model=".date"
                show="touched"
                messages={{
                    required: 'Required'
              }} />
          </div>

          <div className="field">
            <label>Time:</label>
            <Control.select model=".time" 
            onChange={(e) => this.handleChange(e)}
            validators={{
              required
            }}>
              <option value="17:00">5pm</option>
              <option value="18.00">6pm</option>
              <option value="19.00">7pm</option>
              <option value="20.00">8pm</option>
            </Control.select>
            <Errors
                className="text-danger"
                model=".time"
                show="touched"
                messages={{
                    required: 'Required'
              }} />
          </div>

          
         
          <div className="field">
            <label>Notes:</label>
            <Control.textarea onChange={(e) => this.handleChange(e)} model=".notes" />
          </div>
          </BookingForm>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>

      </LocalForm>
      </Modal>

      </div>
    );
  }
}

const BookingForm = styled.div`
  .field input,
  .field textarea,
  .field select {
    width: 100%;
    padding: 0.3em;
  }

  .field textarea {
    padding: 2em 0.3em;
  }

`