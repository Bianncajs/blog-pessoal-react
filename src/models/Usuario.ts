import Postagem from "./Postagem.ts";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  postagem?: Postagem | null;
}