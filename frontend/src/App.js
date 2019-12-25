import React from 'react';
import axios from 'axios';
import UserInfoCard from './components/UserInfoCard';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfUsers: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
    try {
      const listOfUsers = await axios.get('/api/users')
      this.setState({
        listOfUsers: listOfUsers.data,
        isLoading: false
      })
      console.log(listOfUsers.data)
    } catch (err) {
      console.log(err, 'something went wrong with getting the list of users')
    }
  }

 

  render() {
    if (this.state.isLoading) {
      return <div>...loading</div>
    }

    return (
      <div className="App">
        <div className="search-results">
          {this.state.listOfUsers.map(u => {
            return (
              <UserInfoCard
                key={u._id}
                _id={u._id}
                age={u.age}
                eyeColor={u.eyeColor}
                name={u.name}
                gender={u.gender}
                company={u.company}
                email={u.email}
                phone={u.phone}
                address={u.address}
              />
            )
          })}
        </div>
      </div>
    );
  }

}

export default App;
