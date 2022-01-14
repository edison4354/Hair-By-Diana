import React, { Component } from 'react'
import AppointmentDetails from './ServiceDetail'
import {
  ResContainer,
  Context,
  SideTitle,
  SideText,
  Footer,
} from './ReservationElements'

function Reservation() {
  return (
    <ResContainer>
      <Context>
        <SideTitle>
          <SideText>Select service</SideText>
          <SideText>Select staff</SideText>
          <SideText>Select date and time</SideText>
          <SideText>Enter your details</SideText>
        </SideTitle>
        <AppointmentDetails/>
      </Context>
      <Footer>
        
      </Footer>
    </ResContainer>
  )
}

export default Reservation;