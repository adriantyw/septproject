import React from 'react';
import './style.css';

class AddMarketPlaceItemPanel extends React.Component {

<<<<<<< HEAD
=======
    submitForm() {

        

    }

>>>>>>> 137595f4ae2f3b580078062d68fdbb04aaad20e6
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
<<<<<<< HEAD
                            Item Description:
                            <input type="text" name="itemDescription"/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>



=======
                            Username:
                            <input type="text" name="username"/>
                        </label>
                        <label>
                            Item Price:
                            <input type="integer" name="itemPrice"/>
                        </label>
                        <input type="submit" value="Submit" onclick={this.submitForm()}/>
                    </form>
>>>>>>> 137595f4ae2f3b580078062d68fdbb04aaad20e6
                    {/*<button onClick={this.props.closePop}>Add Item</button>*/}
                </div>
            </div>
        );
    }
}

export default AddMarketPlaceItemPanel;