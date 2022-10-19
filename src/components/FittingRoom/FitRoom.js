import React from "react"
import FittingRoom from "../FittingRoom/Froom.css"
import ButtonFroom from "../discount/ButtonFroom"
import { Card } from "react-bootstrap"

function FitRoom() {
    return (
      <>
  
        <Container>
          <Row className="flex-nowrap">
            <Col md={6} sm={6} xs={6} align="left">
              <img className="nav-logo img-fluid" src={logo} />
            </Col>
            <Col md={6} sm={6} xs={6} className="contactLink" align="right">
              contact
            </Col>
          </Row>
        </Container>
  
        <Container className="px-4" style={{ paddingTop: "3%", maxHeight: '14rem' }}>
          <Row style={{ maxHeight: '15rem' }} >
            <Col >
  
              {/* first card */}
              <Card className="cards" style={{ width: '18rem' }}>
                <div style={{ height: '120px', textAlign: 'center' }}>
                  <Image src={talkie} style={{ objectFit: 'none', marginTop: '10px' }} alt="talkie" />
                </div>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
  
              {/* second card */}
              <Card className="cards" style={{ width: '18rem' }}>
                <div style={{ height: '120px', textAlign: 'center' }}>
                  <Image src={shield} style={{ objectFit: 'none', marginTop: '15px' }} alt="talkie" />
                </div>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
  
            <Col>
  
              {/* third card */}
              <Card className="cards" style={{ width: '18rem' }}>
                <div style={{ height: '120px', textAlign: 'center' }}>
                  <Image src={rabbit} style={{ objectFit: 'none', marginTop: '30px' }} alt="talkie" />
                </div>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
  
          </Row>
        </Container>
      </>
    )
  }

  export default FitRoom