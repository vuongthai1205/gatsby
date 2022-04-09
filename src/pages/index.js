import * as React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "../components/Slider";
import AcordionC from "../components/AcordionC";
import FormC from "../components/FormC";
import { Container } from "react-bootstrap";
import TabC from "../components/TabC";
import CardsC from "../components/CardsC";

// styles

// markup
const IndexPage = () => {
  return (
    <Container>
      <title >Home Page</title>
      <Header/>
      <Slider/>
      <AcordionC/>
      <FormC/>
      <TabC/>
      <CardsC/>
      <Footer/>
    </Container>
  )
}

export default IndexPage
