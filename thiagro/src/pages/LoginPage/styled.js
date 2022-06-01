import styled from "styled-components";

export const ContainerInput = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
    form{
        display: grid;
        width: 90vw;
        height: 30vh;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 550;
        font-size: 16px;
        text-align: center;
    }
    .splashScreen{
        .splash{
        display: grid;
        align-items: center;
        justify-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #FFF;
        z-index: 300;
        }
        @keyframes fadeIn {
            to {
                opacity: 1;
            }
        }
        .fade-in{
            opacity: 0;
            animation: fadeIn 1.3s ease-in forwards;
        }
    }
 
`
export const ContairnerImg = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-top: 88px;
    img{
        display: grid;
        justify-content: center;
        align-items: center;
        width: 104px;
    }
`
export const ButtonSignUpStyle = styled.button`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    background-color: transparent;
    border: none;
    margin-top: 65px;
@media screen and (max-width: 321px){ 
    margin-top: 90px;
}
`
export const ContainerField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const ButtonStyle = styled.button`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    background-color: #592F0D;
    border: none;
    border-radius: 4px;
    height: 42px;
    width: 100%;
:hover{
    background-color: #492F0D;
}
`