import React, { Component } from 'react';
import OrderItem from './OrderItem';

import './App.css';

class App extends Component {

  state = {totale : 0};

  quantitaCambiata (amount){
      console.log("quantità cambiata: ", amount);
      //() => console.log("quantità cambiata")
      this.setState({
        totale : parseFloat((this.state.totale + amount).toFixed(2))
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Shopping list</h2>
        </div>
        <div>
          <OrderItem
            image="http://www.daddario.com/resources/jdcdad/images/products/da_prod_ej16_main_1.jpg"
            product="D'Addario set corder acustiche"
            price={1.20}
            onQuantityChange={this.quantitaCambiata.bind(this)}
          />
          <OrderItem
            image="http://romoletto.altervista.org/wp-content/uploads/2013/02/chitarra-640x415.jpg"
            product="Chitarra acustica"
            price={150.49}
            onQuantityChange={this.quantitaCambiata.bind(this)}
          />
          <OrderItem
            image="https://www.strumentimusicali.net/imagesbig/B_RCH_gcf2.jpg"
            product="Custodia chitarra"
            price={59.78}
            onQuantityChange={amount => this.setState({
              // quando c'è una funzione con una sola riga, con la arrow () il this
              // è quello del figlio, dunque non serve passare il bind(this)
              totale : parseFloat((this.state.totale + amount).toFixed(2))
            })}
          />
        </div>
        <div>
          <h3>Totale : {this.state.totale} Euro</h3>
        </div>
      </div>

    );
  }
}

export default App;
