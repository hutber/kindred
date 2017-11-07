
export const formatDate = (format, date) => `${format || ''} ${
  typeof date === 'string' ? date : date.toJSON()
}`;

export const formatTranslation = (key, values) => `Translated(${key}${values ? ` ${JSON.stringify(values)}` : ''})`;
