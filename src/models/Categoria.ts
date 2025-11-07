import type Corrida from "./Corrida";

export default interface Categoria {
  id: number;
  veiculo: string;
  carro:boolean
  taxaGasolina: number;
  corrida?: Corrida [] | null;
}