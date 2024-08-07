import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Block = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Flex2 = styled.div`
  flex: 1;
`;

export const InputAdd = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const AddWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  margin-bottom: 15px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px 0;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }

  ${props =>
    props.primary
      ? `
        background: #007bff;
        &:hover {
          background: #0056b3;
        }
      `
      : `
        background: #dc3545;
        &:hover {
          background: #c82333;
        }
      `
  }
`;

export const Header = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`;

export const FormButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: #28a745;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background: #218838;
  }
`;
