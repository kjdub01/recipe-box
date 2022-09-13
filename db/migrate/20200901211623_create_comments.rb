class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.text  :author
      t.text  :content
      t.belongs_to :recipe
    end
  end
end
