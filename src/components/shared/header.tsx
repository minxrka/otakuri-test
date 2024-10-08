import { cn } from "@/src/lib/utils";
import Link from "next/link";
import React from "react";
import { NextEffectButton } from "../ui/nextEffectButton";
import { Search } from "lucide-react";
import Image from "next/image";
import Logo from "/otakuri.svg";
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("py-4 items-center flex", className)}>
      <Link href="/" passHref>
        <Image priority src={Logo} alt="Follow us on Twitter" />
      </Link>
      <Link href="/" passHref>
        <NextEffectButton>Аниме</NextEffectButton>
      </Link>
      <Link href="/anime" passHref>
        <NextEffectButton>Случайное</NextEffectButton>
      </Link>
      <Link href="/anime/666" passHref>
        <NextEffectButton>Лидерборд</NextEffectButton>
      </Link>
      <Link href="/anime/666" passHref>
        <NextEffectButton>Коллекция</NextEffectButton>
      </Link>

      <NextEffectButton>
        <Search color="white" className="size-5" />
      </NextEffectButton>
      <Link href="/anime/666" passHref>
        <NextEffectButton>Войти</NextEffectButton>
      </Link>
    </header>
  );
};
