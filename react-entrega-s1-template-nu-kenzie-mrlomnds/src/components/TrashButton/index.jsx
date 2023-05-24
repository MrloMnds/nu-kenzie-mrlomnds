export const TrashButton = ({ src, removeItem, id }) => {
  return (
    <button className="buttonStyle trashButton" type="button" onClick={() => removeItem(id)}>
      <img src={src} alt="lixo" />
    </button>
  );
};
