require 'csv'


class ChartsController < ApplicationController
  before_action :set_document, only:  [:preview, :create]
  before_action :set_chart_data, only: :preview

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
    @chart = Chart.new(chart_params)
    @chart .document = @document

    data = {}
    if params[:headers].present?
      data[:headers] = params[:headers].split
    end

    if params[:headers].present?
      data[:values] = params[:values].split
    end

    if params[:chart_type].present?
      data[:chart_type] = params[:chart_type]
    end

    @chart.data = data

    if @chart.save
      redirect_to project_charts_path(@document.project)
    else
      render :preview
    end
  end

  def new
    @chart = Chart.new
  end

  def destroy

  end


  def preview
    @project = @document.project
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

  def set_document
    @document = Document.find(params[:document_id])
  end

  def chart_params
    params.require(:chart).permit(:description, :name)
  end

  def set_chart_data
    @chart_type = params[:chart_type]
    if params[:text].present?
      @headers = @document.csv_selection_headers(params[:text])
      @values = @document.csv_selection_data(params[:text])
    else
      @headers = @document.csv_headers.slice(1, @document.csv_headers.size - 1)
      @values = @document.csv_data.slice(1, @document.csv_data.size - 1)
    end
    @chart = Chart.new(
      data: {
        headers: @headers,
        values: @values,
        type: @chart_type
      }
    )
  end
end
