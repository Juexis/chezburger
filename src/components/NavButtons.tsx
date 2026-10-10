type NavItem = {
  label: string;
  href: string;
};

type NavButtonsProps = {
  items: NavItem[];
};

function NavButtons({ items }: NavButtonsProps) {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex justify-end gap-6">
        {items.map((item) => (
          <li key={item.href}>
            <a
              className="rounded px-3 py-2 text-gray-700 hover:bg-purple-300 hover:text-gray-900"
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavButtons;
