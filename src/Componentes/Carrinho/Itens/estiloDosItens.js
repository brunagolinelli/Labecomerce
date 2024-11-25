import styled from "styled-components";

export const ConjuntoDeItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }

  button {
    background-color: #ff4d4d;
    border: none;
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff1a1a;
    }

    &:active {
      background-color: #e60000;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start; 
    padding: 12px; 
  }

  @media (max-width: 480px) {
    padding: 8px; 
    
    p {
      font-size: 14px; 
    }

    button {
      font-size: 12px; 
      padding: 4px 8px; 
    }
  }
`;
