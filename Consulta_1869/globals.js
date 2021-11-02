/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CC2FA132-3EBE-4CF9-86BF-AC6F09E71F10"}
 */
var gbl_Form = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A8AEB8F9-6016-4504-AABE-6D2CB1F86C3B",variableType:4}
 */
var gbl_orienta = 0;
	
/**
 * @type {Number}
 * @properties={typeid:35,uuid:"F01EF8E9-8D71-486B-B813-663698F36780",variableType:-4}
 */
var gbl_con_total_motivo_des = new Array();
/**
 * @type {Number}
 * @properties={typeid:35,uuid:"CD4E67F8-8992-4CCF-A332-AB84E5CEE67B",variableType:-4}
 */
var gbl_con_total_obra_des = new Array();
/**
 * @type {Number}
 * @properties={typeid:35,uuid:"7B8A5948-436E-453A-A521-9BCF67D5A0C3",variableType:-4}
 */
var gbl_con_total_medico_des = new Array();
/**
 * @type {Number}
 * @properties={typeid:35,uuid:"81BA5F99-C378-4125-9C87-429B8E223625",variableType:-4}
 */
var gbl_con_total_especialidad_des = new Array();

/**
 * @type {Number}
 * @properties={typeid:35,uuid:"6786D17D-E2B6-4728-BA88-5573F2066338",variableType:-4}
 */
var gbl_con_total_especialidad = new Array();

/**
 * @type {Number}
 * @properties={typeid:35,uuid:"AAD7B3BA-BA8B-48E9-9587-3E2A788E7A83",variableType:-4}
 */
var gbl_con_total_medico = new Array();

/**
 * @type {Number}
 * @properties={typeid:35,uuid:"44B662B0-8D1C-48DF-910F-04E0A029EC12",variableType:-4}
 */
var gbl_con_total_obra = new Array();

/**
 * @type {Number}
 * @properties={typeid:35,uuid:"2F98584D-10C0-4F4A-A8B4-FDDA4760683A",variableType:-4}
 */
var gbl_con_total_motivo = new Array();

/**
 * @properties={typeid:35,uuid:"ACB78E9D-A0CF-4EE8-9C4A-465D77711E08",variableType:-4}
 */
var gbl_con_resumen_motivo = false;

/**
 * @properties={typeid:35,uuid:"4905C1E1-63C6-4319-844F-C8C92BE9D9A0",variableType:-4}
 */
var gbl_con_resumen_obra = false;

/**
 * @properties={typeid:35,uuid:"AA59DECF-4420-4627-A178-7B0516A7C134",variableType:-4}
 */
var gbl_con_resumen_medico = false;

/**
 * @properties={typeid:35,uuid:"6CC2475E-5907-42BF-AE53-0B7257E6F7EE",variableType:-4}
 */
var gbl_con_resumen_especialidad = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B9EFD9D0-CBA2-472F-AF46-CD31F60EF8EF",variableType:4}
 */
var gbl_con_tipo_reporte = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"84E2D1A1-EE11-45E4-9C6E-CC8BA7B619E4",variableType:4}
 */
var gbl_fecha_hasta_cbl = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"905C568B-5461-4E26-9C51-4474912CDB42",variableType:4}
 */
var gbl_fecha_desde_cbl = 0;

/**
 * @properties={typeid:35,uuid:"9C33EB3C-905F-40A0-97EE-D45697479C3D",variableType:-4}
 */
var gbl_vClose = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7E89387A-F34F-4E53-81BE-CD73D9CCF4F0"}
 */
var gbl_con_cobertura_nombre = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"756FF4A0-EE80-43D9-9006-61958EBB5870"}
 */
var gbl_con_motivo_nombre = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"72B7C0D4-A94F-46FB-BDD1-9BBA67FD6078",variableType:93}
 */
var gbl_con_fecha_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"CD2D9C86-2ED7-4C5F-B4EC-63EE6DED0ECA",variableType:93}
 */
var gbl_con_fecha_desde = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"38E2BA0D-ED33-4226-9C88-979876F3B103",variableType:4}
 */
var gbl_con_tipo_histcli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8A8A38E8-2831-405C-B9B7-C71E8EC27506"}
 */
var gbl_con_profesional_apeynom = null;

/**
 * Callback method for when solution is closed, force boolean argument tells if this is a force (not stopable) close or not.
 *
 * @param {Boolean} force if false then solution close can be stopped by returning false
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6FEC5A61-E356-40D8-B788-5B5CB803431A"}
 */
function onSolutionClose_consulta_cierra(force) {
	return globals.gbl_vClose
}

/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"A8B01D9D-5580-4892-BF20-D49AA96C9F26"}
 */
function onSolutionOpen_consulta() {
	globals.gbl_vClose = false	
}

/**
 * @param {String} formname //formname
 * 
 * @param {Object} rec //record
 * @properties={typeid:24,uuid:"346A09A9-F909-49D6-B8AC-94998F471BBD"}
 */
function printRoutine(formname, rec) {
	gbl_Form = formname
	gbl_orienta = 1 
	var oneRecord = rec
	if(!oneRecord) oneRecord = false
	if (!gbl_Form) return
	var win = application.createWindow("prn",JSWindow.MODAL_DIALOG)	
	win.title= ' '
	win.resizable = true
	win.setSize(1300,800) 
	solutionModel.removeForm
	win.show(forms.prn_previous)
	win.hide()
	win.destroy()
	
	//forms[frm].controller.setPageFormat(210,297,5,5,10,10,1,0)	
	//forms[gbl_Form].controller.showPrintPreview(oneRecord)
	//forms[gbl_Form].controller.print(oneRecord)
}
/**
 * @param args
 *
 * @properties={typeid:24,uuid:"C4EDBC77-5107-4F13-B5A0-D505DF1E81BC"}
 */
function llamada_desde_Menu(args) {
	
	// Trae datos desde el Menu
	args = args.toString()
	args=args.split(';')
	globals.vLegajo=utils.stringToNumber(args[0])
	globals.vLega=utils.stringToNumber(args[1])
	globals.vOperador=args[2]
	globals.vTipoOperador=utils.stringToNumber(args[3])
	globals.gbl_transacciones_1=utils.stringToNumber(args[4])
	globals.vEmpresa=args[5]
	globals.gbl_expanding_Nodes=args[6]
	globals.gbl_title= ' '
		
	//Muestra Formulario Principal
	var win = application.createWindow("Menu_itm",JSWindow.MODAL_DIALOG)	
	win.title= globals.gbl_title
	win.resizable = false
	win.show(forms.frm_cons_cirugias_suspendidas_1869)
	win.destroy()
}
