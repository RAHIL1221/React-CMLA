import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './tailwind.css';

import "../public/assets/stylesheets/custom.css";
import "../public/assets/stylesheets/theme-dark.min.css";
import "../public/assets/stylesheets/theme.min.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "apple-touch-icon",
    "sizes": "144x144",
    href: "assets/apple-touch-icon.png"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600"
  },
  {
    rel: "stylesheet",
    href: "assets/vendor/%40fortawesome/fontawesome-free/css/all.min.css"
  },
  {
    rel: "stylesheet",
    href: "assets/stylesheets/theme.min.css",
    "data-skin": "default"
  },
  {
    rel: "stylesheet",
    href: "assets/stylesheets/custom.css"
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
    integrity: "sha512-dN1Gm0oMRs4kLImNmwMwM7XCV+v+yIq9sQmKJh0E+YhUV2CRJ/WRZVwKX1Db4Wv5o6q2YohY5rGKZfyz3TwfPw==",
    crossOrigin: "anonymous",
    referrerPolicy: "no-referrer",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
