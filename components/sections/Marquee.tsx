import {tools} from "@/lib/content";
export default function Marquee(){
const row=(hide:boolean)=><ul aria-hidden={hide||undefined} className="flex shrink-0 items-center gap-4 pr-4">{tools.map(t=><li key={t} className="glass whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{t}</li>)}</ul>;
return(<section aria-label="Tools we connect with" className="py-10"><p className="mb-5 text-center text-sm font-medium text-slate-500">Connects with the tools you already use</p>
<div className="group flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"><div className="flex animate-marquee group-hover:[animation-play-state:paused]">{row(false)}{row(true)}</div></div></section>)}
