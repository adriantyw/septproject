import React from 'react';
import './style.css';
import ItemDataService from '../../api/todo/ItemDataService.js';
import AuthenticationService from './AuthenticationService.js';

class AddMarketPlaceItemPanel extends React.Component {

    constructor(props)
    {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            username: AuthenticationService.getLoggedInUserName(),
        }

        this.submitForm = this.submitForm.bind(this)
        this.pushToMarket = this.pushToMarket.bind(this)
    }

    submitForm(values) 
    {
        console.log("submitform");

        let newItem = {
            id: this.state.id,
            itemName: "Hello",//values.itemName,
            username: this.state.username,
            price: 200//values.price
        }
        
        ItemDataService.createItem(this.state.username, newItem).then(response=>
            {
                    console.log("response.data");
                    this.props.history.push(`/marketplace`);
        });
    }

    pushToMarket()
    {
       this.props.history.push(`/marketplace`);
    }

    render() {
        return (
            <div class="page-header">
                <h2>Add Marketplace Item</h2>
                    <div className="container">
                        <form>
                            <div><label>
                                Item Name:
                                <input type="text" name="itemName"/>
                            </label></div>
                            <div><label>
                                Item Price:
                                <input type="integer" name="itemPrice"/>
                            </label></div>
                            <div className="control-buttons">
                                <button className="btn btn-dark" onClick={(event) => this.submitForm()} value="Submit">Add</button>
                                <button className="btn btn-dark" onClick={()=>this.pushToMarket()} value="Cancel">Cancel</button>
                            </div>
                        </form>
                </div>
            </div>
        );
    }
}

export default AddMarketPlaceItemPanel;