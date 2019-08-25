import React, { Component } from 'react'
import ItemDataService from '../../api/todo/ItemDataService.js'
import AuthenticationService from './AuthenticationService.js'

class MarketplaceComponent extends Component
{
   constructor(props)
   {
      super(props)
      this.state =
         {
            items: []
         }

      this.refreshTodos = this.refreshTodos.bind(this)

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

   render()
   {
      return (
         <div>
            <h1>Market Place</h1>
            {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
            <div className="container">
               <table className="table">
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        this.state.items.map(
                           item =>
                              <tr key={item.id}>
                                 <td>{item.itemName}</td>
                                 <td>{item.username}</td>
                                 <td>{item.price}</td>
                                 <td><button className="btn btn-success" onClick={() => this.updateitemClicked(item.id)}>Update</button></td>
                                 <td><button className="btn btn-warning" onClick={() => this.deleteitemClicked(item.id)}>Delete</button></td>
                              </tr>
                        )
                     }
                  </tbody>
               </table>
               <div className="row">
                  <button className="btn btn-success" onClick={this.additemClicked}>Add</button>
               </div>
            </div>
         </div>
      )
   }
}

export default MarketplaceComponent 