import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componet/header';
import Main from './componet/main';
import Footer from './componet/footer';
import data from './assets/data.json';
import SelectedBeast from '../src/componet/SelectedBeast';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      data:data,
      show : false,
      details :{},
    }
  }
  viewbeast =(view) =>{
    this.setState({
      show : true,
      details : view,
      
    })
    console.log(view)
  };
  handleClose=() =>{
    this.setState({
      show : false,
      details : {},

  })
}

render(){
  return ( 
  <div>
<Header/>
<SelectedBeast   handleClose={this.handleClose} 
 show={this.state.show} 
  details={this.state.details} />

<Main data ={this.state.data} viewbeast={this.viewbeast} />

<Footer/>

  </div>
  )
};
}

export default App;