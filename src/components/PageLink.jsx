const PageLink = ({ href, text, linkClass = 'nav-link' }) => {
  return (
    <li>
      <a href={href} className={linkClass}>
        {text}
      </a>
    </li>
  )
}

export default PageLink
