import React, { Component } from 'react';
import UserCard from './components/UserCard'
import './App.css';
import axios from 'axios'
import Friends from './components/Friends';
import NewFriends from './components/NewFriends';


class App extends Component {
  state = {
    myCard: [],
    friendCard: [],
    allCard: []
  }
  
  componentDidMount(){
    axios.get(`https://api.github.com/users/primelos`)
    .then(response => {
      console.log(`api response`, response.data)
      this.setState({ 
        myCard: response.data,
       
      })
    })
    .catch(err => console.log(err))

    axios.get(`https://api.github.com/users/primelos/followers`)
    .then(response => {
      console.log(`2nd api response`, response)
      this.setState({ 
        friendCard: response.data
      })

      this.state.friendCard.map(aMap => {
         let a = aMap.login
         console.log(`a`, a)
        //  this.setState({
        //    allCard: aMap.login
        //  })

             axios.get(`https://api.github.com/users/${a}`)
        .then(res => {
          console.log(res.data)
          this.setState({
            allCard: res.data
          })
          
        })
      })
    })
    .catch(err => console.log(err))

   
  }
  

  render(){
    console.log(`allcard` ,this.state.allCard)
  return (
    <div className="App">
      <header className="App-header">
       <UserCard  myCard={this.state.myCard} />
       <Friends   allCard={this.state.allCard} />
       <NewFriends friendCard={this.state.friendCard} />
      </header>
    </div>
  );
  }
}

export default App;
