"use client";
import React, { useState, useEffect } from "react";
import poke_wallpaper from "../public/poke_wallpaper.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex justify-center h-screen bg-black">
        <div className="relative bg-black">
          <Image
            src={poke_wallpaper}
            alt="Pokemon Wallpaper"
            width="0"
            height="0"
            className="h-full w-auto"
            priority={true}
          />
        </div>
        <div className="absolute top-10 left-10 bg-transparent text-white text-center">
          <Link href="/pokedex">
            <div className="flex flex-col justify-center items-center">
              <div>W</div>
              <div>E</div>
              <div>L</div>
              <div>C</div>
              <div>O</div>
              <div>M</div>
              <div>E</div>
            </div>
          </Link>
        </div>
    </div>
  )
}
