/* global describe, it */
'use strict'

const expect = require('chai').expect
const areSubstringsUnderMinimumOccurrences = require('../index')

describe('#areSubstringsUnderMinimumOccurrences()', () => {
  describe('empty string', () => {
    it('should return false with an empty check', () => {
      const str = ''
      const checks = {}
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with a check with minimum === 0', () => {
      const str = ''
      const checks = { 'a': 0 }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true with a check with minimum > 0', () => {
      const str = ''
      const checks = { 'a': 1 }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('single character substring', () => {
    it('should return true when under minimum', () => {
      const str = 'aaaabbbb'
      const checks = { 'a': 8 }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when equal to minimum', () => {
      const str = 'aaaabbbb'
      const checks = { 'a': 4 }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false when over minimum', () => {
      const str = 'aaaabbbb'
      const checks = { 'a': 1 }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('multi character substring', () => {
    it('should return true when under minimum', () => {
      const str = 'aaaabbbbaaaabbbb'
      const checks = { 'aaaa': 8 }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when equal to minimum', () => {
      const str = 'aaaabbbbaaaabbbb'
      const checks = { 'aaaa': 2 }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false when over minimum', () => {
      const str = 'aaaabbbbaaaabbbb'
      const checks = { 'aaaa': 1 }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('single character substrings', () => {
    it('should return true with many under minimum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        'a': 8,
        'b': 8,
        'c': 8
      }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true with some under minimum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        'a': 1,
        'b': 8,
        'c': 1
      }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false with many equal to minimum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        'a': 4,
        'b': 4,
        'c': 4,
        'd': 4
      }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with many over minimum', () => {
      const str = 'aaaabbbbccccdddd'
      const checks = {
        'a': 1,
        'b': 1,
        'c': 1,
        'd': 1
      }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('multi character substrings', () => {
    it('should return true with many under minimum', () => {
      const str = 'aaaabbbbccccddddaaaabbbbccccdddd'
      const checks = {
        'aaaa': 8,
        'bbbb': 8,
        'cccc': 8
      }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true with some under minimum', () => {
      const str = 'aaaabbbbccccddddaaaabbbbccccdddd'
      const checks = {
        'aaaa': 1,
        'bbbb': 8,
        'cccc': 1
      }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false with many equal to minimum', () => {
      const str = 'aaaabbbbccccddddaaaabbbbccccdddd'
      const checks = {
        'aaaa': 2,
        'bbbb': 2,
        'cccc': 2,
        'dddd': 2
      }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false with many over minimum', () => {
      const str = 'aaaabbbbccccddddaaaabbbbccccdddd'
      const checks = {
        'aaaa': 1,
        'bbbb': 1,
        'cccc': 1,
        'dddd': 1
      }
      const result = areSubstringsUnderMinimumOccurrences(str, checks)
      const expected = false
      expect(result).to.equal(expected)
    })
  })
})
