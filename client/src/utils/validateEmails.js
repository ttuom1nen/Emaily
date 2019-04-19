const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
