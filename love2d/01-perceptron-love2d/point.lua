Point = {}
Point.new = function()
	local self = {}

	self.x = math.random(width)
	self.y = math.random(height)

	if (self.x > self.y) then
		self.label = 1
	else
		self.label = -1
	end

	self.show = function(inputs) 
		love.graphics.ellipse("fill", self.x, self.y, 32, 32)
	end

	return self
end