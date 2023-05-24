import { useState } from "react";
import { List } from "./components/List";
import logotipo from "./img/logotipo.svg";
import whiteLogo from "./img/whiteLogo.svg";
import imgHome from "./img/imgHome.svg";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { FilterButton } from "./components/FilterButtons";
import { LoggedButton } from "./components/LoggedButton";

function App() {
  const [logged, setLogged] = useState(false);

  const [transactionsList, setTransactionsList] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saida", value: 150 },
  ]);

  const [filter, setFilter] = useState("todos");

  const filteredTransactions = transactionsList.filter((transaction) =>
    filter === "todos" ? true : transaction.type === filter
  );

  const removeItem = (itemId) => {
    const newList = transactionsList.filter(
      (transaction) => transaction.description !== itemId
    );
    setTransactionsList(newList);
  };

  if (logged) {
    return (
      <div>
        <header>
          <div className="containerHeader">
            <img src={logotipo} alt="logo" />
            <LoggedButton
              className="buttonStyle paragraph title"
              text="Início"
              logged={logged}
              setLogged={setLogged}
            />
          </div>
        </header>

        <section className="container">
          <div className="leftDiv">
            <Form setTransactionsList={setTransactionsList} />
            <TotalMoney transactionsList={transactionsList} />
          </div>

          <div className="rightDiv">
            <div className="filterDiv">
              <h3 className="title">Resumo financeiro</h3>
              <div className="filterButtonsDiv">
                <FilterButton
                  className="buttonStyle selectedButton"
                  id="all"
                  text="Todos"
                  setFilter={setFilter}
                />
                <FilterButton
                  className="buttonStyle"
                  id="deposits"
                  text="Entradas"
                  setFilter={setFilter}
                />
                <FilterButton
                  className="buttonStyle"
                  id="outgoings"
                  text="Saídas"
                  setFilter={setFilter}
                />
              </div>
            </div>

            <List
              transactionsList={filteredTransactions}
              removeItem={removeItem}
            />
          </div>
        </section>
      </div>
    );
  }
  return (
    <div className="background">
      <section className="homeContainer">
        <div className="divHomeInfo">
          <img src={whiteLogo} alt="logo" />
          <h1 className="title titleTwo whiteText">
            Centralize o controle das suas finanças
          </h1>
          <p className="paragraph whiteText">de forma rápida e segura</p>
          <LoggedButton
            className="loginButtonHome whiteText title"
            text="Iniciar"
            logged={logged}
            setLogged={setLogged}
          />
        </div>
        <div className="divHomeImg">
          <img src={imgHome} alt="" />
        </div>
      </section>
    </div>
  );
}

export default App;
