export const FilterButton = ({ text, id, setFilter, className }) => {
  return (
    <button
      className={className}
      id={id}
      type="button"
      onClick={(event) => {
        const divButtons = event.target.parentElement;
        const buttons = [...divButtons.children];
        const selectedButton = buttons.filter(
          (element) => element.className === "buttonStyle selectedButton"
        );
        selectedButton[0].className = "buttonStyle";

        if (text === "Entradas") {
          setFilter("entrada");
          event.target.className = "buttonStyle selectedButton";
        } else if (text === "Saídas") {
          setFilter("saida");
          event.target.className = "buttonStyle selectedButton";
        } else {
          setFilter("todos");
          event.target.className = "buttonStyle selectedButton";
        }

        event.target.style = "";
      }}
    >
      {text}
    </button>
  );
};
