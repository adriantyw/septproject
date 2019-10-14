import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ItemDataService from '../../api/todo/ItemDataService.js';

class MarketplaceComponent extends Component
{
   constructor(props)
   {
      super(props)
      this.state =
      {
            items: []
      }
      this.onSubmit = this.onSubmit.bind(this)
   }

   componentDidMount()
   {
      console.log('componentDidMount')
      this.refreshItems();
      console.log(this.state)
   }

   refreshItems()
   {
      ItemDataService.retrieveAllItems()
         .then(
            response =>
            {
               //console.log(response);
               this.setState({ items: response.data })
            }
         )
   }

   onSubmit(id)
   {
      this.props.history.push(`buyitempanel/${id}`);
   }
   
   

   render()
   {
      return (
         <div class="page-header">
            <h2>Marketplace</h2>
            <div className="container">
               <table className="table">
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Price</th>
                        <th>Buy</th>
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
                                 <td><button className="btn btn-dark" onClick={() => this.onSubmit(item.id)}>Buy</button></td>
                              </tr>
                        )
                     }
                  </tbody>
               </table>
               <div className="row">
                  <Link to="/additempanel">
                     <button className="btn btn-dark">Add Item</button>
                  </Link>
               </div>
            </div>
         </div>
      )
   }
}

export default MarketplaceComponent 