import styled from "styled-components";

export const DescriptionStyle = styled.section`

    width: min(100% - 4rem, 100rem);
    margin-inline: auto;
    flex-grow: 1;
    max-width: 50rem;

    @media(min-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 2rem;
    }

    h1 {
        font-size: clamp(3.8rem, 5vw, 7rem); 
        font-weight: 700;
        text-align: center;
        margin: 1rem 0 1rem;

        @media(min-width: 700px) {
            text-align: start;
            line-height: 1;
            & span{
                display: block;
            }
        }
    }

    p {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({theme}) => theme.colors.mediumGray};
        line-height: 1.5;
        padding-inline: 1.3rem;
        text-align: center;
        
        @media(min-width: 700px) {
            text-align: start;
            padding: 0;
            margin: 0;
            max-width: 40rem;
        }
    }

    button {
        display: block;
        padding: 1.3rem 2.5rem;
        font-size: 1.5rem;
        background-color: ${({theme}) => theme.colors.almostBlack};
        color: ${({theme}) => theme.colors.almostWhite};
        border-radius: 1.5rem;
        border: 1px solid ${({theme}) => theme.colors.almostBlack};
        margin: 1rem auto 5rem;

        &:hover {
            background-color: ${({theme}) => theme.colors.almostWhite};
            color: ${({theme}) => theme.colors.almostBlack};
            border: 1px solid ${({theme}) => theme.colors.almostBlack};
        } 

        @media(min-width: 700px) {
            margin-inline: 0;
            margin-bottom: 3rem;
        }
    }

    .clients-wrapper {
        width: 100%;
        padding-inline: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
 
        @media(min-width: 700px) {
            padding: 0;
            justify-content: flex-start;
            gap: 3rem;
        }

    }

    .clients-wrapper {
        img:nth-child(1) {
            width: 8rem;
        }
        img:nth-child(2) {
            width: 5rem;
        }
        img:nth-child(3) {
            width: 6rem;
        }
        img:nth-child(4) {
            width: 7rem;
        }
    }

`