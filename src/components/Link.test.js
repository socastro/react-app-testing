'use strict';

import renderer from 'react-test-renderer';
import Link from './Link';

it('renderiza bien', () => {
  const tree = renderer
    .create(<Link page="http://www.youtube.com">APPWEB</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('cambia la clase cuando el mouse pasa encima', () => {
  const component = renderer.create(
    <Link page="http://www.youtube.com">APPWEB</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

//ejecuta manualmente el callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-renderiza
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});