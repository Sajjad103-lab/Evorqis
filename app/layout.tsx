import type {Metadata,Viewport} from "next";
import "./globals.css";
export const metadata:Metadata={title:"EVORQIS – AI agents, websites and workflow automation",description:"EVORQIS builds AI agents, calling agents, business websites and automated workflows that give your team hours back every week.",openGraph:{title:"EVORQIS – Give your team its time back",description:"AI agents, websites and workflow automation for businesses.",type:"website"}};
export const viewport:Viewport={width:"device-width",initialScale:1,viewportFit:"cover"};
const theme=`try{if(localStorage.getItem("theme")==="light")document.documentElement.classList.remove("dark")}catch(e){}`;
export default function RootLayout({children}:{children:React.ReactNode}){return(
<html lang="en" className="dark" suppressHydrationWarning><head>
<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<script dangerouslySetInnerHTML={{__html:theme}}/></head><body className="font-sans">{children}</body></html>)}
