import React from "react";
import { ConjuntoDeItens, BadgeQuantidade, NomeProduto, ConjuntoDeItensButton } from "./estiloDosItens";

class Itens extends React.Component {
  render() {
    return (
      <ConjuntoDeItens>
        <BadgeQuantidade>{this.props.quantidade || 0}x</BadgeQuantidade>
        <NomeProduto>{this.props.nome}</NomeProduto>
        <ConjuntoDeItensButton onClick={this.props.onClick} title="Remover item">−</ConjuntoDeItensButton>
      </ConjuntoDeItens>
    );
  }
}

export default Itens;
