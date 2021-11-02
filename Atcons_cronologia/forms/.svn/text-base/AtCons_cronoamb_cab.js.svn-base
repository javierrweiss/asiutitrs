/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ADAEB825-4A57-4C34-B659-00E8EAE91C28"}
 */
var fmensaje = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"27865510-490A-4A48-BC18-87E7BF325C25",variableType:4}
 */
var f_fecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4B0E2003-A8AA-42C6-9337-12A96E1BA149",variableType:4}
 */
var f_especialidad = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EFBF15BA-588B-4F4C-990F-0A1FC2F2E087",variableType:4}
 */
var f_tipo_atencion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"DBC09321-39EC-4419-B7A8-082B7647E470",variableType:93}
 */
var f_fecha_desde = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5F46EC3B-BE5E-45FB-89E1-9865464785E0"}
 * @AllowToRunInFind
 */
function onAction_buscar(event) {
	if(atcons_vs_to_tbl_cronoambcab.find() == false)
	{	fmensaje  = 'Error al buscar Historia Clinica'
		globals.DIALOGS.showInfoDialog('Aviso',fmensaje ,"Aceptar")
	    return 	
	}	
	// filtro
	hiscli_nro = scopes.globals.AtCons_crono_vhisclinro
	/* no se cargo desde cobol
	medico = scopes.globals.AtCons_vlegajo
	medico_tipo = scopes.globals.AtCons_vmedico_tipo
	*/
	if  (f_fecha != null)
		{atcons_vs_to_tbl_cronoambcab.fecaten = '>=' + f_fecha}
	if  (f_tipo_atencion != null) 
		{atcons_vs_to_tbl_cronoambcab.tipo_atencion = f_tipo_atencion}
	if  (f_especialidad != null) 
		{atcons_vs_to_tbl_cronoambcab.especialidad = f_especialidad} 
	
	if (atcons_vs_to_tbl_cronoambcab.search()  == 0)
	{	fmensaje = 'Historia Clínica nro. '  + scopes.globals.AtCons_crono_vhisclinro  +
	 	'\n' + 'No encontró información para el rango solicitado'
	 	globals.DIALOGS.showInfoDialog('Aviso',fmensaje,"Aceptar")
	 	return
	}
	atcons_vs_to_tbl_cronoambcab.sort('fecaten desc ,horaaten desc')
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C1108F6B-20E2-401F-9F16-1871371A4B7C"}
 */
function onAction_todos(event) {
	
	f_fecha_desde = null
	f_fecha    = null
	f_especialidad  = null
	f_tipo_atencion = null
	onAction_buscar(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D4C5379-2A52-4565-9CC3-DFAD10501DCB"}
 */
function onAction_limpiar_fecha(event) {
	f_fecha_desde = null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E834BFDB-5483-4FF1-AC2B-5931E1B99A2B"}
 */
function onAction_limpiar_subserv(event) {
	f_especialidad = null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"96D37F22-FC16-4C02-84DD-CBA4801BDB45"}
 */
function onAction_limpiar_servicio(event) {
	f_tipo_atencion = null
	f_especialidad = null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B7830FD0-BB42-4B91-8B79-4C09AD012DBA"}
 */
function onAction_volver(event) {

	// solo para probar fuera de la solucion principal
	//application.exit()
	f_tipo_atencion = null
	f_especialidad = null
	var $win = application.getWindow("Atcons_crono");
	if ($win != null){
		$win.hide();
		$win.destroy();
	}  
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"53CA4945-BF4E-4BFE-942C-FFE913A90026"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	onAction_todos(event)
	fmensaje = ''
	atcons_vs_to_tbl_cronoambcab.sort('fecaten desc,horaaten desc')
	elements.f_especial.visible = false
	elements.f_especial_especial.visible = false
	f_tipo_atencion = null
	f_especialidad = null
	//globals.DIALOGS.showInfoDialog('Aviso','ON SHOW' ,"Aceptar")
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
 * @properties={typeid:24,uuid:"4B149473-DBF6-4C9E-89D3-2CE8331EE0D4"}
 */
function onDataChange_fecha_desde(oldValue, newValue, event) {
	var $anio = f_fecha_desde.getFullYear()
    var $mes  = f_fecha_desde.getMonth() + 1
    var $dia  = f_fecha_desde.getDate() 
	if ($dia < 10)
		{$dia = '0' + $dia}
	if ($mes < 10)
		{$mes = '0' + $mes}
	f_fecha =  $anio + '' + $mes + '' + $dia
	
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0F59E2C-C2D2-4EE9-B77C-181421CF9D3D"}
 */
function onAction_imagen(event) {
	if (tipo_atencion != 1 && tipo_atencion != 4)
	{	fmensaje = 'Solo para imagenes' 
		globals.DIALOGS.showInfoDialog('Aviso',fmensaje,"Aceptar")}
	else
	{
		if (nro_imagen == 0 || nro_imagen == null)
			{return }
		// TODO 30-01-2019 solo endoscopia y resonancias. Otros no estan bien cargados : puede mostrar estudios de otras personas!!!
		if (especialidad != 6 && especialidad != 9)  
			{return }
		if (especialidad == 9 && fecaten < 20180801)  // resonancia < 2018-08-01 no nostrar
			{return }
		if (especialidad == 6 && fecaten < 20181101)  // endoscopia < 2018-11-01 no nostrar
			{return }
	
		elements.esperando.visible = true
		application.updateUI()
	/* TRAE TODAS las imagenes y muestra la lista
	//scopes.globals.AtCons_tipopaciente = 1 para ambulatorio
	globals.generoDatasetImagenes(scopes.globals.AtCons_tipopaciente,scopes.globals.AtCons_crono_vhisclinro,"AtCons_muestra_imagenes")  // 06-11-2018
	///forms.frm_tab_imagenes.elements.tabless.tabIndex=2
	
	var $win = application.createWindow("Imagen",JSWindow.MODAL_DIALOG)
    $win.title = " Consulta Imagenes "
    //$win.setSize(990,700) 
    $win.show(forms.AtCons_muestra_imagenes)
	$win.destroy()
	*/
		
	// TRAE la imagen del renglon solamente
		var $link = scopes.globals.obtieneUrlImagen(nro_imagen)
		if ($link != '' && $link != null){
			var $link2 = scopes.globals.obtieneDatosEstudio(especialidad,nro_imagen)    // TODO Revisar : no hace nada el metodo y especialidad es el servicio?
			}
		else{
			$link=scopes.globals.obtieneUrlImagenAccessionNumber(nro_imagen)
			if ($link != '' && $link != null){
					var $link2=scopes.globals.obtieneDatosEstudio(especialidad, nro_imagen) // TODO Revisar : no hace nada el metodo y especialidad es el servicio?
			}
			}
		elements.esperando.visible = false
		application.updateUI()
		if ($link != '' && $link != null)
			{application.showURL($link)}
		else
			{globals.DIALOGS.showInfoDialog('Aviso','No encontró imagen' ,"Aceptar")}
	}
	
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"81B34E86-0DFA-4640-B027-4E323986B129"}
 */
function onRender_f_especial(event) {

    var $prop = event.getRenderable()
	/* 
    if (f_tipo_atencion  != 1 && f_tipo_atencion  != null){ 
        $prop.visible = false}   */
	
    if (f_tipo_atencion == 1)
    	{elements.f_especial_especial.visible = false
    	 elements.f_especial.visible = true}
    else
    	{$prop.visible = false
    	 elements.f_especial_especial.visible = false
	     elements.f_especial.visible = false}	
  
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
 * @properties={typeid:24,uuid:"088E1008-A761-4A3F-8A72-E4C35B5D122B"}
 */
function onDataChange_tipo_atencion(oldValue, newValue, event) {
	if (f_tipo_atencion == 1)
	{	elements.f_especial.visible = true
		elements.f_especial_especial.visible = false
	    application.updateUI()
		return true
	}
	if (f_tipo_atencion == null)
	{	elements.f_especial.visible = false
		elements.f_especial_especial.visible = false
	    application.updateUI()
		return true
	}
	else {if (f_tipo_atencion == 8 || f_tipo_atencion == 12 || f_tipo_atencion == 10)
			{elements.f_especial.visible = false
			 elements.f_especial_especial.visible = true}
			else 
			 {elements.f_especial.visible = false
			  elements.f_especial_especial.visible = false}
		}
	application.updateUI()
	return true
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"8AB6EAE5-0223-43EA-BA9B-34CCB4AAD479"}
 */
function onRender_f_especial_especial(event) {
// para consultas : interconsultas, guardia y especialista
    var $prop = event.getRenderable()
    if (f_tipo_atencion == 8 || f_tipo_atencion == 12 || f_tipo_atencion == 10)
    		{$prop.visible = true
    		 elements.f_especial.visible = false
				// elements.f_especial_especial.visible = true
			}
	else
		{$prop.visible = false
		 elements.f_especial_especial.visible = false
    	 elements.f_especial.visible = false}	
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9D0DBF25-059A-42FA-9B1A-CB09BC1773F4"}
 */
function onLoad(event) {
	atcons_vs_to_tbl_cronoambcab.sort('fecaten desc ,horaaten desc')
	onAction_todos(event)
	// globals.DIALOGS.showInfoDialog('Aviso','ON LOAD' ,"Aceptar")
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"AB047AFA-ED37-48A0-BE2E-4535192E115C"}
 */
function onRender_imagen(event) {

	var $rcd = event.getRecord()
	var $elemento = event.getRenderable().getName()
    var $prop = event.getRenderable()
    if ($rcd.nro_imagen != null && $rcd.nro_imagen != 0 )
    	{$prop.enabled = true}
	else
		{$prop.enabled = false}
	// TODO no mostrar en estas condiciones
	if (especialidad != 6 && especialidad != 9)  
		{$prop.enabled = false}
	if (especialidad == 9 && fecaten < 20180801)  // resonancia < 2018-08-01 no nostrar
		{$prop.enabled = false}
	if (especialidad == 6 && fecaten < 20181101)  // endoscopia < 2018-11-01 no nostrar
		{$prop.enabled = false}

	
}
