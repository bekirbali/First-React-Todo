const Form = ({ textHandler, newItem, clickHandler }) => {
  return (
    <>
      <form action="">
        <input type="text" onChange={textHandler} value={newItem} />
        <button type="submit" onClick={clickHandler}>
          Add
        </button>
      </form>
    </>
  );
};

export default Form;
