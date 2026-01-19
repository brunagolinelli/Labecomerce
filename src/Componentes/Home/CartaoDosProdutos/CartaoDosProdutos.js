import React from "react";
import { Cartao, TextoDoCartao } from "./estiloDoCartao";


class CartaoDosProdutos extends React.Component {
  state = {
    adicionado: false,
  };

  handleClick = () => {
    this.props.onClick();
    this.setState({ adicionado: true });
    setTimeout(() => {
      this.setState({ adicionado: false });
    }, 2000);
  };

  render() {
    return (
      <Cartao>
        <img src={this.props.imagem} alt={this.props.nome} />
        <TextoDoCartao>
          <p>{this.props.nome}</p>
          <p>R$ {(this.props.valor || 0).toLocaleString('pt-BR')},00</p>
          <button onClick={this.handleClick} className={this.state.adicionado ? 'adicionado' : ''}>
            {this.state.adicionado ? '✓ Adicionado!' : '🛒 Adicionar ao carrinho'}
          </button>
        </TextoDoCartao>
      </Cartao>
    );
  }
}

export default CartaoDosProdutos;
