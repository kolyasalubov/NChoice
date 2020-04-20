import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product-list-item.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StarsRating from '../star-rating';

function ProductListItem({ title, id, images, price, mrsp, currency, currencyIcon, rate }) {

    const [priceWithRate, setPriceWithRate] = useState();
    const [msrpWithRate, setMsrpWithRate] = useState();

    useEffect(() => {
        setPriceWithRate(Math.floor(price * currency));
        setMsrpWithRate(Math.floor(mrsp * currency));
    }, [currency, price, mrsp]);
console.log(currencyIcon)
    return (
        <div className="wrapper" id="wrapper" key={id} >
            <div className="productCard" id="productCard"><img id="productImg" alt={`${images}`} src={`/images/products/${images}`} />
                <Link id="productLink"key={id} to={`/products/${id}`}>
                    <div className="info" id={id}>
                        <StarsRating rating={rate} />
                        <p className="productName" id="productName">{title}</p>
                        <div className="bottomElements" id="bottomElements">
                            <div className="cardPrice"id="realPrice">{`${priceWithRate} ${currencyIcon}`}</div>
                            <div className="cardPrice msrp-price" id="msrpPrice">{`${msrpWithRate} ${currencyIcon}`}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

const mapStateToProps = ({ productsList: { currency, currencyIcon } }) => ({ currency, currencyIcon });

export default connect(mapStateToProps)(ProductListItem);
