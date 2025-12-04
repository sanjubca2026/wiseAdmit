export const studentUser = {
  valid: {
    email: process.env.STUDENT_EMAIL,
    password: process.env.STUDENT_PASSWORD
  },
  invalid: {
    email: process.env.STUDENT_INVALID_EMAIL,
    password: process.env.STUDENT_INVALID_PASSWORD
  }
};
