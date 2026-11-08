"use client";
import {animate,motion,useInView,useMotionValue,useSpring} from "framer-motion";
import {ReactNode,useEffect,useRef} from "react";
export function Reveal({children,delay=0,className="",y=28}:{children:ReactNode;delay?:number;className?:string;y?:number}){
return <motion.div className={className} initial={{opacity:0,y}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.7,delay,ease:[.2,.8,.2,1]}}>{children}</motion.div>}
export function Magnetic({children,className=""}:{children:ReactNode;className?:string}){
const x=useMotionValue(0),y=useMotionValue(0),sx=useSpring(x,{stiffness:220,damping:16}),sy=useSpring(y,{stiffness:220,damping:16});
return <motion.div className={`inline-block ${className}`} style={{x:sx,y:sy}} whileHover={{scale:1.05}} whileTap={{scale:.97}}
onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();x.set((e.clientX-r.left-r.width/2)*.25);y.set((e.clientY-r.top-r.height/2)*.3)}}
onMouseLeave={()=>{x.set(0);y.set(0)}}>{children}</motion.div>}
export function Spotlight({children,className="",tilt=6}:{children:ReactNode;className?:string;tilt?:number}){
const ref=useRef<HTMLDivElement>(null),mx=useMotionValue(0),my=useMotionValue(0),rx=useSpring(mx,{stiffness:160,damping:18}),ry=useSpring(my,{stiffness:160,damping:18});
return <motion.div ref={ref} style={{rotateX:rx,rotateY:ry,transformPerspective:900}} whileHover={{y:-4}}
className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 shadow-xl shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40 ${className}`}
onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
ref.current?.style.setProperty("--x",`${e.clientX-r.left}px`);ref.current?.style.setProperty("--y",`${e.clientY-r.top}px`);mx.set(-py*tilt);my.set(px*tilt)}}
onMouseLeave={()=>{mx.set(0);my.set(0)}}>
<div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background:"radial-gradient(340px circle at var(--x,50%) var(--y,50%),rgba(45,212,191,.18),transparent 60%)"}}/>
<div className="relative">{children}</div></motion.div>}
export function Counter({to,suffix=""}:{to:number;suffix?:string}){
const ref=useRef<HTMLSpanElement>(null),inView=useInView(ref,{once:true});
useEffect(()=>{if(!inView)return;const c=animate(0,to,{duration:1.6,ease:"easeOut",onUpdate:v=>{if(ref.current)ref.current.textContent=Math.round(v)+suffix}});return()=>c.stop()},[inView,to,suffix]);
return <span ref={ref}>{to}{suffix}</span>}
