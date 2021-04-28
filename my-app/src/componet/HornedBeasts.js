import React from 'react';
import Card from 'react-bootstrap/Card'


class HornedBeasts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfPats: 0,

    }

  }
  increaseNumberOfPats = () => {
  
     this.setState({ numberOfPats: this.state.numberOfPats + 1 });
    //  console.log(this.props);
     this.props.viewbeast(this.props);
     
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" 
            onClick={this.increaseNumberOfPats}  src={this.props.src} alt={this.props.title} title={this.props.title} />
          <Card.Body >
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              {this.state.numberOfPats}
            </Card.Text>
          </Card.Body>
        </Card>
        
      </div>
    )
  };
}


export default HornedBeasts;