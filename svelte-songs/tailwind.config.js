/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,svelte,ts}",
  "node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
];
export const theme = {
  extend: {},
};
export const plugins = [
  require('flowbite/plugin')
];
