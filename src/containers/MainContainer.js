import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioStocks: [],
    sort: "none",
    filter: ""
  }

  componentDidMount(){
    fetch('http://localhost:4000/stocks')
    .then(r=>r.json())
    .then(stocksArray =>{
      //add API response to state
      this.setState({stocks: stocksArray})
    })
    .catch(console.log)
  }

  addToPortfolio = (stockObj) => {

    if(!this.state.portfolioStocks.includes(stockObj)){
      this.setState((prevState)=>({portfolioStocks: [...prevState.portfolioStocks, stockObj]}))
    } else {
      alert("This stock is already in your portfolio!")
    }
  }

  removeFromPortfolio = (stockObj) => {
    let newArray = this.state.portfolioStocks.filter(stock => stock.id !== stockObj.id)
    this.setState({portfolioStocks: newArray})
  }

  changeSort = (sortBy) => {
    console.log("changeSort",sortBy)
    this.setState({sort: sortBy})
  }

  changeFilter = (filter) => {
    console.log("in main changeFilter", filter)
    this.setState({filter: filter})
  }
  
  displayedStocks = () => {
    let sortedStocksArray = [...this.state.stocks]
    
    if(this.state.filter.length !== 0){
      sortedStocksArray = sortedStocksArray.filter(stock => stock.type === this.state.filter)
    }
    
    if(this.state.sort === "Alphabetically") {
      return sortedStocksArray.sort((a,b) => a.name > b.name ? 1 : -1)
    } else if(this.state.sort === "Price") {
      return sortedStocksArray.sort((a,b) => a.price > b.price ? 1: -1)
    } else {
      return sortedStocksArray
    }
  }
  

  render() {
    return (
      <div>

        <SearchBar sort={this.state.sort} changeSort={this.changeSort} changeFilter={this.changeFilter} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.displayedStocks()} cardClickHandler={this.addToPortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.state.portfolioStocks} cardClickHandler={this.removeFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
