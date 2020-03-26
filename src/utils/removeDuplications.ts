export function normalize(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s/g, '')
    .toLowerCase();
}
export default (input: string[]) => {
  const MapOfCharacters = input.reduce<Record<string, string>>((accumulator, current) => {
    const normalizedCharacter = normalize(current);
    if (accumulator.hasOwnProperty(normalizedCharacter)) return accumulator;
    accumulator[normalize(current)] = current;
    return accumulator;
  }, {});

  return Object.values(MapOfCharacters);
};
