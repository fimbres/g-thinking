import React from 'react'

function AuthLayout({ children } : { children: React.ReactElement }) {
  return (
    <div className='flex items-center justify-center h-screen'>{children}</div>
  )
}

export default AuthLayout