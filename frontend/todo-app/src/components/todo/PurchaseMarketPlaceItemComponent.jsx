import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'
import ItemDataService from '../../api/todo/ItemDataService.js'
import './MarketPlace.css';

class PurchaseMarketPlaceItemComponent extends React.Component {

    submitForm() {

        

    }

    cancelForm() {

        

    }

    render() {
        return (
            <div class="page-header">
                <h2>Purchase Marketplace Item</h2>
                    <div className="container">
                    
                    <div>
                        Are you sure you want to purchase this item?
                    </div>
                    <div className="control-buttons">
                        <Link className="nav-link" to="/"><button className="btn btn-dark" onclick={this.submitForm()} value="Submit">Purchase</button></Link>
                        <Link className="nav-link" to="/marketplace"><button className="btn btn-dark" value="Cancel">Cancel</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default PurchaseMarketPlaceItemComponent;