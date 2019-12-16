import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login.js';


describe("Login", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login/>);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });


  it("should call handleUserInput on email change with the correct params", () => {
    const spy = jest.spyOn(wrapper.instance(), "handleUserInput");

    wrapper.instance().forceUpdate();

    const mockEvent = {
      target: {
        name: "email",
        value: "test"
      }
    };

    wrapper.find("#email").simulate("change", mockEvent);

    expect(spy).toHaveBeenCalledWith(mockEvent);
  });

  it("should call handleUserInput on password change with the correct params", () => {
    const spy = jest.spyOn(wrapper.instance(), "handleUserInput");

    wrapper.instance().forceUpdate();

    const mockEvent = {
      target: {
        name: "password",
        value: "test"
      }
    };

    wrapper.find("#password").simulate("change", mockEvent);

    expect(spy).toHaveBeenCalledWith(mockEvent);
  });


});

