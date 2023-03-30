import { EvmState } from "../interfaces/EvmState";
import { Opcode } from "../interfaces/Opcode";

export const DUP1: Opcode = {
  name: "DUP1",
  opcode: 0x80,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const result = a;
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP1.consumeGas;
  },
};

export const DUP2: Opcode = {
  name: "DUP2",
  opcode: 0x81,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const result = a;
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP2.consumeGas;
  },
};

export const DUP3: Opcode = {
  name: "DUP3",
  opcode: 0x82,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const result = a;
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP3.consumeGas;
  },
};

export const DUP4: Opcode = {
  name: "DUP4",
  opcode: 0x83,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const result = a;
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP4.consumeGas;
  },
};

export const DUP5: Opcode = {
  name: "DUP5",
  opcode: 0x84,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const result = a;
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP5.consumeGas;
  },
};

export const DUP6: Opcode = {
  name: "DUP6",
  opcode: 0x85,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    const result = a;
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP6.consumeGas;
  },
};

export const DUP7: Opcode = {
  name: "DUP7",
  opcode: 0x86,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    const g = state.stack.pop()!;
    const result = a;
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP7.consumeGas;
  },
};

export const DUP8: Opcode = {
  name: "DUP8",
  opcode: 0x87,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    const g = state.stack.pop()!;
    const h = state.stack.pop()!;
    const result = a;
    state.stack.push(h);
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP8.consumeGas;
  },
};

export const DUP9: Opcode = {
  name: "DUP9",
  opcode: 0x88,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    const g = state.stack.pop()!;
    const h = state.stack.pop()!;
    const i = state.stack.pop()!;
    const result = a;
    state.stack.push(i);
    state.stack.push(h);
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP9.consumeGas;
  },
};

export const DUP10: Opcode = {
  name: "DUP10",
  opcode: 0x89,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    const g = state.stack.pop()!;
    const h = state.stack.pop()!;
    const i = state.stack.pop()!;
    const j = state.stack.pop()!;
    const result = a;
    state.stack.push(j);
    state.stack.push(i);
    state.stack.push(h);
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP10.consumeGas;
  },
};

export const DUP11: Opcode = {
  name: "DUP11",
  opcode: 0x8a,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    const g = state.stack.pop()!;
    const h = state.stack.pop()!;
    const i = state.stack.pop()!;
    const j = state.stack.pop()!;
    const k = state.stack.pop()!;
    const result = a;
    state.stack.push(k);
    state.stack.push(j);
    state.stack.push(i);
    state.stack.push(h);
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP11.consumeGas;
  },
};

export const DUP12: Opcode = {
  name: "DUP12",
  opcode: 0x8b,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    const g = state.stack.pop()!;
    const h = state.stack.pop()!;
    const i = state.stack.pop()!;
    const j = state.stack.pop()!;
    const k = state.stack.pop()!;
    const l = state.stack.pop()!;
    const result = a;
    state.stack.push(l);
    state.stack.push(k);
    state.stack.push(j);
    state.stack.push(i);
    state.stack.push(h);
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP12.consumeGas;
  },
};

export const DUP13: Opcode = {
  name: "DUP13",
  opcode: 0x8c,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    const g = state.stack.pop()!;
    const h = state.stack.pop()!;
    const i = state.stack.pop()!;
    const j = state.stack.pop()!;
    const k = state.stack.pop()!;
    const l = state.stack.pop()!;
    const m = state.stack.pop()!;
    const result = a;
    state.stack.push(m);
    state.stack.push(l);
    state.stack.push(k);
    state.stack.push(j);
    state.stack.push(i);
    state.stack.push(h);
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP13.consumeGas;
  },
};

export const DUP14: Opcode = {
  name: "DUP14",
  opcode: 0x8d,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    const g = state.stack.pop()!;
    const h = state.stack.pop()!;
    const i = state.stack.pop()!;
    const j = state.stack.pop()!;
    const k = state.stack.pop()!;
    const l = state.stack.pop()!;
    const m = state.stack.pop()!;
    const n = state.stack.pop()!;
    const result = a;
    state.stack.push(n);
    state.stack.push(m);
    state.stack.push(l);
    state.stack.push(k);
    state.stack.push(j);
    state.stack.push(i);
    state.stack.push(h);
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP14.consumeGas;
  },
};

export const DUP15: Opcode = {
  name: "DUP15",
  opcode: 0x8e,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    const g = state.stack.pop()!;
    const h = state.stack.pop()!;
    const i = state.stack.pop()!;
    const j = state.stack.pop()!;
    const k = state.stack.pop()!;
    const l = state.stack.pop()!;
    const m = state.stack.pop()!;
    const n = state.stack.pop()!;
    const o = state.stack.pop()!;
    const result = a;
    state.stack.push(o);
    state.stack.push(n);
    state.stack.push(m);
    state.stack.push(l);
    state.stack.push(k);
    state.stack.push(j);
    state.stack.push(i);
    state.stack.push(h);
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP15.consumeGas;
  },
};

export const DUP16: Opcode = {
  name: "DUP16",
  opcode: 0x8f,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    const g = state.stack.pop()!;
    const h = state.stack.pop()!;
    const i = state.stack.pop()!;
    const j = state.stack.pop()!;
    const k = state.stack.pop()!;
    const l = state.stack.pop()!;
    const m = state.stack.pop()!;
    const n = state.stack.pop()!;
    const o = state.stack.pop()!;
    const p = state.stack.pop()!;
    const result = a;
    state.stack.push(p);
    state.stack.push(o);
    state.stack.push(n);
    state.stack.push(m);
    state.stack.push(l);
    state.stack.push(k);
    state.stack.push(j);
    state.stack.push(i);
    state.stack.push(h);
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.stack.push(result);
    state.stack.push(result);
    state.pc++;
    state.gas -= DUP16.consumeGas;
  },
};
