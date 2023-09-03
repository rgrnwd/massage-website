import { render, screen } from '@testing-library/react'
import About from '../../pages/About'

test('renders About Us message', () => {
    render(<About />)
    const greetings = screen.getByText(/About Us/i)
    expect(greetings).toBeInTheDocument()
})
