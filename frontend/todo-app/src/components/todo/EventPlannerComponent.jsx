import React, { Component } from 'react'
import EventDataService from '../../api/todo/EventDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class EventPlannerComponent extends Component
{
    constructor(props)
    {
        console.log('constructor')
        super(props)
        this.state = {
            events: [],
        }
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentWillUnmount()
    {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
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
        EventDataService.retrieveAllEvents(username)
            .then(
                response =>
                {
                    //console.log(response);
                    this.setState({ events: response.data })
                }
            )
    }

    // deleteTodoClicked(id)
    // {
    //     let username = AuthenticationService.getLoggedInUserName()
    //     //console.log(id + " " + username);
    //     EventDataService.deleteTodo(EvretrieveAllEventsame, id)
    //         .then(
    //             response =>
    //             {
    //                 this.setState({ message: `Delete of events ${id} Successful` })
    //                 this.refreshTodos()
    //             }
    //         )

    // }

    addTodoClicked()
    {
        this.props.history.push(`/eventss/-1`)
    }

    updateTodoClicked(id)
    {
        console.log('update ' + id)
        this.props.history.push(`/eventss/${id}`)
        // /eventss/${id}
        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id + " " + username);
        //     EventDataService.deleteTodo(EvretrieveAllEventsame, id)
        //  .then (
        //      response => {
        //         this.setState({message : `Delete of events ${id} Successful`})
        //         this.refreshTodos()
        //      }
        //  )

    }

    render()
    {
        console.log('render')
        return (
            <div>
                <h1>Event Planner</h1>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.events.map(
                                    events =>
                                        <tr key={events.id}>
                                            <td>{events.username}</td>
                                            <td>{events.title}</td>
                                            <td>{moment(events.targetDate).format('YYYY-MM-DD')}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(events.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(events.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventPlannerComponent