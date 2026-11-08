"use client";
import {motion} from "framer-motion";
import {ArrowRight,CheckCircle2,Sparkles,Zap} from "lucide-react";
import {Magnetic,Spotlight} from "@/components/ui/fx";
import {EMAIL} from "@/lib/content";
const float=(d:number,a=14)=>({animate:{y:[0,-a,0]},transition:{duration:d,repeat:Infinity,ease:"easeInOut" as const}});
export default function Hero(){
const words="Give your team its time back.".split(" ");
return(<section id="top" className="relative overflow-hidden px-4 pb-24 pt-36 sm:pt-44">
<motion.div aria-hidden className="absolute -left-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-teal-500/25 blur-3xl" animate={{x:[0,60,0],y:[0,40,0]}} transition={{duration:16,repeat:Infinity,ease:"easeInOut"}}/>
<motion.div aria-hidden className="absolute -right-40 top-40 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl" animate={{x:[0,-50,0],y:[0,-40,0]}} transition={{duration:19,repeat:Infinity,ease:"easeInOut"}}/>
<div aria-hidden className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl"/>
<div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
<div>
<motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium shadow-[0_0_30px_-8px] shadow-teal-400/70"><Sparkles size={15} className="text-amber-400"/>Now taking pilot clients</motion.div>
<h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl" aria-label="Give your team its time back.">
{words.map((w,i)=><span key={i} aria-hidden className="mr-[.25em] inline-block overflow-hidden pb-2 align-top"><motion.span className="inline-block bg-gradient-to-b from-slate-900 to-teal-700 bg-clip-text text-transparent dark:from-white dark:to-teal-300" initial={{y:"110%",rotate:5}} animate={{y:0,rotate:0}} transition={{duration:.9,delay:.25+i*.1,ease:[.2,.8,.2,1]}}>{w}</motion.span></span>)}</h1>
<motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.9,duration:.8}} className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">EVORQIS builds AI agents, calling agents, business websites and automated workflows, so repetitive work gets done without anyone doing it.</motion.p>
<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.1,duration:.8}} className="mt-9 flex flex-wrap gap-3">
<Magnetic><a href={`mailto:${EMAIL}?subject=Free%20workflow%20review`} className="btn-p">Book a free workflow review<ArrowRight size={16}/></a></Magnetic>
<Magnetic><a href="#pricing" className="btn-g">See pricing</a></Magnetic></motion.div></div>
<motion.div className="relative" initial={{opacity:0,x:60,rotateY:-12}} animate={{opacity:1,x:0,rotateY:0}} transition={{delay:.6,duration:1.1,ease:[.2,.8,.2,1]}}>
<motion.div {...float(6)}><Spotlight className="p-5" tilt={8}>
<div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 font-bold text-slate-950">E</div><div><p className="text-sm font-semibold">EVORQIS agent</p><p className="flex items-center gap-1.5 text-xs text-emerald-500"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"/>Replying now</p></div></div>
<div className="mt-5 space-y-3 text-sm">
<p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-slate-950">Do you deliver to Lahore? I need 20 units.</p>
<p className="w-fit max-w-[85%] rounded-2xl rounded-bl-md border border-slate-200 bg-white/70 px-4 py-2 dark:border-white/10 dark:bg-white/5">Yes, in 2–3 days. I’ve emailed you a quote and a teammate will confirm today.</p>
<div className="flex flex-wrap gap-2 pt-1 text-xs font-semibold text-teal-600 dark:text-teal-300"><span className="rounded-full border border-teal-400/30 px-3 py-1">✓ Lead saved</span><span className="rounded-full border border-teal-400/30 px-3 py-1">✓ Team notified</span></div></div></Spotlight></motion.div>
<motion.div {...float(5,18)} className="glass absolute -left-6 top-10 hidden items-center gap-2 rounded-2xl px-4 py-2 text-xs font-semibold shadow-xl sm:flex"><Zap size={14} className="text-amber-400"/>Replied in 4 seconds</motion.div>
<motion.div {...float(7,12)} className="glass absolute -right-4 bottom-8 hidden items-center gap-2 rounded-2xl px-4 py-2 text-xs font-semibold shadow-xl sm:flex"><CheckCircle2 size={14} className="text-emerald-400"/>Follow-up scheduled</motion.div>
</motion.div></div></section>)}
