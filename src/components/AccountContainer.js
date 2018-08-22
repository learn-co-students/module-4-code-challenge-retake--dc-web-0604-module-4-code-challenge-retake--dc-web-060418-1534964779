import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import CategorySelector from "./CategorySelector";
// import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      category: "All"
    };
  }

  componentDidMount() {
    this.getFetch();
  }

  getFetch = () => {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ transactions: data });
      });
  };

  handleChange = category => {
    this.setState({ category: category });
  };

  // filterTransaction = () => {
  //   let transactions = this.state.transactions;
  //   transactions = transactions.filter(
  //     transaction => transaction.description === this.state.category
  //   );
  //   this.setState({ transactions });
  // };

  render() {
    return (
      <div className="ui grid container">
        <CategorySelector
          activeCategory={this.state.category}
          handleChange={this.handleChange}
        />

        <TransactionsList
          transactions={this.state.transactions}
          category={this.state.category}
        />
      </div>
    );
  }
}

export default AccountContainer;
