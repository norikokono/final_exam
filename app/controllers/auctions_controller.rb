class AuctionsController < ApplicationController
    
  before_action :authenticate_user!, except: [:index, :show]
  before_action :find_auction, only:[:show, :edit, :update, :destroy]


  def index
      @auctions=Auction.all.order(created_at: :desc)
  end
 
  def show
      @bids=@auction.bids.order(created_at: :desc)
      @bid=Bid.new
  end

  def destroy
      @auction.destroy
      redirect_to auctions_path
  end

  def new
      @auction=Auction.new
  end
  def create
      @auction=Auction.new post_params
      @auction.user=current_user

      if @auction.save
          flash[:notice]="Auction created successfully."
          redirect_to auction_path(@auction.id)
      else
          render :new
      end
  end
 
  def edit

  end
  def update
      if @auction.update auction_params
          redirect_to auction_path(@auction.id)
      else
          render :edit
      end
  end


  private
  def find_auction
      @auction=Auction.find params[:id] 
  end
  def auction_params
      params.require(:auction).permit(:title, :description)
  end

end


