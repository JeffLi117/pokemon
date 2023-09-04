import poke_wallpaper from "../public/poke_wallpaper.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="relative w-full h-screen">
          <Image
            src={poke_wallpaper}
            alt="Pokemon Wallpaper"
            className="opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
          />
        </div>
      </main>
    </div>
  )
}
