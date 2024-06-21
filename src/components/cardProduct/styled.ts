import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 100px;

`

export const Content = styled.div`
  margin: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 1200px) {
    height: auto;
  }

  @media(max-width: 1080px) {
    height: auto;
  }
  @media(max-width: 750px) {
    height: auto;
  }
  @media(max-width: 500px) {
    height: auto;
  }
`

export const Grid = styled.div`
  
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(5, 15rem);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  
  @media(max-width: 1366px) {
    grid-template-columns: repeat(3, 20rem);
  }
  @media(max-width: 1080px) {
    grid-template-columns: repeat(3, 15rem);
  }
  @media(max-width: 750px) {
    grid-template-columns: repeat(2, 15rem);
  }
`;

export const Card = styled.button`
    width: 250px;
    height: 400px;
    padding: 30px 20px;
    border: 2px solid gray;
    border-radius: 2px 10px 2px 10px;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  

    .img {
        width: 100px;
        height: 170px;
        margin-bottom: 20px;
        border-radius: 2px 10px 2px 10px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Text = styled.p`
    color: gray;
    font-size: 1rem;
    
`