/**
 * @properties={typeid:35,uuid:"CBE2F9E4-7177-4491-B528-2ED01B47C0BC",variableType:-4}
 */
var aux_periodo_tabla_subtotal = new Array();

/**
 * @properties={typeid:35,uuid:"C82F040B-5973-4E92-97DA-816A565BF48B",variableType:-4}
 */
var aux_periodo_tabla_subtotal_categclie = new Array();

/**
 * @properties={typeid:35,uuid:"D5BC76EB-8F1B-4C25-9504-65A11CA932A8",variableType:-4}
 */
var aux_periodo_tabla_totalgen = new Array();

/**
 * @properties={typeid:35,uuid:"ED270C06-37C4-4FD6-87E3-F90BEF99C357",variableType:-4}
 */
var aux_periodo_tabla_totaltotal = new Array();

/**
 * @properties={typeid:35,uuid:"4529C58E-1371-45AC-BFD9-215798385D57",variableType:-4}
 */
var aux_resumen_ejec_totalvta = new Array();

/**
 * @properties={typeid:35,uuid:"3D901043-12C2-471B-B237-E30C82C974A5",variableType:-4}
 */
var aux_resumen_ejec_totalcosop = new Array();

/**
 * @properties={typeid:35,uuid:"53E0116F-7878-45BA-860F-C473D2B0BEC2",variableType:-4}
 */
var aux_resumen_ejec_totalconop = new Array();

/**
 * @properties={typeid:35,uuid:"C79F8A75-9169-489F-9AC2-77089B360395",variableType:-4}
 */
var aux_periodo_tabla_totalgastos = new Array();

/**
 * @properties={typeid:35,uuid:"7A2FA177-22CE-4DE2-9471-1CA065029F83",variableType:-4}
 */
var aux_periodo_tabla_tot = new Array();

/**
 * @properties={typeid:35,uuid:"4E6EDF2F-1727-4B25-BC99-D4DA66CD0F8C",variableType:-4}
 */
var vector = new Array();

/**
 * @properties={typeid:35,uuid:"292585D8-0F5B-4FB9-908A-406321EAC416",variableType:-4}
 */
var aux_periodo_tabla_razonsoc = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"62F081DB-19BD-47A4-8F8D-E8CF4B7EDFFE",variableType:4}
 */
var frm_tot_per = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"96789B79-05DE-43BF-AC9D-833056439E5E",variableType:4}
 */
var frm_index = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"89D77BDE-32E2-40F3-B095-343484CB6C85",variableType:4}
 */
var frm_tot_per2 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"760106B9-20C9-455D-A1D7-D790636677F5",variableType:4}
 */
var frm_tot_per3 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F19C0148-83F2-48D2-8712-2A13D3F2EC02",variableType:4}
 */
var frm_encontro = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load 
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A16AD131-1DCA-4540-ABAA-228116CFBBBC"}
 * @AllowToRunInFind
 */
function onShow_inicia(firstShow, event) {	
	elements.frm_per_desde.requestFocus()
	globals.gbl_index   = forms.frm_cons_estado_economico_2898.elements.tabs.tabIndex
	globals.gbl_index_2 = forms.frm_cons_estado_eco_tp_compras.elements.tabs.tabIndex
	globals.gbl_index_3 = forms.frm_cons_estado_eco_tp_prest.elements.tabs.tabIndex
	globals.gbl_index_4 = forms.frm_cons_estado_eco_tp_rrhh.elements.tabs.tabIndex
	globals.gbl_index_5 = forms.frm_cons_estado_eco_tp_finanzas.elements.tabs.tabIndex
	globals.gbl_index_6 = forms.frm_cons_estado_eco_tp_conta.elements.tabs.tabIndex
	globals.gbl_index_7 = forms.frm_cons_estado_eco_tp_legales.elements.tabs.tabIndex
	
	var $tipo_opera
	switch(globals.gbl_index){ 
	    case  1: elements.lbl_titulo.text = 'Resumen'                   ; $tipo_opera = 2; break 
	    case  2: elements.lbl_titulo.text = 'Resumen Ejecutivo'         ; $tipo_opera = 2; break
	    case  3: elements.lbl_titulo.text = 'Ventas'                    ; $tipo_opera = 1; break
		case  4: elements.lbl_titulo.text = 'Compras'                   ; $tipo_opera = 2; break
		case  5: elements.lbl_titulo.text = 'Prestaciones Médicas'      ; $tipo_opera = 2; break
		case  6: elements.lbl_titulo.text = 'RRHH'                      ; $tipo_opera = 2; break
		case  7: elements.lbl_titulo.text = 'Finanzas'                  ; $tipo_opera = 2; break
		case  8: elements.lbl_titulo.text = 'Impuestos'                 ; $tipo_opera = 2; break
		case  9: elements.lbl_titulo.text = 'Legales'                   ; $tipo_opera = 2; break		
		case 10: elements.lbl_titulo.text = 'SND'                       ; $tipo_opera = 2; break
		case 11: elements.lbl_titulo.text = 'Información Complementaria'; $tipo_opera = 2; break
		
		
	}
	var fs = databaseManager.getFoundSet('desal','tbl_parametros')
	fs.find()
	fs.paramid = $tipo_opera
	fs.search()
	if (fs.getSize()){
		globals.gbl_fec_actual = fs['fechadb']
	}	
}

/**
 * Handle changed data.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"9DA344A0-14E8-439A-A65C-00300FEC9569"}
 */
function onDataChange_controla_fecha_hasta(oldValue, newValue, event) {
		if (globals.gbl_periodo_hasta != null){
		   if (globals.gbl_periodo_hasta < globals.gbl_periodo_desde){
			   globals.showErrorDialog('El Período Hasta no puede ser menor al Período Desde.', null, 'Ok', null, null, null);
			   elements.frm_per_hasta.requestFocus()
			}
		}
		elements.btn_procesa.requestFocus();
		return true
	}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"50EA9E24-4E2B-498E-B568-F089752B5DAD"}
 */
function onAction_boton_procesa(event) {
	if (globals.gbl_periodo_desde == null){
		globals.showErrorDialog('Debe ingresar Período desde', null, 'Ok',null, null, null);
        elements.frm_per_desde.requestFocus()
    }else{
	    if (globals.gbl_periodo_hasta == null){
	        globals.showErrorDialog('Debe ingresar Período hasta', null, 'Ok',null, null, null);
	        elements.frm_per_hasta.requestFocus()
	    }else{
	    	if (globals.gbl_periodo_hasta < globals.gbl_periodo_desde){
	 			   globals.showErrorDialog('El Período Hasta no puede ser menor al Período Desde.', null, 'Ok', null, null, null);
	 			   elements.frm_per_hasta.requestFocus()
	    	}else{
	    		if (globals.Contar_mes(globals.gbl_periodo_desde,globals.gbl_periodo_hasta) > 12){
		 			   globals.showErrorDialog('El Rango de Período no puede ser mayor a 12', null, 'Ok', null, null, null);
		 			   elements.frm_per_hasta.requestFocus()
		    	}else{	
		    		onAction_comparar(event)
		    		forms.frm_cons_estado_economico_2898.elements.tabs.visible = false
				    elements.lbl_procesando.visible = true 
					elements.btn_imprime.enabled    = false
					elements.btn_exp_excel.enabled  = false
					elements.btn_exp_pdf.enabled    = false
					elements.btn_mas.visible        = false
				    elements.btn_men.visible        = false
					globals.gbl_tip_compras         = 1 
					frm_encontro = 0
				    
					//Cargar Resumen
					frm_index = 1
					elements.lbl_procesando.text = 'Procesando Resumen'
		    		application.updateUI()	
		    		forms.frm_cons_estado_eco_tp_resumen.frm_pos = 0
		    		cargar_tabla()
		   		
		    		//Cargar Resumen Ejecutivo
					frm_index = 11
					elements.lbl_procesando.text = 'Procesando Resumen Ejecutivo'
		    		application.updateUI()	
		    		forms.frm_cons_estado_eco_tp_resumen_ejecutivo.frm_pos = 0
		    		cargar_tabla()
		    		
		    		//Cargar Ventas
					frm_index = 2
					elements.lbl_procesando.text = 'Procesando Ventas'
		    		application.updateUI()	
		    		forms.frm_cons_estado_eco_tp_ventas.frm_pos = 0
		     		cargar_tabla()		    		
		    		//Cargar Compras por Centro de Costos		    		
		    		frm_index = 3					
		    		elements.lbl_procesando.text = 'Procesando Compras'
		    		application.updateUI()	
					forms.frm_cons_estado_eco_tp_compras_cc.frm_pos = 0
					cargar_tabla()
		    		//Cargar Compras por Unidad de Gastos
		    		frm_index = 33
					forms.frm_cons_estado_eco_tp_compras_ug.frm_pos = 0
					cargar_tabla()
		    		
		    		//Cargar Pretaciones Médivas Centro de Costos
		    		frm_index = 4
		    		elements.lbl_procesando.text = 'Procesando Prestaciones Méd.'
		    		application.updateUI()	
					forms.frm_cons_estado_eco_tp_presta_medica_cc.frm_pos = 0
					cargar_tabla()					
		    		//Cargar Prestaciones Médicas Unidad de Gastos
		    		frm_index = 44
					forms.frm_cons_estado_eco_tp_presta_medica_ug.frm_pos = 0
					cargar_tabla()
		    		//Cargar RRHH Sector
					frm_index = 5
					elements.lbl_procesando.text = 'Procesando RRHH'
		    		application.updateUI()	
		    		forms.frm_cons_estado_eco_tp_rrhh_sec.frm_pos = 0 
		    		cargar_tabla()
		    		//Cargar RRHH Empresa
		    		frm_index = 55
					forms.frm_cons_estado_eco_tp_rrhh_emp.frm_pos = 0
					cargar_tabla()
		    		//Cargar Finanzas por Centro de Costos
					frm_index = 6
					elements.lbl_procesando.text = 'Procesando Finanzas'
		    		application.updateUI()	
		    		forms.frm_cons_estado_eco_tp_finanzas_cc.frm_pos = 0
		    		cargar_tabla()
		    		//Cargar Finanzas por Unidad de Gastos
					frm_index = 66					
		    		forms.frm_cons_estado_eco_tp_finanzas_ug.frm_pos = 0
		    		cargar_tabla()
		    		//Cargar Impuestos 
					frm_index = 7
					elements.lbl_procesando.text = 'Procesando Impuestos'
		    		application.updateUI()	
		    		forms.frm_cons_estado_eco_tp_impuestos.frm_pos = 0	
		    		cargar_tabla()
		    		//Cargar Legales por Centro de Costos
					frm_index = 8
					elements.lbl_procesando.text = 'Procesando Legales'
		    		application.updateUI()	
		    		forms.frm_cons_estado_eco_tp_legales_cc.frm_pos = 0
		    		cargar_tabla()
		    		//Cargar Legales por Unidad de Gastos
					frm_index = 88	
		    		forms.frm_cons_estado_eco_tp_legales_ug.frm_pos = 0
		    		cargar_tabla()
		    		
		    		//Cargar SND
					frm_index = 9
					elements.lbl_procesando.text = 'Procesando SND'
		    		application.updateUI()	
		    		forms.frm_cons_estado_eco_tp_snd.frm_pos = 0
		            cargar_tabla()
		    		
		    		//Cargar Varios
					frm_index = 10
					elements.lbl_procesando.text = 'Procesando Información Complementaria'
		    		application.updateUI()	
		    		forms.frm_cons_estado_eco_tp_varios.frm_pos = 0
		            cargar_tabla()		    		
							    		
					elements.lbl_procesando.visible = false
					elements.lbl_procesando.text = 'Procesando'
					if (frm_encontro == 0){
		    			globals.showErrorDialog('No hay datos para mostrar', null, 'Ok', null, null, null)
		    		}else{
		    			elements.btn_mas.visible = true
					    elements.btn_men.visible = true
		    		}
		    	}
	    	}
	    }
    }	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D85EB83B-7FD4-4F51-BA45-D829E14CC99C"}
 */
function onAction_buscar_periodo_d(event) {
	buscar_periodo()
	if(globals.gbl_periodo_ok == 1){
		globals.gbl_periodo_desde = globals.gbl_periodo_gral
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD47B2CF-D7AE-467B-BA59-8CA707691D81"}
 */
function onAction_buscar_periodo_h(event) {
	buscar_periodo()
	if(globals.gbl_periodo_ok == 1){
		globals.gbl_periodo_hasta = globals.gbl_periodo_gral
	}
}

/**
 * @properties={typeid:24,uuid:"15857607-31E5-4164-ADF3-D99D91B3C3D6"}
 */
function buscar_periodo(){
	var $win = application.createWindow("pide_periodo",JSWindow.MODAL_DIALOG)	
	$win.title= 'Seleccione Período'
	$win.resizable = false
	solutionModel.removeForm
	$win.show(forms.msg_periodo)
}

/**
 * @properties={typeid:24,uuid:"9B70093E-2EB3-4B65-99BA-FD4A94FBAEEA"}
 */
function cargar_tabla(){
	var $ds
	var $Args = new Array();
	elements.btn_mas.visible = false
	elements.btn_men.visible = false
	var $m_aux = globals.gbl_periodo_desde.getMonth() + 1
		
	if ($m_aux < 10){
		$m_aux = '0' + $m_aux	
	}
	var $periodo_desde = globals.gbl_periodo_desde.getFullYear() + '' + $m_aux
	$m_aux = globals.gbl_periodo_hasta.getMonth() + 1
		
	if ($m_aux < 10){
		$m_aux = '0' + $m_aux	
	}
	var $periodo_hasta = globals.gbl_periodo_hasta.getFullYear() + '' + $m_aux
	// esto es para hacer comparativa con periodo anterior
	if(globals.gbl_comparar == 1){
		$m_aux = globals.gbl_periodo_desde.getMonth() + 1
		
		if ($m_aux < 10){
			$m_aux = '0' + $m_aux	
		}
		var $periodo_desde_ant = (globals.gbl_periodo_desde.getFullYear()-1) + '' + $m_aux
		$m_aux = globals.gbl_periodo_hasta.getMonth() + 1
		
		if ($m_aux < 10){
			$m_aux = '0' + $m_aux	
		}
		var $periodo_hasta_ant = (globals.gbl_periodo_hasta.getFullYear()-1) + '' + $m_aux
		var $SQL
		switch (frm_index){
			case  1:
			   $SQL = "select * " 
                  +"from tbl_resumen "
	              +"where (periodo >= "
	              + $periodo_desde_ant
	              +" and periodo <= "
	              + $periodo_hasta_ant
	              +") or (periodo >= "
	              + $periodo_desde
	              +" and periodo <= "
	              + $periodo_hasta
   	              +") order by sectoresp asc, tiptotal asc, tipsubtot asc, periodo asc "
	              ;break
			case 11:
			   $SQL = "select * " 
               +"from tbl_resuejec "
	              +"where (periodo >= "
	              + $periodo_desde_ant
	              +" and periodo <= "
	              + $periodo_hasta_ant
	              +") or (periodo >= "
	              + $periodo_desde
	              +" and periodo <= "
	              + $periodo_hasta
	              +") order by rejectab asc, rejecgru asc, periodo asc "
	              ;break	              
			case  2:
		       $SQL = "select * " 
	              +"from tbl_ctactevta "
		          +"where (periodo >= "
		          + $periodo_desde_ant
		          +" and periodo <= "
		          + $periodo_hasta_ant
		          +") or (periodo >= "
		          + $periodo_desde
		          +" and periodo <= "
		          + $periodo_hasta
		          +") order by tipmov asc, tipoprest asc, concepto asc, subconcep asc, categclie asc, razonsocclie asc, periodo asc, numcomp asc "
		          ;break
			case  3:
			   $SQL = "select * " 
		          +"from tbl_gastos "
			      +"where (periodo >= "
			      + $periodo_desde_ant
			      +" and periodo <= "
			      + $periodo_hasta_ant
			      +") or (periodo >= "
			      + $periodo_desde
			      +" and periodo <= "
			      + $periodo_hasta
				  +" and origengasto = 1 "
			      +") order by tipcompra asc, macrocen asc, centro asc, subcentro asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
			      ;break
			case 33:
			   $SQL = "select * " 
		          +"from tbl_gastos "
			      +"where (periodo >= "
			      + $periodo_desde_ant
			      +" and periodo <= "
			      + $periodo_hasta_ant
			      +") or (periodo >= "
			      + $periodo_desde
			      +" and periodo <= "
			      + $periodo_hasta
			      +" and origengasto = 1 "
			      +") order by tipcompra asc, unidgasto asc, subungasto asc, subungasto1 asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
			      ;break
			case  4:
			   $SQL = "select * " 
		          +"from tbl_gastos "
			      +"where (periodo >= "
			      + $periodo_desde_ant
			      +" and periodo <= "
			      + $periodo_hasta_ant
			      +") or (periodo >= "
			      + $periodo_desde
			      +" and periodo <= "
			      + $periodo_hasta
			      +" and origengasto = 2 "
			      +") order by tipcompra asc, macrocen asc, centro asc, subcentro asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
			      ;break
			case 44:
			   $SQL = "select * " 
		          +"from tbl_gastos "
			      +"where (periodo >= "
			      + $periodo_desde_ant
			      +" and periodo <= "
			      + $periodo_hasta_ant
			      +") or (periodo >= "
			      + $periodo_desde
			      +" and periodo <= "
			      + $periodo_hasta
			      +" and origengasto = 2 "
			      +") order by tipcompra asc, unidgasto asc, subungasto asc, subungasto1 asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
			      ;break
			case 5:
			   $SQL = "select * " 
		          +"from tbl_rrhh "
		          +"left join tbl_personal PER on PER.per_1 = tbl_rrhh.numcompint "
			      +"where (periodo >= "
			      + $periodo_desde_ant
			      +" and periodo <= "
			      + $periodo_hasta_ant
			      +") or (periodo >= "
			      + $periodo_desde
			      +" and periodo <= "
			      + $periodo_hasta
			      +") order by tipcompra asc, macrocen asc, centro asc, subcentro asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
			      ;break
			case 55:
			   $SQL = "select * " 
		          +"from tbl_rrhh "
		          +"left join tbl_personal PER on PER.per_1 = tbl_rrhh.numcompint "
			      +"where (periodo >= "
			      + $periodo_desde_ant
			      +" and periodo <= "
			      + $periodo_hasta_ant
			      +") or (periodo >= "
			      + $periodo_desde
			      +" and periodo <= "
			      + $periodo_hasta
			      +") order by empreori asc, unidgasto asc, subungasto asc, subungasto1 asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
			      ;break
			case 6:
			   $SQL = "select * " 
		          +"from tbl_gastos "
			      +"where (periodo >= "
			      + $periodo_desde_ant
			      +" and periodo <= "
			      + $periodo_hasta_ant
			      +") or (periodo >= "
			      + $periodo_desde
			      +" and periodo <= "
			      + $periodo_hasta
			      +" and origengasto = 3 "
			      +") order by tipcompra asc, macrocen asc, centro asc, subcentro asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
			      ;break
			case 66:
			   $SQL = "select * " 
	              +"from tbl_gastos "
		          +"where (periodo >= "
		          + $periodo_desde_ant
		          +" and periodo <= "
		          + $periodo_hasta_ant
		          +") or (periodo >= "
		          + $periodo_desde
		          +" and periodo <= "
		          + $periodo_hasta
		          +" and origengasto = 3 "
		          +") order by tipcompra asc, unidgasto asc, subungasto asc, subungasto1 asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
		          ;break
			case  7:
               $SQL = "select * " 
                  +"from tbl_impuestos "
                  +"where (periodo >= "
                  + $periodo_desde_ant
                  +" and periodo <= "
                  + $periodo_hasta_ant
                  +") or (periodo >= "
                  + $periodo_desde
                  +" and periodo <= "
                  + $periodo_hasta
                  +") order by ente asc, impuesto asc, concepto asc, subconcepto asc, cuota asc, periodo asc, periodo asc "
                  ;break			
			case  8:
			   $SQL = "select * " 
		          +"from tbl_gastos "
			      +"where (periodo >= "
			      + $periodo_desde_ant
			      +" and periodo <= "
			      + $periodo_hasta_ant
			      +") or (periodo >= "
			      + $periodo_desde
			      +" and periodo <= "
			      + $periodo_hasta
			      +" and origengasto = 4 "
			      +") order by tipcompra asc, macrocen asc, centro asc, subcentro asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
			      ;break
			case 88:
			   $SQL = "select * " 
	              +"from tbl_gastos "
		          +"where (periodo >= "
		          + $periodo_desde_ant
		          +"  and periodo <= "
		          + $periodo_hasta_ant
		          +") or (periodo >= "
		          + $periodo_desde
		          +" and periodo <= "
		          + $periodo_hasta
		          +" and origengasto = 4 "
		          +") order by tipcompra asc, unidgasto asc, subungasto asc, subungasto1 asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
		          ;break
			case  9:
			   $SQL = "select periodo, importe, razonsoc, cuit, tcorte1, ccorte1, ccorte2 " 
		          +"from tbl_snd "
			      +"where (periodo >= "
			      + $periodo_desde_ant
			      +" and periodo <= "
			      + $periodo_hasta_ant
	              +") or (periodo >= "
			      + $periodo_desde
			      +" and periodo <= "
			      + $periodo_hasta
			      +") order by tcorte1 asc, ccorte1 asc, ccorte2 asc, razonsoc asc, periodo asc "
			      ;break
			case 10:
		       $SQL = "select periodo, importe, razonsoc, cuit, rubro, subrubro " 
	              +"from tbl_varios "
		          +"where (periodo >= "
		          + $periodo_desde_ant
		          +" and periodo <= "
		          + $periodo_hasta_ant
                  +") or (periodo >= "
		          + $periodo_desde
		          +" and periodo <= "
		          + $periodo_hasta
		          +") order by rubro asc, subrubro asc, razonsoc asc, periodo asc "
		          ;break				        
		}
		$ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);		
	// termina comparativa
	}else{
		switch (frm_index){
		   case  1:
               $SQL = "select * " 
                  +"from tbl_resumen "
                  +"where periodo >= "
                  + $periodo_desde
                  +" and periodo <= "
                  + $periodo_hasta
                  +" order by sectoresp asc, tiptotal asc, tipsubtot asc, periodo asc "
                  ;break
		   case 11:
               $SQL = "select * " 
                  +"from tbl_resuejec "
                  +"where periodo >= "
                  + $periodo_desde
                  +" and periodo <= "
                  + $periodo_hasta
                  +" order by rejectab asc, rejecgru asc, periodo asc "
                  ;break
			case  2:
               $SQL = "select * " 
                  +"from tbl_ctactevta "
	              +"where periodo >= "
	              + $periodo_desde
	              +" and periodo <= "
	              + $periodo_hasta
                  +" order by tipmov asc, tipoprest asc, concepto asc, subconcep asc, categclie asc, razonsocclie asc, periodo asc, numcomp asc "
	              ;break
			case  3:
		 	   $SQL = "select * " 
                  +"from tbl_gastos "
	              +"where periodo >= "
	              + $periodo_desde
	              +" and periodo <= "
	              + $periodo_hasta
	              +" and origengasto = 1 "
                  +" order by tipcompra asc, macrocen asc, centro asc, subcentro asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
	              ;break
			case 33:
			   $SQL = "select * " 
                  +"from tbl_gastos "
	              +"where periodo >= "
	              + $periodo_desde
	              +" and periodo <= "
	              + $periodo_hasta
	              +" and origengasto = 1 "
                  +" order by tipcompra asc, unidgasto asc, subungasto asc, subungasto1 asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
	              ;break
			case  4:
			   $SQL = "select * " 
                  +"from tbl_gastos "
	              +"where periodo >= "
	              + $periodo_desde
	              +" and periodo <= "
	              + $periodo_hasta
	              +" and origengasto = 2 "
                  +" order by tipcompra asc, macrocen asc, centro asc, subcentro asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
	              ;break
			case 44:
			   $SQL = "select * " 
                  +"from tbl_gastos "
	              +"where periodo >= "
	              + $periodo_desde
	              +" and periodo <= "
	              + $periodo_hasta	
	              +" and origengasto = 2 "
                  +" order by tipcompra asc, unidgasto asc, subungasto asc, subungasto1 asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
	              ;break
			case  5:
			   $SQL = "select * " 
                  +"from tbl_rrhh "
                  +"left join tbl_personal PER on PER.per_1 = tbl_rrhh.numcompint "
	              +"where periodo >= "
	              + $periodo_desde
	              +" and periodo <= "
	              + $periodo_hasta	
                  +" order by tipcompra asc, macrocen asc, centro asc, subcentro asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
	              ;break
			case 55:
			   $SQL = "select * " 
                  +"from tbl_rrhh "
                  +"left join tbl_personal PER on PER.per_1 = tbl_rrhh.numcompint "
	              +"where periodo >= "
	              + $periodo_desde
	              +" and periodo <= "
	              + $periodo_hasta	
                  +" order by empreori asc, unidgasto asc, subungasto asc, subungasto1 asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
	              ;break
		    case  6:
			   $SQL = "select * " 
                 +"from tbl_gastos "
	             +"where periodo >= "
	             + $periodo_desde
	             +" and periodo <= "
	             + $periodo_hasta
	             +" and origengasto = 3 "
                 +" order by tipcompra asc, macrocen asc, centro asc, subcentro asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
	             ;break
			case 66:
  		       $SQL = "select * " 
                 +"from tbl_gastos "
                 +"where periodo >= "
                 + $periodo_desde
                 +" and periodo <= "
                 + $periodo_hasta	
                 +" and origengasto = 3 "
                 +" order by tipcompra asc, unidgasto asc, subungasto asc, subungasto1 asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
                 ;break                 
			case  7:
               $SQL = "select * " 
                 +"from tbl_impuestos "
                 +"where periodo >= "
                 + $periodo_desde
                 +" and periodo <= "
                 + $periodo_hasta                 
                 +" order by ente asc, impuesto asc, concepto asc, subconcepto asc, cuota asc, periodo asc "
                 ;break                 
		    case  8:
			   $SQL = "select * " 
                 +"from tbl_gastos "
	             +"where periodo >= "
	             + $periodo_desde
	             +" and periodo <= "
	             + $periodo_hasta
	             +" and origengasto = 4 "
                 +" order by tipcompra asc, macrocen asc, centro asc, subcentro asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
	             ;break
			case 88:
		       $SQL = "select * " 
                 +"from tbl_gastos "
                 +"where periodo >= "
                 + $periodo_desde
                 +" and periodo <= "
                 + $periodo_hasta
                 +" and origengasto = 4 "
                 +" order by tipcompra asc, unidgasto asc, subungasto asc, subungasto1 asc, tipprov asc, razonsoc asc, periodo asc, numcomp asc "
                 ;break
		    case  9:
			   $SQL = "select periodo, importe, razonsoc, cuit, tcorte1, ccorte1, ccorte2  "  
                 +"from tbl_snd "
                 +"where periodo >= "
                 + $periodo_desde
                 +" and periodo <= "
                 + $periodo_hasta	
                 +" order by tcorte1 asc, ccorte1 asc, ccorte2 asc, razonsoc asc, periodo asc "
                 ;break
		    case 10:
		       $SQL = "select periodo, importe, razonsoc, cuit, rubro, subrubro "  
                 +"from tbl_varios "
                 +"where periodo >= "
                 + $periodo_desde
                 +" and periodo <= "
                 + $periodo_hasta	
                 +" order by rubro asc, subrubro asc, razonsoc asc, periodo asc "
                 ;break			
	    }
	    $ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);
	}
	var $max = $ds.getMaxRowIndex()
	//globals.gbl_max2 = $max
	if ($max != 0){		
		frm_encontro = 1
	    //Procesar y crear nuevo Dataset
	    elements.btn_mas.visible       = true
	    elements.btn_men.visible       = true
	    elements.btn_imprime.enabled   = true
	    elements.btn_exp_excel.enabled = true
		elements.btn_exp_pdf.enabled   = true
		var $ds2 = databaseManager.createEmptyDataSet()
		var $col = 0
		$ds2.addColumn('visible',1,JSColumn.NUMBER)   
		$ds2.addColumn('sector',2,JSColumn.NUMBER)
		$ds2.addColumn('tipo',3,JSColumn.NUMBER)
		/* tipo  0-título del período, 1-título principal(tipmov), 2-título 2 nivel(tipoprest),
		         3-título 3 nivel(concepto), 4-título 4 nivel(subconcepto) mas detalle del período,
		         5-título 5 nivel(categclie), 6-detalle del 5 nivel(razonsoc), 7-subtotal nivel 2
		         8-subtotal nivel 1
		*/        
		$ds2.addColumn('tipmov',4,JSColumn.NUMBER)
		$ds2.addColumn('tipoprest',5,JSColumn.NUMBER)
		$ds2.addColumn('concepto',6,JSColumn.NUMBER)
		$ds2.addColumn('subconcepto',7,JSColumn.NUMBER)
		$ds2.addColumn('categclie',8,JSColumn.NUMBER)
		$ds2.addColumn('tit_1',9,JSColumn.TEXT)
		for (var i=0; i < 12;i++){
			$col++
		    $ds2.addColumn('col_'+ $col,($col+9),JSColumn.NUMBER)			   			   
	 	}
	 	$ds2.addColumn('boton_m',22,JSColumn.NUMBER)
		$ds2.addColumn('razonsoc',23,JSColumn.TEXT)
		// Solo para salida Excel
		$ds2.addColumn('sector_desc',24,JSColumn.TEXT)
		$ds2.addColumn('tipmov_desc',25,JSColumn.TEXT)
		$ds2.addColumn('tipoprest_desc',26,JSColumn.TEXT)
		$ds2.addColumn('concepto_desc',27,JSColumn.TEXT)
		$ds2.addColumn('subconcepto_desc',28,JSColumn.TEXT)
		$ds2.addColumn('categclie_desc',29,JSColumn.TEXT)
		$ds2.addColumn('marca_totales',30,JSColumn.NUMBER)
		$col = 0
		for (i=0; i < 12;i++){
			$col++
		    $ds2.addColumn('pos_'+ $col,($col+30),JSColumn.NUMBER)			   			   
	 	}
        var tipmov_ant       = null
		var tipoprest_ant    = null
		var concepto_ant     = null
		var subconcep_ant    = null	
		var categclie_ant    = null
		var razonsoc_ant     = null
		var razonsoc_ant_des = null
		var snd_rubro_ant    = null
		
		//solo para titulos de impresión
		var sector_ant_imp    = ''
        var tipmov_ant_imp    = ''
		var tipoprest_ant_imp = ''
		var concepto_ant_imp  = ''
		var subconcep_ant_imp = ''		
		var categclie_ant_imp = ''
		
		
		var primera_vez = 0
		globals.gbl_meses = globals.Contar_mes(globals.gbl_periodo_desde,globals.gbl_periodo_hasta) 
		if (globals.gbl_comparar == 1){
			globals.gbl_meses = globals.gbl_meses * 2
		}
		
		//grabar titulos periodo
		var $ano_tit = new Array()
		var $mes_tit = new Array()
		cargar_titulo_per($ano_tit, $mes_tit)
		globals.gbl_ano_tit = $ano_tit
		globals.gbl_mes_tit = $mes_tit
	    var $sector = 1
		var $tipo = 0
	    var $tipmov
		var $tipoprest
		var $concepto 
		var $subconcep
		var $total    
		var $periodo  
		var $categclie
		var $razonsoc		
		var $snd_rubro
		
		var $vl_tipmov
		var $vl_tipoprest
		var $vl_concepto
		var $vl_subconcep
		var $vl_categclie
		var $marca_totales
		
		switch (frm_index){				                   			         
			case 2:  $vl_tipmov     = 'vl_tipmov'			
                     $vl_tipoprest  = 'vl_tipoprest'
                     $vl_concepto   = 'vl_concepto'
                     $vl_subconcep  = 'vl_subconcep'
                     $vl_categclie  = 'vl_categclie';break
			case 3:  $vl_tipmov     = 'vl_tipcompra'
                     $vl_tipoprest  = 'vl_centro'
                     $vl_concepto   = 'vl_centro'
                     $vl_subconcep  = 'vl_centro'
                     $vl_categclie  = 'vl_tipprov';break
			case 33: $vl_tipmov     = 'vl_tipcompra'
                     $vl_tipoprest  = 'vl_gastos'
                     $vl_concepto   = 'vl_gastos'
                     $vl_subconcep  = 'vl_gastos'
                     $vl_categclie  = 'vl_tipprov';break 
			case 4:  $vl_tipmov     = 'vl_tipcompra'
                     $vl_tipoprest  = 'vl_centro'
                     $vl_concepto   = 'vl_centro'
                     $vl_subconcep  = 'vl_centro'
                     $vl_categclie  = 'vl_tipprov';break
	        case 44: $vl_tipmov     = 'vl_tipcompra'
                     $vl_tipoprest  = 'vl_gastos'
                     $vl_concepto   = 'vl_gastos'
                     $vl_subconcep  = 'vl_gastos'
                     $vl_categclie  = 'vl_tipprov';break
	        case 5:  $vl_tipmov     = 'vl_nada'
                     $vl_tipoprest  = 'vl_centro'
                     $vl_concepto   = 'vl_centro'
                     $vl_subconcep  = 'vl_centro'
                     $vl_categclie  = 'vl_tipprov';break
            case 55: $vl_tipmov     = 'vl_empreori_completa'
                     $vl_tipoprest  = 'vl_gastos'
                     $vl_concepto   = 'vl_gastos'
                     $vl_subconcep  = 'vl_gastos'
                     $vl_categclie  = 'vl_tipprov';break
            case 6:  $vl_tipmov     = 'vl_tipcompra'
                     $vl_tipoprest  = 'vl_centro'
                     $vl_concepto   = 'vl_centro'
                     $vl_subconcep  = 'vl_centro'
                     $vl_categclie  = 'vl_tipprov';break
            case 66: $vl_tipmov     = 'vl_tipcompra'
                     $vl_tipoprest  = 'vl_gastos'
                     $vl_concepto   = 'vl_gastos'
                     $vl_subconcep  = 'vl_gastos'
                     $vl_categclie  = 'vl_tipprov';break
            case 7:  $vl_tipmov     = 'vl_ente_recaudador';break 
            case 8:  $vl_tipmov     = 'vl_tipcompra'
                     $vl_tipoprest  = 'vl_centro'
                     $vl_concepto   = 'vl_centro'
                     $vl_subconcep  = 'vl_centro'
                     $vl_categclie  = 'vl_tipprov';break
            case 88: $vl_tipmov     = 'vl_tipcompra'
                     $vl_tipoprest  = 'vl_gastos'
                     $vl_concepto   = 'vl_gastos'
                     $vl_subconcep  = 'vl_gastos'
                     $vl_categclie  = 'vl_tipprov';break            
            case 10: $vl_tipmov     = 'vl_varios'
                     $vl_tipoprest  = 'vl_gastos';break 
            case 11: $vl_tipmov     = 'vl_res_ejec_cab'
                     $vl_tipoprest  = 'vl_res_ejec_gru';break 
		}
        
    	for (i= 1; i <= $max; i++){    		
			$tipo          = 1
			var $aux_imp   = 0.00 
			switch (frm_index){	
			    case  1 :
	                $tipmov    = utils.stringToNumber($ds.getValue(i,1))
	                $tipoprest = utils.stringToNumber($ds.getValue(i,2))
					$concepto  = utils.stringToNumber($ds.getValue(i,3))					
			        $subconcep = 0
					$categclie = null					
	                $aux_imp   = $ds.getValue(i,5)
	                $total     = $aux_imp
	                $periodo   = utils.stringToNumber($ds.getValue(i,4)).toString()
					$razonsoc  = utils.stringToNumber($ds.getValue(i,3))
	        	    sector_ant_imp = 'Resumen'			        
		            $sector    = 1
		            if($tipmov == 9){
		            	$concepto  = null
		            	var $tiptotal1 = '' 
						$tiptotal1 = $ds.getValue(i,2)
						var $tiptotal2 = ''
						$tiptotal2 = $ds.getValue(i,2)
		            	$snd_rubro = utils.stringToNumber($tiptotal1.toString().substr(0,1))
						$tipoprest    = utils.stringToNumber($tiptotal2.toString().substr(1,4))
						
		            }
		            ; break
				case  2 :
			        $tipmov    = utils.stringToNumber($ds.getValue(i,1))
			        $tipoprest = utils.stringToNumber($ds.getValue(i,2))
			        $concepto  = utils.stringToNumber($ds.getValue(i,3))
			        $subconcep = utils.stringToNumber($ds.getValue(i,4))
					$categclie = utils.stringToNumber($ds.getValue(i,20))
			        $aux_imp   = $ds.getValue(i,24)
			        $total     = $aux_imp
			        $periodo   = utils.stringToNumber($ds.getValue(i,15)).toString()			        
			        $razonsoc  = $ds.getValue(i,23)
				    sector_ant_imp = 'Ventas'			        
				    $sector    = 2; break
				case  3 : 
					$tipmov    = utils.stringToNumber($ds.getValue(i,2))
			   	    $tipoprest = utils.stringToNumber($ds.getValue(i,3))
				    $concepto  = utils.stringToNumber($ds.getValue(i,4))
				    $subconcep = utils.stringToNumber($ds.getValue(i,5))
					$categclie = utils.stringToNumber($ds.getValue(i,12))
				    $aux_imp   = $ds.getValue(i,21)
				    $total     = $aux_imp
				    $periodo   = utils.stringToNumber($ds.getValue(i,17)).toString()				    
				    $razonsoc  = $ds.getValue(i,22)
				    sector_ant_imp = 'Compras'					
				    $sector    = 3; break
				case 33 :	
					$tipmov    = utils.stringToNumber($ds.getValue(i,2))
			    	$tipoprest = utils.stringToNumber($ds.getValue(i,6))
				    $concepto  = utils.stringToNumber($ds.getValue(i,7))
				    $subconcep = utils.stringToNumber($ds.getValue(i,8))
					$categclie = utils.stringToNumber($ds.getValue(i,12))
				    $aux_imp   = $ds.getValue(i,21)
				    $total     = $aux_imp
				    $periodo   = utils.stringToNumber($ds.getValue(i,17)).toString()				    
				    $razonsoc  = $ds.getValue(i,22)
				    sector_ant_imp = 'Compras'					
				    $sector    = 3; break
				case  4:		
				    $tipmov    = utils.stringToNumber($ds.getValue(i,2))
				    $tipoprest = utils.stringToNumber($ds.getValue(i,3))
				    $concepto  = utils.stringToNumber($ds.getValue(i,4))
				    $subconcep = utils.stringToNumber($ds.getValue(i,5))
					$categclie = utils.stringToNumber($ds.getValue(i,12))
				    $aux_imp   = $ds.getValue(i,21)
				    $total     = $aux_imp
				    $periodo   = utils.stringToNumber($ds.getValue(i,17)).toString()				    
				    $razonsoc  = $ds.getValue(i,22)
				    sector_ant_imp = 'Prestaciones Médicas'				    
				    $sector    = 4; break
				case 44: 
					$tipmov    = utils.stringToNumber($ds.getValue(i,2))
			    	$tipoprest = utils.stringToNumber($ds.getValue(i,6))
				    $concepto  = utils.stringToNumber($ds.getValue(i,7))
				    $subconcep = utils.stringToNumber($ds.getValue(i,8))
					$categclie = utils.stringToNumber($ds.getValue(i,12))
				    $aux_imp   = $ds.getValue(i,21)
				    $total     = $aux_imp
				    $periodo   = utils.stringToNumber($ds.getValue(i,17)).toString()				    
				    $razonsoc  = $ds.getValue(i,22)
				    sector_ant_imp = 'Prestaciones Médicas'					
				    $sector    = 4; break
				case  5:
					$tipmov    = utils.stringToNumber($ds.getValue(i,1))
				    $tipoprest = utils.stringToNumber($ds.getValue(i,2))
				    $concepto  = utils.stringToNumber($ds.getValue(i,3))
				    $subconcep = utils.stringToNumber($ds.getValue(i,4))
					$categclie = utils.stringToNumber($ds.getValue(i,11))
				    $aux_imp   = $ds.getValue(i,20)
				    $total     = $aux_imp
				    $periodo   = utils.stringToNumber($ds.getValue(i,16)).toString()
				    
				    $razonsoc  = $ds.getValue(i,21)
				    sector_ant_imp = 'Recursos Humanos'					
				    $sector    = 5
				    scopes.globals.gbl_codigo = utils.stringToNumber($ds.getValue(i,34))
					if(scopes.globals.gbl_codigo != 0){ 
					    $categclie = tbc_categ_to_tbc_categ.categ22; break
					}
				case 55:
				    $tipmov    = utils.stringToNumber($ds.getValue(i,24))
				    $tipoprest = utils.stringToNumber($ds.getValue(i,5))
				    $concepto  = utils.stringToNumber($ds.getValue(i,6))
				    $subconcep = utils.stringToNumber($ds.getValue(i,7))
					$categclie = utils.stringToNumber($ds.getValue(i,11))
				    $aux_imp   = $ds.getValue(i,20)
				    $total     = $aux_imp
				    $periodo   = utils.stringToNumber($ds.getValue(i,16)).toString()				    
				    $razonsoc  = $ds.getValue(i,21)				    
					sector_ant_imp = 'Recursos Humanos'				    
				    $sector    = 5
				    scopes.globals.gbl_codigo = utils.stringToNumber($ds.getValue(i,34))
					if(scopes.globals.gbl_codigo != 0){
					    $categclie = tbc_categ_to_tbc_categ.categ22; break
					}
				case  6:
					$tipmov    = utils.stringToNumber($ds.getValue(i,2))
			    	$tipoprest = utils.stringToNumber($ds.getValue(i,3))
				    $concepto  = utils.stringToNumber($ds.getValue(i,4))
				    $subconcep = utils.stringToNumber($ds.getValue(i,5))
					$categclie = utils.stringToNumber($ds.getValue(i,12))
				    $aux_imp   = $ds.getValue(i,21)
				    $total     = $aux_imp
				    $periodo   = utils.stringToNumber($ds.getValue(i,17)).toString()				    
				    $razonsoc  = $ds.getValue(i,22)
				    sector_ant_imp = 'Finanzas'					
				    $sector    = 6; break
				case 66:
			        $tipmov    = utils.stringToNumber($ds.getValue(i,2))
			        $tipoprest = utils.stringToNumber($ds.getValue(i,6))
			        $concepto  = utils.stringToNumber($ds.getValue(i,7))
			        $subconcep = utils.stringToNumber($ds.getValue(i,8))
					$categclie = utils.stringToNumber($ds.getValue(i,12))
			        $aux_imp   = $ds.getValue(i,21)
			        $total     = $aux_imp
			        $periodo   = utils.stringToNumber($ds.getValue(i,17)).toString()			        
			        $razonsoc  = $ds.getValue(i,22)				    
				    sector_ant_imp = 'Finanzas'				    
			        $sector    = 6; break	
				case  7:
		            $tipmov    = $ds.getValue(i,1)
	                $tipoprest = $ds.getValue(i,2)
	                $concepto  = $ds.getValue(i,3)
	                $subconcep = $ds.getValue(i,4)				 
		            $categclie = null									    	
	                $aux_imp   = $ds.getValue(i,15)
	                $total     = $aux_imp
	                $periodo   = utils.stringToNumber($ds.getValue(i,5)).toString()			    
	                $razonsoc  = $ds.getValue(i,16) 
	    	        sector_ant_imp = 'Impuestos'					
	                $sector    = 7; break
				case  8:
					$tipmov    = utils.stringToNumber($ds.getValue(i,2))
				    $tipoprest = utils.stringToNumber($ds.getValue(i,3))
				    $concepto  = utils.stringToNumber($ds.getValue(i,4))
				    $subconcep = utils.stringToNumber($ds.getValue(i,5))
					$categclie = utils.stringToNumber($ds.getValue(i,12))
				    $aux_imp   = $ds.getValue(i,21)
				    $total     = $aux_imp
				    $periodo   = utils.stringToNumber($ds.getValue(i,17)).toString()				    
				    $razonsoc  = $ds.getValue(i,22)
				    sector_ant_imp = 'Legales'					
				    $sector    = 8; break
				case 88:
		            $tipmov    = utils.stringToNumber($ds.getValue(i,2))
		            $tipoprest = utils.stringToNumber($ds.getValue(i,6))
		            $concepto  = utils.stringToNumber($ds.getValue(i,7))
		            $subconcep = utils.stringToNumber($ds.getValue(i,8))
					$categclie = utils.stringToNumber($ds.getValue(i,12))
		            $aux_imp   = $ds.getValue(i,21)
		            $total     = $aux_imp
		            $periodo   = utils.stringToNumber($ds.getValue(i,17)).toString()		            
		            $razonsoc  = $ds.getValue(i,22)				    
			        sector_ant_imp = 'Legales'				    
		            $sector    = 8; break
				case  9:
					$tipmov    = utils.stringToNumber($ds.getValue(i,6))
				    $tipoprest = utils.stringToNumber($ds.getValue(i,7))
				    $concepto  = 0
				    $subconcep = 0				 
					$categclie = 0									    	
				    $aux_imp   = $ds.getValue(i,2)
				    $total     = $aux_imp
				    $periodo   = utils.stringToNumber($ds.getValue(i,1)).toString()				    
				    $razonsoc  = $ds.getValue(i,3) 				    	
				    sector_ant_imp = 'SND'					
				    $sector    = 9; break
				case 10:
				    $tipmov    = utils.stringToNumber($ds.getValue(i,5))
			        $tipoprest = utils.stringToNumber($ds.getValue(i,6))
			        $concepto  = 0
			        $subconcep = 0				 
				    $categclie = 0									    	
			        $aux_imp   = $ds.getValue(i,2)
			        $total     = $aux_imp
			        $periodo   = utils.stringToNumber($ds.getValue(i,1)).toString()			    
			        $razonsoc  = utils.stringToNumber($ds.getValue(i,4)) 
			    	sector_ant_imp = 'Varios'					
			        $sector    = 10; break
				case 11:
			        $tipmov    = utils.stringToNumber($ds.getValue(i,1))
		            $tipoprest = utils.stringToNumber($ds.getValue(i,2))
		            $concepto  = 0
		            $subconcep = 0				 
			        $categclie = 0									    	
		            $aux_imp   = $ds.getValue(i,4)
		            $total     = $aux_imp
		            $periodo   = utils.stringToNumber($ds.getValue(i,3)).toString()			    
		            $razonsoc  = '' 
		    	    sector_ant_imp = 'Resumen Ejecutivo'					
		            $sector    = 11
					globals.gbl_res_ejec_cab = $tipmov; break    
			}
			if(frm_index == 9){
				if(utils.stringToNumber($ds.getValue(i,5)) == 1){
				    $vl_tipmov     = 'vl_snd_rubro'
                    $vl_tipoprest  = 'vl_prusis_concop'
                    $vl_concepto   = ''
				}else{
					$vl_tipmov     = 'vl_prusis_concop'
                    $vl_tipoprest  = ''
                    $vl_concepto   = ''
				}
				
			}
			if(frm_index == 1){
				$vl_tipmov     = 'vl_sector';
				if(primera_vez == 0){
					switch ($tipmov){
					   	 case 2:  $vl_tipoprest  = 'vl_tipmov';
		                          $vl_concepto   = 'vl_tipoprest';break
					  	 case 3:  $vl_tipoprest  = 'vl_tipcompra';
	                              $vl_concepto   = 'vl_gastos';break
					  	 case 4:  $vl_tipoprest  = 'vl_tipcompra';
	                              $vl_concepto   = 'vl_gastos';break
					   	 case 5:  $vl_tipoprest  = 'vl_empreori_completa';
	                              $vl_concepto   = 'vl_gastos';break
					   	 case 6:  $vl_tipoprest  = 'vl_tipcompra';
	                              $vl_concepto   = 'vl_gastos';break
			    	     case 7:  $vl_tipoprest  = 'vl_ente_recaudador'
			    	    	      $vl_concepto   = '';break
			    	     case 8:  $vl_tipoprest  = 'vl_tipcompra';
	                              $vl_concepto   = 'vl_gastos';break
			    	     case 9:  if($snd_rubro == 1){
						              $vl_tipoprest  = 'vl_snd_rubro';
                                      
						          }else{
						        	  $vl_tipoprest  = 'vl_prusis_concop';
						          }
						          $vl_concepto   = '';break
					}  
	    		}else{
	    			switch (tipmov_ant){
				   	     case 2:  $vl_tipoprest  = 'vl_tipmov';
	                              $vl_concepto   = 'vl_tipoprest';break
				  	     case 3:  $vl_tipoprest  = 'vl_tipcompra';
                                  $vl_concepto   = 'vl_gastos';break
				  	     case 4:  $vl_tipoprest  = 'vl_tipcompra';
                                  $vl_concepto   = 'vl_gastos';break
				   	     case 5:  $vl_tipoprest  = 'vl_empreori_completa';
                                  $vl_concepto   = 'vl_gastos';break
				   	     case 6:  $vl_tipoprest  = 'vl_tipcompra';
                                  $vl_concepto   = 'vl_gastos';break
		    	         case 7:  $vl_tipoprest  = 'vl_ente_recaudador'
		    	                  $vl_concepto   = '';break
		    	         case 8:  $vl_tipoprest  = 'vl_tipcompra';
                                  $vl_concepto   = 'vl_gastos';break
		    	         case 9:  if(snd_rubro_ant == 1){
				                      $vl_tipoprest  = 'vl_snd_rubro';
                              
				                  }else{
				        	          $vl_tipoprest  = 'vl_prusis_concop';
				                  }
				                  $vl_concepto   = ''
				                  if($snd_rubro != snd_rubro_ant){
										snd_rubro_ant = $snd_rubro
								  };break
				    }
	    		}
			}
			
			if ($tipmov != tipmov_ant){
				if(primera_vez == 1){
					if (frm_tot_per2 != null){
			    		//graba linea detalle clientes
					    $tit_aux = '                                         ' + razonsoc_ant
					    $col = new Array()
					    $tipo = 6
						for (j= 0; j < 12; j++){
					    	if (j < globals.gbl_meses){
								$col[j] = aux_periodo_tabla_razonsoc[j]
					    	}else{
					    		$col[j] = null
					    	}
					    }
					    if(frm_index == 9){
					        $visible = 1
					        $tit_aux = '                 ' + razonsoc_ant
					    }else{
					    	$visible = 0
					    }
					    $ds2.addRow([$visible,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
			                        $col[7], $col[8], $col[9], $col[10], $col[11],0, razonsoc_ant,
									sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									0,0,0,0,0,0,0,0,0,0,0,0])
 
					    for (j= 0; j < 12; j++){
    						    aux_periodo_tabla_razonsoc[j] = 0
					    }
					    frm_tot_per2 = null						
				    }
					//graba linea Subtotal categclie
					if (frm_tot_per3 != null){				
						$tit_aux = '                                                    '
			                    + 'Subtotal  ' + application.getValueListDisplayValue($vl_categclie,categclie_ant)
						
		                $tipo = 6
		                $col = new Array()
		                for (j= 0; j < 12; j++){
			                if (j < globals.gbl_meses){
  				                $col[j] = aux_periodo_tabla_subtotal_categclie[j]
   	                        }else{
   		                        $col[j] = null
   	                        }
   	                    }  	         	        
								 
		                $ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
	 	                            $col[7], $col[8], $col[9], $col[10], $col[11],1, 'Todos',
									sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									0,0,0,0,0,0,0,0,0,0,0,0])
						$ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant,'', null, null, null, null, null, null, null,
	                                null, null, null, null, null,null, '',									
									sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									0,0,0,0,0,0,0,0,0,0,0,0])
		                for (j= 0; j < 12; j++){
			                aux_periodo_tabla_subtotal_categclie[j] = 0
		                }
		                frm_tot_per3 = null   
		            }
                    //graba linea subconcep
					if (frm_tot_per != null){						
						var $tit_aux 
						$tit_aux = application.getValueListDisplayValue($vl_subconcep,subconcep_ant)						
						//if(frm_index == 7 && tipmov_ant == 1){
						if(frm_index == 7){
							globals.gbl_ente   = tipmov_ant
							globals.gbl_tabla  = 3
							globals.gbl_codigo = subconcep_ant
   							$tit_aux = tbc_maestros_to_tbc_maestros.impudescrip						
						}
						
					    $tit_aux = '                               ' + $tit_aux
						//ojo
						if(subconcep_ant == 0){
							$tit_aux = '                 ' + application.getValueListDisplayValue($vl_concepto,concepto_ant)	
						}
						if(frm_index == 1 && (tipmov_ant == 7 || tipmov_ant == 9)){
					    	$tit_aux = '                 ' + application.getValueListDisplayValue($vl_tipoprest ,tipoprest_ant)
						}
						if(frm_index == 11){
							globals.gbl_res_ejec_cab = tipmov_ant
					    	$tit_aux = '                 ' + application.getValueListDisplayValue($vl_tipoprest ,tipoprest_ant)
						}
					    $col = new Array()
					    $tipo = 4
					    for (var j= 0; j < 12; j++){
					    	if (j < globals.gbl_meses){
					    		$col[j] = aux_periodo_tabla_tot[j]
					    	}else{
					    		$col[j] = null
					    	}
					    }
					    if(frm_index == 7){
					    	if(tipmov_ant != 1){
					    		categclie_ant_imp = null	
					    	}else{
					     	    categclie_ant_imp = tbc_maestros_to_tbc_maestros.impudescrip
					    	}
							$tipo = 6							
					    }else{
					        categclie_ant_imp = 'Todos'					        
					    }
					    if($sector != 9 || $sector != 11){	
					        $ds2.addRow([1,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, 0, $tit_aux,$col[0],$col[1],$col[2],$col[3],$col[4],$col[5],$col[6],
			                        $col[7], $col[8], $col[9], $col[10], $col[11],0, null,
									sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									0,0,0,0,0,0,0,0,0,0,0,0])
					    }
					    for (j= 0; j < 12; j++){
					    	aux_periodo_tabla_tot[j] = 0							
					    }
					    frm_tot_per  = null					
					}					
					
					//graba totales tipoprest
					$tit_aux = '                                            '
					     + 'Total ' + application.getValueListDisplayValue($vl_tipoprest ,tipoprest_ant)
					if(frm_index == 7){
						globals.gbl_ente   = tipmov_ant
						globals.gbl_tabla  = 1
						globals.gbl_codigo = tipoprest_ant						
						$tit_aux = '                                            '
					     + 'Total ' + tbc_maestros_to_tbc_maestros.impudescrip
					}					
					$tipo = 7
					$col = new Array()
					for (j= 0; j < 12; j++){
						if (j < globals.gbl_meses){
							$col[j] = aux_periodo_tabla_subtotal[j]
			    	    }else{
			    		    $col[j] = null
			    	    }
			    	}
			    	
			    	if(frm_index == 1 && (tipmov_ant == 7 || tipmov_ant == 9)){
						concepto_ant = $concepto
					}else{
						if(frm_index != 11){					
					        $ds2.addRow([1,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
				 	             $col[7], $col[8], $col[9], $col[10], $col[11],0, null,
				                 sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, 'ZZZ', subconcep_ant_imp, categclie_ant_imp,0,
								 0,0,0,0,0,0,0,0,0,0,0,0])
					    }
					}
					for (j= 0; j < 12; j++){
						aux_periodo_tabla_subtotal[j] = 0
				    }
					
					//graba totales tipmov
				    
				    $tit_aux = application.getValueListDisplayValue($vl_tipmov,tipmov_ant)
					
					$tit_aux = '                               ' 
						     + 'Total ' + $tit_aux
					$tipo = 8
					$col = new Array()
					for (j= 0; j < 12; j++){
						if (j < globals.gbl_meses){
							$col[j] = aux_periodo_tabla_totalgen[j]
			    	    }else{
			    		    $col[j] = null
			    	    }
			    	}
			    	$ds2.addRow([1,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant,'', null, null, null, null, null, null, null,
   	                             null, null, null, null, null,0, null, null, null, 'ZZZ', 'ZZZ', 'ZZZ', null,0,
								 0,0,0,0,0,0,0,0,0,0,0,0])
					 
					$ds2.addRow([1,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
				 	             $col[7], $col[8], $col[9], $col[10], $col[11],0, null,
								 sector_ant_imp, tipmov_ant_imp, 'ZZZ', 'ZZZ', 'ZZZ', categclie_ant_imp,0,
								 0,0,0,0,0,0,0,0,0,0,0,0])					
					for (j= 0; j < 12; j++){
						aux_periodo_tabla_totalgen[j] = 0
				    }			    	
				}
				$tipo = 1
				
				$tit_aux = application.getValueListDisplayValue($vl_tipmov,$tipmov)
                //graba titulo_1
			    $tit_aux = '  ' + $tit_aux
				tipmov_ant_imp = application.getValueListDisplayValue($vl_tipmov,$tipmov)
				
			    $ds2.addRow([1,$sector, $tipo, $tipmov, null, null, null, null, $tit_aux,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
			                 sector_ant_imp, tipmov_ant_imp, ' ', ' ', ' ', ' ',0,
							 0,0,0,0,0,0,0,0,0,0,0,0])			   
				tipmov_ant    = $tipmov				 
		        tipoprest_ant = null
		        concepto_ant  = null
				subconcep_ant = null
				categclie_ant = null
				razonsoc_ant  = null
				
				if(frm_index == 1){
					$vl_tipmov     = 'vl_sector';
					switch ($tipmov){
						   	 case 2:  $vl_tipoprest  = 'vl_tipmov';
			                          $vl_concepto   = 'vl_tipoprest';break
						  	 case 3:  $vl_tipoprest  = 'vl_tipcompra';
		                              $vl_concepto   = 'vl_gastos';break
						  	 case 4:  $vl_tipoprest  = 'vl_tipcompra';
		                              $vl_concepto   = 'vl_gastos';break
						   	 case 5:  $vl_tipoprest  = 'vl_empreori_completa';
		                              $vl_concepto   = 'vl_gstos';		                              
						   	 case 6:  $vl_tipoprest  = 'vl_tipcompra';
		                              $vl_concepto   = 'vl_gastos';break
				    	     case 7:  $vl_tipoprest  = 'vl_ente_recaudador'
				    	    	      $vl_concepto   = '';break
				    	     case 8:  $vl_tipoprest  = 'vl_tipcompra';
		                              $vl_concepto   = 'vl_gastos';break
				    	     case 9:  if($snd_rubro == 1){
					                      $vl_tipoprest  = 'vl_snd_rubro';                                  
					                  }else{
					        	          $vl_tipoprest  = 'vl_prusis_concop';
					                  }
					                  $vl_concepto   = '';break
						}
				}
			}
			if ($tipoprest != tipoprest_ant){
				if(primera_vez == 1){
					if (frm_tot_per2 != null){
			    		//graba linea detalle clientes
					    $tit_aux = '                                         ' + razonsoc_ant
					    $col = new Array()
					    $tipo = 6
						for (j= 0; j < 12; j++){
					    	if (j < globals.gbl_meses){
					    	    $col[j] = aux_periodo_tabla_razonsoc[j]
					    	}else{
					    		$col[j] = null
					    	}
					    }
					    if(frm_index == 9){
					        $visible = 1
							$tit_aux = '                 ' + razonsoc_ant
					    }else{
					    	$visible = 0
					    }
					    $ds2.addRow([$visible,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
			                        $col[7], $col[8], $col[9], $col[10], $col[11],0, razonsoc_ant,
									sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									0,0,0,0,0,0,0,0,0,0,0,0])						
					    for (j= 0; j < 12; j++){
						    aux_periodo_tabla_razonsoc[j] = 0
					    }
					    frm_tot_per2 = null
				    }
					//graba linea Subtotal categclie
					if (frm_tot_per3 != null){				
				        $tit_aux = '                                                    '
			                    + 'Subtotal  ' + application.getValueListDisplayValue($vl_categclie,categclie_ant)

		                $tipo = 6
		                $col = new Array()
		                for (j= 0; j < 12; j++){
			                if (j < globals.gbl_meses){  	
  				                $col[j] = aux_periodo_tabla_subtotal_categclie[j]
   	                        }else{
   		                        $col[j] = null
   	                        }
   	                    }  	                    		 
   	                    $ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
                                     $col[7], $col[8], $col[9], $col[10], $col[11],1, 'Todos',
						             sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									 0,0,0,0,0,0,0,0,0,0,0,0])
			            $ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant,'', null, null, null, null, null, null, null,
                                     null, null, null, null, null,null, '',									 
									 sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									 0,0,0,0,0,0,0,0,0,0,0,0])
						for (j= 0; j < 12; j++){
			                aux_periodo_tabla_subtotal_categclie[j] = 0
		                }
		                frm_tot_per3 = null   
		            }
		        	//graba linea subconcep
					if (frm_tot_per != null){
						
						$tit_aux = application.getValueListDisplayValue($vl_subconcep,subconcep_ant)						
						//if(frm_index == 7 && tipmov_ant == 1){
						if(frm_index == 7){
							globals.gbl_ente   = tipmov_ant
							globals.gbl_tabla  = 3
							globals.gbl_codigo = subconcep_ant
							$tit_aux = tbc_maestros_to_tbc_maestros.impudescrip
						}						
						
						//ojo			
						$tit_aux = '                               ' + $tit_aux
						if(subconcep_ant == 0){
							$tit_aux = '                 ' + application.getValueListDisplayValue($vl_concepto,concepto_ant)
						}
						if(frm_index == 1 && (tipmov_ant == 7 || tipmov_ant == 9)){
					    	$tit_aux = '                 ' + application.getValueListDisplayValue($vl_tipoprest ,tipoprest_ant)
						}
						
						if(frm_index == 11){
							globals.gbl_res_ejec_cab = tipmov_ant
					    	$tit_aux = '                 ' + application.getValueListDisplayValue($vl_tipoprest ,tipoprest_ant)
						}
						
						$col = new Array()
						$tipo = 4
						for (j= 0; j < 12; j++){
					    	if (j < globals.gbl_meses){
					    		$col[j] = aux_periodo_tabla_tot[j]
					    	}else{
					    		$col[j] = null
					    	}
					    }					    
					    if(frm_index == 7){
					    	if(tipmov_ant != 1){
				    		    categclie_ant_imp = null	
				    	    }else{
					     	    categclie_ant_imp = tbc_maestros_to_tbc_maestros.impudescrip
				    	    }
							$tipo = 6
							$marca_totales = 1
					    }else{
					        categclie_ant_imp = 'Todos'
					        $marca_totales = 0
					    }
					    if($sector != 9 || $sector != 11){
  					        $ds2.addRow([1,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, 0, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
				                    $col[7], $col[8], $col[9], $col[10], $col[11],0, null,
									sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp, 0,
									0,0,0,0,0,0,0,0,0,0,0,0])
					    }     
						for (j= 0; j < 12; j++){
							aux_periodo_tabla_tot[j] = 0							
						}
						frm_tot_per  = null					
					}
					//graba totales tipoprest
					if(tipoprest_ant != null){
												 
						$tit_aux = '                                            '
					             + 'Total ' + application.getValueListDisplayValue($vl_tipoprest,tipoprest_ant)
						if(frm_index == 7){
							globals.gbl_ente   = tipmov_ant
							globals.gbl_tabla  = 1							
							globals.gbl_codigo = tipoprest_ant							
						       $tit_aux = '                                            '
				                        + 'Total ' + tbc_maestros_to_tbc_maestros.impudescrip
						}
					    $tipo = 7
					    $col = new Array()
					    for (j= 0; j < 12; j++){
						    if (j < globals.gbl_meses){
							    $col[j] = aux_periodo_tabla_subtotal[j]
			    	        }else{
			    		        $col[j] = null
			    	        }
			    	    }  
			    	    if(frm_index == 1 && (tipmov_ant == 7 || tipmov_ant == 9)){
							concepto_ant = $concepto
						}else{
							if(frm_index != 11){
					            $ds2.addRow([1,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
				 	                 $col[7], $col[8], $col[9], $col[10], $col[11],0, null,									
									 sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, 'ZZZ', subconcep_ant_imp, categclie_ant_imp,0,
									 0,0,0,0,0,0,0,0,0,0,0,0])					        
							}
							for (j= 0; j < 12; j++){
						        aux_periodo_tabla_subtotal[j] = 0 
							}
					    }
				    }
				}
				$tipo = 2
				
				$tit_aux = application.getValueListDisplayValue($vl_tipoprest,$tipoprest)
				if(frm_index == 7){
					globals.gbl_ente    = $tipmov
					globals.gbl_tabla   = 1
					globals.gbl_codigo  = $tipoprest
					$tit_aux = tbc_maestros_to_tbc_maestros.impudescrip
				}

				//graba titulo_2
				if(frm_index == 7){
					if($tipoprest == null){
			    		tipoprest_ant_imp = ''	
			    	}else{
					    tipoprest_ant_imp = $tit_aux
			    	}
					$tipo = 6
					$marca_totales = 1
				}else{
					tipoprest_ant_imp = application.getValueListDisplayValue($vl_tipoprest,$tipoprest)
					$marca_totales = 0
				}
			    $tit_aux = '        ' + $tit_aux
			     
				if(frm_index == 1 && (tipmov_ant == 7 || tipmov_ant == 9)){
					concepto_ant = $concepto
				}else{
					if(frm_index != 11){
				        $ds2.addRow([1,$sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie, $tit_aux,null,null,null,null,null,null,null,null,null,null,null,null,null,null,				
				            sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, ' ', ' ', ' ',$marca_totales,
							0,0,0,0,0,0,0,0,0,0,0,0])
					}
				}
				tipoprest_ant = $tipoprest				
		        concepto_ant  = null
				subconcep_ant = null
				categclie_ant = null
				razonsoc_ant  = null				
			}
			if ($concepto != concepto_ant){
				if(primera_vez == 1){
					if (frm_tot_per2 != null){
			    		//graba linea detalle clientes
					    $tit_aux = '                                         ' + razonsoc_ant
					    $col = new Array()
					    $tipo = 6
						for (j= 0; j < 12; j++){
					    	if (j < globals.gbl_meses){
					    		$col[j] = aux_periodo_tabla_razonsoc[j]
					    	}else{
					    		$col[j] = null
					    	}
					    }
					    $ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
			                         $col[7], $col[8], $col[9], $col[10], $col[11],0,razonsoc_ant,
									 sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									 0,0,0,0,0,0,0,0,0,0,0,0]) 
					    for (j= 0; j < 12; j++){
						    aux_periodo_tabla_razonsoc[j] = 0
					    }
					    frm_tot_per2 = null
				    }
				    //graba linea Subtotal categclie
					if (frm_tot_per3 != null){				
						
					    $tit_aux = '                                                    '
			                    + 'Subtotal  ' + application.getValueListDisplayValue($vl_categclie,categclie_ant)

		                $tipo = 6
		                $col = new Array()
		                for (j= 0; j < 12; j++){
			                if (j < globals.gbl_meses){  
  				                $col[j] = aux_periodo_tabla_subtotal_categclie[j]
   	                        }else{
   		                        $col[j] = null
   	                        }
   	                    }  
   	               
   	                    $ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
                                     $col[7], $col[8], $col[9], $col[10], $col[11],1, 'Todos',
						             sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									 0,0,0,0,0,0,0,0,0,0,0,0])
			            $ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant,'', null, null, null, null, null, null, null,
                                     null, null, null, null, null,null, '',									 
									 sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									 0,0,0,0,0,0,0,0,0,0,0,0])
   	                    for (j= 0; j < 12; j++){
			                aux_periodo_tabla_subtotal_categclie[j] = 0
		                }
		                frm_tot_per3 = null   
		            }
					//graba linea subconcep
					if (frm_tot_per != null){
					
						$tit_aux = application.getValueListDisplayValue($vl_subconcep,subconcep_ant)
						//if(frm_index == 7 && tipmov_ant == 1){
						if(frm_index == 7){
							globals.gbl_ente   = tipmov_ant
							globals.gbl_tabla  = 3
							globals.gbl_codigo = subconcep_ant
							$tit_aux = tbc_maestros_to_tbc_maestros.impudescrip
						}						
						
						$tit_aux = '                               ' + $tit_aux
						//ojo
						if(subconcep_ant == 0){
							$tit_aux = '                 ' + application.getValueListDisplayValue($vl_concepto,concepto_ant)
						}
						$col = new Array()
						$tipo = 4
						for (j= 0; j < 12; j++){
					    	if (j < globals.gbl_meses){
					    	    $col[j] = aux_periodo_tabla_tot[j]
					    	}else{
					    		$col[j] = null
					    	}
					    }
					    if(frm_index == 7){
					    	if(tipmov_ant != 1){
					    		categclie_ant_imp = null	
					    	}else{
					     	    categclie_ant_imp = tbc_maestros_to_tbc_maestros.impudescrip
					    	}
							$tipo = 6							
					    }else{
					        categclie_ant_imp = 'Todos'					       
					    }
						$ds2.addRow([1,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, 0, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
				                     $col[7], $col[8], $col[9], $col[10], $col[11],0, null,
									 sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp, 0,
									 0,0,0,0,0,0,0,0,0,0,0,0])     
						for (j= 0; j < 12; j++){
							aux_periodo_tabla_tot[j] = 0					
						}
						frm_tot_per  = null						
					}
				}
				$tipo = 3
				
				$tit_aux = application.getValueListDisplayValue($vl_concepto,$concepto)
				//if(frm_index == 7 && $tipmov == 1){
				if(frm_index == 7){	
					globals.gbl_ente   = $tipmov
					globals.gbl_tabla  = 2
					globals.gbl_codigo = $concepto
					$tit_aux = tbc_maestros_to_tbc_maestros.impudescrip
				}				
				
				//graba titulo_3
				$tit_aux = '                 ' + $tit_aux
				if(frm_index == 7){
					if($tipmov != 1){
			    		concepto_ant_imp = null	
			    	}else{
			     	    concepto_ant_imp = tbc_maestros_to_tbc_maestros.impudescrip
			    	}
					$tipo = 6
					$marca_totales = 1
			    }else{
				    concepto_ant_imp = application.getValueListDisplayValue($vl_concepto,$concepto)
					$marca_totales = 0
			    }
				//ojo
				if($subconcep != 0){
				    $ds2.addRow([1,$sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie, $tit_aux,null,null,null,null,null,null,null,null,null,null,null,null,null,null,			   
				             sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, 'AAA', categclie_ant_imp, $marca_totales,
							 0,0,0,0,0,0,0,0,0,0,0,0])
				}							 
				concepto_ant  = $concepto				
				subconcep_ant = null
				categclie_ant = null
				razonsoc_ant  = null
			}
			if ($subconcep != subconcep_ant){
			    if(primera_vez == 1){
			    	if (frm_tot_per2 != null){
			    		//graba linea detalle clientes
					    $tit_aux = '                                         ' + razonsoc_ant
					    $col = new Array()
					    $tipo = 6
						for (j= 0; j < 12; j++){
					    	if (j < globals.gbl_meses){
					    	    $col[j] = aux_periodo_tabla_razonsoc[j]
					    	}else{
					    		$col[j] = null
					    	}
					    }
					    $ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
			                        $col[7], $col[8], $col[9], $col[10], $col[11],0, razonsoc_ant,
									sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									0,0,0,0,0,0,0,0,0,0,0,0]) 
					    for (j= 0; j < 12; j++){
						    aux_periodo_tabla_razonsoc[j] = 0
					    }
					    frm_tot_per2 = null
				    }
				    //graba linea Subtotal categclie
					if (frm_tot_per3 != null){				
						
					    $tit_aux = '                                                    '
			                    + 'Subtotal  ' + application.getValueListDisplayValue($vl_categclie,categclie_ant) 
						
		                $tipo = 6
		                $col = new Array()
		                for (j= 0; j < 12; j++){
			                if (j < globals.gbl_meses){
			                	$col[j] = aux_periodo_tabla_subtotal_categclie[j]
   	                        }else{
   		                        $col[j] = null
   	                        }
   	                    }  
   	                    								 
   	                    $ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
                                     $col[7], $col[8], $col[9], $col[10], $col[11],1, 'Todos',
						             sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									 0,0,0,0,0,0,0,0,0,0,0,0])
			            $ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant,'', null, null, null, null, null, null, null,
                                     null, null, null, null, null,null, '',									 
									 sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									 0,0,0,0,0,0,0,0,0,0,0,0])
		                for (j= 0; j < 12; j++){
			                aux_periodo_tabla_subtotal_categclie[j] = 0
		                }
		                frm_tot_per3 = null   
		            }
			    	if (frm_tot_per != null){
			    		//graba linea subconcep
			    		
			    		$tit_aux = application.getValueListDisplayValue($vl_subconcep,subconcep_ant)
						//if(frm_index == 7 && tipmov_ant == 1){
						if(frm_index == 7){	
							globals.gbl_ente   = tipmov_ant
							globals.gbl_tabla  = 3
							globals.gbl_codigo = subconcep_ant
							$tit_aux = tbc_maestros_to_tbc_maestros.impudescrip
						}						
			    
					    $tit_aux = '                               ' + $tit_aux
						//ojo
						if(subconcep_ant == 0){
							$tit_aux = '                 ' + application.getValueListDisplayValue($vl_concepto,concepto_ant)
						}
						$col = new Array()
					    $tipo = 4
						for (j= 0; j < 12; j++){
					    	if (j < globals.gbl_meses){
					    		$col[j] = aux_periodo_tabla_tot[j]
					    	}else{
					    		$col[j] = null
					    	}
						}
						if(frm_index == 7){
							if(tipmov_ant != 1){
					    		categclie_ant_imp = null	
					    	}else{
					     	    categclie_ant_imp = tbc_maestros_to_tbc_maestros.impudescrip
					    	}
							$tipo = 6
							$marca_totales = 1
					    }else{
					        categclie_ant_imp = 'Todos'
					        $marca_totales = 0
					    }
					    $ds2.addRow([1,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, 0, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
			                        $col[7], $col[8], $col[9], $col[10], $col[11],0, null,
									sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp, 0,
									0,0,0,0,0,0,0,0,0,0,0,0]) 
					    for (j= 0; j < 12; j++){
						    aux_periodo_tabla_tot[j] = 0							
					    }
					    frm_tot_per  = null						
				    } 
			    }
			    subconcep_ant = $subconcep
			    subconcep_ant_imp = application.getValueListDisplayValue($vl_subconcep,subconcep_ant)
				//if(frm_index == 7 && tipmov_ant == 1){
				if(frm_index == 7){
					globals.gbl_ente   = tipmov_ant
					globals.gbl_tabla  = 3
					globals.gbl_codigo = subconcep_ant
					$tit_aux = tbc_maestros_to_tbc_maestros.impudescrip
				}				
			    
		//ojo		if(frm_index == 5 || frm_index == 55 && subconcep_ant_imp == ''){
		//			subconcep_ant_imp = $sector_rrhh
		//		}
			    categclie_ant = null
				razonsoc_ant  = null			    
		    }
				    
		    // Esto es para el detalle del subconcep
			if ($categclie != categclie_ant){
				if(primera_vez == 1){		            
					if (frm_tot_per2 != null){
						//graba linea detalle clientes					
						$tit_aux = '                                         ' + razonsoc_ant
						$col = new Array()
						$tipo = 6
						for (j= 0; j < 12; j++){
					    	if (j < globals.gbl_meses){
					    	    $col[j] = aux_periodo_tabla_razonsoc[j]
					    	}else{
					    		$col[j] = null
					    	}
					    }
						$ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
				                     $col[7], $col[8], $col[9], $col[10], $col[11],0, razonsoc_ant,
									 sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									 0,0,0,0,0,0,0,0,0,0,0,0])     
						for (j= 0; j < 12; j++){
							aux_periodo_tabla_razonsoc[j] = 0
						}
						frm_tot_per2 = null
					}
					//graba linea Subtotal categclie
					if (frm_tot_per3 != null){				
						
					    $tit_aux = '                                                    '
			                    + 'Subtotal  ' + application.getValueListDisplayValue($vl_categclie,categclie_ant)
						
		                $tipo = 6
		                $col = new Array()
		                for (j= 0; j < 12; j++){
			                if (j < globals.gbl_meses){
  				                $col[j] = aux_periodo_tabla_subtotal_categclie[j]
   	                        }else{
   		                        $col[j] = null
   	                        }
   	                    }  
   	                    								 
   	                    $ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
                                     $col[7], $col[8], $col[9], $col[10], $col[11],1, 'Todos',
						             sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
						             0,0,0,0,0,0,0,0,0,0,0,0])
			            $ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant,'', null, null, null, null, null, null, null,
                                    null, null, null, null, null,null, '',							
									sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									0,0,0,0,0,0,0,0,0,0,0,0])
		                for (j= 0; j < 12; j++){
			                aux_periodo_tabla_subtotal_categclie[j] = 0
		                }
		                frm_tot_per3 = null   
		            }
				}
				// graba titulo categclie
				$tipo = 6				
				$tit_aux = application.getValueListDisplayValue($vl_categclie,$categclie)
				
				//graba titulo Detalle
				$tit_aux = '                             ' + $tit_aux				
				categclie_ant_imp = application.getValueListDisplayValue($vl_categclie,$categclie)
				$ds2.addRow([0,$sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie, $tit_aux,null,null,null,null,null,null,null,null,null,null,null,null,null,'',
				             sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
							 0,0,0,0,0,0,0,0,0,0,0,0])
				categclie_ant = $categclie				
				razonsoc_ant  = null
			}
			if ($razonsoc != razonsoc_ant){ 
			    if(primera_vez == 1){
			    	if (frm_tot_per2 != null){
			    		//graba linea detalle
					    $tit_aux = '                                         ' + razonsoc_ant
					    $col = new Array()
					    $tipo = 6
						for (j= 0; j < 12; j++){
					    	if (j < globals.gbl_meses){
					    	    $col[j] = aux_periodo_tabla_razonsoc[j]
					    	}else{
					    		$col[j] = null
					    	}
					    }
					    var $visible = 0
						var $razonsoc_aux = razonsoc_ant						
						if (frm_index == 9 || frm_index == 10){
							$tit_aux = '                 ' + razonsoc_ant_des
							$razonsoc_aux = razonsoc_ant_des
							$visible = 1
						}
					    $ds2.addRow([$visible,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
			                        $col[7], $col[8], $col[9], $col[10], $col[11],0, $razonsoc_aux,
									sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
									0,0,0,0,0,0,0,0,0,0,0,0]) 
					    for (j= 0; j < 12; j++){
						    aux_periodo_tabla_razonsoc[j] = 0
					    }
					    frm_tot_per2 = null
				    }
			    }
				razonsoc_ant     = $razonsoc
				razonsoc_ant_des = $ds.getValue(i,3)
			    primera_vez = 1
		    }		    
		    
            // Sumatoria del período
		   var $tope = 12
		   if (globals.gbl_agrupacion != 1 && globals.gbl_comparar == 1){
			   $tope = 24
		   }
			for (j= 0; j < $tope; j++){
				if(globals.periodo_tabla_per[j] == $periodo){
					aux_periodo_tabla_tot[vector[j]]      = aux_periodo_tabla_tot[vector[j]] + $total
					aux_periodo_tabla_subtotal[vector[j]] = aux_periodo_tabla_subtotal[vector[j]] + $total
					aux_periodo_tabla_totalgen[vector[j]] = aux_periodo_tabla_totalgen[vector[j]] + $total
					aux_periodo_tabla_razonsoc[vector[j]] = aux_periodo_tabla_razonsoc[vector[j]] + $total
					if(frm_index == 1){
						if ($tipmov == 2){
						    aux_periodo_tabla_totaltotal[vector[j]]  = aux_periodo_tabla_totaltotal[vector[j]] + $total
						}else{
							aux_periodo_tabla_totaltotal[vector[j]]  = aux_periodo_tabla_totaltotal[vector[j]] - $total
							aux_periodo_tabla_totalgastos[vector[j]] = aux_periodo_tabla_totalgastos[vector[j]] + $total
						}
					}else{
						if(frm_index == 11){// para Resumen Ejecutivo 
							if ($tipmov == 8){
							    aux_periodo_tabla_totaltotal[vector[j]]  = aux_periodo_tabla_totaltotal[vector[j]]  + $total
								aux_resumen_ejec_totalvta[vector[j]]     = aux_resumen_ejec_totalvta[vector[j]]     + $total
								aux_periodo_tabla_totalgastos[vector[j]] = aux_periodo_tabla_totalgastos[vector[j]] + $total
							}else{								
								if ($tipmov == 9){
									aux_periodo_tabla_totaltotal[vector[j]]  = aux_periodo_tabla_totaltotal[vector[j]]  + $total
									aux_periodo_tabla_totalgastos[vector[j]] = aux_periodo_tabla_totalgastos[vector[j]] + $total
									aux_resumen_ejec_totalcosop[vector[j]]   = aux_resumen_ejec_totalcosop[vector[j]]   - $total
								}else{
									if ($tipmov == 10){
									    aux_periodo_tabla_totaltotal[vector[j]]  = aux_periodo_tabla_totaltotal[vector[j]]  - $total
									    aux_periodo_tabla_totalgastos[vector[j]] = aux_periodo_tabla_totalgastos[vector[j]] - $total
										aux_resumen_ejec_totalcosop[vector[j]]   = aux_resumen_ejec_totalcosop[vector[j]]   + $total
									}else{
									    if ($tipmov == 11){
									        aux_periodo_tabla_totaltotal[vector[j]] = aux_periodo_tabla_totaltotal[vector[j]] - $total
											aux_resumen_ejec_totalconop[vector[j] ] = aux_resumen_ejec_totalconop[vector[j]]  + $total
									    }
									}
								}
							}
						}else{	
					        aux_periodo_tabla_totaltotal[vector[j]]     = aux_periodo_tabla_totaltotal[vector[j]] + $total
						}
					}
					aux_periodo_tabla_subtotal_categclie[vector[j]] = aux_periodo_tabla_subtotal_categclie[vector[j]] + $total
					frm_tot_per  = frm_tot_per + $total
					frm_tot_per2 = frm_tot_per2 + $total
					frm_tot_per3 = frm_tot_per3 + $total
					j = 99
				}
			}			
		}		
			
		cargar_tabla2(razonsoc_ant, $razonsoc_aux, $visible, razonsoc_ant_des, tipmov_ant, tipoprest_ant, concepto_ant, 
			          subconcep_ant, categclie_ant, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, $vl_categclie, 
			          $vl_subconcep, $snd_rubro , $vl_tipoprest, $vl_concepto, $vl_tipmov,
			          $ds2, $sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie, sector_ant_imp,
			          tipmov_ant_imp, categclie_ant_imp, $tit_aux, $col)
	}
}

/** 
 * @param razonsoc_ant
 * @param $razonsoc_aux
 * @param $visible
 * @param razonsoc_ant_des
 * @param tipmov_ant
 * @param tipoprest_ant
 * @param concepto_ant
 * @param subconcep_ant
 * @param categclie_ant
 * @param tipoprest_ant_imp
 * @param concepto_ant_imp
 * @param subconcep_ant_imp
 * @param $vl_categclie
 * @param $vl_subconcep
 * @param $snd_rubro
 * @param $vl_tipoprest
 * @param $vl_concepto
 * @param $vl_tipmov
 * @param $ds2
 * @param $sector
 * @param $tipo
 * @param $tipmov
 * @param $tipoprest
 * @param $concepto
 * @param $subconcep
 * @param $categclie
 * @param sector_ant_imp
 * @param tipmov_ant_imp
 * @param categclie_ant_imp
 * @param $tit_aux
 * @param $col
 *
 * @properties={typeid:24,uuid:"AC94D522-FD87-4BB1-A784-963115CB073F"}
 */
function cargar_tabla2(razonsoc_ant, $razonsoc_aux, $visible, razonsoc_ant_des, tipmov_ant, tipoprest_ant, concepto_ant,
	                   subconcep_ant, categclie_ant, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, $vl_categclie,
	                   $vl_subconcep, $snd_rubro , $vl_tipoprest, $vl_concepto, $vl_tipmov, 
	                   $ds2, $sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie, sector_ant_imp,
	                   tipmov_ant_imp, categclie_ant_imp, $tit_aux, $col){
		var i
		var j
		// final de linea 
		if (frm_tot_per2 != null){
    		//graba linea detalle clientes
		    $tit_aux = '                                         ' + razonsoc_ant
		    $col = new Array()
		    $tipo = 6
			for (j= 0; j < 12; j++){
		    	if (j < globals.gbl_meses){
		    		$col[j] = aux_periodo_tabla_razonsoc[j]
		    	}else{
		    		$col[j] = null
		    	}
		    }
		    $visible = 0
		    $razonsoc_aux = razonsoc_ant			
			if (frm_index == 9 || frm_index == 10){
		    
				$tit_aux = '                 ' + razonsoc_ant_des
				$razonsoc_aux = razonsoc_ant_des
				$visible     = 1
				frm_tot_per3 = 0
				frm_tot_per  = 0
			}
		    $ds2.addRow([$visible,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
                        $col[7], $col[8], $col[9], $col[10], $col[11],0, $razonsoc_aux,
						sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
						0,0,0,0,0,0,0,0,0,0,0,0])

		    for (j= 0; j < 12; j++){
			    aux_periodo_tabla_razonsoc[j] = 0
		    }
		    frm_tot_per2 = null
	    }
	    //graba linea Subtotal categclie
		if (frm_tot_per3 != null){				
			
			$tit_aux = '                                                    '
                    + 'Subtotal  ' + application.getValueListDisplayValue($vl_categclie,categclie_ant)
						
            $tipo = 6
            $col = new Array()
            for (j= 0; j < 12; j++){
                if (j < globals.gbl_meses){
		                $col[j] = aux_periodo_tabla_subtotal_categclie[j]
                   }else{
                       $col[j] = null
                }
            }  
            					 
            $ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
                         $col[7], $col[8], $col[9], $col[10], $col[11],1, 'Todos',
			             sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
                         0,0,0,0,0,0,0,0,0,0,0,0])
            $ds2.addRow([0,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant,'', null, null, null, null, null, null, null,
                         null, null, null, null, null,null, '',			
						 sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp,0,
						 0,0,0,0,0,0,0,0,0,0,0,0])
            for (j= 0; j < 12; j++){
                aux_periodo_tabla_subtotal_categclie[j] = 0
            }
            frm_tot_per3 = null   
        }
		//graba linea subconcep
		if (frm_tot_per != null){
			
			$tit_aux = application.getValueListDisplayValue($vl_subconcep,subconcep_ant)
			//if(frm_index == 7 && tipmov_ant == 1){
			if(frm_index == 7){
				globals.gbl_ente   = tipmov_ant
				globals.gbl_tabla  = 3
				globals.gbl_codigo = subconcep_ant
				$tit_aux = tbc_maestros_to_tbc_maestros.impudescrip
			}
			
		    $tit_aux = '                               ' + $tit_aux
			//ojo
			if(subconcep_ant == 0){
				$tit_aux = '                 ' + application.getValueListDisplayValue($vl_concepto,concepto_ant)
			}
			if(frm_index == 1 && (tipmov_ant == 7 || tipmov_ant == 9)){
				if($snd_rubro == 1){
                    $vl_tipoprest  = 'vl_snd_rubro';                                  
                }else{
      	          $vl_tipoprest  = 'vl_prusis_concop';
                }
		    	$tit_aux = '                 ' + application.getValueListDisplayValue($vl_tipoprest ,tipoprest_ant)
				tipoprest_ant_imp = application.getValueListDisplayValue($vl_tipoprest ,tipoprest_ant)
			}
			if(frm_index == 11){
				globals.gbl_res_ejec_cab = tipmov_ant
		    	$tit_aux = '                 ' + application.getValueListDisplayValue($vl_tipoprest ,tipoprest_ant)
			}
		    $col = new Array()
		    $tipo = 4
		    for (j= 0; j < 12; j++){
		    	if (j < globals.gbl_meses){
		    	    $col[j] = aux_periodo_tabla_tot[j]
		    	}else{
		    		$col[j] = null
		    	}
		    }
		    if(frm_index == 7){
		    	if(tipmov_ant != 1){
		    		categclie_ant_imp = null	
		    	}else{
		     	    categclie_ant_imp = tbc_maestros_to_tbc_maestros.impudescrip
		    	}
				$tipo = 6				
		    }else{
		        categclie_ant_imp = 'Todos'		        
		    }
		    if($sector != 9 || $sector != 11){
		        $ds2.addRow([1,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, 0,$tit_aux,$col[0],$col[1],$col[2],$col[3],$col[4],$col[5],$col[6],
                         $col[7], $col[8], $col[9], $col[10], $col[11],0, null,
						 sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, concepto_ant_imp, subconcep_ant_imp, categclie_ant_imp, 0,
						 0,0,0,0,0,0,0,0,0,0,0,0])
		    }
		    for (j= 0; j < 12; j++){
		    	aux_periodo_tabla_tot[j] = 0 
		    }
		    frm_tot_per = null
		}
		//graba totales tipoprest
		
		$tit_aux = '                                            '
	             + 'Total ' + application.getValueListDisplayValue($vl_tipoprest,tipoprest_ant)
		if(frm_index == 7){
			globals.gbl_ente   = tipmov_ant
			globals.gbl_tabla  = 1
			globals.gbl_codigo = tipoprest_ant
			$tit_aux = '                                            '
            + 'Total ' + tbc_maestros_to_tbc_maestros.impudescrip
		}
		$tipo = 7
		$col = new Array()
		for (j= 0; j < 12; j++){
			if (j < globals.gbl_meses){
				$col[j] = aux_periodo_tabla_subtotal[j]
    	    }else{
    		    $col[j] = null
    	    }
    	}
    	//if($sector != 9){
    	if(frm_index == 1 && (tipmov_ant == 7 || tipmov_ant == 9)){
			concepto_ant = $concepto
		}else{
			if(frm_index != 11){
		        $ds2.addRow([1,$sector, $tipo, tipmov_ant, tipoprest_ant, concepto_ant, subconcep_ant, categclie_ant, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
                     $col[7], $col[8], $col[9], $col[10], $col[11],0, null,
					 sector_ant_imp, tipmov_ant_imp, tipoprest_ant_imp, 'ZZZ', 'ZZZ', categclie_ant_imp,0,
					 0,0,0,0,0,0,0,0,0,0,0,0])
			}
		//graba totales tipmov
		}
		$tit_aux = application.getValueListDisplayValue($vl_tipmov,tipmov_ant)		
		$tit_aux = '                               ' 
			     + 'Total ' + $tit_aux
		$tipo = 8
		$col = new Array()
		for (j= 0; j < 12; j++){
			if (j < globals.gbl_meses){
				$col[j] = aux_periodo_tabla_totalgen[j]
    	    }else{
    		    $col[j] = null
    	    }
    	}
		
    	$ds2.addRow([1,$sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie,'', null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
    	             sector_ant_imp, tipmov_ant_imp, 'ZZZ', 'ZZZ', 'ZZZ', categclie_ant_imp,0,
					 0,0,0,0,0,0,0,0,0,0,0,0])
		$ds2.addRow([1,$sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
	 	             $col[7], $col[8], $col[9], $col[10], $col[11],0, null,
					 sector_ant_imp, tipmov_ant_imp, 'ZZZ', 'ZZZ', 'ZZZ', categclie_ant_imp,0,
					 0,0,0,0,0,0,0,0,0,0,0,0]) 

		//graba total Gastos - solo para el resumen
		if(frm_index == 1){		
		    $tit_aux = '                            Total Gastos'
		    $tipo = 8
		    $col = new Array()
		    for (j= 0; j < 12; j++){
			    if (j < globals.gbl_meses){
		    	    $col[j] = aux_periodo_tabla_totalgastos[j]
			    }else{
			        $col[j] = null
			    }
		    }
		    $ds2.addRow([1,$sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie,'', null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                         sector_ant_imp, tipmov_ant_imp, 'ZZZ', 'ZZZ', 'ZZZ', categclie_ant_imp,0,
			             0,0,0,0,0,0,0,0,0,0,0,0])						 
            $ds2.addRow([1,$sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
                         $col[7], $col[8], $col[9], $col[10], $col[11],0, null,
		                 sector_ant_imp, tipmov_ant_imp, 'ZZZ', 'ZZZ', 'ZZZ', categclie_ant_imp,0,
			             0,0,0,0,0,0,0,0,0,0,0,0])
		}
		//graba total Costos operativos + Débitos Solo para Resumen Ejecutivo
		if(frm_index == 11){		   
		    $tit_aux = '              Costos Op. + Débitos'	
		    $tipo = 8
			$tipmov = 10
			$tipoprest = 8888
		    $col = new Array()
		    for (j= 0; j < 12; j++){
			    if (j < globals.gbl_meses){
		            $col[j] = aux_resumen_ejec_totalcosop[j]
			    }else{
			        $col[j] = null
			    }
		    }		  									
		    $ds2.addRow([1,$sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie,'', null, null, null, null, null, null, null, null, null, null, null, null, null, null,
		                 sector_ant_imp, tipmov_ant_imp, 'ZZZ', 'ZZZ', 'ZZZ', categclie_ant_imp,0,
						 0,0,0,0,0,0,0,0,0,0,0,0])						 
		    $ds2.addRow([1,$sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
		                 $col[7], $col[8], $col[9], $col[10], $col[11],0, null,
					     sector_ant_imp, tipmov_ant_imp, 'ZZZ', 'ZZZ', 'ZZZ', categclie_ant_imp,0,
						 0,0,0,0,0,0,0,0,0,0,0,0]) 
		}
		//graba total Resultado Operativo Solo para Resumen Ejecutivo		
		if ($sector == 11){
		    $tit_aux = '              Resultado Operativo'
			$tipo = 8
			$tipmov = 10
			$tipoprest = 9999
		    $col = new Array()
		    for (j= 0; j < 12; j++){
			    if (j < globals.gbl_meses){
				    $col[j] = aux_periodo_tabla_totalgastos[j] 
		        }else{
			        $col[j] = null
		        }
		    }
		    $ds2.addRow([1,$sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie,'', null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                         sector_ant_imp, tipmov_ant_imp, 'ZZZ', 'ZZZ', 'ZZZ', categclie_ant_imp,0,
			             0,0,0,0,0,0,0,0,0,0,0,0])						 
            $ds2.addRow([1,$sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
                         $col[7], $col[8], $col[9], $col[10], $col[11],0, null,
			             sector_ant_imp, tipmov_ant_imp, 'ZZZ', 'ZZZ', 'ZZZ', categclie_ant_imp,0,
			             0,0,0,0,0,0,0,0,0,0,0,0]) 
		}
		//graba total Final		
		$tit_aux = '                          Resultado del Período'
		$tipo = 8
		if ($sector == 11){
			$tit_aux = '              Resultado Final'
			$tipmov  = 11
			$tipoprest = 9999
		}		
		$col = new Array()
		for (j= 0; j < 12; j++){
			if (j < globals.gbl_meses){
				$col[j] = aux_periodo_tabla_totaltotal[j] 
		    }else{
			    $col[j] = null
		    }
		}		
		
		$ds2.addRow([1,$sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie,'', null, null, null, null, null, null, null, null, null, null, null, null, null, null,
		             sector_ant_imp, tipmov_ant_imp, 'ZZZ', 'ZZZ', 'ZZZ', categclie_ant_imp,0,
					 0,0,0,0,0,0,0,0,0,0,0,0])						 
		$ds2.addRow([1,$sector, $tipo, $tipmov, $tipoprest, $concepto, $subconcep, $categclie, $tit_aux, $col[0], $col[1], $col[2], $col[3], $col[4], $col[5], $col[6],
		             $col[7], $col[8], $col[9], $col[10], $col[11],0, null,
					 sector_ant_imp, tipmov_ant_imp, 'ZZZ', 'ZZZ', 'ZZZ', categclie_ant_imp,0,
					 0,0,0,0,0,0,0,0,0,0,0,0]) 		 
		//cargar porcentajes para Resumen Ejecutivo
		if ($sector == 11){
			var $max = $ds2.getMaxRowIndex()
			for (j= 0; j <= $max; j++){
				if ($ds2.getValue(j,2) == 11){	
					// % Ventas
					if ($ds2.getValue(j,4) == 8 && ($ds2.getValue(j,3) == 4 || $ds2.getValue(j,3) == 8)){
						for (i= 0; i < 12 ; i++){
							if ($ds2.getValue(j, i+10) != 0 && aux_resumen_ejec_totalvta[i] != 0){
						        var $aux_por = $ds2.getValue(j, i+10) * 100 
						        $aux_por = $aux_por / aux_resumen_ejec_totalvta[i]  
						        $ds2.setValue(j,i+31,$aux_por)
							}
						}						
					}// % Costos Operativos + Débitos
					if (($ds2.getValue(j,4) == 9 || $ds2.getValue(j,4) == 10) && ($ds2.getValue(j,3) == 4 || $ds2.getValue(j,3) == 8)){
						for (i= 0; i < 12 ; i++){
							if ($ds2.getValue(j, i+10) != 0 &&	aux_resumen_ejec_totalcosop[i] != 0 ){
						        $aux_por = $ds2.getValue(j, i+10) * 100 
						        $aux_por = $aux_por / aux_resumen_ejec_totalcosop[i]
						        if ($ds2.getValue(j,4) == 9){
						        	$aux_por = $aux_por * -1 
						        }
						        $ds2.setValue(j,i+31,$aux_por)
							}
						}
					}
					// % Resultado Operativo
					if ($ds2.getValue(j,4) == 10 && $ds2.getValue(j,5) == 9999){
						for (i= 0; i < 12 ; i++){
							if ($ds2.getValue(j, i+10) != 0 && aux_resumen_ejec_totalvta[i] != 0){
						        $aux_por = $ds2.getValue(j, i+10) * 100 
						        $aux_por = $aux_por / aux_resumen_ejec_totalvta[i]  
						        $ds2.setValue(j,i+31,$aux_por)
							}
						}
					} 
					// % Costos No Operativos
					if (($ds2.getValue(j,4) == 11) && ($ds2.getValue(j,3) == 4 || $ds2.getValue(j,3) == 8)){
						for (i= 0; i < 12 ; i++){
							if ($ds2.getValue(j, i+10) != 0 && aux_resumen_ejec_totalconop[i] != 0){
						        $aux_por = $ds2.getValue(j, i+10) * 100 
						        $aux_por = $aux_por / aux_resumen_ejec_totalconop[i]
						        if ($ds2.getValue(j,4) == 9){
						        	$aux_por = $aux_por * -1 
						        }
						        $ds2.setValue(j,i+31,$aux_por)
							}
						}
					}
					// % Resultado Final
					if ($ds2.getValue(j,4) == 11 && $ds2.getValue(j,5) == 9999){
						for (i= 0; i < 12 ; i++){
							if ($ds2.getValue(j, i+10) != 0 && aux_resumen_ejec_totalvta[i] != 0){
						        $aux_por = $ds2.getValue(j, i+10) * 100 
						        $aux_por = $aux_por / aux_resumen_ejec_totalvta[i]  
						        $ds2.setValue(j,i+31,$aux_por)
							}
						}						
					}
			    }
			}
		}
		//Crear DataSource desde Dataset $ds2
		var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER,
		              JSColumn.TEXT]
		for (i=0; i < 12;i++){
			$tipos.push(JSColumn.NUMBER)			   
		}
		$tipos.push(JSColumn.NUMBER)
		$tipos.push(JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.NUMBER)
		for (i=0; i < 12;i++){
			$tipos.push(JSColumn.NUMBER)			   
		}
		switch (frm_index){
			case  1:
		        var $frm = solutionModel.getForm('frm_cons_estado_eco_tp_resumen')
		        $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_resumen', $tipos)
		        forms.frm_cons_estado_eco_tp_resumen.controller.recreateUI()
		        forms.frm_cons_estado_eco_tp_resumen.filtra_visibles()
		        forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
			    ;break
			case  2:
	            $frm = solutionModel.getForm('frm_cons_estado_eco_tp_ventas')
	            $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_ventas', $tipos)
	            forms.frm_cons_estado_eco_tp_ventas.controller.recreateUI()
	            forms.frm_cons_estado_eco_tp_ventas.filtra_visibles()
	            forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
		        ;break    
			case  3:
		        $frm = solutionModel.getForm('frm_cons_estado_eco_tp_compras_cc')
		        $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_compras_cc', $tipos)
		        forms.frm_cons_estado_eco_tp_compras_cc.controller.recreateUI()
		        forms.frm_cons_estado_eco_tp_compras_cc.filtra_visibles()
		        forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
				;break
			case 33: 
			    $frm = solutionModel.getForm('frm_cons_estado_eco_tp_compras_ug')
	            $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_compras_ug', $tipos)
		        forms.frm_cons_estado_eco_tp_compras_ug.controller.recreateUI()
		        forms.frm_cons_estado_eco_tp_compras_ug.filtra_visibles()
		        forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
				;break
			case  4:
			    $frm = solutionModel.getForm('frm_cons_estado_eco_tp_presta_medica_cc')
		        $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_presta_cc', $tipos)
		        forms.frm_cons_estado_eco_tp_presta_medica_cc.controller.recreateUI()
		        forms.frm_cons_estado_eco_tp_presta_medica_cc.filtra_visibles()
		        forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
				;break
			case 44:
			    $frm = solutionModel.getForm('frm_cons_estado_eco_tp_presta_medica_ug')
		        $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_presta_ug', $tipos)
		        forms.frm_cons_estado_eco_tp_presta_medica_ug.controller.recreateUI()
		        forms.frm_cons_estado_eco_tp_presta_medica_ug.filtra_visibles()
		        forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
				;break
			case  5:
		        $frm = solutionModel.getForm('frm_cons_estado_eco_tp_rrhh_sec')
		        $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_rrhh_sec', $tipos)
		        forms.frm_cons_estado_eco_tp_rrhh_sec.controller.recreateUI()
		        forms.frm_cons_estado_eco_tp_rrhh_sec.filtra_visibles()
		        forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
				;break
			case 55:
			    $frm = solutionModel.getForm('frm_cons_estado_eco_tp_rrhh_emp')
		        $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_rrhh_emp', $tipos)
		        forms.frm_cons_estado_eco_tp_rrhh_emp.controller.recreateUI()
		        forms.frm_cons_estado_eco_tp_rrhh_emp.filtra_visibles()
		        forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
				;break
			case  6:
			    $frm = solutionModel.getForm('frm_cons_estado_eco_tp_finanzas_cc')
		        $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_finanzas', $tipos)
		        forms.frm_cons_estado_eco_tp_finanzas_cc.controller.recreateUI()
		        forms.frm_cons_estado_eco_tp_finanzas_cc.filtra_visibles()
		        forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
		        ;break
			case  66:
		        $frm = solutionModel.getForm('frm_cons_estado_eco_tp_finanzas_ug')
	            $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_finanzas_ug', $tipos)
	            forms.frm_cons_estado_eco_tp_finanzas_ug.controller.recreateUI()
	            forms.frm_cons_estado_eco_tp_finanzas_ug.filtra_visibles()
	            forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
	            ;break
			case  7:		        
				$frm = solutionModel.getForm('frm_cons_estado_eco_tp_impuestos')
                $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_impuestos', $tipos)
                forms.frm_cons_estado_eco_tp_impuestos.controller.recreateUI()
                forms.frm_cons_estado_eco_tp_impuestos.filtra_visibles()
		        forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
				;break			
			case  8:
			    $frm = solutionModel.getForm('frm_cons_estado_eco_tp_legales_cc')
		        $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_legales', $tipos)
		        forms.frm_cons_estado_eco_tp_legales_cc.controller.recreateUI()
		        forms.frm_cons_estado_eco_tp_legales_cc.filtra_visibles()
		        forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
				;break
			case 88:
		        $frm = solutionModel.getForm('frm_cons_estado_eco_tp_legales_ug')
	            $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_legales_ug', $tipos)
	            forms.frm_cons_estado_eco_tp_legales_ug.controller.recreateUI()
	            forms.frm_cons_estado_eco_tp_legales_ug.filtra_visibles()
	            forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
			    ;break
			case  9:
			    $frm = solutionModel.getForm('frm_cons_estado_eco_tp_snd')
		        $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_snd', $tipos)
		        forms.frm_cons_estado_eco_tp_snd.controller.recreateUI()
		        forms.frm_cons_estado_eco_tp_snd.filtra_visibles()
		        forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
				;break
			case 10:
		        $frm = solutionModel.getForm('frm_cons_estado_eco_tp_varios')
	            $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_varios', $tipos)
	            forms.frm_cons_estado_eco_tp_varios.controller.recreateUI()
	            forms.frm_cons_estado_eco_tp_varios.filtra_visibles()
	            forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
			    ;break
			case  11:
	            $frm = solutionModel.getForm('frm_cons_estado_eco_tp_resumen_ejecutivo')
	            $frm.dataSource = $ds2.createDataSource('Ds_Aux2898_resumen_ejecutivo', $tipos)
	            forms.frm_cons_estado_eco_tp_resumen_ejecutivo.controller.recreateUI()
	            forms.frm_cons_estado_eco_tp_resumen_ejecutivo.filtra_visibles()
	            forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
		        ;break
		}		
	}

/**
 * @param $ano_tit
 * @param $mes_tit
 *
 * @properties={typeid:24,uuid:"286F9761-502C-4653-BFA8-06CBB7A8A7FD"}
 */
function cargar_titulo_per($ano_tit, $mes_tit){
	//Carga titulos periodo

    var mes_aux =  globals.gbl_periodo_hasta.getMonth()
    var ano_aux =  globals.gbl_periodo_hasta.getFullYear() 
	globals.periodo_tabla_per = new Array()    
    
    for (j= 0; j < 12; j++){
		aux_periodo_tabla_tot[j]                = 0
		aux_periodo_tabla_subtotal[j]           = 0
		aux_periodo_tabla_totalgen[j]           = 0
		aux_periodo_tabla_razonsoc[j]           = 0
		aux_periodo_tabla_totaltotal[j]         = 0
		aux_periodo_tabla_totalgastos[j]        = 0
		aux_periodo_tabla_subtotal_categclie[j] = 0
		aux_resumen_ejec_totalvta[j]            = 0
		aux_resumen_ejec_totalcosop[j]          = 0	
		aux_resumen_ejec_totalconop[j]          = 0
	}
	// Vector para agrupar periodos
    var agrupa 
	var  i = 0
	var  k = 0
	var  j = 0
	var ii = 0
	var jj = 0
	switch (globals.gbl_agrupacion){
		case 1: agrupa = 1; break;
	    case 2: agrupa = 3; break;
	    case 3: agrupa = 4; break;
	    case 4: agrupa = 6; break;
	    case 5: agrupa = 12; break; 
	}
    var aux_meses = globals.gbl_meses 
	var ant_mes = 0
	var ant_ano = 0
	if (globals.gbl_comparar == 1 && globals.gbl_agrupacion != 1){
		aux_meses = aux_meses / 2
	}
    
	vector = new Array()
    while (i < globals.gbl_meses){ 
    	ant_mes = mes_aux
		ant_ano = ano_aux
    	for (j=1; j <= agrupa; j++){

    		if (ii < aux_meses){
    			vector[i] = k
			   		
    		    m_aux = mes_aux + 1
			    if (m_aux < 10){
  			  	    m_aux = '0' + m_aux	
			    }
			    globals.periodo_tabla_per[i] = ano_aux + '' + m_aux
			    mes_aux--
			    if (mes_aux == -1){
				    ano_aux --
				    mes_aux = 11
			    }
			    i++
				ii++
			}
    	}
		if (globals.gbl_comparar == 1 ){
			k++
			ant_ano = ant_ano - 1
			for (j=0; j < agrupa; j++){
				if (i < globals.gbl_meses){
					vector[i] = k
					
					
    		        m_aux = ant_mes + 1
			        if (m_aux < 10){
  			  	        m_aux = '0' + m_aux	
			        } 
			        globals.periodo_tabla_per[i] = ant_ano + '' + m_aux
			        ant_mes++
			        if (ant_mes > 11){
				        ant_ano ++
				        ant_mes = 0
			        }
				    i++
				}
			}			
		}
		k++
    }
    
    // fin vector para agrupar periodos
    
    mes_aux =  globals.gbl_periodo_hasta.getMonth()
    ano_aux =  globals.gbl_periodo_hasta.getFullYear() 
	ii = 0
	jj = 0
	var vec_mes_aux = mes_aux
	var vec_ano_aux = ano_aux
	var m_aux
	var $cambio_ano = 0
	
    m_aux = globals.gbl_periodo_desde.getMonth().toString()
	if (m_aux < 10){
	  	m_aux = '0' + m_aux	
	}
	var aux_per_desde =  globals.gbl_periodo_desde.getFullYear().toString() + m_aux 
    m_aux = mes_aux.toString()  
	if (m_aux < 10){
	  	m_aux = '0' + m_aux	
	}
	var vec_per = ano_aux.toString() + m_aux
	
	for (i= 0; i < 12; i++){
		
		
        if (i< globals.gbl_meses){
        	$ano_tit[ii] = 'Año ' + ano_aux + '       '
            $mes_tit[ii] = globals.Traer_nom_mes(mes_aux)			
             
 			if (globals.gbl_agrupacion != 1){
				var primero = vec_mes_aux
				$ano_tit[ii] = 'Año ' + vec_ano_aux + '       '
        		$mes_tit[ii] = globals.Traer_nom_mes_corto(vec_mes_aux)+ '..'
				
				for (jj=2; jj <= agrupa; jj++){
					vec_mes_aux = vec_mes_aux - 1
					
					m_aux = vec_mes_aux.toString()
					if (m_aux < 10){
					  	m_aux = '0' + m_aux	
					}
				    vec_per = vec_ano_aux.toString() + m_aux
					if(vec_per < aux_per_desde){
        		    	vec_mes_aux = globals.gbl_periodo_desde.getMonth()
						jj = 99
        		    }else{
        		    	if (vec_mes_aux == -1){
                    	    vec_mes_aux = 11
						    $ano_tit[ii] = 'Año ' + vec_ano_aux + '/' + (vec_ano_aux - 1)  + '  '
					        vec_ano_aux--
							$cambio_ano = 1
        		    	}
				    }				    			    
        		}        		
        		
				if(primero == vec_mes_aux){
					$mes_tit[ii] = globals.Traer_nom_mes(vec_mes_aux)
				}else{
					$mes_tit[ii] += globals.Traer_nom_mes_corto(vec_mes_aux) + '    '
				}
				vec_mes_aux--
				if (vec_mes_aux == -1){					
					vec_ano_aux--
					vec_mes_aux = 11
				}
        	}
            
        	if (globals.gbl_comparar == 1){
				ii++
				if (globals.gbl_agrupacion == 1){
				    $ano_tit[ii] = 'Año ' + (ano_aux - 1) + '       '
				}else{
					$ano_tit[ii] = 'Año ' + (vec_ano_aux - 1) + '       '
				}					
	            $mes_tit[ii] = $mes_tit[ii -1]
	            if (globals.gbl_agrupacion != 1 && $cambio_ano == 1){
	            	$ano_tit[ii] = 'Año ' + (vec_ano_aux -2) + '/' + (vec_ano_aux -1) + '  '
					$cambio_ano = 0
	            }
			}
        	m_aux = mes_aux + 1
			if (m_aux < 10){
			  	m_aux = '0' + m_aux	
			}			
        }else{
        	$ano_tit[ii] = ''
	        $mes_tit[ii] = ''
        }		
		ii++
	    mes_aux--
	    if (mes_aux == -1){
		    mes_aux = 11
		    ano_aux--
	    }
	} 
	
	globals.gbl_meses = k
}

/**
 * @properties={typeid:24,uuid:"553638DC-8E1C-4B8C-A6CE-ADDD7047C6BE"}
 */
function buscar_formulario(){
	var $aux_form
	switch (globals.gbl_index){	    
    case  1 : $aux_form = 'frm_cons_estado_eco_tp_resumen';break;
    case  2 : $aux_form = 'frm_cons_estado_eco_tp_resumen_ejecutivo';break;
    case  3 : $aux_form = 'frm_cons_estado_eco_tp_ventas';break;
    case  4 : if (globals.gbl_index_2 == 1){
    	          $aux_form = 'frm_cons_estado_eco_tp_compras_cc';
              }else{
                  $aux_form = 'frm_cons_estado_eco_tp_compras_ug';
              };break;
    case  5 : if (globals.gbl_index_3 == 1){
                  $aux_form = 'frm_cons_estado_eco_tp_presta_medica_cc';
              }else{
                  $aux_form = 'frm_cons_estado_eco_tp_presta_medica_ug';
              };break;
    case  6 : if (globals.gbl_index_4 == 1){
                 $aux_form = 'frm_cons_estado_eco_tp_rrhh_sec';
              }else{
                 $aux_form = 'frm_cons_estado_eco_tp_rrhh_emp';
              };break;
    case  7 : $aux_form = 'frm_cons_estado_eco_tp_finanzas_ug';break;
    case  8 : $aux_form = 'frm_cons_estado_eco_tp_impuestos';break;
    case  9 : $aux_form = 'frm_cons_estado_eco_tp_legales_ug';break;
    case 10 : $aux_form = 'frm_cons_estado_eco_tp_snd';break;
    case 11 : $aux_form = 'frm_cons_estado_eco_tp_varios';break;
	}return $aux_form
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A43861CA-2A21-47A7-A5D9-0FFDC57D77F8"}
 * @AllowToRunInFind
 */
function onAction_expandir(event) {
	if (globals.gbl_index != 1 && globals.gbl_index != 2 && globals.gbl_index != 8 && globals.gbl_index != 10 && globals.gbl_index != 11){
	    var $aux_form =	buscar_formulario()
	    forms[$aux_form].controller.sort('sector asc, tipmov asc, tipoprest_desc asc, concepto_desc asc, subconcepto_desc asc, tipo asc')	
   	    elements.lbl_procesando.visible = true
	    application.updateUI()
	    forms[$aux_form].controller.find()
	    forms[$aux_form].foundset.tipo = '5 || 6'
	    forms[$aux_form].foundset.visible = 0
	    forms[$aux_form].controller.newRecord()
	    forms[$aux_form].foundset.tipo = '4'
	    forms[$aux_form].foundset.visible = 1
	    forms[$aux_form].controller.search()
	
	    var $max = databaseManager.getFoundSetCount(forms[$aux_form].foundset)
 	
    	var i
	    for (i = 1; i <= $max ; i++){
		    forms[$aux_form].foundset.setSelectedIndex(i)
		    if (forms[$aux_form].foundset.tipo == 5 || forms[$aux_form].foundset.tipo == 6){
			forms[$aux_form].foundset.visible = 1
	        }else{
	    	    if (forms[$aux_form].foundset.tipo == 4){
				    forms[$aux_form].foundset.boton_m = 1
	    	    }
	        }
		    if(forms[$aux_form].foundset.razonsoc == 'Todos' || forms[$aux_form].foundset.categclie_desc == 'Todos'){
		        forms[$aux_form].foundset.marca_totales = 1		    
		    }
		    	
	    }
	    forms[$aux_form].filtra_visibles()
	    elements.lbl_procesando.visible = false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2A8C46D3-1C40-4051-9036-457454597A1B"}
 * @AllowToRunInFind
 */
function onAction_contraer(event) {
	if (globals.gbl_index != 1 && globals.gbl_index != 2 && globals.gbl_index != 8 && globals.gbl_index != 10 && globals.gbl_index != 11){
	    var $aux_form =	buscar_formulario()
	    forms[$aux_form].controller.sort('sector asc, tipmov asc, tipoprest asc, concepto asc, subconcepto asc, tipo asc')	
   	    elements.lbl_procesando.visible = true
	    application.updateUI()
	    forms[$aux_form].controller.find()
	    forms[$aux_form].foundset.tipo = '4 || 5 || 6'
	    forms[$aux_form].foundset.visible = 1	
	    forms[$aux_form].controller.search()
    
	    var $max = databaseManager.getFoundSetCount(forms[$aux_form].foundset)
	    var i
	    for (i = 1; i <= $max ; i++){
		    forms[$aux_form].foundset.setSelectedIndex(i)
		    if (forms[$aux_form].foundset.tipo == 5 || forms[$aux_form].foundset.tipo == 6){
    			forms[$aux_form].foundset.visible = 0
	        }else{
	        	if (forms[$aux_form].foundset.tipo == 4){
			    	forms[$aux_form].foundset.boton_m = 0
	    	    }
	        }
	        if(forms[$aux_form].foundset.razonsoc == 'Todos' || forms[$aux_form].foundset.categclie_desc == 'Todos'){
		        forms[$aux_form].foundset.marca_totales = 0
	        }		    
	    }
	    forms[$aux_form].filtra_visibles()
	    elements.lbl_procesando.visible = false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"99986871-BDAA-40EC-80BE-8B8D14F6BE58"}
 */
function onAction_boton_imprimir(event) {
	var $aux_form =	buscar_formulario()
	var $rp 
	var $params = {
		lbl_ano_0:  globals.gbl_ano_tit[0],  lbl_mes_0:  globals.gbl_mes_tit[0],
		lbl_ano_1:  globals.gbl_ano_tit[1],  lbl_mes_1:  globals.gbl_mes_tit[1],
		lbl_ano_2:  globals.gbl_ano_tit[2],  lbl_mes_2:  globals.gbl_mes_tit[2],
		lbl_ano_3:  globals.gbl_ano_tit[3],  lbl_mes_3:  globals.gbl_mes_tit[3],
		lbl_ano_4:  globals.gbl_ano_tit[4],  lbl_mes_4:  globals.gbl_mes_tit[4],
		lbl_ano_5:  globals.gbl_ano_tit[5],  lbl_mes_5:  globals.gbl_mes_tit[5],
		lbl_ano_6:  globals.gbl_ano_tit[6],  lbl_mes_6:  globals.gbl_mes_tit[6],
		lbl_ano_7:  globals.gbl_ano_tit[7],  lbl_mes_7:  globals.gbl_mes_tit[7],
		lbl_ano_8:  globals.gbl_ano_tit[8],  lbl_mes_8:  globals.gbl_mes_tit[8],
		lbl_ano_9:  globals.gbl_ano_tit[9],  lbl_mes_9:  globals.gbl_mes_tit[9],
		lbl_ano_10: globals.gbl_ano_tit[10], lbl_mes_10: globals.gbl_mes_tit[10],
		lbl_ano_11: globals.gbl_ano_tit[11], lbl_mes_11: globals.gbl_mes_tit[11],
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	if (globals.gbl_meses > 4){
		$rp = 'rp_2898_2.jasper'
	}else{
		$rp = 'rp_2898_1.jasper'
	}
	if (globals.gbl_index == 2){
		if (globals.gbl_meses > 4){
			$rp = 'rp_2898_22.jasper'
		}else{
			$rp = 'rp_2898_12.jasper'
		}	
	}
	plugins.jasperPluginRMI.runReport(forms[$aux_form].foundset,$rp,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9265851F-0619-488C-8DC8-8263E7B22482"}
 */
function onAction_boton_exp_excel(event) {
	var $aux_form =	buscar_formulario()
	var $tipo = ''
	var $tit_1 = 'Macro Centro'
	var $tit_2 = 'Centro'
	var $tit_3 = 'Sub Centro'
	var $tit_4 = 'Concepto'
	var $tit_5 = 'Sub Concepto'
	var $tit_6 = 'Grupo'
	var $tit_7 = 'Sub Grupo'
	switch(globals.gbl_index){
		case 1 : $tipo = 'RESU'			    
			    break;
		case 2 : $tipo = 'RESE'
	            break;
		case 3 : $tipo = 'VENT'
			    break;
		case 4 : $tipo = 'COMP'
	            break;
        case 5 : $tipo = 'PRES'
	            break;
        case 6 : $tipo = 'RRHH'               
    	       $tit_2 = ''
    	       $tit_3 = 'Centro'
    	       $tit_4 = 'Sub Centro'
    	       $tit_5 = 'Sector'
    	       $tit_6 = 'Origen'
    	       $tit_7 = 'Empleado/Proveedor'
	            break;
        case 7 : $tipo = 'FINA'
	            break;
        case 8 : $tipo = 'IMPU'
                break;
        case 9 : $tipo = 'LEGA'
                break;
        case 10 : $tipo = 'SND'
                break;
        case 11: $tipo = 'VARI'
                break;
	}
	
	var $arch = plugins.file.showFileSaveDialog('SQ-2898-' + $tipo +application.getIPAddress() + '.xls')
	var $params= {
	    lbl_ano_0:  globals.gbl_ano_tit[0],  lbl_mes_0:  globals.gbl_mes_tit[0],
		lbl_ano_1:  globals.gbl_ano_tit[1],  lbl_mes_1:  globals.gbl_mes_tit[1],
		lbl_ano_2:  globals.gbl_ano_tit[2],  lbl_mes_2:  globals.gbl_mes_tit[2],
		lbl_ano_3:  globals.gbl_ano_tit[3],  lbl_mes_3:  globals.gbl_mes_tit[3],
		lbl_ano_4:  globals.gbl_ano_tit[4],  lbl_mes_4:  globals.gbl_mes_tit[4],
		lbl_ano_5:  globals.gbl_ano_tit[5],  lbl_mes_5:  globals.gbl_mes_tit[5],
		lbl_ano_6:  globals.gbl_ano_tit[6],  lbl_mes_6:  globals.gbl_mes_tit[6],
		lbl_ano_7:  globals.gbl_ano_tit[7],  lbl_mes_7:  globals.gbl_mes_tit[7],
		lbl_ano_8:  globals.gbl_ano_tit[8],  lbl_mes_8:  globals.gbl_mes_tit[8],
		lbl_ano_9:  globals.gbl_ano_tit[9],  lbl_mes_9:  globals.gbl_mes_tit[9],
		lbl_ano_10: globals.gbl_ano_tit[10], lbl_mes_10: globals.gbl_mes_tit[10],
		lbl_ano_11: globals.gbl_ano_tit[11], lbl_mes_11: globals.gbl_mes_tit[11],
		lbl_tit_1: $tit_1, lbl_tit_2: $tit_2, lbl_tit_3: $tit_3, lbl_tit_4: $tit_4,
		lbl_tit_5: $tit_5, lbl_tit_6: $tit_6, lbl_tit_7: $tit_7
	}
	if ($arch){
		plugins.jasperPluginRMI.runReport(forms[$aux_form].foundset,'rp_2898_3.jasper',$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.EXCEL,$params)
		application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);		
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD7B6057-BDED-481A-9576-5C4AAB915736"}
 */
function onAction_boron_exp_pdf(event) { 
	var $aux_form =	buscar_formulario()
	var $arch = plugins.file.showFileSaveDialog('SQ-2898-' + application.getIPAddress() + '.pdf')
	var $rp 
	var $params = {
		lbl_ano_0:  globals.gbl_ano_tit[0],  lbl_mes_0:  globals.gbl_mes_tit[0],
		lbl_ano_1:  globals.gbl_ano_tit[1],  lbl_mes_1:  globals.gbl_mes_tit[1],
		lbl_ano_2:  globals.gbl_ano_tit[2],  lbl_mes_2:  globals.gbl_mes_tit[2],
		lbl_ano_3:  globals.gbl_ano_tit[3],  lbl_mes_3:  globals.gbl_mes_tit[3],
		lbl_ano_4:  globals.gbl_ano_tit[4],  lbl_mes_4:  globals.gbl_mes_tit[4],
		lbl_ano_5:  globals.gbl_ano_tit[5],  lbl_mes_5:  globals.gbl_mes_tit[5],
		lbl_ano_6:  globals.gbl_ano_tit[6],  lbl_mes_6:  globals.gbl_mes_tit[6],
		lbl_ano_7:  globals.gbl_ano_tit[7],  lbl_mes_7:  globals.gbl_mes_tit[7],
		lbl_ano_8:  globals.gbl_ano_tit[8],  lbl_mes_8:  globals.gbl_mes_tit[8],
		lbl_ano_9:  globals.gbl_ano_tit[9],  lbl_mes_9:  globals.gbl_mes_tit[9],
		lbl_ano_10: globals.gbl_ano_tit[10], lbl_mes_10: globals.gbl_mes_tit[10],
		lbl_ano_11: globals.gbl_ano_tit[11], lbl_mes_11: globals.gbl_mes_tit[11],
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	if (globals.gbl_meses > 4){
		$rp = 'rp_2898_2.jasper'
	}else{
		$rp = 'rp_2898_1.jasper'
	}
	if (globals.gbl_index == 2){
		if (globals.gbl_meses > 4){
			$rp = 'rp_2898_22.jasper'
		}else{
			$rp = 'rp_2898_12.jasper'
		}	
	}
	if ($arch){		
		plugins.jasperPluginRMI.runReport(forms[$aux_form].foundset,$rp ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
		application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"78244DEB-BC3E-4AD8-92DC-5B320A7B9864"}
 */
function onAction_comparar(event) {
	if (globals.gbl_comparar == 1){
		if(globals.gbl_periodo_desde != null && globals.gbl_periodo_hasta != null){
		    globals.gbl_meses = globals.Contar_mes(globals.gbl_periodo_desde,globals.gbl_periodo_hasta)
			var agrupa
			switch (globals.gbl_agrupacion){
			   case 1: agrupa = 1; break;
		       case 2: agrupa = 3; break;
		       case 3: agrupa = 4; break;
		       case 4: agrupa = 6; break;
		       case 5: agrupa = 12; break;
		    }
		    globals.gbl_meses = globals.gbl_meses / agrupa
		    if(globals.gbl_meses > 6){
			    globals.showErrorDialog('No se puede comparar más de 6 columnas', null, 'Ok', null, null, null);
			    globals.gbl_comparar = 0
		    }
	    }
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9537B300-F10D-4C28-A804-F8B488A5CA62"}
 */
function onShow_login(firstShow, event) {
	//Login
	if (globals.gbl_title == ''){
	   	var win = application.createWindow("Psw",JSWindow.MODAL_DIALOG)	
    	win.title= 'Login'
    	win.resizable = false
    	solutionModel.removeForm
    	win.show(forms.psw_login_adm)
    	//application.getWindow('Psw').hide()
	}
	//Fin login
	onShow_inicia(firstShow,event)
	
	// Filtra las solapas que puede ver cada usuario
	var ip = application.getIPAddress()
	elements.tabs.setTabEnabledAt( 1,false)
	elements.tabs.setTabEnabledAt( 2,false)
	elements.tabs.setTabEnabledAt( 3,false)
	elements.tabs.setTabEnabledAt( 4,false)
	elements.tabs.setTabEnabledAt( 5,false)
	elements.tabs.setTabEnabledAt( 6,false)
	elements.tabs.setTabEnabledAt( 7,false)
	elements.tabs.setTabEnabledAt( 8,false)
	elements.tabs.setTabEnabledAt( 9,false)
	elements.tabs.setTabEnabledAt(10,false)
	elements.tabs.setTabEnabledAt(11,false)
	if (globals.vLega == 9283 || globals.vLega == 7337 || globals.vLega == 3441 ||
	    globals.vLega == 4483 || globals.vLega == 5273 || globals.vLega == 6886 || 
		ip == '12.100.70.4' || ip == '12.100.70.5'){		
			elements.tabs.setTabEnabledAt( 1,true)
			elements.tabs.setTabEnabledAt( 2,true)
			elements.tabs.setTabEnabledAt( 3,true)
			elements.tabs.setTabEnabledAt( 4,true)
			elements.tabs.setTabEnabledAt( 5,true)
			elements.tabs.setTabEnabledAt( 6,true)
			elements.tabs.setTabEnabledAt( 7,true)
			elements.tabs.setTabEnabledAt( 8,true)
			elements.tabs.setTabEnabledAt( 9,true)
			elements.tabs.setTabEnabledAt(10,true)
			elements.tabs.setTabEnabledAt(11,true)
	}
	switch (globals.vLega){
		case  5198: elements.tabs.setTabEnabledAt(3,true)//Claudio Smocovich
	                elements.tabs.setTabEnabledAt(5,true)
					elements.tabs.tabIndex = 3; break
					
		case  8584: elements.tabs.setTabEnabledAt(3,true)//Silvia Gallo
                    elements.tabs.setTabEnabledAt(5,true)
					elements.tabs.tabIndex = 3; break
					
		case  9327: elements.tabs.setTabEnabledAt(3,true)//Carlos Longo
                    elements.tabs.setTabEnabledAt(5,true)
					elements.tabs.tabIndex = 3; break
					
		case  2117: elements.tabs.setTabEnabledAt(4,true)//María Cristina Barreiro
		            elements.tabs.setTabEnabledAt(10,true)
					elements.tabs.tabIndex = 4; break
					
		case  4940: elements.tabs.setTabEnabledAt(4,true)//Ocampo Gonzalo
		            elements.tabs.setTabEnabledAt(10,true)
					elements.tabs.tabIndex = 4; break
		            
		case  3544: elements.tabs.setTabEnabledAt(6,true)
		            elements.tabs.tabIndex = 6; break //Oscar Miñan
				
		case  7973: elements.tabs.setTabEnabledAt(7,true)
		            elements.tabs.tabIndex = 7; break //Sergio Greco
		
		case  7959: elements.tabs.setTabEnabledAt(9,true)
		            elements.tabs.tabIndex = 9; break //Cesar Abatti           		
     }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"50DA93E6-12FC-4D3A-8C55-3BEFE85E1D83"}
 */
function onActionFechaDesde(event) {
	elements.frm_per_hasta.requestFocus();
}
