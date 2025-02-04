# frozen_string_literal : true

module Products 

  class PublishController < ApplicationController 
    def update 
      @product = Product.friendly.find(params[:id])
      @product.update(publish:true)
      flash[:success] = "Product Successfully published"
      redirect_to edit_product_path(@product)
    end 
  end
end
