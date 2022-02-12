import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the 코드 마스터 5 title', () => {
  render(<App />)
  const title = screen.getByText(/코드 마스터 5/i)
  expect(title).toBeInTheDocument()
})
