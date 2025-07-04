import { render, screen, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';


test('User form shows two inputs and a button', () => {
    // render the component
    render(<UserForm />);

    // manipulate the component or find a element in it
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    // assertion 
    // what we expect to do 
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', () => {

    const mock = jest.fn();

    render(<UserForm onUserAdd={mock} />);

    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    });
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });

    user.click(nameInput);
    user.keyboard('John Doe');

    user.click(emailInput);
    user.keyboard('jonhDoe@mail.com');

    const button = screen.getByRole('button');
    user.click(button);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'jonhDoe@mail.com'
    });
});

