import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the KORD MASTER 5 title', () => {
  render(<App />)
  const title = screen.getByText(/KORD MASTER 5/i)
  expect(title).toBeInTheDocument()
})
