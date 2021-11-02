/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"094EBE4E-ED0B-4FAC-841F-8CB6451CED15"}
 */
var $_varName = null;

/**
 * @properties={typeid:35,uuid:"8FA27135-7489-4349-8E4C-F9FC85BD639B",variableType:-4}
 */
var f_cerrar = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D1308473-7AD0-4E63-BE57-E13E05B984C7"}
 */
var f_motivo = '';

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"FD099B02-D728-4829-B801-1E8BD9B46634"}
 */
function onShow(firstShow, event) {
	
	f_motivo = '';
	f_cerrar = false;
	elements.txt_motivo.requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE573EF4-1550-4523-8946-09A566B318FF"}
 */
function onAction_btnAceptar(event) {
	//forms.Palab_frm_palab_inter.grabar_TextoMotivo(2526,f_motivo);
	if(utils.stringTrim(f_motivo).length > 0){
		
		//var result = globals.DIALOGS.showQuestionDialog('¡Atención!', '¿ Confirma motivo y fundamento ?', 'Si', 'No');
		//if(result == 'Si'){
			forms.Palab_frm_palab_inter[$_varName] = f_motivo;
			cerrarForm();
		//}
	}
	else{
		globals.DIALOGS.showWarningDialog('Atención','Debe ingresar motivo y descripción.')
		elements.txt_motivo.requestFocus();
	}
}

/**
 * @properties={typeid:24,uuid:"4D5CB4E2-B709-4630-A5DF-53D1FDC9AD25"}
 */
function cerrarForm () {

	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		
		f_cerrar = true;
		$win.hide();
		$win.destroy();
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D3A74190-5274-4AF7-87C6-C5813D7B94BF"}
 */
function onHide_cerrarform(event) {
	// TODO Auto-generated method stub
	return f_cerrar;
}
