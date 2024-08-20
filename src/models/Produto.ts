import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    instrutor: string;
    categoria: Categoria | null;
}