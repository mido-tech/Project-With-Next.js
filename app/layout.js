import './globals.css'
// import { Montserrat } from "@next/font/google"

// const montserrat = Montserrat({
//   weight: ['400' , '700'],
//   subsets: [ "latin"],

// })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="" >{children}</body>
    </html>
  )
}