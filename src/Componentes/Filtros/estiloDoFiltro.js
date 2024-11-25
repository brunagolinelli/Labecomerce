import styled from "styled-components";

export const GrupoDeFiltros = styled.div`
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 100%;
  max-width: 280px; /* Card menor */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px auto;

  @media (max-width: 768px) {
    max-width: 100%; 
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Filtro = styled.label`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;

  & input {
    padding: 8px;
    margin-top: 5px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
    background-color: #fff;

    &:focus {
      border-color: #007bff;
    }
  }

  & div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const BotaoDeFiltro = styled.button`
  padding: 10px;
  margin-top: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 12px;
  }
`;
