import React from "react";
import Button from "./Button";

const Friends = ({ friend, handleSelectedFriend, selected }) => {
  const isSelected = friend.id === selected?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance < 0 && (
        <p className="green">
          {friend.name}owe you{Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && (
        <p className="red">you and {friend.name} are even</p>
      )}
      <Button onClick={() => handleSelectedFriend(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
};

export default Friends;
