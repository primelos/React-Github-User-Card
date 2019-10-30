import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const UserCard = (props) => {
// console.log(` from props`, props)
return(
    <Card>
        <Image src={props.myCard.avatar_url} wrapped ui={false} alt="user pic"/>
    <Card.Content>
        <Card.Header>Name: {props.myCard.name}</Card.Header>
        
        <Card.Description>Alias: {props.myCard.login}</Card.Description>
        <Card.Description>Located in: {props.myCard.location}</Card.Description>
        <Card.Description>My Git: {props.myCard.html_url}</Card.Description>
        <Card.Description>Followers: {props.myCard.followers}</Card.Description>
        <Card.Description>Following: {props.myCard.following}</Card.Description>
        <Card.Description>What I Do: {props.myCard.bio}</Card.Description>
    </Card.Content>
    {/* <div> */}
      
        {/* <div>
            
                    <h2>Name: {props.allCard.name}</h2>
                    <img src={props.allCard.avatar_url} alt="user pic"/>
                    <p>Alias: {props.allCard.login}</p>
                    <p>Located in: {props.allCard.location}</p>
                    <p>My Git: {props.allCard.html_url}</p>
                    <p>Followers: {props.allCard.followers}</p>
                    <p>Following: {props.allCard.following}</p>
                    <p>What I Do: {props.allCard.bio}</p>
                </div> */}
        
    {/* </div> */}
    </Card>
)
}
export default UserCard;