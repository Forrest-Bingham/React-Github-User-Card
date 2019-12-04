import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
  render(props) {
    return (
      <div className="followerList">
        {this.props.followerList.map(person => {
          return (
            <Follower
              key={person.id}
              followerName={person.login}
              followerImage={person.avatar_url}
            />
          );
        })}
      </div>
    );
  }
}
export default FollowerList;
