"use client"

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import site from '@/content/site.config.json'
import { Footer } from '@/components/footer/footer'
import footerJson from '@/content/footer.json'

import NavSection, { NavButton } from '@/components/header/nav-section'
import { FaPhone, FaRegStar, FaStar, FaRegStarHalf } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Skinny\'s Performance and Auto Repair',
//   description: `Skinny\'s Performance and Auto Repair is a full service auto repair shop in Harrison Twp. \
//   We are located in Mountain Home, Arkansas. We offer a wide range of services from oil changes to engine swaps. \
//   We also offer performance upgrades for your vehicle.`
// }

const copyrightMobile = () => {
  let titleMobile = site.config.title.split("|")

  return (
    <>
      {titleMobile[0]}
      <br />
      {titleMobile[1]}
      <br />
    </>
  )
}
``
const phoneNumber = site.config.phone
const phoneHref = `tel:${phoneNumber.replace(/[^a-zA-Z0-9]/g, '')}`

const TopHeaderRow = () => (
  <div className="relative bg-blue-900 text-2xl">
    <div className="md:flex md:wrap items-center justify-around my-0 mx-auto">
      <div id="address" className="my-3">
        <a href="/" title="Find us" className="text-red-400">
          <span>Clinton?? Twp</span>, <span>Clinton?? Twp, MI 99999</span>
        </a>
      </div>
      <div className="my-3 flex flew-row justify-around text-white">
        <div className="text-white mx-2 font-semibold"> Skinny&apos;s Performance </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} className="text-yellow-400 mx-1" />
        ))}
        {/* <FaRegStarHalf className="text-yellow-400 ml-1 mr-2 " /> */}
        <a className='pl-2' href="https://facebook.com/reviews" title="See all reviews"> 247 reviews </a>
      </div>
      <div id="phone" className="my-3">
        <a href={phoneHref} title="Call Skinny's Performance" className="">
          <span className="whitespace-nowrap text-white flex flex-row">
            <FaPhone className="inline-block text-3xl text-white mr-4 pt-1" />
            <div id="phonenumber" className='text-4xl font-bold text-white'>{phoneNumber}</div>
          </span>
        </a>
      </div>

      <div id="hours" className="my-3">
        <span className="font-semibold text-white">Mon - Fri: 7:30 AM - 5:00 PM</span>
      </div>
    </div>
  </div>
)

const NavigationBar = () => (
  <div className="flex align-center items-center justify-between px-16">
    <div>
        <Link href="/">
        <Image src="/img/skinny-engine.webp" alt="hero" width={120} height={120} />
        </Link>
      </div>
      <NavSection />
    </div >
  )

const AnnouncmentBar = () => (
  <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-red-600 bg-no-repeat bg-left-top bg-contain">
    <div className="flex flex-row items-center justify-around">
      <div className="text-4xl uppercase text-white">
        <p>This is a custom message <br />spanning two lines!</p>
      </div>
      <NavButton target='/appointments/' label='Request An Appointment' />
    </div>
  </div>
)

const header = async () => {
  return (
    <header className="py-2">
      <TopHeaderRow />
      <NavigationBar />
      <AnnouncmentBar />
    </header>
  )
}

const footer = async () => {
  const logo = footerJson.logoImage
  return (
    <>
      <Footer />
      {/* <div className='bg-blue-300 min-h-32 flex justify-center p-8'>
        <Image src={logo} alt="Skinny's Performance and Auto Repair" width={200} height={200} />
      </div> */}

      <footer
        id="copyright"
        className="px-4 lg:px-0"
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        <div className="hidden lg:flex lg:flex-row justify-between content-start">
          © {new Date().getFullYear()} &middot; {site.config.title}&nbsp;
        </div>
        <div className="block lg:hidden">
          © {new Date().getFullYear()} &middot; {copyrightMobile()}
        </div>
      </footer>
    </>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <nav> <h1 className='text-center m-4'>Skinny&apos;s Performance</h1> </nav> */}
        {header()}
        {children}
        {footer()}
      </body>
    </html>
  )
}
