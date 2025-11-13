'use client';

import { useState } from 'react';

import { GenerationInput } from '../../../../packages/shared/src/types';

export default function IdeaForm({
  onSubmit,
  loading,
}: {
  onSubmit: (input: GenerationInput) => void;
  loading?: boolean;
}) {
  const [idea, setIdea] = useState('Application pour coach sportif');
  const [tone, setTone] = useState<GenerationInput['tone']>('professional');
  const [language, setLanguage] = useState('fr');
  return (
    <form
      className="grid gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          idea,
          tone,
          language,
        });
      }}
    >
      <input
        className="input"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Ton idée"
      />
      <div className="flex gap-2">
        <select
          className="input"
          value={tone ?? ''}
          onChange={(e) => setTone(e.target.value as GenerationInput['tone'])}
        >
          <option value="professional">Professionnel</option>
          <option value="playful">Ludique</option>
          <option value="bold">Audacieux</option>
        </select>
        <select className="input" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>
      <button disabled={loading} className="btn-primary">
        {loading ? 'Génération…' : 'Générer'}
      </button>
    </form>
  );
}
