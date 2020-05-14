import React from 'react';
import connect from "react-redux/es/connect/connect";
import './product-material.css'


const ProductMaterial = ({ product }) => {

    let material

    switch(product.material){
        case 'cotton':
            material = <div className="material-icon" data-tooltip="cotton"><img className="material-icon-img" src='../images/materials/cotton.svg'></img></div>
            break
        case 'jute':
            material = <div className="material-icon" data-tooltip="jute"><img className="material-icon-img" src='../images/materials/jute.svg'></img></div>
            break
        case 'silk':
            material = <div className="material-icon" data-tooltip="silk"><img className="material-icon-img" src='../images/materials/silk.svg'></img></div>
            break
        case 'wool':
            material = <div className="material-icon" data-tooltip="wool"><img className="material-icon-img" src='../images/materials/wool.svg'></img></div>
            break
        case 'ramie':
            material = <div className="material-icon" data-tooltip="ramie"><img className="material-icon-img" src='../images/materials/ramie.svg'></img></div>
            break
        case 'recycled':
            material = <div className="material-icon" data-tooltip="recycled"><img className="material-icon-img" src='../images/materials/recycled.svg'></img></div>
            break      
    }

    return(
        <div>
            {material}
        </div>
    )
}  


const mapStateToProps = ({ productsList: { product } }) => ({ product });
  
export default connect(mapStateToProps)(ProductMaterial);
