import styled from 'styled-components';

function SecondryButton({ title }) {
    
    return (
        
        <SecondryButtonStyled href="https://drive.google.com/file/d/19k16_0Y5vy5kCZKYRq0UmBStChJlFmpr/view?usp=sharing" target="_blank">{ title}</SecondryButtonStyled>
    )
    
}

const SecondryButtonStyled = styled.a`
  background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    margin-top:2%;
    width:66%;
    text-align:center;
    
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }
`;

export default SecondryButton