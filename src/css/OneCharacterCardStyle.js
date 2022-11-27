
import styled from "@emotion/styled";

export const OneCharacterCardBgcStyle = styled.div`
display: grid;
gap: 0.1rem;
margin: 0 auto;
width: 100%;
padding: 10px;
padding-top: 50px;
`

export const OneCharacterCardStyle = styled.div`
width: 60%;
height: 90%;
background-color: var(--main-card-background-color);
color: white;
padding-top: 0%;
margin: 0 auto;
border-radius: 20px;
margin-top: 50px;
text-align: center;
color: var(--main-card-titleText-color);
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
font-size: 20px;
font-weight: bolder;


@media (min-width: 1200px) {
    width: 40%;
   height: 60%;
  }

`

export const ImageCardStyle = styled.img`
width: 60%;
height: 40%;
margin-top: 30px;
border-radius: 20px;

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
background-color: ${({status}) => status === "Alive" ? "green" : "red"}  ;
`