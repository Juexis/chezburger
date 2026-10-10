import NavButtons from "./NavButtons";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Header() {
  return (
    <header className="sticky flex items-center justify-between rounded-b-xl bg-(--color-primary-purple) p-6 font-black text-gray-100">
      <h1>Hello, I'm a header!</h1>
      <NavButtons items={navItems} />
    </header>
  );
}

export default Header;
