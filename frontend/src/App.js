import React from 'react';
import axios from 'axios';
import UserInfo from './components/UserInfo'
import Search from './components/Search';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfUsers: [],
      isLoading: true,
      searchTerm: '',
      searchBy: '_id'
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
    } catch (err) {
      console.log(err, 'something went wrong with fetching the list of users')
    }
  }

  getSearch = obj => {
    this.setState(obj)
  }

  render() {
    if (this.state.isLoading) {
      return <div>...loading</div>
    }

    const matchingSearch = this.state.listOfUsers.filter(user => {
      if (this.state.searchBy !== 'gender') {
        return user[this.state.searchBy].toString().toLowerCase().includes(this.state.searchTerm.toLowerCase().trim())
      } else {
        return user[this.state.searchBy].toLowerCase().startsWith(this.state.searchTerm.toLowerCase().trim())
      }
    })

    return (
      <div className="App">

        <Search
          getSearch={this.getSearch}
          searchTerm={this.state.searchTerm}
          searchBy={this.state.searchBy}
        />

        <div className="number-of-results">
          {matchingSearch.length > 1 ? <p> {matchingSearch.length} results</p> : <p> {matchingSearch.length} result</p>}
        </div>

        <div className="search-results">
          {matchingSearch.map(user => {
            return (
              <UserInfo
                key={user._id}
                _id={user._id}
                age={user.age}
                eyeColor={user.eyeColor}
                name={user.name}
                gender={user.gender}
                company={user.company}
                email={user.email}
                phone={user.phone}
                address={user.address}
              />
            )
          })}
        </div>
      </div>
    );
  }

}

export default App;

