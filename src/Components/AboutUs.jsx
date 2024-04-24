import React from 'react';
import { Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap';
import CHAboutImg from '../Assets/CHImg3.jpeg';

const AboutUs = () => {
  const images = [
    { src: require('../Assets/CHImg2.jpg'), alt: 'Image 1' },
    { src: require('../Assets/CHImg1.jpg'), alt: 'Image 2' },
    { src: require('../Assets/CHImg3.jpeg'), alt: 'Image 3' },
    { src: require('../Assets/CHImg1.jpg'), alt: 'Image 2' },
    { src: require('../Assets/CHImg1.jpg'), alt: 'Image 2' },
    // Add more image objects as needed
  ];

  const imageStyle = {
    width: '350px', // Adjust width as desired
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
      <Row>
        <Col md={6} className="about-us-text">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat magna eget eros euismod, vitae semper magna tincidunt. Donec euismod bibendum laoreet. Integer posuere erat a ante pulvinar, eget laoreet sapien consectetur. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque lorem quam, vehicula velit eu, vehicula rutrum libero. Fusce eget dolor lorem. Maecenas pretium tellus eget risus fringilla tincidunt. Curabitur aliquet quam id dui posuere blandit.
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
