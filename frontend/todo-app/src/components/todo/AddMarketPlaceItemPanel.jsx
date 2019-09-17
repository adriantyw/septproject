import React from 'react';
import './style.css';

class AddMarketPlaceItemPanel extends React.Component {

    submitForm() {

        

    }

    render() {
        return (
            <div className='addItemPopUp'>
                <div>
                    <h1>{this.props.text}</h1>
                    
                    <form>
                        <label>
                            Item Name:
                            <input type="text" name="itemName"/>
                        </label>
                        <label>
                            Username:
                            <input type="text" name="username"/>
                        </label>
                        <label>
                            Item Price:
                            <input type="integer" name="itemPrice"/>
                        </label>
                        <input type="submit" value="Submit" onclick={this.submitForm()}/>
                    </form>
                    {/*<button onClick={this.props.closePop}>Add Item</button>*/}
                </div>
            </div>
        );
    }
}

export default AddMarketPlaceItemPanel;