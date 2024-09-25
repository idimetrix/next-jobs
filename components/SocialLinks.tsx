import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faPinterest,
  faStaylinked,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/pro-light-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { HTMLAttributes } from "react"
import { WEBSITE } from "../constants"
import { cn } from "../utils"

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: string

  cta?: string | null
  website?: string | null
  twitter?: string | null
  discord?: string | null
  medium?: string | null
  telegram?: string | null
  facebook?: string | null
  instagram?: string | null
  linkedin?: string | null
  reddit?: string | null
  github?: string | null
  gitlab?: string | null
  dribbble?: string | null
  stackoverflow?: string | null
  behance?: string | null
  skype?: string | null
  book?: string | null
  chrome?: string | null
  collection?: string | null
  wallet?: string | null
  bitcointalk?: string | null
  youtube?: string | null
  vk?: string | null
  video?: string | null
  blog?: string | null
  pinterest?: string | null
  tiktok?: string | null
  cmc?: string | null
  coingecko?: string | null
  pepeeth?: string | null
  wechat?: string | null
  google?: string | null
  linktr?: string | null

  hasLabel?: boolean
  hasIcon?: boolean
}

export function SocialLinks({
  size = "h-6 w-6",

  cta = "",
  website = WEBSITE.url,
  twitter = WEBSITE.twitter,
  discord = WEBSITE.discord,
  medium = "",
  telegram = WEBSITE.telegram,
  facebook = WEBSITE.facebook,
  instagram = WEBSITE.instagram,
  linkedin = "",
  reddit = "",
  github = WEBSITE.github,
  gitlab = "",
  dribbble = "",
  stackoverflow = "",
  behance = "",
  skype = "",
  book = "",
  chrome = "",
  collection = "",
  wallet = "",
  bitcointalk = "",
  youtube = WEBSITE.youtube,
  pinterest = WEBSITE.pinterest,
  vk = "",
  video = "",
  blog = "",
  tiktok = "",
  cmc = "",
  coingecko = "",
  pepeeth = "",
  wechat = "",
  google = "",
  linktr = WEBSITE.linktr,

  hasLabel = false,
  hasIcon = true,

  className,
  ...rest
}: Props) {
  return (
    <div className={cn("flex flex-wrap", className)} {...rest}>
      {website && (
        <Link
          prefetch={false}
          aria-label="Website"
          href={website}
          target="_blank"
          className="hover:text-lightish-green flex items-center gap-2 p-3 opacity-75 duration-200 ease-in-out hover:opacity-100"
        >
          {hasIcon && <FontAwesomeIcon icon={faLink} className={size} />}
          {hasLabel && <span>Website</span>}
        </Link>
      )}
      {facebook && (
        <Link
          prefetch={false}
          aria-label="Facebook"
          href={facebook}
          target="_blank"
          className="hover:text-lightish-green flex items-center gap-2 p-3 opacity-75 duration-200 ease-in-out hover:opacity-100"
        >
          {hasIcon && <FontAwesomeIcon icon={faFacebook} className={size} />}
          {hasLabel && <span>Facebook</span>}
        </Link>
      )}
      {twitter && (
        <Link
          prefetch={false}
          aria-label="Twitter"
          href={twitter}
          target="_blank"
          className="hover:text-lightish-green flex items-center gap-2 p-3 opacity-75 duration-200 ease-in-out hover:opacity-100"
        >
          {hasIcon && <FontAwesomeIcon icon={faTwitter} className={size} />}
          {hasLabel && <span>Twitter</span>}
        </Link>
      )}
      {instagram && (
        <Link
          prefetch={false}
          aria-label="Instagram"
          href={instagram}
          target="_blank"
          className="hover:text-lightish-green flex items-center gap-2 p-3 opacity-75 duration-200 ease-in-out hover:opacity-100"
        >
          {hasIcon && <FontAwesomeIcon icon={faInstagram} className={size} />}
          {hasLabel && <span>Instagram</span>}
        </Link>
      )}
      {telegram && (
        <Link
          prefetch={false}
          aria-label="Telegram"
          href={telegram}
          target="_blank"
          className="hover:text-lightish-green flex items-center gap-2 p-3 opacity-75 duration-200 ease-in-out hover:opacity-100"
        >
          {hasIcon && <FontAwesomeIcon icon={faTelegram} className={size} />}
          {hasLabel && <span>Telegram</span>}
        </Link>
      )}
      {linkedin && (
        <Link
          prefetch={false}
          aria-label="LinkedIn"
          href={linkedin}
          target="_blank"
          className="hover:text-lightish-green flex items-center gap-2 p-3 opacity-75 duration-200 ease-in-out hover:opacity-100"
        >
          {hasIcon && <FontAwesomeIcon icon={faLinkedin} className={size} />}
          {hasLabel && <span>LinkedIn</span>}
        </Link>
      )}
      {discord && (
        <Link
          prefetch={false}
          aria-label="Discord"
          href={discord}
          target="_blank"
          className="hover:text-lightish-green flex items-center gap-2 p-3 opacity-75 duration-200 ease-in-out hover:opacity-100"
        >
          {hasIcon && <FontAwesomeIcon icon={faDiscord} className={size} />}
          {hasLabel && <span>Discord</span>}
        </Link>
      )}
      {github && (
        <Link
          prefetch={false}
          aria-label="Github"
          href={github}
          target="_blank"
          className="hover:text-lightish-green flex items-center gap-2 p-3 opacity-75 duration-200 ease-in-out hover:opacity-100"
        >
          {hasIcon && <FontAwesomeIcon icon={faGithub} className={size} />}
          {hasLabel && <span>Github</span>}
        </Link>
      )}
      {pinterest && (
        <Link
          prefetch={false}
          aria-label="Pinterest"
          href={pinterest}
          target="_blank"
          className="hover:text-lightish-green flex items-center gap-2 p-3 opacity-75 duration-200 ease-in-out hover:opacity-100"
        >
          {hasIcon && <FontAwesomeIcon icon={faPinterest} className={size} />}
          {hasLabel && <span>Pinterest</span>}
        </Link>
      )}
      {youtube && (
        <Link
          prefetch={false}
          aria-label="YouTube"
          href={youtube}
          target="_blank"
          className="hover:text-lightish-green flex items-center gap-2 p-3 opacity-75 duration-200 ease-in-out hover:opacity-100"
        >
          {hasIcon && <FontAwesomeIcon icon={faYoutube} className={size} />}
          {hasLabel && <span>YouTube</span>}
        </Link>
      )}
      {linktr && (
        <Link
          prefetch={false}
          aria-label="Linktr"
          href={linktr}
          target="_blank"
          className="hover:text-lightish-green flex items-center gap-2 p-3 opacity-75 duration-200 ease-in-out hover:opacity-100"
        >
          {hasIcon && <FontAwesomeIcon icon={faStaylinked} className={size} />}
          {hasLabel && <span>Linktr</span>}
        </Link>
      )}
    </div>
  )
}
