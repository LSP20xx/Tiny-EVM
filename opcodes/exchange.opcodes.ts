import { EvmState } from "../interfaces/EvmState";
import { Opcode } from "../interfaces/Opcode";

export const SWAP1: Opcode = {
  name: "SWAP1",
  opcode: 0x90,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    state.stack.push(a);
    state.stack.push(b);
    state.pc++;
    state.gas -= SWAP1.consumeGas;
  },
};

export const SWAP2: Opcode = {
  name: "SWAP2",
  opcode: 0x91,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    state.stack.push(a);
    state.stack.push(c);
    state.stack.push(b);
    state.pc++;
    state.gas -= SWAP2.consumeGas;
  },
};

export const SWAP3: Opcode = {
  name: "SWAP3",
  opcode: 0x92,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    state.stack.push(a);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.pc++;
    state.gas -= SWAP3.consumeGas;
  },
};

export const SWAP4: Opcode = {
  name: "SWAP4",
  opcode: 0x93,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    state.stack.push(a);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.pc++;
    state.gas -= SWAP4.consumeGas;
  },
};

export const SWAP5: Opcode = {
  name: "SWAP5",
  opcode: 0x94,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop()!;
    const f = state.stack.pop()!;
    state.stack.push(a);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.pc++;
    state.gas -= SWAP5.consumeGas;
  },
};

export const SWAP6: Opcode = {
  name: "SWAP6",
  opcode: 0x95,
  consumeGas: 3,
  execute: (state: EvmState) => {
    const a = state.stack.pop()!;
    const b = state.stack.pop()!;
    const c = state.stack.pop()!;
    const d = state.stack.pop()!;
    const e = state.stack.pop();
    const f = state.stack.pop()!;
    const g = state.stack.pop()!;
    state.stack.push(a);
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.pc++;
    state.gas -= SWAP6.consumeGas;
  },
};

export const SWAP7: Opcode = {
  name: "SWAP7",
  opcode: 0x96,
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
    state.stack.push(a);
    state.stack.push(h);
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.pc++;
    state.gas -= SWAP7.consumeGas;
  },
};

export const SWAP8: Opcode = {
  name: "SWAP8",
  opcode: 0x97,
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
    state.stack.push(a);
    state.stack.push(i);
    state.stack.push(h);
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.pc++;
    state.gas -= SWAP8.consumeGas;
  },
};

export const SWAP9: Opcode = {
  name: "SWAP9",
  opcode: 0x98,
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
    state.stack.push(a);
    state.stack.push(j);
    state.stack.push(i);
    state.stack.push(h);
    state.stack.push(g);
    state.stack.push(f);
    state.stack.push(e);
    state.stack.push(d);
    state.stack.push(c);
    state.stack.push(b);
    state.pc++;
    state.gas -= SWAP9.consumeGas;
  },
};

export const SWAP10: Opcode = {
  name: "SWAP10",
  opcode: 0x99,
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
    state.stack.push(a);
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
    state.pc++;
    state.gas -= SWAP10.consumeGas;
  },
};

export const SWAP11: Opcode = {
  name: "SWAP11",
  opcode: 0x9a,
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
    state.stack.push(a);
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
    state.pc++;
    state.gas -= SWAP11.consumeGas;
  },
};

export const SWAP12: Opcode = {
  name: "SWAP12",
  opcode: 0x9b,
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
    state.stack.push(a);
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
    state.pc++;
    state.gas -= SWAP12.consumeGas;
  },
};

export const SWAP13: Opcode = {
  name: "SWAP13",
  opcode: 0x9c,
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
    state.stack.push(a);
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
    state.pc++;
    state.gas -= SWAP13.consumeGas;
  },
};

export const SWAP14: Opcode = {
  name: "SWAP14",
  opcode: 0x9d,
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
    state.stack.push(a);
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
    state.pc++;
    state.gas -= SWAP14.consumeGas;
  },
};

export const SWAP15: Opcode = {
  name: "SWAP15",
  opcode: 0x9e,
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
    state.stack.push(a);
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
    state.pc++;
    state.gas -= SWAP15.consumeGas;
  },
};

export const SWAP16: Opcode = {
  name: "SWAP16",
  opcode: 0x9f,
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
    const q = state.stack.pop()!;
    state.stack.push(a);
    state.stack.push(q);
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
    state.pc++;
    state.gas -= SWAP16.consumeGas;
  },
};
