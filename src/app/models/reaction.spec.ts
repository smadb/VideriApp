import { Reaction } from './reaction.model';

describe('Reaction', () => {
  it('should create an instance', () => {
    expect(new Reaction(1,1,10)).toBeTruthy();
  });
});
