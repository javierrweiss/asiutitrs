/**
 * @properties={typeid:24,uuid:"B5077226-1825-43DD-A9DF-32C1D58DDA3F"}
 */
function hide_allIcons()
{
	elements.icn_error.visible = false
	elements.icn_forbidden.visible = false
	elements.icn_info.visible = false
	elements.icn_question.visible = false
	elements.icn_warning.visible = false
}

/**
 * @param {Object} arg0 // TODO generated, please specify type and doc
 * @param {Object} arg1 // TODO generated, please specify type and doc
 * @param {Object} arg2 // TODO generated, please specify type and doc
 * @param {Object} arg3 // TODO generated, please specify type and doc
 *
 * @properties={typeid:24,uuid:"B8C11596-ABC1-4AAA-9125-8C55C16D1C70"}
 */
function setup_buttons(arg0, arg1, arg2, arg3)
{
	var btn1 = arg0;
	var btn2 = arg1;
	var btn3 = arg2;
	var btn4 = arg3;

	if(btn1 != undefined)
	{
		elements.btn_1.text = btn1
	}
	else
	{
		elements.btn_1.text = 'OK'
	}

	if(btn2 != undefined)
	{
		elements.btn_2.visible = true
		elements.btn_2.text = btn2
	}
	else
	{
		elements.btn_2.visible = false
	}

	if(btn3 != undefined)
	{
		elements.btn_3.visible = true
		elements.btn_3.text = btn3
	}
	else
	{
		elements.btn_3.visible = false
	}

	if(btn4 != undefined)
	{
		elements.btn_4.visible = true
		elements.btn_4.text = btn4
	}
	else
	{
		elements.btn_4.visible = false
	}
}

/**
 * @properties={typeid:24,uuid:"FE9478D7-7B24-417A-AF4E-C2D2C1D51334"}
 */
function show_iconError()
{
	elements.icn_error.visible = true
}

/**
 * @properties={typeid:24,uuid:"6EB25C5D-9D00-4EC1-BB40-5DE450731C4A"}
 */
function show_iconForbidden()
{
	elements.icn_forbidden.visible = true
}

/**
 * @properties={typeid:24,uuid:"D6BAF21E-5DD8-4C99-ACFD-682B4D3C21FE"}
 */
function show_iconInfo()
{
	elements.icn_info.visible = true
}

/**
 * @properties={typeid:24,uuid:"EEFC5C92-0125-4812-8710-CADCED7E4B74"}
 */
function show_iconQuestion()
{
	elements.icn_question.visible= true
}

/**
 * @properties={typeid:24,uuid:"5CBD2F3E-7048-43F4-A69C-9AC7CD465322"}
 */
function show_iconWarning()
{
	elements.icn_warning.visible = true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F495109-FC0F-46FA-B523-07CD817AF195"}
 */
function close(event) {
	//var frm = globals.core_dlg_formName;
	//var elmt = globals.core_dlg_elementName;

	//setea como global el texto del boton presionado
	globals.core_dlg_buttonPressed = elements[event.getElementName()].text;

	//cierra el formulario de dialogo
	application.getWindow('Dialog').hide();

	//re-establece todo despues del dialogo
	globals.callback_BgElements(globals.callback);
	currentcontroller.enabled = true

	//ejecuta el Metodo y limpia globalmente
	if(globals.core_dlg_methodToExecute) {
		eval(globals.core_dlg_methodToExecute);
		globals.core_dlg_methodToExecute = null;
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"51A193D3-B627-490C-83C2-6CC43D6527B6"}
 */
function onShow_foco(firstShow, event) {
	elements.btn_1.requestFocus()
}
