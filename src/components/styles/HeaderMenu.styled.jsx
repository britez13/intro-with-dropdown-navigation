
import styled from "styled-components"

export const HeaderMenuStyle = styled.header`
    width: min(100% - 4rem, 110rem);
    margin-inline: auto;
    margin-block: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 700px) {
        margin-block: 1rem;
    }

    ${({isShowNav}) => isShowNav && `@media(max-width: 699px) {
        &::after {
            content: '';
            display: block;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.6);
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 0;
        } 
    }}`}
    


    @media(min-width: 700px) {
        justify-content: flex-start
    }


    .logo-image {
        display: block;
    }

    .burger-icon {
        position: absolute;
        z-index: 3;
        right: 5%;
        cursor: pointer;

        @media(min-width: 700px) {
            display: none;
        }
    }
    

    
    


`