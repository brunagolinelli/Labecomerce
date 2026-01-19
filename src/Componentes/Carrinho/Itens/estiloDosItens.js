import styled from "styled-components";

export const ConjuntoDeItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  gap: 12px;
  background: rgba(255, 255, 255, 0.5);

  &:hover {
    transform: translateX(4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    gap: 10px;
    padding: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 12px;
  }
`;

export const BadgeQuantidade = styled.p`
  margin: 0;
  font-weight: 700;
  min-width: 50px;
  text-align: center;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 14px;
  border: 2px solid rgba(102, 126, 234, 0.3);
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 10px;
    min-width: 40px;
  }
`;

export const NomeProduto = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: #1a202c;
  flex: 1;
  text-align: left;
  padding: 0 8px;
  line-height: 1.4;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0 4px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ConjuntoDeItensButton = styled.button`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-family: inherit;
  flex-shrink: 0;
  min-width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px) scale(1.1);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(0) scale(1);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px 14px;
    min-width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 6px 12px;
    min-width: 36px;
    height: 36px;
  }
`;
