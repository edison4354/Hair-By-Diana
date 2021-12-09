import React, {Component} from 'react'
import axios from 'axios';
import { 
  ResContainer,
  ResForm, 
  Label, 
  Input,
  Row,
  ResBox,
  Header,
  HeaderText,
  SumbitInput
} from './ReservationElements'

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      nameValue: '',
      phoneValue: '',
      dateValue: '',
      timeValue: '',
      serviceValue: '',
      descValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const makeReservation = {
      nameValue: this.state.nameValue,
      phoneValue: this.state.phoneValue,
      dateValue: this.state.dateValue,
      timeValue: this.state.timeValue,
      serviceValue: this.state.serviceValue,
      descValue: this.state.descValue,
    }

    console.log(makeReservation)
    axios
      .post('https://test-server-hair.herokuapp.com/api/appointment', makeReservation)
      .then(res => {
        if (res.data) {
          this.setState({
            nameValue: '',
            phoneValue: '',
            dateValue: '',
            timeValue: '',
            serviceValue: '',
            descValue: '',
          })
        }
      })

    alert(
      'A name was submitted: ' + this.state.nameValue +
      '\nA phone number was submitted: ' + this.state.phoneValue +
      '\nA date was submitted: ' + this.state.dateValue +
      '\nA time was submitted: ' + this.state.timeValue +
      '\nA service was submitted: ' + this.state.serviceValue +
      '\nA description was submitted: ' + this.state.descValue
      );
    event.preventDefault();
  }

  render() {
    return (
      <ResContainer>
        <ResBox>
          <Header> 
            <HeaderText>REQUEST AN APPOINTMENT</HeaderText> 
          </Header>
          <ResForm onSubmit={this.handleSubmit}>
            <Row>
              <Label>
                Name:
                <Input type="text" name="nameValue" value={this.state.nameValue} onChange={this.handleChange} />
              </Label>

              <Label>
                Phone:
                <Input type="tel" name="phoneValue" value={this.state.phoneValue} onChange={this.handleChange} />
              </Label>
            </Row>

            <Row>
              <Label>
                Date:
                <Input type="date" name="dateValue" value={this.state.dateValue} onChange={this.handleChange} />
              </Label>

              <Label>
                Time:
                <Input type="time" name="timeValue" value={this.state.timeValue} onChange={this.handleChange} />
              </Label>
            </Row>

            <Row>
              <Label>
                Service:
                <Input type="text" name="serviceValue" value={this.state.serviceValue} onChange={this.handleChange} />
              </Label>

              <Label>
                Description:
                <Input type="text" name="descValue" value={this.state.descValue} onChange={this.handleChange} />
              </Label>
            </Row>

            <SumbitInput type="submit" value="Submit" />
          </ResForm>
        </ResBox>
      </ResContainer>
    );
  }
}