import React, { Fragment, ReactNode } from 'react'
import { Sidebar } from './sidebar'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Sidebar />
      <main className='w-full ps-3'>
        <div className='shadow-xs bg-primary h-full rounded-md'>
          {children}
        </div>
      </main>
    </Fragment>
  )
}
