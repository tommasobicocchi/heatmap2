class ChartsController < ApplicationController
  def index
    @documents = Project.find(params[:project_id]).documents
    @charts = Chart.all
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
        values:  @document.csv_data
      }
    )
    @chart.document = @document
    @chart.save
  end

  def destroy
    @chart = Chart.find(params[:id])
    @chart.destroy
  end

  private

  def chart_params
    params.require(:chart).permit(:data, :description)
  end
end
