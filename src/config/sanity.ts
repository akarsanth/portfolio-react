// sanity.js
import { createClient } from "@sanity/client";

const config = {
  dataset: import.meta.env.VITE_PUBLIC_SANITY_DATASET,
  projectId: import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  apiVersion: "2024-02-24",
  token: import.meta.env.VITE_SANITY_API_TOKEN, // this token is exposed (but it is only read only)
  ignoreBrowserTokenWarning: true,
};

console.log(config);

export const client = createClient(config);
