import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class selectedBeast extends React.Component{

render(){
  console.log(this.props);
    return(
      // 
        <Modal show={this.props.show} onHide={this.props.handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>{this.props.details.title}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Card.Img variant="top"  
            src={this.props.details.src} 
            alt={this.props.details.title} 
            title={this.props.details.title} />
    <p>{this.props.details.description}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={this.props.handleClose} variant="secondary">Close</Button>

  </Modal.Footer>
</Modal>
    )
}
}


export default selectedBeast;