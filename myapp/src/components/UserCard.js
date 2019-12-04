import React from "react";
import User from "./User";

class UserCard extends React.Component {
  render(props) {
    return (
      <div className="usercard">
        <User data={this.props.data} />
      </div>
    );
  }
}

export default UserCard;
