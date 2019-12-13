  class ProjectsController < ApplicationController
  def index
    @projects = Project.all
    if params[:project_id].present?
      @project = Project.find(params[:project_id])
      @project.destroy
      redirect_to projects_path
    end
  end


  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    @project.save
    redirect_to projects_path(@project)
  end


def update
  @project = Project.find(params[:id])
  @project.update(project_params)
  if @project.save
    redirect_to projects_path(@project)
  else
    render 'index'
  end
end

  def project_params
    params.require(:project).permit(:name, :sku)
  end

end
