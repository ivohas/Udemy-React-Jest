import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
    const users = [
        { name: 'jane', email: 'jane@mail.co,' },
        { name: 'george', email: 'george@mail.com' }
    ];

    render(<UserList users={users} />)

    return users;
}

beforeEach(() => { });

test('render one row per user', () => {
    const users = [
        { name: 'jane', email: 'jane@mail.co,' },
        { name: 'george', email: 'george@mail.com' }
    ];

    const { container } = render(<UserList users={users} />)

    const table = container.querySelector('table');
    const rows = container.querySelectorAll('tbody tr')

    //const rows = within(screen.getByTestId('users')).getAllByRole('row');
    expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
    const users = renderComponent();

    for (let user of users) {
        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email });

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});