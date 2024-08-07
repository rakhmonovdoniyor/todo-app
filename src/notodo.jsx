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
  width: 100%;
  padding: 20px;
  background-color: #e8f5e9;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #2e7d32;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 2px solid #c8e6c9;
  border-radius: 5px;
  font-size: 16px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #388e3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #2e7d32;
  }
`;

const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
  background-color: #a5d6a7;
  padding: 10px;
  border-radius: 10px 10px 0 0;
`;

const TableHeadItem = styled.div`
  flex: 1;
  text-align: center;
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid #c8e6c9;
  margin: 0;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid #c8e6c9;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemText = styled.div`
  flex: 1;
  text-align: center;
`;

const EditInput = styled.input`
  padding: 5px;
  margin: 5px;
  border: 2px solid #c8e6c9;
  border-radius: 5px;
  font-size: 16px;
`;

const ActionButton = styled.button`
  background: ${props => (props.save ? "#388e3c" : props.edit ? "#ffb300" : "#d32f2f")};
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
  background-color: #d32f2f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #b71c1c;
  }
`;

const PendingTasks = styled.div`
  margin-top: 20px;
  font-size: 17px;
  font-weight: 500;
  color: #2c302e;
`;

const Todo6 = () => {
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
    <Container>
      <Title>To-Do List</Title>
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
            </>
          )}
        </ItemContainer>
      ))}

      <PendingTasks>
        You have {dataList.length} pending tasks
        <ClearButton onClick={handleClearAll}>Clear All</ClearButton>
      </PendingTasks>
    </Container>
  );
};

export default Todo6;
