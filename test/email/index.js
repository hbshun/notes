const nodemailer = require('nodemailer');
const smtpConfig = {
    "host": "smtp.exmail.qq.com",
    "port": 465,
    "secure": true,
    "auth": {
      "user": "huangbangshun@unitedstack.com",
      "pass": "ngt1092MUZI>"
    }
};
const transporter = nodemailer.createTransport(smtpConfig);
transporter.sendEmailAsync = (data) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(data, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

transporter.sendEmailAsync({
  to:'bb@bbyy.me',
  subject:'test',
  text: 'test',
  from: smtpConfig.auth.user
}).then(console.log,console.error);
