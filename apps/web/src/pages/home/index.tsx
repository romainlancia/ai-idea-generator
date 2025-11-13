'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import HeroPreview from '@/components/HeroPreview';
import IdeaForm from '@/components/IdeaForm';
import ProjectCard from '@/components/ProjectCard';
import QuotaBanner from '@/components/QuotaBanner';
import { createGeneration, fetchMyProjects } from '@/lib/api';

import { GenerationInput, Project } from '../../../../../packages/shared/src/types';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [latest, setLatest] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [quotaLeft, setQuotaLeft] = useState<number | null>(null);

  useEffect(() => {
    fetchMyProjects()
      .then(setProjects)
      .catch(() => {});
  }, []);

  const onGenerate = async (input: GenerationInput) => {
    try {
      setLoading(true);
      const p = await createGeneration(input);
      setLatest(p);
      setProjects((prev) => [p, ...prev]);
      if (p.quotaLeft !== undefined) setQuotaLeft(p.quotaLeft);
    } catch (e) {
      console.error('Erreur de génération : ', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-8">
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <h1 className="text-4xl font-extrabold">Génère ton landing en un clic</h1>
        <p className="mt-2 text-neutral-400">
          Tape une idée, reçois un hero section, un slogan et du contenu + images.
        </p>
        <div className="mt-6">
          <IdeaForm onSubmit={onGenerate} loading={loading} />
        </div>
        {quotaLeft !== null && <QuotaBanner quotaLeft={quotaLeft} />}
      </motion.section>
      {latest && (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <HeroPreview project={latest} />
        </motion.section>
      )}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Mes projets</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
