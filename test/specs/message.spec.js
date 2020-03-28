import nMessage from '../../packages/nMessage';

describe('nMessage', () => {
  it('create', () => {
    nMessage({ message: 'message' });
    expect(document.querySelector('.base-message')).toBeTruthy();
  });
});
