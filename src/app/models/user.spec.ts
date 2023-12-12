import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(1,'mail.example@example.com','alias','password','url.img')).toBeTruthy();
  });
});
