import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders each animal card', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /meet the animals/i })).toBeInTheDocument();
  expect(screen.getByText('Lion')).toBeInTheDocument();
  expect(screen.getByText('Gorilla')).toBeInTheDocument();
  expect(screen.getByText('Zebra')).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'Lion' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'Gorilla' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'Zebra' })).toBeInTheDocument();
});

test('uses fallback additional information for Lion', () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

  render(<App />);
  fireEvent.click(screen.getAllByRole('button', { name: /more info/i })[0]);

  expect(alertSpy).toHaveBeenCalledWith('notes: No Additional Information');
  alertSpy.mockRestore();
});
