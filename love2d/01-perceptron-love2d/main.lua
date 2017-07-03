Perceptron = require("perceptron")
Point = require("point")


function love.load()

	local perceptron = Perceptron.new()
	local points = array.new(100)

	for i=0, table.getn(points), 1 do
		points[i] = Point.new()
	end

	local inputs = {-1, 0.5}
	local process = perceptron.process(inputs)

end

function love.draw()
	for _, point in pairs(points) do
		point.show()
	end
end