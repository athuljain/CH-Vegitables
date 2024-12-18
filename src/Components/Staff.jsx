import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap';
import { useContext } from 'react';
import { myContext } from '../Context';

const Staff = () => {

    const {staffData}=useContext(myContext)
  return (
    <Container fluid className="staff">
      <Row>
        <Col md={12}>
          {/* Paragraph content */}
          <p>
            Our dedicated staff is passionate about providing excellent service.
            They bring a wealth of experience and expertise to their roles, ensuring
            that you receive the best possible care. Meet our team below:
          </p>
        </Col>
      </Row>

      <Row>
        {staffData.map((staff, index) => (
          <Col key={index} md={4} className="staff-member">
            <Card>
              <CardImg variant="top" src={staff.Photo} alt={staff.Name + 'Photo'} />
              <CardBody>
                <CardTitle>{staff.Name}</CardTitle>
                <CardText>{staff.Role}</CardText>
                <CardText>{staff.ContactNum}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Staff;
