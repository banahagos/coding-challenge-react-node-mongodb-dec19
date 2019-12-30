import React from 'react'

const UserInfo = props => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <td>{props._id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{props.name}</td>
        </tr>
        <tr>
          <th>Age</th>
          <td>{props.age}</td>
        </tr>
        <tr>
          <th>Eye color</th>
          <td>{props.eyeColor}</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>{props.gender}</td>
        </tr>
        <tr>
          <th>Company</th>
          <td>{props.company}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{props.email}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{props.phone}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>{props.address}</td>
        </tr>
      </tbody>

    </table>
  )
}

export default UserInfo;
