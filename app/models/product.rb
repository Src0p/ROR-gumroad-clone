class Product < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  monetize :price_cents
  belongs_to :user

  validates :name, presence: true, uniqueness: { case_sensitive: false, scope: :user_id } 

  has_rich_text :description

  has_many :contents, dependent: :destroy 

  def draft? 
    :published?
  end
end
