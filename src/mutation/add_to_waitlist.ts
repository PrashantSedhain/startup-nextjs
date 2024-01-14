
const ADD_TO_WAITLIST = `
  mutation AddEmailToWaitlist($email: String!, $name: String!) {
    addEmailToWaitlist(email: $email, name: $name) {
      message
      success
    }
  }
`;

export default ADD_TO_WAITLIST;
