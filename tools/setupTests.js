/* eslint-disable func-names */
import {
  configure, shallow, render, mount
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import _ from 'lodash';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom/extend-expect';

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.renderer = renderer;
global.mount = mount;
global.toJson = toJson;
global._ = _;

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {}
  };
};