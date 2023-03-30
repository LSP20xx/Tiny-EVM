import { EvmState } from "../interfaces/EvmState";
import { Opcode } from "../interfaces/Opcode";

export const POP: Opcode = {
  name: "POP",
  opcode: 0x50,
  consumeGas: 2,
  execute: (state: EvmState) => {
    state.stack.pop()!;
    state.pc++;
    state.gas -= POP.consumeGas;
  },
};

export const MLOAD: Opcode = {
  name: "MLOAD",
  opcode: 0x51,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= MLOAD.consumeGas;
  },
};

export const MSTORE: Opcode = {
  name: "MSTORE",
  opcode: 0x52,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= MSTORE.consumeGas;
  },
};

export const MSTORE8: Opcode = {
  name: "MSTORE8",
  opcode: 0x53,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= MSTORE8.consumeGas;
  },
};

export const SLOAD: Opcode = {
  name: "SLOAD",
  opcode: 0x54,
  consumeGas: 200,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= SLOAD.consumeGas;
  },
};

export const SSTORE: Opcode = {
  name: "SSTORE",
  opcode: 0x55,
  consumeGas: 0,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= SSTORE.consumeGas;
  },
};

export const JUMP: Opcode = {
  name: "JUMP",
  opcode: 0x56,
  consumeGas: 8,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= JUMP.consumeGas;
  },
};

export const JUMPI: Opcode = {
  name: "JUMPI",
  opcode: 0x57,
  consumeGas: 10,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= JUMPI.consumeGas;
  },
};

export const PC: Opcode = {
  name: "PC",
  opcode: 0x58,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.pc;
    state.stack.push(result);
    state.pc++;
    state.gas -= PC.consumeGas;
  },
};

export const MSIZE: Opcode = {
  name: "MSIZE",
  opcode: 0x59,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.msize;
    state.stack.push(result);
    state.pc++;
    state.gas -= MSIZE.consumeGas;
  },
};

export const GAS: Opcode = {
  name: "GAS",
  opcode: 0x5a,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.gas;
    state.stack.push(result);
    state.pc++;
    state.gas -= GAS.consumeGas;
  },
};

export const JUMPDEST: Opcode = {
  name: "JUMPDEST",
  opcode: 0x5b,
  consumeGas: 1,
  execute: (state: EvmState) => {
    const result = state.jumpdest;
    state.stack.push(result);
    state.pc++;
    state.gas -= JUMPDEST.consumeGas;
  },
};
