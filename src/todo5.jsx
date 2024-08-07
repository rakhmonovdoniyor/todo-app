import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const BaseURL = "http://localhost:5052/api/data"; // Replace with your API base URL
const errorConsole = "Error occurred";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
`;

const TableHeadItem = styled.div`
  flex: 1;
  text-align: center;
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid #ccc;
  margin: 10px 0;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ItemText = styled.div`
  flex: 1;
  text-align: center;
  padding-right: 130px;
`;

const EditInput = styled.input`
  padding: 5px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ActionButton = styled.button`
  background: ${props => (props.save ? "#03bf00bd" : props.edit ? "#2196F3" : "#f44336")};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ClearButton = styled.button`
  padding: 10px 20px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e64a19;
  }
`;

const PendingTasks = styled.div`
  margin-top: 20px;
  font-size: 17px;
  font-weight: 500;
  color: #2c302e;
`;

const Todo5 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dataList, setDataList] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(BaseURL, { age, name });
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

  const handleDelete = async (name) => {
    try {
      const response = await axios.delete(`${BaseURL}/${name}`);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.error(errorConsole, error);
    }
  };

 

  return (
    <Container>
      <h1>To-Do List</h1>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            value={age}
            placeholder="Enter age"
            onChange={(e) => setAge(e.target.value)}
          />
        </InputWrapper>
        <AddButton type="submit">Add User</AddButton>
      </Form>

      <TableHead>
        <TableHeadItem>Your Name</TableHeadItem>
        <TableHeadItem>Your Age</TableHeadItem>
        <TableHeadItem>Actions</TableHeadItem>
      </TableHead>
      <Line />

      {dataList.map((value, index) => (
        <ItemContainer key={index}>
          {editingIndex === index ? (
            <>
              <EditInput
                type="text"
                defaultValue={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Edit name"
              />
              <EditInput
                type="text"
                defaultValue={newAge}
                onChange={(e) => setNewAge(e.target.value)}
                placeholder="Edit age"
              />
              <ActionButton save onClick={() => handleEdit(value.name)}>
                <SaveIcon />
              </ActionButton>
            </>
          ) : (
            <>
              <ItemText>{value.name}</ItemText>
              <ItemText>{value.age}</ItemText>
              <div style={{paddingRight:'20px', gap:'10px', display:'flex'}}>
              <ActionButton edit onClick={() => {
                setEditingIndex(index);
                setNewName(value.name);
                setNewAge(value.age);
              }}>
                <EditIcon />
              </ActionButton>
              
              <ActionButton onClick={() => handleDelete(value.name)}>
                <DeleteIcon />
              </ActionButton>
              </div>
            </>
          )}
        </ItemContainer>
      ))}

    </Container>
  );
};

export default Todo5;
