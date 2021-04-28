import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componet/header';
import Main from './componet/main';
import Footer from './componet/footer';
import data from './assets/data.json';
import SelectedBeast from '../src/componet/SelectedBeast';
import Form from 'react-bootstrap/Form'
let dataArr2=[];
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
    // console.log(view)
  };
  handleClose=() =>{
    this.setState({
      show : false,
      details : {},

  })
}

reset = () =>{
    this.setState ({data:data})
  }

update=(event)=>{
  dataArr2=[];

  // console.log(dataArr2);

this.state.data.filter(i =>{

if (Number(event.target.value) === i.horns){ 
   dataArr2.push(i);
  //  console.log('work');
} else if(event.target.value === 'Choose Numbers of Horns'){
  dataArr2.push(i);
  // console.log('reset');
}
  return dataArr2;
})
//  console.log(dataArr2);
//  console.log(this.state.data);
 this.setState ({data:dataArr2});
//  console.log(this.state.data);
}
render(){
  
  // console.log(dataArr);
  // console.log(this.state.data);
  return ( 
  <div>
<Header/>
<Form>
<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Numbers of Horns</Form.Label>
    <Form.Control onChange={this.update} onInput ={this.reset} as="select">
      <option>Choose Numbers of Horns</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>100</option>
    </Form.Control>
    </Form.Group>
    </Form>
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