import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>eGrocery</title>
        <link rel="icon" href="/images/favicon.avif" />
      </head>
      <body className="min-h-screen w-full">
        {children}
      </body>
    </html>
  );
}