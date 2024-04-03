import React, { ReactNode } from 'react'
import { Header } from './header'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className='bg-gray-300'>
        <Header />
      </div>
      <main>
        {children}
      </main>
    </>
  )
}
