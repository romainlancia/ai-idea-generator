'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Project } from '../../../../packages/shared/src/types';

export default function HeroPreview({ project }: { project: Project }) {
  const { heroTitle, heroSubtitle, slogan, imageUrls, sections } = project.output;
  return (
    <div className="card">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-3xl font-bold">{heroTitle}</h3>
          <p className="mt-2 text-neutral-300">{heroSubtitle}</p>
          <p className="mt-4 font-semibold text-indigo-400">{slogan}</p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-64 w-full"
        >
          {imageUrls?.[0] && (
            <Image src={imageUrls[0]} alt="Generated" fill className="object- cover rounded-2xl" />
          )}
        </motion.div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {sections.map((s, i) => (
          <div key={i} className="border- neutral-800 rounded-xl border bg-neutral-900 p-4">
            <div className="font-semibold">{s.title}</div>
            <div className="mt-1 text-sm text-neutral-400">{s.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
