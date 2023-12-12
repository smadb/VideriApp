import { Achievements } from './achievements.model';

describe('Achievements', () => {
  it('should create an instance', () => {
    expect(new Achievements(1,'name','icon',100)).toBeTruthy();
  });
});
