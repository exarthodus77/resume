import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border-light text-center text-text-secondary text-sm">
      <div className="container mx-auto px-6">
        Syed Talha Ahmad © {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer