import lixo from "../../img/trash.svg";
import { TrashButton } from "../TrashButton";

export const Card = ({ transaction, removeItem }) => (
  <li
    id={transaction.description}
    className={transaction.type === "entrada" ? "card" : "card cardNegative"}
  >
    <div>
      <h3>{transaction.description}</h3>
      <p>R$ {Number(transaction.value).toFixed(2)}</p>
      <TrashButton
        src={lixo}
        removeItem={removeItem}
        id={transaction.description}
      />
    </div>
    <p>{transaction.type === "entrada" ? "Entrada" : "Saída"}</p>
  </li>
);
