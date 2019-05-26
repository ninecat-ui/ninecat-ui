describe('Array', function () {
  describe('includes()', function () {
    it('should return false when the value does not include', function () {
      expect([1, 2, 3].includes(4)).toEqual(false)
    })
  })
})
