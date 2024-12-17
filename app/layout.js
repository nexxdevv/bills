import "./globals.css"

export const metadata = {
  title: "Bill's Citrus Clean"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
