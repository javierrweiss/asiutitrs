/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BBB6A388-29F7-42CC-981B-5102038CFB34"}
 */
var $_callerFormName = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FCCC12DF-0020-4A72-97DB-8144587C9684"}
 */
function onAction_registro(event) {

	cerrarForm();
	agregarAnalisis();
}

/**
 * @properties={typeid:24,uuid:"FED7C0B8-79E3-4EDB-A3F4-195173ABADB5"}
 */
function agregarAnalisis() {
	
	var item = new Object();
	item.codigo = foundset.ana1;
	item.analisis = foundset.ana22alfa;
	item.cantidad = '1';
	item.ana19 = foundset.ana19;
	item.ana24 = foundset.ana24;
	item.ana21 = foundset.ana21;
	item.ana3 = foundset.ana3;
	item.anaestado = foundset.anaestado;
	item.ana25 = foundset.ana25;
	item.ana30 = foundset.ana30;
	item.anasinourg = foundset.anasinourg;
	item.ana40 = foundset.ana40;
	
	forms[$_callerFormName].agregarItem(item,true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AED9D9B7-0627-4D60-A6A1-F65059AB2F53"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"354E3AB8-5DAD-4F28-BFE0-06C50051D4B4"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}
