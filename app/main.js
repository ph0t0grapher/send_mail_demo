

var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');

smtpTransport = nodemailer.createTransport(smtpTransport({
    host: 'smtp.exmail.qq.com',
    port: 465,
    auth: {
        user: 'liuyan@puokr.org',
        pass: 'jhmf98u35utyU'
    }
}));

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendMail = function (recipient, subject, html) {

    smtpTransport.sendMail({

        from: 'liuyan@puokr.org',
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