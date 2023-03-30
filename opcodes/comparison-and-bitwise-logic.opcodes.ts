import { Opcode } from "../interfaces/Opcode";
import { EvmState } from "../interfaces/EvmState";

export const LT: Opcode = {
  name: "LT",
  opcode: 0x10,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a < b ? 1 : 0;
    state.stack.push(result);
    state.pc++;
    state.gas -= LT.consumeGas;
  },
};

export const GT: Opcode = {
  name: "GT",
  opcode: 0x11,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a > b ? 1 : 0;
    state.stack.push(result);
    state.pc++;
    state.gas -= GT.consumeGas;
  },
};

export const SLT: Opcode = {
  name: "SLT",
  opcode: 0x12,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = Math.floor(a) < Math.floor(b) ? 1 : 0;
    state.stack.push(result);
    state.pc++;
    state.gas -= SLT.consumeGas;
  },
};

export const SGT: Opcode = {
  name: "SGT",
  opcode: 0x13,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = Math.floor(a) > Math.floor(b) ? 1 : 0;
    state.stack.push(result);
    state.pc++;
    state.gas -= SGT.consumeGas;
  },
};

export const EQ: Opcode = {
  name: "EQ",
  opcode: 0x14,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a === b ? 1 : 0;
    state.stack.push(result);
    state.pc++;
    state.gas -= EQ.consumeGas;
  },
};

export const ISZERO: Opcode = {
  name: "ISZERO",
  opcode: 0x15,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a === 0 ? 1 : 0;
    state.stack.push(result);
    state.pc++;
    state.gas -= ISZERO.consumeGas;
  },
};

export const AND: Opcode = {
  name: "AND",
  opcode: 0x16,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a & b;
    state.stack.push(result);
    state.pc++;
    state.gas -= AND.consumeGas;
  },
};

export const OR: Opcode = {
  name: "OR",
  opcode: 0x17,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a | b;
    state.stack.push(result);
    state.pc++;
    state.gas -= OR.consumeGas;
  },
};

export const XOR: Opcode = {
  name: "XOR",
  opcode: 0x18,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a ^ b;
    state.stack.push(result);
    state.pc++;
    state.gas -= XOR.consumeGas;
  },
};

export const NOT: Opcode = {
  name: "NOT",
  opcode: 0x19,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = ~a;
    state.stack.push(result);
    state.pc++;
    state.gas -= NOT.consumeGas;
  },
};

export const BYTE: Opcode = {
  name: "BYTE",
  opcode: 0x1a,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= BYTE.consumeGas;
  },
};

export const SHL: Opcode = {
  name: "SHL",
  opcode: 0x1b,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= SHL.consumeGas;
  },
};

export const SHR: Opcode = {
  name: "SHR",
  opcode: 0x1c,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= SHR.consumeGas;
  },
};

export const SAR: Opcode = {
  name: "SAR",
  opcode: 0x1d,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= SAR.consumeGas;
  },
};
