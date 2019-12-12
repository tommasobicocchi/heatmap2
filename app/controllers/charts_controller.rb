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

  def update
    @chart = Chart.find(params[:id])
    @chart.update(description: params[:chart][:description])
  end

  def preview
    @document = Document.find(params[:document_id])
    @project = @document.project
    @chart_type = params[:chart_type]
    @chart = Chart.new(
      data: {
        headers: @document.csv_headers,
        values:  @document.csv_data,
      }
    )
    @chart.document = @document
    @chart.save
  end

  private

  def chart_params
    params.require(:chart).permit(:data, :description)
  end
end
