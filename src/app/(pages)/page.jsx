import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedPostsData } from "@library/posts";

import AboutSection from "@components/sections/About";
import IdeasSection from "../_components/sections/Ideas";

import ContactSection from "../_components/sections/Contato";
import ServicesTwoSection from "../_components/sections/ServicesTwo";
import TestimonialrealSlider from "../_components/sliders/Testimonialdepoim";
import HowWeWorkSection from "@components/sections/HowWeWork";
import CoresSection from "@components/sections/Cores";
import AdvantagesSection from "@components/sections/Advantages";
import LatestPostsSection from "@components/sections/LatestPosts";

const HeroTwoSlider = dynamic( () => import("@components/sliders/HeroTwo"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );

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
      <PartnersSlider />  
      <AboutSection />
      <IdeasSection />
      <TestimonialSlider/>
      
      <ServicesTwoSection />
      

<Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
      <AdvantagesSection />
      <TestimonialrealSlider/>
      <ContactSection />    
           
     
    </>
  );
};
export default Home3;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}