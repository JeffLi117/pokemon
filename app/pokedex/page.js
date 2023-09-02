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
                waitToSetShow(result, 1);
            }
        }
        setPokeList(result);
    };

    const waitToSetShow = async (array, page) => {
        let pageFirstIndex;
        if (page == 1) {
            pageFirstIndex = 0;
        } else {
            pageFirstIndex = (page-1) * 25
        }
        let pageSecondIndex = pageFirstIndex + 25;
        await new Promise(r => setTimeout(r, 2000));
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

    // useEffect(() => {
        
    // }, [whichPage]);

    const handlePrevPg = () => {
        if (whichPage > 1) {
            setWhichPage(whichPage - 1);
        }
    }

    const handleNextPg = () => {
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
                        <div className="flex items-center justify-center gap-2">
                        <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrevPg} />
                        <div>{whichPage}</div>
                        <FontAwesomeIcon icon={faArrowRight} onClick={handleNextPg} />
                        </div>
                    )}
                </ul>
            )}
      </div>
    )
}
  