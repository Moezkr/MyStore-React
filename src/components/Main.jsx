import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Main() {
  return (
    <main className="main-content">
      <h1 className="products-title">Featured Products</h1>
      <div className='card-container'>
        <Card className="product-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/products/pc.png" alt="ROG Gaming PC" />
          <Card.Body>
            <Card.Title>ROG Gaming PC</Card.Title>
            <Card.Text>
              4,500.00 DT
            </Card.Text>
            <Button variant="warning">Add to cart</Button>
          </Card.Body>
        </Card>
        <Card className="product-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/products/ps5.png" alt="PS5 Gold Edition" />
          <Card.Body>
            <Card.Title>PS5 Gold Edition</Card.Title>
            <Card.Text>
              2,200.00 DT
            </Card.Text>
            <Button variant="warning">Add to cart</Button>
          </Card.Body>
        </Card>
        <Card className="product-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/products/xbox.png" alt="Xbox Series X Gold" />
          <Card.Body>
            <Card.Title>Xbox Series X Gold</Card.Title>
            <Card.Text>
              2,100.00 DT
            </Card.Text>
            <Button variant="warning">Add to cart</Button>
          </Card.Body>
        </Card>
        <Card className="product-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/products/rog ally.png" alt="ASUS ROG Ally" />
          <Card.Body>
            <Card.Title>ASUS ROG Ally</Card.Title>
            <Card.Text>
              2,400.00 DT
            </Card.Text>
            <Button variant="warning">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
    </main>
  );
}

export default Main;
