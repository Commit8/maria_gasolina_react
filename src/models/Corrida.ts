import type Categoria from "./Categoria";

export default interface Corrida {
  id: number;
  distancia: number;
  valorCorrida: number;
  categoria: Categoria;
  cancelada?: boolean;
}
