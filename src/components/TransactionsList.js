import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({ transactions, category }) => {
  //craete condition for all
  let newtransactions = transactions.filter(
    transaction => transaction.category === category
  );

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Posted At</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>

        {newtransactions.map(t => <Transaction key={t.id} transaction={t} />)}
      </tbody>
    </table>
  );
};

export default TransactionsList;
