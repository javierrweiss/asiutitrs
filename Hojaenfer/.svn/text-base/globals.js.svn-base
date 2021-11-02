/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"361A51F0-03CF-4004-919D-1584BD53CC6F",variableType:4}
 */
var Hojaenfer_perLegajo = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2D3BD0A0-8C3D-48AA-9E37-8CE25023D888"}
 */
var Hojaenfer_htmlObserva = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C810E1CE-778B-4130-B2F4-6455E821785F",variableType:4}
 */
var Hojaenfer_utic_utiliza = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7AE236E3-C570-4B50-9786-A6B793B9CE6D",variableType:4}
 */
var Hojaenfer_horaPrint = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BD806F3B-1869-4049-AA64-9DAF937E68DB",variableType:4}
 */
var Hojaenfer_fechaPrint = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1FFB7EB0-6528-4078-ADD8-37700705821D",variableType:4}
 */
var Hojaenfer_histClinPrint = 0;

/**
 * @properties={typeid:35,uuid:"036B5AF0-FCF0-4390-9BA4-871616966267",variableType:-4}
 */
var hojaenfer_permisos = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"219D5F32-9D28-4BF9-BACE-2679ECAE2522",variableType:4}
 */
var hojaenfer_activoFormBuscarInternado = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D856C03-6815-4E83-9647-0063A69562C6",variableType:4}
 */
var hojaenfer_eventSourceButton = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9B071486-E906-443E-B462-81024F42D5C5",variableType:4}
 */
var hojaenfer_hisclin = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F7D3CBE3-0B3F-4C5D-8861-DF64CD5885B7"}
 */
var hojaenfer_apeynom = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7B140979-88EE-482D-A69B-42E21F8DA617"}
 */
var hojaenfer_histclin_apeynom = '';

/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"6A3B5BDB-DDD0-4DC7-B468-7983900D3028"}
 */
function onSolutionOpen_hojaEnfer() {
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
 * TODO generated, please specify type and doc for the params
 * @param args
 *
 * @properties={typeid:24,uuid:"B0DB339C-2D79-4C88-9453-EA364AEAC3F6"}
 */
function llamada_desde_Menu(args) {

	// Trae datos desde el Menu
	args = args.toString()
	args=args.split(';') 
	globals.vLegajo=utils.stringToNumber(args[0])
	globals.vLega=utils.stringToNumber(args[1])
	globals.vOperador=args[2]
	globals.vTipoOperador=utils.stringToNumber(args[3])
	globals.gbl_transacciones_1=args[4] 
	globals.vEmpresa=args[5]	
	globals.gbl_expanding_Nodes=args[6] 
	globals.gbl_title = ' '
	
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
	globals.hojaenfer_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = globals.hojaenfer_permisos.getMaxRowIndex()
	if(!$max){ return}
    
	//Pide legajo si la Solucion lo requiere
    if(globals.hojaenfer_permisos.getValue(1,7)== true){
    	var winLeg = application.createWindow("Legajo",JSWindow.MODAL_DIALOG)	
        winLeg.title= 'Legajo'
    	winLeg.resizable = false
    	winLeg.show(forms.psw_legajo)
		winLeg.destroy()
		if(globals.gbl_user == false){return}
    }
    
    //Muestra Formulario Principal 
	if(globals.gbl_transacciones_1 != 0){
	    var $form = ''
	    switch (globals.gbl_transacciones_1){		
		    case  1: $form = 'hojaenfer_frm_hoja_enfermeria'
			       ;break
		    case  2: $form = 'Hojaenfer_frm_reimpresion_hoja'
	                ;break
	     }
	    
	     if(hojaenfer_controlarAccesoForm($form)){
	    	 
	    	 var win = application.createWindow("Menu_itm",JSWindow.MODAL_DIALOG)	
	         win.title= globals.gbl_title
	         win.resizable = false
	         win.show(forms[$form])
			 win.destroy()
			 
	     }
	     else{
	    	 globals.DIALOGS.showWarningDialog("Atención!","No tiene permiso de acceso. Contacte al administrador del sistema.","Aceptar");
	     }
	     
	     
	}
	
}

	/**
 * TODO generated, please specify type and doc for the params
 * @param $form
 *
 * @properties={typeid:24,uuid:"90604EB0-9496-42D0-B2F4-6F975240108B"}
 */
function hojaenfer_controlarElementos($form) {
		var $tope_form = globals.hojaenfer_permisos.getMaxRowIndex()
		var $element = forms[$form].elements.allnames
		var $tope_elem = $element.length
		
		for (var i = 1; i <= $tope_form; i++){		
			if ($form == globals.hojaenfer_permisos.getValue(i,3)){
				for(var j=0;j <= $tope_elem; j++){
					if($element[j]== globals.hojaenfer_permisos.getValue(i,4)){
						if(globals.hojaenfer_permisos.getValue(i,5)==true){
							forms[$form].elements[$element[j]].visible = true
						}else{
							forms[$form].elements[$element[j]].visible = false
						}
						if(globals.hojaenfer_permisos.getValue(i,6)==true){
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
 * TODO generated, please specify type and doc for the params
 * @param $form
 *
 * @properties={typeid:24,uuid:"8F3046FE-3BA5-427F-BBAB-00FBDF9190F8"}
 */
function hojaenfer_controlarAccesoForm($form) {
	
 var $tope_form = globals.hojaenfer_permisos.getMaxRowIndex()
 var isValid = true;
		
 for (var i = 1; i <= $tope_form; i++){
			
 	if ($form == globals.hojaenfer_permisos.getValue(i,3)){
		// para quitar permiso, todoso los items deben estar en false, inclusive el primer item que se crea sin nombre (esto es para los form que tienen mas de un item)
		// vefiricar por base de datos. en select * from tbl_perfil_itm where codigo_solucion = 'Hojaenfer'	
 		if(globals.hojaenfer_permisos.getValue(i,5) == false && globals.hojaenfer_permisos.getValue(i,6)==false){
			isValid = false;
		}
		else{
			isValid = true;
			break;
		}
			
	}
 }
		
	return isValid;
}

	/**
 * Called for performing a conversion between a database value and a displayed value.
 *
 * @param databaseValue The database value.
 * @param {String} dbType The type of the database column. Can be one of "TEXT", "INTEGER", "NUMBER", "DATETIME" or "MEDIA".
 *
 * @returns {Object} the displayed value.
 *
 * @properties={typeid:24,uuid:"BE8E7577-D4A7-47BF-8BAB-09CEAC53B4A5"}
 */
function Hojaenfer_convertNumberToHour_HHMM(databaseValue, dbType) {
	
	var hora = "";
	if(databaseValue != null){
		var value = Number(databaseValue);
		if(value < 1){
			hora = "00:00";
		}
		else{
			if(value < 10){
				hora = "00:0" + value.toString().substr(0,1);
			}
			else{
				if(value < 100){
					hora = "00:" + value.toString().substr(0,2);
				}
				else{
					if(value < 1000){
						hora = "0" + value.toString().substr(0,1) + ":" + value.toString().substr(1,2);
					}
					else{
						if(value <= 2359){
							hora = value.toString().substr(0,2) + ":" + value.toString().substr(2,2);
						}
					}
				}
			}
		}
	}
	
	return hora;
}

/**
 * @properties={typeid:24,uuid:"CEE26B80-98A1-4E4E-B61F-ECEEBC64D967"}
 */
function Hojaenfer_convertNumbertToDate_DDMMAAAA() {
	var fecha = '';
	if(arguments[0] != '0' && arguments[0] != null )
		fecha = arguments[0].toString().substr(6,2)+"/"+arguments[0].toString().substr(4,2)+"/"+arguments[0].toString().substr(0,4);
	
	return fecha;
}
	

/**
 * TODO generated, please specify type and doc for the params
 * @param hora
 *
 * @properties={typeid:24,uuid:"AEB868CD-58B9-43C6-9B74-D1C37076A3EF"}
 */
function Hojaenfer_getTurnoSegunhora(hora) {
	
	var turno = null;
	if(hora > 2159 && hora <=2359 ){
		turno = "Noche";
	}
		
	if(hora >= 0  && hora < 600){
		turno = "Noche";
	}
		
	if(hora > 559 && hora < 1400){
		turno = "Mañana";
	}
		
	
	if(hora > 1359 && hora < 2200){
		turno = "Tarde";
	}
		
	return turno;
}
