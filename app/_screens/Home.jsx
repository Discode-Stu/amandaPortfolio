"use client"

import React from "react"
import { Carousel } from "../_components/Carousel"
import Hero from "../_components/Hero"

import { Italiana, Karla, Old_Standard_TT } from "next/font/google"
import About from "../_components/About"

const IMAGES = [
  { url: "/pics2/img15.jpg", alt: "img15" },
  { url: "/pics2/img10.png", alt: "img10" },
  { url: "/pics2/img9.jpg", alt: "img9" },
  { url: "/pics2/img14.jpg", alt: "img14" },
  { url: "/pics2/img1.jpg", alt: "img1" },
  { url: "/pics2/img4.jpg", alt: "img4" },
  { url: "/pics2/img3.jpg", alt: "pic3" },
  { url: "/pics2/img6.jpg", alt: "img6" },
  { url: "/pics2/img20.jpg", alt: "img20" },
  { url: "/pics2/img26.jpg", alt: "img26" },
  { url: "/pics2/img23.jpg", alt: "img23" },
  { url: "/pics2/img13.jpg", alt: "img13" },
  { url: "/pics2/img8.jpg", alt: "img8" },
  { url: "/pics2/img12.jpg", alt: "img12" },
  { url: "/pics2/img22.jpg", alt: "img22" },
  { url: "/pics2/img2.jpg", alt: "img2" },
  { url: "/pics2/img11.jpg", alt: "img11" },
  { url: "/pics2/img7.JPG", alt: "img7" },
  { url: "/pics2/img24.jpg", alt: "img24" },
  { url: "/pics2/img19.jpg", alt: "img19" },
  { url: "/pics2/img21.jpg", alt: "img21" },
  { url: "/pics2/img5.jpg", alt: "img5" },
  { url: "/pics2/img18.jpg", alt: "img18" },
  { url: "/pics2/img16.jpg", alt: "img16" },
  { url: "/pics2/img25.jpg", alt: "img25" },

  // { url: "/pics2/img17.jpg", alt: "img17" },
]

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  fallback: ["system-ui", "Helvetica Neue", "Helvetica", "Arial"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="bg-white h-auto">
        <div className="p-10 pt-14 pb-0 sm:pb-10">
          <h2
            className={`
            ${karla.variable} font-bold font-karla text-center text-[19px] mb-4 sm:mb-16 sm:mt-8`}
          >
            About Me
          </h2>
        </div>
        <About />
      </div>
      <div className="bg-white">
        <div className="p-10 pt-14 pb-0 sm:pb-10">
          <h2
            className={`
            ${karla.variable} font-bold font-karla text-center text-[19px] mb-4`}
          >
            Portfolio
          </h2>
        </div>
        <div className="h-screen sm:py-4 pb-10" id="carousel">
          <Carousel images={IMAGES} />
        </div>
      </div>
    </div>
  )
}

export default Home
