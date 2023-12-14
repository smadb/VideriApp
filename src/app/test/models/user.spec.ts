import { Achievements } from '../../models/achievements.model';
import { User } from '../../models/userApp.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(1,'mail.example@example.com','alias','password','url.img',[new Achievements(1,'name 1','icon.url',100),new Achievements(2,'name 2','icon.url',0)])).toBeTruthy();
  });
});
