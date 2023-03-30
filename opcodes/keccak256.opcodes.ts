import { EvmState } from "../interfaces/EvmState";
import { Opcode } from "../interfaces/Opcode";

export const KECCAK256: Opcode = {
  name: "KECCAK256",
  opcode: 0x20,
  consumeGas: 30,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= KECCAK256.consumeGas;
  },
};
