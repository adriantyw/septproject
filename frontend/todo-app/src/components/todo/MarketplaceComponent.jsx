import React, { Component } from 'react'

class MarketplaceComponent extends Component
{
   constructor(props)
   {
      super(props)
      this.state =
         {
            products:
               [
                  { id: 1, name: 'Laptop', user: 'sexlord69' },
                  { id: 2, name: 'Book', user: 'sexlord69' },
                  { id: 3, name: 'Mouse', user: 'sexlord69' },
                  { id: 4, name: 'Keyboard', user: 'sexlord69' }
               ]
         }
   }


   renderTableHeader()
   {
      let header = Object.keys(this.state.products[0])
      return header.map((key, index) =>
      {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData()
   {
      return this.state.products.map((products, index) =>
      {
         const { id, name, user } = products //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{user}</td>
            </tr>
         )
      })
   }

   render()
   {
      return (
         <div>
            <h1 id='title'>Marketplace</h1>
            <table id='products'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default MarketplaceComponent //exporting a component make it reusable and this is the beauty of react