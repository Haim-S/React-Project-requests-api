
import styled from "@emotion/styled";

export const TagHeaderStyle = styled.div`

display:${({changeTheStyleBecausePath}) => changeTheStyleBecausePath  ? "none" : "flex"} ;
`

export const TagMainStyle = styled.div`
background-color: ${({changeTheStyleBecausePath}) => changeTheStyleBecausePath ? "var( --main-background-about-color)" :  "var(--main-background-color)"};
`