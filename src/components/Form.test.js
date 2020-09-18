import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Form from './Form'

const fnClick = jest.fn();

describe("Test the form component", () => {

    it('Renders without throwing an error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Form/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should update state with filled in form value', () => {
       const component = mount(<Form/>);
       component
           .find('#EmailAddress')
           .simulate('change', { target: {value: 'test@test.com'} });
       expect(component.state('emailAddress')).toEqual('test@test.com');
       component.unmount();
    });

    it('button click to be called', () => {
       const component = mount(<Form onSubmit={fnClick}/>);
       component
           .find('input[type="submit"]')
           .simulate('click');``
       expect(fnClick).toHaveBeenCalled();
    });
});