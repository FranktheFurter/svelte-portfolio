// src/routes/+layout.js
import projects from "$lib/data/projects.json";
import timeline from "$lib/data/timeline.json";

/** @type {import('./$types').LayoutLoad} */
export function load() {
  return { projects, timeline };
}
