import type Categoria from "./Categoria";

export default interface Corrida {
  id: number;
  distancia: number;
  valorcorrida: number;
  categoria: Categoria;
  cancelada?: boolean;
}