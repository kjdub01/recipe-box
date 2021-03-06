# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
recipe1 = Recipe.create({
  name: 'Anchovy Puffs',
  img: 'https://cocoaandlavender.com/wp-content/uploads/2018/12/anchovypuffs11.jpg',
  description: 'Recently, on a trip to Pasadena, I found a 1955 Peter Pauper Press book with the slightly-corny title, A Merrie Christmas Cook Book. I was taken in by the colorful cover, and opened it to peruse the contents. Retro recipes jumped from every page. Retro can be good, like today’s recipe. Or not. Remember those garish gelatin salads? Crown roast of frankfurters? You get the idea. This book has a lot of the better dishes from the 50s and 60s. Today, I offer a canapé recipe that stands the test of time. It is elegant, delicious, and just right for holiday entertaining. Simple. Flexible. Tasty. The original recipe, as you can see from the page, is Anchovy Puffs. However, not everyone is a fan of anchovies. With some experimentation, I’ve found you can substitute olive paste, sun dried tomato paste, or a thick pesto. Or you can even go the sweet route and make them with a bit of jam, nut paste, or ganache. That’s what I mean about flexible. You can even use half the dough for savory and half for sweet, or save half in the fridge for another day. While this is a great holiday recipe, I know I will use it year round! ~ David',
  directions: 'Place flour in the bowl of the food processor fitted with the steel blade. Cut cream cheese and butter into cubes and place on top of flour. Cover and begin processing with 10 pulses. Then run processor until the dough comes together in a ball. Because the cream cheese and butter started cold, this dough can be rolled and used immediately. * Preheat oven to 400°F/200°C. Roll the pastry thin – about 1/8inch thick. Using a 2-inch round cutter, cut into rounds. Gather scraps, knead then together, and re-roll. You should have at least 60 rounds. Place 1/4 teaspoon of your chosen filling in the center of each round, then fold in half and use the tines of a fork to crimp curved edges. Place the half-moons on a parchment-lined baking sheet and bake for 10 minutes. Serve warm. Makes approximately 60.* If you don’t have a food processor, use room temperature cream cheese and butter, and mix by hand. When using this method, the dough must be refrigerated for at least an hour prior to using.'})

  recipe1.ingredients.create(name: '1 cup flour')
  recipe1.ingredients.create(name: '8 ounces cold cream cheese')
  recipe1.ingredients.create(name: '4 ounces cold butter')
  recipe1.ingredients.create(name: 'anchovy paste (or other filling)')

  recipe1.comments.create(author: 'Julie', content: "I don't like anchovies so I used shrimp paste")

recipe2 = Recipe.create({
  name: 'Baba Ghanouj',
  img: 'https://cocoaandlavender.com/wp-content/uploads/2017/07/babaghanouj3.jpg',
  description: 'Did you know that “baba ghanouj” translates to “pampered papa?” In Arabic, baba is papa, or father, and ghanouj is pampered. Neither Wikipedia nor Markipedia know a definitive reason as to how it got this moniker, although harems seem to figure prominently in any attempted explanation. Baba ghanouj is a dish traditional to the Levant. It is very popular in Iraq, Israel, Jordan, Lebanon, Palestine, Syria, and even parts of southern Turkey. I never ate baba ghanouj in my youth, but became interested when I purchased a book called The Flavors of Aleppo written by well-known Syrian chef Poopa Dweck. I have made quite a few of the recipes from her gorgeous book, but the one I have enjoyed the most is the baba ghanouj. I make it from memory now and was startled the other day when, or some reason, I looked into the book at the original recipe. While my changes are minimal in terms of ingredients, my method has drifted to a technique that produces a wonderfully smoky, lemony, and creamy  baba ghanouj. I like my method, and I think you will, too. It makes papa happy. ~ David',
  directions: 'Heat a gas or charcoal grill to high. Place eggplants on the rack directly above the heat and cook 6 minutes a side on 4 sides (total of 24 minutes). Place charred and blistered eggplants in a colander to cool. While they cool, place tahini, lemon juice, cumin, salt, Aleppo pepper, and 2 tablespoons warm water in a 2-cup glass measure. Using only one beater of a handheld mixer, blend these ingredients until smooth. They will thicken very quickly. Set aside, but do not clean the beater. Once cool enough to handle, cut the eggplants in half and scoop out the flesh into a wire mesh sieve set over a bowl. Try not to get too much of the blackened skin into the flesh. Let the eggplant drain for 10-15 minutes. You will see the bitter brown liquid accumulate in the bowl. Discard this liquid. Using the single beater, add another tablespoon or two of warm water to the tahini-lemon mixture and mix. Move it and the drained eggplant flesh to a medium bowl. Using an immersion blender, purée until the mixture is light in color and creamy in consistency. Serve with flatbreads. You can either cut them into wedges or serve each person their own flatbread, to be torn by hand. Serves 6-8 as an appetizer. Note: I tried blending the lemon juice and tahini with the immersion blender to reduce the number of utensils, but found that the single beater did a better job of mixing the tahini, while the immersion blender performed better once the eggplant was introduced.'
  })

  recipe2.ingredients.create(name: '3 large eggplants')
  recipe2.ingredients.create(name: '1/2 cup tahini')
  recipe2.ingredients.create(name: '1/2 cup lemon juice')
  recipe2.ingredients.create(name: '3/4 teaspoon ground cumin')
  recipe2.ingredients.create(name: '1/2 teaspoon salt')
  recipe2.ingredients.create(name: '1/2 teaspoon Aleppo pepper')
  recipe2.ingredients.create(name: 'warm water')
  recipe2.ingredients.create(name: 'chopped fresh parsley, for garnish')
  recipe2.ingredients.create(name: 'flatbreads, for serving')

  recipe2.comments.create(author: "Rob", content: "Wish I was with you eating this")

recipe3 = Recipe.create({
  name: 'Blue Cheese Tart (sometimes with Figs!)',
  img: 'https://cocoaandlavender.com/wp-content/uploads/2018/09/bluecheesetarts11.jpg',
  description: 'It was the 1970s; I was in high school, and it wasn’t pretty. Bad hair, worse fashions, optimal nerdiness, and prolific pimples. A lowly sophomore in an advanced French class, I met Braiden. She was a cool senior and should have shunned me, but was never anything but kind… a kindness I have never forgotten. As is often the case, we lost track of one another after her graduation. Can you imagine a world without Facebook, Instagram, or even LinkedIn? There was such a day… it was hard to keep up with even one’s best of friends. Then, one day in an e-enlightened decade, I found her on Facebook and discovered that she, like me, is passionate about food and wine. The big difference is that she has made it a career and, perhaps one day when I grow up, I will do the same. Braiden is very talented – as a writer, cook, and photographer. Check out her website Of floral watercolors, Braiden Blossoms, or her cookbooks. (You can find used copies online – her most recent is Pacific Northwest Wining and Dining.) When I was going to a “Pacific Northwest” themed dinner party and needed to take a first course, I consulted her cookbooks for ideas. I found the original inspiration for this tart – a Blue Goat Cheesecake. With her permission, I made changes and created two new versions, more like a tart than a cheesecake. Each is filled with wonderful autumnal flavors starting with the nut crust and finishing with a dark, intense chestnut honey I’d brought back from Italy. Since starting this post and finally publishing it today, I had a wonderful visit with Braiden and her husband Spencer, and another high school friend Barb and her husband in Seattle. How wonderful it was to reconnect and share stories… and, of course, talk about food. The first was made with a blue goat cheese from Fiore di Capra, and the second with a creamy Danish blue. One crust was made with walnuts (per Braiden’s original recipe) and the other with hazelnuts. To the second tart I added slices of the season’s last fresh figs – a delicately sweet counterpart for the blue cheese and earthy honey. Summer is long over but, when you have dishes like this to make, autumn seems pretty wonderful, too. ~ David',
  directions: 'Preheat oven to 350°F. Chop panko, nuts, and rosemary or thyme in a food processor until the nuts are finely ground. Add the butter and pulse until the mixture clumps – it will not form a ball. Transfer crust mixture to an 8-inch springform pan, the bottom of which has been lined with parchment, and press it into the bottom and at least 1 inch up the sides. I like to use the bottom of a glass to tamp the bottom; it gives you a nice, compact, and even crust. Blind bake the crust for 10 minutes. Meanwhile, whisk together all the ingredients for the filling. You can use the food processor for this, as well. Just wipe out any crumbs from the crust – no need to clean it between these steps When the crust is ready, pour the filling into the crust, top with fig slices (if using). and bake for 25-30 minutes. The top may crack but don’t worry – it will still taste fine! (When using figs, the longer baking time is needed, as they add extra moisture.) Allow to cool before removing the sides of the pan. Cut into slices, drizzle with chestnut honey and add a spoonful of honey on the side. Serve warm or at room temperature. Pairs well with a late-harvest Riesling, Sauternes, or Tariquet Premières Grives. Makes 6 first course servings.'
  })

  recipe3.ingredients.create(name: '1 cup panko bread crumbs')
  recipe3.ingredients.create(name: '2 ounces toasted shelled walnuts or toasted hazelnuts')
  recipe3.ingredients.create(name: '1 tablespoon chopped fresh rosemary or thyme')
  recipe3.ingredients.create(name: '3 tablespoons unsalted butter, softened')
  recipe3.ingredients.create(name: '4 ounces blue goat cheese, or other soft blue cheese, softened')
  recipe3.ingredients.create(name: '4 ounces mascarpone cheese')
  recipe3.ingredients.create(name: '1/4 cup milk')
  recipe3.ingredients.create(name: '1 large egg')
  recipe3.ingredients.create(name: '1 1/2 tablespoons flour')
  recipe3.ingredients.create(name: '1 tablespoon brandy')
  recipe3.ingredients.create(name: 'salt and freshly ground pepper, to taste')
  recipe3.ingredients.create(name: '3 fresh figs, cut pole-to-pole in 1/4-inch slices')
  recipe3.ingredients.create(name: 'chestnut honey, or other flavorful honey, for serving')
  recipe3.ingredients.create(name: 'additional quartered figs, for serving')

  recipe3.comments.create(author: "Braiden", content: "So glad we could reconnect over food.")
