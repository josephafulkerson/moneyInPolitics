class CreateLegislators < ActiveRecord::Migration[6.1]
  def change
    create_table :legislators do |t|
      t.string :name
      t.string :party
      t.string :website_url

      t.timestamps
    end
  end
end
