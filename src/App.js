import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { render } from "react-dom";
import ListContacts from "./ListContacts";
import "./index.css";
import * as ContactsAPI from './ContactsAPI';
import CreateContact from './CreateContact';


class App extends Component {
  state = {
   
    contacts: []
  };
  componentDidMount() {
    ContactsAPI.getAll().then((data)=>{
      console.log('data from db,',data);
      let contacts=[];
      data.forEach(function(c){
        contacts.push({
          avatarURL:c.get('avatarURL'),
          name:c.get('name'),
          email:c.get('email'),
          id:c.get('objectId')
        })
      });
      this.setState({contacts});
    })
  }
  createContact(contact) {
   
    ContactsAPI.create(contact).then((c)=>{
      contact.id=c.get('objectId');
      this.setState(state=>({
        contacts:state.contacts.concat([contact])
      }))
    })
  }
  removeContact = (contact) => {
    console.log('app this',this);
    
    ContactsAPI.remove(contact).then(()=>{
      this.setState((state) => ({
      contacts:state.contacts.filter((c)=> c.id!== contact.id)
    }));
    },(err)=>{
      console.log(err);
    })
  }
  render() {
    return (
      <div>
        <Route path="/" exact render={ ()=>{
          return <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />} } />
       
        <Route path="/create"  render={ ({history})=>{
          return <CreateContact onCreateContact={(contact)=>{
            this.createContact(contact);
            history.push('/');
          }}/>} } />
      
        
      </div>
    );
  }
}
export default App;

