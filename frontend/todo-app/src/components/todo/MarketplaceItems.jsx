import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ItemDataService from '../../api/todo/ItemDataService.js'
import AuthenticationService from './AuthenticationService.js'

class TodoComponent extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            username: '',
            price: 0,
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount()
    {
        console.log('componentDidMount')
        this.refreshTodos();
        console.log(this.state)
    }

    refreshTodos()
    {
        let username = AuthenticationService.getLoggedInUserName()
        ItemDataService.retrieveAllItems()
            .then(
                response =>
                {
                    //console.log(response);
                    this.setState({ items: response.data })
                }
            )
    }


    onSubmit(values)
    {
        let username = AuthenticationService.getLoggedInUserName()

        let items = {
            id: this.state.id,
            itemName: values.itemName,
            userName: values.userName
        }

        if (this.state.id === -1)
        {
            TodoDataService.createTodo(username, todo)
                .then(() => this.props.history.push('/todos'))
        } else
        {
            TodoDataService.updateTodo(username, this.state.id, todo)
                .then(() => this.props.history.push('/todos'))
        }

        console.log(values);
    }

    render()
    {

        let { description, targetDate } = this.state
        //let targetDate = this.state.targetDate

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{ description, targetDate }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>User Name</label>
                                        <Field className="form-control" type="text" name="username" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Price</label>
                                        <Field className="form-control" type="int" name="price" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default TodoComponent