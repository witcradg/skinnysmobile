"use client"

import Image from "next/image"
import { Faq } from "@/components/Faq"
import { Pricing } from "@/components/Pricing"
import OptInSms from "@/components/opt-in-sms"

const HomePage = () => {
  return (
    <main className="m-12 lg:mx-auto">
      <Faq />
      <div className="my-8" >
        <Pricing />
      </div>
      <div className="flex justify-around pt-4">
        <Image src="/img/skinny-engine.webp" alt="hero" width={256} height={256} />
        <Image src="/img/skinnys-signal.webp" alt="hero" width={256} height={256} />
      </div>
    </main>
  )
}

export default HomePage
