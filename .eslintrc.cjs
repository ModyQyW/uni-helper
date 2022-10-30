module.exports = {
  root: true,
  extends: [require.resolve('@modyqyw/fabric/eslint/vanilla')],
  overrides: [
    {
      files: ['*.ts', '**/*.ts', '*.d.ts', '**/*.d.ts'],
      extends: [require.resolve('@modyqyw/fabric/eslint/typescript')],
    },
  ],
};
