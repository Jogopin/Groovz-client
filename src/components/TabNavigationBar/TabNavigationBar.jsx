export default function TabNavigationBar({ children }) {
    return (
      <nav className="h-16 w-full bg-zinc-700">
        <ul className="flex h-full items-center justify-evenly font-bold text-zinc-300">
          {children}
        </ul>
      </nav>
    );
  }
  