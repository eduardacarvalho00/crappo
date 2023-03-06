import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { Header } from '.';

vi.mock('@chakra-ui/react', async () => {
  const actual = await vi.importActual('@chakra-ui/react');
  return {
    ...actual,
    useBreakpointValue() {
      return { base: '150px', md: '250px' };
    },
  };
});

describe('Header component render correctly', () => {
  it('renders correctly', () => {
    render(<Header />);

    expect(screen.getByText('75% SAVE')).toBeInTheDocument();
  });

  it('renders button register', () => {
    render(<Header />);

    expect(screen.getByRole('button', {
      name: /register/i,
    })).toBeInTheDocument();

    const ButtonRegisterEvent = screen.getByText('Register');
    expect(fireEvent.click(ButtonRegisterEvent));

    expect(screen.getByRole('button', {
      name: /register/i,
    })).toHaveStyle({
      background: 'blue.500',
      borderRadius: '32px',
    });
  });

  it('renders link Login', () => {
    render(<Header />);

    expect(screen.getByText(/login/i)).toBeInTheDocument();

    const LinkLoginEvent = screen.getByText('Login');
    expect(fireEvent.click(LinkLoginEvent));
  });
});
