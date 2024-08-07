
import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    padding: 25px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 600px;
    h1 {
        color: #000900d4;
        margin-top: 0;
    }
`;

export const AddInput = styled.input`
    color: #222;
    font-size: 16px;
    padding-top: 10px ;
    padding-right: 140px;
    border: 1px solid;
    border-radius: 5px;
    font-weight: 500;
    width: 100%;
    outline: none;
    font-family: "Montserrat", sans-serif;
    &::placeholder{
        color: #aaa;
        font-size: 18px;
    }
`;

export const AddButton = styled.button`
    background-color: #7d5cb3;
    border: none;
    padding: 0px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 15px;
`

export const AddingContainer = styled.div`
    /* background-color: #f2f2f2; */
    /* height: 100px; */
    display: flex;
    /* padding: 10px; */
    justify-content: space-between;
    border-radius: 3px;
    /* overflow: hidden; */
    /* color: #545454; */
    font-weight: 500;
    align-items: center;
    padding: 0px 10px;
    &:hover{
        button{
            opacity: 1;
        }
    }

`

export const Button = styled.button`
    border: none;
    color: #fff;
    padding: 4px;
    cursor: pointer;
    /* background: #de422e; */
    background:  ${(props ) => (props.$edit ? "#0dccea" : "red")};
    /* opacity: 1; */

    transition: all 0.5s;
    font-family: "Montserrat";
    border-radius: 5px;
    `
export const AddText = styled.div`
    /* padding: 20px; */
    font-size: 16px;
    color: #585858;
    display: flex;
    /* align-items: center; */
    /* gap: 20px; */
    /* flex-direction: column; */
    
`

export const Column = styled.div`
display: flex;
flex-direction: column;
`

export const PupleButton = styled.button`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    background: #b5179e;
    color: white;
    border: none;   
    padding: 8px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 3px;
`
// styled
export const InputWrapp = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
/* justify-content: center; */
`
export const InputWr = styled.div`
display: flex;
/* align-items: center; */
/* justify-content: center; */
justify-content: space-between;
`
export const Taskadd= styled.div`
display: flex;
/* font-size: 18px; */
align-items: flex-start;
gap: 120px;
/* flex-direction: column; */
/* justify-content: center; */
margin-left: 80px;
`
export const Taskadd2= styled.div`
display: flex;
flex: 1;
font-size: 18px;
align-items: center;
/* border: 1px solid red; */
/* flex-direction: column; */
width: 100%;
/* gap: 30px; */
   /* background-color: #f2f2f2; */
   /* height: 33px; */
    display: flex;
    /* padding: 10px; */
    justify-content: space-evenly;
    border-radius: 3px;
    /* overflow: hidden; */
    color: #545454;
    font-weight: 500;
    align-items: center;
    /* padding: 0px 10px; */
    
 

`
export const Line = styled.div`

   
        width: 100%;
        background-color: gray;
        height: 2px;
        margin: 10px;

`
export const Datalength = styled.div`
 display: flex;
 align-items: center;
 padding: 20px 0;
 justify-content: space-between;

`
export const Editing = styled.div`
display: flex;
/* flex-direction: column; */
/* gap: 10px; */

align-items: center;
/* gap: 100px; */
/* justify-content: center; */
/* padding-top: 2px; */
width: 200px;
padding-left: 30px;
input{
    padding: 5px;
    border-radius: 5px;
    border: 1px solid ;
    align-items: center;
    margin: 3px;
    width: 200px;
};
`
export const TableHeadWrap= styled.div`
display: flex;

`

export const TableHead= styled.div`
display: flex;
flex: 1;
justify-content: space-evenly;
/* border-bottom: 2px solid gray; */
/* margin: 50px; */
`
export const TableHead2= styled.div`
display: flex;
flex: 1;
justify-content: space-evenly;
/* border-bottom: 2px solid gray; */
/* flex-direction: column; */
`
export const NameAge = styled.div`
display: flex;
flex: 1;
flex-direction: column;
border-bottom: 2px solid gray;
`

