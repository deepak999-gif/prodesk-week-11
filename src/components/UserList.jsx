import { useEffect, useState } from 'react'

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
          throw new Error('Unable to fetch users')
        }

        const data = await response.json()

        if (isMounted) {
          setUsers(data.slice(0, 3))
          setError('')
        }
      } catch (loadError) {
        if (isMounted) {
          setError(loadError.message || 'Something went wrong while loading users.')
          setUsers([])
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchUsers()

    return () => {
      isMounted = false
    }
  }, [])

  if (loading) {
    return <p>Loading users...</p>
  }

  if (error) {
    return <p role="alert">{error}</p>
  }

  if (!users.length) {
    return <p>No users found.</p>
  }

  return (
    <ul className="user-list" aria-label="Users list">
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
