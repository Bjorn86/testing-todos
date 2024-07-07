export default {
  '*.{js,jsx,ts,tsx}': () => ['npm run typecheck', 'npm run lint:fix'],
  '*.{js,jsx,ts,tsx,scss,md,json,html}': () => 'npm run format',
};
