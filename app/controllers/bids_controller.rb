class BidsController < ApplicationController
    before_action :authenticate_user!

    def create
        @auction = Auction.find params[:auction_id]
        @bid=Bid.new bid_params
        @bid.auction=@auction
        @bid.user=current_user
        
        if @bid.save
            redirect_to auction_path(@auction), notice: 'Bid created!'
        else
            @bids=@auction.bids.order(created_at: :desc)
            
            render '/auctions/show'
            
        end
    end
    def destroy
        @auction=Auction.find params[:auction_id]
        @bid=Bid.find params[:id]
        @bid.destroy
        redirect_to auction_path(@auction), notice: "Bid deleted"
    end
        
    
    private
    def bid_params
        params.require(:bid).permit(:price)
    end
end
