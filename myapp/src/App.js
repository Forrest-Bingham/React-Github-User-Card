import React from "react";
import axios from "axios";
import "./App.css";
import UserCard from "./components/UserCard";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userSearch: "",
      data: [],
      name: "",
      followers: "",
      picture: "",
      location: "",
      followerList: [],
      followerName: "",
      followerImage: ""
    };
  }

  componentDidMount() {
    console.log("Component did mount!");

    axios
      .get("https://api.github.com/users/Forrest-Bingham")
      .then(response => {
        this.setState({
          data: response.data,
          name: response.data.name,
          followers: response.data.followers,
          picture: response.data.avatar_url,
          location: response.data.location,
          userSearch: "Forrest-Bingham"
        });
        console.log(response.data);
      })
      .catch(error => console.log("Error!"));

    axios
      .get(`https://api.github.com/users/${this.state.userSearch}/followers`)
      .then(response => {
        this.setState({
          followerList: response.data
        });
        console.log(response.data, "Follower Data");
      })
      .catch(error => console.log("Error!"));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("cDU is running");
    if (prevState.data !== this.props.data) {
      //do somethings with the user data
      axios
        .get(
          `https://api.github.com/users/${this.state.userSearch}Forrest-Bingham`
        )
        .then(response => {
          this.setState({
            data: response.data,
            name: response.data.name,
            followers: response.data.followers,
            picture: response.data.avatar_url,
            location: response.data.location,
            userSearch: "Forrest-Bingham"
          });
          console.log(response.data);
        })
        .catch(error => console.log("Error!"));
    }
  }

  handleChanges = e => {
    this.setState({
      userSearch: e.target.value
    });
  };

  searchUser = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userSearch}`)
      .then(response => {
        this.setState({
          data: response.data,
          name: response.data.name,
          followers: response.data.followers,
          picture: response.data.avatar_url,
          location: response.data.location
        });
        console.log(response.data);
      })
      .catch(error => console.log("Error!"));
  };

  getFollowers = e => {
    axios
      .get(`https://api.github.com/users/${this.state.userSearch}/followers`)
      .then(response => {
        this.setState({
          followerList: response.data
        });
        console.log(response.data, "Follower Data");
      })
      .catch(error => console.log("Error!"));
  };

  clear = e => {
    this.setState({
      followerList: [],
      followerName: "",
      followerImage: ""
    });
  };

  render() {
    return (
      <div className="App">
        <h1> React Github UserCard </h1>
        <input
          type="text"
          value={this.state.userSearch}
          onChange={this.handleChanges}
        />
        <button onClick={this.searchUser}>Search User</button>
        <button onClick={this.getFollowers}> Get Followers </button>
        <button onClick={this.clear}>Clear Followers</button>
        <UserCard data={this.state.data} />
        <FollowerList
          followerList={this.state.followerList}
          followerName={this.state.followerName}
          followerImage={this.state.followerImage}
        />
      </div>
    );
  }
}

export default App;
