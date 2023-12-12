import { Category } from '../../models/category.model';

describe('Category', () => {
  it('should create an instance', () => {
    expect(new Category(1,'name')).toBeTruthy();
  });
});
