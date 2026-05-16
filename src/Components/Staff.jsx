// 

import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { myContext } from '../Context';
import '../Styles/Staff.css';

const Staff = () => {
  const { staffData } = useContext(myContext);

  // Safety fallback to prevent component crashes if context data is loading or empty
  const activeStaff = staffData || [];

  return (
    <section className="staff-section-wrapper">
      <Container>
        {/* Section Typography Branding Header */}
        <header className="staff-main-header text-center">
          <span className="staff-badge">OUR EXPERTS</span>
          <h2 className="staff-main-title">Meet Our Dedicated Team</h2>
          <div className="staff-gold-line"></div>
          <p className="staff-subtitle">
            Our dedicated staff is passionate about providing excellent service. They bring a wealth of 
            experience and expertise to their roles, ensuring that you receive the highest standard of care.
          </p>
        </header>

        {/* Staff Members Profile Cards Matrix */}
        <Row xs={1} sm={2} lg={3} className="g-4 justify-content-center">
          {activeStaff.map((staff, index) => (
            <Col key={index}>
              <Card className="premium-staff-card h-100">
                {/* Profile Image Wrapper */}
                <div className="staff-avatar-container">
                  <Card.Img 
                    variant="top" 
                    src={staff.Photo} 
                    alt={`${staff.Name || 'Staff Member'} Profile`} 
                    className="staff-profile-img"
                  />
                  <div className="avatar-glass-overlay"></div>
                </div>
                
                {/* Profile Details Enclosure */}
                <Card.Body className="staff-card-body text-center">
                  <Card.Title className="staff-member-name">{staff.Name}</Card.Title>
                  <div className="staff-role-badge">{staff.Role}</div>
                  {staff.ContactNum && (
                    <Card.Text className="staff-member-contact">
                      <span className="phone-icon-accent">📞</span> {staff.ContactNum}
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Staff;