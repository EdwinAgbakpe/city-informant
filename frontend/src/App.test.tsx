// import React from 'react';
// import ReactDOM from 'react-dom';
import {
  cleanup,
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import App from '@app/App';

afterEach(cleanup);

it('renders without crashing', () => {
  // const div = document.createElement('div');
  render(<App />);
  expect(screen.getByText('How much do you know about famous cities?')).toBeTruthy();
});

it('navigates to quiz page', async () => {
  render(<App />);
  const button = screen.getByText(/Play/);
  fireEvent.click(button);
  await waitFor(() => {
    expect(screen.getByText('Question')).toBeTruthy();
  });
});
