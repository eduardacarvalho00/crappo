import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { BsGraphUp } from 'react-icons/bs';
import {
  describe, it, expect,
} from 'vitest';
import { NumberInfos } from './numbersInfos';

describe('Numbers info components', () => {
  it('renders component correctly', () => {
    render(<NumberInfos icon={BsGraphUp} title="$30B" description="Digital Currency Exchanged" />);

    expect(screen.getByText('$30B')).toBeInTheDocument();
  });
});
