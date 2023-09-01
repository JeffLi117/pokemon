"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { faSolid, faBold } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pokedex() {
    const [pokeList, setPokeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const requestData = async (id) => {
        const result = [];
        let i = id;
        let stillMoreData = true;
        let numToStop = id + 25;
        while (stillMoreData) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            let data = await response.json();
            if (response.status === 200) {
                result.push(data);
                i++;
            } else {
                stillMoreData = false;
            }

            if (i === numToStop) {
                setPokeList(result);
            }
        }
        setPokeList(result);
    };
    
    useEffect(() => {
        setIsLoading(false);
    }, [pokeList]);

    useEffect(() => {
        requestData(1);
    }, []);

    return (
      <div className="m-4 flex items-center justify-center">
            {isLoading ? <div>Loading</div> : 
            <ul>
                <div className="grid grid-cols-5 grid-rows-5 gap-2">
                    {pokeList.map((mon, index) =>
                        <li key={index} className="flex items-center justify-center border-solid border-2 border-black p-2">
                            <Image
                            src={mon.sprites.front_default}
                            alt={`Pokemon sprite for pokemon with index of ${index+1}`}
                            width={75}
                            height={75}
                            />
                        </li>
                    )}
                </div>
                <FontAwesomeIcon icon={faBold} />
            </ul>
            }
      </div>
    )
  }
  