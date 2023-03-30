import { EvmState } from "../interfaces/EvmState";
import { Opcode } from "../interfaces/Opcode";

export const BLOCKHASH: Opcode = {
  name: "BLOCKHASH",
  opcode: 0x40,
  consumeGas: 20,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.pc++;
    state.gas -= BLOCKHASH.consumeGas;
  },
};

export const COINBASE: Opcode = {
  name: "COINBASE",
  opcode: 0x41,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.coinbase;
    state.stack.push(result);
    state.pc++;
    state.gas -= COINBASE.consumeGas;
  },
};

export const TIMESTAMP: Opcode = {
  name: "TIMESTAMP",
  opcode: 0x42,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.timestamp;
    state.stack.push(result);
    state.pc++;
    state.gas -= TIMESTAMP.consumeGas;
  },
};

export const NUMBER: Opcode = {
  name: "NUMBER",
  opcode: 0x43,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.number;
    state.stack.push(result);
    state.pc++;
    state.gas -= NUMBER.consumeGas;
  },
};

export const DIFFICULTY: Opcode = {
  name: "DIFFICULTY",
  opcode: 0x44,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.difficulty;
    state.stack.push(result);
    state.pc++;
    state.gas -= DIFFICULTY.consumeGas;
  },
};

export const GASLIMIT: Opcode = {
  name: "GASLIMIT",
  opcode: 0x45,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.gaslimit;
    state.stack.push(result);
    state.pc++;
    state.gas -= GASLIMIT.consumeGas;
  },
};

export const CHAINID: Opcode = {
  name: "CHAINID",
  opcode: 0x46,
  consumeGas: 2,
  execute: (state: EvmState) => {
    const result = state.chainid;
    state.stack.push(result);
    state.pc++;
    state.gas -= CHAINID.consumeGas;
  },
};

export const SELFBALANCE: Opcode = {
  name: "SELFBALANCE",
  opcode: 0x47,
  consumeGas: 5,
  execute: (state: EvmState) => {
    const result = state.selfbalance;
    state.stack.push(result);
    state.pc++;
    state.gas -= SELFBALANCE.consumeGas;
  },
};
