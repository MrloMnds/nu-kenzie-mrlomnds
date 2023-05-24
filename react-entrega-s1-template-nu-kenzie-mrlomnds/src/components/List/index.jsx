import { Card } from "../Card";

export const List = ({ transactionsList, removeItem }) => (
  <ul className="list">
    {transactionsList.map((transaction, index) => (
      <Card transaction={transaction} key={index} removeItem={removeItem} />
    ))}
  </ul>
);
