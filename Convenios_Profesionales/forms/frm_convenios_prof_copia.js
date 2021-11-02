/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"96A5AEAF-8CC6-41C3-A74D-F23847958745",variableType:4}
 */
var frm_total_sel = 0

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B000CFC0-2DED-4ACA-A32E-BAE3EE4AF2B6",variableType:4}
 */
var frm_total_reg = 0
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5B8847BB-FB8C-4521-8186-4E40D4C88558"}
 */
var frm_prof_descripcion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BEB18B2E-DC1C-4979-97D8-52D31F4281D5",variableType:93}
 */

var frm_fecha_desde = null;

/**
 * @properties={typeid:35,uuid:"F96C37FF-2FDF-47F1-A3A9-89D0BEAFB72A",variableType:-4}
 */
var frm_prof_descripcion_d = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7D9B3E72-1E17-40FD-B121-A6E470C319B8"}
 */
var frm_obra_descripcion = null;

/**
 * @properties={typeid:35,uuid:"9FF21C9F-9457-423B-84B7-D7DF96A7B5A6",variableType:-4}
 */
var frm_obra_descripcion_d = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"34D3C327-7993-48B8-AB03-B6DADEA1C858",variableType:4}
 */
var frm_tipo_proceso = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EAB5A082-7070-455C-A0B8-FED133300237"}
 */
var frm_con_profesional = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"41A8E507-B33F-403A-A962-6BA06E50CEE4"}
 */
var frm_con_profesional_d = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3D6194A1-176C-41E2-81C2-6AC5302DA2ED"}
 */
var frm_con_cobertura = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"36962408-1229-4D03-B539-817A01037366"}
 */
var frm_con_cobertura_d = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"86490FEA-2C6E-4F17-B6E8-E0F63D547B6B",variableType:4}
 */
var frm_error = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C987BF9F-0931-4D71-8B6F-4961FE48E4D6"}
 */
function onShow_inicio(firstShow, event) {
	elements.lbl_titulo.text = 'Copia de Convenios'	
	inicializa_campos()
}
/**
 * @properties={typeid:24,uuid:"BE8EC541-B784-4D12-86AA-1377F8FE4107"}
 */
function controlar_profesional(){
	onAction_controlar_profesional(frm_con_profesional, 0)	
}
/**
 * @properties={typeid:24,uuid:"712760E5-CBED-404F-9EBF-3E4520B33F7D"}
 */
function controlar_profesional_d(){
	onAction_controlar_profesional(frm_con_profesional_d, 1)	
}
/** 
 * @param $con_profesional
 * @param $tipo
 *
 * @properties={typeid:24,uuid:"D8636097-A7B1-4EFA-B0CE-21309A168D92"}
 */
function onAction_controlar_profesional($con_profesional, $tipo) {		
	if($con_profesional != ''){
		// identifica si el campo es numérico o alfanumerico
		   var largo = $con_profesional.length;
		   var esnumero = true;
		   for (var i= 0;i<largo && esnumero == true; i++){
	     		if ($con_profesional.charCodeAt(i)< 48 || $con_profesional.charCodeAt(i) > 57){
			    	esnumero = false
		    	}
		   }
		   if (esnumero){
	    	   if(largo>6){
	    		   //muestra mensaje de "dialogo"				   
				   globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				   if($tipo == 0){
				       elements.con_profesional.requestFocus()
				   }else{
					    elements.con_profesional_d.requestFocus()
				   }				   
		   	   }else{
		   		   globals.gbl_profesional = utils.stringToNumber($con_profesional.toString())	   		
				   var $size = gbl_prof_to_prof.getSize()
				   if (globals.gbl_catalogo == 'cirendsa'){
					   $size = gbl_prof_to_prof_cirendsa.getSize()
				   }					   
		   		   if ($size < 1){
					   frm_error = 1				       
					   globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')				       
				       globals.gbl_profesional = 0					   
				   	   
					   if($tipo == 0){
						   frm_con_profesional    = ' '
						   frm_prof_descripcion   = ' '
					       elements.con_profesional.requestFocus()
					   }else{
						   frm_con_profesional_d  = ' '
						   frm_prof_descripcion_d = ' '
						   elements.con_profesional_d.requestFocus()
					   }
				   }else {
					   if($tipo == 0){
				   	       frm_prof_descripcion = gbl_prof_to_prof.prof2_2
						   if (globals.gbl_catalogo == 'cirendsa'){
							   frm_prof_descripcion = gbl_prof_to_prof_cirendsa.prof2_2
						   }
				   	       elements.con_profesional_d.requestFocus()
					   }else{
						   frm_prof_descripcion_d = gbl_prof_to_prof.prof2_2
						   if (globals.gbl_catalogo == 'cirendsa'){
							   frm_prof_descripcion_d = gbl_prof_to_prof_cirendsa.prof2_2
						   }
				   	       elements.btn_procesar.requestFocus()
					   }
				   }		
		   	   }
	       }else{
	    	   globals.gbl_con_indice = 1	       	   
			   globals.gbl_con_busca = $con_profesional
			   var win = application.createWindow("Busca_profe",JSWindow.MODAL_DIALOG)	
			   win.title= 'Buscar Profesional'
			   win.resizable = false
			   win.show(forms.frm_tab_profesionales)

			   if (forms.frm_scr_profesionales.foundset.codigo > 0){
				   if($tipo == 0){
				       frm_con_profesional  = forms.frm_scr_profesionales.foundset.codigo.toString()
				       frm_prof_descripcion = forms.frm_scr_profesionales.foundset.descripcion				   
			   	       elements.con_profesional_d.requestFocus()
				   }else{
					   frm_con_profesional_d  = forms.frm_scr_profesionales.foundset.codigo.toString()
				       frm_prof_descripcion_d = forms.frm_scr_profesionales.foundset.descripcion				   
			   	       elements.btn_procesar.requestFocus()
				   }
				}
		   }	    
	  }
  }
/**
 * @properties={typeid:24,uuid:"C2BA4460-67E2-4004-B5B8-8B892C01D4FA"}
 */
function buscar_profesional(){
	onAction_buscar_profesional(frm_con_profesional, 0)
}
/**
 * @properties={typeid:24,uuid:"CDACC285-ECB9-4670-86AC-47450EEC9522"}
 */
function buscar_profesional_d(){
	onAction_buscar_profesional(frm_con_profesional_d, 1)
}
/** 
 * @param $con_profesional
 * @param $tipo
 *
 * @properties={typeid:24,uuid:"76A14043-37B8-4880-B35A-36CE4724C138"}
 */
function onAction_buscar_profesional($con_profesional, $tipo) {
	var largo = $con_profesional.length;
    var esnumero = true;
    globals.gbl_con_indice = 1;    
    for (var i= 0;i<largo && esnumero == true; i++){
	   if ($con_profesional.charCodeAt(i)< 48 || $con_profesional.charCodeAt(i) > 57){
		   esnumero = false
	   }
    }
    if (esnumero){
	   globals.gbl_profesional = utils.stringToNumber($con_profesional.valueOf())
	   globals.gbl_con_indice = 2
    }else{
	   globals.gbl_con_indice = 1
    }    
	globals.gbl_con_busca = $con_profesional
	var win = application.createWindow("Busca_profe",JSWindow.MODAL_DIALOG)	
	win.title= 'Buscar Profesional'
	win.resizable = false		
	win.show(forms.frm_tab_profesionales)

	if (forms.frm_scr_profesionales.foundset.codigo > 0){
		if($tipo == 0){
	        frm_con_profesional  = forms.frm_scr_profesionales.foundset.codigo.toString()
	        frm_prof_descripcion = forms.frm_scr_profesionales.foundset.descripcion	   
   	        elements.con_profesional_d.requestFocus()
		}else{
			frm_con_profesional_d  = forms.frm_scr_profesionales.foundset.codigo.toString()
	        frm_prof_descripcion_d = forms.frm_scr_profesionales.foundset.descripcion	   
   	        elements.btn_procesar.requestFocus()
		}
	   
	}else{
	   globals.gbl_profesional = 0		
	}	
}
/**
 * @properties={typeid:24,uuid:"460BD270-4738-43A2-871D-D40574E989E2"}
 */
function controlar_obra(){
	onAction_controlar_obra(frm_con_cobertura, 0)
}
/**
 * @properties={typeid:24,uuid:"38BBD1AB-E96E-43AA-82FD-7DEB2A0254E9"}
 */
function controlar_obra_d(){
	onAction_controlar_obra(frm_con_cobertura_d, 1)
}
/**
 * @param $con_cobertura
 * @param $tipo
 *
 * @properties={typeid:24,uuid:"83A29FE6-018D-4716-A340-D2DFC9ABEF5B"}
 */
function onAction_controlar_obra($con_cobertura, $tipo) {
	if ($con_cobertura != ''){
		   // identifica si el campo es numérico o alfanumerico
		   var largo = $con_cobertura.length;
		   var esnumero = true;
		   for (var i= 0;i<largo && esnumero == true; i++){
	     		if ($con_cobertura.charCodeAt(i)< 48 || $con_cobertura.charCodeAt(i) > 57){
			    	esnumero = false
		    	}
		   }
	       if (esnumero){
	    	   if(largo>4){
	    		   //muestra mensaje de "dialogo"
	    		   globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				   if($tipo == 0){
				       elements.con_cobertura.requestFocus()
				   }else{
					   elements.con_cobertura_d.requestFocus()
				   }
				   frm_error = 1
		   	   }else{
		   		   globals.gbl_cobertura = utils.stringToNumber($con_cobertura.valueOf())	   		
				   var $size = gbl_cob_to_coberturas.getSize()
				   if (globals.gbl_catalogo == 'cirendsa'){
					   $size = gbl_cob_to_coberturas_cirendsa.getSize()
				   }					   
		   		   if ($size < 1){
					   frm_error = 1
					   globals.DIALOGS.showErrorDialog('Error','Código inexistente', 'Ok')
				   	   
				   	   globals.gbl_cobertura = 0
				   	   if($tipo == 0){
				   		   frm_con_cobertura     = ' '				   	   
					       frm_obra_descripcion  = ' '
				   	       elements.con_cobertura.requestFocus()
				   	   }else{
				   		   frm_con_cobertura_d    = ' '				   	   
					       frm_obra_descripcion_d = ' '
				   	       elements.con_cobertura_d.requestFocus()
				   	   }
				   }else{
					   if($tipo == 0){
				           frm_obra_descripcion = gbl_cob_to_coberturas.obr_razonsoc
						   if (globals.gbl_catalogo == 'cirendsa'){
							   frm_obra_descripcion = gbl_cob_to_coberturas_cirendsa.obr_razonsoc
						   }
				           elements.con_cobertura_d.requestFocus()
					   }else{
						   frm_obra_descripcion_d = gbl_cob_to_coberturas.obr_razonsoc
						   if (globals.gbl_catalogo == 'cirendsa'){
							   frm_obra_descripcion_d = gbl_cob_to_coberturas_cirendsa.obr_razonsoc
						   }
				           elements.btn_procesar.requestFocus()
					   }
				   }		
		   	   }
	       }else{	    	   
	    	   globals.gbl_con_indice = 1
	    	   globals.gbl_con_busca = $con_cobertura
	       	   var win = application.createWindow("Busca_cober",JSWindow.MODAL_DIALOG)	
			   win.title= 'Buscar Obra Social'
			   win.resizable = false
		       win.show(forms.frm_tab_coberturas_emp)
			   if (forms.frm_scr_coberturas_emp.foundset.codigo > 0){
				   if($tipo == 0){
			           frm_con_cobertura    = forms.frm_scr_coberturas_emp.foundset.codigo.toString()
			           frm_obra_descripcion = forms.frm_scr_coberturas_emp.foundset.descripcion
			           elements.con_cobertura_d.requestFocus()
				   }else{
					   frm_con_cobertura_d    = forms.frm_scr_coberturas_emp.foundset.codigo.toString()
			           frm_obra_descripcion_d = forms.frm_scr_coberturas_emp.foundset.descripcion
			           elements.btn_procesar.requestFocus()
				   }
			   }		   
	      }
	}
}
/**
 * @properties={typeid:24,uuid:"74B655FE-4CAC-4629-8974-342680842452"}
 */
function buscar_obra(){
	onAction_buscar_obra(frm_con_cobertura, 0)
}
/**
 * @properties={typeid:24,uuid:"A9299081-5218-4F7B-869D-67D486F0294D"}
 */
function buscar_obra_d(){
	onAction_buscar_obra(frm_con_cobertura_d, 1)
}
/**
 * @param $con_cobertura
 * @param $tipo
 *
 * @properties={typeid:24,uuid:"C051D0C3-0287-4CFF-9578-725CD4A8C78A"}
 */
function onAction_buscar_obra($con_cobertura, $tipo) {
	var largo = $con_cobertura.length;
	var esnumero = true;    
	globals.gbl_con_indice = 1;
    for (var i= 0;i<largo && esnumero == true; i++){
	   if ($con_cobertura.charCodeAt(i)< 48 || $con_cobertura.charCodeAt(i) > 57){
		   esnumero = false
	   }
    }
    if (esnumero){
	   globals.gbl_cobertura = utils.stringToNumber($con_cobertura.valueOf())
	   globals.gbl_con_indice = 2
    }else{
	   globals.gbl_con_indice = 1
    }
    globals.gbl_con_busca = $con_cobertura
    var win = application.createWindow("Busca_cober",JSWindow.MODAL_DIALOG)	
    win.title= 'Buscar Cobertura'
    win.resizable = false
    win.show(forms.frm_tab_coberturas_emp)

    if (forms.frm_scr_coberturas_emp.foundset.codigo > 0){
    	if($tipo == 0){
	        frm_con_cobertura    = forms.frm_scr_coberturas_emp.foundset.codigo.toString()
	        frm_obra_descripcion = forms.frm_scr_coberturas_emp.foundset.descripcion
	        elements.con_cobertura_d.requestFocus()
    	}else{
    		frm_con_cobertura_d    = forms.frm_scr_coberturas_emp.foundset.codigo.toString()
	        frm_obra_descripcion_d = forms.frm_scr_coberturas_emp.foundset.descripcion
	        elements.btn_procesar.requestFocus()
    	}
    }else{
	    globals.gbl_cobertura = 0          
    }
}

/**
 * @properties={typeid:24,uuid:"5D2CBD3A-EE83-47E3-BFCC-76E0EEC94197"}
 */
function inicializa_campos(){
	globals.gbl_con_empresa = 1
	frm_con_profesional     = ' '
	globals.gbl_profesional = 0
	frm_prof_descripcion    = ''
	frm_con_profesional_d   = ' '
	frm_prof_descripcion_d  = ''	
	frm_con_cobertura       = ' '
	globals.gbl_cobertura   = 0
	frm_obra_descripcion    = ''
	frm_con_cobertura_d     = ' '
	frm_obra_descripcion_d  = ''	
	frm_tipo_proceso        = 0	
	frm_fecha_desde         = null
	frm_total_reg           = 0
	frm_total_sel           = 0
	globals.gbl_cerrarConsultaRegistro = false;
	elements.con_profesional.enabled   = true
	elements.con_profesional_d.enabled = true
	elements.con_cobertura.enabled     = false
	elements.con_cobertura_d.enabled   = false
	
	elements.btn_grabar.enabled        = false
	 
	elements.bt_buscar_prof.enabled    = true
	elements.bt_buscar_prof_d.enabled  = true
	elements.bt_buscar_cober.enabled   = false
	elements.bt_buscar_cober_d.enabled = false
	
	elements.con_cobertura_d.enabled   = false
	forms.frm_scr_convenios_prof_copia.foundset.deleteAllRecords()	
	
	globals.gbl_catalogo        = 'maestros'
	//Carga tabla de Profesionales
    forms.frm_tab_profesionales.cargar_tabla()
	//Carga tabla de Obras Sociales
    forms.frm_tab_coberturas_emp.cargar_tabla()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B80A8A7-FAB6-4A4F-A1DC-0C82C8F2176C"}
 * @AllowToRunInFind
 */
function onAction_procesar(event) {
	if (frm_tipo_proceso == 0 && (frm_con_profesional == ''|| frm_con_profesional_d == '')
		|| frm_tipo_proceso == 1 && (frm_con_cobertura == ''|| frm_con_cobertura_d == '')			
		|| frm_fecha_desde == ''|| frm_fecha_desde == null){		
		globals.DIALOGS.showWarningDialog('Atención','No se puede procesar, faltan datos', 'Ok')
	    elements.con_fecha_desde.requestFocus()
	}else{
		elements.lbl_procesando.text = 'Procesando.....'
		elements.lbl_procesando.visible = true
		application.updateUI()		
		//Cargar tabla de convenios		

		
		//NUEVO DEJARLO HASTA VERIFICAR QUE ANDE TODO BIEN(SIno poner el original)
		var $Args
		var $SQL = "select cp.conv_profesional, cp.conv_especialidad, cp.conv_obra_social, cp.conv_tipo_nom, cp.conv_grupo_nom,"
		  $SQL+="cp.conv_cod_nom, cp.conv_profesional_desc, cp.conv_especialidad_desc, cp.conv_obra_social_desc,"
		  $SQL+= "cp.conv_grupo_nom_desc, cp.conv_cod_nom_desc, cpm.MaxFechaDesde"
		  $SQL+=", cp.conv_tipo_valor, "
		  $SQL+= "cp.conv_imp_valor, cp.conv_tipo_rec_diaf, cp.conv_recargo_diaf, cp.conv_tipo_rec_noct, "
		  $SQL+="cp.conv_recargo_noct, cp.conv_tipo_rec_urg, cp.conv_recargo_urg, cp.conv_observacion, cp.conv_imp_valor2 "
		  $SQL+=" from ("
			  
		$SQL += "select conv_profesional, conv_especialidad, conv_obra_social, conv_tipo_nom, conv_grupo_nom,"
		$SQL += "conv_cod_nom, conv_profesional_desc, conv_especialidad_desc, conv_obra_social_desc,"
		$SQL += "conv_grupo_nom_desc, conv_cod_nom_desc, max(conv_fecha_desde) as MaxFechaDesde "
		$SQL += "from tbl_conv_prof "
			
		if (frm_tipo_proceso == 0) {
			$SQL += "where conv_profesional = "
			$SQL += frm_con_profesional
		} else {
			$SQL += "where conv_obra_social = "
			$SQL += frm_con_cobertura
		}
		$SQL += " group by conv_profesional, conv_especialidad, conv_obra_social, conv_tipo_nom, conv_grupo_nom, "
		$SQL += "conv_cod_nom, conv_profesional_desc, conv_especialidad_desc, conv_obra_social_desc, "
		$SQL += "conv_grupo_nom_desc, conv_cod_nom_desc	"

		$SQL += ") cpm "
		$SQL += "inner join tbl_conv_prof cp"
		$SQL += " on cp.conv_profesional=cpm.conv_profesional and cp.conv_obra_social=cpm.conv_obra_social and "
		$SQL += "cp.conv_especialidad=cpm.conv_especialidad and "
		$SQL += "cp.conv_tipo_nom=cpm.conv_tipo_nom and "
		$SQL += "cp.conv_grupo_nom=cpm.conv_grupo_nom and "
		$SQL += "cp.conv_cod_nom=cpm.conv_cod_nom and "
		$SQL += "cp.conv_fecha_desde=cpm.MaxFechaDesde "
			  
		//CODIGO ORIGINAL
//		var $Args 
//		var $SQL = "select conv_profesional, conv_especialidad, conv_obra_social, conv_tipo_nom, conv_grupo_nom, conv_cod_nom, "
//            $SQL+= "conv_profesional_desc, conv_especialidad_desc, conv_obra_social_desc, conv_grupo_nom_desc, conv_cod_nom_desc, "
//            $SQL+= "max(conv_fecha_desde) from tbl_conv_prof " 
//		if(frm_tipo_proceso == 0){
//		    $SQL+= "where conv_profesional = "
//			$SQL+= frm_con_profesional			
//		}else{
//			$SQL+= "where conv_obra_social = "
//			$SQL+= frm_con_cobertura			
//		}
//		$SQL+= " group by conv_profesional, conv_especialidad, conv_obra_social, conv_tipo_nom, conv_grupo_nom, conv_cod_nom, "
//		$SQL+= "conv_profesional_desc, conv_especialidad_desc, conv_obra_social_desc, conv_grupo_nom_desc, conv_cod_nom_desc"

		
		var $ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);
		var $max = $ds.getMaxRowIndex()
		frm_total_reg = $ds.getMaxRowIndex()
		frm_total_sel = $ds.getMaxRowIndex()
		if ($max != 0){		
		    var frm_ds2 = databaseManager.createEmptyDataSet()		
		    frm_ds2.addColumn('enabled',1,JSColumn.NUMBER)   
		    frm_ds2.addColumn('cod_profesional',2,JSColumn.NUMBER)
		    frm_ds2.addColumn('cod_especialidad',3,JSColumn.NUMBER)
			frm_ds2.addColumn('cod_obra_social',4,JSColumn.NUMBER)	
			frm_ds2.addColumn('tipo_nom',5,JSColumn.NUMBER)
			frm_ds2.addColumn('cod_grupo_nom',6,JSColumn.NUMBER)
			frm_ds2.addColumn('cod_nomencla',7,JSColumn.NUMBER)
			frm_ds2.addColumn('des_profesional',8,JSColumn.TEXT)
			frm_ds2.addColumn('des_especialidad',9,JSColumn.TEXT)
			frm_ds2.addColumn('des_obra_social',10,JSColumn.TEXT)			
			frm_ds2.addColumn('des_grupo_nom',11,JSColumn.TEXT)
			frm_ds2.addColumn('des_nomencla',12,JSColumn.TEXT)
			frm_ds2.addColumn('fecha_desde',13,JSColumn.DATETIME)
			
			frm_ds2.addColumn('tipo_valor',14,JSColumn.NUMBER)
			frm_ds2.addColumn('imp_valor',15,JSColumn.NUMBER)
			frm_ds2.addColumn('tipo_rec_fer',16,JSColumn.NUMBER)
			frm_ds2.addColumn('rec_fer',17,JSColumn.NUMBER)
			frm_ds2.addColumn('tipo_rec_nor',18,JSColumn.NUMBER)
			frm_ds2.addColumn('imp_rec_nor',19,JSColumn.NUMBER)
			frm_ds2.addColumn('tipo_rec_urg',20,JSColumn.NUMBER)
			frm_ds2.addColumn('imp_rec_urg',21,JSColumn.NUMBER)
			frm_ds2.addColumn('observa',22,JSColumn.TEXT)
			frm_ds2.addColumn('imp_valor2',23,JSColumn.NUMBER)
			
			
			for (var i= 1; i <= $max; i++){
//				foundset.find()
//				conv_profesional  = $ds.getValue(i,1)
//				conv_obra_social  = $ds.getValue(i,3)
//				conv_especialidad = $ds.getValue(i,2)			    
//				conv_tipo_nom     = $ds.getValue(i,4)
//				conv_grupo_nom    = $ds.getValue(i,5)
//				conv_cod_nom      = $ds.getValue(i,6)
//				conv_fecha_desde  = $ds.getValue(i,12)								
//				foundset.search()
//				if(foundset.getSize() != 0){
//			        frm_ds2.addRow([1, $ds.getValue(i,1), $ds.getValue(i,2), $ds.getValue(i,3), $ds.getValue(i,4), $ds.getValue(i,5),
//			                   $ds.getValue(i,6), $ds.getValue(i,7), $ds.getValue(i,8), $ds.getValue(i,9), $ds.getValue(i,10),
//							   $ds.getValue(i,11), $ds.getValue(i,12), conv_tipo_valor, conv_imp_valor, conv_tipo_rec_diaf, conv_recargo_diaf, conv_tipo_rec_noct,
//							   conv_recargo_noct, conv_tipo_rec_urg, conv_recargo_urg, conv_observacion, conv_imp_valor2])
//							   
							    frm_ds2.addRow([1, $ds.getValue(i,1), $ds.getValue(i,2), $ds.getValue(i,3), $ds.getValue(i,4), $ds.getValue(i,5),
			                   $ds.getValue(i,6), $ds.getValue(i,7), $ds.getValue(i,8), $ds.getValue(i,9), $ds.getValue(i,10),
							   $ds.getValue(i,11), $ds.getValue(i,12), $ds.getValue(i,13), $ds.getValue(i,14), $ds.getValue(i,15), $ds.getValue(i,16), $ds.getValue(i,17),
							   $ds.getValue(i,18), $ds.getValue(i,19), $ds.getValue(i,20), $ds.getValue(i,21), $ds.getValue(i,22)])
//				}
				
			
				
			}
				
			var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, 
			              JSColumn.NUMBER, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.DATETIME,
						  JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, 
						  JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.NUMBER]
		    var $frm = solutionModel.getForm('frm_scr_convenios_prof_copia')
		    $frm.dataSource = frm_ds2.createDataSource('Auxd_scr_conv_prof_copias', $tipos)
		    forms.frm_scr_convenios_prof_copia.controller.recreateUI()
			elements.tabless.tabIndex = 2
			elements.btn_grabar.enabled = true
		}else{
			globals.DIALOGS.showWarningDialog('Atención','No hay datos para copiar')
			 inicializa_campos()	
		}
	} 
		
	elements.lbl_procesando.visible = false	
}
/**
 * @AllowToRunInFind 
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"0F4D5FDE-90C1-431D-A556-C835906FBEC0"}
 */
function onAction_grabar(event) {
	if (frm_tipo_proceso == 0 && (frm_con_profesional == ''|| frm_con_profesional_d == '')
		|| frm_tipo_proceso == 1 && (frm_con_cobertura == ''|| frm_con_cobertura_d == '')			
		|| frm_fecha_desde == ''|| frm_fecha_desde == null){		
		globals.DIALOGS.showWarningDialog('Atención','No se puede procesar, faltan datos', 'Ok')
	    elements.con_tipo_valor.requestFocus()
	}else{
		elements.btn_grabar.enabled  = false
		elements.lbl_procesando.text = 'Procesando.....'
		elements.lbl_procesando.visible = true
		application.updateUI()
		
		var $OK = 'Si'
		$OK = globals.DIALOGS.showWarningDialog('Atención','Se procedera a copiar los registros registros seleccionado, conrfirma?', 'Si', 'No')
		if ($OK == 'Si'){
			// Filtra solos los seleccionados
			forms.frm_scr_convenios_prof_copia.foundset.addFoundSetFilterParam('enabled', '=', '1','filtro')
			var $max_convenios = databaseManager.getFoundSetCount(forms.frm_scr_convenios_prof_copia.foundset)				
			//
			for (var j = 1; j <= $max_convenios; j++){
				forms.frm_scr_convenios_prof_copia.foundset.setSelectedIndex(j)
		        //Buscar Repetidos
				foundset.find()
				if(frm_tipo_proceso == 0){
				    conv_profesional  = frm_con_profesional_d
				    conv_obra_social  = forms.frm_scr_convenios_prof_copia.foundset.cod_obra_social
				}else{
					conv_profesional  = forms.frm_scr_convenios_prof_copia.foundset.cod_profesional
					conv_obra_social  = frm_con_cobertura_d
				}
                conv_especialidad = forms.frm_scr_convenios_prof_copia.foundset.cod_especialidad			    
				conv_tipo_nom     = forms.frm_scr_convenios_prof_copia.foundset.tipo_nom
				conv_grupo_nom    = forms.frm_scr_convenios_prof_copia.foundset.cod_grupo_nom
				conv_cod_nom      = forms.frm_scr_convenios_prof_copia.foundset.cod_nomencla
				conv_fecha_desde  = frm_fecha_desde								
				foundset.search()
				if(foundset.getSize() == 0){
				    var frm_id = application.getUUID()
				    buscar_id(frm_id)				
			        foundset.newRecord()
			        id_conv_prof           = frm_id 
			        conv_fecha_alta        = application.getServerTimeStamp()
			        conv_fecha_modif       = null
			        conv_legajo_alta       = globals.vLega
  			        conv_legajo_modif      = null
					if(frm_tipo_proceso == 0){
					    conv_profesional       = frm_con_profesional_d
					    conv_profesional_desc  = frm_prof_descripcion_d
						conv_obra_social       = forms.frm_scr_convenios_prof_copia.foundset.cod_obra_social
				        conv_obra_social_desc  = forms.frm_scr_convenios_prof_copia.foundset.des_obra_social
					}else{
						conv_profesional       = forms.frm_scr_convenios_prof_copia.foundset.cod_profesional
						conv_profesional_desc  = forms.frm_scr_convenios_prof_copia.foundset.des_profesional
						conv_obra_social       = frm_con_cobertura_d
						conv_obra_social_desc  = frm_obra_descripcion_d
					}
					conv_empresa           = globals.gbl_con_empresa        
					conv_empresa_desc      = application.getValueListDisplayValue('vl_empresa',globals.gbl_con_empresa)
			        conv_especialidad      = forms.frm_scr_convenios_prof_copia.foundset.cod_especialidad
			        conv_especialidad_desc = forms.frm_scr_convenios_prof_copia.foundset.des_especialidad			        		            
			     	conv_grupo_nom         = forms.frm_scr_convenios_prof_copia.foundset.cod_grupo_nom
			        conv_grupo_nom_desc    = forms.frm_scr_convenios_prof_copia.foundset.des_grupo_nom				            
			        conv_cod_nom           = forms.frm_scr_convenios_prof_copia.foundset.cod_nomencla
			        conv_cod_nom_desc      = forms.frm_scr_convenios_prof_copia.foundset.des_nomencla
				    mover_datos()					
				}
			}
			// Remueve Filtros
			forms.frm_scr_convenios_prof_copia.foundset.removeFoundSetFilterParam('filtro')	
			//		
		}
		if ($OK == 'Si'){
		    inicializa_campos()	
		}
		elements.lbl_procesando.visible = false
	}
}
/**
 * @param frm_id
 *
 * @properties={typeid:24,uuid:"CA2D7FF2-1317-4A25-864C-4E1CBDC9D970"}
 */
function buscar_id(frm_id){
	//Verificando si existe clave primaria
    var sql = "SELECT EXISTS( SELECT id_conv_prof FROM tbl_conv_prof WHERE id_conv_prof ='" + frm_id + "')"
    var dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
    while(dsExists.getValue(1,1) == 1){
        frm_id = application.getUUID();
        sql = "SELECT EXISTS( SELECT id_conv_prof FROM tbl_conv_prof WHERE id_conv_prof ='" + frm_id + "')"
        dsExists = databaseManager.getDataSetByQuery('desal',sql,null,-1);
    } 
//

}

/**
 * @properties={typeid:24,uuid:"87B3A5A4-73D1-4B25-86B6-147DB4888ECA"}
 */
function mover_datos(){		
	conv_tipo_nom      = forms.frm_scr_convenios_prof_copia.foundset.tipo_nom
	conv_fecha_desde   = frm_fecha_desde 
    conv_tipo_valor    = forms.frm_scr_convenios_prof_copia.foundset.tipo_valor    
    conv_imp_valor     = forms.frm_scr_convenios_prof_copia.foundset.imp_valor
    conv_imp_valor2    = forms.frm_scr_convenios_prof_copia.foundset.imp_valor2
    conv_tipo_rec_diaf = forms.frm_scr_convenios_prof_copia.foundset.tipo_rec_fer
    conv_recargo_diaf  = forms.frm_scr_convenios_prof_copia.foundset.rec_fer
    conv_tipo_rec_noct = forms.frm_scr_convenios_prof_copia.foundset.tipo_rec_noc
    conv_recargo_noct  = forms.frm_scr_convenios_prof_copia.foundset.imp_rec_noc
    conv_tipo_rec_urg  = forms.frm_scr_convenios_prof_copia.foundset.tipo_rec_urg
    conv_recargo_urg   = forms.frm_scr_convenios_prof_copia.foundset.imp_rec_urg
    conv_observacion   = forms.frm_scr_convenios_prof_copia.foundset.observa
      
	databaseManager.startTransaction()
    var result = databaseManager.saveData();
    if(result){
        databaseManager.commitTransaction();
    }else{
        var array = databaseManager.getFailedRecords()
        for (var i = 0; i < array.length; i++) {
            var record = array[i];
            var jstable = databaseManager.getTable(record);
            var tableSQLName = jstable.getSQLName();
            var error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
            var error2='Error en grabación '+record.exception;
            if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {            
                var thrown = record.exception.getValue()
                plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
            }
        }
        databaseManager.rollbackTransaction()
        if(error1!=''){
                globals.DIALOGS.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
                globals.DIALOGS.showErrorDialog("Error en grabacion",error1,"Aceptar")
                globals.DIALOGS.showErrorDialog("Error en grabacion",error2,"Aceptar")
        }
        globals.DIALOGS.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Aceptar")
    }	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2BA506E7-F352-4C29-8F35-D32BC3E7E178"}
 */
function onAction_tipo_valor(event) {
	if(frm_tipo_proceso == 0 ){	    
		elements.con_profesional.enabled   = true
		frm_con_profesional                = ''
		frm_prof_descripcion               = ''
		elements.bt_buscar_prof.enabled    = true
		elements.con_profesional_d.enabled = true
		frm_con_profesional_d              = ''
		frm_prof_descripcion_d             = ''
		elements.bt_buscar_prof_d.enabled  = true
		
		elements.con_cobertura.enabled     = false
		frm_obra_descripcion               = ''
		frm_con_cobertura                  = ''
		elements.bt_buscar_cober.enabled   = false
		elements.con_cobertura_d.enabled   = false
		frm_obra_descripcion_d             = ''
		frm_con_cobertura_d                = ''
		elements.bt_buscar_cober_d.enabled = false
		elements.con_profesional.requestFocus()
		
	}else{		
		elements.con_profesional.enabled   = false
		frm_prof_descripcion               = ''
		frm_con_profesional                = ''
		elements.bt_buscar_prof.enabled    = false
		elements.con_profesional_d.enabled = false
		frm_prof_descripcion_d             = ''
		frm_con_profesional_d              = ''
		elements.bt_buscar_prof_d.enabled  = false
		
		elements.con_cobertura.enabled     = true
		frm_obra_descripcion               = ''
		frm_con_cobertura                  = ''
		elements.bt_buscar_cober.enabled   = true
		elements.con_cobertura_d.enabled   = true
		frm_obra_descripcion_d             = ''
		frm_con_cobertura_d                = ''
		elements.bt_buscar_cober_d.enabled = true
		elements.con_cobertura.requestFocus()
	}	
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"5CF04AF5-7FF0-4F4A-BF4B-736E6DEE993C"}
 */
function onHide_consultaRegistro(event) {
	if(globals.gbl_cerrarConsultaRegistro){
		var $win = application.getWindow(application.getActiveWindow().getName());
		if($win != null){
			$win.hide();
			$win.destroy();
		}
	}
	return globals.gbl_cerrarConsultaRegistro;
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"CD8C481A-131C-46DC-B04D-305CCBF1E772"}
 */
function onAction_cerrar(event) {
	globals.gbl_cerrarConsultaRegistro = true;
	onHide_consultaRegistro(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"236BD272-2FE0-4794-8C55-A7EEE58BD6F8"}
 */
function onAction_seleccionar(event) {
	forms.frm_scr_convenios_prof_copia.onAction_selec(event)
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"D0322BF2-0080-4AEC-9291-373DA59E8F0B"}
 */
function onAction_deseleccionar(event) {
	forms.frm_scr_convenios_prof_copia.onAction_desel(event)
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DEBAD60B-81C9-44C3-82BD-4B4A1A791DB1"}
 */
function onAction_fecha_desde(event) {
	elements.con_empresa.requestFocus()
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"C6E29235-8117-4499-83B9-6657BCF8AB93"}
 */
function onAction_controlar_empresa(event) {
	switch (globals.gbl_con_empresa){
	    case 1: globals.gbl_catalogo = 'maestros';break;
	    case 11: globals.gbl_catalogo = 'cirendsa';break;
	    default: globals.gbl_catalogo = 'maestros';break;
    }
	
	//Carga tabla de Profesionales
	globals.gbl_con_profesional = ' '
	globals.gbl_profesional     = 0
	frm_prof_descripcion        = ''
	elements.lbl_procesando.text = 'Cargando Tabla Profesionales'
    elements.lbl_procesando.visible = true       
    forms.frm_tab_profesionales.cargar_tabla()
		
	//Carga tabla de Obras Sociales
	globals.gbl_con_cobertura = ' '
	globals.gbl_cobertura     = 0
	frm_obra_descripcion      = ''
	elements.lbl_procesando.text = 'Cargando Tabla Obras Sociales'        
    application.updateUI()        
    forms.frm_tab_coberturas_emp.cargar_tabla()
	elements.lbl_procesando.visible = false        
		
}
