import { render, screen } from '@testing-library/react';
import App from './App';

test('the grid has been rendered', async () => {
  render(<App />);
  const linkElement = screen.getByText(/00/i);
  expect(linkElement).toBeInTheDocument();
  const otherElement = screen.getByText(/22/i);
  expect(otherElement).toBeInTheDocument();
});
