import type Categoria from "./Categoria";

export default interface Corrida {
  id: number;
  distancia: number;
  data: string;
  valorCorrida: number;
  categoria: Categoria;
  cancelada?: boolean;
}
