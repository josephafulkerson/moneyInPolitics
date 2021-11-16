class CreateContributions < ActiveRecord::Migration[6.1]
  def change
    create_table :contributions do |t|
      t.string :organization
      t.integer :amount
      t.integer :legislator_id

      t.timestamps
    end
  end
end
