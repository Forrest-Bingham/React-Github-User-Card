import React from "react";

class Follower extends React.Component {
  render(props) {
    return (
      <div className="follower">
        <h3> {this.props.followerName}</h3>
        <img
          src={this.props.followerImage}
          alt="profile"
          width="100"
          height="100"
        />
      </div>
    );
  }
}
export default Follower;
