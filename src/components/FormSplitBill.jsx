import Button from "./Button";

const FormSplitBill = ({ selected }) => {
  return (
    <form className="form-split-bill">
      <h2>split a bill with {selected.name}</h2>

      <label>Bill value</label>
      <input type="text" />

      <label>your expense</label>
      <input type="text" />

      <label>{selected.name} is expense</label>
      <input type="text" disabled />

      <label>who is paying the bill</label>
      <select>
        <option value="user">you</option>
        <option value="friend">{selected.name}</option>
      </select>

      <input type="text" />

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
