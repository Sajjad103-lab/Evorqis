"use client";
import {Quote} from "lucide-react";
import {Reveal,Spotlight} from "@/components/ui/fx";
import {pilot,testimonials} from "@/lib/content";
export default function Proof(){
const has=testimonials.length>0;
return(<section className="mx-auto max-w-6xl px-4 py-24"><Reveal><p className="text-sm font-semibold text-teal-500">{has?"Client feedback":"Start small"}</p><h2 className="h2 mt-3 max-w-2xl">{has?"What clients say":"A pilot that proves it before you commit"}</h2></Reveal>
<div className="mt-12 grid gap-4 md:grid-cols-3">{has?testimonials.map((t,i)=><Reveal key={t.name} delay={i*.1}><Spotlight className="h-full p-7"><Quote className="text-teal-400"/><p className="mt-4">{t.quote}</p><p className="mt-5 text-sm font-semibold">{t.name}<span className="font-normal text-slate-500"> · {t.role}</span></p></Spotlight></Reveal>)
:pilot.map((p,i)=><Reveal key={p.title} delay={i*.1}><Spotlight className="h-full p-7"><span className="grid h-9 w-9 place-items-center rounded-full border border-teal-400/50 text-sm font-bold text-teal-500">{i+1}</span><h3 className="mt-5 text-xl font-bold">{p.title}</h3><p className="mt-2 text-slate-600 dark:text-slate-400">{p.text}</p></Spotlight></Reveal>)}</div>
{!has&&<p className="mt-6 text-sm text-slate-500">We’re an early-stage team taking on a small number of pilot businesses, and you work directly with the founder.</p>}</section>)}
