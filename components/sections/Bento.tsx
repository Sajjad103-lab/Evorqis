"use client";
import {Bot,Globe,PhoneCall,Workflow} from "lucide-react";
import {Reveal,Spotlight} from "@/components/ui/fx";
import {services} from "@/lib/content";
const icons={agents:Bot,web:Globe,flow:Workflow,voice:PhoneCall};
export default function Bento(){
return(<section id="services" className="mx-auto max-w-6xl px-4 py-24">
<Reveal><p className="text-sm font-semibold text-teal-500">What we build</p><h2 className="h2 mt-3 max-w-xl">Four services, one team</h2></Reveal>
<div className="mt-12 grid gap-4 lg:grid-cols-6">{services.map((s,i)=>{const I=icons[s.key as keyof typeof icons];return(
<Reveal key={s.key} delay={i*.1} className={s.span}><Spotlight className="h-full p-7">
<div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/30"><I size={22}/></div>
<h3 className="mt-6 text-2xl font-bold">{s.title}</h3><p className="mt-2 text-slate-600 dark:text-slate-400">{s.text}</p>
<ul className="mt-5 space-y-2 text-sm">{s.points.map(p=><li key={p} className="flex gap-2"><span className="text-teal-400">✓</span>{p}</li>)}</ul></Spotlight></Reveal>)})}</div></section>)}
