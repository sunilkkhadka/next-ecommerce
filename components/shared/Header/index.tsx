import { ShoppingCart, UserIcon } from "lucide-react";

import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b p-4">
      <div className="wrapper flex justify-between items-center">
        <div className="items-start">
          <Link href="/">
            <h1>Logo Here</h1>
            <span className="hidden lg:block font-bold text-2xl">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in">
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
