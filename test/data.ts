export type User = {
  email: string;
  password: string;
};

const validUser: User = {
  email: '',
  password: '',
};

const wrongUser: User = {
  email: '',
  password: '',
};

// All users under a single namespace-like object
export const data = {
  validUser,
  wrongUser,
} satisfies Record<string, User>; // remove "satisfies" if you're on TS < 4.9

export default data;