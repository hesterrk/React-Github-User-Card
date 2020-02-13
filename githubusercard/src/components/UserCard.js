import React from 'react';




export default class UserCard extends React.Component {

    //this component will recieve props from App 



render() {

    return (
<div className="card">
<img src={this.props.mydetail.avatar_url} alt={this.props.mydetail.name}/>
<div className="cardInfo">
  <h3> Name: {this.props.mydetail.name} </h3>
    <p className="username">Username: {this.props.mydetail.login}</p>
  <p> Location: {this.props.mydetail.location} </p>
  <p>Profile:{this.props.mydetail.html_url}</p>
  <p>Folllowers:{this.props.mydetail.followers}</p>
  <p>Following: {this.props.mydetail.following}</p>
  <p>Bio:{this.props.mydetail.bio}</p>
</div>
</div>

  
);
}
}