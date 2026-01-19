import styled from "styled-components";

export const ConjuntoDoCarrinho = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: fit-content;
  position: sticky;
  top: 20px;
  max-width: 100%;
  grid-column: 3;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 400px;
    z-index: 1000;
    overflow-y: auto;
    border-radius: 0;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.2);
    animation: slideIn 0.3s ease-out;
    grid-column: auto;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const CabecalhoCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 16px;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d3748;
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
  }

  h2::before {
    content: "🛒";
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const BotaoFechar = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-weight: bold;
  flex-shrink: 0;

  &:hover {
    background: #ee5a52;
    transform: rotate(90deg) scale(1.1);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const MensagemVazio = styled.p`
  text-align: center;
  padding: 40px 20px;
  color: #718096;
  font-size: 16px;
  font-style: italic;
  margin: 0;
`;

export const ConjuntoDoCarrinhoContent = styled.div`
  margin-bottom: 16px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }

  @media (max-width: 1024px) {
    max-height: calc(100vh - 200px);
  }
`;

export const ValorTotal = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #2d3748;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding: 16px;
  border-radius: 12px;
  background-color: rgba(102, 126, 234, 0.1);
  margin: 16px 0 0 0;
  border: 2px solid rgba(102, 126, 234, 0.2);

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
