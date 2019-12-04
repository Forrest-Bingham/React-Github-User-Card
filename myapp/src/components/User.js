import React from "react";

class User extends React.Component {
  render() {
    return (
      <div className="user">
        <img
          src={this.props.data.avatar_url}
          alt="profile"
          width="100"
          height="100"
          className="userImage"
        />
        <div className="userInfo">
          <h3>{this.props.data.name}</h3>
          <h3>Followers: {this.props.data.followers}</h3>
          <h3>Following: {this.props.data.following}</h3>
        </div>
      </div>
    );
  }
}
export default User;
