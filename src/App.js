import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addUser, deleteUser} from '../src/store/usersActions';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUserForm from './Components/AddUserForm';
import Users from './Components/Users';
import RecentPost from './Components/RecentPost';

class App extends Component {
  addNewUser = (user) => {
    user.id = Math.random().toString()
   this.props.addUser(user)
    
  }

  deleteUser = (id) => {
    this.props.deleteUser(id)
  }

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.props.users.map(user => user.id === id ? updatedUser : user)
    })
  }

  render() {
    return (
      <div>
        <AddUserForm addUser={this.addNewUser} />
        <RecentPost />
        <Users
          usersData={this.props.users}
          deleteUser={this.deleteUser}
          editUser={this.editUser}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
