const accountSid = 'ACa8a679924829804cb86d2e5dadce0efe'; // get this account sid from twilio console
const authToken = '161015d9b7779be061f6e3bab657745e'; // get this token from twilio console, take the live token

// import twilio
const Twilio  = require('twilio')
 

// create new instance of Twilio
var twilio =  new Twilio(accountSid, authToken)


// define service and number to send
// from "whatsapp : <twilio service phone number>"
// to "whatsapp: <country-code><your phone number>"
// for security measures, store the destination number somewhere else, and not hardcoded 
// such as database
// for this example purpose, I intentionally put it hardcoded


// production example, 
// exports const sendSpecificUserMessageController = await (req,res) => {
    // const {userModel} = require('../../userModel.js')

    //const user = req.body.username
    
    // get the phone number for user
    // const userSpecificPhoneNumber = await userModel.get(attributes: 'phoneNumber', where: {user: user} )

    // let from = process.env.TWILIO_PHONE_NUMBER
    // let to = `${method}:${userSpecificPhoneNumber}`

// }


var from ="whatsapp:+14155238886"
var to = "whatsapp:+62<your-phone-number>"  //better -> whatsapp: 



// create promise for sending message
var promise = twilio.messages.create({
    from: from,
    to: to,
    body: 'Whatsapp send from simple node js application'
  });


//log the message after successfully sending the message 
promise.then(function(message) {
    console.log('Created message using promises');
    console.log(message.sid);
});