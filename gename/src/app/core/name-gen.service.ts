import { Injectable } from '@angular/core';

export class NameGenParams {
  syllables: Range
  syllableChars: Range
  chars: Range
}


export const substitutions = [
  'ch k ck q',
  's z',
  'f ph'
]

export const endings = 'ity ia on or is tron'


export const vowels = 'aeiouy'

@Injectable()
export class NameGenService {

  constructor() { }

}
