import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getOneCharacter } from '../services/service-rickAndMorty';
import OneCharacterCard from '../components/cards/oneCharacterCard/OneCharacterCard';

const OneCharactersPage = () => {

const [OneCharacter, setOneChracter] = useState([]);


let params = useParams();

useEffect(()=> {
 
    fetch(`https://rickandmortyapi.com/api/character/${params.userId}`)
.then(res => res.json())
.then(json => setOneChracter(json))

        // async function fetchOneCharacters(params) {
        //     const data = await getOneCharacter(params.userId);
        //     setOneChracter(data);
        // }
        // fetchOneCharacters(params)
    },[params])
    console.log(OneCharacter)
  return (

    <OneCharacterCard OneCharacter={OneCharacter}/>

  )
}

export default OneCharactersPage