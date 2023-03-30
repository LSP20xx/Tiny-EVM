import { EvmState } from "../interfaces/EvmState";
import { Opcode } from "../interfaces/Opcode";

export const LOG0: Opcode = {
  name: "LOG0",
  opcode: 0xa0,
  consumeGas: 375,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    state.pc++;
    state.gas -= LOG0.consumeGas;
  },
};

export const LOG1: Opcode = {
  name: "LOG1",
  opcode: 0xa1,
  consumeGas: 750,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    state.pc++;
    state.gas -= LOG1.consumeGas;
  },
};

export const LOG2: Opcode = {
  name: "LOG2",
  opcode: 0xa2,
  consumeGas: 1125,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    state.pc++;
    state.gas -= LOG2.consumeGas;
  },
};

export const LOG3: Opcode = {
  name: "LOG3",
  opcode: 0xa3,
  consumeGas: 1500,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    state.pc++;
    state.gas -= LOG3.consumeGas;
  },
};

export const LOG4: Opcode = {
  name: "LOG4",
  opcode: 0xa4,
  consumeGas: 1875,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    state.pc++;
    state.gas -= LOG4.consumeGas;
  },
};
