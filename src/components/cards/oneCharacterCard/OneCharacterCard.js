import React from 'react'
import { OneCharacterCardBgcStyle, OneCharacterCardStyle, ImageCardStyle, ContainerOfMark, MarkIfAliveOrDeadStyle } from '../../../css/OneCharacterCardStyle'


const OneCharacterCard = ({OneCharacter}) => {
  return (
    <OneCharacterCardBgcStyle>
<OneCharacterCardStyle>
    <ImageCardStyle src={OneCharacter.image}/>
    <div>
    <h3>
{OneCharacter.name}
</h3>
   
<ContainerOfMark>
<MarkIfAliveOrDeadStyle status={OneCharacter.status}/>
<p>{OneCharacter.status}-{OneCharacter.species}</p>
</ContainerOfMark>
<p>{OneCharacter.gender}</p>
<p>{OneCharacter.type}</p>
</div>
</OneCharacterCardStyle>
    </OneCharacterCardBgcStyle>
  )
}

export default OneCharacterCard