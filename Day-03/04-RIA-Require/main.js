require(['SalaryCalculator', 'SalaryCalculatorView', 'jquery'], 
		function(SalaryCalculator, SalaryCalculatorView, $){
			$(function(){
				var calc = new SalaryCalculator();
				var view = new SalaryCalculatorView(calc);
				view.init();
				view.render().$el.appendTo(document.body);
			})
		});
		