import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL, errorConsole } from "./config";
import {
  AddButton,
  AddingContainer,
  AddInput,
  AddText,
  AlignCenter,
  AlignCenterColumn,
  Button,
  Container,
  WrappEdit,
} from "./newstyle";
// import img from "./assets/img5.jpg";

const TodoApp = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dataList, setDataList] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

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

  return (
    <div style={{margin:'100px', display: "flex", gap: "100px", alignItems: "center" }}>
      {/* <img src={img} alt="" style={{ width: "500px" }} /> */}
      <Container>
        <h1>To-Do List App</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            width: "100%",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
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
          <div>
          <button class="button-2" role="button"  >Add</button>
          </div>
           
        </form>

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
                <div style={{ position: "relative", width: "100%"}}>
                  {editingIndex === index ? (
                    <AddText>
                      <WrappEdit>
                        name:{" "}
                        <input
                          type="text"
                          defaultValue={newName} // 수정된 이름을 newName 상태 변수에서 가져옴
                          onChange={(e) => setNewName(e.target.value)}
                          placeholder="Edit name"
                        />
                      </WrappEdit>
                      <WrappEdit>
                        age:{" "}
                        <input style={{marginLeft: '12px'}}
                          type="text"
                          defaultValue={newAge} // 수정된 이름을 newName 상태 변수에서 가져옴
                          onChange={(e) => setNewAge(e.target.value)}
                          placeholder="Edit age"
                        />
                      </WrappEdit>
                    </AddText>
                  ) : (
                    <div style={{display: 'flex',flexDirection: 'column',justifyContent:'center',paddingLeft:'5px'}} >
                      <div >name: {value.name}</div>
                      <div>age: {value.age}</div>
                    </div>
                  )}
                </div>

                <div style={{ display: "flex", gap: "10px",padding:'10px' }}>
                  {editingIndex === index ? (
                    <AlignCenter>
                    <button class="button-1" role="button"
                      
                      onClick={() => handleEdit(value.name)}
                    >
                      Save
                    </button>
                    </AlignCenter>
                  ) : (
                    <AlignCenter>
                    <button class="button-68"
                      $edit
                      onClick={() => {
                        setEditingIndex(index);  
                        setNewName(value.name);  
                        setNewAge(value.age);        
                      }}
                    >
                      {" "}
                      Edit
                    </button>
                    </AlignCenter>
                  )}
                  <AlignCenter>
                  <button class="button-43" role="button" onClick={() => handleDelet(value.name)}>
                    Delete
                  </button>
                  </AlignCenter>
                </div>
              </AddingContainer>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default TodoApp;