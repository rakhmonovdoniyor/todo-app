import styled from "styled-components";

export const Con = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 50px;
`
export const Cdon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 600px;
flex-direction: column;
border: 2px solid black;
padding: 50px;
background-color: #bcd4e6;
border-radius: 20px;
`

export const Head = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20px;
/* padding: 100px; */

label{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    color:blue;
    /* padding: 10px 20px; */
    width: 80px;
    height: 40px;
    border: 1px solid;
    border-radius: 5px;
}
input{
    /* padding: 10px 100px; */
    width: 300px;
    height: 35px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: #f0ffff;
}
`

export const Cofn = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const Button = styled.button`




/* CSS */

  background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;


.button-62:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.button-62:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}
`

export const Flex =styled.div`
display: flex;
align-items: center;
gap: 20px;
`

export const Flex2Col =styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
gap: 10px;
input{
    /* padding: 10px 100px; */
    width: 100px;
    height: 35px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: #f0ffff;
}
`


export const Flex2 =styled.div`
display: flex;
align-items: center;
/* flex-direction: column; */
/* justify-content: flex-start; */
gap: 15px;
border: 1px solid ;
width: 200px;
height: 28px;
border-radius: 5px;
padding: 5px;
font-size: 20px;
/* padding: 10px 100px; */
`