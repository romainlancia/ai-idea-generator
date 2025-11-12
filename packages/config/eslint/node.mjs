import base from './base.mjs';

export default [
  ...base,
  {
    linterOptions: { reportUnusedDisableDirectives: false },
  },
];
