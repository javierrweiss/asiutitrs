/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"09A6E2C2-CEA4-43A2-9ED8-35FFAD8C1A93",variableType:4}
 */
var fcual_es = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AEA713FE-279B-4F0B-B29F-F8A886971696",variableType:93}
 */
var ffechaHasta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1BF269FD-4EE9-477A-8F09-B28E5EE238EB",variableType:4}
 */
var festado = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C632C8C9-D095-4D23-8C87-9A8C4E2A8B7A",variableType:4}
 */
var fhiscli_unico = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"35D49233-D2D1-4DB5-8DF5-A890C2261A83",variableType:93}
 */
var ffecha = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AF667857-D765-416F-B85B-4DD856AC7729"}
 */
function onAction_limpiar(event) {
event.getElementName()
if (event.getElementName() == 'limp_fecha')
	{ffecha = null}

if (event.getElementName() == 'limp_fhiscli_unico')
	{fhiscli_unico = null}
	
if (event.getElementName() == 'limp_estado')
	{festado = null}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E82E4AE3-1D54-4B98-96FA-AF5F198F59E5"}
 * @AllowToRunInFind
 */
function onAction_buscar(event) {
	controller.find()
	if (ffecha != null)
		//{fecha_inicio = '#' + utils.dateFormat(ffecha,'dd-MM-yyyy') + ' ... ' + utils.dateFormat(ffechaHasta,'dd-MM-yyyy') + '|dd-MM-yyyy'  // solo igual a la fecha pedidda
		{fecha_inicio = '>=' + utils.dateFormat(ffecha,'dd-MM-yyyy') +  '|dd-MM-yyyy'}  // mayor a la fecha pedidda
	if (fhiscli_unico != null)
		{histcli_unico = fhiscli_unico}
	if (festado != null)
		{estado = festado}
	var $cuantos = controller.search()
	if ($cuantos < 1)	
		{scopes.globals.fichaaneste_vmensaje = 'No hay Fichas Anestésicas en el rango solicitado'
		//globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
		
		plugins.dialogs.showInfoDialog('Aviso', scopes.globals.fichaaneste_vmensaje, 'Aceptar');
		return }

	//foundset.sort('fecha desc')
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"77E22CE5-24DF-4069-B344-4F7B5F195044"}
 */
function onAction_ver_detalle(event) {
	if (estado != 1){
		scopes.globals.fichaaneste_vmensaje = 'Ficha Anestésica abierta - No se permite la consulta.'
		//globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")	
		plugins.dialogs.showInfoDialog('Aviso',scopes.globals.fichaaneste_vmensaje,"Aceptar")
		return}
	// las variables se usan en el form de armado de la grilla para mostrar y pra imprimir
	scopes.globals.fichaaneste_cab_id  = fichaaneste_cab_id
	scopes.globals.fichaaneste_vfecha_inicial = fecha_inicio
	scopes.globals.fichaaneste_pasomin = grilla_pasomin
	scopes.globals.fichaaneste_horas   = grilla_horas
	// para relacion vs_ficha_to_fichaaneste_cab_fechcarga
	scopes.globals.fichaaneste_histcliuni       = histcli_unico
	scopes.globals.fichaaneste_anes_carga_fecha = tbc_anest_carga_fecha
	scopes.globals.fichaaneste_anes_carga_hora  = tbc_anest_carga_hora
	
	fcual_es = foundset.getSelectedIndex()
	elements.esperando.visible =  true
	application.updateUI()

	var $win3 = application.createWindow("consulta",JSWindow.MODAL_DIALOG)
    $win3.title = " Ficha Anestesica - Consulta "
    //$win.setSize(990,700)  
    $win3.show(forms.fichaaneste_tab_consulta)
	//$win3.hide() 
	$win3.destroy()	
	/*
	onAction_buscar(event)
	foundset.setSelectedIndex(fcual_es)
	*/
	elements.esperando.visible =  false
	application.updateUI()

	var t = 1  // solo para debugger, sacar luego
}

/**
 * @properties={typeid:24,uuid:"5E4FD381-AB71-48B3-AEBA-0BF0564D3993"}
 */
function cerrar_window() {
	/*
	var $win = application.getWindow(application.getActiveWindow().getName());
	if($win != null){
		$win.hide()
		$win.destroy*/
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"77F14666-702D-45E0-A4E3-607D0A57D032"}
 */
function onShow(firstShow, event) {
	// control del elemento por perfil	
	var $form = controller.getName()
	globals.controlar_elementos($form)	
	// fin control del elemento por perfil
	
	scopes.globals.fichaaneste_vfecha = application.getServerTimeStamp()
	scopes.globals.fichaaneste_modificacion = 0

	ffecha = null
	/*
	ffecha = application.getServerTimeStamp() 
	scopes.globals.fichaaneste_vfecha = ffecha
	ffecha = new Date(ffecha.getFullYear(), ffecha.getMonth(), ffecha.getDate(), 0,0,0,0)	
	ffecha = ffecha.setDate (ffecha.getDate() - 20);
	*/
	fhiscli_unico = null
	festado = null  // 02-08-2019  mostrar todos en la lista pero solo ver detalle su estado = 1
	// TODO 08-08-2019
	//*//*onAction_buscar(event)
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"CAC03901-6F85-4656-9A11-FC18D3B4E3E5"}
 */
function onRender_estado(event) {

	var $reg = event.getRecord()
	if($reg.estado == 0)
		{event.getRenderable().fgcolor = '#ff0000'}
	else
		{event.getRenderable().fgcolor = '#000080'}
		//{event.getRenderable().fgcolor = '#00ff00'}
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
 * @properties={typeid:24,uuid:"DAEED20D-DC72-4B6F-9F36-FD135ACCD44D"}
 */
function onDataChange_ffecha(oldValue, newValue, event) {
	if (ffecha == null || ffecha == 0)
		return true;
	ffecha = new Date(ffecha.getFullYear(), ffecha.getMonth(), ffecha.getDate(), 0,0,0,0)
	ffechaHasta = new Date(ffecha.getFullYear(), ffecha.getMonth(), ffecha.getDate(), 23,59,59,0)
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6C82E252-1A42-4727-BEA4-AC91FD470ECB"}
 */
function onAction_refresh(event) {
	var indice = foundset.getSelectedIndex()
	var hay = foundset.getSize()
	for (var i = 1 ; i < hay + 1 ; i++)  
	{
		foundset.setSelectedIndex(i)
		foundset.getSelectedIndex()
		databaseManager.refreshRecordFromDatabase(foundset,i)
	}
	if (indice > 0) 
		{foundset.setSelectedIndex(indice)}
	else
		{foundset.setSelectedIndex(1)}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"11C028B1-B6F7-4480-AA92-EC1772341E21"}
 */
function onAction_modificar(event) {

	// llenar las variables necesarias 
	// las 3 sig. se usan en la relacion para saber si existe el reg. correspondiente
	// al entrar en el form fichaaneste_carga,  en el onShow se usan en la 
	// relacion vs_ficha_to_fichaaneste_cab_fechcarga
	scopes.globals.fichaaneste_histcliuni = histcli_unico
	scopes.globals.fichaaneste_anes_carga_fecha = tbc_anest_carga_fecha
	scopes.globals.fichaaneste_anes_carga_hora  = tbc_anest_carga_hora
	
	// Este boton se hace visible segun el perfil de usuario que inresa => si
	// pudo llegar aqui es porque puede modificar
	scopes.globals.fichaaneste_modificacion = 1
	fcual_es = foundset.getSelectedIndex()
	var $win = application.createWindow("carga",JSWindow.MODAL_DIALOG)
    $win.title = " Ficha Anestesica - Modificación "
    //$win.setSize(990,700)  
    $win.show(forms.fichaaneste_carga)
	//$win.destroy()	
	
	scopes.globals.fichaaneste_modificacion = 0  // se usa en form fichaaneste_carga 
}

