"use client";
import {useState} from "react";
import {AnimatePresence,motion} from "framer-motion";
import {Plus} from "lucide-react";
import {Reveal} from "@/components/ui/fx";
import {faqs} from "@/lib/content";
export default function Faq(){
const [open,setOpen]=useState<number|null>(0);
return(<section id="faq" className="mx-auto max-w-3xl px-4 py-24"><Reveal><p className="text-sm font-semibold text-teal-500">FAQ</p><h2 className="h2 mt-3">Questions people ask</h2></Reveal>
<div className="mt-10 space-y-3">{faqs.map((f,i)=>{const o=open===i;return(<Reveal key={f.q} delay={i*.06}><div className="glass overflow-hidden rounded-2xl">
<button id={`q${i}`} aria-expanded={o} aria-controls={`a${i}`} onClick={()=>setOpen(o?null:i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold">{f.q}<motion.span animate={{rotate:o?45:0}} className="text-teal-400"><Plus size={20}/></motion.span></button>
<AnimatePresence initial={false}>{o&&<motion.div id={`a${i}`} role="region" aria-labelledby={`q${i}`} initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.3,ease:[.2,.8,.2,1]}} className="overflow-hidden"><p className="px-6 pb-5 text-slate-600 dark:text-slate-400">{f.a}</p></motion.div>}</AnimatePresence></div></Reveal>)})}</div></section>)}
