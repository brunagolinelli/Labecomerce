import React from "react";
import { ConjuntoDoCarrinho, CabecalhoCarrinho, BotaoFechar, MensagemVazio, ConjuntoDoCarrinhoContent, ValorTotal } from "./estiloDoCarrinho";
import Itens from "./Itens/Itens";

class Carrinho extends React.Component {
  render() {
    const itensDoCarrinho =
      this.props.carrinho &&
      this.props.carrinho.map((item) => {
        return (
          <Itens
            key={item.id}
            quantidade={item.quantidade}
            nome={item.name}
            onClick={() => this.props.removerItemDoCarrinho(item)}
          />
        );
      });

    if (this.props.mostrar === false) {
      return null;
    }

    return (
      <ConjuntoDoCarrinho>
        <CabecalhoCarrinho>
          <h2>Carrinho:</h2>
          {this.props.fecharCarrinho && (
            <BotaoFechar onClick={this.props.fecharCarrinho}>✕</BotaoFechar>
          )}
        </CabecalhoCarrinho>
        {this.props.carrinho && this.props.carrinho.length > 0 ? (
          <>
            <ConjuntoDoCarrinhoContent>{itensDoCarrinho}</ConjuntoDoCarrinhoContent>
            <ValorTotal>Valor total: R$ {(this.props.valorTotal || 0).toLocaleString('pt-BR')},00</ValorTotal>
          </>
        ) : (
          <MensagemVazio>Seu carrinho está vazio</MensagemVazio>
        )}
      </ConjuntoDoCarrinho>
    );
  }
}

export default Carrinho;
