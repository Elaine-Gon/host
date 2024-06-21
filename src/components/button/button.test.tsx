import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button'; // ajuste o caminho conforme necessário

describe('Button component', () => {
  test('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders without children', () => {
    render(<Button />);
    expect(screen.queryByText('Click Me')).not.toBeInTheDocument();
  });

  test('does not throw error when clicked without onClick handler', () => {
    render(<Button>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    // No assertion needed, just ensuring no error is thrown
  });
});
