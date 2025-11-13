'use client';

import { Project } from '../../../../packages/shared/src/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card">
      <div className="text-lg font-semibold">{project.output.heroTitle}</div>
      <div className="mt-1 text-sm text-neutral-400">{project.input.idea}</div>
      <div className="mt-2 text-xs text-neutral-500">
        {new Date(project.createdAt).toLocaleString()}
      </div>
    </div>
  );
}
