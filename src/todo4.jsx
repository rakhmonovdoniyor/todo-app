
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL, errorConsole } from "./config";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {
  AddButton,
  AddingContainer,
  AddInput,
  AddText,
  Button,
  Column,
  Container,
  Datalength,
  Editing,
  InputWr,
  InputWrapp,
  Line,
  NameAge,
  PupleButton,
  TableHead2,
  TableHeadWrap,
  Taskadd,
  Taskadd2,
} from "./todo4style";
import { AlignCenter, WrappEdit } from "./newstyle";
import { TableHead } from "./todo4style";
// import img from "./assets/img5.jpg";

const Todo4 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dataList, setDataList] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
//   const [dataList, setDataList] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(BaseURL, {
        age,
        name,
      });
      console.log(response.data);
      fetchData();
      setName("");
      setAge("");
    } catch (error) {
      console.log(errorConsole, error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(BaseURL);
      setDataList(response.data);
    } catch (error) {
      console.log(errorConsole, error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (oldName) => {
    try {
      const response = await axios.put(`${BaseURL}/${oldName}`, {
        newName,
        newAge,
      });
      console.log(response.data);

      setNewName("");
      setNewAge("");
      setEditingIndex(null);
      fetchData();
    } catch (error) {
      console.log(errorConsole, error);
    }
  };

  const handleDelet = async (name) => {
    try {
      const response = await axios.delete(`${BaseURL}/${name}`);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.error(errorConsole, error);
    }
  };

  const handleClearAll = async () => {
    try {
      const response = await axios.delete(`${BaseURL}/clear-all`);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.log(errorConsole, error);
    }
  };

  return (
    <div >
    <Container>
      <h1>To-Do List Todo3</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          width: "100%",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
          <InputWr>

          
          <InputWrapp>
        <AddInput
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <AddInput
          type="text"
          value={age}
          placeholder="Enter age"
          onChange={(e) => setAge(e.target.value)}
        />
        </InputWrapp>
        <div>
        <button  class="button-70" role="button">Add User</button>
        </div>
         
        </InputWr>
      </form>

      <TableHead>
        <TableHead2>Your Name</TableHead2>
        <TableHead2>Your Age</TableHead2>
        <TableHead2>Actions</TableHead2>
        
        {/* <TableHead2></TableHead2> */}
      </TableHead>
      <Line></Line>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        {dataList.map((value, index) => {
          return (
            <AddingContainer key={index}>
              <div style={{ position: "relative", width: "100%" }}>
                {editingIndex === index ? (
                
                  <AddText>
                      <>
                    <Editing>
                      {" "}
                      <input
                        type="text"
                        defaultValue={newName} 
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="Edit name"
                      />
                    </Editing>
                    </>
                    <div>
                    <Editing> 
                    
                      {" "}
                      <input style={{width:'100px'}}
                        type="text"
                        defaultValue={newAge}
                        onChange={(e) => setNewAge(e.target.value)}
                        placeholder="Edit age"
                      />
                     
                    </Editing>
                    </div>
                  
                  </AddText>
                 
                  
                ) : (
                  <Taskadd>
                    <div> {value.name}</div>
                    <div style={{paddingLeft:'70px'}}> {value.age}</div>
                    
                  </Taskadd>
                )}
              </div>


<div style={{ display: "flex", alignItems:'flex-end' ,gap:'10px', paddingRight:'50px'}}>
                {editingIndex === index ? (
                  
                  <Button
                    style={{ background: "#03bf00bd" }}
                    onClick={() => handleEdit(value.name)}
                  >
                    <SaveIcon/>
                  </Button>
                ) : (
                  <Button
                    $edit
                    onClick={() => {
                      setEditingIndex(index); 
                      setNewName(value.name);
                      setNewAge(value.age); 
                    }}
                  >
                    {" "}
                    <EditIcon/>
                  </Button>
                )}
                <Button onClick={() => handleDelet(value.name)}>
                  <DeleteIcon/>
                </Button>
                
              </div>
           
                
            </AddingContainer>
            
          );
        })}
      </div>
      <>

      
      
        </>
      
    </Container>
  </div>
  );
};

export default Todo4;