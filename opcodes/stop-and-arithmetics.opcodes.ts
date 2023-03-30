import { Opcode } from "../interfaces/Opcode";
import { EvmState } from "../interfaces/EvmState";

// Arithmetic opcodes
export const STOP: Opcode = {
  name: "STOP",
  opcode: 0x00,
  consumeGas: 0,
  execute: (state: EvmState) => {
    state.pc++;
    state.gas -= STOP.consumeGas;
  },
};

export const ADD: Opcode = {
  name: "ADD",
  opcode: 0x01,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a + b;
    state.stack.push(result);
    state.pc++;
    state.gas -= ADD.consumeGas;
  },
};

export const SUB: Opcode = {
  name: "SUB",
  opcode: 0x02,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a - b;
    state.stack.push(result);
    state.pc++;
    state.gas -= SUB.consumeGas;
  },
};

export const MUL: Opcode = {
  name: "MUL",
  opcode: 0x03,
  consumeGas: 5,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a * b;
    state.stack.push(result);
    state.pc++;
    state.gas -= MUL.consumeGas;
  },
};

export const DIV: Opcode = {
  name: "DIV",
  opcode: 0x04,
  consumeGas: 5,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a / b;
    state.stack.push(result);
    state.pc++;
    state.gas -= DIV.consumeGas;
  },
};

export const SDIV: Opcode = {
  name: "SDIV",
  opcode: 0x05,
  consumeGas: 5,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = Math.floor(a / b);
    state.stack.push(result);
    state.pc++;
    state.gas -= SDIV.consumeGas;
  },
};

export const MOD: Opcode = {
  name: "MOD",
  opcode: 0x06,
  consumeGas: 5,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a % b;
    state.stack.push(result);
    state.pc++;
    state.gas -= MOD.consumeGas;
  },
};

export const SMOD: Opcode = {
  name: "SMOD",
  opcode: 0x07,
  consumeGas: 5,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = Math.floor(a % b);
    state.stack.push(result);
    state.pc++;
    state.gas -= SMOD.consumeGas;
  },
};

export const ADDMOD: Opcode = {
  name: "ADDMOD",
  opcode: 0x08,
  consumeGas: 8,
  execute: (state: EvmState) => {
    const c = state.stack.pop()!;
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = (a + b) % c;
    state.stack.push(result);
    state.pc++;
    state.gas -= ADDMOD.consumeGas;
  },
};

export const MULMOD: Opcode = {
  name: "MULMOD",
  opcode: 0x09,
  consumeGas: 8,
  execute: (state: EvmState) => {
    const c = state.stack.pop()!;
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = (a * b) % c;
    state.stack.push(result);
    state.pc++;
    state.gas -= MULMOD.consumeGas;
  },
};

export const EXP: Opcode = {
  name: "EXP",
  opcode: 0x0a,
  consumeGas: 10,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a ** b;
    state.stack.push(result);
    state.pc++;
    state.gas -= EXP.consumeGas;
  },
};

export const SIGNEXTEND: Opcode = {
  name: "SIGNEXTEND",
  opcode: 0x0b,
  consumeGas: 5,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= SIGNEXTEND.consumeGas;
  },
};
