import React from 'react'
import Stock from '../components/Stock'

function StockContainer(props) {
  
  const renderStocks = () => {
    return props.stocks.map(stock => <Stock key={stock.id} stock={stock} cardClickHandler={props.cardClickHandler} />)
  }
  
  return (
      
    <div>
      <h2>Stocks</h2>
        {renderStocks()}
    </div>
  )

}

export default StockContainer;
