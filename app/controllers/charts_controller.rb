class ChartsController < ApplicationController
  def index
    @project = Project.find(params[:project_id])
    @charts = @project.charts
  end

  def update
    @chart = Chart.find(params[:id])
    @chart.update(description: params[:chart][:description])
  end

  def show
    @chart = Chart.find(params[:id])
  end

  def create
    @chart = Chart.new(
        data: {
          headers: @document.csv_headers,
          values:  @document.csv_data,
          type: params[:chart_type]
        }
      )
    @chart.save
  end

  def new
    @chart = Chart.new
  end

  def destroy

  end


  def preview
      @document = Document.find(params[:document_id])
      @project = @document.project
      @chart_type = params[:chart_type]
    if !params[:text].empty?
       @chart = Chart.new
    #     data: {
    #       headers: csv_selection(params[:text], @document.csv_headers),
    #       values:  csv_selection(params[:text], @document.csv_data),
    #       type: params[:chart_type]
    #     }
    #     )
     else
       @chart = Chart.new
    #     data: {
    #       headers: @document.csv_headers,
    #       values:  @document.csv_data,
    #       type: params[:chart_type]
    #     }
    #     )
    end
      @chart.document = @document
  end

  #useless_per_colpa_di_gigi

  def csv_selection(text, array)
    array_result = []
    array_index = text.split(',')
    array_index_2 = array_index.slice(1, array_index.size)
    array_index_2.size.times do
      array_result << array.values_at(array_index_2[0].to_i).first
      array_index_2.slice(1, array_index_2.size)
    end
    array_result
  end

  private

  def chart_params
    params.require(:chart).permit(:data, :description)
  end
end
