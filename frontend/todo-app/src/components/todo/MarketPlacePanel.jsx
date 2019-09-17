import React, { Component } from 'react';
import ItemDataService from '../../api/todo/ItemDataService.js';

class MarketPlacePanel extends Component
{
    constructor(props)
   {
      super(props)
      this.state =
      {
            items: []
      }
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
    render()
    {
        return(
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
        );
    }
}

export default MarketPlacePanel;