class DocumentsController < ApplicationController

  def index
    @documents = Document.all
  end

  def document_params
    params.require(:document).permit(:filepath)
  end
end
