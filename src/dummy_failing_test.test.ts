describe('Dummy Failing Test', () => {
  it('Deliberately fail test to block PR', () => {
    expect(1).toEqual(0);
  });
});
