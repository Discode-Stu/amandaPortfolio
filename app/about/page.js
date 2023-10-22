import Head from "next/head"
import { aboutMe1, aboutMe2, aboutMe3 } from "../_constants"

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className="relative min-h-screen min-w-screen">
        <h1 className="sm:ml-[100px] sm:text-left text-center my-10 mb-24 text-3xl">
          About Me
        </h1>
        <div className="skew">
          <h2 className="z-10 text-2xl p-3 pl-4 pb-5 whitespace-no-wrap sm:hidden">
            About me
          </h2>
          <div className="flex">
            <h2 className="w-1/4 z-10 text-2xl pt-0 whitespace-nowrap hidden sm:flex">
              About me
            </h2>
            <section className="w-full sm:w-3/4 sm:pr-20">
              <p className="z-10 text-justify mb-6 leading-loose px-4 sm:px-0">
                {aboutMe1}
              </p>
              <p className="z-10 text-justify mb-6 leading-loose px-4 sm:px-0">
                {aboutMe2}
              </p>
              <p className="z-10 text-justify mb-[140px] leading-loose px-4 sm:px-0">
                {aboutMe3}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
