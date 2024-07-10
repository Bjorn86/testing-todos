export const getTestIdAttribute = (prefix: string, testId?: string): object | null => {
  return testId ? { 'data-testid': `${prefix}-${testId}` } : null;
};
