"use client";
import {FormEvent,useState} from "react";
import {motion} from "framer-motion";
import {ArrowRight,CheckCircle2} from "lucide-react";
import {Magnetic,Reveal,Spotlight} from "@/components/ui/fx";
import {EMAIL,nav} from "@/lib/content";
type S="idle"|"error"|"loading"|"done";
export default function Footer(){
const [email,setEmail]=useState(""),[st,setSt]=useState<S>("idle");
async function submit(e:FormEvent){e.preventDefault();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setSt("error");return}
setSt("loading");try{const r=await fetch("/api/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email})});setSt(r.ok?"done":"error")}catch{setSt("error")}}
const col=(title:string,links:{label:string;href:string}[])=><div><h3 className="text-sm font-bold">{title}</h3><ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">{links.map(l=><li key={l.label}><a href={l.href} className="relative inline-block hover:text-teal-500">{l.label}</a></li>)}</ul></div>;
return(<footer className="relative px-4 pb-10 pt-12"><div className="mx-auto max-w-6xl">
<Reveal><Spotlight className="overflow-hidden p-8 sm:p-14" tilt={3}><div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-400/25 blur-3xl"/>
<h2 className="h2 max-w-xl">Which task would you hand off first?</h2><p className="mt-4 max-w-lg text-slate-600 dark:text-slate-400">Send us one repetitive task from your business. We’ll tell you honestly whether it can be automated and what it would take.</p>
<div className="mt-8"><Magnetic><a href={`mailto:${EMAIL}?subject=Workflow%20review`} className="btn-p">{EMAIL}<ArrowRight size={16}/></a></Magnetic></div></Spotlight></Reveal>
<div className="mt-16 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
<div><a href="#top" className="text-lg font-extrabold tracking-wider">EVOR<span className="text-teal-500">Q</span>IS</a><p className="mt-3 max-w-xs text-sm text-slate-600 dark:text-slate-400">AI agents, websites and workflow automation.</p>
<form onSubmit={submit} noValidate className="mt-5"><label htmlFor="nl" className="text-sm font-semibold">Get occasional updates</label>
<div className="mt-2 flex gap-2"><input id="nl" type="email" value={email} onChange={e=>{setEmail(e.target.value);if(st!=="idle")setSt("idle")}} placeholder="you@company.com" aria-invalid={st==="error"} aria-describedby="nl-msg" className={`glass min-w-0 flex-1 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 ${st==="error"?"border-red-400 focus:ring-red-400":"focus:ring-teal-400"}`}/>
<button disabled={st==="loading"||st==="done"} className="btn-p px-5 py-2.5 disabled:opacity-60">{st==="loading"?"…":"Join"}</button></div>
<div id="nl-msg" role="status" className="mt-2 h-5 text-sm">{st==="error"&&<motion.span initial={{opacity:0}} animate={{opacity:1}} className="text-red-400">Please enter a valid email address.</motion.span>}{st==="done"&&<motion.span initial={{opacity:0}} animate={{opacity:1}} className="inline-flex items-center gap-1.5 text-emerald-500"><CheckCircle2 size={15}/>You’re on the list.</motion.span>}</div></form></div>
{col("Explore",nav)}{col("Services",[{label:"AI agents",href:"#services"},{label:"Websites",href:"#services"},{label:"Automation",href:"#services"},{label:"Calling agents",href:"#services"}])}{col("Contact",[{label:EMAIL,href:`mailto:${EMAIL}`}])}</div>
<p className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10">© 2026 EVORQIS. All rights reserved.</p></div></footer>)}
