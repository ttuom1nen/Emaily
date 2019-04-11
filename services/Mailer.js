const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

/**
 * Extend the sendgrid.mail
 */
class Mailer extends helper.Mail {}
