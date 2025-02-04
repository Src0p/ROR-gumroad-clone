# frozen_string_literal : true

module Products 

  class UnpublishController < ApplicationController 
    def update 
      @product = Product.friendly.find(params[:id])
      @product.update(publish:false)
      flash[:success] = "Product Successfully unpublished"
      redirect_to edit_product_path(@product)
    end 
  end
end
