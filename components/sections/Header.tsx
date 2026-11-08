"use client";
import {useState} from "react";
import {AnimatePresence,motion,useMotionValueEvent,useScroll,useSpring} from "framer-motion";
import {Menu,X} from "lucide-react";
import {nav,EMAIL} from "@/lib/content";
import {Magnetic} from "@/components/ui/fx";
import ThemeToggle from "@/components/ui/ThemeToggle";
export default function Header(){
const [open,setOpen]=useState(false),[sc,setSc]=useState(false);
const {scrollY,scrollYProgress}=useScroll(),bar=useSpring(scrollYProgress,{stiffness:120,damping:25});
useMotionValueEvent(scrollY,"change",v=>setSc(v>20));
return(<header className="fixed inset-x-0 top-0 z-50 px-3 pt-[calc(env(safe-area-inset-top)+.75rem)]">
<motion.div style={{scaleX:bar}} className="fixed inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-teal-400 via-cyan-400 to-amber-300"/>
<div className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-500 ${sc?"border-slate-300/60 bg-white/80 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-black/50":"border-transparent"}`}>
<a href="#top" className="text-lg font-extrabold tracking-wider">EVOR<span className="text-teal-500">Q</span>IS</a>
<nav aria-label="Main" className="hidden items-center gap-8 md:flex">{nav.map(n=><a key={n.href} href={n.href} className="group relative text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">{n.label}<span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-teal-400 transition-transform duration-300 group-hover:scale-x-100"/></a>)}</nav>
<div className="flex items-center gap-2"><ThemeToggle/>
<div className="hidden md:block"><Magnetic><a href={`mailto:${EMAIL}`} className="btn-p shadow-[0_0_30px_-4px] shadow-teal-400/60">Get in touch</a></Magnetic></div>
<button className="grid h-10 w-10 place-items-center rounded-full border border-slate-300/60 md:hidden dark:border-white/10" aria-label="Open menu" aria-expanded={open} aria-controls="drawer" onClick={()=>setOpen(true)}><Menu size={18}/></button></div></div>
<AnimatePresence>{open&&<>
<motion.div className="fixed inset-0 bg-black/50 backdrop-blur-sm" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setOpen(false)}/>
<motion.aside id="drawer" role="dialog" aria-label="Menu" className="fixed inset-y-0 right-0 flex w-72 flex-col gap-2 border-l border-white/10 bg-white p-6 dark:bg-[#07110f]" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{type:"spring",damping:28,stiffness:260}}>
<button className="mb-4 self-end" aria-label="Close menu" onClick={()=>setOpen(false)}><X/></button>
{nav.map((n,i)=><motion.a key={n.href} href={n.href} onClick={()=>setOpen(false)} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{delay:.08*i+.1}} className="rounded-xl px-3 py-3 text-lg font-semibold hover:bg-slate-100 dark:hover:bg-white/5">{n.label}</motion.a>)}
<a href={`mailto:${EMAIL}`} className="btn-p mt-4 justify-center">Get in touch</a></motion.aside></>}</AnimatePresence></header>)}
