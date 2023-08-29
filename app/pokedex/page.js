"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Pokedex() {
    const [pokeList, setPokeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const requestData = async (id) => {
        const result = [];
        let numToStop = id + 25;
        for (let i = id; i < numToStop; i++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            let data = await response.json();
            if (response.status === 200) {
                result.push(data);
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
    
    // Function to hide the loader
    // function hideloader() {
    //     document.getElementById('loading').style.display = 'none';
    // }

    // Function to define innerHTML for HTML table
    // function show(data) {
    //     let tab =
    //         `<tr>
    //         <th>Name</th>
    //         <th>Office</th>
    //         <th>Position</th>
    //         <th>Salary</th>
    //         </tr>`;
    
    //         // Loop to access all rows
    //         for (let r of data.list) {
    //             tab += `<tr>
    //         <td>${r.id} </td>
    //         <td>${r.name}</td>
    //         <td>${r.sprites.front_default}</td>
    //         </tr>`;
    //         }
    // }

    // useEffect(() => {
    //     () =>
    //       fetch('https://localhost:7000/TeamSeason/2021')
    //         .then((response) => response.json())
    //         .then((data) => {
    //           setData(data);
    //           setLoading(false);
    //     })
    //   }, []);
    
    return (
      <div class="m-4 flex items-center justify-center">
            {isLoading ? <div>Loading</div> : 
            <ul>
                <div class="grid grid-cols-5 grid-rows-5 gap-2">
                    {pokeList.map((mon, index) =>
                        <li key={index} class="flex items-center justify-center border-solid border-2 border-black p-2">
                            <Image
                            src={mon.sprites.front_default}
                            alt={`Pokemon sprite for pokemon with index of ${index+1}`}
                            width={75}
                            height={75}
                            />
                        </li>
                    )}
                </div>
            </ul>
            }
      </div>
    )
  }
  