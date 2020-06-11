import React from 'react';
import { mount } from 'enzyme';
import Game from './Game';
import User from './User';
import Board from './Board';

describe('Game start', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  //some more code

  it("example test where I need to test everything without mocks", () => {
    const wrapper = mount(<Game />, { attachTo: container });

    expect(wrapper.find("#deck").text()).toEqual('48');

    //some code
  });

  it("test where I'm having problems", () => {
    const boardSpy = jest.spyOn(Board, 'constructor'),
	  userSpy = jest.spyOn(User, 'constructor'),
      pickCardMock = jest.fn();

    User.pickCard = pickCardMock;

    const wrapper = mount(<Game />, { attachTo: container });

    expect(boardSpy).toHaveBeenCalledTimes(1);
    expect(userSpy).toHaveBeenCalledTimes(1);
    expect(pickCardMock).toHaveBeenCalledTimes(1);

    //some more code
  });
});