import Friends from "./Friends";

const FriendList = ({ newfriends, handleSelectedFriend, selected }) => {
  return (
    <ul>
      {newfriends.map((friend) => (
        <Friends
          friend={friend}
          key={friend.id}
          handleSelectedFriend={handleSelectedFriend}
          selected={selected}
        />
      ))}
    </ul>
  );
};

export default FriendList;
