import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
  it('renders header, card product, button, and footer', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Card Product')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
    expect(screen.getByTestId('right-arrow-icon')).toBeInTheDocument(); // Check for the right arrow icon using test ID
  });

  it('renders loading suspense fallback initially', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.queryByTestId('details-component')).toBeNull();
  });

  it('displays details after clicking on button or card product', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId('right-arrow-icon')); // Click on the button with right arrow icon

    await waitFor(() => {
      expect(screen.getByTestId('details-component')).toBeInTheDocument();
    });
  });
});