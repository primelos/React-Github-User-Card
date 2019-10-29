import React from 'react';

const UserCard = (props) => {
console.log(` from props`, props)
return(
    <div>
    <div>
        <h2>Name: {props.myCard.name}</h2>
        <img src={props.myCard.avatar_url} alt="user pic"/>
        <p>Alias: {props.myCard.login}</p>
        <p>Located in: {props.myCard.location}</p>
        <p>My Git: {props.myCard.html_url}</p>
        <p>Followers: {props.myCard.followers}</p>
        <p>Following: {props.myCard.following}</p>
        <p>What I Do: {props.myCard.bio}</p>
    </div>
    <div>
      
        <div>
            
                    <h2>Name: {props.allCard.name}</h2>
                    <img src={props.allCard.avatar_url} alt="user pic"/>
                    <p>Alias: {props.allCard.login}</p>
                    <p>Located in: {props.allCard.location}</p>
                    <p>My Git: {props.allCard.html_url}</p>
                    <p>Followers: {props.allCard.followers}</p>
                    <p>Following: {props.allCard.following}</p>
                    <p>What I Do: {props.allCard.bio}</p>
                </div>
        
    </div>
    </div>
)
}
export default UserCard;