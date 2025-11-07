import type Corrida from "./Corrida";

export default interface Categoria {
  nome: ReactNode;
  descricao: ReactNode;
  id: number;
  veiculo: string;
  carro:boolean
  taxaGasolina: number;
  corrida?: Corrida [] | null;
}