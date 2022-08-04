import styled from "styled-components";

export const MainContentStyle = styled.section`
  
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
 
    @media(min-width: 700px) {
        flex-direction: row-reverse;
        width: min(100% - 20%, 90rem);
    }

`