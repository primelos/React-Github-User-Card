import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const NewFriends = (props) => {


    return(
        
        props.friendCard.map((bMap, index) => {
          
            return(
        <Card >
            <Image src={bMap.avatar_url} wrapped ui={false} alt="user pic"/>
            <Card.Content>
                    <Card.Header>Name: {bMap.name}</Card.Header>
                    
                    <Card.Description>Alias: {bMap.login}</Card.Description>
                    <Card.Description>Located in: {bMap.location}</Card.Description>
                    <Card.Description>My Git: {bMap.html_url}</Card.Description>
                    <Card.Description>Followers: {bMap.followers}</Card.Description>
                    <Card.Description>Following: {bMap.following}</Card.Description>
                    <Card.Description>What I Do: {bMap.bio}</Card.Description>
            </Card.Content>
        </Card>
            )
        })
    )
}
export default NewFriends;