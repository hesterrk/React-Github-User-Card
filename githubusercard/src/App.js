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
//good to use Promise.all for 2 independent axios- takes an array of promises
//Promise.all([axios.get(url1), axios.get(url2)]) .then([resolved1, resolved2] => setState)

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

    
    //Promise.all syntax METHOD

    // let one = 'https://api.github.com/users/hesterrk'
    // let two = 'https://api.github.com/users/hesterrk/followers'

    // const firstRequest = axios.get(one);
    // const secondRequest = axios.get(two);

    // axios.all([firstRequest, secondRequest])
    // .then(
    //   axios.spread((...responses) => {
    //     const responseOne = responses[0];
    //     const responseTwo = responses[1];

    //     console.log('first', responseOne, 'second', responseTwo);
        
        
    //       this.setState({
    //       myUserData: responseOne,
    //       myFriendData: responseTwo
    //     })

    

    //   })
    // )

    // .catch(errors => console.log(errors))





    };


//method 2: componentDidUpdate: use for form to dynamically search 


   

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
