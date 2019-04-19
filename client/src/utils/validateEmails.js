const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  const invalidEmails = emails

    //Split the emails string
    .split(",")

    //Trim spaces from emails string
    .map(email => email.trim())

    //Filter out the emails that are invalid
    .filter(email => regex.test(email) === false);

  if (invalidEmails.length) {
    return `these emails are invalid: ${invalidEmails}`;
  }
};
