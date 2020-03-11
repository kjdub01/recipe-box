# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
recipe1 = Recipe.create({
  recipe_name: 'Anchovy Puffs',
  recipe_description: 'Recently, on a trip to Pasadena, I found a 1955 Peter Pauper Press book with the slightly-corny title, A Merrie Christmas Cook Book. I was taken in by the colorful cover, and opened it to peruse the contents. Retro recipes jumped from every page. Retro can be good, like today’s recipe. Or not. Remember those garish gelatin salads? Crown roast of frankfurters? You get the idea. This book has a lot of the better dishes from the 50s and 60s. Today, I offer a canapé recipe that stands the test of time. It is elegant, delicious, and just right for holiday entertaining. Simple. Flexible. Tasty. The original recipe, as you can see from the page, is Anchovy Puffs. However, not everyone is a fan of anchovies. With some experimentation, I’ve found you can substitute olive paste, sun dried tomato paste, or a thick pesto. Or you can even go the sweet route and make them with a bit of jam, nut paste, or ganache. That’s what I mean about flexible. You can even use half the dough for savory and half for sweet, or save half in the fridge for another day. While this is a great holiday recipe, I know I will use it year round! ~ David',
  recipe_direction: 'Place flour in the bowl of the food processor fitted with the steel blade. Cut cream cheese and butter into cubes and place on top of flour. Cover and begin processing with 10 pulses. Then run processor until the dough comes together in a ball. Because the cream cheese and butter started cold, this dough can be rolled and used immediately. * Preheat oven to 400°F/200°C. Roll the pastry thin – about 1/8inch thick. Using a 2-inch round cutter, cut into rounds. Gather scraps, knead then together, and re-roll. You should have at least 60 rounds. Place 1/4 teaspoon of your chosen filling in the center of each round, then fold in half and use the tines of a fork to crimp curved edges. Place the half-moons on a parchment-lined baking sheet and bake for 10 minutes. Serve warm. Makes approximately 60. * If you don’t have a food processor, use room temperature cream cheese and butter, and mix by hand. When using this method, the dough must be refrigerated for at least an hour prior to using.'})

  recipe1.ingredients.create(ingredient_name: '1 cup flour')
  recipe1.ingredients.create(ingredient_name: '8 ounces cold cream cheese')
  recipe1.ingredients.create(ingredient_name: '4 ounces cold butter')
  recipe1.ingredients.create(ingredient_name: 'anchovy paste (or other filling)')
