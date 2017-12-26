/**
 * Created by ph0t0grapher
 */
var nodemailer = require('nodemailer')
var emailConfig = require('../config/config')
var smtpTransport = require('nodemailer-smtp-transport');

smtpTransport = nodemailer.createTransport(smtpTransport({
    host: emailConfig.email.host,
    port: emailConfig.email.port,
    auth: {
        user: emailConfig.email.user,
        pass: emailConfig.email.pass
    }
}));

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendMail = function (recipient, subject, html) {

    smtpTransport.sendMail({

        from: emailConfig.email.user,
        to: recipient,
        subject: subject,
        html: html

    }, function (error, response) {
        if (error) {
            console.log(error);
        }
        console.log('发送成功')
    });
}

exports.sendMail = sendMail