module.exports = {
  plugins: ['unicorn'],
  extends: [
    // https://nextjs.org/docs/pages/building-your-application/configuring/eslint#additional-configurations
    './config/eslint/javascript',
    './config/eslint/typescript',
    './config/eslint/unicorn',
    'prettier',
    'next/core-web-vitals',
  ],
  reportUnusedDisableDirectives: true,
  // Files starting with . are ignored by default.
  // This was causing a warning for lint-staged
  // and since we have --max-warnings 0, the check was failing.
  // So, we removed these files by using "!" from ignoredPatterns.
  ignorePatterns: ['!.*.{js,ts}'],
};
