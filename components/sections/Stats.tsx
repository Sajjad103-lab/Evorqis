"use client";
import {Counter,Reveal,Spotlight} from "@/components/ui/fx";
import {stats} from "@/lib/content";
export default function Stats(){
return(<section id="stats" className="mx-auto max-w-6xl px-4 py-16"><div className="grid gap-4 md:grid-cols-3">{stats.map((s,i)=>
<Reveal key={s.label} delay={i*.12}><Spotlight className="p-8" tilt={5}><p className="bg-gradient-to-r from-teal-500 to-amber-400 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent"><Counter to={s.to} suffix={s.suffix}/></p><p className="mt-3 text-slate-600 dark:text-slate-400">{s.label}</p></Spotlight></Reveal>)}</div></section>)}
