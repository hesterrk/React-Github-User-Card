import React from 'react';

export default class FollowerCard extends React.Component {

    //this component will recieve props from App 



render() {

    return (
<div className="followercard">
<img src={this.props.friends.avatar_url} alt={this.props.friends.name}/>
<div className="cardInfo">
  <h3> Name: {this.props.friends.name} </h3>
    <p className="username">Username: {this.props.friends.login}</p>
  <p> Id: {this.props.friends.id} </p>
  <p>Profile: {this.props.friends.html_url}</p>
  <p>Type: {this.props.friends.type}</p>
</div>
</div>

  
);
}
}