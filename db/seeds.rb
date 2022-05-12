puts "creating movies"

movie1 = Movie.create(title: "Shrek 2", overview: "Shrek Back 2 Business", poster_path:"Test2", release_date: "2015", vote_average: "10")
movie2 = Movie.create(title: "Shrek 3", overview: "Shrek Back 3 Business", poster_path:"Test3", release_date: "2016", vote_average: "9")
movie3 = Movie.create(title: "Shrek 4", overview: "Shrek Back 4 Business", poster_path:"Test4", release_date: "2017", vote_average: "8")
movie4 = Movie.create(title: "Shrek 5", overview: "Shrek Back 5 Business", poster_path:"Test5", release_date: "2018", vote_average: "7")
movie5 = Movie.create(title: "Shrek 6", overview: "Shrek Back 6 Business", poster_path:"Test6", release_date: "2019", vote_average: "6")

puts "creating users"

user1 = User.create(password: "password1", username:"user1", email:"user1@example.com")
user2 = User.create(password: "password2", username:"user2", email:"user2@example.com")
user3 = User.create(password: "password3", username:"user3", email:"user3@example.com")
user4 = User.create(password: "password4", username:"user4", email:"user4@example.com")
user5 = User.create(password: "password5", username:"user5", email:"user5@example.com")

puts "creating reviews"

Review.create(rating: "10", review_text: "it ok", user_id: 1, movie_id: 1)
Review.create(rating: "9", review_text: "eh", user_id: 2, movie_id: 2)
Review.create(rating: "8", review_text: "big eh", user_id: 3, movie_id: 3)
Review.create(rating: "7", review_text: "ehhhhh", user_id: 4, movie_id: 4)
Review.create(rating: "6", review_text: "actually, bad.", user_id: 5, movie_id: 5)

# puts "creating followers"

Follow.create(follower_id: 1, following_id: 1)
Follow.create(follower_id: 2, following_id: 1)
Follow.create(follower_id: 3, following_id: 2)
Follow.create(follower_id: 4, following_id: 2)
Follow.create(follower_id: 5, following_id: 3)

