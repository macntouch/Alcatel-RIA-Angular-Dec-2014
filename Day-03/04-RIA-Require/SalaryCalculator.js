define([], function(){

	function SalaryCalculator(defaults){
		var _data = defaults || {
			basic : 0,
			hra : 0,
			da : 0,
			tax : 0,
			salary : 0
		};

		this.get = function(attrName){
			return _data[attrName];
		};
		this.set = function(attrName, value){
			_data[attrName] = value;
			triggerChange(attrName);
			triggerChange("all");
		};

		var self = this;
		function triggerChange(attrName){
			var subscriptions = _subscribers[attrName] || [];
			subscriptions.forEach(function(subscription){
				subscription.call(self);
			});
		}

		var _subscribers = {};
		this.addSubscriber = function(attrName, subscriptionFn){
			_subscribers[attrName] = _subscribers[attrName] || [];
			_subscribers[attrName].push(subscriptionFn);
		};
		this.toJSON = function(){
			return _data;
		};
	}
	SalaryCalculator.prototype.calculate = function(){
		var gross = this.get('basic') + this.get('hra') + this.get('da');
		var net = gross * ((100-this.get('tax'))/100);
		this.set('salary' , net);
	}
	return SalaryCalculator;
});
