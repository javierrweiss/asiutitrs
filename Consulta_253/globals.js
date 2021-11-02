/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E7E77661-C7A6-4B62-87CE-45B642EDC032"}
 */
var gbl_Form = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"751D1417-A017-4751-890C-4DBC91EB5B3D",variableType:4}
 */
var gbl_orienta = 0;
/**
 * @properties={typeid:35,uuid:"ADC64454-B8FE-421E-84F7-4220E2F4BBA6",variableType:-4}
 */
var gbl_hist_clin = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"067F562E-90D4-412D-9AF4-C9DA5AB2E229",variableType:4}
 */
var hisclin = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"376FEFE1-9079-405F-A5FE-7E3CDF5DCB49"}
 */
var apeynom = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9464DE8E-2EFD-404A-BFF7-D2E418709C89",variableType:4}
 */
var gbl_solicitud = 0;

/**
 * @properties={typeid:35,uuid:"92A6313C-DF29-4A94-9205-A1386E103375",variableType:-4}
 */
var gbl_total_practicas_des = new Array();

/**
 * @properties={typeid:35,uuid:"E59ECF11-1D88-4DF2-AAF1-A02BCA430E4B",variableType:-4}
 */
var gbl_total_practicas_cod = new Array();

/**
 * @properties={typeid:35,uuid:"2894BC1F-1275-4D06-A1F6-1D9768796415",variableType:-4}
 */
var gbl_total_practicas = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E65B02E1-0AD5-4FC9-82B1-6B94881D25EC",variableType:4}
 */
var gbl_tip_nom = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CB8A2948-94E7-46B0-B4DC-730B573420D7",variableType:4}
 */
var gbl_cod_nom = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5F5A3C29-4EC9-417A-81E1-9F5EDC88BD1D"}
 */
var gbl_txt_observaciones = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"485EE5D1-98E8-4B09-8D2F-24B31BA2F270",variableType:4}
 */
var gbl_vClose = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C35EE838-9662-47D0-A509-A9AAA1A3566D",variableType:4}
 */
var gbl_fecha_hasta_cbl = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E4762AD3-D637-4818-A16E-2CBA48708284",variableType:4}
 */
var gbl_fecha_desde_cbl = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A66A35F6-1936-4B75-ACA4-A3B1C0126CFB",variableType:93}
 */
var gbl_con_fecha_desde = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"507CE2CC-DDD0-4C72-BBE6-70995866AEFE",variableType:93}
 */
var gbl_con_fecha_hasta = null;

/**
 * 
 * @param formname
 * @param rec
 *
 * @properties={typeid:24,uuid:"D3AADF91-9E0A-402B-A61D-6154AF0C78E6"}
 */
function printRoutine(formname, rec) {
	gbl_Form = formname;
	gbl_orienta = 1
	//var oneRecord = rec;

	//if(!oneRecord) oneRecord = false

	if(!gbl_Form) return;
	
	var win = application.createWindow("prn",JSWindow.MODAL_DIALOG)	
	win.title= ' '
	win.resizable = true
	win.setSize(1300,800)
	solutionModel.removeForm
	win.show(forms.prn_previous)
	win.hide()
	win.destroy()
    //forms[frm].controller.setPageFormat(210,297,5,5,10,10,1,0)
	//forms[frm].controller.showPrintPreview(oneRecord)
	//forms[frm].controller.print(oneRecord)
}

/**
 * 
 * @param args
 *
 * @properties={typeid:24,uuid:"A30DD2CA-1315-419F-B10B-1ECD41B62D95"}
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
win.show(forms.frm_cons_solicitud_anatomia_253)
win.destroy()
}
