import * as React from 'react'
import { User } from '@types'
import UserListItem from './UserListItem'

type Props = {
  items: User[]
}

const UserList = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <UserListItem data={item} />
      </li>
    ))}
  </ul>
)

export default UserList
