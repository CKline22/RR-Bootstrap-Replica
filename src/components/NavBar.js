// imports
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


function NavBar () {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container style={{display: "flex", justifyContent: "space-between"}}>
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" alt="instacart logo" /> 
    </Navbar.Brand>
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }}>
            <Nav.Link style={{color: "#343538", margin: "0 2px 0 2px"}} href="#LogIn">Log In</Nav.Link>
            <Button variant="success" style={{fontSize: "18px", margin: "0 2px 0 2px"}}>Sign Up</Button>{' '}
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar;
