Steps to Run the app.


1. Download or Clone the Code
2. Navigate to the folder.
3. Do the `npm install`.
4. create .env file.
   Add Below values in it.
   PORT=3000
   FROM_EMAIL=abc@gmail.com
5. Find the Scripts in package.json file.
6. To Run in Development mode: `npm run dev`
7. You can see message `Server is running at https://localhost:3000` Once server is up and running.
8. You can hit the send email endpoint from postman.
    URL: http://localhost:3000/send-email
    Method: POST
    Body: {
      "name": "Konduru Venkatesh",
      "title": "Mr.",
      "description": "Welcome To Test Email",
      "email": "vkonduru90@gmail.com",
      "subject": "Welcome To Test Email"
     }
     content-type: application/json
9. Send Request you can see the result.
    sample result:  {
        "messageId": "<bbd78b4b-1db4-36bb-24fd-6695b4b4b374@gmail.com>",
        "messageUrl": "https://ethereal.email/message/YsCIwMnYHerEVa7oYsCIw2QRsW49n3CjAAAAAVu5UDjrkRy2WgMKSMQI7cA"
    }
10. You can "Take MessageURL" and try in browser. you can see the email.
11. To Build `npm run build`
12. To Test `npm run test`

## Points To Note:

1. Used `Express.json()` to parse the request body. ( I can go with other third part lib ex: `body parser` )
2. I didn't enable the "CORS" as am doing only backend. But i can do with `Cors` lib.
3. I used Node Mailer Lib to send Emails. I have good experience with other providers as well like `AWS` etc..
4. I used Templates to Generate the HTML Content. I used `Handlebars`, I have good experience with `EJS` as well.
5. I divided project into different parts , I followed `MVC` Structure.
6. I used Application Level Middlewares to handle all errors. `I can do better handling using keeping Middleware on routing, i can use try and catch`
7. I didn't implement proper login. `I have experence with Winston, Bunyan and other packages`.
8. I used `JOI` to validate the Body or Request.
9. For Easy testing i created `TestAccount` With Nodemailer. So you no need to give your credentionals in application for now.
10. Implemented `JEST` for testing.
11. Written test cases and you can see coverage report in `Coverage` Folder.
12. Configured typescript config, jest config for more comfortness.


## if you need any help in running the project you can call me on my whatsapp +91 9177095606



















