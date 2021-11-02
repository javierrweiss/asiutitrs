/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2CAC5B28-7C30-41D4-9680-DBD23E12FBBE",variableType:4}
 */
var consulta_1002_histClinica = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A96000A2-D951-4343-B23D-604B3E54D703",variableType:4}
 */
var consulta_1002_obra = 0;

/**
 * @properties={typeid:35,uuid:"1424379E-EE5D-42F6-B986-8CDAD18F758B",variableType:-4}
 */
var consulta_1002_permisos = new Array();


/**
 * @properties={typeid:24,uuid:"8A87A625-0B6F-458C-96CE-BD30272F8EF1"}
 */
function onSolutionOpen_consulta_1002() {
	
	plugins.window.getMenuBar().setVisible(false)
    plugins.window.setToolBarAreaVisible(false)
    
    var names1 = plugins.window.getToolbarNames();
    for (var i = 0 ; i < names1.length ; i++) {
         plugins.window.removeToolBar(names1[i])
    }    
    plugins.window.setFullScreen(false);
    plugins.window.getMenuBar().setVisible(false);
    plugins.window.setToolBarAreaVisible(false)
	plugins.window.setStatusBarVisible(false);
    
    databaseManager.setAutoSave(false);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param args
 *
 * @properties={typeid:24,uuid:"92CF672C-CCB9-41AD-9D7F-BFB2079E5CC6"}
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
	globals.gbl_title= 'Consulta de Análisis Clínicos - Internados'
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
    globals.consulta_1002_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.consulta_1002_permisos.getMaxRowIndex()
	if(!$max){ return}	
    
	//Muestra Formulario Principal
	var win = application.createWindow("Menu_item",JSWindow.MODAL_DIALOG)	
    win.title= globals.gbl_title
    win.resizable = true	
    win.show(forms.consulta_1002_frm_analisis_clinicos)
	win.destroy()
	
	}

	/**
 * TODO generated, please specify type and doc for the params
 * @param $form
 *
 * @properties={typeid:24,uuid:"FBAA8BA1-601C-4AA4-AE27-21AF7072D1F3"}
 */
function consulta_1002_controlarElementos($form) {
		var $tope_form = globals.consulta_1002_permisos.getMaxRowIndex()
		var $element = forms[$form].elements.allnames
		var $tope_elem = $element.length
		
		for (var i = 1; i <= $tope_form; i++){		
			if ($form == globals.consulta_1002_permisos.getValue(i,3)){
				for(var j=0;j <= $tope_elem; j++){
					if($element[j]== globals.consulta_1002_permisos.getValue(i,4)){
						if(globals.consulta_1002_permisos.getValue(i,5)==true){
							forms[$form].elements[$element[j]].visible = true
						}else{
							forms[$form].elements[$element[j]].visible = false
						}
						if(globals.consulta_1002_permisos.getValue(i,6)==true){
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
 * @properties={typeid:24,uuid:"526AC715-0271-424A-BC48-F78FAB509F4C"}
 */
function consulta_1002_convertNumbertToDate_DDMMAAAA() {
		
		var fecha = '';
		if(arguments[0] != '0')
			fecha = arguments[0].toString().substr(6,2)+"/"+arguments[0].toString().substr(4,2)+"/"+arguments[0].toString().substr(0,4);
		
		return fecha;
	}

/**
 * TODO generated, please specify type and doc for the params
 * @param legajo
 *
 * @properties={typeid:24,uuid:"B3C60E9E-5CFA-4261-8DC9-302D3FA17064"}
 */
function consulta_1002_convertNumberToLegajo(legajo) {
		var leg = '';
		if(legajo != '0')
			leg = legajo.toString().substr(0,(legajo.toString().length - 1))+"/"+legajo.toString().substr((legajo.toString().length - 1),1);
		
		return leg;
	}