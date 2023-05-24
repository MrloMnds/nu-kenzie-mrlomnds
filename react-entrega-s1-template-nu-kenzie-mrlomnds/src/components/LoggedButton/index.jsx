export const LoggedButton = ({ text, logged, setLogged, className }) => (
  <button className={className} type="button" onClick={() => setLogged(!logged)}>
    {text}
  </button>
);
