import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Col, Row } from 'react-bootstrap';

const Banner = () => {
    return(
        <>
        <Navbar fixed="top" expand="lg">
            <Container>
            <h2>Lorri Lanig</h2>
            </Container>
            <Container>
                
                <Nav.Link href="">
                    <img src="src/images/avpsm7w6e.webp" width="50" className="d-inline-block-align-top"/>
                </Nav.Link>
                <Nav.Link href="">
                    <img src="src/images/25231.png" width="50" className="d-inline-block-align-top"/>
                </Nav.Link>
            </Container>
        </Navbar>
        </>
    )
}

export default Banner; 