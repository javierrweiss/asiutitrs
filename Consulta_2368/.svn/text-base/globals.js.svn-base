/**
 * @properties={typeid:35,uuid:"1E2DF09E-623A-4A2B-8E3F-F504577B66F5",variableType:-4}
 */
var consulta_2368_permisos = new Array();

/**
 * @properties={typeid:35,uuid:"FDDB843E-7672-4281-B772-A362A6046AD3",variableType:-4}
 */
var gbl_cerrarConsultaRegistro = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"51ACCE58-D5CA-41E3-A982-1743308DA201"}
 */
var gbl_tempHTML = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0DF24458-C345-4846-BDFD-4FD8981FAC02"}
 */
var gbl_column3 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"722D1290-C5EC-4FA1-9E91-4C7EB3877710"}
 */
var gbl_column2 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"22EC7D0B-3CAF-4C1D-8A83-56AF1AE06ED8"}
 */
var gbl_column1 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EB1613C9-081E-45DE-B7C5-564C5D7CF1F1"}
 */
var gbl_column0 = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"99F6D152-53CC-48A6-B444-97EB8F2A1908",variableType:4}
 */
var gbl_vArticulo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8B30AB05-2D29-4B7E-912F-C56121C2A85C",variableType:4}
 */
var gbl_vTipoArt = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"198AB274-5287-40B3-B0A3-602380EAC34E"}
 */
var gbl_evaluacionText = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9DE4ED5F-B6BA-4213-B3BE-8B9CD367EC47",variableType:4}
 */
var gbl_historiaClinica = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B0030BDF-48FE-4BF5-8586-068D19FB6B41",variableType:4}
 */
var gbl_protocolo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FFEBAD6F-45F6-4361-9280-1D9448611461",variableType:4}
 */
var gbl_parUltNumero_1 = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"72642C56-B9DC-4C10-8173-639C53D89367",variableType:4}
 */
var gbl_grupo = 0;

/**
 * @properties={typeid:24,uuid:"01C94D25-3481-4BC8-AF43-C9BE813D8FD0"}
 */
function convertNumbertToDate_DDMMAAAA() {
		
	var fecha = '';
	if(arguments[0] != '0')
		fecha = arguments[0].toString().substr(6,2)+"/"+arguments[0].toString().substr(4,2)+"/"+arguments[0].toString().substr(0,4);
	
	return fecha;
}

/**
 * @properties={typeid:24,uuid:"705B7BBD-27EE-42DE-A600-7D34D6BAAC07"}
 */
function convertNumberToLegajo() {
	var leg = '';
	if(arguments[0] != '0')
		leg = arguments[0].toString().substr(0,(arguments[0].toString().length - 1))+"/"+arguments[0].toString().substr((arguments[0].toString().length - 1),1);
	
	return leg;
}

/**
 * @properties={typeid:24,uuid:"F597749D-A278-478A-A43B-1240D19C4D46"}
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
 * @properties={typeid:24,uuid:"DD0BD10F-876F-4CDE-B32D-D0A0D2D78B03"}
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
 * 
 * @param args
 *
 * @properties={typeid:24,uuid:"657E8FA5-A6D9-4963-9C35-4212A529864D"}
 * @AllowToRunInFind
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
	globals.gbl_title= 'Libro de Contabilidad'
	forms.frm_menu.elements.frm_main.dividerLocation = 0.20	// divide ventana
	application.updateUI()
	
	//Cargar permisos
	var $ip         = application.getIPAddress()
	var $solucion   =  application.getSolutionName()	
	var $Args       = new Array()
	var $SQL ="select  PERF.codigo_perfil, PERF.codigo_solucion, PERF.codigo_formulario, PERF.codigo_elemento, " 
             +"PERF.visible, PERF.accesible, SOL.control_acceso "
	         +"from tbl_permiso "
             +"left join tbl_perfil_itm PERF on tbl_permiso.codigo_perfil = PERF.codigo_perfil " 
             +"left join tbl_solucion SOL on PERF.codigo_solucion = SOL.codigo "           
             +"where tbl_permiso.codigo_legajo = "
             + globals.vLega
			 if (globals.vLega == 0){
				 $SQL = $SQL + " and ip = '"
				 + $ip + "'"
			 }
			 $SQL = $SQL + " and PERF.codigo_solucion = '"
			 + $solucion
             +"' order by PERF.codigo_perfil asc, PERF.codigo_solucion asc, PERF.codigo_formulario asc, PERF.codigo_elemento asc"
    globals.consulta_2368_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.consulta_2368_permisos.getMaxRowIndex()
	if(!$max){ return}	
	//Pide legajo si la Solucion lo requiere
    if(globals.consulta_2368_permisos.getValue(1,7)== true){
    	var win = application.createWindow("Legajo",JSWindow.MODAL_DIALOG)	
        win.title= 'Legajo'
        win.resizable = false
        win.show(forms.psw_legajo)
		win.destroy()
		if(globals.gbl_user == false){return}
    }
  //Pide legajo si el Formulario lo requiere
    if(globals.consulta_2368_permisos.getValue(1,7)== false){	    	 
		 var fs = databaseManager.getFoundSet("desal","tbl_formulario")
		 fs.find()
		 fs['codigo_solucion']= $solucion
		 fs['codigo']= 'MostrarArchivos_frm_link_tab'
		 fs.search()
		 if(fs.getSize()>0 && fs['control_acceso'] == 1){
		   	 win = application.createWindow("Legajo",JSWindow.MODAL_DIALOG)	
             win.title= 'Legajo'
             win.resizable = false
             win.show(forms.psw_legajo)
	 	     win.destroy()
	 	     if(globals.gbl_user == false){return}
		 }			 	          
    }
	//Muestra Formulario Principal
	win = application.createWindow("Menu_item",JSWindow.MODAL_DIALOG)	
    win.title= globals.gbl_title
    win.resizable = true	 
    win.show(forms.frm_libro_transfusiones_e_s)
	win.destroy()
}

/**
 * 
 * @param $form
 *
 * @properties={typeid:24,uuid:"93CF8A86-13B2-47F6-8244-B9753BCE3520"}
 */
function consulta_2368_controlarElementos($form) {
	var $tope_form = globals.consulta_2368_permisos.getMaxRowIndex()
	var $element = forms[$form].elements.allnames
	var $tope_elem = $element.length
	
	for (var i = 1; i <= $tope_form; i++){		
		if ($form == globals.consulta_2368_permisos.getValue(i,3)){
			for(var j=0;j <= $tope_elem; j++){
				if($element[j]== globals.consulta_2368_permisos.getValue(i,4)){
					if(globals.consulta_2368_permisos.getValue(i,5)==true){
						forms[$form].elements[$element[j]].visible = true
					}else{
						forms[$form].elements[$element[j]].visible = false
					}
					if(globals.consulta_2368_permisos.getValue(i,6)==true){
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