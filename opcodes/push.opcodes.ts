import { EvmState } from "../interfaces/EvmState";
import { Opcode } from "../interfaces/Opcode";

export const PUSH1: Opcode = {
  name: "PUSH1",
  opcode: 0x60,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH1.consumeGas;
  },
};

export const PUSH2: Opcode = {
  name: "PUSH2",
  opcode: 0x61,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH2.consumeGas;
  },
};

export const PUSH3: Opcode = {
  name: "PUSH3",
  opcode: 0x62,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH3.consumeGas;
  },
};

export const PUSH4: Opcode = {
  name: "PUSH4",
  opcode: 0x63,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH4.consumeGas;
  },
};

export const PUSH5: Opcode = {
  name: "PUSH5",
  opcode: 0x64,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH5.consumeGas;
  },
};

export const PUSH6: Opcode = {
  name: "PUSH6",
  opcode: 0x65,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH6.consumeGas;
  },
};

export const PUSH7: Opcode = {
  name: "PUSH7",
  opcode: 0x66,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH7.consumeGas;
  },
};

export const PUSH8: Opcode = {
  name: "PUSH8",
  opcode: 0x67,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH8.consumeGas;
  },
};

export const PUSH9: Opcode = {
  name: "PUSH9",
  opcode: 0x68,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH9.consumeGas;
  },
};

export const PUSH10: Opcode = {
  name: "PUSH10",
  opcode: 0x69,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH10.consumeGas;
  },
};

export const PUSH11: Opcode = {
  name: "PUSH11",
  opcode: 0x6a,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH11.consumeGas;
  },
};

export const PUSH12: Opcode = {
  name: "PUSH12",
  opcode: 0x6b,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH12.consumeGas;
  },
};

export const PUSH13: Opcode = {
  name: "PUSH13",
  opcode: 0x6c,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH13.consumeGas;
  },
};

export const PUSH14: Opcode = {
  name: "PUSH14",
  opcode: 0x6d,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH14.consumeGas;
  },
};

export const PUSH15: Opcode = {
  name: "PUSH15",
  opcode: 0x6e,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH15.consumeGas;
  },
};

export const PUSH16: Opcode = {
  name: "PUSH16",
  opcode: 0x6f,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH16.consumeGas;
  },
};

export const PUSH17: Opcode = {
  name: "PUSH17",
  opcode: 0x70,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH17.consumeGas;
  },
};

export const PUSH18: Opcode = {
  name: "PUSH18",
  opcode: 0x71,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH18.consumeGas;
  },
};

export const PUSH19: Opcode = {
  name: "PUSH19",
  opcode: 0x72,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH19.consumeGas;
  },
};

export const PUSH20: Opcode = {
  name: "PUSH20",
  opcode: 0x73,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH20.consumeGas;
  },
};

export const PUSH21: Opcode = {
  name: "PUSH21",
  opcode: 0x74,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH21.consumeGas;
  },
};

export const PUSH22: Opcode = {
  name: "PUSH22",
  opcode: 0x75,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH22.consumeGas;
  },
};

export const PUSH23: Opcode = {
  name: "PUSH23",
  opcode: 0x76,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH23.consumeGas;
  },
};

export const PUSH24: Opcode = {
  name: "PUSH24",
  opcode: 0x77,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH24.consumeGas;
  },
};

export const PUSH25: Opcode = {
  name: "PUSH25",
  opcode: 0x78,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH25.consumeGas;
  },
};

export const PUSH26: Opcode = {
  name: "PUSH26",
  opcode: 0x79,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH26.consumeGas;
  },
};

export const PUSH27: Opcode = {
  name: "PUSH27",
  opcode: 0x7a,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH27.consumeGas;
  },
};

export const PUSH28: Opcode = {
  name: "PUSH28",
  opcode: 0x7b,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH28.consumeGas;
  },
};

export const PUSH29: Opcode = {
  name: "PUSH29",
  opcode: 0x7c,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH29.consumeGas;
  },
};

export const PUSH30: Opcode = {
  name: "PUSH30",
  opcode: 0x7d,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH30.consumeGas;
  },
};

export const PUSH31: Opcode = {
  name: "PUSH31",
  opcode: 0x7e,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH31.consumeGas;
  },
};

export const PUSH32: Opcode = {
  name: "PUSH32",
  opcode: 0x7f,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= PUSH32.consumeGas;
  },
};
