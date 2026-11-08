"use client";
import {useState} from "react";
import {AnimatePresence,motion} from "framer-motion";
import {Check} from "lucide-react";
import {Magnetic,Reveal,Spotlight} from "@/components/ui/fx";
import {EMAIL,tiers} from "@/lib/content";
export default function Pricing(){
const [annual,setAnnual]=useState(true);
return(<section id="pricing" className="mx-auto max-w-6xl px-4 py-24"><Reveal className="text-center"><p className="text-sm font-semibold text-teal-500">Pricing</p><h2 className="h2 mt-3">Simple plans that grow with you</h2>
<div className="mt-8 inline-flex items-center gap-3"><div role="group" aria-label="Billing period" className="glass relative flex rounded-full p-1">
{[["Monthly",false],["Annual",true]].map(([l,v])=><button key={String(l)} aria-pressed={annual===v} onClick={()=>setAnnual(v as boolean)} className="relative z-10 rounded-full px-5 py-2 text-sm font-semibold">{annual===v&&<motion.span layoutId="bill" className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" transition={{type:"spring",stiffness:380,damping:30}}/>}<span className={annual===v?"text-slate-950":""}>{l as string}</span></button>)}</div>
<motion.span animate={{scale:annual?[1,1.15,1]:1,opacity:annual?1:.4}} className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-500">Save 20%</motion.span></div></Reveal>
<div className="mt-12 grid gap-4 lg:grid-cols-3">{tiers.map((t,i)=>{const price=annual?t.annual:t.monthly;return(
<Reveal key={t.name} delay={i*.1}><Spotlight className={`flex h-full flex-col p-8 ${t.popular?"ring-2 ring-teal-400/70":""}`}>
{t.popular&&<span className="absolute right-5 top-5 rounded-full bg-teal-400 px-3 py-1 text-xs font-bold text-slate-950">Most popular</span>}
<h3 className="text-xl font-bold">{t.name}</h3><p className="mt-1 text-sm text-slate-500">{t.blurb}</p>
<div className="mt-6 flex h-14 items-end gap-1">{price===null?<span className="text-4xl font-extrabold">Let’s talk</span>:<><AnimatePresence mode="wait"><motion.span key={String(annual)} initial={{y:14,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-14,opacity:0}} transition={{duration:.2}} className="text-5xl font-extrabold">${price}</motion.span></AnimatePresence><span className="pb-1.5 text-sm text-slate-500">/month</span></>}</div>
<ul className="mt-6 flex-1 space-y-3 text-sm">{t.features.map(f=><li key={f} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-teal-400"/>{f}</li>)}</ul>
<div className="mt-8"><Magnetic className="w-full"><a href={`mailto:${EMAIL}?subject=${t.name}%20plan`} className={`${t.popular?"btn-p":"btn-g"} w-full justify-center`}>{price===null?"Contact us":"Start with a free review"}</a></Magnetic></div></Spotlight></Reveal>)})}</div></section>)}
