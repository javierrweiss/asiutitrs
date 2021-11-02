/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"AC9CD8C3-6CD3-47FC-9AAE-3DC948C54331"}
 */
function onDataChange_yodados(oldValue, newValue, event) {
	if (histpacyodo == '0')
	{
		yodoalergico    = "0"
		yodoaque        =  0
		yodoaque4       = " "
		yodocardio4     = "0"
		yodocualcardio  =  0
		yodoenfcardio    = "0"
		yodoestcontraste = "0"
		yodoinsrenal     = "0"
		elements.cual_cardio.enabled = false
		elements.alergico.enabled    = false
		elements.anteriores.enabled  = false
	 	elements.insufic.enabled     = false
	 	elements.enf_cardio.enabled  = false
		elements.yodo_a_que.enabled  = false
		elements.cardio_4.enabled    = false}
	else
	{
		/* if (histpacestudi == null || histpacestudi == "") 
		{scopes.globals.AtCons_vmensaje = 'Debe ingresar detalle del estudio';
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
		elements.histpacestudi.requestFocus()
		return
		}   */
		//elements.cual_cardio.enabled = true
		elements.alergico.enabled    = true
		elements.anteriores.enabled  = true
		elements.insufic.enabled     = true
		elements.enf_cardio.enabled  = true
		//elements.yodados.enabled     = true
		//elements.yodo_a_que.enabled  = true
		//elements.cardio_4.enabled    = true
		
	}
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
 * @properties={typeid:24,uuid:"0557DFDA-A4B2-4D2B-A56E-E3A2CF0A2770"}
 */
function onDataChange_alergia(oldValue, newValue, event) {
	if (yodoalergico == '1')
	{scopes.globals.AtCons_vmensaje = 'Sr.Profesional: Pedir Interconsulta al Alergista previa al Estudio';
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	 elements.yodo_a_que.enabled = true
	 elements.yodo_a_que.requestFocus()}
	else
	{elements.yodo_a_que.enabled= false	
	 yodoaque = 0
	 yodoaque4 = ' ' }
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
 * @properties={typeid:24,uuid:"DFA0B643-35C8-4849-B26F-EED7EDFC0CE5"}
 */
function onDataChange_cardio(oldValue, newValue, event) {
	if (yodoenfcardio == '1')
		{elements.cual_cardio.enabled = true
		 elements.cual_cardio.requestFocus()}
	else
		{elements.cual_cardio.enabled  = false
		 yodocualcardio = 0
		 yodocardio4 = ' '}

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
 * @properties={typeid:24,uuid:"32E7AF08-FB25-4533-AB0C-5623EDDC7245"}
 */
function onDataChange_cual_cardio(oldValue, newValue, event) {
	if (yodocualcardio == 4 )
		{elements.cardio_4.enabled = true
		 elements.cardio_4.requestFocus()}
	else{elements.cardio_4.enabled = false
		  yodocardio4 = ' '}
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
 * @properties={typeid:24,uuid:"7B8BA932-8E25-4EC9-8866-41DFBB712E74"}
 */
function onDataChange_a_que(oldValue, newValue, event) {
	if (yodoaque == 4 )
		{elements.yodo_a_que4.enabled = true
		 elements.yodo_a_que4.requestFocus()}
	else{elements.yodo_a_que4.enabled = false
 		yodoaque4 = ' '}
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CE75D769-0A72-48FE-B2DA-01D6B47133E7"}
 */
function onShow(firstShow, event)
{
	//if (yodoestcontraste == '1')
	if (histpacyodo == '1')
	{	elements.alergico.enabled    = true
		elements.anteriores.enabled  = true
		elements.insufic.enabled     = true
		elements.enf_cardio.enabled  = true
		if (yodoalergico == 1 && (yodoaque != 0 && yodoaque != null))
			{elements.yodo_a_que4.enabled = true}
		if (yodocualcardio != 0 && yodoenfcardio == '1') 
			{elements.cardio_4.enabled = true}
	}
	else
	{	elements.alergico.enabled    = false
		elements.anteriores.enabled  = false
		elements.insufic.enabled     = false
		elements.enf_cardio.enabled  = false
		yodoalergico  = '0'
		yodoestcontraste = '0'
 		yodoinsrenal  = '0'
		yodoenfcardio = '0'}
	elements.histpacestudi.requestFocus()
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B7E8D4EF-6B85-473D-8C7D-845C721AB58C"}
 */
function onFocusLost_a_que(event) {
	if (yodoaque == 0 && yodoalergico == '1')
	{scopes.globals.AtCons_vmensaje = 'Debe informar a qué es alergico el paciente';
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	forms.AtCons_carga_estudios.elements.yodo_a_que.requestFocus()}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"35DFBC89-6C61-4673-81FE-B0F82B191EB9"}
 */
function onFocusLost_cual_cardio(event) {
	// TODO
	if  (yodocualcardio == 0 && yodoenfcardio == '1')
	{scopes.globals.AtCons_vmensaje = 'Debe informar enfermedad cardiovascular el paciente';
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	forms.AtCons_carga_estudios.elements.cual_cardio.requestFocus()}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"00BC522F-4AB0-4191-99DB-DA019A3F8C81"}
 */
function onFocusLost_yodo_a_que(event) {
	if ((yodoaque != 0 && yodoaque != null) && yodoalergico == '1' && 
			(yodoaque4 == '' || yodoaque4 == ' ' || yodoaque4 == null)) 
		{scopes.globals.AtCons_vmensaje = 'Debe informar "Otros" alergias ';
		globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
		//elements.yodo_a_que4.requestFocus()
		return false}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F9FC8605-1F44-433D-920E-065ED0F2837C"}
 */
function onFocusLost_yodocardio4(event) {
	if (yodocualcardio == 4 && yodoenfcardio == '1' && 
	(yodocardio4 == '' || yodocardio4 == ' ' || yodocardio4 == null)) 
	{scopes.globals.AtCons_vmensaje = 'Debe informar "Otros" Enf. Cardiovascular ';
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	//elements.cardio_4.requestFocus()
	return false}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E3CA8060-BB72-41A6-9D2A-CEAF4A5E4636"}
 */
function onHide(event) {
	if  (yodocualcardio == 0 && yodoenfcardio == '1')
	{scopes.globals.AtCons_vmensaje = 'Debe informar enfermedad cardiovascular el paciente';
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	forms.AtCons_carga.elements.tabs.tabIndex = 'estudios'
	forms.AtCons_carga_estudios.elements.cual_cardio.requestFocus()
	return false}
	
	if (yodocualcardio == 4 && yodoenfcardio == '1' && 
	(yodocardio4 == '' || yodocardio4 == ' ' || yodocardio4 == null)) 
	{scopes.globals.AtCons_vmensaje = 'Debe informar "Otros" Enf. Cardiovascular ';
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	forms.AtCons_carga_estudios.elements.cardio_4.enabled = true
	forms.AtCons_carga_estudios.elements.cual_cardio.enabled = true
	forms.AtCons_carga.elements.tabs.tabIndex = 'estudios'
	forms.AtCons_carga_estudios.elements.cardio_4.requestFocus()
	return false}
	
	if (yodoaque == 0 && yodoalergico == '1')
	{scopes.globals.AtCons_vmensaje = 'Debe informar a qué es alergico el paciente';
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	forms.AtCons_carga.elements.tabs.tabIndex = 'estudios'
	forms.AtCons_carga_estudios.elements.yodo_a_que.requestFocus()
	return false}
	
	if ((yodoaque == 4 && yodoalergico == '1') && 
	(yodoaque4 == '' || yodoaque4 == ' ' || yodoaque4 == null)) 
	{scopes.globals.AtCons_vmensaje = 'Debe informar "Otros" alergias ';
	globals.DIALOGS.showInfoDialog('Aviso',scopes.globals.AtCons_vmensaje,"Aceptar")
	forms.AtCons_carga_estudios.elements.yodo_a_que4.enabled = true
	forms.AtCons_carga.elements.tabs.tabIndex = 'estudios'
	forms.AtCons_carga_estudios.elements.yodo_a_que4.requestFocus()
	return false}
	
	return true
}
