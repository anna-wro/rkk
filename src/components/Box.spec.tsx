import { render } from '@testing-library/react';
import Box from './Box';

describe('<Box />', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Box href="" headline="Hello" content={<span />} />,
    );

    expect(getByTestId('box')).toBeInTheDocument();
  });
});
