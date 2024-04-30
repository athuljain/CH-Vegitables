import React, { useContext, useState } from 'react';
import { Container, Row, Col, Carousel, Card, CardImg, CardGroup } from 'react-bootstrap';
import { myContext } from '../Context';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { galleryImages } = useContext(myContext);
  console.log(galleryImages); // For debugging

  const handleSelect = (selectedIndex, event) => {
    setCurrentIndex(selectedIndex);
  };
  const carouselStyle = {

    height: '500px', // Adjust height as needed
  };
  
  return (
    <Container fluid className="gallery">
      {/* Carousel at the top */}
      <Row>
        <Col md={12}>
          <Carousel activeIndex={currentIndex} onSelect={handleSelect}   style={carouselStyle}>
            {galleryImages.slice(0, 3).map((image, index) => (
                 
              <Carousel.Item key={index}>
                
                <img
                  className="d-block w-100"
                  src={image.Photo} 
                
                  alt={image.Name || 'Gallery Image'}
                  
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* Image mapping at the bottom */}
      <Row className="image-list">
        <CardGroup>
          {galleryImages.map((image, index) => (
            <Col key={index} md={3}>
              <Card>
               
                <CardImg variant="top" src={image.Photo} alt={image.Name + 'Photo'} />
              </Card>
            </Col>
          ))}
        </CardGroup>
      </Row>
    </Container>
  );
};

export default Gallery;
