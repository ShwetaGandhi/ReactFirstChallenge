import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './data.js';
//import Description from './description.js';
// import '/../images';
  
class ProductList extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      products: []
    }
    this.showComponents = this.showComponents.bind( this ); 
  }

  showComponents = (smh) => { 
    alert('wohoo');
  };
  render(){
    const products = window.Data.eyewear.map((eyewear) => (

      <Product
      id = {eyewear.id}
      brand = {eyewear.brand}
      desc = {eyewear.description}
      images =  {eyewear.images}
      sizes = {eyewear.sizes}
      />
    ));
   return (
     <div className = "parent">
    <div>
    {/* {this.state.showComponent ?<Description/> : null} */}
    <Description showComponents={this.showComponents}/>
    </div>
      <div className ="container">
      <h1>Eyewear products </h1>
      {products}
      </div>
      </div>
    );
  }
}

class Product extends React.Component {
  constructor(props){
    super( props );
    this.state = {
      showComponent: false
  };
  // this.handleClick = this.handleClick.bind( this ); 

  }
  handleClick = () => {
    this.setState ({
      showComponent: true
    });
    this.props.showComponents(true);

}
  render() {
    const sizeforGlass = this.props.sizes.map((s,index) => (
        <Visualsize indiSize = {s} key={index} />
        ));
     const ProductImage = Object.keys(this.props.images).map((i) => (
      <ProdImage src={this.props.images[i]} />
    ));

    return (
      <div className ="container" onClick={this.handleClick}>
      <div className="row">
        
            <div className='col-md-12' >
            {this.props.desc}
            <div className='col-md-12'>
            {this.props.brand}      
            {sizeforGlass}
            {ProductImage}
            <hr />
            </div>
            </div>
            
            </div>

      </div>
    );
  }
}

class Description extends React.Component {
  render(){
    return(
    <div>Buy Now</div>
  );
}
}

class Visualsize extends React.Component {
  render(){
    return(
      <div>{this.props.indiSize}</div>
    )
  }
}
class ProdImage extends React.Component {
  render(){
    return(
      <img src = {this.props.src} alt='product img'/>
    )
  }
}


  // ========================================
  
  ReactDOM.render(
    <ProductList />,
    document.getElementById('root')
  );