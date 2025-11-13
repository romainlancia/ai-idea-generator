import axios from 'axios';

import { GenerationInput, Project } from '../../../../packages/shared/src/types';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:4000';

export async function createGeneration(input: GenerationInput): Promise<Project> {
  const res = await axios.post(`${API_BASE}/v1/generate`, input, {
    withCredentials: true,
  });
  return res.data as Project;
}

export async function fetchMyProjects(): Promise<Project[]> {
  const res = await axios.get(`${API_BASE}/v1/projects`, {
    withCredentials: true,
  });
  return res.data as Project[];
}
