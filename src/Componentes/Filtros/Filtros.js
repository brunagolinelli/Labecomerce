import React from "react";
import { Filtro, GrupoDeFiltros, LabelFiltro, ContainerInputs, InputGroup, LabelInput, Separador } from "./estiloDoFiltro";

class Filtros extends React.Component {
  render() {
    return (
      <GrupoDeFiltros>
        <h2>Filtros</h2>

        <Filtro>
          <LabelFiltro>💰 Intervalo de Preço</LabelFiltro>
          <ContainerInputs>
            <InputGroup>
              <LabelInput>Mínimo</LabelInput>
              <input
                type={"number"}
                value={this.props.minimo}
                onChange={this.props.onChangeMinimo}
                placeholder="R$ 0"
                min="0"
              />
            </InputGroup>
            <Separador>-</Separador>
            <InputGroup>
              <LabelInput>Máximo</LabelInput>
              <input
                type={"number"}
                value={this.props.maximo}
                onChange={this.props.onChangeMaximo}
                placeholder="R$ 100000"
                min="0"
              />
            </InputGroup>
          </ContainerInputs>
        </Filtro>

        <Filtro>
          <LabelFiltro>🔍 Busca por Nome</LabelFiltro>
          <input
            type={"text"}
            value={this.props.buscaPorNome}
            onChange={this.props.onChangeBuscaPorNome}
            placeholder="Digite o nome do produto..."
          />
        </Filtro>

      </GrupoDeFiltros>
    );
  }
}

export default Filtros;
