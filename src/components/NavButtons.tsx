// reusable type for a NavItem
type NavItem = {
  label: string;
  href: string;
};

type NavButtonsProps = {
  items: NavItem[];
};

// a class that defines the styling of nav buttons
const navLinkClasses =
  "rounded-xl px-3 py-4 text-gray-100 transition duration-300 hover:text-purple-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]";

function NavButtons({ items }: NavButtonsProps) {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex justify-end gap-6">
        {items.map((item) => (
          <li key={item.href}>
            <a className={navLinkClasses} href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavButtons;
