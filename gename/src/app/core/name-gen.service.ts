import { Injectable } from '@angular/core';

declare var require: any

// const permutate = require('permutate');
var combinationsGenerator = require("combinations-generator")



export class Range {
  constructor(
    public min: number,
    public maxInclusive: number,
  ) {}
}

export const substitutions = [
  'ch k ck q kk',
  's z',
  'f ph',
  'o u oo',
]

export const prefixes = 'pro flex'

/** https://en.wikipedia.org/wiki/Suffix */
export const endings = 'ity ia on or is tron ing ix' +
  'heim stein berg burg' /* German endings */


export const vowels = 'aeiouy'

export class NameGenParams {
  syllables: Range
  syllableChars: Range
  chars: Range
  consonantsInRow: Range
  vowelsInRow: Range
  charsOverlapBetweenWords: Range
  charRepeat: Range
  useInputWords: Range
  inputWordRepeat: Range
  skipFrontChars: Range
}

export const inputWords = 'Code Soft Pro Uni Flex Sys Inno Tron' +
  'Solution Meta Solid Gear Tech IT Create Machine Architect Focus' +
  'Craft'

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
  charRepeat: range(1, 1),
  useInputWords: range(1, 3),
  inputWordRepeat: range(1, 3) /* fun to check */,
  skipFrontChars: range(0, 3) /* E.g. (t)Elephone*/
}


@Injectable()
export class NameGenService {

  constructor() {
    console.log('NameGenService ctor')
    // var array = ["a", "b", "c"]

    const inputWordsArray = inputWords.split(' ').map(word => word.trim())

    var iterator = combinationsGenerator(inputWordsArray, 2);
    console.log('NameGenService', iterator)


    for (var item of iterator) {
      console.log(item);
    }

    while (true) {
      let iteroid = iterator.next()
      if ( iteroid.done ) {
        break;
      }
      console.log(iteroid.value.join('')); // 'yo'
    }
  }

  /** https://www.numberempire.com/combinatorialcalculator.php */
  permutate() {

  }

}
