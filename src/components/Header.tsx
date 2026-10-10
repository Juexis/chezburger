import NavButtons from "./NavButtons";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Header() {
  return (
    <header className="flex items-center justify-between rounded-b-md bg-purple-200 p-6 font-black">
      <h1>Hello, I'm a header!</h1>
      <NavButtons items={navItems} />
    </header>
  );
}

export default Header;
