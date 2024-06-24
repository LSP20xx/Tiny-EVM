import { EvmState } from "../interfaces/EvmState";
import { Opcode } from "../interfaces/Opcode";

export const ADDRESS: Opcode = {
  name: "ADDRESS",
  opcode: 0x30,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.address;
    state.stack.push(result);
    state.pc++;
    state.gas -= ADDRESS.consumeGas;
  },
};

export const BALANCE: Opcode = {
  name: "BALANCE",
  opcode: 0x31,
  consumeGas: 20,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= BALANCE.consumeGas;
  },
};

export const ORIGIN: Opcode = {
  name: "ORIGIN",
  opcode: 0x32,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.origin;
    state.stack.push(result);
    state.pc++;
    state.gas -= ORIGIN.consumeGas;
  },
};

export const CALLER: Opcode = {
  name: "CALLER",
  opcode: 0x33,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.caller;
    state.stack.push(result);
    state.pc++;
    state.gas -= CALLER.consumeGas;
  },
};

export const CALLVALUE: Opcode = {
  name: "CALLVALUE",
  opcode: 0x34,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.callvalue;
    state.stack.push(result);
    state.pc++;
    state.gas -= CALLVALUE.consumeGas;
  },
};

export const CALLDATALOAD: Opcode = {
  name: "CALLDATALOAD",
  opcode: 0x35,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= CALLDATALOAD.consumeGas;
  },
};

export const CALLDATASIZE: Opcode = {
  name: "CALLDATASIZE",
  opcode: 0x36,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.calldata.length;
    state.stack.push(result);
    state.pc++;
    state.gas -= CALLDATASIZE.consumeGas;
  },
};

export const CALLDATACOPY: Opcode = {
  name: "CALLDATACOPY",
  opcode: 0x37,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const c = state.stack.pop()!;
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= CALLDATACOPY.consumeGas;
  },
};

export const CODESIZE: Opcode = {
  name: "CODESIZE",
  opcode: 0x38,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.code.length;
    state.stack.push(result);
    state.pc++;
    state.gas -= CODESIZE.consumeGas;
  },
};

export const CODECOPY: Opcode = {
  name: "CODECOPY",
  opcode: 0x39,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const c = state.stack.pop()!;
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= CODECOPY.consumeGas;
  },
};

export const GASPRICE: Opcode = {
  name: "GASPRICE",
  opcode: 0x3a,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.gasprice;
    state.stack.push(result);
    state.pc++;
    state.gas -= GASPRICE.consumeGas;
  },
};

export const EXTCODESIZE: Opcode = {
  name: "EXTCODESIZE",
  opcode: 0x3b,
  consumeGas: 20,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= EXTCODESIZE.consumeGas;
  },
};

export const EXTCODECOPY: Opcode = {
  name: "EXTCODECOPY",
  opcode: 0x3c,
  consumeGas: 20,
  execute: (state: EvmState) => {
    const d = state.stack.pop()!;
    const c = state.stack.pop()!;
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= EXTCODECOPY.consumeGas;
  },
};

export const RETURNDATASIZE: Opcode = {
  name: "RETURNDATASIZE",
  opcode: 0x3d,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.returndata.length;
    state.stack.push(result);
    state.pc++;
    state.gas -= RETURNDATASIZE.consumeGas;
  },
};

export const RETURNDATACOPY: Opcode = {
  name: "RETURNDATACOPY",
  opcode: 0x3e,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const c = state.stack.pop()!;
    const b = state.stack.pop()!;
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= RETURNDATACOPY.consumeGas;
  },
};

export const EXTCODEHASH: Opcode = {
  name: "EXTCODEHASH",
  opcode: 0x3f,
  consumeGas: 400,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= EXTCODEHASH.consumeGas;
  },
};

/* EIP-1559 */
export const BASEFEE: Opcode = {
  name: "BASEFEE",
  opcode: 0x48,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.basefee;
    state.stack.push(result);
    state.pc++;
    state.gas -= BASEFEE.consumeGas;
  },
};