import { EvmState } from "../interfaces/EvmState";
import { Opcode } from "../interfaces/Opcode";

export const CREATE: Opcode = {
  name: "CREATE",
  opcode: 0xf0,
  consumeGas: 32000,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    state.pc++;
    state.gas -= CREATE.consumeGas;
  },
};

export const CALL: Opcode = {
  name: "CALL",
  opcode: 0xf1,
  consumeGas: 40,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    state.pc++;
    state.gas -= CALL.consumeGas;
  },
};

export const CALLCODE: Opcode = {
  name: "CALLCODE",
  opcode: 0xf2,
  consumeGas: 40,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    state.pc++;
    state.gas -= CALLCODE.consumeGas;
  },
};

export const RETURN: Opcode = {
  name: "RETURN",
  opcode: 0xf3,
  consumeGas: 0,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    state.pc++;
    state.gas -= RETURN.consumeGas;
  },
};

export const DELEGATECALL: Opcode = {
  name: "DELEGATECALL",
  opcode: 0xf4,
  consumeGas: 40,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    state.pc++;
    state.gas -= DELEGATECALL.consumeGas;
  },
};

export const STATICCALL: Opcode = {
  name: "STATICCALL",
  opcode: 0xfa,
  consumeGas: 40,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    state.pc++;
    state.gas -= STATICCALL.consumeGas;
  },
};

export const REVERT: Opcode = {
  name: "REVERT",
  opcode: 0xfd,
  consumeGas: 0,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    state.pc++;
    state.gas -= REVERT.consumeGas;
  },
};

export const INVALID: Opcode = {
  name: "INVALID",
  opcode: 0xfe,
  consumeGas: 0,
  execute: (state: EvmState) => {
    state.pc++;
    state.gas -= INVALID.consumeGas;
  },
};

export const SELFDESTRUCT: Opcode = {
  name: "SELFDESTRUCT",
  opcode: 0xff,
  consumeGas: 5000,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    state.pc++;
    state.gas -= SELFDESTRUCT.consumeGas;
  },
};

/* EIP-1014 */
export const CREATE2: Opcode = {
  name: "CREATE2",
  opcode: 0xF5,
  consumeGas: 32000,
  execute: (state: EvmState) => {
    const salt = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    state.pc++;
    state.gas -= CREATE2.consumeGas;
  },
};