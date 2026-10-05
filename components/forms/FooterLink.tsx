import Link from 'next/link'
import React from 'react'

const FooterLink = ({text, linkText, href}: {text:string, linkText:string, href:string}) => {
  return (
    <footer>
        {text} <Link href={href}>{linkText}</Link>
    </footer>
  )
}

export default FooterLink;