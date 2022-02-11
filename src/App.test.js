import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the KORD MASTER title', () => {
  render(<App />)
  const title = screen.getByText(/KORD MASTER/i)
  expect(title).toBeInTheDocument()
})
