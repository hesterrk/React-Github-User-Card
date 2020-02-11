import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { createMuiTheme } from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';



//material UI

const Div = styled.div`${palette}${spacing}${typography}`;

const theme = createMuiTheme();



class App extends React.Component {

  //1. set up state for my data and followers data 

  state = {
    myUserData: [],
    myFriendData: [],
    userInput: ''
  
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


//new search feature for users dynamically

handleChanges = e => {
  this.setState({
    userInput: e.target.value

  });
}

//continued, new search feature 

fetchUsers = e => {
  e.preventDefault();
  axios.get(`https://api.github.com/users/${this.state.userInput}/followers`)
  .then(res => {
    this.setState({
      myFriendData: res.data
    })
    console.log(res.data)
  })

  .catch(err=> console.log(err))


}




  render() {

  return (

    <NoSsr>
    <ThemeProvider theme={theme}>
    <Div className="App"
    color="primary.main"
    bgcolor="lavender"
    fontFamily="h6.fontFamily"
    fontSize={{ xs: 'h6.fontSize' }}
    p={{ xs: 2, sm: 3, md: 4 }}
  
    >



{/* //map over and pass props to produce cards for each friends */}



{/* //form so can search for user */}


                <input
               type="text"
               value={this.state.userInput}
               onChange={this.handleChanges}
                />
                <button onClick={this.fetchUsers}> Fetch Users </button>

<UserCard 
  mydetail={this.state.myUserData}
/>

<div className="followers">
  {this.state.myFriendData.map((friend, index) => {
    return <FollowerCard friends={friend} key={index}/>
  })}
</div>


{/* <div className="followerssearch">
  {this.state.myFriendData.map((users, index) => {
    return <UserSearch users={users} key={index}/>
  })}
</div> */}


</Div>
</ThemeProvider>
</NoSsr>
);
  }
}

export default App;
