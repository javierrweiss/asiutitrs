/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"19B7DD72-7038-4FAF-8A7F-6DDCC6CFC905"}
 */
var gbl_Form = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7ED71555-B1E8-4EC3-9D43-71236C949E83",variableType:4}
 */
var gbl_orienta = 0;
/**
 * @properties={typeid:35,uuid:"4F35F047-4AE8-4073-B1DB-54C46D20FA73",variableType:-4}
 */
var gbl_vClose = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9BBE9218-D140-4E0A-81B9-75C09BDD4903",variableType:-4}
 */
var gbl_tot_totales = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"05600F40-7D33-4C10-BC6F-8C3E270123F0",variableType:-4}
 */
var gbl_tot_fecha = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"458D0969-CC90-4636-AE5B-9C31A138A41F",variableType:-4}
 */
var gbl_tot_ambulatorio = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"229B93C5-C895-4557-9C4C-116735A17FBE",variableType:-4}
 */
var gbl_tot_internado = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"06C50AF0-1E16-4E82-AA69-E7A98534F406",variableType:-4}
 */
var gbl_tot_urgente = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D312E806-52DF-4205-A1FB-594A062D35FD",variableType:4}
 */
var gbl_fecha_hasta_cbl = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2CEFAEDB-F550-4364-9646-8E039AF51771",variableType:4}
 */
var gbl_fecha_desde_cbl = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"53A3984D-3642-47F6-B46C-B45905105C53"}
 */
var gbl_con_cobertura_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E398D110-01C2-4C3C-A513-33BC26D2454F",variableType:8}
 */
var gbl_con_turnos = 0;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"043F6E47-E937-406B-B475-D1F653BBBA0D",variableType:93}
 */
var gbl_con_fecha_hasta = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"607A0427-5360-4AB5-BD88-369A84AE5031",variableType:93}
 */
var gbl_con_fecha_desde = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"189E8B08-9647-4845-9D16-BCE655302497",variableType:4}
 */
var gbl_con_quirofano_hasta = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D615E722-3044-4D7D-A908-BD28038DE702",variableType:4}
 */
var gbl_con_quirofano_desde = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"38DA5843-74AC-4981-BA8B-3B08C9C3AC3C"}
 */
var gbl_con_profesional_apeynom = null;

/**
 * @param {String} formname //formname
 * 
 * @param {Object} rec //record
 * @properties={typeid:24,uuid:"09ABC157-0430-4116-88F7-49D455BC14E4"}
 */
function printRoutine(formname, rec) {
		gbl_Form    = formname;
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
 * Callback method for when solution is closed, force boolean argument tells if this is a force (not stopable) close or not.
 *
 * @param {Boolean} force if false then solution close can be stopped by returning false
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"FEF891E5-647F-4AE2-8827-9F60CA6E09FA"}
 */
function onSolutionClose_consulta_cierra(force) {
	return globals.gbl_vClose
}

/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"16283565-FC58-4AA5-BEC5-776333FFA781"}
 */
function onSolutionOpen_consulta() {
	globals.gbl_vClose = false
}

/**
 * @param args
 *
 * @properties={typeid:24,uuid:"3BF6059A-AC52-4D4A-A671-94DDE95201A3"}
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
	win.show(forms.frm_cons_turnos_quirofano_515)
	win.destroy()
}
