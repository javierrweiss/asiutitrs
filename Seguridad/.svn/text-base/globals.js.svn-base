/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5DE09963-88CD-4B0E-ACB0-1D2E880BB28F"}
 */
var gbl_Form = ''
/**
 * @properties={typeid:35,uuid:"6E785DEF-EE54-4CDD-B30C-6835B934AE59",variableType:-4}
 */
var gbl_permisos = new Array();
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1C64B66F-1EF6-4959-B5D0-345609030D2E",variableType:4}
 */
var gbl_orienta = 0
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"616CC644-1593-432E-B9D5-C1C6684B7446"}
 */
var gbl_dependencia_1 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"885C537B-18C0-403B-870E-2FF56D786DA1"}
 */
var gbl_dependencia_2 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"94FBC87C-AEE1-4026-91C7-3DB04F06EF81",variableType:4}
 */
var gbl_parametro = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3FC02351-1EBB-4028-B28A-E97B5A941E55",variableType:4}
 */
var gbl_orden = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"60CD0D05-8073-462A-A6AE-2504E440EE00",variableType:4}
 */
var gbl_tipo_item = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"482F7F77-10D7-429E-8D3C-84BDD1E3B79B",variableType:4}
 */
var gbl_nivel = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6D3F0533-A22B-4E45-AAFD-3E80292EEBD8",variableType:4}
 */
var gbl_tipo_acceso = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5C5D043C-0117-44FD-9B8E-1F49B71718A1",variableType:4}
 */
var gbl_modulo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"163F809F-C043-419D-A3A1-3DDD89D55486",variableType:4}
 */
var gbl_ip = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"61CF51F0-0207-4794-9ACD-DE6EA0BE4250"}
 */
var gbl_codigo_formulario = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"98CEF8B4-0C16-4BF0-B357-8AC13A5839FA"}
 */
var gbl_codigo_elemento = ''; 

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DB5ABA8D-A73D-4A9A-8A9F-60893D66E38B",variableType:-4}
 */
var gbl_control_especial = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4B57CBD5-400B-4558-8FAB-AF3F87AE039E",variableType:-4}
 */
var gbl_control_acceso = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A656C230-301B-4C27-AE32-A7124F662537"}
 */
var gbl_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"31A7535B-EA1E-4190-A572-FFD6AC954F93"}
 */
var gbl_codigo_solucion = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"73DC1DA6-B35E-482C-A947-DE4D28759843"}
 */
var gbl_codigo_carpeta = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A20AEFAE-068D-4030-9518-90C7EF0F26FE"}
 */
var gbl_codigo_perfil = '';

/**
 * @properties={typeid:24,uuid:"1EFF46B4-68C6-4A46-9903-1B8D3B15F069"}
 */
function Inicia_Solucion() {
	// esto es para borrar la barra de menu
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
   // fin borra barra menu
   
   // Para no grabar directamente el las tablas
      databaseManager.setAutoSave(false)
}

/** 
 * @param args
 *
 * @properties={typeid:24,uuid:"1938D730-E4F4-45F1-8203-6F218655F254"}
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
    gbl_permisos = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);	
    var $max = gbl_permisos.getMaxRowIndex()
	if(!$max){ return}
    
    //Pide legajo si la Solucion lo requiere
    if(gbl_permisos.getValue(1,7)== true){
    	var win = application.createWindow("Legajo",JSWindow.MODAL_DIALOG)	
        win.title= 'Legajo'
        win.resizable = false
        win.show(forms.psw_legajo)
		win.destroy()
		if(globals.gbl_user == false){return}
    }
	//Muestra Formulario Principal 
	if(globals.gbl_transacciones_1 != 0){
	    var $form = ''
	    switch (globals.gbl_transacciones_1){		
		    case  1: $form = 'frm_solucion'
			       ;break
		    case  2: $form = 'frm_formulario'
	                ;break
		    case  3: $form = 'frm_elemento'
	                ;break
		    case  4: $form = 'frm_perfil'	        	
			        ;break
		    case  5: $form = 'frm_permiso'	        	
	                ;break
		    case  6: $form = 'frm_mante_menu'	        	
	                ;break
		    case  7: $form = 'frm_formulario_cons'	        	
                    ;break
		    case  8: $form = 'frm_elemento_cons'	        	
                    ;break
		    case  9: $form = 'frm_perfil_cons'	        	
                    ;break
		    case 10: $form = 'frm_permiso_cons'	        	
                    ;break
		    case 11: $form = 'frm_mante_menu_cons'	        	
                    ;break
		    case 12: $form = 'frm_solucion_trat'	        	
                    ;break
		    case 13: $form = 'frm_carpetas'	        	
                   ;break
		    case 14: $form = 'frm_permiso_carpetas'	        	
                   ;break
	     }
	     
	     //Pide legajo si el Formulario lo requiere
	     if(gbl_permisos.getValue(1,7)== false){	    	 
			 var fs = databaseManager.getFoundSet("desal","tbl_formulario")
			 fs.find()
			 fs['codigo_solucion']= $solucion
			 fs['codigo']= $form
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
	     win = application.createWindow("Menu_itm",JSWindow.MODAL_DIALOG)	
         win.title= globals.gbl_title
         win.resizable = false
         win.show(forms[$form])
		 win.destroy()
	}
}
/** 
 * @param formname
 * @param rec
 * @param orienta
 * @properties={typeid:24,uuid:"25F5B0F1-029E-4B74-99BB-395637CB6694"}
 */
function printRoutine(formname, rec, orienta) {
	gbl_Form = formname;
	var oneRecord = rec;
    gbl_orienta = orienta;
	if(!oneRecord) oneRecord = false

	if(!gbl_Form) return;
	
	var win = application.createWindow("prn",JSWindow.MODAL_DIALOG)	
	win.title= ' '
	win.resizable = true
	win.setSize(1300,800)
	solutionModel.removeForm
	win.show(forms.prn_previous)
	win.hide()
	win.destroy()
	
	
    //forms[frm].controller.setPageFormat(210,297,5,5,10,10,$orien,0)
	//forms[frm].controller.showPrintPreview(false)	
	//forms[frm].controller.print(oneRecord)
}

/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method. (This is the FindRecord in find mode, which is like JSRecord has all the columns/dataproviders, but doesn't have its methods)
 * @param {Boolean} findMode True if foundset of this record is in find mode
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"3ACCFCC2-D45B-4F6E-AA3E-3DCC09430098"}
 */
function getDataSetForValueList_tbl_solucion(displayValue, realValue, record, valueListName, findMode) {
	var $sql
    var $ds
    var $args
	/*if (displayValue == null && realValue == null) {
		$sql = "SELECT codigo, codigo FROM tbl_solucion ORDER BY codigo asc"
        $ds = databaseManager.getDataSetByQuery('desal',$sql,null,-1)
	} else 
		*/
	if (displayValue != null) {
		$sql = "SELECT codigo, codigo FROM tbl_solucion WHERE upper(codigo) LIKE upper(?) ORDER BY codigo asc"
        $args = [displayValue + '%']
        $ds = databaseManager.getDataSetByQuery('desal',$sql,$args,100)
	} else if (realValue != null) {
		$sql = "SELECT codigo, codigo FROM tbl_solucion WHERE codigo = ?"
        $args = [realValue]
        $ds = databaseManager.getDataSetByQuery('desal',$sql,$args,1)
	}	
	return $ds;
}

/** 
 * @param displayValue
 * @param realValue
 * @param record
 * @param valueListName
 * @param findMode
 *
 * @properties={typeid:24,uuid:"7FC4B2C5-F123-4AD6-8E63-DD111D3F58E9"}
 */
function getDataSetForValueList_tbl_formulario(displayValue, realValue, record, valueListName, findMode) {
	var $sql
    var $ds
    var $args	
	if (displayValue != null) {
		$sql = "SELECT codigo, codigo FROM tbl_formulario WHERE upper(codigo) LIKE upper(?) ORDER BY codigo asc"
        $args = [displayValue + '%']
        $ds = databaseManager.getDataSetByQuery('desal',$sql,$args,100)
	} else if (realValue != null) {
		$sql = "SELECT codigo, codigo FROM tbl_formulario WHERE codigo = ?"
        $args = [realValue]
        $ds = databaseManager.getDataSetByQuery('desal',$sql,$args,1)
	}	
	return $ds;
}

/** 
 * @param displayValue
 * @param realValue
 * @param record
 * @param valueListName
 * @param findMode
 *
 * @properties={typeid:24,uuid:"FF75D2D0-90EF-4EB4-A6E1-F22843FC1670"}
 */
function getDataSetForValueList_tbl_elemento(displayValue, realValue, record, valueListName, findMode) {
	var $sql
    var $ds
    var $args	
	if (displayValue != null) {
		$sql = "SELECT codigo, codigo FROM tbl_elemento WHERE upper(codigo) LIKE upper(?) ORDER BY codigo asc"
        $args = [displayValue + '%']
        $ds = databaseManager.getDataSetByQuery('desal',$sql,$args,100)
	} else if (realValue != null) {
		$sql = "SELECT codigo, codigo FROM tbl_elemento WHERE codigo = ?"
        $args = [realValue]
        $ds = databaseManager.getDataSetByQuery('desal',$sql,$args,1)
	}	
	return $ds;

}

/**
 * @param displayValue
 * @param realValue
 * @param record
 * @param valueListName
 * @param findMode
 *
 * @properties={typeid:24,uuid:"44C07F8D-EE58-422C-B47A-9A359F0AC76C"}
 */
function getDataSetForValueList_tbl_perfil(displayValue, realValue, record, valueListName, findMode) {
	var $sql
    var $ds
    var $args	
	if (displayValue != null) {
		$sql = "SELECT codigo, codigo FROM tbl_perfil WHERE upper(codigo) LIKE upper(?) ORDER BY codigo asc"
        $args = [displayValue + '%']
        $ds = databaseManager.getDataSetByQuery('desal',$sql,$args,100)
	} else if (realValue != null) {
		$sql = "SELECT codigo, codigo FROM tbl_perfil WHERE codigo = ?"
        $args = [realValue]
        $ds = databaseManager.getDataSetByQuery('desal',$sql,$args,1)
	}	
	return $ds;

}
/**
 *
 * @param $form
 *
 * @properties={typeid:24,uuid:"3AE4A057-F6A5-40BD-ADBA-BADB6AFAE946"}
 */
function controlar_elementos($form){
	var $tope_form = globals.gbl_permisos.getMaxRowIndex()
	var $element = forms[$form].elements.allnames
	var $tope_elem = $element.length
	
	for (var i = 1; i <= $tope_form; i++){		
		if ($form == globals.gbl_permisos.getValue(i,3)){
			for(var j=0;j <= $tope_elem; j++){
				if($element[j]== globals.gbl_permisos.getValue(i,4)){
					if(globals.gbl_permisos.getValue(i,5)==true){
						forms[$form].elements[$element[j]].visible = true
					}else{
						forms[$form].elements[$element[j]].visible = false
					}
					if(globals.gbl_permisos.getValue(i,6)==true){
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
