/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0E885DC8-1F36-444B-93EC-69CB6F4AFF0C"}
 */
var hora = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A902FE8D-6004-48EF-AE4B-31B463D928AA"}
 */
var dia = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2D35C1F1-984D-45B7-BCA3-4954449944D3"}
 */
var paciente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"243C714D-F949-4F74-B09A-4C1E02BFC0C4"}
 */
var histclin = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7B31350C-313D-45C6-88C9-431E9B53800A"}
 */
function onAction_seleccionar(event) {
	
	forms.Hojaenfer_frm_reimpresion_hoja.$_histClin = foundset['histclin'];
	forms.Hojaenfer_frm_reimpresion_hoja.f_cama = foundset['cama'];
	forms.Hojaenfer_frm_reimpresion_hoja.f_dia = foundset['dia'];
	forms.Hojaenfer_frm_reimpresion_hoja.f_habitacion = foundset['habita'];
	forms.Hojaenfer_frm_reimpresion_hoja.f_histClinUnica = foundset['histclinunica'];
	forms.Hojaenfer_frm_reimpresion_hoja.f_hora = foundset['hora'];
	forms.Hojaenfer_frm_reimpresion_hoja.f_turno = globals.Hojaenfer_getTurnoSegunhora(Number(foundset['hora']))
	
	globals.Hojaenfer_utic_utiliza = foundset['sector'];
	forms.Hojaenfer_frm_reimpresion_hoja.f_sector = hojaenfer_rel_busca_sector.utic_usoabrev;
	
	globals.Hojaenfer_histClinPrint = Number(foundset['histclin']);
	forms.Hojaenfer_frm_reimpresion_hoja.f_paciente =  hojaenfer_rel_busca_inter.hiscli2_hojaenfer + "  " + utils.stringTrim(hojaenfer_rel_busca_inter.adm_apelnom);

	forms.Hojaenfer_frm_reimpresion_hoja.elements.txt_paciente.enabled = false;
	forms.Hojaenfer_frm_reimpresion_hoja.elements.btn_imprimir.requestFocus();
	
	var $name = application.getActiveWindow().getName();
	var $win = application.getWindow($name);
	if($win!=null){
		$win.hide();
		$win.destroy();
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75DE5D23-9C05-4757-91A7-8B04B3946AB9"}
 */
function onAction_verDetalle(event) {
	elements.btn_seleccionar.requestFocus();
}

/**
 * Perform the element double-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"88C2A8F3-A791-454D-BE76-B53EED122955"}
 */
function onDoubleClick_selecciona(event) {
	onAction_seleccionar(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CB8767A3-F413-48F7-A429-82BD95FB314F"}
 */
function onAction_element(event) {
	elements.btn_seleccionar.requestFocus();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A830DD92-4287-4578-9CE0-4340945DDDB1"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	if(foundset.getSize() > 0)
		forms.Hojaenfer_tbl_reimpresion_hoja.elements.btn_seleccionar.requestFocus();
}
