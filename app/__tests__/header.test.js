import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';  // Import MemoryRouter
import Header from '../components/Header'; // Ensure this path is correct

test('renders AthenAI logo', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByText('AthenAI')).toBeInTheDocument();
});

test('renders Home link', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('renders Groups link', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByText('Groups')).toBeInTheDocument();
});

test('renders Internships link', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByText('Internships')).toBeInTheDocument();
});

test('renders Profile link', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByText('Profile')).toBeInTheDocument();
});

test('renders User Dashboard link', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByText('User Dashboard')).toBeInTheDocument();
});

test('renders Modules link', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByText('Modules')).toBeInTheDocument();
});
