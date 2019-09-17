import React from 'react';
import './style.css';

class AddMarketPlaceItemPanel extends React.Component {

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
                            Item Description:
                            <input type="text" name="itemDescription"/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>



                    {/*<button onClick={this.props.closePop}>Add Item</button>*/}
                </div>
            </div>
        );
    }
}

export default AddMarketPlaceItemPanel;