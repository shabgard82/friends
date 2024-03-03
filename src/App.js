import FriendList from "./components/FriendList";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import { useState } from "react";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [show, setShow] = useState(false);
  const [newfriends, setNewFriends] = useState(initialFriends);
  const [selected, setSelected] = useState(null);

  const handleSelectedFriend = (friend) => {
    setSelected(friend);
  };

  const handleAddFriend = (friend) => {
    setNewFriends((newfriends) => [...newfriends, friend]);
    setShow(false);
  };
  const handleShowForm = () => {
    setShow((show) => !show);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          newfriends={newfriends}
          handleSelectedFriend={handleSelectedFriend}
          selected={selected}
        />
        {show && <FormAddFriend handleAddFriend={handleAddFriend} />}
        <Button onClick={handleShowForm}>
          {show ? " close" : "Add Friend"}
        </Button>
      </div>
      {selected && <FormSplitBill selected={selected} />}
    </div>
  );
}

export default App;
