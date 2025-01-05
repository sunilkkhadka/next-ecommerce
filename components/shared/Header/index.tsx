import Link from "next/link";

import Menu from "./Menu";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex justify-between items-center py-4">
        <div className="items-start">
          <Link href="/">
            <h1>Logo Here</h1>
            <span className="hidden lg:block font-bold text-2xl">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
