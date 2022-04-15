import React from "react";
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import store from '../redux/configureStore';
import Episodes from "../components/Episodes/Episodes";

it ('Testing Episode', () => {
  const list = renderer
  .create(
    <Provider store={store}>
      <Episodes />
    </Provider>,
  )
  .toJSON();
  expect(list).toMatchSnapshot();
});
