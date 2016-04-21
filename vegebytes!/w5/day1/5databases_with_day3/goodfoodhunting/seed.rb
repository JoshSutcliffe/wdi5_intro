require './db_config'
require './models/dish'
require './models/dish_type'
require './models/user'
require './models/like'

DishType.delete_all
Dish.delete_all

DishType.create(name: 'snack')
DishType.create(name: 'dessert')
brunch = DishType.create(name: 'brunch')

Dish.create(name: 'cakepudding', dish_type_id: brunch.id)
# This will empty the database and add these, so we can work on it on the site

# DishType.all.map { |dish_type| dish_type.id  }
DishType.pluck(:id)
# .pluck does the same as create a map

10.times do 
  Dish.create(name: "dish#{count}")
end
# The loop wil randomise what it creates

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


quizzes = Quiz.create([
  {title: 'How do you brush your teeth?', speaker: 'Yang'},
  {title: 'Why should we change underwear?', speaker: 'Mahendra'},
  {title: 'Do sharks have nightmares?', speaker: 'Josh'},
  {title: 'Will you survive the military cadets?', speaker: 'JB'},
  {title: 'How much wood could a woodchuck chuck?', speaker: 'Luke'},
  {title: 'How much wood could a woodchuck chuck?', speaker: 'Locky'},
  ]);

questions = Question.create([
  # Yang to make his questions with id 1
  # {content: 'What is your favourite animal?', a: 'Monkeys', b: 'Turtles', c: 'Elephants', d: 'Lemurs', answer: 'Elephants', quiz_id: 1},
  # {content: 'How often do you wash your hands?', a: 'Every 20mins', b: 'Every Hour', c: 'Once a Day', d: 'Never', answer: 'Never', quiz_id: 1},
  # {content: 'Is it okay to hug a stranger?', a: 'Definitely', b: 'Sometimes', c: 'Never', d: 'If they are high', answer: 'Definitely', quiz_id: 1},
  # {content: 'What is your favourite colour?', a: 'Linen', b: 'Tomato', c: 'Plum', d: 'Fuche', answer: 'Plum', quiz_id: 1},
  # Mahendra 2
  # Josh 3
  {content: 'Most important thing in your CV?', a: 'Content', b: 'Layout', c: 'Style', d: 'Skills Table', answer: 'Skills Table', quiz_id: 4},
  {content: 'Pick what you shouldnt tell recruiters', a: 'Where you are interviewing', b: 'How many places you are interviewing at', c: 'If you have applied at a company', d: 'If you have reservations about an organisation', answer: 'Where you are interviewing', quiz_id: 4},
  {content: 'Best footbal team in the world?', a: 'Barcelona', b: 'Real Madrid', c: 'Leeds United', d: 'Bayern Munich', answer: 'Leeds United', quiz_id: 4},
  {content: 'First thing to do if you want to apply for a job?', a: 'Email your CV directly', b: 'Apply through job board', c: 'Add hiring manager on LI', d: 'Call the HR department', answer: 'Call the HR department', quiz_id: 4},
  # jb 4
  {content: 'JB looks most like which animal?', a: 'Lemur', b: 'Goat', c: 'Aye-Aye', d: 'Sloth', answer: 'Aye-Aye', quiz_id: 4},
  {content: 'JBs penis size', a: 'Miniscule', b: 'Tiny', c: 'Pathetic', d: 'Embarresing', answer: 'Pathetic', quiz_id: 4},
  {content: 'JB is most like which serial killer?', a: 'Charles Manson', b: 'Dr Harold Shipman', c: 'Peter Sutcliffe', d: 'Jack the Ripper', answer: 'Dr Harold Shimpan', quiz_id: 4},
  {content: 'Which Olympic event would JB be best at?', a: 'Synchronised Swimming', b: 'Twirling', c: 'Curling', d: 'Power-walking', answer: 'Twirling', quiz_id: 4},
  {content: 'Rate my speech', a: 'Bollocks', b: 'Dog shit', c: 'I think JB has downs', d: 'I would rather poke my eyes out rather than listen again', answer: 'I think JB has downs', quiz_id: 4},
  # luke 5
  # yang 6
  {content: 'If Jesus had a Twitter handle, what would it be?', a: 'Big J', b: 'JC2000', c: 'JC in the House', d: 'Son of God MF', answer: 'Big J', quiz_id: 2},
  {content: 'Ants, bees, beetles or mosquitos?', a: 'Ants', b: 'Bees', c: 'Beetles', d: 'Mosquitos', answer: 'Bees', quiz_id: 2},
  {content: 'If alcohol was never invented, what would you drink instead?', a: 'Water', b: 'Coke', c: 'Tomato Soup', d: 'Lemon Juice', answer: 'Water', quiz_id: 3},
  {content: 'What Olympic event would you most likely partake in?', a: 'Fencing', b: 'Twirling', c: 'Trampolining', d: 'Power-walking', answer: 'Twirling', quiz_id: 3},
  {content: 'If you had a son named Greg, what would you name your daughter?', a: 'Sam', b: 'Pat', c: 'Nic', d: 'Val', answer: 'Val', quiz_id: 4},
  {content: 'What shape should eggs be?', a: 'Cubes', b: 'Perfect Spheres', c: 'Pyramids', d: 'Star-shaped', answer: 'Cubes', quiz_id: 4},
  ]);

users = User.create([
  {name: 'Yang', speaker?: true, password: 'cakepudding'},
  {name: 'Mahendra', speaker?: true, password: 'cakepudding'},
  {name: 'Josh', speaker?: true, password: 'cakepudding'},
  {name: 'JB', speaker?: true, password: 'cakepudding'},
  {name: 'Luke', speaker?: true, password: 'cakepudding'},
  {name: 'Locky', speaker?: true, password: 'cakepudding'},
  {name: 'Bridget Boone', speaker?: false, password: 'cakepudding'},
  {name: 'Charlie Crooke', speaker?: false, password: 'cakepudding'},
  {name: 'Dorothy Ding', speaker?: false, password: 'cakepudding'},
  {name: 'Eliot Ellingsworth', speaker?: false, password: 'cakepudding'},
  {name: 'Francis Freud', speaker?: false, password: 'cakepudding'},
  {name: 'Harry Hills', speaker?: false, password: 'cakepudding'},
  ]);