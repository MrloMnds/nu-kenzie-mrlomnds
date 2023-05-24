import { useState } from "react";

export const Form = ({ setTransactionsList }) => {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    type: "entrada",
  });

  const handleTransaction = (event) => {
    event.preventDefault();

    const transaction = {
      description: formData.description,
      value: formData.amount,
      type: formData.type,
    };

    setTransactionsList((previousTransactions) => [
      ...previousTransactions,
      transaction,
    ]);

    setFormData({
      description: "",
      amount: "",
      type: "entrada",
    });
  };

  return (
    <form className="form" onSubmit={handleTransaction}>
      <div className="descriptionDiv">
        <label htmlFor="description">Descrição</label>
        <input
          className="inputStyle"
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
          type="text"
          placeholder="Digite aqui sua descrição"
          value={formData.description}
        />
      </div>

      <div className="moneyDiv">
        <div className="amountDiv">
          <label htmlFor="amount">Valor (R$)</label>
          <input
            className="inputStyle"
            onChange={(event) =>
              setFormData({ ...formData, amount: event.target.value })
            }
            type="number"
            placeholder="0,00"
            value={formData.amount}
          />
        </div>

        <div className="typeDiv">
          <label htmlFor="type">Tipo de valor</label>
          <select
            className="inputStyle2"
            onChange={(event) =>
              setFormData({ ...formData, type: event.target.value })
            }
            name="moneyType"
            id="moneyType"
            defaultValue={formData.type}
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>

      <button className="buttonSubmit whiteText paragraph">
        Inserir valor
      </button>
    </form>
  );
};
