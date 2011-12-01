/*
---
name: Accessible DatePicker
description: Demo application for the DatePicker
authors: Alex Duschek
requires: [Core/Element.Dimensions, Core/Fx.Tween, Core/Fx.Transitions]
provides: Picker
...
*/
window.addEvent('domready', function(){
	new Picker.Date($$('.datepicker'), {
		timePicker: false,
		positionOffset: {x: 5, y: 0},
		pickerClass: 'datepicker_aegis',
		useFadeInOut: !Browser.ie
	});
});