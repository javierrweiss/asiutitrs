/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"91D2D0D0-3382-4DBC-BCD6-D28997DCE7CC"}
 */
var $_callerFormName = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"81150EA5-D262-47AF-9DB6-77D32D7DBD43"}
 */
var codigo = 'null';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E9A3BF81-DD39-4CA1-9E5D-F2944FB72ED7"}
 */
var analisis = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"658146A8-184D-4B85-A162-1FE498415735"}
 */
function onAction_registro(event){
	
	cerrarForm();
	var item = new Object();
	item.codigo = foundset['codigo'];
	item.analisis = foundset['analisis'];
	item.cantidad = '1';
	item.ana19 = foundset['ana19'];
	item.ana24 = foundset['ana24'];
	item.ana21 = foundset['ana21'];
	item.ana3 = foundset['ana3'];
	item.anaestado = foundset['anaestado'];
	item.ana25 = foundset['ana25'];
	item.ana30 = foundset['ana30'];
	item.anasinourg = foundset['anasinourg'];
	item.ana40 = foundset['ana40'];
	
	forms[$_callerFormName].agregarItem(item,true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"468556A5-955D-4E5B-878A-4B7D2E7BC74C"}
 */
function onAction_elementField(event) {
	
	elements.btn_seleccionar.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"786263EB-75F6-493B-8433-AB10C29A3B8D"}
 */
function cerrarForm () {
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
}
