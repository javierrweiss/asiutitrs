/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"94C70AD0-7A5C-42A7-8BC0-4AD0D47B916B",variableType:4}
 */
var prote_activoFormBuscarInterven = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DB94A962-F8EF-4687-A3B9-575D92BD5993",variableType:4}
 */
var prote_activoFormBuscarMedico = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DEA22D44-7E85-4604-AAC8-F76B43619B7F"}
 */
var prote_intervenAlfa = null;

/**
 * @properties={typeid:35,uuid:"609E67EA-311A-4986-BC76-D3FABBD7C464",variableType:-4}
 */
var prote_permisos = new Array();

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1753DB00-1D47-433B-BD57-C8BB1B0F0D6A"}
 */
var prote_intervencion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"242BF3A6-3F06-4CFE-93E3-6162CB022FC7"}
 */
var prote_diagnostico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"09502979-4908-4452-9016-BFDCC559DB34"}
 */
var protesis_resumen = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BDC36D71-B8B6-46BB-A110-F580A8EA0103"}
 */
var protesis_observacion = null;

/**
 * @properties={typeid:35,uuid:"1D0D916A-6A56-47A5-A362-048CD09F3380",variableType:-4}
 */
var gbl_protesisNuevoItem = true;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2C1B8A83-61D6-47B8-AC80-2AFC5E2C89AD",variableType:4}
 */
var gbl_protesis_codObraSocial = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"998E1F28-B1EA-4372-B0E0-BB0759C1B8CE"}
 */
var gbl_protesisCodDesc = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F9672692-1DB0-4770-9E60-F1B85C0EAD8F"}
 */
var gbl_protesisDescripcion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D6D45E3E-AF3C-47C2-ABDC-A0FA4C2D37E8",variableType:4}
 */
var gbl_protesisCodigo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"58D2AA3B-3112-4ED2-8CD2-559871A4E0E1",variableType:4}
 */
var gbl_eventSourceButton = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"34D65076-0EF9-4080-A408-DFFED5E13BBA",variableType:4}
 */
var gbl_activoFormBuscarInternado = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"20C2A1B4-4D27-41C1-9FFC-1F29A030FFDF"}
 */
var pHisclistrynro = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4D5C9356-ED8E-4722-B287-0BE067C18174"}
 */
var gbl_apeynom_protesis = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E63BAD6A-1953-43BE-BCBF-B6D7DC30FDF7",variableType:4}
 */
var gbl_hiscli_protesis = 0;

/**
 * @properties={typeid:24,uuid:"14A96D95-95DA-49A1-B9D4-CB7582CEC12D"}
 */
function onSolutionOpen_Protocolos() {
	plugins.window.getMenuBar().setVisible(false)
    plugins.window.setToolBarAreaVisible(false)
    
    var names1 = plugins.window.getToolbarNames();
    for (var i = 0 ; i < names1.length ; i++) {
         plugins.window.removeToolBar(names1[i])
    }    
    plugins.window.setFullScreen(false)
    plugins.window.getMenuBar().setVisible(false)
    plugins.window.setToolBarAreaVisible(false)
	plugins.window.setStatusBarVisible(false);
    
    databaseManager.setAutoSave(false);
}

/**
 * @properties={typeid:24,uuid:"39779A58-4686-4B7E-8B89-A3D492E846D4"}
 */
function formatearNumeroIntervencion(codigo) {
	var hiscli1 = codigo.toString();
	switch (hiscli1.length){
		case 2:	hiscli1 = hiscli1.substr(0,1)+'/'+hiscli1.substr(1,1);break;
		case 3:	hiscli1 = hiscli1.substr(0,2)+'/'+hiscli1.substr(2,1);break;
		case 4:	hiscli1 = hiscli1.substr(0,3)+'/'+hiscli1.substr(3,1);break;
		case 5:	hiscli1 = hiscli1.substr(0,4)+'/'+hiscli1.substr(4,1);break;
		case 6:	hiscli1 = hiscli1.substr(0,5)+'/'+hiscli1.substr(5,1);break;
		case 7:	hiscli1 = hiscli1.substr(0,6)+'/'+hiscli1.substr(6,1);break;
		case 8:	hiscli1 = hiscli1.substr(0,7)+'/'+hiscli1.substr(7,1);break;
	}	
	return hiscli1;
}

/**
 * @properties={typeid:24,uuid:"4C8F2F36-20FE-44E5-BFAF-0B68C365125D"}
 */
function prote_formatearFecha() {
	var fecha = '';
	if(arguments[0] != null)
		fecha = arguments[0].toString().substr(8,2)+"/"+arguments[0].toString().substr(5,2) + "/"+ arguments[0].toString().substr(0,4);
	
	return fecha;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param args
 *
 * @properties={typeid:24,uuid:"A9F06C3D-9C02-486C-B6E9-80AE3620CE20"}
 */
function llamada_desde_Menu(args) {
	
	// Trae datos desde el Menu
	args = args.toString()
	args=args.split(';') 
	globals.vLegajo=utils.stringToNumber(args[0])
	globals.vLega=utils.stringToNumber(args[1])
	globals.vOperador=args[2]
	globals.vTipoOperador=utils.stringToNumber(args[3])
	globals.gbl_transacciones_1= 0 //args[4] 
	globals.vEmpresa=args[5]
	globals.gbl_expanding_Nodes=args[6]
	globals.gbl_title= 'Recepción de Prótesis e Implantes Quirúrgicos'
	forms.frm_menu.elements.frm_main.dividerLocation = 0.20	// divide ventana
	application.updateUI()
	
	//Cargar permisos
	var $ip         = application.getIPAddress()
	var $solucion   =  application.getSolutionName()	
	var $Args       = new Array()
	var $SQL ="select  PERF.codigo_perfil, PERF.codigo_solucion, PERF.codigo_formulario, PERF.codigo_elemento, " 
             +"PERF.visible, PERF.accesible "
	         +"from tbl_permiso "
             +"left join tbl_perfil_itm PERF on tbl_permiso.codigo_perfil = PERF.codigo_perfil "             
             +"where tbl_permiso.codigo_legajo = "
             + globals.vLega
			 if (globals.vLega == 0){
				 $SQL = $SQL + " and ip = '"
				 + $ip + "'"
			 }
			 $SQL = $SQL + " and PERF.codigo_solucion = '"
			 + $solucion
             +"' order by PERF.codigo_perfil asc, PERF.codigo_solucion asc, PERF.codigo_formulario asc, PERF.codigo_elemento asc"
    globals.prote_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.prote_permisos.getMaxRowIndex()
	if(!$max){ return}	
    
	//Muestra Formulario Principal
	var win = application.createWindow("Menu_item",JSWindow.MODAL_DIALOG)	
    win.title= globals.gbl_title
    win.resizable = true	
    win.show(forms.prote_frmRecepcionProtesis)
	win.destroy()
	
	}

	/**
	 * @properties={typeid:24,uuid:"821F0B34-B615-4529-8DA1-64504A600DF7"}
	 */
	function prote_getTipoPrioridad() {
		
		var prioridad = '';
		if(arguments[0] != null )
			prioridad = application.getValueListDisplayValue('vl_tipoPrioridad', arguments[0]);
		
		return prioridad;
	}

/**
 * @properties={typeid:24,uuid:"2C8D4D7D-4A4B-40A4-8B4F-8660290C88D6"}
 */
function getNoSi() {
	
	var text = '';
	if(arguments[0] != null )
		text = application.getValueListDisplayValue('vl_NoSi', arguments[0]);
	
	return text;
}

/**
 * @properties={typeid:24,uuid:"740B2AB8-BF0A-4F12-A891-BD78521921AC"}
 */
function prote_getTipoNovedad() {
	var text = '';
	if(arguments[0] != null )
		text = application.getValueListDisplayValue('vl_tipoNovedad', arguments[0]);
	
	return text;
}

/**
 * @properties={typeid:24,uuid:"40DB6AD8-5FF7-4D1F-BC00-E72977AD0AA8"}
 */
function prote_controlarElementos($form) {
	
	var $tope_form = globals.prote_permisos.getMaxRowIndex()
	var $element = forms[$form].elements.allnames
	var $tope_elem = $element.length
	
	for (var i = 1; i <= $tope_form; i++){		
		if ($form == globals.prote_permisos.getValue(i,3)){
			for(var j=0;j <= $tope_elem; j++){
				if($element[j]== globals.prote_permisos.getValue(i,4)){
					if(globals.prote_permisos.getValue(i,5)==true){
						forms[$form].elements[$element[j]].visible = true
					}else{
						forms[$form].elements[$element[j]].visible = false
					}
					if(globals.prote_permisos.getValue(i,6)==true){
						forms[$form].elements[$element[j]].enabled = true
					}else{
						forms[$form].elements[$element[j]].enabled = false
					}
					j = 99
				}
			}
		}
	}
}
