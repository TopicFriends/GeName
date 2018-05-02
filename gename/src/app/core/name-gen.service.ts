import { Injectable } from '@angular/core';

declare var require: any

// const permutate = require('permutate');
var combinationsGenerator = require("combinations-generator")


/** From https://www.npmjs.com/package/js-combinatorics */
var Combinatorics = require('js-combinatorics');

// TODO: try also: https://www.npmjs.com/package/generatorics



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

/**
 * https://en.wikipedia.org/wiki/Suffix */
export const endings = [
  'ity ia on or is tron ing ix',
  'heim stein berg burg', /* German endings */
  'zone',
]


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

export const inputWords = 'App Wunder Topic Code Soft Pro Uni Flex Sys Inno Tron ' +
  'Solution Meta Solid Gear Tech IT Create Machine Architect Focus ' +
  'Craft Good Trust'

export const inputWordsShort = 'App Wunder Topic Code Soft Pro Uni Flex Sys Inno Tron'

/* let's use this slightly more manually fine-tuned approach! */
export const inputWordsWithSubsets = [
  'code cod',
  'dev deve devel',
  'pro prog',
]

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
    // var inputWordsArray = ["a", "b", "c"]

    const inputWordsArray = inputWordsShort.split(' ').map(word => word.trim())
    // TODO replace inputWordsArray with inputWordsWithSubsets approach

    var iterator = combinationsGenerator(inputWordsArray, 2);
    /* Actually those are variations (order matters!), not combinations!
       http://users.telenet.be/vdmoortel/dirk/Maths/PermVarComb.html */

    console.log('NameGenService', iterator)

    this.permutationCombination(inputWordsArray)


    for (var item of iterator) {
      console.log(item);
    }

    while (true) {
      let iteroid = iterator.next()
      if ( iteroid.done ) {
        console.log('iteroid.value when done', iteroid.value);

        break;
      }
      console.log(iteroid.value.join(''));
    }
  }

  private permutationCombination(inputWordsArray) {
    // const cmb = Combinatorics.permutation(['a', 'b', 'c'], 2);
    // const cmb = Combinatorics.permutationCombination(inputWordsArray, 2);
    const cmb = Combinatorics.permutation(inputWordsArray, 2);
    console.log('permutationCombination', cmb.toArray().map(it => it.join('')));
  }
}
