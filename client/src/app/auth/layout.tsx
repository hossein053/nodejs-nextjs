export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container row h-screen">
      <div className="bg-bg_login overflow-hidden shadow-xs md:w-1/3 w-full h-auto relative rounded-xl">
        <div className="z-[1] h-full relative p-7 pt-12">
          {children}
        </div>
        <div className="login absolute z-0 top-0 start-0 end-0 bottom-0">
          <span className="shape-4" />
          <span className="shape-3" />
          <span className="shape-2" />
          <span className="shape-1" />
        </div>
      </div>
    </div>
  )
}
