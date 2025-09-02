import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>eGrocery</title>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}