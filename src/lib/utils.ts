import type { Language } from '../models/types';
import { NO_INFO } from './constants';

export const normalizeSearchQuery = (term: string): string => {
  return term.trim().toUpperCase();
};

export const createCountryFilter = (searchTerm: string) => {
  const normalizedTerm = normalizeSearchQuery(searchTerm);
  return normalizedTerm ? { code: { in: normalizedTerm } } : {};
};

export const formatValue = (value: string | number): string | number => {
  return value ?? NO_INFO;
};

export const formatPhoneCode = (code: string): string => {
  return code ? `+${code}` : NO_INFO;
};

export const formatLanguages = (languages: Language[]) => {
  if (!languages || languages.length === 0) {
    return NO_INFO;
  }
  return languages.map((language) => language.native).join(', ');
};
