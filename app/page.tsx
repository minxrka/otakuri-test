import { Button } from "@/components/ui/button";
import React from "react";
import { Beer } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <Button className="w-32 bg-primary-500/40" variant="default">
        Сновви1
      </Button>
      <Button className="w-32" variant="destructive">
        Сноввиasdasdasd
      </Button>
      <Button className="w-32" variant="outline">
        Сновви
      </Button>
      <Button className="w-32" variant="secondary">
        Сновви
      </Button>
      <Button className="w-32" variant="ghost">
        Сновви
      </Button>
      <Button className="w-32" variant="link">
        Сновви
      </Button>
      <Beer className="my-beer-icon" />
      <h1 className="text-primary-200 transition-colors-transform hover:text-black">
        снове
      </h1>
    </div>
  );
}
