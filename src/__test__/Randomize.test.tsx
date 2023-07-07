import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Randomize from '../components/Randomize'

test('Renders Randomize page correctly', () => {
    render(<Randomize isDarkMode />)
    expect(true).toBeTruthy();
});

describe('Generate Button', () => { 

    it('renders the "Generate Test" button', () => {
        render(<Randomize isDarkMode />)
        const generateButton = screen.getByText('Generate Test')
        expect(generateButton).toBeInTheDocument();
    });

    it('Shows Loader when clicked', () => {
        render(<Randomize isDarkMode />)
        const generateButton = screen.getByText('Generate Test')
        fireEvent.click(generateButton)
        const loadingGif = screen.getByAltText('loading gif')
        expect(loadingGif).toBeVisible()
    })

    test('Genereates random questions when clicked', () => {
        render(<Randomize isDarkMode />)
        const generateButton = screen.getByText('Generate Test')
        fireEvent.click(generateButton)
        waitFor(() => {
            const questionText = screen.getByText(/\b[A-Za-z\s]*JavaScript[A-Za-z\s!?.]*\b/);
            expect(questionText).toBeInTheDocument()
        })
    })
})