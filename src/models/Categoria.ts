import type Corrida from "./Corrida";

export default interface Categoria {
  id: number;
  veiculo: string;
  taxaGasolina: number;
  corrida?: Corrida [] | null;
}