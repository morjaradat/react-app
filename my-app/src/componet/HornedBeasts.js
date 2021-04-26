import React from 'react';

class HornedBeasts extends React.Component{
    render(){
        // console.log(this.props)
        return(
<section>
<h2>{this.props.title}</h2>
  <img src ={this.props.imgUrl} alt={this.props.title} title={this.props.title}/>
  <p>{this.props.description}</p>

</section>
        )
    };
}



export default HornedBeasts;