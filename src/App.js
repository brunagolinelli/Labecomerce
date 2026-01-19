import React from "react";
import Carrinho from "./Componentes/Carrinho/Carrinho";
import Filtros from "./Componentes/Filtros/Filtros";
import Produtos from "./Componentes/Home/Produtos/Produtos";
import { ConjuntoDeComponentes, Container, Header, BotaoCarrinhoHeader, BadgeCarrinho, Overlay } from "./estiloDoApp";
import { pacoteDeProdutos } from "./pacoteDeProdutos";

class App extends React.Component {
  state = {
    filtroMinimo: 20,
    filtroMaximo: 100000,
    filtroBuscaPorNome: "",
    ordenacao: "Crescente",
    carrinho: [],
    valorTotal: 0,
    mostrarCarrinho: window.innerWidth > 1024,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth > 1024) {
      this.setState({ mostrarCarrinho: true });
    } else if (window.innerWidth <= 1024 && this.state.mostrarCarrinho) {
      // Mantém o estado atual em mobile se já estava aberto
    }
  };

  manipularValorDoFiltroMinimo = (event) => {
    this.setState({
      filtroMinimo: event.target.value,
    });
  };

  manipularValorDoFiltroMaximo = (event) => {
    this.setState({
      filtroMaximo: event.target.value,
    });
  };

  manipularValorDoFiltroBuscaPorNome = (event) => {
    this.setState({
      filtroBuscaPorNome: event.target.value,
    });
  };

  filtrarProdutos = () => {
    const pacotesFiltradosMinimo = pacoteDeProdutos.filter((produto) => {
      if (this.state.filtroMinimo) {
        return produto.price >= this.state.filtroMinimo;
      } else {
        return produto;
      }
    });

    const pacotesFiltradosMaximo = pacotesFiltradosMinimo.filter((produto) => {
      if (this.state.filtroMaximo) {
        return produto.price <= this.state.filtroMaximo;
      } else {
        return produto;
      }
    });

    const pacoteFiltrado = pacotesFiltradosMaximo.filter((produto) => {
      return produto.name.toLowerCase().includes(this.state.filtroBuscaPorNome.toLowerCase());
    });

    return pacoteFiltrado;
  };

  ordenarProdutos = (event) => {
    this.setState({
      ordenacao: event.target.value,
    });
  };

  adicionarProdutoNoCarrinho = (produto) => {
    const produtoNoCarrinho = this.state.carrinho.filter((item) => {
      if (item.id === produto.id) {
        return item;
      } else {
        return false;
      }
    });

    if (produtoNoCarrinho.length === 0) {
      produto.quantidade = 1;
      const novoCarrinho = [produto, ...this.state.carrinho];
      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (produto.id === item.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        } else {
          return item;
        }
      });

      this.setState({
        carrinho: novoCarrinho,
      });
    }
    this.adicionarValorTotal(produto.price);
  };

  removerItemDoCarrinho = (itemParaRemover) => {
    if (itemParaRemover.quantidade === 1) {
      const novoCarrinho = this.state.carrinho.filter(
        (item) => item.id !== itemParaRemover.id
      );

      this.removerValorTotal(itemParaRemover.price * itemParaRemover.quantidade);

      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (itemParaRemover.id === item.id) {
          return { ...item, quantidade: item.quantidade - 1 };
        }
        return item;
      });
      this.removerValorTotal(itemParaRemover.price);

      this.setState({
        carrinho: novoCarrinho,
      });
    }
  };


  adicionarValorTotal = (valor) => {
    this.setState({
      valorTotal: this.state.valorTotal + valor,
    });
  };

  removerValorTotal = (valor) => {
    if (!valor || isNaN(valor)) {
      console.warn("Valor inválido para remoção:", valor);
      return;
    }

    this.setState((prevState) => ({
      valorTotal: Math.max(0, prevState.valorTotal - valor),
    }));
  };
  alternarCarrinho = () => {
    this.setState({ mostrarCarrinho: !this.state.mostrarCarrinho });
  };
  render() {
    const produtosFiltrados = this.filtrarProdutos();
    const quantidadeItensCarrinho = this.state.carrinho.reduce((total, item) => total + item.quantidade, 0);

    return (
      <ConjuntoDeComponentes>
        {this.state.mostrarCarrinho && window.innerWidth <= 1024 && (
          <Overlay onClick={this.alternarCarrinho} />
        )}
        <Container>
          <Header>
            <h1>🛍️ LabEcommerce</h1>
            <BotaoCarrinhoHeader onClick={this.alternarCarrinho}>
              <span>🛒</span>
              <span>Carrinho</span>
              {quantidadeItensCarrinho > 0 && (
                <BadgeCarrinho>{quantidadeItensCarrinho}</BadgeCarrinho>
              )}
            </BotaoCarrinhoHeader>
          </Header>

          <Filtros
            minimo={this.state.filtroMinimo}
            maximo={this.state.filtroMaximo}
            buscaPorNome={this.state.filtroBuscaPorNome}
            onChangeMinimo={this.manipularValorDoFiltroMinimo}
            onChangeMaximo={this.manipularValorDoFiltroMaximo}
            onChangeBuscaPorNome={this.manipularValorDoFiltroBuscaPorNome}
          />

          <Produtos
            quantidade={produtosFiltrados.length}
            onChangeCabecalho={this.ordenarProdutos}
            ordenacao={this.state.ordenacao}
            produtos={produtosFiltrados}
            onClick={this.adicionarProdutoNoCarrinho}
          />

          <Carrinho
            carrinho={this.state.carrinho}
            valorTotal={this.state.valorTotal}
            removerItemDoCarrinho={this.removerItemDoCarrinho}
            fecharCarrinho={window.innerWidth <= 1024 ? this.alternarCarrinho : null}
            mostrar={this.state.mostrarCarrinho}
          />
        </Container>
      </ConjuntoDeComponentes>
    );
  }
}

export default App;
