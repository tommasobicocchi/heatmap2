  # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

#a = Document.new
#a.link = "../lib/experiment.csv"
#a.save

#csv_string = open("../lib/experiment.csv").read

csv_hash = []

csv_options = { col_sep: ',', quote_char: '"', headers: :first_row }

CSV.foreach('lib/experiment.csv', csv_options) do |row|
  csv_hash << row.to_hash
end

p csv_hash

#sample = []

#CSV.foreach("1,2", headers: true, header_converters: :symbol) do |row|
#  sample = row.to_hash
#end

#p sample


