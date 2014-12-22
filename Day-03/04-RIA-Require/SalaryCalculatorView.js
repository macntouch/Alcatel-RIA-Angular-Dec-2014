define(['jquery','Handlebars','text!calculatorTemplate.html'], function($, Handlebars, viewTemplate){
	function SalaryCalculatorView(calc){

		var $el = this.$el = $("<div></div>");
		var self = this;
		this.init = function(){
			this.templateFn = Handlebars.compile(viewTemplate);

			calc.addSubscriber("all", function(){
				self.render();
			});

			
			//React to user actions
			$el.on("change", "#txtBasic", function(){
				calc.set('basic', parseInt($(this).val(),10));
			});
			$el.on("change", "#txtHra", function(){
				calc.set('hra', parseInt($(this).val(),10));
			});
			$el.on("change", "#txtDa", function(){
				calc.set('da', parseInt($(this).val(),10));
			});
			$el.on("change", "#rangeTax", function(){
				calc.set('tax', parseInt($(this).val(),10));
			});
			

			$el.on("click", "#btnCalculate", function(){
				calc.calculate();
			});
		};

		this.render = function(){
			
			$el.html(self.templateFn(calc.toJSON()));
			return this;
		}

	}
	return SalaryCalculatorView;
});
	