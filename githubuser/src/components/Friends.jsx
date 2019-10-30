import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const Friends = (props) => {


    return(
        // props.friendCard.map((bMap, index) => {
          
            // return(
        <Card >
            <Image src={props.allCard.avatar_url} wrapped ui={false} alt="user pic"/>
            <Card.Content>
                    <Card.Header>Name: {props.allCard.name}</Card.Header>
                    
                    <Card.Description>Alias: {props.allCard.login}</Card.Description>
                    <Card.Description>Located in: {props.allCard.location}</Card.Description>
                    <Card.Description>My Git: {props.allCard.html_url}</Card.Description>
                    <Card.Description>Followers: {props.allCard.followers}</Card.Description>
                    <Card.Description>Following: {props.allCard.following}</Card.Description>
                    <Card.Description>What I Do: {props.allCard.bio}</Card.Description>
            </Card.Content>
        </Card>
            // )
        // })
    )
}
export default Friends;