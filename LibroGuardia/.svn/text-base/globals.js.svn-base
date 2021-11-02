/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"63B76AF9-9885-468D-9805-8CA61F6ACD24",variableType:4}
 */
var libro_guardia_cod_med = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B75838EA-A16E-45B0-8AE2-16578AE0A028",variableType:4}
 */
var libro_guardia_tipo_med = 0;

/**
 * @properties={typeid:35,uuid:"5C9F382B-44F5-4558-9EAC-10FA5E54A2DC",variableType:-4}
 */
var libro_guardia_permisos = new Array();

/**
 * @properties={typeid:24,uuid:"3073AED1-6DF0-4041-830E-4FA2AA04B196"}
 */
function onSolutionOpen_libro_guardia() {
	
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
 * @properties={typeid:24,uuid:"56F9B46B-F983-465B-B375-7D0B10BBA736"}
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
	globals.gbl_title= 'Libro de Guardia'
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
    globals.libro_guardia_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.libro_guardia_permisos.getMaxRowIndex()
	if(!$max){ return}
    
	//Pide legajo si la Solucion lo requiere
    if(globals.libro_guardia_permisos.getValue(1,7)== true){
    	var win = application.createWindow("Legajo",JSWindow.MODAL_DIALOG)	
        win.title= 'Legajo'
        win.resizable = false
        win.show(forms.psw_legajo)
		win.destroy()
		if(globals.gbl_user == false){return}
    }
    
	//Muestra Formulario Principal
	var win = application.createWindow("Menu_item",JSWindow.MODAL_DIALOG)	
    win.title= globals.gbl_title
    win.resizable = true	
    win.show(forms.libro_guardia_frm_consulta)
	win.destroy()
	
	}

	/**
 * TODO generated, please specify type and doc for the params
 * @param $form
 *
 * @properties={typeid:24,uuid:"F3FCD049-3799-4F43-B1B0-1CA9AD82B7F9"}
 */
function libro_guardia_controlarElementos($form) {
		var $tope_form = globals.libro_guardia_permisos.getMaxRowIndex()
		var $element = forms[$form].elements.allnames
		var $tope_elem = $element.length
		
		for (var i = 1; i <= $tope_form; i++){		
			if ($form == globals.libro_guardia_permisos.getValue(i,3)){
				for(var j=0;j <= $tope_elem; j++){
					if($element[j]== globals.libro_guardia_permisos.getValue(i,4)){
						if(globals.libro_guardia_permisos.getValue(i,5)==true){
							forms[$form].elements[$element[j]].visible = true
						}else{
							forms[$form].elements[$element[j]].visible = false
						}
						if(globals.libro_guardia_permisos.getValue(i,6)==true){
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
 * @properties={typeid:24,uuid:"24FBF8E3-71B6-4C20-A8D2-3C7061782488"}
 */
function libro_guardia_convertNumbertToDate_DDMMAAAA() {
		
		var fecha = '';
		if(arguments[0] != '0')
			fecha = arguments[0].toString().substr(6,2)+"/"+arguments[0].toString().substr(4,2)+"/"+arguments[0].toString().substr(0,4);
		
		return fecha;
	}

/**
 * TODO generated, please specify type and doc for the params
 * @param legajo
 *
 * @properties={typeid:24,uuid:"59FCBB7A-C3C4-41CD-A01D-006C707D0808"}
 */
function libro_guardia_convertNumberToLegajo(legajo) {
		var leg = '';
		if(legajo != '0')
			leg = legajo.toString().substr(0,(legajo.toString().length - 1))+"/"+legajo.toString().substr((legajo.toString().length - 1),1);
		
		return leg;
}

	/**
 * @properties={typeid:24,uuid:"72E4C851-07C1-4234-A50B-1681DBF1CEFA"}
 */
function libro_guardia_convertNumberToHour_HHMM() {
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