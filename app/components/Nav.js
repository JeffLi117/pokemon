import poke_logo from "../../public/poke_logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-cyan-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <Image
                src={poke_logo}
                alt="Pokemon Logo"
                width={150}
            />
          <span class="font-semibold text-xl tracking-tight text-pokeyellow">Masters Only</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <Link href="/">
                <div class="block mt-4 lg:inline-block lg:mt-0 text-pokeblue hover:text-white mr-4">
                    Home
                </div>
            </Link>
            <Link href="/pokedex">
                <div class="block mt-4 lg:inline-block lg:mt-0 text-pokeblue hover:text-white mr-4">
                Pokédex
                </div>
            </Link>
            <Link href="/about">
                <div class="block mt-4 lg:inline-block lg:mt-0 text-pokeblue hover:text-white">
                About
                </div>
            </Link>
          </div>
          <div>
            <Link href="/about">
                <div class="inline-block text-sm px-4 py-2 leading-none border rounded text-pokeblue border-pokeblue hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    Login
                </div>
            </Link>
          </div>
        </div>
      </nav>
    )
  }