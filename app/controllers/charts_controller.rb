class ChartsController < ApplicationController
  def new
    @document = Document.find(params[:document_id])
    @chart = Chart.new
  end

  def create
    @chart = Chart.new(chart_params)
    # we need `document_id` to associate review with corresponding restaurant
    @document = document.find(params[:document_id])
    @chart.document = @document
    @chart.save
    redirect_to document_path(@document)
  end

  def preview
    @document = Document.find(params[:document_id])
    @chart_type = params[:chart_type]
  end

  private

  def chart_params
    params.require(:chart).permit(:content)
  end
end
