puts "creating movies"

movie1 = Movie.create(title: "Shrek 2", overview: "Shrek Back 2 Business", poster_path:"/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg", release_date: "2015", vote_average: "10")
movie2 = Movie.create(title: "Shrek The Third", overview: "Shrek The Third", poster_path:"/1V5pspgnFCXXWd9DddHBVIF2275.jpg", release_date: "2016", vote_average: "9")
movie3 = Movie.create(title: "Shrek Forever After", overview: "Shrek Forever After", poster_path:"/faRzuUxkZYzSc8UlAZGQ4tqE1Pi.jpg", release_date: "2017", vote_average: "8")
movie4 = Movie.create(title: "Shrek", overview: "Shrek", poster_path:"/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg", release_date: "2018", vote_average: "7")
movie5 = Movie.create(title: "Shrek's Revenge", overview: "Shrek's Revenge", poster_path:"/eLNhGoCMhzNte7XPTlpymeGFeVK.jpg", release_date: "2019", vote_average: "6")

puts "creating users"

user1 = User.create(password: "password1", username:"Cuddlebunny", email:"user1@example.com")
user2 = User.create(password: "password2", username:"Lucretia", email:"user2@example.com")
user3 = User.create(password: "password3", username:"Malachi", email:"user3@example.com")
user4 = User.create(password: "password4", username:"Hermione", email:"user4@example.com")
user5 = User.create(password: "password5", username:"Mellicent", email:"user5@example.com")

puts "creating reviews"

Review.create(rating: "10", review_text: "it ok", user_id: user1.id, movie_id: movie1.id)
Review.create(rating: "9", review_text: "eh", user_id: user2.id, movie_id: movie2.id)
Review.create(rating: "8", review_text: "big eh", user_id: user3.id, movie_id: movie3.id)
Review.create(rating: "7", review_text: "ehhhhh", user_id: user4.id, movie_id: movie4.id)
Review.create(rating: "6", review_text: "actually, bad.", user_id: user5.id, movie_id: movie5.id)

# puts "creating followers"

# Relationship.create(follower_id: 1, followed_id: 1)
# Relationship.create(follower_id: 2, followed_id: 1)
# Relationship.create(follower_id: 3, followed_id: 2)
# Relationship.create(follower_id: 4, followed_id: 2)
# Relationship.create(follower_id: 5, followed_id: 3)

