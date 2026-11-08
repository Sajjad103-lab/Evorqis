export async function POST(req:Request){
const {email}=await req.json().catch(()=>({email:""}));
if(typeof email!=="string"||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return Response.json({ok:false},{status:400});
console.log("New subscriber:",email); // Connect your email provider here (Mailchimp, Brevo, Resend, etc.)
return Response.json({ok:true})}
