import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container'

function Background () {
    return (
        <div>
        <Card className="bg-dark text-white">
            <Container style={{display: "flex"}}>
            <Card.Img style={{zIndex: "-1", width: "50%vw"}} src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="fruit and vegitables background"/>
                <Card.ImgOverlay>
                    <Card.Title>Order Groceries</Card.Title>
                    <Card.Text>From local stores</Card.Text>
                </Card.ImgOverlay>  
                </Container> 
        </Card>
        </div>
    )
}

export default Background;