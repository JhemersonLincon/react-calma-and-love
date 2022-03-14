import styled from 'styled-components';


export const Phrase = styled.section`
  padding:8.7rem ; 
  background:#211F18;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    max-width: 106.2rem;
    font-size: 4.0rem;
    color: white;
    margin-bottom: 4.6rem;
  }
  span {
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:12px;
    font-size: 2.0rem;
  }
  span:before{
    content:"";
    background-color: currentColor; 
    display: inline-block;
    height:2px;
    width: 20px;
  }
  span:after{
    content:"";
    background-color: currentColor; 
    display: inline-block;
    height:2px;
    width: 20px;
  }
`;