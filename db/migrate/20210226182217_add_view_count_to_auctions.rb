class AddViewCountToAuctions < ActiveRecord::Migration[6.1]
  def change
    add_column :auctions, :view_count, :integer
  end
end
