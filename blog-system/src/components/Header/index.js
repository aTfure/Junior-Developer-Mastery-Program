import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav
        className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex 
        items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mr-2">
          About
        </Link>
        <Link href="/contact" className="mr-2">
          Contact
        </Link>
        <button>T</button>
      </nav>
      <div>
        <a href="https://linkedin.com">linkedIn</a>
        <a href="https://github.com">Github</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://dribble.com">Dribble</a>
      </div>
    </header>
  );
};

export default Header;
