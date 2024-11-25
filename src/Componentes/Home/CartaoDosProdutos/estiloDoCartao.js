import styled from "styled-components";

export const Cartao = styled.div`
  border: 1px solid #e0e0e0;  
  border-radius: 8px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  background-color: #fff;  
  max-width: 300px; 
  margin: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;  

  &:hover {
    transform: translateY(-5px);  
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1); 
  }

  img {
    width: 100%;  
    height: auto; 
    border-radius: 8px 8px 0 0; 
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 10px auto;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    margin: 10px 0;
  }
`;

export const TextoDoCartao = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 0;
    padding: 8px 0;
    font-size: 16px;  
    color: #333; 
    line-height: 1.5;  

    @media (max-width: 768px) {
      font-size: 14px;  
      padding: 6px 0; 
    }

    @media (max-width: 480px) {
      font-size: 12px; 
      padding: 4px 0;   
    }
  }

  button {
    margin-top: 12px;  
    padding: 10px 20px;
    background-color: #4CAF50;  
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease; 
    
    &:hover {
      background-color: #45a049; 
    }

    @media (max-width: 768px) {
      font-size: 14px;  
      padding: 8px 16px;
    }

    @media (max-width: 480px) {
      width: 100%; 
      font-size: 14px; 
      padding: 12px 0; 
    }
  }
`;
