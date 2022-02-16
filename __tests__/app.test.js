const request = require('supertest');
const app = require('../app.js');
const seed = require('../db/seeds/seed.js');
const testData = require('../db/data/test-data/index.js');
const db = require('../db/connection.js');

beforeEach(() => {
  return seed(testData);
});

afterAll(() => db.end());

describe('app', () => {
  describe('/api/articles/:article_id/comments', () => {
    describe('GET', () => {
      test('status: 200 - responds with an empty array of comments for article with none associated', () => {
        return request(app)
          .get('/api/articles/2/comments')
          .expect(200)
          .then(({ body: { comments } }) => {
            expect(comments).toEqual([]);
          });
      });
      test('status: 404 - article not found', () => {
        return request(app)
          .get('/api/articles/99999/comments')
          .expect(404)
          .then((response) => {
            expect(response.body.msg).toBe('Article not found');
          });
      });
    });
  });
});
