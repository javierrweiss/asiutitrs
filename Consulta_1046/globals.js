/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9A4821FE-766C-4D22-B620-2E46547E794C",variableType:4}
 */
var consulta_1046_obra = 0;

/**
 * @properties={typeid:35,uuid:"42788A88-37F2-487B-B61A-C97D0B014F78",variableType:-4}
 */
var consulta_1046_permisos = new Array();


/**
 * @properties={typeid:24,uuid:"258C9F75-8204-4133-8144-75C945325900"}
 */
function onSolutionOpen_consulta_1046() {
	
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
 * TODO generated, please specify type and doc for the params
 * @param args
 *
 * @properties={typeid:24,uuid:"A47F89C8-8021-432B-A09E-A16C89DF6CFD"}
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
	globals.gbl_title= 'Consulta de Análisis Clínicos - Ambulatorios'
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
    globals.consulta_1046_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.consulta_1046_permisos.getMaxRowIndex()
	if(!$max){ return}	
    
	//Muestra Formulario Principal
	var win = application.createWindow("Menu_item",JSWindow.MODAL_DIALOG)	
    win.title= globals.gbl_title
    win.resizable = true	
    win.show(forms.consulta_1046_frm_analisis_clinicos)
	win.destroy()
	
	}

	/**
 * TODO generated, please specify type and doc for the params
 * @param $form
 *
 * @properties={typeid:24,uuid:"1E2A4154-466B-429F-9CF5-BDF0A01351AC"}
 */
function consulta_1046_controlarElementos($form) {
		var $tope_form = globals.consulta_1046_permisos.getMaxRowIndex()
		var $element = forms[$form].elements.allnames
		var $tope_elem = $element.length
		
		for (var i = 1; i <= $tope_form; i++){		
			if ($form == globals.consulta_1046_permisos.getValue(i,3)){
				for(var j=0;j <= $tope_elem; j++){
					if($element[j]== globals.consulta_1046_permisos.getValue(i,4)){
						if(globals.consulta_1046_permisos.getValue(i,5)==true){
							forms[$form].elements[$element[j]].visible = true
						}else{
							forms[$form].elements[$element[j]].visible = false
						}
						if(globals.consulta_1046_permisos.getValue(i,6)==true){
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

	/**
 * @properties={typeid:24,uuid:"088F2B82-2234-46CF-BE16-3437CF707005"}
 */
function consulta_1046_convertNumbertToDate_DDMMAAAA() {
		
		var fecha = '';
		if(arguments[0] != '0')
			fecha = arguments[0].toString().substr(6,2)+"/"+arguments[0].toString().substr(4,2)+"/"+arguments[0].toString().substr(0,4);
		
		return fecha;
	}

/**
 * TODO generated, please specify type and doc for the params
 * @param legajo
 *
 * @properties={typeid:24,uuid:"F44D6B9C-74BB-427F-A602-4840102A13E8"}
 */
function consulta_1046_convertNumberToLegajo(legajo) {
		var leg = '';
		if(legajo != '0')
			leg = legajo.toString().substr(0,(legajo.toString().length - 1))+"/"+legajo.toString().substr((legajo.toString().length - 1),1);
		
		return leg;
	}