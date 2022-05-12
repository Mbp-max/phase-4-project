
user1 = User.create(username: 'user1', email: 'user1@gmail.com', password: 'password1')
user2 = User.create(username: 'user2', email: 'user2@gmail.com', password: 'password2')
user3 = User.create(username: 'user3', email: 'user3@gmail.com', password: 'password3')


review1 = MovieReview.create(title: "test", overview: "test", poster_path:"test", release_date:"test", vote_average:"1", user_id: "1", review_body: "test")