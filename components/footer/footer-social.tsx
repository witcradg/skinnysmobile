import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaPinterest,
  FaApple,
  FaLinkedin,
} from 'react-icons/fa'

interface Social {
  label: string;
  enable: boolean;
  link: string;
}

import styles from './Footer.module.css'

export const FooterSocial = (data: any) => {

  const socials = data.footerJson.socialElement.socials

  /** function that takes a label and returns the link for that label **/
  const getLink = (label: string) => {
    const social = socials.find((social: Social) => social.label === label)
    return social?.link
  }

  /** function that takes a label and returns true or false if that label is in use **/
  const isInUse = (label: string) => {
    const social = socials.find((social: Social) => social.label === label)
    return social?.enable
  }

  return (
    <div
      id="footer-social"
      className="flex flex-wrap items-center justify-around flex-col mb-8 pl-2 pr-8"
    >
      <div className="flex self-stretch justify-around text-xl">
        {isInUse("facebook") ? (
          <div className={styles.social_icon}>
            <a aria-label="facebook icon" href={getLink("facebook")}>
              <FaFacebook  className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}
        {isInUse("twitter") ? (
          <div className={styles.social_icon}>
            <a aria-label="twitter icon" href={getLink("twitter")}>
              <FaTwitter className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}
        {isInUse("google") ? (
          <div className={styles.social_icon}>
            <a aria-label="google icon" href={getLink("google")}>
              <FaGoogle className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}

        {isInUse("instagram") ? (
          <div className={styles.social_icon}>
            <a aria-label="instagram icon" href={getLink("instagram")}>
              <FaInstagram className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}

        {isInUse("pinterest") ? (
          <div className={styles.social_icon}>
            <a aria-label="pinterest icon" href={getLink("pinterest")}>
              <FaPinterest className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}

        {isInUse("apple") ? (
          <div className={styles.social_icon}>
            <a aria-label="apple icon" href={getLink("apple")}>
              <FaApple className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}

        {isInUse("linkedin") ? (
          <div className={styles.social_icon}>
            <a aria-label="linkedin icon" href={getLink("linkedin")}>
              <FaLinkedin className="inline-block text-chsblue" />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}
