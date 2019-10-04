import React from 'react';
import './style.css'
import ItemDataService from '../../api/todo/ItemDataService.js'
import AuthenticationService from './AuthenticationService.js';

class PurchaseMarketPlaceItemComponent extends React.Component {

    constructor(props) {
        super(props)
        let username =  AuthenticationService.getLoggedInUserName();
        this.state = {
            id: this.props.match.params.id,
            
            itemName: "",
        }

        ItemDataService.retrieveItem(username, this.props.match.params.id)
        .then(
           response =>
           {
            this.setState({itemName:response.data.itemName});
            //console.log(response.data);
           }
        )

        this.submitForm=this.submitForm.bind(this)
        this.pushToMarket = this.pushToMarket.bind(this)

    }

    pushToMarket()
    {
       this.props.history.push(`/marketplace`);
    }
    
    submitForm() {
        console.log("submitform");
        let username =  AuthenticationService.getLoggedInUserName();
        ItemDataService.deleteItem(username, this.state.id).then(response=>
        {
                this.props.history.push(`/marketplace`);
        });

    }

    render() {
        return (
            <div class="page-header">
                <h2>Purchase Marketplace Item</h2>
                    <div className="container">
                    
                    <div>
                        Are you sure you want to purchase this item: {this.state.itemName}?
                    </div>
                    <div className="control-buttons">
                        <button className="btn btn-dark" onClick={(event) => this.submitForm()} value="Submit">Purchase</button>
                        <button className="btn btn-dark" onClick={()=>this.pushToMarket()} value="Cancel">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PurchaseMarketPlaceItemComponent;