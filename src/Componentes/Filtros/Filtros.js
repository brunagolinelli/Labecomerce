import React from "react";
import { Filtro, GrupoDeFiltros, BotaoDeFiltro } from "./estiloDoFiltro"; 

class Filtros extends React.Component {
  render() {
    return (
      <GrupoDeFiltros>
        <h2>Filtros</h2>

        <Filtro>
          Intervalo de Preço:
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type={"number"}
              value={this.props.minimo}
              onChange={this.props.onChangeMinimo}
              style={{ width: "80px" }}
            />
            -
            <input
              type={"number"}
              value={this.props.maximo}
              onChange={this.props.onChangeMaximo}
              style={{ width: "80px" }}
            />
          </div>
        </Filtro>

        <Filtro>
          Busca por nome:
          <input
            type={"text"}
            value={this.props.buscaPorNome}
            onChange={this.props.onChangeBuscaPorNome}
            style={{ width: "100%" }}
          />
        </Filtro>

      </GrupoDeFiltros>
    );
  }
}

export default Filtros;
