import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

class App extends React.Component {

  //1. set up state for my data and followers data 

  state = {
    myUserData: [],
    myFriendData: []

  };


//component lifecycle method 1: when component gets mounted

  componentDidMount() {
    axios.get('https://api.github.com/users/hesterrk')
    .then(response => {
      console.log(response.data)
      this.setState({
        myUserData: response.data
      })
    })
    .catch(error=> console.log(error));


    axios.get('https://api.github.com/users/hesterrk/followers')
    .then(response => {
      console.log(response.data)
      this.setState({
        myFriendData: response.data
      })
    })
    .catch(error=> console.log(error));


    };

   

  render() {

  return (
    <div className="App">

{/* //map over and pass props to produce cards for each friends */}


<UserCard 
  mydetail={this.state.myUserData}
/>

<div className="followers">
  {this.state.myFriendData.map((friend, index) => {
    return <FollowerCard friends={friend} key={index}/>
  })}
</div>
    </div>
  );

  }
}

export default App;
