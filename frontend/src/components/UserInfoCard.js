import React from 'react'

const UserInfoCard = props => {
  return (
    <div>
      <ul style={{
        listStyleType: 'none',
        textAlign: 'left'
      }}>
        <li>
          id: {props._id}
        </li>
        <li>
          Age: {props.age}
        </li>
        <li>
          Eye Color: {props.eyeColor}
        </li>
        <li>
          Name: {props.name}
        </li>
        <li>
          Gender: {props.gender}
        </li>
        <li>
          Company: {props.company}
        </li>
        <li>
          Email: {props.email}
        </li>
        <li>
          Phone: {props.phone}
        </li>
        <li>
          Address: {props.address}
        </li>
      </ul>
    </div>
  )
}

export default UserInfoCard;