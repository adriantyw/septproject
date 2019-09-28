import React, { Component } from 'react';
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import EventDataService from '../../api/todo/EventDataService.js'
import AuthenticationService from './AuthenticationService.js'
import Popup from "reactjs-popup";
import './calendar.css';

class CalendarComponent extends Component
{
    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
        eventDay: null,
        hasEvents: false,
        events: []
    }


    constructor(props)
    {
        super(props);
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


    weekdays = moment.weekdays();
    weekdaysShort = moment.weekdaysShort();
    months = moment.months();

    year = () =>
    {
        return this.state.dateContext.format("Y");
    }
    month = () =>
    {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () =>
    {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () =>
    {
        console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    }
    currentDay = () =>
    {
        return this.state.dateContext.format("D");
    }

    firstDayOfMonth = () =>
    {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
        return firstDay;
    }

    setMonth = (month) =>
    {
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        });
    }

    nextMonth = () =>
    {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();
    }

    prevMonth = () =>
    {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    }

    onSelectChange = (e, data) =>
    {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();

    }
    SelectList = (props) =>
    {
        let popup = props.data.map((data) =>
        {
            return (
                <div key={data}>
                    <a href="#" onClick={(e) => { this.onSelectChange(e, data) }}>
                        {data}
                    </a>
                </div>
            );
        });

        return (
            <div className="month-popup">
                {popup}
            </div>
        );
    }

    onChangeMonth = (e, month) =>
    {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        });
    }

    MonthNav = () =>
    {
        return (
            <span className="label-month"
                onClick={(e) => { this.onChangeMonth(e, this.month()) }}>
                {this.month()}
                {this.state.showMonthPopup &&
                    <this.SelectList data={this.months} />
                }
            </span>
        );
    }

    showYearEditor = () =>
    {
        this.setState({
            showYearNav: true
        });
    }

    setYear = (year) =>
    {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    }
    onYearChange = (e) =>
    {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }

    onKeyUpYear = (e) =>
    {
        if (e.which === 13 || e.which === 27)
        {
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    }

    YearNav = () =>
    {
        return (
            this.state.showYearNav ?
                <input
                    defaultValue={this.year()}
                    className="editor-year"
                    ref={(yearInput) => { this.yearInput = yearInput }}
                    onKeyUp={(e) => this.onKeyUpYear(e)}
                    onChange={(e) => this.onYearChange(e)}
                    type="number"
                    placeholder="year" />
                :
                <span
                    className="label-year"
                    onDoubleClick={(e) => { this.showYearEditor() }}>
                    {this.year()}
                </span>
        );
    }

    showEvents = (e, day) =>
    {
        this.setState({
            eventDay: day
        }, () =>
        {
            console.log("EVENTS DAY: ", this.state.eventDay);
        });

        this.props.showEvents && this.props.showEvents(e, day);
    }


    // sends event data to backend
    addEvent = (e, day) =>
    {
        this.setState({
            eventDay: day
        }, () =>
        {
            console.log("EVENTS DAY: ", this.state.eventDay);
        });

        this.props.showEvents && this.props.showEvents(e, day);
    }


    validate(values)
    {
        let errors = {}
        if (!values.description)
        {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5)
        {
            errors.description = 'Enter atleast 5 Characters in Description'
        }

        if (!moment(values.targetDate).isValid())
        {
            errors.targetDate = 'Enter a valid Target Date'
        }

        return errors

    }

    onSubmit(values)
    {
        let username = AuthenticationService.getLoggedInUserName()

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
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
        // Map the weekdays i.e Sun, Mon, Tue etc as <td>
        let weekdays = this.weekdaysShort.map((day) =>
        {
            return (
                <td key={day} className="week-day">{day}</td>
            )
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++)
        {
            blanks.push(<td key={i * 80} className="emptySlot">
                {""}
            </td>
            );
        }

        console.log("blanks: ", blanks);

        let daysInMonth = [];
        let eventDay = moment();
        for (let d = 1; d <= this.daysInMonth(); d++)
        {
            this.state.events.map(
                events =>
                    eventDay = moment(events.date).format("DD")
            )
            let className = (d == this.currentDay() ? "day current-day" : "day");
            let showEvents = (d == eventDay ? " selected-day " : "")
            daysInMonth.push(
                <td key={d} className={className + showEvents} >
                    <Popup
                        trigger={<span onClick={(e) => { this.showEvents(e, d) }}>{d}</span>
                        }
                        modal
                        closeOnDocumentClick
                    >
                        <span>
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol md="4">
                                        <form>
                                            <p className="h5 text-center mb-4">New Event</p>
                                            <div className="grey-text">
                                                <MDBInput
                                                    label="Event Name"
                                                    group
                                                    type="text"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                                <MDBInput
                                                    label="Description"
                                                    group
                                                    type="email"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <MDBBtn color="primary">Create</MDBBtn>
                                            </div>
                                        </form>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </span>
                    </Popup>
                </td>
            );
        }


        console.log("days: ", daysInMonth);

        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) =>
        {
            if ((i % 7) !== 0)
            {
                cells.push(row);
            } else
            {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1)
            {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElems = rows.map((d, i) =>
        {
            return (
                <tr key={i * 100}>
                    {d}
                </tr>
            );
        })

        return (
            <div>
                <div className="calendar-container">
                    <h1>Events</h1>
                    <table className="calendar">
                        <thead>
                            <tr className="calendar-header">
                                <td colSpan="5">
                                    <this.MonthNav />
                                    {" "}
                                    <this.YearNav />
                                </td>
                                <td colSpan="2" className="nav-month">
                                    <i className="prev fa fa-fw fa-chevron-left"
                                        onClick={(e) => { this.prevMonth() }}>
                                    </i>
                                    <i className="prev fa fa-fw fa-chevron-right"
                                        onClick={(e) => { this.nextMonth() }}>
                                    </i>

                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {weekdays}
                            </tr>
                            {trElems}
                        </tbody>
                    </table>
                </div>
                <div className="inlineblock">
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
                                            <td>{moment(events.date).format('YYYY-MM-DD')}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(events.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(events.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        );
    }
}

export default CalendarComponent