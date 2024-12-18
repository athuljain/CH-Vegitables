import React from 'react';
import { Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap';
import CHAboutImg from '../Assets/CHImg3.jpeg';
//  import CHBackground1 from '../Assets/CHBackground.jpg';

const AboutUs = () => {
  const images = [
    { src: require('../Assets/CHImg2.jpg'), alt: 'Image 1' },
    { src: require('../Assets/CHImg1.jpg'), alt: 'Image 2' },
    { src: require('../Assets/CHImg3.jpeg'), alt: 'Image 3' },
    { src: require('../Assets/CHImg1.jpg'), alt: 'Image 2' },
    // { src: require('../Assets/CHImg1.jpg'), alt: 'Image 2' },
    // Add more image objects as needed
  ];


  const imageStyle = {
    width: '250px', // Adjust width as desired
    height: '250px', // Adjust height as desired
    objectFit: 'cover', // Ensures image fills card area while maintaining aspect ratio
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    margin: '20px', // Adds margin around the card
   
    // justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Container fluid className="about-us">
    {/* <Container fluid className="about-us" style={backgroundImageStyle}> */}
      <Row>
        <Col md={6} className="about-us-text">
          <h1>About Us</h1>
          <p>
          At CH Vegetables, we take pride in over a decade of experience delivering the freshest, highest-quality vegetables to our valued customers. With 10+ years in the wholesale and retail vegetable industry, we have built a strong reputation for excellence and reliability.
          </p>
        </Col>
        <Col md={6} className="about-us-image">
          <Image src={CHAboutImg} alt="Company Image" fluid />
        </Col>
      </Row>

      <Row className="image-list">
        <CardGroup>
          {images.map((image, index) => (
            <Col key={index} md={3}>
              <Card style={cardStyle}>
                <Card.Img variant="top" style={imageStyle} src={image.src} alt={image.alt} />
              </Card>
            </Col>
          ))}
        </CardGroup>
      </Row>
    </Container>
  );
};

export default AboutUs;
