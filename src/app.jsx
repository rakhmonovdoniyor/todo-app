import React, { useEffect, useState } from 'react'
import axios from "axios"
import { BaseURL, errorConsole } from './config';
import Button from "styled-components"
import { Cdon, Con, Flex, Flex2, Flex2Col, Head } from './style';

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [newName, setnewName] = useState("");
  const [newAge, setnewAge] = useState("");
  const[ dataList, setDataList ]= useState([]);
  // const [delete]


  const fetchData = async()=>{
    try{
      const response = await axios.get(BaseURL);
      setDataList(response.data);
    }catch (error){
      console.log('Failed data', error);
    }
  }

  useEffect(()=> {
    fetchData();
    })

    
const handlesubmit = async (event) =>{
  event.preventDefault();
  try{
    const response = await axios.post(BaseURL, {
      name,
      age,
    });

      console.log(response.data);
      fetchData();
   }
  
    catch(error) {
      console.error(errorConsole, error);
    }
  }




  const handleEdit = async (oldname) => {
    try {
      const response = await axios.put(`${BaseURL}/${oldname}`,{
        newName,
        newAge
      } );
      console.log(response.data);
      setnewAge("");
      setnewAge("");
      fetchData();

    } catch (error) {
      console.error(errorConsole);
      
    }
  }

  const handleDelete = async(name) => {
    try {
      const response = await axios.delete(`${BaseURL}/${name}`);
      console.log(response.data);
      
    } catch (error) {
      console.error(errorConsole);
      
    }
  }
  return (
    <Con>
      <Cdon>
      <h1>Add Data</h1>

      
      <form onSubmit={handlesubmit} >
      <Head>
        <Flex>

        
        <label style={{marginRight: '15px'}}>name
        
        </label>
        <input type="text" value={name} 
         onChange={(e) => setName(e.target.value)} 
         placeholder='name'/>
        </Flex>
        
          <Flex>
         <label>age
         
         </label>
         <input  style={{marginLeft: '15px'}}
          type="text" value={age} 
         onChange={(e) => setAge(e.target.value)} 
         placeholder=' age'/>
         </Flex>
    
         <button class="button-62" role="button">Add </button>
         </Head>
      </form>
      

      <h1>Add List</h1>
      <ul>
        {
          dataList.map((value,index) => {
            return(     
          <div key={index}>
            
        < > 
        <Flex>


       <Flex2Col>
        <Flex2>
        name:
        <h3>
        {value.name} 
        </h3>
        </Flex2>
        <Flex2 >
        age: 
        <h3 >
        {value.age} 
        </h3>
       
        </Flex2>
       
      
       </Flex2Col>
     
       
      
          
          <Flex2Col>

           <input type="text" 
         value={newName}
         onChange={(e) => setnewName(e.target.value)} 
         placeholder='ne name'/>
          

         <input type="text" 
         value={newAge}
         onChange={(e) => setnewAge(e.target.value)}
         placeholder='new age' />
         </Flex2Col>

         <button class="button-70" role="button" onClick={(e)=> handleEdit(e.target.value)}>Edit</button>
         
         <button  class="button-45" role="button" onClick={()=> handleDelete(value.name)}>Delete</button>
         </Flex>
          </>     
        </div>
      )
    })
      }
      </ul>
      </Cdon>
    </Con>
  )
}

export default App;