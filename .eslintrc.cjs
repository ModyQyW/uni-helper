module.exports = {
  extends: [require.resolve('@modyqyw/fabric/eslint/vanilla')],
  overrides: [
    {
      files: ['*.ts', '**/*.ts'],
      extends: [require.resolve('@modyqyw/fabric/eslint/typescript')],
    },
  ],
};
