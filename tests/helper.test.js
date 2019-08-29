import helper from '../client/helper';

describe('Helper File Testing', () => {
  test('Calculate average rating given an array', () => {
    const ratings = [
      {_id: 1, rating: 4},
      {_id: 1, rating: 3},
      {_id: 1, rating: 3},
      {_id: 1, rating: 4},
      {_id: 1, rating: 4},
    ];
    const reviewScore = helper.calcAverageRating(ratings);
    expect(reviewScore).toBe(3.6);
  });
});