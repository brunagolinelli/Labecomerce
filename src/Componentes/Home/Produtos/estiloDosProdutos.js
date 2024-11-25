import styled from "styled-components";

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-left: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  & p {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

  & label {
    font-size: 14px;
    font-weight: 600;
    color: #666;
  }

  & select {
    padding: 8px;
    font-size: 14px;
    margin-left: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    outline: none;
    background-color: #fff;
    cursor: pointer;

    &:focus {
      border-color: #007bff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
    padding: 15px;
    
    & p {
      font-size: 14px;
    }

    & label {
      font-size: 12px;
    }

    & select {
      font-size: 12px;
    }
  }
`;

export const GrupoDeCartoes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 20px;
  padding: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10px;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    padding: 5px;
  }
`;
