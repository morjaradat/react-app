import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from '../assets/data.json';
import CardColumns from 'react-bootstrap/CardColumns'
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }

  }

  render() {
    // console.log(this.state);
    return (
      <div> <CardColumns>
         {
        this.state.data.map(i => {
          return (
            <HornedBeasts title={i.title} alt={i.title} src={i.image_url} description={i.description} />
          )
        })
      }
        </CardColumns>
      </div>
    )
  }
};

export default Main;