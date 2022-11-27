import React from 'react'
import { CardStyle, ImageCardStyle,ContainerOfMark, MarkIfAliveOrDeadStyle, HovertextCard,CharacterCardPropertyLabel, CharacterCardPropertyValue   } from '../../../css/CardStyle'
import {useNavigate } from 'react-router-dom'


const CharacterCardProperty = ({ label, value}) => {
return(
<>
<CharacterCardPropertyLabel>{label}</CharacterCardPropertyLabel>
<CharacterCardPropertyValue>{value}</CharacterCardPropertyValue>
</>
)
}




const Card = ({character}) => {

let navigate = useNavigate();

  return (
    <>
    <CardStyle>
      <ImageCardStyle src={character.image}/>
      <div>
      <HovertextCard onClick={()=> navigate(`/one/${character.id}`)}>{character.name}</HovertextCard>
{/* <Link to={`/one/${character.id}`}>
        <h3>{character.name}</h3>
        </Link> */}
        <ContainerOfMark>
        <MarkIfAliveOrDeadStyle status={character.status}/>
        <p>{character.status}-{character.species}</p>
        </ContainerOfMark>
        <CharacterCardProperty
        label={"Last known location: "}
        value={character.location.name}
      />
      <CharacterCardProperty
        label={"Original location: "}
        value={character.origin.name}
      />

        </div>
        
        </CardStyle>
    </>
  )
}

export default Card