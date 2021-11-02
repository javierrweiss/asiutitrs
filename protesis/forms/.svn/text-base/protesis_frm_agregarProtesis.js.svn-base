/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2035C2A2-E84F-452C-AA9D-D4C060984F5C"}
 */
var f_codigoProtesis = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A216EF8-CE39-49AF-BE1C-8AA074A3C724"}
 */
var f_observacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BBE10BB8-8DB7-4DDC-A564-FBC655C40F5D"}
 */
var f_protesis = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B98FB17-8850-4A9A-9065-14F742F85BE9"}
 */
function onAction_busquedaRapidaProtesis(event) {
	globals.gbl_protesisCodDesc = f_protesis;
	if(globals.gbl_protesisCodDesc != '' && globals.gbl_protesisCodDesc != null){
		globals.gbl_eventSourceButton = 0;
		openSearchProtesis();
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención",'Debe ingresar código o descripción de protesis.',"Aceptar")
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE9A875C-32ED-4D57-A1CB-93FAC4117794"}
 */
function onAction_buscarProtesis(event) {
	globals.gbl_eventSourceButton = 1;
	openSearchProtesis();
}

/**
 * @properties={typeid:24,uuid:"11E0B11E-9BDE-4BEF-A230-FD77F6D8D283"}
 */
function openSearchProtesis(){
	
	if('Si' != null){
		
		// Protesis
		if(0 == 0){
			var win = application.createWindow("seleccion_protesis",JSWindow.MODAL_DIALOG);	
		    win.title= 'Búsqueda de Protesis';
		    win.resizable = false;
		    win.show(forms.protesis_buscarProtesis_dg);
		    elements.txt_protesis.requestFocus();
		    
		}
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención",'Debe seleccionar tipo de paciente.',"Aceptar")
	}
}
