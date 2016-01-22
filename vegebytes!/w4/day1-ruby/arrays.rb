require 'pry'

ga_team = ['dt', 'matt', 'mj']

#  enumerables
ga_team.each do |member|
  puts member
end

ga_team.each { |member| puts member }

binding.pry