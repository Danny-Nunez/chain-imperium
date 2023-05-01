import axios from "axios";
 
export default async function handler(req, res) {
 if (req.method === "PUT") {
   axios
     .put(
       "https://api.sendgrid.com/v3/marketing/contacts",
       {
         contacts: [{ email: `${req.body.email}` }]
         
       },
       {
         headers: {
           "content-type": "application/json",
           Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
         },
       }
     )
     .then((result) => {
       res.status(200).send({
         message:
           "Your email has been successfully added to the mailing list. Welcome 👋",
       });
     })
     .catch((err) => {
       res.status(500).send({
         message:
           "Oops, there was a problem with your subscription, please try again or contact us",
       });
     });
 }
}