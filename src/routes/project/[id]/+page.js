// src/routes/project/[id]/+page.js
import projects from "$lib/data/projects.json";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    throw error(404, "Project not found");
  }

  return { project };
}
