/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1AB87FC5-8079-4F7A-9CC2-82A30123146C"}
 */
var fanestesiologo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7B221C8A-9AEA-4EBA-9B91-12AC8CCF12DC"}
 */
var fauxiliar = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"86753C6D-9674-4521-B032-188AB9D5B66D"}
 */
var fayudante = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AC6564C7-D106-4694-8A48-C20D4331DE08"}
 */
var fcirujano = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F4517888-D437-4616-8989-367D982FC85C"}
 */
var finterven_des = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CDA0B75A-BAFE-4D26-ABF9-A6826A1EB2B9",variableType:4}
 */
var finterven = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B85D7A3A-058C-408B-B346-812E5486462B"}
 */
var fdiagnos_oper = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8B3DADBB-8103-49C0-81D6-FB9E636ABAD0"}
 */
var fdiagnos = '';

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A8ACB8CA-D174-4AEA-9860-71B00FB1857C"}
 */
function onDataChange_talla(oldValue, newValue, event) {
// (talla == null || talla == 0 || 
	if (talla > 3 || talla < 0)
	{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Talla del Paciente entre 0 y 3 m. '
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
	return false}
	elements.pulso.requestFocus()
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D784FFA0-7BE8-4A03-A9DA-E4AAEE2F3302"}
 */
function onDataChange_peso(oldValue, newValue, event) {
// if (peso == null || peso == 0 ||  es opcional
if(peso < 0 || peso > 400)
	{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Peso del Paciente entre 0 y 400 kg.'
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
	return false}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"816473D2-57E1-440D-B7B7-9BFFCB0F6BF7"}
 */
function onAction_txtBusquedaRapida(event) {
	var $cual = event.getElementName()
	if ($cual == "diagnostico" )
		{scopes.globals.gbl_con_diagnostico = fdiagnos}
	else{scopes.globals.gbl_con_diagnostico = fdiagnos_oper}
	
	//diagnostico = fdiagnos
	//scopes.globals.gbl_diagnostico = null  //**//
	if(scopes.globals.gbl_con_diagnostico != '' && scopes.globals.gbl_con_diagnostico!= null)
	{
		//scopes.globals.AtCons_eventSourceButton = 0;
		//openSearch()
		
		if ($cual == "diagnostico" )
			{scopes.globals.gbl_con_diagnostico = fdiagnos}
		else{scopes.globals.gbl_con_diagnostico = fdiagnos_oper}
		scopes.globals.gbl_con_diagnostico = scopes.globals.gbl_con_diagnostico.toLocaleUpperCase()  // TODO
		forms.frm_scr_diagnostico.filtra()  // TODO
		forms.frm_tab_diagnostico.onShow_carga_formulario(true,event)
		var win = application.createWindow("busca_diagnos",JSWindow.MODAL_DIALOG);	
	    win.title= 'Búsqueda de Diagnosticos';
	    win.resizable = false;
	    win.show(forms.frm_tab_diagnostico);

	    if ($cual == "diagnostico" )
	    	{fdiagnos = scopes.globals.gbl_con_diagnostico
	    	diagnostico = scopes.globals.gbl_diagnostico}
    	 else
    	 	{fdiagnos_oper = scopes.globals.gbl_con_diagnostico
    	 	diagnostico_operatorio = scopes.globals.gbl_diagnostico}
	}
	else{
		//globals.DIALOGS.showWarningDialog("Atención",'Debe ingresar Nro. de diagnostico o la descripcion.',"Aceptar")
		if ($cual == "diagnostico" )
			{diagnostico = null}
    	else 
    		{diagnostico_operatorio = null}
		}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7BAE4BA7-A291-4F72-88B4-54D0876444E8"}
 */
function onAction_fdiagnos(event) {

	var $cual = event.getElementName()
	if ($cual == "btn_BuscarDiag" )
		{scopes.globals.gbl_con_diagnostico = fdiagnos}
	else{scopes.globals.gbl_con_diagnostico = fdiagnos_oper}
	scopes.globals.gbl_con_diagnostico = scopes.globals.gbl_con_diagnostico.toLocaleUpperCase()  // TODO
	forms.frm_scr_diagnostico.filtra()

	var win = application.createWindow("busca_diagnos",JSWindow.MODAL_DIALOG);	
    win.title= 'Búsqueda de Diagnosticos';
    win.resizable = false;
    win.show(forms.frm_tab_diagnostico);
    if ($cual == "btn_BuscarDiag" )
    	{fdiagnos = scopes.globals.gbl_con_diagnostico
    	 diagnostico = scopes.globals.gbl_diagnostico}
    else
    	{fdiagnos_oper = scopes.globals.gbl_con_diagnostico
    	 diagnostico_operatorio = scopes.globals.gbl_diagnostico}
     forms.fichaaneste_encabezado.controller.recreateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"519A1C12-86CC-4917-BED2-A5473D3F6AE4"}
 */
function onAction_Interven(event) {
	scopes.globals.fichaaneste_interven_des = finterven_des 
	scopes.globals.fichaaneste_interven = null
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Intervención";
	win.setSize(550,600)
	win.resizable = false;
	win.show(forms.fichaaneste_interven_tab);
	oper_realizada =  scopes.globals.fichaaneste_interven
	//finterven      =  scopes.globals.fichaaneste_interven
	finterven_des  = scopes.globals.fichaaneste_interven_des
	forms.fichaaneste_encabezado.controller.recreateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"81FE3A5F-4D27-410E-BFF9-EC54C00A0CB9"}
 */
function onAction_intervenBusquedaRapida(event) {

	scopes.globals.fichaaneste_interven_des = finterven_des
	scopes.globals.fichaaneste_interven = null
	if(scopes.globals.fichaaneste_interven_des != '' && scopes.globals.fichaaneste_interven_des!= null)
	{
		scopes.globals.fichaaneste_interven_des = scopes.globals.fichaaneste_interven_des.toLocaleUpperCase()
		forms.fichaaneste_interven_tab.onShow_busqueda_interven(true,event)
		var win = application.createWindow("busca_interven",JSWindow.MODAL_DIALOG);	
	    win.title= 'Búsqueda de Interverción';
	    win.resizable = false;
	    win.show(forms.fichaaneste_interven_tab);

	    finterven_des = scopes.globals.fichaaneste_interven_des
	    oper_realizada  = scopes.globals.fichaaneste_interven
		forms.fichaaneste_encabezado.controller.recreateUI()
	}
	else{
		oper_realizada = null
		}
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"9008DB42-091F-4BDD-A90D-A354F1905908"}
 */
function onDataChange_premedicacion(oldValue, newValue, event) {
if (premedicacion == 1)
	{elements.droga_dosis.editable = true}
else
	{elements.droga_dosis.editable = false
	 droga_dosis = null}
	
return true
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A218247-E99B-4FEA-965B-F4FB5744748C"}
 */
function onLoad(event) {
	//fanestesiologo = scopes.globals.fichaaneste_anestesiologo_nombre en modif. queda en blanco
	if (premedicacion == 1) 
		{elements.droga_dosis.editable = true}
	else
		{elements.droga_dosis.editable = false}

	if (pulso == null || pulso == 0)
		{elements.pulso.editable = true}
	else
		{elements.pulso.editable = false} 
	
	if (riesgo_op_grado == null || riesgo_op_grado == 0)
		{elements.riesgo_op_grado.editable = true}
	else
		{elements.riesgo_op_grado.editable = false}	
	/*
	if (t_art_actual_max == null)
		{elements.t_art_actual_max.editable = true}
	else
		{elements.t_art_actual_max.editable = false}
		
	if (t_art_actual_min == null)
		{elements.t_art_actual_min.editable = true}
	else
		{elements.t_art_actual_min.editable = false}
	*/
	if (cama == null)
		{elements.cama.editable = true}
	else
		{elements.cama.editable = false}
	
	if (habitacion == null)
		{elements.habitacion.editable = true}
	else
		{elements.habitacion.editable = false}
	
	if (piso == null)
		{elements.piso.editable = true}
	else
		{elements.piso.editable = false}
/*	
	if (urgencia == null)
		{elements.urgencia.enabled= true}
	else
		{elements.urgencia.enabled = false}	
*/
	return true	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FBA7E824-C1FE-4147-A972-7ECE5A81422B"}
 */
function onAction_cirujano(event) {
	// TODO  ver que entre buscando lo tipeado : si es posible
	globals.vTipoMedico = 1
	scopes.globals.fichaaneste_cirujano_cod = 0
	scopes.globals.fichaaneste_cirujano_nombre = ''
	//forms.fichaaneste_medicos_personal_busqueda.onAction_FIND(event)
	if(fcirujano!=null){
		globals.fichaaneste_cirujano_alf=fcirujano.toLocaleUpperCase()
	}else{
		globals.fichaaneste_cirujano_alf=''
	}
	
	var win   = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Profesional";
	win.setSize(850,550)
	win.show(forms.fichaaneste_medicos_personal_busqueda)
	if (scopes.globals.fichaaneste_cirujano_nombre != '')
		{fcirujano = scopes.globals.fichaaneste_cirujano_nombre
		cirujano_legajo = scopes.globals.fichaaneste_cirujano_cod}
    cirujano_tipo = 1 // TODO
	

	
	///  usando forms.frm_tab_med_per del modulo ScrSanatorio NO devuelve descripcion
	/*
	scopes.globals.gbl_con_busca = fcirujano
	//if(scopes.globals.gbl_con_busca != '' && scopes.globals.gbl_con_busca!= null)
	//{
		scopes.globals.gbl_con_busca = fcirujano	
		var win = application.createWindow("Busca_profe",JSWindow.MODAL_DIALOG);	
	    win.title= 'Búsqueda de Profesionales';
	    win.resizable = false;
	    win.show(forms.frm_tab_med_per);
	    fcirujano = scopes.globals.gbl_con_busca
	    cirujano_legajo = scopes.globals.gbl_profesional
	//}
	//else
	//{cirujano_legajo = null}	
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"006D2F16-C98B-4D75-9C10-05C9664BD4E8"}
 */
function onAction_ayudante(event) {
	// TODO ver que entre buscando lo tipeado : si es posible
	globals.vTipoMedico = 1
	scopes.globals.fichaaneste_cirujano_cod = 0
	scopes.globals.fichaaneste_cirujano_nombre = ''
	if(fayudante!=null){
		globals.fichaaneste_cirujano_alf=fayudante.toUpperCase()
	}else{
		globals.fichaaneste_cirujano_alf=''
	}	
	var win   = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Profesional";
	win.setSize(850,550)
	win.show(forms.fichaaneste_medicos_personal_busqueda)
	if (scopes.globals.fichaaneste_cirujano_nombre != '')
		{fayudante = scopes.globals.fichaaneste_cirujano_nombre
		ayudante_legajo = scopes.globals.fichaaneste_cirujano_cod}
	ayudante_tipo   = 1   // TODO
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1E63004A-1166-471E-899E-6D9A498006C2"}
 */
function onAction_auxiliar(event) {
	// TODO  ver que entre buscando lo tipeado : si es posible
	globals.vTipoMedico = 1
	scopes.globals.fichaaneste_cirujano_cod = 0
	scopes.globals.fichaaneste_cirujano_nombre = ''
	if(fauxiliar!=null){
		globals.fichaaneste_cirujano_alf=fauxiliar.toUpperCase()
	}else{
		globals.fichaaneste_cirujano_alf=''
	}
	
	var win   = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Profesional";
	win.setSize(850,550)
	win.show(forms.fichaaneste_medicos_personal_busqueda)
	if (scopes.globals.fichaaneste_cirujano_nombre != '')
		{fauxiliar = scopes.globals.fichaaneste_cirujano_nombre
		auxiliar_legajo = scopes.globals.fichaaneste_cirujano_cod}
	auxiliar_tipo   = 1   // TODO
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A0E1AEF1-C9C5-4991-A281-E5ACB96A6184"}
 */
function onDataChange_pulso(oldValue, newValue, event) {
	if (pulso > 500 || pulso < 0 || pulso == null )
	{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Pulso del Paciente entre 0 y 500'
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
	return false}
return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"55ECCEF7-FDC3-448C-AFFE-B78C4606F72E"}
 */
function onShow(firstShow, event) {
	onLoad(event)
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"2C74738A-D0FE-46D8-B86E-EE175852FA87"}
 */
function onDataChange_frec_resp(oldValue, newValue, event) {
	if (resp_frec_x_min == null || resp_frec_x_min == 0 || resp_frec_x_min > 300)
	{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Frecuencia x Minuto entre 0 y 300'
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
	return false}
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"9D135DB0-2A4C-446F-9984-FB9C92AEC313"}
 */
function onDataChange_riesgo(oldValue, newValue, event) {
	elements.peso.requestFocus()
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6DAA4C0F-B46C-4DA3-8360-1E23028D505C"}
 */
function onDataChange_cirujano(oldValue, newValue, event) {
	scopes.globals.fichaaneste_cirujano_alf = fcirujano.toLocaleUpperCase()
	onAction_cirujano(event)
	scopes.globals.fichaaneste_cirujano_alf = ''
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8863201C-4BDA-45A6-B238-F19050645421"}
 */
function onDataChange_ayudante(oldValue, newValue, event) {
	scopes.globals.fichaaneste_cirujano_alf = fayudante.toLocaleUpperCase()
	onAction_ayudante(event)
	scopes.globals.fichaaneste_cirujano_alf = ''
	return true
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3228AF28-31BF-454F-B791-0E3F93B9E5DF"}
 */
function onDataChange_auxiliar(oldValue, newValue, event) {
	scopes.globals.fichaaneste_cirujano_alf = fauxiliar.toLocaleUpperCase()
	onAction_auxiliar(event)
	scopes.globals.fichaaneste_cirujano_alf = ''
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BC22E32C-E0F9-4876-8D93-8A620D4426F0"}
 */
function onAction_profesional(event) {
	// TODO  ver que entre buscando lo tipeado 
	globals.vTipoMedico = 1
	scopes.globals.fichaaneste_cirujano_cod = 0
	scopes.globals.fichaaneste_cirujano_nombre = ''
	//forms.fichaaneste_medicos_personal_busqueda.onAction_FIND(event)
	if (event.getElementName() == 'btn_BuscarCirujano')
	{
		if(fcirujano!=null){
			globals.fichaaneste_cirujano_alf=fcirujano.toLocaleUpperCase()
		}else{
			globals.fichaaneste_cirujano_alf=''
		}
	}
	if (event.getElementName() == 'btn_BuscarAnest')
	{	
		if(fanestesiologo!=null){
			globals.fichaaneste_cirujano_alf=fanestesiologo.toLocaleUpperCase()
		}else{
			globals.fichaaneste_cirujano_alf=''
		}
	}
	if (event.getElementName() == 'btn_Buscarauxiliar')
	{	
		if(fauxiliar!=null){
			globals.fichaaneste_cirujano_alf=fauxiliar.toLocaleUpperCase()
		}else{
			globals.fichaaneste_cirujano_alf=''
		}
	}
	if (event.getElementName() == 'btn_BuscarAyudante')
	{	
		if(fayudante!=null){
			globals.fichaaneste_cirujano_alf=fayudante.toLocaleUpperCase()
		}else{
			globals.fichaaneste_cirujano_alf=''
		}
	}
	var win   = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Profesional";
	win.setSize(850,550)
	win.show(forms.fichaaneste_medicos_personal_busqueda)
	/*
	event.getElementName()
	if (event.getElementName() == 'cirujano_legajo')
		{fcirujano = scopes.globals.fichaaneste_cirujano_nombre
		 cirujano_legajo = scopes.globals.fichaaneste_cirujano_cod}
	if (event.getElementName() == 'anestesiologo_legajo')
		{fanestesiologo = scopes.globals.fichaaneste_cirujano_nombre
		 anestesiologo_legajo = scopes.globals.fichaaneste_cirujano_cod}		
	if (event.getElementName() == 'auxiliar_legajo')
		{fauxiliar = scopes.globals.fichaaneste_cirujano_nombre
		 auxiliar_legajo = scopes.globals.fichaaneste_cirujano_cod}
	if (event.getElementName() == 'auxiliar_legajo')
		{fayudante = scopes.globals.fichaaneste_cirujano_nombre
		 ayudante_legajo = scopes.globals.fichaaneste_cirujano_cod}
	*/
	event.getElementName()
	if (scopes.globals.fichaaneste_cirujano_nombre != '')
	{
	if (event.getElementName() == 'btn_BuscarCirujano')
		{fcirujano = scopes.globals.fichaaneste_cirujano_nombre
		 cirujano_legajo = scopes.globals.fichaaneste_cirujano_cod}
	if (event.getElementName() == 'btn_BuscarAnest')
		{fanestesiologo = scopes.globals.fichaaneste_cirujano_nombre
		 anestesiologo_lega = scopes.globals.fichaaneste_cirujano_cod}		
	if (event.getElementName() == 'btn_Buscarauxiliar')
		{fauxiliar = scopes.globals.fichaaneste_cirujano_nombre
		 auxiliar_legajo = scopes.globals.fichaaneste_cirujano_cod}
	if (event.getElementName() == 'btn_BuscarAyudante')
		{fayudante = scopes.globals.fichaaneste_cirujano_nombre
		 ayudante_legajo = scopes.globals.fichaaneste_cirujano_cod}	
	}
	auxiliar_tipo   = 1   // TODO
	scopes.globals.fichaaneste_cirujano_alf = ''
	
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"220F33F6-991F-443C-A76F-C5C7E7C3C034"}
 */
function onDataChange_anestesiologo(oldValue, newValue, event) {
	scopes.globals.fichaaneste_cirujano_alf = fanestesiologo
	onAction_cirujano(event)
	return true	
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"FCD14C38-E226-4FB8-9579-609C714C9DFE"}
 */
function onDataChange_tens_art_actual_max(oldValue, newValue, event) {
	if (t_art_actual_max == null || t_art_actual_max == 0 || t_art_actual_max> 300)
	{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Tensión Art.Maxima Actual entre 0 y 300'
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
	return false}
	return true
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"B5EBAE7E-F827-47E7-B89A-172791A324F4"}
 */
function onDataChange_tens_art_actual_min(oldValue, newValue, event) {
	if (t_art_actual_min == null || t_art_actual_min == 0 || t_art_actual_min > 300)
	{scopes.globals.fichaaneste_vmensaje = 'Debe ingresar Tensión Art.Minima Actual entre 0 y 300'
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
	return false}
	return true
}

/**
 * @properties={typeid:24,uuid:"39314129-8DCA-445E-BBBC-887A8ED3EE6F"}
 */
function onaction_anestesiologo() {
	// TODO  ver que entre buscando lo tipeado : si es posible
	globals.vTipoMedico = 1
	scopes.globals.fichaaneste_cirujano_cod = 0
	scopes.globals.fichaaneste_cirujano_nombre = ''
	//forms.fichaaneste_medicos_personal_busqueda.onAction_FIND(event)
	if(fanestesiologo!=null){
		globals.fichaaneste_cirujano_alf=fanestesiologo.toLocaleUpperCase()
	}else{
		globals.fichaaneste_cirujano_alf=''
	}
	var win   = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Búsqueda de Código de Profesional";
	win.setSize(850,550)
	win.show(forms.fichaaneste_medicos_personal_busqueda)
	if (scopes.globals.fichaaneste_cirujano_nombre != '')
		{fanestesiologo = scopes.globals.fichaaneste_cirujano_nombre
		anestesiologo_lega = scopes.globals.fichaaneste_cirujano_cod}
    cirujano_tipo = 1 // TODO
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A7A30E10-74E4-48DF-95B0-3B14B6550738"}
 */
function onDataChange_diagnos(oldValue, newValue, event) {
	var $cual = event.getElementName()
	if ($cual == "diagnostico" )
		{scopes.globals.gbl_con_diagnostico = fdiagnos}
	else{scopes.globals.gbl_con_diagnostico = fdiagnos_oper}
	scopes.globals.gbl_con_diagnostico = scopes.globals.gbl_con_diagnostico.toLocaleUpperCase()  // TODO
	forms.frm_scr_diagnostico.filtra()

	var win = application.createWindow("busca_diagnos",JSWindow.MODAL_DIALOG);	
    win.title= 'Búsqueda de Diagnosticos';
    win.resizable = false;
    win.show(forms.frm_tab_diagnostico);
    if ($cual == "diagnostico" )
    	{fdiagnos = scopes.globals.gbl_con_diagnostico
    	 diagnostico = scopes.globals.gbl_diagnostico}
    else
    	{fdiagnos_oper = scopes.globals.gbl_con_diagnostico
    	 diagnostico_operatorio = scopes.globals.gbl_diagnostico}
     forms.fichaaneste_encabezado.controller.recreateUI()
	return true
}
