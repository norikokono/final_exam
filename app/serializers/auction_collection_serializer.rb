class AuctionCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :view_count, :created_at,:updated_at
end


