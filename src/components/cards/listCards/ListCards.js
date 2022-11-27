import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import { getAllCharacters } from '../../../services/service-rickAndMorty'
import { ListCardsStyle } from '../../../css/ListCardsStyle'

const ListCards = () => {

    const [character, setcharacter] = useState([]);

    useEffect(()=> {
async function fetchCharacters() {
    const data = await getAllCharacters(4);
    setcharacter(data);
}
fetchCharacters()

    })

  return (
    <ListCardsStyle>
    {character.map((character, index)=>(<Card key={index} character={character} />))}
    
    </ListCardsStyle>
  )
}

export default ListCards