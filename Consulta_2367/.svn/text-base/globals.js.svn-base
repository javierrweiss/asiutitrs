/**
 * @properties={typeid:35,uuid:"906D1421-3BB5-4441-AFC1-8094846B0058",variableType:-4}
 */
var consulta_2367_permisos = new Array();


/**
 * @properties={typeid:35,uuid:"06F75884-DB87-4BD9-B013-77D67E16B0F7",variableType:-4}
 */
var gbl_cerrarConsultaRegistro = false;


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D28008F9-2503-4AA9-B88F-96DC3C55803E"}
 */
var gbl_tempHTML = '';


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F18CE924-1DB0-4F66-8C0A-AED548C24141"}
 */
var gbl_column3 = '';


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CDB02D54-A3F4-4780-9686-E2F5B1D1FCE9"}
 */
var gbl_column2 = '';


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"417822DC-48DF-4BF5-9E4D-BA7819E03376"}
 */
var gbl_column1 = '';


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B65E11E8-515F-4EF0-B0B7-6C3B37735F7C"}
 */
var gbl_column0 = '';


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BD9B3F5A-73AB-487A-BBD7-1812634A490A",variableType:4}
 */
var gbl_vArticulo = 0;


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D8BDCC8A-572D-4295-9FEF-171937E5D1D5",variableType:4}
 */
var gbl_vTipoArt = 0;


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A211DF10-7C8F-4EFA-B94B-2D9E46F8DA6A"}
 */
var gbl_evaluacionText = '';


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FCB0F412-C8A3-46D6-B7C7-DC64D4020CAB",variableType:4}
 */
var gbl_historiaClinica = 0;


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C94FA0FC-0DAF-4D7E-AC53-E4BDE2914779",variableType:4}
 */
var gbl_protocolo = 0;


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D859545C-8CAE-4E33-A4AA-A0778098CF5C",variableType:4}
 */
var gbl_parUltNumero_1 = 0;


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6711EA16-4F5A-4612-B8D7-48AD67577BB5",variableType:4}
 */
var gbl_grupo = 0;


/**
 * @properties={typeid:24,uuid:"C90C3D34-6A01-4142-9281-3174487EB91B"}
 */
function convertNumbertToDate_DDMMAAAA() {
		
	var fecha = '';
	if(arguments[0] != '0')
		fecha = arguments[0].toString().substr(6,2)+"/"+arguments[0].toString().substr(4,2)+"/"+arguments[0].toString().substr(0,4);
	
	return fecha;
}


/**
 * @properties={typeid:24,uuid:"180B5D87-70FC-4714-90FA-BB139511A9D5"}
 */
function convertNumberToLegajo() {
	var leg = '';
	if(arguments[0] != '0')
		leg = arguments[0].toString().substr(0,(arguments[0].toString().length - 1))+"/"+arguments[0].toString().substr((arguments[0].toString().length - 1),1);
	
	return leg;
}


/**
 * @properties={typeid:24,uuid:"A14C3BDC-4320-4191-B61F-2EE09366C306"}
 */
function convertNumberToHour_HHMM() {
	
	var hora = '';
	
	switch(arguments[0].toString().length){
		
		case 1: 
			hora = '00:0'+ arguments[0].toString();
			break;
		case 2:
			hora = '00:'+ arguments[0].toString();
			break;
		case 3:
			hora = '0'+ arguments[0].toString().substr(0,1) + ':' + arguments[0].toString().substr(1,2);
			break;
		case 4:
			hora = arguments[0].toString().substr(0,2) + ':' + arguments[0].toString().substr(2,2);
			break;
		default:
			hora = '';
			break;
	}

	return hora;
}

/**
 * @properties={typeid:24,uuid:"164D6985-86BD-4536-AADF-C794D5E199C9"}
 */
function onSolutionOpen_Registro() {
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
    databaseManager.setAutoSave(false)
}


/**
 * @param args
 *
 * @properties={typeid:24,uuid:"AACFFD3E-B609-49AE-8853-20355955E27F"}
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
	globals.gbl_title= 'Libro de Pacientes Internados'
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
    globals.consulta_2367_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.consulta_2367_permisos.getMaxRowIndex()
	if(!$max){ return}	
    
	//Muestra Formulario Principal
	var win = application.createWindow("Menu_item",JSWindow.MODAL_DIALOG)	
    win.title= globals.gbl_title
    win.resizable = true	 
    win.show(forms.frm_libro_transfusiones)
	win.destroy()
}

/**
 * @param $form
 *
 * @properties={typeid:24,uuid:"2C6B518B-DE93-43CB-961A-EE55FA977E23"}
 */
function consulta_2367_controlarElementos($form) {
	var $tope_form = globals.consulta_2367_permisos.getMaxRowIndex()
	var $element = forms[$form].elements.allnames
	var $tope_elem = $element.length
	
	for (var i = 1; i <= $tope_form; i++){		
		if ($form == globals.consulta_2367_permisos.getValue(i,3)){
			for(var j=0;j <= $tope_elem; j++){
				if($element[j]== globals.consulta_2367_permisos.getValue(i,4)){
					if(globals.consulta_2367_permisos.getValue(i,5)==true){
						forms[$form].elements[$element[j]].visible = true
					}else{
						forms[$form].elements[$element[j]].visible = false
					}
					if(globals.consulta_2367_permisos.getValue(i,6)==true){
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
