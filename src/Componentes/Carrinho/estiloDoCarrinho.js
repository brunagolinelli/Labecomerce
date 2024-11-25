import styled from "styled-components";

export const ConjuntoDoCarrinho = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;

  h2 {
    margin: 0 0 16px;
    font-size: 20px;
    color: #333;
  }

  div {
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    text-align: right;
    color: #555;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 12px;
    
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 10px;
    
    h2 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
  }
`;
