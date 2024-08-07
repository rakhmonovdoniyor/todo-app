import styled from "styled-components";

export const Container = styled.div`
    background-color: #e9eef5;
    padding: 35px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    /* border: 1px solid blue; */
    h1 {
        color: #000900d4;
        margin-top: 0;
    }
`;

export const AddInput = styled.input`
    color: #222;
    font-size: 16px;
    padding: 12px;
    border: 1px solid;
    border-radius: 5px;
    font-weight: 500;
    /* width: 100%; */
    outline: none;
    font-family: "Montserrat", sans-serif;
    background-color: #fffffa;
    
    &::placeholder{
        color: #aaa;
        font-size: 18px;
    }
`;
export const WrappEdit= styled.div`
display: flex;
/* flex-direction: column; */
/* gap: 10px; */
/* border: 1px solid red; */
align-items: center;
/* justify-content: center; */
padding-top: 2px;
input{
    padding: 1px;
    border-radius: 5px;
    border: none;
};
`

export const AddButton = styled.button`
    background-color: #7d5cb3;
    border: none;
    padding: 0px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 15px;
`

export const AddingContainer = styled.div`
    background-color: #f2f2f2;
    height: 60px;
    display: flex;
    
    border-radius: 3px;
    overflow: hidden;
    color: #545454;
    font-weight: 500;
  

`

export const Button = styled.button`
    border: none;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    background: #de422e;
    opacity: 0;
    transition: all 0.1s;
    font-family: "Montserrat";
    `
export const AddText = styled.div`
    /* padding: 20px; */
    font-size: 16px;
    color: #585858;
    display: flex;
    /* align-items: center; */
    /* gap: 20px; */
    flex-direction: column;
`

export const PupleButton = styled.button`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    background: #7d03b7;
    color: white;
    border: none;   
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
`

export const AlignCenter = styled.div`
display: flex;
align-items: center;
`
export const AlignCenterColumn = styled.div`
display: flex;
/* align-items: center; */
flex-direction: column;
justify-content: center;
`
export const Inputs = styled.div`
display: flex;
/* align-items: center; */
padding: 1px;
border: 6s;
`

