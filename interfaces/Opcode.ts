import { EvmState } from "./evmState";

export interface Opcode {
  name: string;
  opcode: number;
  consumeGas: number;
  execute: (state: EvmState) => void;
}
