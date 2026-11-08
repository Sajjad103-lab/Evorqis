"use client";
import {MotionConfig} from "framer-motion";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Bento from "@/components/sections/Bento";
import Stats from "@/components/sections/Stats";
import Proof from "@/components/sections/Proof";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
export default function Page(){return(<MotionConfig reducedMotion="user"><Header/><main><Hero/><Marquee/><Bento/><Stats/><Proof/><Pricing/><Faq/></main><Footer/></MotionConfig>)}
