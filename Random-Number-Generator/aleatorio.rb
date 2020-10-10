puts "\nRandom Number Generator"

puts "Enter the first parameter: "
first_parameter = gets.chomp.to_i
puts "Enter the second parameter: "
second_parameter = gets.chomp.to_i

resul_random = rand(first_parameter...second_parameter)

puts "#{resul_random}"