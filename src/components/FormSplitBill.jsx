import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selected }) => {
  const [bill, setBill] = useState("");
  const [payByUser, setPayByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const payByFriend = bill ? bill - payByUser : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !payByUser) return;

    setBill("");
    setPayByUser("");
    setWhoIsPaying("user");
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>split a bill with {selected.name}</h2>

      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>your expense</label>
      <input
        type="text"
        value={payByUser}
        onChange={(e) =>
          setPayByUser(Number(e.target.value)) > bill
            ? payByUser
            : (e) => setPayByUser(Number(e.target.value))
        }
      />

      <label>{selected.name} is expense</label>
      <input type="text" disabled value={payByFriend} />

      <label>who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selected.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
