import React from 'react'

export default function Footer() {
  return (
    <div>
        {/* Your existing page content component */}
      <footer style={{ backgroundColor: '#20292f', color: 'white', padding: '1rem', textAlign: 'center', marginTop: '2rem' }}>
        <strong>&copy; {new Date().getFullYear()} All Rights Reserved</strong>
      </footer>
    </div>
  )
}
