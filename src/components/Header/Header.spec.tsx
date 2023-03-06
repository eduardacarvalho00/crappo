import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { Header } from '.';

vi.mock('next-auth/react', () => {
  return {
    useBreakpointValue() {
      return { base: true, md: false };
    },
  };
});

describe('Header component render correctly', () => {
  it('render correctly', () => {
    render(
      <Header />,
    );
    expect(screen.getByText('75% SAVE')).toBeInTheDocument();
  });

  // it('renders header link with home and posts', () => {
  //   render(
  //     <Header />,
  //   );
  //   expect(screen.getByText('Home')).toBeInTheDocument();
  //   expect(screen.getByText('Posts')).toBeInTheDocument();
  // });
});
