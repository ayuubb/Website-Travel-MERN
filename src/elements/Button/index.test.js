/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';
import { BrowserRouter as Router } from 'react-router-dom';

test('Should not  allowed click button if isDisable is present', () => {
  const { container } = render(<Button isDisabled></Button>);

  // eslint-disable-next-line testing-library/no-container
  // eslint-disable-next-line testing-library/no-node-access
  // eslint-disable-next-line testing-library/no-container
  expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test('Should render Loading/spinner', () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText(/loading/i));

  // eslint-disable-next-line testing-library/no-container
  // eslint-disable-next-line testing-library/no-node-access
  // eslint-disable-next-line testing-library/no-container
  expect(container.querySelector('span')).toBeInTheDocument();
});

test('Should render a tag', () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  // eslint-disable-next-line testing-library/no-container
  // eslint-disable-next-line testing-library/no-node-access
  // eslint-disable-next-line testing-library/no-container
  expect(container.querySelector('a')).toBeInTheDocument();
});
test('Should render Link component', () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  // eslint-disable-next-line testing-library/no-container
  // eslint-disable-next-line testing-library/no-node-access
  // eslint-disable-next-line testing-library/no-container
  expect(container.querySelector('a')).toBeInTheDocument();
});
