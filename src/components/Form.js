const Form = ({ textHandler, newItem, clickHandler }) => {
  return (
    <>
      <form action="">
        <input onChange={textHandler} value={newItem} />
        <button onClick={clickHandler}>Add</button>
      </form>
    </>
  );
};

export default Form;
