import { Injectable } from '@angular/core';

export class Range {
  constructor(
    public min: number,
    public maxInclusive: number,
  ) {}
}

export const substitutions = [
  'ch k ck q',
  's z',
  'f ph',
  'o u oo',
]

export const prefixes = 'pro flex'

/** https://en.wikipedia.org/wiki/Suffix */
export const endings = 'ity ia on or is tron ing'


export const vowels = 'aeiouy'

export class NameGenParams {
  syllables: Range
  syllableChars: Range
  chars: Range
  consonantsInRow: Range
  vowelsInRow: Range
  charsOverlapBetweenWords: Range
}

export function range(number: number, number2: number) {
  return new Range(number, number2)
}

export const defaultNameGenParams: NameGenParams = {
  syllables: range(1, 3),
  syllableChars: range(1, 4),
  chars: range(3, 7),
  consonantsInRow: range(1, 2),
  vowelsInRow: range(1, 3),
  charsOverlapBetweenWords: range(1, 4),
}


@Injectable()
export class NameGenService {

  constructor() { }

}
