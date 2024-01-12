import React from "react"
import headerJson from '@/content/header.json'
import Link from "next/link"

interface ServicesLinksProps {
  classes: string;
}

export const ServicesLinks = (props: ServicesLinksProps) => {

  const services = headerJson.submenu1

  return (
    <div>
      {services.map((item) => {
        return (
          <Link key={item.link} className={props.classes} href={item.link}>
            <div>{item.label}</div>
          </Link>
        )
      })}
    </div>
  )
}
