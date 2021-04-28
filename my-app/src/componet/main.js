import React from 'react';
import HornedBeasts from './HornedBeasts';
// import data from '../assets/data.json';
import CardColumns from 'react-bootstrap/CardColumns'
// import SelectedBeast from './SelectedBeast';

class Main extends React.Component {

  render() {
console.log(this.props);
    return (
      <div> 
        <CardColumns>
        {
          this.props.data.map(i => {
            return (
              <HornedBeasts viewbeast={this.props.viewbeast} title={i.title} alt={i.title} src={i.image_url} description={i.description} />
            )
          })
        }

      </CardColumns>
      </div>
    )
  }
};

export default Main;