import React from 'react';
import './style.css';
import ItemDataService from '../../api/todo/ItemDataService.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AuthenticationService from './AuthenticationService.js'

class AddMarketPlaceItemPanel extends React.Component {
  
    constructor(props)
    {
        super(props)

        this.state = {
            itemName: '',
            price: 0
        }

        this.submitForm = this.submitForm.bind(this)
        this.pushToMarket = this.pushToMarket.bind(this)
    }

    submitForm(values) 
    {
        let username = AuthenticationService.getLoggedInUserName();

        let marketItem = 
        {
            itemName: values.itemName,
            price: values.price,
        }

        ItemDataService.createItem(username, marketItem)
        .then(() => this.props.history.push('/marketplace'))
    }

    pushToMarket()
    {
       this.props.history.push('/marketplace');
    }

    
    render() {
        let { itemName, price } = this.state

        return (
            <div class="page-header">
                <h2>Add Marketplace Item</h2>
                    <div className="container">
                        <Formik
                                    initialValues={{ itemName, price }}
                                    onSubmit={this.submitForm}
                                    onReset={this.pushToMarket}
                                    validateOnChange={false}
                                    validateOnBlur={false}
                                    enableReinitialize={true}
                        >
                            {
                                (props) => (
                                    <Form>
                                        <div>
                                            <fieldset className="form-group">
                                                <label>Item Name:</label>
                                                <Field className="form-control" type="text" name="itemName" />
                                            </fieldset>
                                        </div>

                                        <div>
                                            <fieldset className="form-group">
                                                <label>Item Price:</label>
                                                <Field className="form-control" type="number" step="0.01" name="price" />
                                            </fieldset>
                                        </div>
                                        <button className="btn btn-dark" type="Submit">Add</button>
                                        <button className="btn btn-dark" type="Reset">Cancel</button>
                                    </Form>
                                )
                            }
                        </Formik>
                </div>
            </div>
        );
    }
}

export default AddMarketPlaceItemPanel;