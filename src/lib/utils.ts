export const normalizeSearchQuery = (term: string): string => {
  return term.trim().toUpperCase();
};

export const createCodeFilter = (searchTerm: string) => {
  const normalizedTerm = normalizeSearchQuery(searchTerm);
  return normalizedTerm ? { code: { in: normalizedTerm } } : undefined;
};
