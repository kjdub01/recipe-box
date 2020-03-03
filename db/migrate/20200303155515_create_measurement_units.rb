class CreateMeasurementUnits < ActiveRecord::Migration[5.2]
  def change
    create_table :measurement_units do |t|
      t.string :measurement_description

      t.timestamps
    end
  end
end
