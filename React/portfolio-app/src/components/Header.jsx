function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="logo">Portfolio</div>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="theme-toggle" onClick={onToggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  )
}

export default Header
