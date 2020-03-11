class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :recipe_name
      t.text :recipe_description
      t.text :recipe_direction

      t.timestamps
    end
  end
end
