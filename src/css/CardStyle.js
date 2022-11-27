
import styled from "@emotion/styled";

export const CardStyle = styled.div`
width: 70%;
height: 83%;
background-color: var(--main-card-background-color);
color: white;
padding-top: 0%;
padding-right: 50px;
margin: 0 auto;
border-radius: 20px ;
margin-top: 50px;

color: var(--main-card-titleText-color);
display: flex;
font-size: 20px;
font-weight: bolder;
`
export const ImageCardStyle = styled.img`
width: 180px;
height: 100%;
border-radius: 20px;
padding-right: 25px;
`
export const HovertextCard = styled.h3`

&:hover {
    cursor: pointer;
    color: var(--hover-text-color);
}
`

export const CharacterCardPropertyLabel = styled.p`
margin-top: 10px;
color: rgb(158, 158, 158);
margin-left: 10px;
`
export const CharacterCardPropertyValue = styled.p`
color: #ffffff;
margin-left: 10px;
`

export const ContainerOfMark = styled.div`
margin: 0%;
display: flex;
align-items: center;
justify-content: center;
`

export const MarkIfAliveOrDeadStyle = styled.div`
margin-right: 8px;
height: 10px;
width: 10px;
border-radius: 30px;
background-color: ${(props) => props.status === "Alive" ? "green" : "red"}  ;
`