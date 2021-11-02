/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"32EEED76-16B8-43BA-B2D6-34189A5F35B1"}
 */
function onAction_Add_IngresoCirugia(event) {
	forms.Estudios_tab.elements.tabless_estudios.tabIndex=3
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EAE73D54-2ACF-419A-BBF1-B23ECFF62110"}
 */
function onAction_btn_delete_IngresoCirugia(event) {
	try{
		vs_to_tbc_cirugint_dtl.deleteRecord()
	}catch (msg){
		(plugins.dialogs.showInfoDialog("No borra Detalle de Cirugía",msg.toString(),"ok"))
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"70828B6B-81BC-4FA3-97EE-D5E57213D110"}
 */
function onAction_edit_Cirugia(event) {
	/**
	vhiscli_to_tbc_protesis.setSelectedIndex(1)
	globals.vNroPedidoProtesis=vhiscli_to_tbc_protesis.prote_nroprote
	globals.vfrmActual='frm_certificado_implante_prn'
	forms.frm_certificado_implante_prn.sub_buildReport()
	globals.printRoutine('frm_certificado_implante_prn',null)
	
	globals.vfrmActual='frm_anatomia_patologica_prn'
	forms.frm_anatomia_patologica_prn.sub_buildReport()
	globals.vfrmActual='frm_anatomia_patologica_prn_2'
	forms.frm_anatomia_patologica_prn_2.sub_buildReport_2()
	globals.printRoutine('frm_anatomia_patologica_prn_2',null)
	*/
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"BB101BD1-1EC2-4338-8078-42D13CB2DA54"}
 */
function onDataChange_servicio(oldValue, newValue, event) {
	if(newValue!=null&&newValue!=0){
		elements.tabless_ingreso_estudios.visible=true
		elements.btn_new.visible=true
		if (vs_to_aux_estudios.getSize()>0){
			elements.btn_grabapedido.visible=true
			elements.btn_cancelapedido.visible=true
		}
		elements.box_servicio.enabled=false
		if(vhiscli_to_tbc_imapedi.getSize()>0){
			elements.tabless_ingreso_estudios.tabIndex=1
		}else{
			elements.tabless_ingreso_estudios.tabIndex=2
		}
		return true
	}else{
		return false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3EFD2770-442C-4B43-8912-C40BA924F4E2"}
 */
function onAction_btncancelapedido(event) {
	vs_to_aux_estudios.deleteAllRecords()
	globals.vServicio=0
	elements.box_servicio.enabled=true
	forms.Estudios_tab.elements.tabless_estudios.tabIndex=1
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9F431CC1-2200-411E-8C5D-92A31CD37CAE"}
 */
function onShow_Estudios_ingresos(firstShow, event) {
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9AC89D28-64D2-4239-AFB4-110788CEB1EA"}
 * @AllowToRunInFind
 */
function onAction_grabapedido(event) {
	if(globals.vServicio!=5&&globals.vServicio!=6){
		elements.box_servicio.enabled=true
		var fecha_actual = application.getServerTimeStamp()
		var hora_hoy=utils.stringToNumber(fecha_actual.getHours().toString()+fecha_actual.getMinutes().toPrecision(2).toString()+fecha_actual.getSeconds().toPrecision(2).toString())
		/**
		var fs7 = databaseManager.getFoundSet("asistencial","tbc_param2")
		fs7.loadAllRecords()
		fs7.setSelectedIndex(1)
		fs7.find()
		fs7['keyparam2']=1
		fs7.search()
	
		fs7.setSelectedIndex(1)
	
		switch (globals.vServicio){
			case 1:fs7['prm27']=fs7['prm27']+1;globals.vNroPedido=fs7['prm27'];break;
			case 2:fs7['prm28']=fs7['prm28']+1;globals.vNroPedido=fs7['prm28'];break;
			case 3:fs7['prm29']=fs7['prm29']+1;globals.vNroPedido=fs7['prm29'];break;
			case 4:fs7['prm210']=fs7['prm210']+1;globals.vNroPedido=fs7['prm210'];break;
			case 5:fs7['prm211']=fs7['prm211']+1;globals.vNroPedido=fs7['prm211'];break;
			case 6:fs7['prm212']=fs7['prm212']+1;globals.vNroPedido=fs7['prm212'];break;
			case 7:fs7['prm214']=fs7['prm214']+1;globals.vNroPedido=fs7['prm214'];break;
			case 8:fs7['prm215']=fs7['prm215']+1;globals.vNroPedido=fs7['prm215'];break;
			case 9:fs7['prm216']=fs7['prm216']+1;globals.vNroPedido=fs7['prm216'];break;
			case 10:fs7['prm218']=fs7['prm218']+1;globals.vNroPedido=fs7['prm218'];break;
			case 11:fs7['prm219']=fs7['prm219']+1;globals.vNroPedido=fs7['prm219'];break;
			case 12:fs7['prm220']=fs7['prm220']+1;globals.vNroPedido=fs7['prm220'];break;
			case 13:fs7['prm221']=fs7['prm221']+1;globals.vNroPedido=fs7['prm221'];break;
			case 14:fs7['prm222']=fs7['prm222']+1;globals.vNroPedido=fs7['prm222'];break;
			case 15:fs7['prm223']=fs7['prm223']+1;globals.vNroPedido=fs7['prm223'];break;
			case 16:fs7['prm224']=fs7['prm224']+1;globals.vNroPedido=fs7['prm224'];break;
			case 17:fs7['prm253']=fs7['prm253']+1;globals.vNroPedido=fs7['prm253'];break;
			case 18:fs7['prm255']=fs7['prm255']+1;globals.vNroPedido=fs7['prm255'];break;
			case 19:fs7['prm256']=fs7['prm256']+1;globals.vNroPedido=fs7['prm256'];break;
			case 20:fs7['prm257']=fs7['prm257']+1;globals.vNroPedido=fs7['prm257'];break;
			case 21:fs7['prm261']=fs7['prm261']+1;globals.vNroPedido=fs7['prm261'];break;
		}
		globals.vNroPedidoUnico=0
		if (vservicios_to_tbc_servicios.servmodalidadvisual!=''){
			if(vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_obras.obr_espami!=2||(vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_obras.obr_espami==2&&globals.vServicio!=6)){
				fs7['prm254']=fs7['prm254']+1
				globals.vNroPedidoUnico=fs7['prm254']
			}
		}
		databaseManager.saveData(fs7.getRecord(1))
		*/
		var nombre_campo = '';
		var numero_campo = 0;
		switch (globals.vServicio){
		case 1:nombre_campo='prm2_7';numero_campo=7;break;
		case 2:nombre_campo='prm2_8';numero_campo=8;break;
		case 3:nombre_campo='prm2_9';numero_campo=9;break;
		case 4:nombre_campo='prm2_10';numero_campo=10;break;
		case 5:nombre_campo='prm2_11';numero_campo=11;break;
		case 6:nombre_campo='prm2_12';numero_campo=12;break;
		case 7:nombre_campo='prm2_14';numero_campo=14;break;
		case 8:nombre_campo='prm2_15';numero_campo=15;break;
		case 9:nombre_campo='prm2_16';numero_campo=16;break;
		case 10:nombre_campo='prm2_18';numero_campo=18;break;
		case 11:nombre_campo='prm2_19';numero_campo=19;break;
		case 12:nombre_campo='prm2_20';numero_campo=20;break;
		case 13:nombre_campo='prm2_21';numero_campo=21;break;
		case 14:nombre_campo='prm2_22';numero_campo=22;break;
		case 15:nombre_campo='prm2_23';numero_campo=23;break;
		case 16:nombre_campo='prm2_24';numero_campo=24;break;
		case 17:nombre_campo='prm2_53';numero_campo=53;break;
		case 18:nombre_campo='prm2_55';numero_campo=55;break;
		case 19:nombre_campo='prm2_56';numero_campo=56;break;
		case 20:nombre_campo='prm2_57';numero_campo=57;break;
		case 21:nombre_campo='prm2_61';numero_campo=61;break;
	}
		var vQuery = " SELECT * FROM param2 WHERE key_param2 = 1 FOR UPDATE";
		var vDataset = databaseManager.getDataSetByQuery("parametros", vQuery, null, 1);
		
		//plugins.dialogs.showInfoDialog("contador",vDataset.getValue(1,1));
		
		
		globals.vNroPedido=vDataset.getValue(1,numero_campo)+1;
		
		var done = plugins.rawSQL.executeSQL("parametros", "param2", "update param2 set " + nombre_campo + " = " + nombre_campo +" + 1 where key_param2 = 1")
		if (done) {
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache("parametros", "param2")
		} else {
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
		}
		
		globals.vNroPedidoUnico=0
		if (vservicios_to_tbc_servicios.servmodalidadvisual!=''){
			if(vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_obras.obr_espami!=2||(vhiscli_unico_to_tbc_admision_scroll.tbc_admision_scroll_to_tbc_obras.obr_espami==2&&globals.vServicio!=6)){
				nombre_campo='prm2_54';
				numero_campo=54;
				globals.vNroPedidoUnico=vDataset.getValue(1,numero_campo)+1;
				var done1 = plugins.rawSQL.executeSQL("parametros", "param2", "update param2 set " + nombre_campo + " = " + nombre_campo +" + 1 where key_param2 = 1")
				if (done1) {
					//flush is required when changes are made in db
					plugins.rawSQL.flushAllClientsCache("parametros", "param2")
				} else {
					var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
					plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
				}
			}
		}
		
		
		vs_to_tbc_imapedi.newRecord()
		globals.InicializarDatosDeRelacion(vs_to_tbc_imapedi,"asistencial","tbc_imapedi_new")
		vs_to_tbc_imapedi.ipedservicio=globals.vServicio
		vs_to_tbc_imapedi.ipedservicio1=globals.vServicio
		vs_to_tbc_imapedi.ipedservicio2=globals.vServicio
		vs_to_tbc_imapedi.ipedservicio3=globals.vServicio
		vs_to_tbc_imapedi.ipedservicio4=globals.vServicio
		vs_to_tbc_imapedi.ipedpedido=globals.vNroPedido
		vs_to_tbc_imapedi.ipedhistclinica=globals.vHiscli
		vs_to_tbc_imapedi.ipedfechapedido=globals.vFechaActual
		vs_to_tbc_imapedi.ipedfechapedido4=globals.vFechaActual
		vs_to_tbc_imapedi.ipedhorapedido=hora_hoy
		vs_to_tbc_imapedi.ipedhorapedido4=hora_hoy
		vs_to_tbc_imapedi.ipedsector=vhiscli_unico_to_tbc_admision_scroll.adm_utiliza
		vs_to_tbc_imapedi.ipedadmis=0
		vs_to_tbc_imapedi.ipedadmis4=0
		vs_to_tbc_imapedi.ipedobra=vhiscli_unico_to_tbc_admision_scroll.adm_obrsoc
		vs_to_tbc_imapedi.ipedplan=vhiscli_unico_to_tbc_admision_scroll.adm_planobr
		vs_to_tbc_imapedi.ipedhabi=vhiscli_unico_to_tbc_admision_scroll.adm_habita
		vs_to_tbc_imapedi.ipedcama=vhiscli_unico_to_tbc_admision_scroll.adm_cama
		vs_to_tbc_imapedi.ipednropedunico=globals.vNroPedidoUnico
		vs_to_tbc_imapedi.ipedmedsolic=globals.vLegaMedicoSolicitante
		vs_to_tbc_imapedi.ipediesolic=globals.vTipoMedicoSolicitante
		
		databaseManager.saveData(vs_to_tbc_imapedi.getRecord(1))
	
		for(var i=1;i<=vs_to_aux_estudios.getSize();i++){
			vs_to_aux_estudios.setSelectedIndex(i)
			vs_to_tbc_imapedet.newRecord()
			globals.InicializarDatosDeRelacion(vs_to_tbc_imapedet,"asistencial","tbc_imapedet_new")
			vs_to_tbc_imapedet.idetservicio=globals.vServicio
			vs_to_tbc_imapedet.idetservicio3=globals.vServicio
			vs_to_tbc_imapedet.idetservicio4=globals.vServicio
			vs_to_tbc_imapedet.idetservicio5=globals.vServicio
			vs_to_tbc_imapedet.idetpedido=globals.vNroPedido
			vs_to_tbc_imapedet.idetpedido3=globals.vNroPedido
			vs_to_tbc_imapedet.idetpedido4=globals.vNroPedido
			vs_to_tbc_imapedet.idettiponom=1
			vs_to_tbc_imapedet.idettiponom1=1
			vs_to_tbc_imapedet.idetcodinom=vs_to_aux_estudios.aux_est_codigo
			vs_to_tbc_imapedet.idetcodinom1=vs_to_aux_estudios.aux_est_codigo
			vs_to_tbc_imapedet.idethistclinica=globals.vHiscli
			databaseManager.saveData(vs_to_tbc_imapedet.getRecord(1))
		}
		vs_to_aux_estudios.deleteAllRecords()
		forms.Estudios_ingreso.elements.btn_grabapedido.visible=false
		forms.Estudios_ingreso.elements.btn_grabapedido.visible=false
		plugins.dialogs.showInfoDialog("Nro. Pedido","Número de Pedido asignado: "+globals.vNroPedido)
		forms.Estudios_tab.elements.tabless_estudios.tabIndex=1
	}
}
