import {Link} from "react-router";

export default function Header() {
  return (
    <header className="p-2">
      <nav className={"flex justify-center"}>
        <Link className={"p-1"} to="/">Home</Link>
        <Link className={"p-1"} to="/gaming">Gaming</Link>
        <Link className={"p-1"} to="/gardening">Gardening</Link>
        <Link className={"p-1"} to="/movies">Movies</Link>
        <Link className={"p-1"} to="/programming">Programming</Link>
        <Link className={"p-1"} to="/reading">Reading</Link>
        <Link className={"p-1"} to="/television">Television</Link>
      </nav>
    </header>
  );
}