import poke_logo from "../../public/poke_logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex items-center justify-between bg-cyan-500 p-2 pt-1">
            <div className="flex relative items-center flex-shrink-0 text-white mr-4">
                <Image
                    src={poke_logo}
                    alt="Pokemon Logo"
                    width={150}
                />
                <span className="flex absolute bottom-0 right-0 items-center font-semibold text-xs tracking-tight text-pokeyellow">Masters Only</span>
            </div>
            <div className="w-full block flex-grow flex items-center w-auto">
                <div className="text-sm flex-grow">
                    <Link href="/">
                        <div className="block mt-4 inline-block mt-0 text-pokeblue hover:text-white mr-4">
                            Home
                        </div>
                    </Link>
                    <Link href="/pokedex">
                        <div className="block mt-4 inline-block mt-0 text-pokeblue hover:text-white mr-4">
                        Pokédex
                        </div>
                    </Link>
                    <Link href="/about">
                        <div className="block mt-4 inline-block mt-0 text-pokeblue hover:text-white">
                        About
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href="/about">
                        <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-pokeblue border-pokeblue hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 mt-0">
                            Login
                        </div>
                    </Link>
                </div>
            </div>
      </nav>
    )
  }