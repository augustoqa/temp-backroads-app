import { pageLinks, socialLinks } from '../data'
import PageLink from './PageLink'
import SocialLink from './SocialLink'

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((link) => (
          <PageLink key={link.id} linkClass='footer-link' {...link} />
        ))}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((link) => (
          <SocialLink key={link.id} {...link} />
        ))}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
