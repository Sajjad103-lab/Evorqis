"use client";
import {AnimatePresence,motion} from "framer-motion";
import {Moon,Sun} from "lucide-react";
import {useEffect,useState} from "react";
export default function ThemeToggle(){
const [dark,setDark]=useState(true);
useEffect(()=>setDark(document.documentElement.classList.contains("dark")),[]);
const toggle=()=>{const d=document.documentElement.classList.toggle("dark");setDark(d);try{localStorage.setItem("theme",d?"dark":"light")}catch{}};
return <button onClick={toggle} aria-label={dark?"Switch to light mode":"Switch to dark mode"} className="grid h-10 w-10 place-items-center rounded-full border border-slate-300/60 hover:bg-slate-200/60 dark:border-white/10 dark:hover:bg-white/10">
<AnimatePresence mode="wait" initial={false}><motion.span key={dark?"d":"l"} initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:90,opacity:0}} transition={{duration:.2}}>{dark?<Sun size={18}/>:<Moon size={18}/>}</motion.span></AnimatePresence></button>}
