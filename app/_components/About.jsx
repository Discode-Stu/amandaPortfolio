import Image from "next/image"
import React from "react"
import { education, exp1, exp2, exp3, skills } from "../_constants"

function About() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row mb-24 sm:mb-44">
        <div className="w-full sm:w-1/2 h-full flex items-center justify-end px-4 pb-6 sm:pb-0 sm:px-0">
          <Image src="/about/edu.webp" width={500} height={500} />
        </div>
        <div className="flex flex-col sm:w-8/12 sm:w-4/12 items-center px-12 sm:px-0 sm:pr-6">
          <Title title={"My Education"} />
          <BulletPoints type={education} half />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row-reverse mb-24 sm:mb-44">
        <div className="w-full sm:w-1/2 h-full flex p-4 sm:p-0 pb-6 sm:pb-0">
          <Image src="/about/skills.webp" width={500} height={500} />
        </div>
        <div className="flex flex-col w-12/12 sm:w-5/12 items-center sm:pr-6">
          <Title title={"My Skills"} />
          <BulletPoints type={skills} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mb-0 sm:mb-24">
        <div className="w-full sm:w-1/2 h-full flex justify-center p-4 sm:p-0 pb-6 sm:pb-0">
          <Image src="/about/exp.webp" width={500} height={500} />
        </div>
        <div className="flex flex-col w-12/12 sm:w-5/12 items-center px-6 sm:px-0 sm:pr-6">
          <Title title={"My Experience"} />
          <p className="mb-8 text-center text-[16px] leading-8">{exp1}</p>
          <p className="mb-8 text-center text-[16px] leading-8">{exp2}</p>
          <p className="mb-8 text-center text-[16px] leading-8">{exp3}</p>
        </div>
      </div>
    </div>
  )
}

export default About

function Title({ title }) {
  return <div className="text-[22px] mb-4 sm:mb-6">{title}</div>
}

function BulletPoints({ type, half = false }) {
  return (
    <div className={`${half ? "sm:w-1/2" : ""} flex flex-col`}>
      {type.map((item) => (
        <ul
          className="list-disc text-[16px]"
          key={item}
          style={{ fontWeight: 400, lineHeight: 1.5 }}
        >
          <li className="text=[16px]">{item}</li>
        </ul>
      ))}
    </div>
  )
}
