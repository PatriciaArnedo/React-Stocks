import React from 'react'
import Stock from '../components/Stock'

function PortfolioContainer(props) {

  const renderPortfolioStocks = () => {
    return(
      props.portfolioStocks.map(stock => <Stock key={stock.id} stock={stock} cardClickHandler={props.cardClickHandler} />)
    )
  }

    return (
      <div>
        <h2>My Portfolio</h2>
          {renderPortfolioStocks()}
      </div>
    )
  

}

export default PortfolioContainer;
