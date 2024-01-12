
import Image from 'next/image'
import { loadContent } from '@/components/util/load-content'
import styles from '@/components/footer/Footer.module.css'
import footerJson from '@/content/footer.json'
import { FooterSocial } from "@/components/footer/footer-social"
import { FooterContacts } from '@/components/footer/footer-contacts'
import { ServicesLinks } from '@/components/footer/services-links'
import IFrame from '@/components/util/IFrame'


// import { DesktopFooter } from "./desktop-footer";
// import { MobileFooter } from "./mobile-footer";

export const Footer = () => {

  return (
    <footer className={styles.footer_background}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-auto">

        <div id="footer-col-1" className='flex flex-col items-center p-8 justify-between'>
          <Image className='my-4' src={footerJson.logoImage} alt="Skinny's Performance and Auto Repair" width={200} height={400} />
          <div className='text-center my-4'>{footerJson.logoColumnText}</div>
          <FooterSocial footerJson={footerJson} />
        </div>

        <div id="footer-col-2" className='m-12 text-center'>
          <h4 className={styles.column_title}>{footerJson.column2header}</h4>
          <ServicesLinks classes="text-center m-8 text-lg " />
        </div>

        <div id="footer-col-3" className='m-4 text-center'>
          <div className="flex justify-center my-8">
            <IFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.9153281663994!2d-82.8719718238805!3d42.55709077117526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88252775571352c3%3A0x51d254bbae697935!2sSkinny&#39;s%20Performance!5e0!3m2!1sen!2sus!4v1704301333254!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div id="footer-col-4" className='m-12 text-center'>
          <h4 className={styles.column_title}>{footerJson.column4header}</h4>
          <FooterContacts data={footerJson} />
        </div>

      </div>
    </footer>
  )
};
