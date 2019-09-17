import React, { Component } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
>>>>>>> 137595f4ae2f3b580078062d68fdbb04aaad20e6
import ItemDataService from '../../api/todo/ItemDataService.js';

class MarketplaceComponent extends Component
{
   constructor(props)
   {
      super(props)
      this.state =
      {
            items: []
<<<<<<< HEAD
         }
=======
      }
>>>>>>> 137595f4ae2f3b580078062d68fdbb04aaad20e6
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

   pageRedirect()
   {
<<<<<<< HEAD
      //window.location = '/AddMarketPlaceItemPanel'
=======
         //window.location = '/AddMarketPlaceItemPanel'
>>>>>>> 137595f4ae2f3b580078062d68fdbb04aaad20e6
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
                                 <td><button className="btn btn-dark" onClick={() => this.updateitemClicked(item.id)}>Buy</button></td>
                              </tr>
                        )
                     }
                  </tbody>
               </table>
               <div className="row">
<<<<<<< HEAD
                  <Link to="/additempanel">
                     <button className="btn btn-dark">Add Item</button>
                  </Link>
=======
                  <button className="btn btn-dark" onClick={this.pageRedirect()}>Add Item</button>
>>>>>>> 137595f4ae2f3b580078062d68fdbb04aaad20e6
               </div>
            </div>
         </div>
      )
   }
}

export default MarketplaceComponent 