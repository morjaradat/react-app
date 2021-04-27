import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class HornedBeasts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfPats: 0,

    }

  }
  increaseNumberOfPats = () => {
    this.setState({ numberOfPats: this.state.numberOfPats + 1 })
  }
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.src} alt={this.props.title} title={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              {this.state.numberOfPats}
            </Card.Text>
            <Button onClick={this.increaseNumberOfPats} variant="primary">Click to incrase the number</Button>
          </Card.Body>
        </Card>
      </div>
    )
  };
}
// //--
// {/* <h2>{this.props.title}</h2>
// <p>{this.props.description}</p>
// <p>{this.state.numberOfPats}</p>
// <img onClick={this.increaseNumberOfPats} src={this.props.src} alt={this.props.title} title={this.props.title} /> */}
// //

export default HornedBeasts;