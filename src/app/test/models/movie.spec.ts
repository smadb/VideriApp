import { Category } from '../../models/category.model';
import { Movie } from '../../models/movie.model';
import { Reaction } from '../../models/reaction.model';

describe('Movie', () => {
  it('should create an instance', () => {
    expect(new Movie(1,'name','url',new Date(),'description','poster',['actor 1','actor 2'],'director',[new Category(1,'name 1'),new Category(2,'name 2')],[new Reaction(1,1,10)] , true)).toBeTruthy();
  });
});
