import React from "react";
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import store from '../redux/configureStore';
import Characters from "../components/Characters/Characters";

it ('Testing Characters', () => {
  const list = renderer
  .create(
    <Provider store={store}>
      <Characters />
    </Provider>,
  )
  .toJSON();
  expect(list).toMatchSnapshot();
});
