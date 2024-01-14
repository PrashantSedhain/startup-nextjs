const SEND_FEEDBACK = `
  mutation Feedback($email: String!, $name: String!, $message: String!) {
    feedback(email: $email, name: $name, message: $message) {
      success
      message
    }
  }`;

export default SEND_FEEDBACK;
