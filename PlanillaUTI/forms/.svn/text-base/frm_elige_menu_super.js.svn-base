/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8BF40CAD-85B9-4FD2-AF78-B4BDA9679F32"}
 */
function onAction_frm_elige_menu(event) {
	globals.vFechaActualEnfermeria=application.getServerTimeStamp()
	forms.tabless_principal.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A805A79C-AE3A-4B68-B26D-9044A50AA86A"}
 */
function onAction_btn_resumen(event) {
	forms.tabless_resumen.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C1871E61-2C5D-433F-BD85-F958561EA603"}
 */
function onAction_volver(event) {
	//history.back()
	forms.tab_scr_tbc_admsion.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DA3D2C48-F3AE-4961-BE66-5412E1C991B3"}
 */
function onShow(firstShow, event) {
	globals.Hiscli_edit = globals.vHiscli.toString();
	switch (globals.Hiscli_edit.length){
		case 2:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,1)+'/'+globals.Hiscli_edit.substr(1,1);break;
		case 3:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,2)+'/'+globals.Hiscli_edit.substr(2,1);break;
		case 4:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,3)+'/'+globals.Hiscli_edit.substr(3,1);break;
		case 5:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,4)+'/'+globals.Hiscli_edit.substr(4,1);break;
		case 6:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,5)+'/'+globals.Hiscli_edit.substr(5,1);break;
		case 7:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,6)+'/'+globals.Hiscli_edit.substr(6,1);break;
		case 8:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,7)+'/'+globals.Hiscli_edit.substr(7,1);break;
	}	
	elements.btn_ingresa_datos.requestFocus()
	if(vhiscli_to_hojauti.getSize()>0){
		elements.btn_muestra_resumen.visible=true
		//elements.btn_ingresa_hoja_rcv.visible=true
		elements.btn_muestra_resumen_rcv.visible=true
	}else{
		elements.btn_muestra_resumen.visible=false
		//elements.btn_ingresa_hoja_rcv.visible=false
		elements.btn_muestra_resumen_rcv.visible=false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C3BD494A-C3C4-40E8-99B3-301769711D4C"}
 */
function onAction_btn_ingresa_rcv(event) {
	globals.vFechaActualEnfermeria=application.getServerTimeStamp()
	forms.tabless_principal_rcv_new.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"78D696CA-7A3F-44B1-BB89-BC953A2F4532"}
 */
function onAction_btn_resumen_rcv(event) {
	forms.tabless_resumen_rcv.controller.show()
}
