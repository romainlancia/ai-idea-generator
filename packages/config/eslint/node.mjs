// Profil Node/Nest (api)
import base from './base.mjs';

export default [
  ...base,
  {
    linterOptions: { reportUnusedDisableDirectives: true },
  },
];
