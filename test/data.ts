export type User = {
  email: string;
  password: string;
};

const validUser: User = {
  email: '',
  password: '',
};

const wrongEmailUser: User = {
  email: 'xyz@abc',
  password: '123456789',
};


const wrongUser: User = {
  email: 'xyz@abc',
  password: '123',
};

// All users under a single namespace-like object
export const data = {
  validUser,
  wrongEmailUser,
  wrongUser,
} satisfies Record<string, User>; // remove "satisfies" if you're on TS < 4.9

export default data;