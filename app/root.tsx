import {
  isRouteErrorResponse, Link,
  Links,
  Meta,
  Route as ReactRoute,
  Routes,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Home from "~/routes/home";
import Television from "~/routes/television";
import Reading from "~/routes/reading";
import Programming from "~/routes/programming";
import Movies from "~/routes/movies";
import Gardening from "~/routes/gardening";
import Gaming from "~/routes/gaming";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>StuckBoy's Corner</title>
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
  return (
    <div>
      <nav>
        <Link to="/"></Link>
        <Link to="/gaming"></Link>
        <Link to="/gardening"></Link>
        <Link to="/movies"></Link>
        <Link to="/programming"></Link>
        <Link to="/reading"></Link>
        <Link to="/television"></Link>
      </nav>
      <Routes>
        <ReactRoute path={"/"} element={<Home />} />
        <ReactRoute path={"/gaming"} element={<Gaming />} />
        <ReactRoute path={"/gardening"} element={<Gardening />} />
        <ReactRoute path={"/movies"} element={<Movies />} />
        <ReactRoute path={"/programming"} element={<Programming />} />
        <ReactRoute path={"/reading"} element={<Reading />} />
        <ReactRoute path={"/television"} element={<Television />} />
      </Routes>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
