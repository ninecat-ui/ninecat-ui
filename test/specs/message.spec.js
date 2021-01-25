import nMessage from '../../packages/n-message';

describe('nMessage', () => {
  it('create', () => {
    nMessage({ message: 'message' });
    expect(document.querySelector('.base-message')).toBeTruthy();
  });
});
