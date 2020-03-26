import removeDuplications, { normalize } from './removeDuplications';

describe('normalize', () => {
  it('removes spaces', () => {
    expect(normalize('a b')).toBe('ab');
  });
  it('transforms to lowercase', () => {
    expect(normalize('A B')).toBe('ab');
  });

  it('remove national characters', () => {
    expect(normalize('śąóźć')).toBe('saozc');
  });

  it('remove national characters', () => {
    expect(normalize('ĘDWARD ĄDŹūI')).toBe('edwardadzui');
  });
});

describe('removeDuplications', () => {
  it('removes duplicates #1', () => {
    const input = [
      'JAŚ WÓR',
      'jaś wór',
      'Jaś Wór ',
    ];
    const expected = [input[0]];

    expect(removeDuplications(input)).toEqual(expected);
  });
});
