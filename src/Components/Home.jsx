import React, { useState } from 'react';
import CHImg3 from '../Assets/CHImg3.jpeg';
// import ChLogo from '../Assets/CHLogo.jpeg'
import { Carousel } from 'react-bootstrap';
import '../Styles/Home.css'; 

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import ContactUs from './ContactUs';

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div className='main-div'>
        <div className='carousel-div'>
          <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
            <Carousel.Item>
              <img src={CHImg3} className="d-block w-100" alt="First slide" />
              <Carousel.Caption>
                <h3 style={{color:"green"}}>Welcome to CH Vegetables</h3>
                <p style={{color:"green"}} >Freshness Delivered with Care!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={CHImg3} className="d-block w-100" alt="Second slide" />
              <Carousel.Caption>
                <h3 style={{color:"green"}}>Choose CH Vegetables</h3>
                <p style={{color:"green"}}>Your Partner in Freshness and Quality!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={CHImg3} className="d-block w-100" alt="Third slide" />
              <Carousel.Caption>
                <h3 style={{color:"green"}}>At CH Vegetables</h3>
                <p style={{color:"green"}}>we believe in fostering lasting relationships with our customers, suppliers, and communities.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        
        <div className='subDiv'>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src={CHImg3} />
        <Card.Body>
          <Card.Title>At CH Vegetables</Card.Title>
          <Card.Text>
          we go beyond just selling vegetables – we’re here to support healthy lifestyles and sustainable practices for the betterment of our communities.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={CHImg3} />
        <Card.Body>
          <Card.Title>Experience freshness and quality</Card.Title>
          <Card.Text>
          Experience freshness and quality like never before with CH Vegetables – Where Trust Meets Freshness!{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={CHImg3} />
        <Card.Body>
          <Card.Title>CH Vegetables<br />10+ Years of Freshness You Can Trust!</Card.Title>
          <Card.Text>
          Choose CH Vegetables for unmatched quality, trust, and freshness – every time!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>


<div>
  <br></br>
  <AboutUs />
  <br></br>
  <Gallery />

  <br></br>
  <ContactUs />
  
</div>



        </div>
      </div>
    );
}

export default Home;
