Perceptron = {}
Perceptron.new = function()
	local self = {}

	self.weights = array.new(2)
	self.lregression = 0.08

	for i=0, table.getn(self.weights), 1 do
		self.weights[i] = math.random(-1, 1)
	end

	self.process = function(inputs) 
		local output = 0;

		for i=0, table.getn(weights), 1	do
			output = output + inputs[i]*weights[i]
		end

		if output >= 0 then return 1 end
		return -1
	end

	self.train = function(inputs, target)
		local process = self.process(inputs)
		local err = target - process

		for i=0, table.getn(weights), 1 do
			weights[i] = weights[i] + err * inputs * lregression
		end
	end

	return self
end