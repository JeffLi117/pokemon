"use client";
import React, { useState, useEffect } from "react";
import poke_wallpaper from "../public/poke_wallpaper.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen bg-black">
        <div className="absolute inset-0 bg-black">
          <Image
            src={poke_wallpaper}
            alt="Pokemon Wallpaper"
            fill={true}
            style={{objectFit: "contain"}}
            priority={true}
            as="style"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
            rel="preload"
          />
        </div>
        <div className="relative bg-transparent text-white text-center p-8">
          <Link href="/pokedex">
            <div className="absolute flex flex-col justify-center items-center">
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
