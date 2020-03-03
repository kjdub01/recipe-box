class CreateMeasurementQties < ActiveRecord::Migration[5.2]
  def change
    create_table :measurement_qties do |t|
      t.string :qty_amount

      t.timestamps
    end
  end
end
