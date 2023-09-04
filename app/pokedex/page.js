"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../components/Loading";

export default function Pokedex() {
    const [pokeList, setPokeList] = useState([]);
    const [pokeShowing, setPokeShowing] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [whichPage, setWhichPage] = useState(1);
    
    const requestData = async (id) => {
        const result = [];
        let i = id;
        let stillMoreData = true;
        while (stillMoreData) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
          
                if (response.status === 200) {
                  const data = await response.json();
                  result.push(data);
                  i++;
                } else {
                  console.log("stillMoreData set to false; APIs done");
                  stillMoreData = false;
                }
              } catch (error) {
                console.error("Error fetching data:", error);
                stillMoreData = false;
              }
        }
        console.log("should be done with while loop...");
        waitToSetShow(result.slice(0, 25));
        setPokeList(result);
    };

    const waitToSetShow = async (array) => {
        let pageFirstIndex;
        if (whichPage == 1) {
            pageFirstIndex = 0;
        } else {
            pageFirstIndex = (whichPage-1) * 25
        }
        let pageSecondIndex = pageFirstIndex + 25;
        setPokeShowing(array.slice(pageFirstIndex, pageSecondIndex));
    }
    
    // useEffect(() => {
    //     setIsLoading(false);
    // }, [pokeList]);

    useEffect(() => {
        setIsLoading(false);
    }, [pokeShowing]);

    useEffect(() => {
        requestData(1);
    }, []);

    useEffect(() => {
        console.log("new whichPage is: ", whichPage);
    }, [whichPage]);

    const handlePrevPg = () => {
        console.log("Clicked handlePrevPg");
        if (whichPage > 1) {
            setWhichPage(whichPage - 1);
        }
    }

    const handleNextPg = () => {
        console.log("Clicked handleNextPg");
        let numOfPages = Math.ceil(pokeList.length/25);
        if (whichPage < numOfPages) {
            setWhichPage(whichPage + 1);
        }
    }

    return (
      <div className="m-4 flex items-center justify-center">
            {isLoading ? (
                <Loading />
            ) : (
                <ul className="flex flex-col items-center justify-center">
                    <div className={`${(pokeShowing.length > 0) ? "grid grid-cols-5 grid-rows-5" : "flex flex-col items-center justify-center" } gap-2 m-2`}>
                        {pokeShowing.length > 0 ? (
                            pokeShowing.map((mon, index) => (
                                <li key={index} className="flex items-center justify-center border-solid border-2 border-black p-2">
                                    <Image
                                    src={mon.sprites.front_default}
                                    alt={`Pokemon sprite for pokemon with index of ${index+1}`}
                                    width={75}
                                    height={75}
                                    />
                            </li>
                            ))
                        ) 
                        : 
                        (<Loading />)}
                    </div> 
                    {pokeShowing.length > 0 && (
                        <div className="flex items-center justify-center gap-4">
                            <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full" onClick={handlePrevPg}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <div className="flex items-center justify-center p-4">
                            <div className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full">
                                {whichPage}
                            </div>
                            </div>
                            <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleNextPg}>
                            <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                      
                    )}
                </ul>
            )}
      </div>
    )
}
  