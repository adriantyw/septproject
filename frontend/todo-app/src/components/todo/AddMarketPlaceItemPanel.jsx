import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class AddMarketPlaceItemPanel extends React.Component {

    submitForm() {

        

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
                                Username:
                                <input type="text" name="username"/>
                            </label></div>
                            <div><label>
                                Item Price:
                                <input type="integer" name="itemPrice"/>
                            </label></div>
                            {/*<div><input type="submit" value="Submit" onclick={this.submitForm()}/></div>*/}
                            <Link className="nav-link" to="/"><button className="btn btn-dark" onclick={this.submitForm()} value="Submit">Add</button></Link>
                            <Link className="nav-link" to="/marketplace"><button className="btn btn-dark" value="Cancel">Cancel</button></Link>
                        </form>
                </div>
            </div>
        );
    }
}

export default AddMarketPlaceItemPanel;