import React, { useContext } from "react"
import site from '@/content/site.config.json'

export const FooterContacts = ({ data }: any) => {
  // console.dir(data)
  return (
    <div>
      <div className="whitespace-nowrap mt-8 text-xl font-bold text-chsblue">
        {site.config.businessName}
      </div>
      <div className="whitespace-nowrap mt-8 text-xl">{data.addressLine1}</div>
      <div className="whitespace-nowrap mt-8 text-xl">
        {data.addressCsz}
        <div className="whitespace-nowrap mt-8 text-xl font-semibold">
          {site.config.phone}
        </div>
        <div className="whitespace-nowrap mt-8 text-lg font-semibold">{data.email}</div>
      </div>
    </div>
  )
}
