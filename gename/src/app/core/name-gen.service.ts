import { Injectable } from '@angular/core';
import {CheckDomainService} from "./check-domain.service";

declare var require: any

// const permutate = require('permutate');
/** https://npm.runkit.com/combinations-generator */
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
  'ity ify ia on ion or is tron ing ix ium um',
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

export const inputWords = 'Dev App Wunder Ware Topic Code Soft Pro Uni Flex Sys Inno Tron ' +
  'Solution Meta Solid Gear Tech IT Create Machine Mach Architect Archi Arch Focus ' +
  'Craft Good Trust '

export const inputWordsFavorites = 'App Topic Topi Code Soft Pro Flex Sys Inno ' +
  'Solution Meta Tech IT Focus Crea Create Craft Tek Gear Dev'

export const inputWordsShort = 'App Topic Topi Code Soft Pro Flex Sys Inno'

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
  chars: range(3, 9 /* 8 for codeinno; 9 for fancy endings */),
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

  constructor(
    private checkDomainService: CheckDomainService
  ) {
    console.log('NameGenService ctor')
    // var inputWordsArray = ["a", "b", "c"]

    const inputWordsArray = this.splitToArray(inputWordsFavorites)
    // TODO replace inputWordsArray with inputWordsWithSubsets approach

    // var iterator = combinationsGenerator(inputWordsArray, 2);
    /* Actually those are variations (order matters!), not combinations!
       http://users.telenet.be/vdmoortel/dirk/Maths/PermVarComb.html */

    // console.log('NameGenService', iterator)

    // this.permutationCombination(inputWordsArray)
    this.permutationCombinationWithSuffixes(inputWordsArray)


    // while (true) {
    //   let iteroid = iterator.next()
    //   if ( iteroid.done ) {
    //     console.log('iteroid.value when done', iteroid.value);
    //
    //     break;
    //   }
    //
    //   const name = iteroid.value.join('');
    //   // console.log(name);
    //   // this.checkDomainService.checkDomains(name);
    // }
  }

  private splitToArray(string) {
    return string.split(' ')
      .map(word => word.trim())
      .filter(it => it.length > 0)
  }

  private permutationCombination(inputWordsArray) {
    // const cmb = Combinatorics.permutation(['a', 'b', 'c'], 2);
    // const cmb = Combinatorics.permutationCombination(inputWordsArray, 2);
    const cmb = Combinatorics.permutation(inputWordsArray, 2);
    let outputArray = cmb.toArray().map(it => it.join('')).filter(it => it.length <= defaultNameGenParams.chars.maxInclusive)
    console.log('Will check if IsAvailable Available : permutationCombination outputArray.length', outputArray.length);
    for ( let name of outputArray ) {
      this.checkDomainService.checkDomains(name)
    }
    // console.log('permutationCombination', outputArray);
  }

  private permutationCombinationWithSuffixes(inputWordsArray: string[]) {
    let totalToCheck = 0
    const numWordsArray = [1, 2]
    for ( let suffix of this.splitToArray(endings[0])) {
      for ( let numW of numWordsArray ) {
        const cmb = Combinatorics.permutation(inputWordsArray, numW);
        let outputArray = cmb.toArray().map(it => it.join('') + suffix).filter(it => it.length <= defaultNameGenParams.chars.maxInclusive)
        totalToCheck += outputArray.length
        console.log('Will check if IsAvailable Available : permutationCombination outputArray.length', outputArray.length);
        for ( let name of outputArray ) {
          this.checkDomainService.checkDomains(name)
        }
      }
    }

    console.log('Will check if IsAvailable Available : totalToCheck', totalToCheck);

  }
}
