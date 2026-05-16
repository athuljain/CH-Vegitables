import React, { useState } from 'react';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import CHImg3 from '../Assets/CHImg3.jpeg';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import ServicePage from './ServicePage';
import '../Styles/Home.css'; 

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselItems = [
    {
      title: "Welcome to CH Vegetables",
      text: "Freshness Delivered with Care!"
    },
    {
      title: "Choose CH Vegetables",
      text: "Your Partner in Freshness and Quality!"
    },
    {
      title: "At CH Vegetables",
      text: "We believe in fostering lasting relationships with our customers, suppliers, and communities."
    }
  ];

  const cardData = [
    {
      title: "At CH Vegetables",
      text: "We go beyond just selling vegetables – we’re here to support healthy lifestyles and sustainable practices for the betterment of our communities."
    },
    {
      title: "Experience Freshness",
      text: "Experience freshness and quality like never before with CH Vegetables – Where Trust Meets Freshness!"
    },
    {
      title: "10+ Years of Trust",
      text: "Choose CH Vegetables for unmatched quality, trust, and freshness – every single time!"
    }
  ];

  return (
    <div className="main-wrapper">
      {/* Hero Carousel Section */}
      <section className="carousel-section">
        <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel" fade>
          {carouselItems.map((item, idx) => (
            <Carousel.Item key={idx}>
              <div className="carousel-img-container">
                <img src={CHImg3} className="d-block w-100 carousel-img" alt={`Slide ${idx + 1}`} />
              </div>
              <Carousel.Caption className="custom-caption animate-fade-in">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Main Content Section */}
      <Container fluid className="content-container">
        
        {/* Features Cards Grid */}
        <section className="cards-section">
          <Row xs={1} md={3} className="g-4">
            {cardData.map((card, idx) => (
              <Col key={idx} className="animate-on-scroll">
                <Card className="custom-card h-100">
                  <div className="card-img-hover">
                    <Card.Img variant="top" src={CHImg3} />
                  </div>
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="custom-footer">
                    <small>Premium Quality Guaranteed</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Dynamic Nested Components */}
        <div className="sub-components-layout">
          <section className="section-wrapper"><AboutUs /></section>
          <section className="section-wrapper"><ServicePage /></section>
          <section className="section-wrapper"><Gallery /></section>
          <section className="section-wrapper"><ContactUs /></section>
        </div>

      </Container>
    </div>
  );
};

export default Home;