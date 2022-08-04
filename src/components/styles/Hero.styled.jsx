import styled from "styled-components";

export const HeroStyle = styled.section`

    flex-grow: 1;
    
    @media(max-width: 699px) {
        .hero-mobile {
            width: 100%;
            height: auto;
            display: block;
        }

        .hero-desktop {
            display: none;
        }
    }
    
    @media(min-width: 700px) {
        .hero-mobile {
            display: none; 
        }

        .hero-desktop {
            display: block;
            width: 100%;
            // max-width: 40rem;
            height: auto;
            max-height: 55rem; 
            object-fit: cover; 
        }
    }


`