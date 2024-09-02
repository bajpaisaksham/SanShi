import React from "react";

class UserClass extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userInfo: {
        name:"Dummy",
        location:"Default",
      }
    };

    //console.log("Child Constructor")
  }

  async componentDidMount(){
    //console.log("Child Component Did Mount")

    const data = await fetch("https://api.github.com/users/bajpaisaksham");
    const json = await data.json();

    this.setState({
      userInfo:json,
    });

    console.log(json)
  }


  componentDidUpdate() {
    //console.log("component Did Update")
  }

  componentWillUnmount(){
    //console.log("component Will Unmount");
  }


  render() {
    //console.log("Child Render")
    
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}  />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @bajpaisaksham</h4>
      </div>
    );
  };
};

export default UserClass;