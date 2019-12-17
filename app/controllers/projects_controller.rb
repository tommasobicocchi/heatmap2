  class ProjectsController < ApplicationController
  def index
    if params[:format].present?
      @projects = Project.where(user_id: current_user.id)
      if params[:project_id].present?
        @project = Project.find(params[:project_id])
        @project.destroy
        redirect_to projects_path
      end
    else
      @projects = Project.all
      if params[:project_id].present?
        @project = Project.find(params[:project_id])
        @project.destroy
        redirect_to projects_path
      end
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
    params.require(:project).permit(:name, :description)
  end

end
