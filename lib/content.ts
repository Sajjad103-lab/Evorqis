export const EMAIL="evorqis@gmail.com";
export const nav=[{label:"Services",href:"#services"},{label:"Results",href:"#stats"},{label:"Pricing",href:"#pricing"},{label:"FAQ",href:"#faq"}];
export const tools=["WhatsApp","Gmail","Google Sheets","n8n","Slack","HubSpot","Shopify","Notion","Zapier","Airtable","Stripe","Calendly"];
export const services=[
{key:"agents",title:"AI agents",text:"Assistants that answer customers, sort enquiries and pass hard cases to a person.",points:["Support and sales assistants","Lead scoring and instant replies"],span:"lg:col-span-4"},
{key:"web",title:"Business websites",text:"Fast, mobile-first sites wired into your agents and workflows.",points:["Landing and business pages","Booking and enquiry forms"],span:"lg:col-span-2"},
{key:"flow",title:"Workflow automation",text:"Your tools talk to each other, so data moves without copy-paste.",points:["Lead capture and follow-ups","Reports and reminders"],span:"lg:col-span-2"},
{key:"voice",title:"Calling agents",text:"Voice agents confirm appointments, follow up on enquiries and log every call.",points:["Appointment and sales calls","Transcripts saved to your CRM"],span:"lg:col-span-4"}];
export const stats=[{to:70,suffix:"%",label:"of repetitive work automated in our estimates"},{to:24,suffix:"/7",label:"agents that never miss a follow-up"},{to:3,suffix:"",label:"core services: agents, websites, automation"}];
export const testimonials:{quote:string;name:string;role:string}[]=[];
export const pilot=[{title:"One working workflow",text:"We build first the one automation that would save you the most time."},{title:"Tested on your real examples",text:"You watch it handle your own messages, leads or bookings before you decide anything."},{title:"A clear summary",text:"We show how much time it saved and what to automate next."}];
export const tiers:{name:string;monthly:number|null;annual:number|null;blurb:string;features:string[];popular?:boolean}[]=[
{name:"Starter",monthly:149,annual:119,blurb:"Prove the value with one workflow.",features:["One automated workflow","Setup and testing on your examples","Email support"]},
{name:"Growth",monthly:399,annual:319,blurb:"For teams ready to hand off more.",features:["Everything in Starter","Up to 3 workflows","AI agent or calling agent","Monthly improvement review"],popular:true},
{name:"Custom",monthly:null,annual:null,blurb:"Tailored to how your business runs.",features:["Multiple agents and integrations","Custom website and dashboards","Priority support"]}];
export const faqs=[
{q:"Do I need technical knowledge?",a:"No. You describe the task in plain words and we handle the tools, setup and testing."},
{q:"Will it work with the tools we already use?",a:"In most cases yes. We connect to common tools such as WhatsApp, email, Google Sheets, CRMs and your website. We confirm this in the free review."},
{q:"What if the agent gets something wrong?",a:"Agents pass unclear or sensitive cases to a person, and you can see what they did. We improve them using real examples."},
{q:"How long does a first version take?",a:"It depends on the task. A simple workflow can often be ready within days. You get a clear timeline after the review."},
{q:"Are the calling agents live?",a:"Calling agents are set up per client with your number, wording and tools. We tell you exactly what is ready before you commit."}];
