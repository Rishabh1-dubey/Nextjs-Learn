import nodemailer from "nodemailer"

export  const Email = async({email, emailType, userId} :any  )=> {

   try {

// tod : configure age for todo




    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: "maddison53@ethereal.email",
          pass: "jn7jnAPss4f63QBp6D",
        },
      });
    
 
      const mailOptions={
          from: "rishabhdubey006@gmail.com", // sender address
          to: email, // list of receivers
          subject: emailType === "VERIFY" ? "Verify your Email":"reset Your Password", // Subject line
          html: "<b>Hello world?</b>", // html body
        };
      
        const mailResponse = await transporter.sendMail(mailOptions)
      return mailResponse
    
   } catch (error) {
    
   }
      
}