import styled from "styled-components";

export const NavBarStyle = styled.nav`

    margin-inline-start: 5rem;

    @media(max-width: 699px) {
        display: none;
        background-color: white;
        transition: all 1s;
        
        &.show-nav {
            display: block;
            position: absolute;
            background-color: ${({theme}) => theme.colors.almostWhite};
            top: 0;
            left: 30%;
            right: 0;
            bottom: 0; 
            z-index: 3;
        }
    }

    @media (min-width: 450px) {
        left: 50%;
    }

    @media (min-width: 700px) {
       width: 100%;
       display: flex;
       justify-content: space-between;
       align-items: center;
    }
 
   
    @media(max-width: 699px) {  
        ul.nav-1, ul.nav-2 {
            color: ${({theme}) => theme.colors.mediumGray};
            display: flex;
            flex-direction: column;
            margin-top: 7rem;
            position: relative;
        }
 
        ul.nav-1 {
            margin-inline-start: 3rem;
        }
        
        ul.nav-2 {
            align-items: center;
        }
    }

    .nav-1 {
        display: flex;
        gap: 2rem;

        @media(min-width: 700px) {
            gap: 4rem;
        }
    }

    .wrapper {
        position: relative;
    }

    .label, li {
        color: ${({theme}) => theme.colors.mediumGray};
        font-size: 1.5rem;
        position: relative;
        cursor: pointer;
    } 

    li > div:hover, li:hover {
        color: ${({theme}) => theme.colors.almostBlack}
    }
    
    .wrapper:nth-child(1) .label::after {
        content: url('../../../images/icon-arrow-down.svg');
        display: block;
        position: absolute;
        top: -.1rem;
        left: 6.8rem;
        width: 3rem;
        height: auto;
 
        @media(max-width: 699px) {
            left: 7rem;
        }
    }

    .wrapper:nth-child(2) .label::after {
        content: url('../../../images/icon-arrow-down.svg');
        display: block;
        position: absolute;
        top: -.1rem;
        left: 7.2rem;
        width: 3rem;
        height: auto;

        @media(max-width: 699px) {
            left: 7.3rem;
        }
    }

    .wrapper:nth-child(1).active .label::after {
        content: url('../../../images/icon-arrow-up.svg');
        display: block;
        position: absolute;
        top: -.1rem;
        left: 6.8rem;
        width: 3rem;
        height: auto;

        @media(max-width: 699px) {
            left: 7rem;
        }
    }

    .wrapper:nth-child(2).active .label::after {
        content: url('../../../images/icon-arrow-up.svg');
        transition: all .5s;
        display: block;
        position: absolute;
        top: -.1rem;
        left: 7.2rem;
        width: 3rem;
        height: auto;

        @media(max-width: 699px) {
            left: 7.3rem;
        }
    }

    .accordion1, .accordion2 {
        height: 0;
        overflow: hidden;
     
        @media(min-width: 700px) {
            position: absolute;
            z-index: 5;
        }

    }
 
    .wrapper.active .accordion1, .wrapper.active .accordion2 {
        height: 12rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.3rem 1.5rem;
        border-radius: 1rem;
        background-color: ${({theme}) => theme.colors.almostWhite} ;
        box-shadow: 0px 0 15px -5px ${({theme}) => theme.colors.mediumGray};
        left: -4.75rem;
        top: 2.5rem;
  
        @media(max-width: 699px) {
            box-shadow: none;
            padding: 0;
            margin: 1.5rem 0 0 2.5rem;
        }
    } 
    
    .wrapper.active .accordion2 {
        height: 8.5rem;
        width: 9rem;
        gap: .2rem;
        left: 0;
        top: 2.5rem;

        @media(max-width) {
            height: 12rem;
        }

    }
 
    .accordion-item {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
  
    .accordion-item p {
        margin: 0;
        font-size: 1.2rem;

        @media(max-width: 699px) {
            font-size: 1.5rem;
        }

    }

    .nav-2 {
        display: flex;
        gap: 2rem;
        align-items: center;
 
        @media(max-width: 699px) {
            margin-top: 3rem !important;
        }


    }

    .nav-2 li:last-child {
        text-align: center;
        padding: .7rem 2.5rem;
        border: 1px solid ${({theme}) => theme.colors.mediumGray};
        border-radius: 1.2rem;
 
        @media(max-width: 699px) {
            width: min(100% - 2rem, 15.5rem)
        }
    }

    .nav-2 li:last-child:hover {
       border: 1px solid ${({theme}) => theme.colors.almostBlack};
    }

    


    
    

`