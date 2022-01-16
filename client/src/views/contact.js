import React from 'react';
import { Link } from "react-router-dom";
import SalonModel from '../assets/salon_model.png';
import RightLeaf from '../assets/right_leaf.png';
import LeftLeaf from '../assets/left_leaf.png';
import {
  Container,
  BackgroundImageTopLeft,
  BackgroundImageBottomRight,
  BackgroundImageTopRight,
  H1,
  BookButton,
} from './Stlyes';

function Home() {
  return (
    <Container>
      <BackgroundImageTopRight src={RightLeaf} alt="Right Leaf"/>
      <BackgroundImageTopLeft src={LeftLeaf} alt="Left Leaf"/>
      <BackgroundImageBottomRight src={SalonModel} alt="Salon Model"/>
      <H1>
        Hair Stylist Based in Monterey
      </H1>
      <Link to="/book">
        <BookButton>
          Book Now
        </BookButton>
      </Link>
    </Container>
  );
}

export default Home;