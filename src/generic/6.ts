export {};

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): void {
  // Update user data
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
