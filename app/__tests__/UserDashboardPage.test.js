import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';  // Import MemoryRouter
import { UserDashboardPage } from '../pages/UserDashboardPage';

test('renders View All Modules Button', () => {
  render(
    <MemoryRouter>
      <UserDashboardPage />
    </MemoryRouter>
  );
  expect(screen.getByText('View All Modules')).toBeInTheDocument();
});

test('renders View All Jobs Button', () => {
  render(
    <MemoryRouter>
      <UserDashboardPage />
    </MemoryRouter>
  );
  expect(screen.getByText('View All Jobs')).toBeInTheDocument();
});

test('renders View Groups Button', () => {
  render(
    <MemoryRouter>
      <UserDashboardPage />
    </MemoryRouter>
  );
  expect(screen.getByText('View Groups')).toBeInTheDocument();
});

