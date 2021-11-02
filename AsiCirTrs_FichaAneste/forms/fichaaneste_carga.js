/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E09A32ED-71AD-44A2-928F-7C8D36ABC79B"}
 */
var f_si_no = 'Si';

/**
 * @properties={typeid:35,uuid:"CB24307D-BBAC-4515-AA83-C1DD0FB9C7B9",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"88CD00D7-DCD3-4121-A372-92C5C1B546AD"}
 */
var $campo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A2942296-8C86-490D-A9C4-E8B55CFC53DB",variableType:4}
 */
var pide = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"43996FAD-BC23-4F23-81A7-86F21CE4332B",variableType:4}
 */
var f_edad = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"EB489DF1-2DEE-45C9-8BB2-D13408E702AD",variableType:93}
 */
var f_fecha_dia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"760A2ADB-B071-4BEA-A292-F1F581B4C58C",variableType:4}
 */
var f_hubo_turno = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7ACF812A-1781-4572-9428-861E55828E08"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	//f_cerrarForm = false
	//scopes.globals.AsistFunciones_isRegisterTableLocked(solucion, formulario, id, legajo, tituloError)
//ejemplo	var bloqueado = globals.AsistFunciones_isRegisterTableLocked(application.getSolutionName(),controller.getName(),asiucotrs_rel_buscar_admision.adm_histclin.toString(),globals.AsiUcoTrs_vLega.toString(),"Historia Clinica de Ingreso a UCO");
	
	var bloqueado = globals.AsistFunciones_isRegisterTableLocked(application.getSolutionName(),controller.getName(),scopes.globals.fichaaneste_histcliuni.toString(),scopes.globals.vLega.toString(),'Carga Ficha Anestésica');
	//if (bloqueado == true)
	if (bloqueado != false)	
	{	//globals.DIALOGS.showQuestionDialog('¡Atención!','El Programa está siendo usado en otra sesion por el mismo usuario', 'Ok' )
		cerrar_window()
		return
	}
	f_cerrarForm = false

	//application.setNumpadEnterAsFocusNextEnabled(true)
	databaseManager.setAutoSave(false)  

	// var $cab = vs_ficha_to_fichaaneste_cab_unico
	var $cab = vs_ficha_to_fichaaneste_cab_fechcarga
	if (vs_ficha_to_fichaaneste_cab_fechcarga.getSize() == 0)   // con fecha-hora de carga de reg. anestesia/ambu
	{  	
		//if (vs_ficha_to_fichaaneste_cab_unico) {  // estado = 0  no srive =asi puede abrir mas de una
			scopes.globals.fichaaneste_modificacion = 0
			$cab.newRecord()
			$cab.histcli       = scopes.globals.fichaaneste_histcli
			$cab.histcli_unico = scopes.globals.fichaaneste_histcliuni
			$cab.estado        = 0
			$cab.anestesiologo_legajo = scopes.globals.fichaaneste_anestesiologo_legajo
			$cab.anestesiologo_lega   = globals.vLega
			//$cab.anestesiologo_tipo   = scopes.globals.vTipoMedico
			$cab.anestesiologo_tipo   = globals.vTipoOperador
			forms.fichaaneste_encabezado.fanestesiologo = scopes.globals.fichaaneste_anestesiologo_nombre
			$cab.cirujano_legajo      = null  // se debe ingresar
			$cab.edad        = scopes.globals.CalculoEdad(scopes.globals.fichaaneste_vfecnac)
			$cab.sexo        = scopes.globals.vSexo 
			$cab.habitacion  = scopes.globals.fichaaneste_vhabita
			$cab.piso        = null
			if (vs_ficha_to_tbc_habita.getSize() == 1)
				{$cab.piso   = vs_ficha_to_tbc_habita.hab_piso}		
			$cab.cama        = scopes.globals.fichaaneste_vcama
			$cab.obra_social = scopes.globals.fichaaneste_obrasocial
			$cab.anes_numero = scopes.globals.fichaaneste_nro_anestesia // no esta cargado en este momento de la cirugia
			$cab.riesgo_op_grado    = scopes.globals.fichaaneste_vriesgo
			$cab.oper_propuesta     = scopes.globals.fichaaneste_vop_propuesta
			$cab.t_art_habitual_max = scopes.globals.fichaaneste_vpresion_max 
			$cab.t_art_habitual_min = scopes.globals.fichaaneste_vpresion_min
			$cab.pulso              = scopes.globals.fichaaneste_vpulso
			if(scopes.globals.fichaaneste_vurgencia == null)
				{scopes.globals.fichaaneste_vurgencia = 0}
			$cab.urgencia           = scopes.globals.fichaaneste_vurgencia
			$cab.cirujano_tipo      = 1  // ver esto
			$cab.auxiliar_tipo      = 1
			$cab.ayudante_tipo      = 1
			
			//*//  no es la hora de inicio de hoja anestesia = PEDIRLA , tambien es la hora Inyectada // 6/6/2019
			//$cab.hora_inicio_grilla = scopes.globals.fichaaneste_vanes_hora_ini   
			
			$cab.fecha = application.getServerTimeStamp()   // fecha de la carga
			$cab.fecha = new Date($cab.fecha.getFullYear(), $cab.fecha.getMonth(), $cab.fecha.getDate(), $cab.fecha.getHours(), $cab.fecha.getMinutes(),0,0)
			$cab.fecha_inicio = $cab.fecha  // hora de inicio de la grilla que se puede modificar en el form de la grilla
			
			/*
			var $fec = 	$cab.fecha 
			var $hora = $fec.getHours()
			var $min  = $fec.getMinutes()
			if ($min < 10)
				{$min = '0' + $min}	
			if ($hora < 10)
				{$hora = '0' + $hora}
			*/
			
			// al crear arranca en cero 
			scopes.globals.fichaaneste_hora_inicio_grilla = '00' +'' + '00' 	
			$cab.hora_inicio_grilla = scopes.globals.fichaaneste_hora_inicio_grilla 
			
			// solo pedir hora inicio sin sugerir la de anestesia - poner un campo en el form grilla
			// la cant. de horas arrancan en 2 y el intervalo es de 5'  // 06/06/2019
			scopes.globals.fichaaneste_hora_inicio_grilla_date = $cab.fecha
			$cab.grilla_pasomin = scopes.globals.fichaaneste_pasomin
			$cab.grilla_horas   = scopes.globals.fichaaneste_horas
			
			/*/* se usan las variables anteriores y no se modifican
			// Pide parametros para dibujar la grilla
			var $win2  = application.createWindow("parametros",JSWindow.MODAL_DIALOG)
		    $win2.title = " Parametros Ficha Anestesica "
		    $win2.setSize(300,200) 
		    $win2.show(forms.fichaaneste_grilla_conf)
			$cab.grilla_pasomin = scopes.globals.fichaaneste_pasomin
			$cab.grilla_horas   = scopes.globals.fichaaneste_horas
			// modificada en form de config de grilla
			$hora = scopes.globals.fichaaneste_hora_inicio_grilla_date.getHours()
			$min  = scopes.globals.fichaaneste_hora_inicio_grilla_date.getMinutes()				
			if ($min < 10)
				{$min = '0' + $min}	
			if ($hora < 10)
				{$hora = '0' + $hora}
			scopes.globals.fichaaneste_hora_inicio_grilla =  $hora +'' + $min 
			/////
			 * */
			 
			$cab.hora_inyectada = 	scopes.globals.fichaaneste_hora_inicio_grilla  // 06/06/2019
			
			$cab.intubacion_traqueal = 0
			$cab.tubo_nro = 0
			$cab.mango = 0
			
			$cab.posicion = ''	//  se usa campo de la tabla?	
				
			$cab.anest_conductiva = 0
			$cab.anest_endovenosa = 0
			$cab.anest_gral  = 0
			$cab.anest_inhalatoria = 0
			$cab.anest_local = 0
			$cab.respiracion_espontanea    = 0
			$cab.respiracion_asistida      = 0
			$cab.resp_controlada_manual    = 0
			$cab.resp_controlada_mecanica  = 0
			$cab.sistema_sin_reinhalacion  = 0
			$cab.sistema_con_rehin_parcial = 0
			$cab.sistema_con_rehin_total   = 0
			
			$cab.anest_inhalatoria = 0
			$cab.anest_endovenosa  = 0

			$cab.tbc_anest_carga_fecha = scopes.globals.fichaaneste_anes_carga_fecha
			$cab.tbc_anest_carga_hora  = scopes.globals.fichaaneste_anes_carga_hora
			
			blanquear_encabe()
		    scopes.globals.fichaaneste_cab_id = $cab.fichaaneste_cab_id
			scopes.globals.fichaaneste_vfecha_inicial = $cab.fecha_inicio  // se usa en la grilla
			// grabar aqui /18/06/2019 para qu tenga el id que luego se usa en tabla det
			if (grabar() == false)
				{var desbloqueado = scopes.globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),scopes.globals.fichaaneste_histcliuni.toString(),scopes.globals.vLega.toString(),'Carga Ficha Anestésica');
				cerrar_window()}
			scopes.globals.fichaaneste_cab_id = $cab.fichaaneste_cab_id
			application.updateUI()

	}
	else
	{
		if($cab.estado > 0)
			{
			if (scopes.globals.fichaaneste_modificacion == 0)
				{plugins.dialogs.showInfoDialog("Aviso", "Ficha Anestésica CERRADA. NO se permite su modificación","ok")
				var desbloqueado = scopes.globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),scopes.globals.fichaaneste_histcliuni.toString(),scopes.globals.vLega.toString(),'Carga Ficha Anestésica');
				cerrar_window()	
				return}
			else
				{
					elements.lbl_titulo.text ='Ficha   Anestésica  -  Modificación de datos'
				}
			}
	
		scopes.globals.fichaaneste_cab_id  = $cab.fichaaneste_cab_id
			
		scopes.globals.fichaaneste_pasomin = $cab.grilla_pasomin
		scopes.globals.fichaaneste_horas   = $cab.grilla_horas 
		scopes.globals.fichaaneste_hora_inicio_grilla      = $cab.hora_inicio_grilla
		scopes.globals.fichaaneste_vfecha_inicial          = $cab.fecha_inicio   // de la anestesia // no tomada de hoja anestesia = Ingresado en form grilla_1
		scopes.globals.fichaaneste_hora_inicio_grilla_date = $cab.fecha_inicio
		
	    if($cab.fichaaneste_cab_to_tbc_patologia){
		    if($cab.fichaaneste_cab_to_tbc_patologia.getSize() == 1)
		    	{forms.fichaaneste_encabezado.fdiagnos  = $cab.fichaaneste_cab_to_tbc_patologia.pat_descrip}
		    else
		    	{forms.fichaaneste_encabezado.fdiagnos  = ''}
		}
		if($cab.fichaaneste_cab_to_tbc_patologia_oper){
		    if($cab.fichaaneste_cab_to_tbc_patologia_oper.getSize() == 1)
		    {forms.fichaaneste_encabezado.fdiagnos_oper = $cab.fichaaneste_cab_to_tbc_patologia_oper.pat_descrip}
	    	else
	    		{forms.fichaaneste_encabezado.fdiagnos_oper = ''}
		}	
		/* viene informado
	    if($cab.fichaaneste_cab_to_tbc_interven){		    
	    	if($cab.fichaaneste_cab_to_tbc_interven.getSize() == 1)
	    		{forms.fichaaneste_encabezado.finterven     = $cab.fichaaneste_cab_to_tbc_interven.itv_codi}
	    	else
	    		{forms.fichaaneste_encabezado.finterven = ''}
	    }
	    */
	    if($cab.fichaaneste_cab_to_tbc_interven_realizada){	
		    if($cab.fichaaneste_cab_to_tbc_interven_realizada.getSize() == 1)
		    	{forms.fichaaneste_encabezado.finterven_des = $cab.fichaaneste_cab_to_tbc_interven_realizada.itv_descripcion}
		    else
	    		{forms.fichaaneste_encabezado.finterven_des = ''}
    	}
		
	    forms.fichaaneste_encabezado.fcirujano      = buscar_profesional($cab.cirujano_tipo,$cab.cirujano_legajo)
		forms.fichaaneste_encabezado.fauxiliar      = buscar_profesional($cab.auxiliar_tipo, $cab.auxiliar_legajo)
		forms.fichaaneste_encabezado.fayudante      = buscar_profesional($cab.ayudante_tipo, $cab.ayudante_legajo)
		forms.fichaaneste_encabezado.fanestesiologo = buscar_profesional($cab.anestesiologo_tipo, $cab.anestesiologo_lega) 
		//application.updateUI()
		}
	f_cerrarForm = false
	scopes.globals.fichaaneste_horas_agregar = 0
	
	// Arrancar con medicion = ten.Max.  06/06/2019
	forms.fichaaneste_grilla_1.fmedicion1 = 1
	scopes.globals.fichaaneste_med_cod    = 1
	forms.fichaaneste_grilla_1.elements.medicion1.bgcolor	= fichaaneste_medicion_grilla_1_cod.color
	//forms.fichaaneste_encabezado.elements.diagnostico.requestFocus()
	
	application.updateUI()
	elements.tabs.tabIndex = 1
	//databaseManager.setAutoSave(true)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"9E351D70-7AF1-481A-8878-57EBB3C0F049"}
 */
function onHide(event) {
	return globals.vClose
}

/**
 * @properties={typeid:24,uuid:"B8DDA20D-0876-4FB9-81BF-294729FAFBAF"}
 */
function onAction_cerrar() {
	
////VALIDAR campos obligatorios

// Validacion encabezado
	if (!validar_encabezado())
		return;
// Validacion pie
	if (!validar_pie())
		return; 
// Validacion grilla		
	if (!validar_grilla())
		return;

////CONFIRMA CIERRE 
	if(globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea cerrar la Ficha Anestésica?', 'No' , 'Si' ) == 'No')
		{return }

////FICHA ANESTESICA  ->  ACTUALIZAR  hora final,  estado, fecha  y hora inicio grilla y cant. de horas para dibujar la grilla
	hora_inicio_grilla = scopes.globals.fichaaneste_hora_inicio_grilla
	fecha_inicio       = scopes.globals.fichaaneste_vfecha_inicial
	hora_inyectada     = scopes.globals.fichaaneste_hora_inicio_grilla
	grilla_horas       = scopes.globals.fichaaneste_horas  
	
	var $fecha_cierre = application.getServerTimeStamp()
	var $hora = $fecha_cierre.getHours()
	var $min  = $fecha_cierre.getMinutes()
	var $seg  = $fecha_cierre.getSeconds()
	//var $mseg = scopes.globals.fichaaneste_vhora.getMilliseconds()
	
	var $seg_ed = ""
	if ($seg < 10)
		{$seg_ed = "0" + $seg}
	else{$seg_ed = $seg}
	/*
	var $mseg_ed= ""		
	if ($mseg < 10)
		{$mseg_ed = "0" + $mseg}
	else
	if ($mseg > 99)
		{var $mseg_aux = $mseg + ''
		$mseg_ed = $mseg_aux.substr(1,2)}
		else{
			$mseg_ed = $mseg}
	*/
	if ($hora < 10)
		{$hora = '0' + $hora}
	if ($min < 10)
		{$min= '0' + $min}
	//// si se modifica guardar usuario y fecha
	if (scopes.globals.fichaaneste_modificacion == 1)
		{	modif_legajo = scopes.globals.fichaaneste_vLegajo
			modif_fechahora =  new Date($fecha_cierre.getFullYear(), $fecha_cierre.getMonth(), $fecha_cierre.getDate(), $hora, $min ,$seg_ed,0)
		}
	else{
		//////////////////
		fecha_final = new Date($fecha_cierre.getFullYear(), $fecha_cierre.getMonth(), $fecha_cierre.getDate(), $hora, $min ,$seg_ed,0)
		//////////////////
		estado = 1  // cerrada   definir los estados posibles = en curso o abierta y cerrada
		//////////////////
		}
	if (grabar() == false)
		{return}

////Mensaje final
	f_si_no = 'Si'
	if (scopes.globals.fichaaneste_modificacion == 0)
		{globals.DIALOGS.showQuestionDialog('¡Atención!','Ficha Anestésica cerrada \n Se imprimirá a continuación', 'Ok')}
	else
		{f_si_no = globals.DIALOGS.showQuestionDialog('¡Atención!','Ficha Anestésica modificada \n Desea imprimirla?', 'Si', 'No')}

////Desbloquear
	//scopes.globals.AsistFunciones_unLockRegisterTable(solucion, formulario, id, legajo, tituloError)
	var desbloqueado = scopes.globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),scopes.globals.fichaaneste_histcliuni.toString(),scopes.globals.vLega.toString(),'Carga Ficha Anestésica');
	// solo devuelve false
	
////Impresion opcional para modif.
	if (f_si_no == 'Si')
		{imprimir_ficha()}
	
// Blanquear variables	esta incluido en el cerrar_window()
	
////cerrar window	
	f_cerrarForm = true
	cerrar_window()
}

/**
 * @properties={typeid:24,uuid:"198FD607-8EF0-4E97-9D59-96B4F8FC22F6"}
 */
function cerrar_window() {
	blanquear()
	blanquear_encabe()

	forms.fichaaneste_grilla_1.elements.tab_ficha.removeAllTabs()
	var $win = application.getWindow(application.getActiveWindow().getName());
	if($win != null){
		$win.hide()
		$win.destroy()
		
	globals.vClave  = 0
	globals.vPassOperador = '' 
	globals.vTipoMedico = null
	//**//**//**//  RESTAURAR estas tres variables 
	//porque al volver no dibuja el menu del usuario con el que se ingreso al menu
	globals.vLegajo   = scopes.globals.fichaaneste_vLegajo  
	globals.vLega     = scopes.globals.fichaaneste_vLega        
	globals.vOperador = scopes.globals.fichaaneste_vOperador
	//**//**//**//
	}
	globals.vClose = true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4E43B8D3-A96D-4670-BEC4-E1FD02B6D0CA"}
 */
function onAction_sin_cerrar(event) {
	if (scopes.globals.fichaaneste_hora_inicio_grilla == 0)  // si sale sin cargar grilla queda en cero
	{
		var $fec = scopes.globals.fichaaneste_hora_inicio_grilla_date
		var $hora = $fec.getHours()
		var $min  = $fec.getMinutes()
		if ($min < 10)
			{$min = '0' + $min}	
		if ($hora < 10)
			{$hora = '0' + $hora}
		scopes.globals.fichaaneste_hora_inicio_grilla =  $hora +'' + $min 
	}
	hora_inicio_grilla = scopes.globals.fichaaneste_hora_inicio_grilla
	fecha_inicio       = scopes.globals.fichaaneste_vfecha_inicial
	hora_inyectada     = scopes.globals.fichaaneste_hora_inicio_grilla
	grilla_horas       = scopes.globals.fichaaneste_horas  
	
//// si se modifica guardar usuario y fecha
	if (scopes.globals.fichaaneste_modificacion == 1)
	{	var $fecha_cierre = application.getServerTimeStamp()
		var $hora = $fecha_cierre.getHours()
		var $min  = $fecha_cierre.getMinutes()
		var $seg  = $fecha_cierre.getSeconds()
		var $seg_ed = ""
		if ($seg < 10)
			{$seg_ed = "0" + $seg}
		else{$seg_ed = $seg}
		if ($hora < 10)
			{$hora = '0' + $hora}
		if ($min < 10)
			{$min= '0' + $min}
		modif_legajo = scopes.globals.fichaaneste_vLegajo
		modif_fechahora =   new Date($fecha_cierre.getFullYear(), $fecha_cierre.getMonth(), $fecha_cierre.getDate(), $hora, $min ,$seg_ed,0)
	}
//// Grabar
	grabar()

////Desbloquear
	//scopes.globals.AsistFunciones_unLockRegisterTable(solucion, formulario, id, legajo, tituloError)
	var desbloqueado = scopes.globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),scopes.globals.fichaaneste_histcliuni.toString(),scopes.globals.vLega.toString(),'Carga Ficha Anestésica');
////Salir
	f_cerrarForm = true
	cerrar_window()
}

/**
 * @properties={typeid:24,uuid:"CAF9AB21-D975-45D6-A649-074D743CA2B7"}
 */
function imprimir_ficha() {
	
	/*
	  - se imprime con form  fichaaneste_impr_det_1  , con numeros en las mediciones
	  - fichaaneste_impr_det tiene simbolos(imagen_media)  en las casilla de la grila => al imprimir 
	    no se comporta ok = tarda muchisimo y no los imprime en su totalidad
		//generar_ds_grilla_simbolo()
		//forms.fichaaneste_impr_det.controller.setPageFormat(210,297,10,10,5,5,1,0);
		//forms.fichaaneste_impr_det.controller.print(false,false); 
		con printpreview se muestra ok en pantalla pero cuendo imprime no pone los simbolos
		generando pdf si los muestra e imprime
	  - con forms.fichaaneste_impr_tab imrpime imagen del form de carga , pero solo se ve
	    la parte del tab panel que aparece en pantalla, tiene un ancho de 2 horas solamente
	*/
		scopes.globals.fichaaneste_vfecha_inicial = vs_ficha_to_fichaaneste_cab_fechcarga.fecha_inicio 

		//// impresion  form impr_det_1  con numeros
		generar_ds_grilla()
		forms.fichaaneste_impr_det_1.controller.setPageFormat(210,297,15,5,3,2,1,0);
		forms.fichaaneste_impr_det_1.controller.print(false,false); 
}

/**
 * @properties={typeid:24,uuid:"73C97A68-9524-4737-9651-A1B12C8A33F4"}
 */
function validar_encabezado() {
	//// Validacion de encabezado
	if (hora_inicio_grilla == null || hora_inicio_grilla == 0)  
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Hora de Inicio '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 2
		forms.fichaaneste_grilla_1.elements.fichaaneste_hora_inicio_grilla_date.requestFocus()
		return false} 
	
	//// Diagnosticos
	if (diagnostico == null || diagnostico == 0) 
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Diagnóstico'
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.diagnostico.requestFocus()
		return false}

	if (diagnostico_operatorio == null || diagnostico_operatorio == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Diagnóstico Operatorio'
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.diagnostico_operatorio.requestFocus()
		return false}
	
		
	//// Intevencion
	/*  viene informado
	if (oper_propuesta == null || oper_propuesta == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Operación Propuesta'
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
		return false} */
	if (oper_realizada == null || oper_realizada == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Operación Realizada'
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.oper_realizada.requestFocus()
		return false}
	
	//// Medicos
	if (cirujano_legajo == null || cirujano_legajo == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Legajo del Cirujano '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.cirujano_legajo.requestFocus()
		return false}
	// TODO definir  si se puede cambiar = entonces validar
	if (anestesiologo_lega == null || anestesiologo_lega == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Legajo del anestesiologo '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.anestesiologo_legajo.requestFocus()
		return false}
	
	/* // ayudante y auxiliar Opcionales  06-06-2019
	if (ayudante_legajo == null || ayudante_legajo == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Legajo del Ayudante '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
		return false}
	
	if (auxiliar_legajo == null || auxiliar_legajo == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Legajo del Auxiliar '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
		return false}
	*/
	
	////  Respiracion
	if (resp_frec_x_min == null || resp_frec_x_min == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Frecuencia Respiración '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.resp_frec_x_min.requestFocus()
		return false}
	if (resp_tipo == null || resp_tipo == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Tipo de Respiración '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.resp_tipo.requestFocus()
		return false}
	//// Riesgo
	if (riesgo_op_grado == null || riesgo_op_grado == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Riesgo Operatorio '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.riesgo_op_grado.requestFocus()
		forms.fichaaneste_encabezado.elements.riesgo_op_grado.enabled
		return false}	
	
	//// Peso-talla  // Opcionales 06-06-2019
	/*
	if (peso == null || peso == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Peso del Paciente '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
		return false}
	if (talla == null || talla == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Talla del Paciente '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
		return false}
	*/
		
	//// Pulso-Tension
	if (pulso == null || pulso == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Pulso del Paciente '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.pulso.requestFocus()
		return false}
	if (t_art_actual_max == null || t_art_actual_max == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Tensión Art. Máxima Actual '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.t_art_actual_max.requestFocus()
		return false}
	if (t_art_actual_min == null || t_art_actual_min == 0)
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Tensión Art. Mínima Actual '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.t_art_actual_min.requestFocus()
		return false}
	if (t_art_habitual_max == null || t_art_habitual_max == 0)  // viene de anestesia
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Tensión Art. Máxima Habitual '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.t_art_habitual_max.requestFocus()
		return false}
	if (t_art_habitual_min == null || t_art_habitual_min == 0)  // viene de anestesia
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Tensión Art.Mínima Habitual '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.t_art_habitual_min.requestFocus()
		return false}
	
	////Anestesia
	if ((anest_gral == null  || anest_gral == 0) &&
		(anest_local == null || anest_local == 0) &&
		(anest_conductiva == null || anest_conductiva == 0) &&
		(anest_nla == null   || anest_nla == 0) )
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Anestesia '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.anest_gral.requestFocus()
		return false}
	
	//// premedicacion
	if (premedicacion == 1 && (droga_dosis == 0 || droga_dosis == null))
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Droga Dosis si está marcada "Premedicación".'
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 1
		forms.fichaaneste_encabezado.elements.premedicacion.requestFocus()
		return false}
	
	//// Urgencia
	if (urgencia == null)
			{urgencia = 0}
		
	//// Complicacion   opcional 06-06-2019
	//// Induccion      opcional 06-06-2019
	//// Mantenimiento  opcional 06-06-2019 
		
return true
}

/**
 * @properties={typeid:24,uuid:"D852A84E-D0B3-4823-8088-84EE5EB7496C"}
 */
function validar_pie() {
//// Anestesia		
	if ((anest_endovenosa == null || anest_endovenosa == 0 ) &&
		(anest_inhalatoria == null || anest_inhalatoria == 0) )
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Anestesia Inhalatoria o Endovenosa. '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 3
		forms.fichaaneste_pie.elements.anest_endovenosa.requestFocus()
		return false}
//// Intubacion	
	if ((intubacion_traqueal == 1) &&
		(tubo_nro == null || tubo_nro == 0) )
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Tubo nro. '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 3
		forms.fichaaneste_pie.elements.tubo_nro.requestFocus()
		return false}
//// Respiracion	
	if ((respiracion_asistida == 0 || respiracion_asistida == null) && (respiracion_espontanea == 0 || respiracion_espontanea == null) )
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Respiración Espontanea o Controlada. '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 3
		forms.fichaaneste_pie.elements.respiracion_espontanea.requestFocus()
		return false}
	if ((respiracion_asistida == 1) &&
		(resp_controlada_manual == null || resp_controlada_manual == 0) &&
		(resp_controlada_mecanica == null || resp_controlada_mecanica == 0))
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Respiración Controlada Manual o Mecánica. '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 3
		forms.fichaaneste_pie.elements.resp_controlada_manual.requestFocus()
		return false}
	if ((respiracion_asistida == 1) &&
		(resp_controlada_mecanica == 1 || resp_controlada_manual == 1) &&
		(sistema_con_rehin_parcial == null || sistema_con_rehin_parcial == 0) &&
		(sistema_con_rehin_total   == null || sistema_con_rehin_total   == 0)  &&
		(sistema_sin_reinhalacion  == null || sistema_sin_reinhalacion  == 0))
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Sistema de con o sin Reinhalación '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
		forms.fichaaneste_carga.elements.tabs.tabIndex = 3
		forms.fichaaneste_pie.elements.sistema_sin_reinhalacion.requestFocus()
		return false}	
	if ((respiracion_asistida == 1) &&
		(sistema_sin_reinhalacion == 0 || sistema_sin_reinhalacion == null) &&
		(sistema_con_rehin_parcial == null || sistema_con_rehin_parcial == 0) &&
		(sistema_con_rehin_total   == null || sistema_con_rehin_total   == 0))
		{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Sistema de Reinhalación Parcial o Total '
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
		forms.fichaaneste_carga.elements.tabs.tabIndex = 3
		forms.fichaaneste_pie.elements.sistema_sin_reinhalacion.requestFocus()
		return false}
return true
}

/**
 * @properties={typeid:24,uuid:"74898856-4731-438D-BF53-EFEF64B07525"}
 */
function blanquear() {
	scopes.globals.fichaaneste_cab_id = null
	scopes.globals.fichaaneste_anestesiologo_legajo = null
	scopes.globals.fichaaneste_anestesiologo_nombre = null
	scopes.globals.fichaaneste_anestesiologo_tipo = null
	scopes.globals.fichaaneste_cirujano_alf = null
	scopes.globals.fichaaneste_cirujano_cod = null
	scopes.globals.fichaaneste_cirujano_nombre = null
	scopes.globals.fichaaneste_histcli = null
	scopes.globals.fichaaneste_histcliuni = null
	scopes.globals.fichaaneste_hora_inicio_grilla = null
	scopes.globals.fichaaneste_hora_inicio_grilla_date = null
	scopes.globals.fichaaneste_horas_agregar = 0
	scopes.globals.fichaaneste_interven = null
	scopes.globals.fichaaneste_interven_des = null
	scopes.globals.fichaaneste_med_cod = 1
	scopes.globals.fichaaneste_obrasocial = null
	scopes.globals.fichaaneste_protocolo  = null
	scopes.globals.fichaaneste_horas   = 2
	scopes.globals.fichaaneste_pasomin = 5
	scopes.globals.fichaaneste_valfa  = null
	scopes.globals.fichaaneste_vcama  = null
	scopes.globals.fichaaneste_vedad  = null
	//scopes.globals.fichaaneste_vfecha  = null
	scopes.globals.fichaaneste_vfecha8 = null
	//scopes.globals.fichaaneste_vfecha_inicial = null  //  10/07/2019 comprobar
	scopes.globals.fichaaneste_vfecnac = null
	scopes.globals.fichaaneste_vhabita = null
	scopes.globals.fichaaneste_vHisclistrynro = null
	scopes.globals.fichaaneste_vhora = null
	scopes.globals.fichaaneste_vop_propuesta = null
	scopes.globals.fichaaneste_vpaciente = null
	scopes.globals.fichaaneste_vpiso = null
	scopes.globals.fichaaneste_vpresion_max = null
	scopes.globals.fichaaneste_vpresion_min = null
	scopes.globals.fichaaneste_vpulso = null
	scopes.globals.fichaaneste_vriesgo = null
	scopes.globals.fichaaneste_vurgencia = null
	scopes.globals.vLegajo = null
	scopes.globals.vClave  = null
	scopes.globals.fichaaneste_modificacion = 0  // 22-07-2019

}

/**
 * @properties={typeid:24,uuid:"F8648049-9259-4079-BE80-614E7B9F1B97"}
 */
function blanquear_encabe() {
	forms.fichaaneste_encabezado.fauxiliar = ''
    forms.fichaaneste_encabezado.fayudante = ''
    forms.fichaaneste_encabezado.fcirujano = ''
    forms.fichaaneste_encabezado.fdiagnos  = ''
    forms.fichaaneste_encabezado.fdiagnos_oper = ''
    //forms.fichaaneste_encabezado.finterven     = null
    forms.fichaaneste_encabezado.finterven_des = ''
}

/**
 * @properties={typeid:24,uuid:"DF345310-17A1-4AEE-956E-B44631D95524"}
 */
function grabar() {
	//var cual_es = foundset.getSelectedIndex()
	try {databaseManager.saveData(foundset)}
	catch (msg){
		(plugins.dialogs.showInfoDialog("Error al grabar  fichaaneste_cab al 'Salir'",msg.toString(),"ok"))
	}	
	var error1=''
	var error2=''
	var i = 0
	var array = databaseManager.getFailedRecords(foundset)
	for (i = 0; i < array.length; i++) {
		var record = array[i];
		var jstable = databaseManager.getTable(record);
		var tableSQLName = jstable.getSQLName();
		error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
		error2='Error en grabación '+record.exception;
		if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			var thrown = record.exception.getValue()
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		}
	}
	if(error1!=''){  
		plugins.dialogs.showErrorDialog("Error en grabacion de finaaneste_cab",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion de finaaneste_cab",error2,"Ok")
		plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
		var desbloqueado = scopes.globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),scopes.globals.fichaaneste_histcliuni.toString(),scopes.globals.vLega.toString(),'Carga Ficha Anestésica');
		cerrar_window()
		return false}
				
		try {databaseManager.saveData(foundset.fichaaneste_cab_to_fichaaneste_det)}
		catch (msg){
			(plugins.dialogs.showInfoDialog("Error al grabar  fichaaneste_det al 'salir'",msg.toString(),"ok"))
		}	
		var error1=''
		var error2=''
		var i = 0
		var array = databaseManager.getFailedRecords(foundset)
		for (i = 0; i < array.length; i++) {
			var record = array[i];
			var jstable = databaseManager.getTable(record);
			var tableSQLName = jstable.getSQLName();
			error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise a Sistemas, por favor!'
			error2='Error en grabación '+record.exception;
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				var thrown = record.exception.getValue()
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		if(error1!=''){   
			plugins.dialogs.showErrorDialog("Error en grabacion de  fichaaneste_cab",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de  fichaaneste_cab",error2,"Ok")
			plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
			var desbloqueado = scopes.globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),scopes.globals.fichaaneste_histcliuni.toString(),scopes.globals.vLega.toString(),'Carga Ficha Anestésica');
			cerrar_window()
			return false}

}

/**
 * @properties={typeid:24,uuid:"7790AD2E-14D5-45E8-920F-B11B781DB133"}
 * @AllowToRunInFind
 */
function buscar_profesional($tipo,$legajo) {
	
var $cuantos = 0
if ($tipo == 0)
	{var $fs_per = databaseManager.getFoundSet("maestros","tbc_personal")
		$fs_per.find()
		$fs_per['per_legajo']  = $legajo
		$cuantos = $fs_per.search()	
		if ($cuantos == 1)
			{return $fs_per.apelnom}
		else
			{return ''}
	}
else
	{var $fs_med = databaseManager.getFoundSet("maestros","tbc_medicos")
		$fs_med.find()
		$fs_med['med_codigo']  = $legajo
		$cuantos = $fs_med.search()	
		if ($cuantos == 1)
			{return $fs_med.med_apenom}
		else
			{return ''}
		}
	}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8CDC19B0-B317-4187-99B3-563B394370A5"}
 */
function onAction_sin_grabar(event) {
	//databaseManager.revertEditedRecords(vs_ficha_to_fichaaneste_cab_unico)
	databaseManager.revertEditedRecords(vs_ficha_to_fichaaneste_cab_fechcarga)
	databaseManager.revertEditedRecords(foundset.getSelectedRecord())
////Desbloquear
	var desbloqueado = scopes.globals.AsistFunciones_unLockRegisterTable(application.getSolutionName(),controller.getName(),scopes.globals.fichaaneste_histcliuni.toString(),scopes.globals.vLega.toString(),'Carga Ficha Anestésica');
	f_cerrarForm = true
	cerrar_window()
	/* 
	if(databaseManager.hasRecordChanges(vs_ficha_to_fichaaneste_cab_unico)== true)
	{
		if (globals.DIALOGS.showQuestionDialog('¡Atención!','¿Está seguro que desea salir sin grabar?', 'Si', 'No') == 'Si')
		{f_cerrarForm = true
		databaseManager.revertEditedRecords(vs_ficha_to_fichaaneste_cab_unico)}
		else
			f_cerrarForm = false;
	}   */
}

/**
 * @properties={typeid:24,uuid:"8A289A90-F973-4039-AE24-776D696D3C26"}
 */
function validar_grilla() {
 
	if  (hora_inicio_grilla == 0) 
	{scopes.globals.fichaaneste_vmensaje = 'Debe Ingresar Hora de Inicio de la Grilla'
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
		return false	
	} 
	
	var $sql = "SELECT count(*) FROM fichaaneste_det "+
				"WHERE fichaaneste_cab_id = ? ; "; 
	var $args = [fichaaneste_cab_id]; 
	var $ds  = databaseManager.getDataSetByQuery("desal",$sql,$args,1); 
	var $cuantos = $ds.getValue(1,1); 
	if  ($cuantos == 0) 
	{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Mediciones en la Grilla'
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		forms.fichaaneste_carga.elements.tabs.tabIndex = 2
		forms.fichaaneste_grilla_1.elements.medicion1.requestFocus()
		return false	
	} 

	return true;
}

/**
 * @properties={typeid:24,uuid:"651A53C6-4B63-4BA8-B802-2C5B4530E94F"}
 */
function generar_ds_grilla_simbolo() {
	// Habilitar si se usa form fichaaneste_impr_det para imprimir ficha
	/*
	var $SQL = "SELECT min_col, tipo_medicion_cod, valor, tipo.simbolo FROM fichaaneste_det med LEFT JOIN fichaaneste_tipomedicion tipo ON tipo.codigo = med.tipo_medicion_cod where fichaaneste_cab_id = "+scopes.globals.fichaaneste_cab_id+"  order by fichaaneste_cab_id , min_col, tipo_medicion_cod"
	var frm_ds = databaseManager.getDataSetByQuery("desal", $SQL, null, 500);
    
   	var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('fhora_edit',1,JSColumn.TEXT)   
	$ds.addColumn('foper',2,JSColumn.TEXT)
	$ds.addColumn('fanest',3,JSColumn.TEXT)
	$ds.addColumn('fsatur',4,JSColumn.INTEGER)
	$ds.addColumn('fco2',5,JSColumn.INTEGER)
	$ds.addColumn('f200',6,JSColumn.MEDIA)
	$ds.addColumn('f190',7,JSColumn.MEDIA)
	$ds.addColumn('f180',8,JSColumn.MEDIA)
	$ds.addColumn('f170',9,JSColumn.MEDIA)
	$ds.addColumn('f160',10,JSColumn.MEDIA)
	$ds.addColumn('f150',11,JSColumn.MEDIA)
	$ds.addColumn('f140',12,JSColumn.MEDIA)
	$ds.addColumn('f130',13,JSColumn.MEDIA)
	$ds.addColumn('f120',14,JSColumn.MEDIA)
	$ds.addColumn('f110',15,JSColumn.MEDIA)
	$ds.addColumn('f100',16,JSColumn.MEDIA)
	$ds.addColumn('f90',17,JSColumn.MEDIA)
	$ds.addColumn('f80',18,JSColumn.MEDIA)
	$ds.addColumn('f70',19,JSColumn.MEDIA)
	$ds.addColumn('f60',20,JSColumn.MEDIA)
	$ds.addColumn('f50',21,JSColumn.MEDIA)
	$ds.addColumn('f40',22,JSColumn.MEDIA)
	$ds.addColumn('f30',23,JSColumn.MEDIA)
	$ds.addColumn('f20',24,JSColumn.MEDIA)
	$ds.addColumn('f10',25,JSColumn.MEDIA)
	var $max   = frm_ds.getMaxRowIndex()
	
	var $medi  = null
	var $fila  = null
	var $hora_edit = ' ';
	var $satur = null
	var $co2   = null
	var $oper  = null
	var $anest = null
	
	if ($max > 0){
		for(var i = 1; i <= $max; i++){
			if ($fila == null)   // primera pasada
			{	$fila = frm_ds.getValue(i,1)
					var $fec  = new Date(fecha_inicio.getFullYear(), fecha_inicio.getMonth(), fecha_inicio.getDate(), fecha_inicio.getHours(), fecha_inicio.getMinutes() + frm_ds.getValue(i,1), 0, 0)	
				var $min  = $fec.getMinutes()
				var $hora = $fec.getHours()
				if ($min < 10)
					{$min = '0' + $min}	
				if ($hora < 10)
					{$hora = '0' + $hora}
				$hora_edit = $hora +':' + $min
				var $columnas = new Array();
				for(var j = 1; j <= 20; j++)
					{$columnas [j - 1] = null}
			}
			
			if ($fila != frm_ds.getValue(i,1))   // cambia de horario
			{
				$ds.addRow([$hora_edit,$oper,$anest,$satur,$co2, 	
				$columnas[0],$columnas[1],$columnas[2],$columnas[3],$columnas[4],$columnas[5],$columnas[6],$columnas[7],$columnas[8],$columnas[9],$columnas[10],$columnas[11],$columnas[12],$columnas[13],$columnas[14],$columnas[15],$columnas[16],$columnas[17],$columnas[18],$columnas[19]])
			
				$fila = frm_ds.getValue(i,1)			
				$satur = null
				$co2   = null
				$oper  = null
				$anest = null
				
				var $fec  = new Date(fecha_inicio.getFullYear(), fecha_inicio.getMonth(), fecha_inicio.getDate(), fecha_inicio.getHours(), fecha_inicio.getMinutes() + frm_ds.getValue(i,1), 0, 0)	
				var $min  = $fec.getMinutes()
				var $hora = $fec.getHours()
				if ($min < 10)
					{$min = '0' + $min}	
				if ($hora < 10)
					{$hora = '0' + $hora}
				$hora_edit = $hora +':' + $min
				
				var $columnas = new Array();
				for(var j = 1; j <= 20; j++)
					{$columnas [j - 1]= null}
			}
			if (frm_ds.getValue(i,3) == 200) 
				{var $colum = 0}
			else
				{var $colum = (200 - frm_ds.getValue(i,3)) / 10 }
			
			switch(frm_ds.getValue(i,2))
				{
				case 1:   //max
					fmedi = plugins.http.getMediaData('media:///tension-max.png')
					$columnas[$colum] = fmedi 
					break;
				case 2:   // min) 
					fmedi = plugins.http.getMediaData('media:///tension-min.png')
					$columnas[$colum] = fmedi 
					break;
				case 3:   // pulso
					fmedi = plugins.http.getMediaData('media:///pulso.png')
					$columnas[$colum] = fmedi 
					break; 
				case 4:   // satur
					$satur = frm_ds.getValue(i,3).toString();
					$colum = 4
					break;
				case 5:   // CO2
					$co2   = frm_ds.getValue(i,3).toString();
					$colum = 5
					break;
				case 6:
					$anest = plugins.http.getMediaData('media:///anestesia.png')
					$colum = 2
					break;
				case 7:
					$oper  = plugins.http.getMediaData('media:///operacion.png')
					$colum = 3
					break;
				}
		} 

		$ds.addRow([$hora_edit,$oper,$anest,$satur,$co2, 	
		$columnas[0],$columnas[1],$columnas[2],$columnas[3],$columnas[4],$columnas[5],$columnas[6],$columnas[7],$columnas[8],$columnas[9],$columnas[10],$columnas[11],$columnas[12],$columnas[13],$columnas[14],$columnas[15],$columnas[16],$columnas[17],$columnas[18],$columnas[19]])
	
	var $tipos = [JSColumn.TEXT,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.TEXT,JSColumn.TEXT,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA]

	var $frm = solutionModel.getForm('fichaaneste_impr_det')
	$frm.dataSource = $ds.createDataSource('Ds_Grilla', $tipos)   
	forms.fichaaneste_impr_det.controller.recreateUI()

	} */
}

/**
 * @properties={typeid:24,uuid:"C2DD5FFE-ABCF-4302-9394-8C4EA19EBDDA"}
 */
function generar_ds_grilla() {
	var $SQL = "SELECT min_col, tipo_medicion_cod, valor, tipo.simbolo FROM fichaaneste_det med LEFT JOIN fichaaneste_tipomedicion tipo ON tipo.codigo = med.tipo_medicion_cod where fichaaneste_cab_id = "+scopes.globals.fichaaneste_cab_id+"  order by fichaaneste_cab_id , min_col, tipo_medicion_cod"
	var frm_ds = databaseManager.getDataSetByQuery("desal", $SQL, null, 500);
    
   	var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('fhora_edit',1,JSColumn.TEXT)   
	$ds.addColumn('fanest',2,JSColumn.TEXT)
	$ds.addColumn('foper',3,JSColumn.TEXT)
	$ds.addColumn('fsatur',4,JSColumn.INTEGER)
	$ds.addColumn('fco2',5,JSColumn.INTEGER)
	$ds.addColumn('ft_max',6,JSColumn.INTEGER)
	$ds.addColumn('ft_min',7,JSColumn.INTEGER)
	$ds.addColumn('fpulso',8,JSColumn.INTEGER)
	var $max   = frm_ds.getMaxRowIndex()
	
	var $fila  = null
	var $hora_edit = ' ';
   	var $tmax  = null //0
	var $tmin  = null //0
	var $pulso = null //0
	var $satur = null  //0
	var $co2   = null  //0
	var $oper  = null
	var $anest = null
		
	if ($max > 0){
		for(var i = 1; i <= $max; i++){
			if ($fila == null)
				{$fila = frm_ds.getValue(i,1)
					var $fec  = new Date(fecha_inicio.getFullYear(), fecha_inicio.getMonth(), fecha_inicio.getDate(), fecha_inicio.getHours(), fecha_inicio.getMinutes() + frm_ds.getValue(i,1), 0, 0)	
				var $min  = $fec.getMinutes()
				var $hora = $fec.getHours()
				if ($min < 10)
					{$min = '0' + $min}	
				if ($hora < 10)
					{$hora = '0' + $hora}
				$hora_edit = $hora +':' + $min
				}
			
			if ($fila != frm_ds.getValue(i,1))
			{
				$ds.addRow([$hora_edit,$anest,$oper,$satur,$co2,$tmax,$tmin,$pulso])
				$fila = frm_ds.getValue(i,1)
				$tmax  = null  // 0
				$tmin  = null  // 0
				$pulso = null  // 0
				$satur = null  //0
				$co2   = null  //0
				$oper  = null
				$anest = null
				var $fec  = new Date(fecha_inicio.getFullYear(), fecha_inicio.getMonth(), fecha_inicio.getDate(), fecha_inicio.getHours(), fecha_inicio.getMinutes() + frm_ds.getValue(i,1), 0, 0)	
				var $min  = $fec.getMinutes()
				var $hora = $fec.getHours()
				if ($min < 10)
					{$min = '0' + $min}	
				if ($hora < 10)
					{$hora = '0' + $hora}
				$hora_edit = $hora +':' + $min
			}

			switch(frm_ds.getValue(i,2))
				{
				case 1:
					$tmax = frm_ds.getValue(i,3).toString();
					break;
				case 2:
					$tmin = frm_ds.getValue(i,3).toString();
					break;
				case 3:
					$pulso = frm_ds.getValue(i,3).toString();
					break;
				case 4:
					$satur = frm_ds.getValue(i,3).toString();
					break;
				case 5:
					$co2   = frm_ds.getValue(i,3).toString();
					break;
				case 6:
					$anest = plugins.http.getMediaData('media:///anestesia.png')
					break;
				case 7:
					$oper  = plugins.http.getMediaData('media:///operacion.png')
				break;
				}
			
		}
		$ds.addRow([$hora_edit,$anest,$oper,$satur,$co2,$tmax,$tmin,$pulso]) 		
	
	//var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT]
	var $tipos = [JSColumn.TEXT,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT]

	var $frm = solutionModel.getForm('fichaaneste_impr_det_1')
	$frm.dataSource = $ds.createDataSource('Ds_Grilla', $tipos)   
	forms.fichaaneste_impr_det_1.controller.recreateUI()

	}
}
