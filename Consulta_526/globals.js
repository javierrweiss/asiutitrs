/**
 * @properties={typeid:35,uuid:"33465BA5-9C82-4451-AB24-215A020E737E",variableType:-4}
 */
var consulta_526_permisos = new Array();


/**
 * @properties={typeid:24,uuid:"E9CE1162-362C-4C29-81FF-8D267B5FB55C"}
 */
function consulta_526_convertNumbertToDate_DDMMAAAA() {
	
	var fecha = '';
	if(arguments[0] != '0')
		fecha = arguments[0].toString().substr(6,2)+"/"+arguments[0].toString().substr(4,2)+"/"+arguments[0].toString().substr(0,4);
	
	return fecha;
}

/**
 * @properties={typeid:24,uuid:"9FE6630B-84BF-4FC6-80BC-643433D211AC"}
 */
function onSolutionOpen_consulta_526() {
	
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
 * @properties={typeid:24,uuid:"EC908C78-E2D7-49CD-AAA7-7CE749A1DEE7"}
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
	globals.gbl_title= 'Consulta de Estudios Bacteriológicos'
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
    globals.consulta_526_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.consulta_526_permisos.getMaxRowIndex()
	if(!$max){ return}	
    
	//Muestra Formulario Principal
	var win = application.createWindow("Menu_item",JSWindow.MODAL_DIALOG)	
    win.title= globals.gbl_title
    win.resizable = true	
    win.show(forms.consulta_526_frm_estudios_bacteriologicos)
	win.destroy()
	
	}

	/**
 * TODO generated, please specify type and doc for the params
 * @param $form
 *
 * @properties={typeid:24,uuid:"41528B2B-8B4F-4A1C-B692-64A81D542823"}
 */
function consulta_526_controlarElementos($form) {
		var $tope_form = globals.consulta_526_permisos.getMaxRowIndex()
		var $element = forms[$form].elements.allnames
		var $tope_elem = $element.length
		
		for (var i = 1; i <= $tope_form; i++){		
			if ($form == globals.consulta_526_permisos.getValue(i,3)){
				for(var j=0;j <= $tope_elem; j++){
					if($element[j]== globals.consulta_526_permisos.getValue(i,4)){
						if(globals.consulta_526_permisos.getValue(i,5)==true){
							forms[$form].elements[$element[j]].visible = true
						}else{
							forms[$form].elements[$element[j]].visible = false
						}
						if(globals.consulta_526_permisos.getValue(i,6)==true){
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
