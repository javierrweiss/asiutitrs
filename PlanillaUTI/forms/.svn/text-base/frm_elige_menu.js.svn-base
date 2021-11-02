
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E9D8846A-CCD9-4E77-B4E8-CFE1F7F02190"}
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
 * @properties={typeid:24,uuid:"1CD26DB1-6668-458B-BB59-05BE42E2A539"}
 */
function onAction_btn_resumen(event) {
	forms.tabless_resumen.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"46D941F4-C75F-4041-8DD0-B03644817B31"}
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
 * @properties={typeid:24,uuid:"2987393F-2E6D-4516-9095-7E66633BDCC4"}
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
	
	var next_field=''
	globals.vNameForms=controller.getName()
	globals.name_modulo='RCV'
	databaseManager.refreshRecordFromDatabase(vs_to_permisos_items,-1)
    vs_to_permisos_items.loadAllRecords()
	if(vs_to_permisos_items.getSize()>0){
		if(vs_to_permisos_items.permi_estado){
			 if(vs_to_permisos_items.permiso_alta){
				 globals.Rcv=true
			 }else{
				 globals.Rcv=false
			 }
		}else{
			globals.Rcv=false
		}
	}else{
		globals.Rcv=false
	}
	
	if(globals.Rcv){
		elements.btn_ingresa_hoja_rcv.visible=true
		next_field="btn_ingresa_hoja_rcv"
	}else{
		elements.btn_ingresa_hoja_rcv.visible=false
		next_field="btn_ingresa_datos"
	}
	
	if(vhiscli_to_hojauti.getSize()>0){
		elements.btn_muestra_resumen.visible=true
		//elements.btn_ingresa_hoja_rcv.visible=true
		if(globals.Rcv){
			elements.btn_muestra_resumen_rcv.visible=true
		}else{
			elements.btn_muestra_resumen_rcv.visible=false
		}
	}else{
		elements.btn_muestra_resumen.visible=false
		//elements.btn_ingresa_hoja_rcv.visible=false
		elements.btn_muestra_resumen_rcv.visible=false
	}
	
	var largo=0
	var largo2=0
	globals.ip_excepcion=application.getIPAddress()
	databaseManager.refreshRecordFromDatabase(ip_excepcion_to_permisos_ip,-1)
    ip_excepcion_to_permisos_ip.loadAllRecords()
	if(ip_excepcion_to_permisos_ip.getSize()>0){
		for(var i=1;i<=ip_excepcion_to_permisos_ip.getSize();i++){
			ip_excepcion_to_permisos_ip.setSelectedIndex(i)
			largo=ip_excepcion_to_permisos_ip.permiso_elemento.indexOf(" ")
			largo2=ip_excepcion_to_permisos_ip.permiso_propiedad.indexOf(" ")
			elements[ip_excepcion_to_permisos_ip.permiso_elemento.substr(0,largo)][ip_excepcion_to_permisos_ip.permiso_propiedad.substr(0,largo2)]=ip_excepcion_to_permisos_ip.permiso_valor
		}
	}
	
	
	
	elements[next_field].requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"925433B6-A68F-4E3E-98ED-D3884819BE8A"}
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
 * @properties={typeid:24,uuid:"BD795581-94D6-4C67-A04C-B5FED676E361"}
 */
function onAction_btn_resumen_rcv(event) {
	forms.tabless_resumen_rcv.controller.show()
}
