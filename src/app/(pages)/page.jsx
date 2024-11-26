import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedPostsData } from "@library/posts";

import AboutSection from "@components/sections/About";
import IdeasSection from "../_components/sections/Ideas";

import ContactSection from "../_components/sections/Contact";
import ServicesTwoSection from "../_components/sections/ServicesTwo";

const HeroTwoSlider = dynamic( () => import("@components/sliders/HeroTwo"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );


export const metadata = {
  title: {
		default: "Início",
	},
  description: AppData.settings.siteDescription,
}

async function Home3() {
  const posts = await getAllPosts();

  return (
    <>
      <HeroTwoSlider />   
      <AboutSection />
      <IdeasSection />
      <TestimonialSlider/>
      <ServicesTwoSection />
      <ContactSection />         
     
    </>
  );
};
export default Home3;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}