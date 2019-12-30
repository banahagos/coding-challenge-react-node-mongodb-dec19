import React from 'react'

const Search = props => {

  const handleInputChange = e => {
    const { name, value } = e.target
    props.getSearch({ [name]: value })
  }

  const handleSelectChange = e => {
    const { name, value } = e.target
    props.getSearch({ [name]: value })
  }

  const handleFormSubmit = e => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleFormSubmit} className="search-form">
      <div className="searchby-container">
        <div className="select-container">
          <select id="property-select" name="searchBy" onChange={handleSelectChange}>
            <option className="title animated fadeIn" value="_id">Id</option>
            <option value="age">Age</option>
            <option value="eyeColor">Eye Color</option>
            <option value="name">Name</option>
            <option value="gender">Gender</option>
            <option value="company">Company</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="address">Address</option>
          </select>
        </div>
      </div>

      <input
        name="searchTerm"
        className="search-term-input"
        placeholder="Search..."
        type="text"
        onChange={handleInputChange}
        value={props.searchTerm}
      />

    </form>
  )

}

export default Search;