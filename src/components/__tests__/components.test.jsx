import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import Button from '../Button'
import Card from '../Card'
import Input from '../Input'
import UserList from '../UserList'

describe('UI component tests', () => {
  test('renders a button with the provided label', () => {
    render(<Button label="Submit" onClick={() => {}} />)

    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  test('button click updates DOM state through user interaction', async () => {
    const user = userEvent.setup()
    function Counter() {
      const [count, setCount] = useState(0)

      return (
        <div>
          <p>Count: {count}</p>
          <Button label="Increment" onClick={() => setCount((current) => current + 1)} />
        </div>
      )
    }

    render(<Counter />)
    await user.click(screen.getByRole('button', { name: 'Increment' }))
    expect(screen.getByText('Count: 1')).toBeInTheDocument()
  })

  test('renders card content from props', () => {
    render(
      <Card title="Project status" description="All systems active">
        <span>Nested child content</span>
      </Card>,
    )

    expect(screen.getByRole('heading', { name: 'Project status' })).toBeInTheDocument()
    expect(screen.getByText('All systems active')).toBeInTheDocument()
    expect(screen.getByText('Nested child content')).toBeInTheDocument()
  })

  test('renders a card without optional title or description', () => {
    render(
      <Card>
        <span>Body only</span>
      </Card>,
    )

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.getByText('Body only')).toBeInTheDocument()
  })

  test('updates input value on typing', async () => {
    const user = userEvent.setup()
    function FormExample() {
      const [value, setValue] = useState('')
      return (
        <form>
          <Input label="Email" value={value} onChange={(event) => setValue(event.target.value)} />
          <p>{value || 'empty'}</p>
        </form>
      )
    }

    render(<FormExample />)
    const input = screen.getByLabelText('Email')
    await user.type(input, 'hello@example.com')

    expect(input).toHaveValue('hello@example.com')
    expect(screen.getByText('hello@example.com')).toBeInTheDocument()
  })

  test('submits a form and displays entered text', async () => {
    const user = userEvent.setup()
    function FeedbackForm() {
      const [submitted, setSubmitted] = useState('')
      return (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted('Saved successfully')
          }}
        >
          <Input label="Name" value="" onChange={() => {}} />
          <button type="submit">Save</button>
          <p>{submitted || 'No submission yet'}</p>
        </form>
      )
    }

    render(<FeedbackForm />)
    await user.click(screen.getByRole('button', { name: 'Save' }))

    expect(screen.getByText('Saved successfully')).toBeInTheDocument()
  })

  test('loads and renders a user list from mocked fetch data', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        { id: 1, name: 'Ada Lovelace' },
        { id: 2, name: 'Grace Hopper' },
        { id: 3, name: 'Alan Turing' },
      ],
    })

    render(<UserList />)

    expect(screen.getByText('Loading users...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByRole('list', { name: 'Users list' })).toBeInTheDocument()
    })

    expect(screen.getByText('Ada Lovelace')).toBeInTheDocument()
    expect(screen.getByText('Grace Hopper')).toBeInTheDocument()
    expect(screen.getByText('Alan Turing')).toBeInTheDocument()
  })

  test('renders an empty state when the fetch returns no users', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [],
    })

    render(<UserList />)

    await waitFor(() => {
      expect(screen.getByText('No users found.')).toBeInTheDocument()
    })
  })

  test('displays an error message when the fetch fails', async () => {
    globalThis.fetch = jest.fn().mockRejectedValue(new Error('Network error'))

    render(<UserList />)

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('Network error')
    })
  })

  test('displays an error message when the request response is not ok', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
    })

    render(<UserList />)

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('Unable to fetch users')
    })
  })
})
