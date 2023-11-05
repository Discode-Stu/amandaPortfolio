import React from "react"
import { portfolioOwner } from "../_constants"

import { Italiana, Karla, Old_Standard_TT } from "next/font/google"
import Link from "next/link"

const text1 = "Graphic Design/"
const text2 = "Product Photography"

const text3 = "Transforming vision into visuals"

const buttonText = "View Portfolio"
const buttonLink = "#carousel"

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  fallback: ["system-ui", "Helvetica Neue", "Helvetica", "Arial"],
  weight: ["400"],
  display: "swap",
})

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  fallback: ["system-ui", "Helvetica Neue", "Helvetica", "Arial"],
  weight: ["400"],
  display: "swap",
})

const old_standard_tt = Old_Standard_TT({
  subsets: ["latin"],
  variable: "--font-old-standard-tt",
  fallback: ["system-ui", "Helvetica Neue", "Helvetica", "Arial"],
  weight: ["400"],
  display: "swap",
})

export default function Hero() {
  return (
    <div className="sm:h-screen min-w-screen pl-[20px] sm:pl-[150px] pt-[20px] bg-[rgba(0,0,0,.1)] flex flex-col pb-[40px]">
      <div>
        <h2
          className={`${italiana.variable} font-italiana text-[48px]   sm:text-[78px] text-white leading-tight`}
        >
          {portfolioOwner.split(" ")[0]}
        </h2>
        <h2
          className={`${italiana.variable} font-italiana text-[48px] sm:text-[78px] text-white leading-tight`}
        >
          {portfolioOwner.split(" ")[1]}
        </h2>
      </div>
      <div className="flex flex-col mb-8 mt-20 sm:mt-auto">
        <h2
          className={`${karla.variable} tracking-[4px] font-bold font-karla text-[28px] sm:text-[54px] text-black sm:text-white leading-tight`}
        >
          {text1}
        </h2>
        <h2
          className={`${karla.variable} tracking-[4px] font-bold font-karla text-[28px] sm:text-[54px] text-black sm:text-white leading-tight`}
        >
          {text2}
        </h2>
        <h2
          className={`${old_standard_tt.variable} tracking-[2px] font-oldStandard text-[16px] sm:text-[22px] text-black sm:text-white leading-relaxed mt-4`}
        >
          {text3}
        </h2>

        <div className="mt-4">
          <Link
            href={buttonLink}
            style={{ padding: "14px 40px", maxWidth: "max-content" }}
            className="smooth-scroll flex justify-center align-center rounded-full border-2 border-black bg-black sm:bg-transparent sm:border-white text-white  sm:hover:bg-white sm:hover:text-black transition duration-300"
          >
            <span
              className={`${karla.variable} font-karla text-[14px] tracking-[2px]`}
            >
              {buttonText}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
