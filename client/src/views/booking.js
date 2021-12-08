import React from "react";
import { Link } from "react-router-dom";
import Reservation from "../components/Reservation"
import {
  Container,
} from './Stlyes';

function Booking() {
  return(
    <Container style={{'backgroundColor' : 'white'}}>
      <Reservation/>
    </Container>
  );
}

export default Booking;