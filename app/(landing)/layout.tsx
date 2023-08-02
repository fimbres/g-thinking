import React from 'react'

interface LandingLayoutProps {
    children: React.ReactNode;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <div className='h-full bg-gray-100 overflow-auto'>
        <div className='mx-auto max-w-screen-xl h-full'>
            {children}
        </div>
    </div>
  )
}

export default LandingLayout