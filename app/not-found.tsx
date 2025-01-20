import Link from "next/link";
import { MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";

function NotFoundPage() {
  return (
    <div className="w-full h-screen flex flex-col gap-6 items-center justify-center">
      <h1>404 Page Not Found</h1>
      <p>
        <Button asChild variant="outline">
          <Link href="/" className=" ">
            Back to home page <MoveRight />
          </Link>
        </Button>
      </p>
    </div>
  );
}

export default NotFoundPage;
