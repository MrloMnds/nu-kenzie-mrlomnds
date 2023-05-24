export const TotalMoney = ({ transactionsList }) => (
  <div className="form">
    <div className="totalDiv">
      <h3>Valor total:</h3>
      <h3 className="totalMoney">
        $
        {transactionsList
          .reduce((acc, currentValue) => {
            return currentValue.type === "entrada"
              ? acc + Number(currentValue.value)
              : acc - Number(currentValue.value);
          }, 0)
          .toFixed(2)}
      </h3>
    </div>
    <p>O valor refere-se ao saldo</p>
  </div>
);
