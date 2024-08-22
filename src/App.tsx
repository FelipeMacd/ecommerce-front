import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from './contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import "./App.css";
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Contato from "./pages/contato/Contato"
import SobreNos from "./pages/sobre/SobreNos"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import Perfil from "./pages/perfil/Perfil";

import ListaCategoria from "./components/categorias/listaCategorias/ListaCategorias"
import FormularioCategoria from "./components/categorias/formularioCategorias/FormularioCategorias"
import DeletarCategoria from "./components/categorias/deletarCategorias/DeletarCategorias"
import ListaCategoriaUsuario from "./components/categoriasUsuario/listaCategoriaUsuario/ListaCategoriaUsuario"

import ListaProdutos from "./components/produtos/listaProdutos/ListaProduto"
import ListaProdutosUsuario from "./components/produtoUsuario/listaProdutoUsuario/ListaProdutoUsuario"
import FormularioProduto from "./components/produtos/formularioProduto/FormularioProduto"
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto"
import ProdutoPage from "./pages/produto/ProdutoPage"
import CarrinhoCompra from "./pages/carrinho/CarrinhoCompra"
import CompraRealizada from "./pages/compra/CompraRealizada";

function App() {
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/sobrenos" element={<SobreNos />} />
              <Route path="/categorias" element={<ListaCategoriaUsuario />} />
              <Route path="/categoriasAdm" element={<ListaCategoria />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutosUsuario />} />
              <Route path="/produtosAdm" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/produto/:id" element={<ProdutoPage />} />
              <Route path="/carrinho/produto/:id" element={<CarrinhoCompra />} />
              <Route path="/compraRealizadaComSucesso" element={<CompraRealizada />} />
              <Route path="/perfil" element={<Perfil />} />              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
