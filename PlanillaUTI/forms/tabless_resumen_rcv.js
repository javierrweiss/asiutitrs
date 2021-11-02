/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7762F7D-6EC7-40A0-9B5E-4B433D2D1142"}
 */
function onAction_graba(event) {
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4403EC78-0597-4CDE-94E3-A54D557EC876"}
 */
function onShow_tabless_principal(firstShow, event) {
	//globals.vFechayHora+="\n\r"+" Nuevo"
	globals.vTipoArritmias='arritmia'
	globals.vTipo='hemorragia'	
	globals.vTipoOtrosIngresos='otrosing'
	globals.vTipoOtrosEgresos='otrosegr'
	globals.vFecha=null
	elements.btn_imprimir.visible=false
	globals.Actualizo_hojas_diarias()
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0B619C98-5FC7-4C24-B7F4-B1EE09825A82"}
 */
function onLoad(event) {
	globals.vFechayHora+='Nuevo'
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F2D1B263-7278-48B5-89F2-286033CE9215"}
 * @AllowToRunInFind
 */
function onAction_Fecha(event) {
	/*
	if(vhiscli_to_hojauti_resumen.getSize()>0){
		var hc = globals.vHiscli
		var fec = globals.vFecha
		
		var done = plugins.rawSQL.executeSQL("enfermeria", "hojauti_resumen", "delete from hojauti_resumen where hiscli = ? ", [hc])
		if (done) {
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache("enfermeria", "hojauti_resumen")
		} else {
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
		}
	}
	var hora1=0;
	if(resumen_to_hojauti.getSize()>0){
		for(var i=0;i<=resumen_to_hojauti.getSize();i++){
			resumen_to_hojauti.setSelectedIndex(i)
			if(resumen_to_hojauti.hora<1000){
				hora1=resumen_to_hojauti.hora.toString().substr(0,1)
			}else{
				hora1=resumen_to_hojauti.hora.toString().substr(0,2)
			}
			switch (resumen_to_hojauti.bal_ing_hidrata_tipo) {
				case 1:globals.tabla1[hora1]='V.Oral   ';break;
				case 2:globals.tabla1[hora1]='V.Parent.';break;
				case 0:globals.tabla1[hora1]='Ninguna  ';break;
			}
			globals.tabla1[24]='Hidratacion Tipo  '
			globals.tabla2[hora1]=resumen_to_hojauti.bal_ing_hidrata_cant
			globals.tabla2[24]='Hidratacion Cant. '
			globals.tabla3[hora1]=resumen_to_hojauti.bal_ing_dilucion
			globals.tabla3[24]='Dilución          '
			switch (resumen_to_hojauti.bal_ing_expansion_tipo) {
			case 1:globals.tabla4[hora1]='Sol.Fisio';break;
			case 2:globals.tabla4[hora1]='Ringer L.';break;
			case 3:globals.tabla4[hora1]='Voluven  ';break;
			case 4:globals.tabla4[hora1]='Haemaccel';break;
			case 5:globals.tabla4[hora1]='Albumina ';break;
			case 0:globals.tabla4[hora1]='Ninguna  ';break;
		    }	
			globals.tabla4[24]='Expansión Tipo    '
			globals.tabla5[hora1]=resumen_to_hojauti.bal_ing_expansion_cant
			globals.tabla5[24]='Expansión Cant.   '
			switch (resumen_to_hojauti.bal_ing_sangre_tipo) {
			case 1:globals.tabla6[hora1]='Glob.Rojo';break;
			case 2:globals.tabla6[hora1]='Plasma   ';break;
			case 3:globals.tabla6[hora1]='Plaquetas';break;
			case 0:globals.tabla6[hora1]='Ninguno  ';break;
		    }		
			globals.tabla6[24]='Sangre Tipo       '
			globals.tabla7[hora1]=resumen_to_hojauti.bal_ing_sangre_cant
			globals.tabla7[24]='Sangre Cant.      '
			switch (resumen_to_hojauti.bal_ing_alimen_tipo) {
			case 1:globals.tabla8[hora1]='Enteral   ';break;
			case 2:globals.tabla8[hora1]='Parenteral';break;
			case 0:globals.tabla8[hora1]='Ninguno  ';break;
		    }			
			globals.tabla8[24]='Alimentación Tipo '
			globals.tabla9[hora1]=resumen_to_hojauti.bal_ing_alimen_cant
			globals.tabla9[24]='Alimentación Cant.'
			globals.tabla10[hora1]=0	
			globals.tabla10[hora1]= globals.tabla2[hora1]+globals.tabla3[hora1]+globals.tabla5[hora1]+globals.tabla7[hora1]+globals.tabla9[hora1]	
			globals.tabla10[24]='Total Horario     '
			globals.tabla11[6]=utils.stringToNumber(globals.tabla11[6])+utils.stringToNumber(globals.tabla10[hora])
			globals.tabla11[24]='Total en 24 Hs.  '
						
		}
		var tabla='';
		var tabla2='';
		for(var j=1;j<=11;j++){
			vs_to_hojauti_resumen.newRecord()
			vs_to_hojauti_resumen.hiscli=globals.vHiscli
			vs_to_hojauti_resumen.fecha=globals.vFecha
			vs_to_hojauti_resumen.item=1
			vs_to_hojauti_resumen.subitems=j
			if (j>9){
				tabla = 'tabla'+ j.toString().substr(0,2)
			}else{
		    	tabla = 'tabla'+ j.toString().substr(0,1)
			}
			vs_to_hojauti_resumen.concepto=globals[tabla][24]
			for(var k=0;k<23;k++){
				if (k>9){
					tabla2='hora'+k.toString().substr(0,2)
				}else{
				tabla2='hora'+k.toString().substr(0,1)
				}
				vs_to_hojauti_resumen[tabla2]=globals[tabla][k]
			}
		}
		databaseManager.saveData(vs_to_hojauti_resumen)
	}
	*/
	
	globals.vFecha=globals.vFecha.setHours(0)
	globals.vFecha=globals.vFecha.setMinutes(0)
	globals.vFecha=globals.vFecha.setSeconds(0)
	globals.vFecha=globals.vFecha.setMilliseconds(0)
	
	elements.btn_imprimir.visible=true
	
	forms.tabless_resumen_rcv.elements.tabs_154.tabIndex=1
	forms.frm_resumen_balance_rcv.onShow_resumen_balance_rcv(true,event)
	forms.frm_resumen_balance_rcv.controller.focusFirstField()
	forms.frm_resumen_balance_rcv.elements.btn_6.requestFocus()
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D07B6C2D-E353-4282-BA5A-74749074517C"}
 */
function onUnload_tabless_resumen(event) {
	if(vhiscli_to_hojauti_resumen.getSize()>0){
		var hc = globals.vHiscli
		var fec = globals.vFecha
		
		var done = plugins.rawSQL.executeSQL("enfermeria", "hojauti_resumen", "delete from hojauti_resumen where hiscli = ? ", [hc])
		if (done) {
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache("enfermeria", "hojauti_resumen")
		} else {
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DF3EBB68-1714-473E-A4B4-617E8E0E95B2"}
 * @AllowToRunInFind
 */
function onAction_btn_imprimir(event) {
	if(vhiscli_to_hojauti_resumen.getSize()>0){
		var hc = globals.vHiscli
		var fec = globals.vFecha
		
		var done = plugins.rawSQL.executeSQL("enfermeria", "hojauti_resumen", "delete from hojauti_resumen where hiscli = ? ", [hc])
		if (done) {
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache("enfermeria", "hojauti_resumen")
		} else {
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
		}
	}
	switch (elements.tabs_154.tabIndex){
		case 1:forms.frm_resumen_balance_rcv.resumen_balance_rcv();globals.vTituloResumen='RESUMEN  BALANCE';break;
		case 2:forms.frm_resumen_plan_cuidados_rcv.resumen_Plan_Cuidados_rcv();globals.vTituloResumen='RESUMEN   PLAN   DE   CUIDADOS';break;
		case 3:forms.frm_resumen_parametros_rcv.resumen_Parametros_rcv();globals.vTituloResumen='RESUMEN   PARAMETROS';break;
		case 4:forms.frm_resumen_valoracion_rcv.resumen_Valoracion_rcv();globals.vTituloResumen='RESUMEN   VALORACION';break;
	}
	
		var frm = 'frm_resumen_prn_rcv_'+ globals.vRangoHorario
		forms[frm].foundset.find();
			forms[frm].foundset.hiscli=globals.vHiscli;
			forms[frm].foundset.fecha=globals.vFecha;
			forms[frm].foundset.search();
			forms[frm].controller.setPageFormat(210,297,10,0,5,0,0,0);
			//forms.frm_resumen_prn_copy.controller.showPrintPreview()
			forms[frm].controller.print();
			frm = 'frm_resumen_prn_rcv_'+ (globals.vRangoHorario + 1)
			forms[frm].foundset.find();
				forms[frm].foundset.hiscli=globals.vHiscli;
				forms[frm].foundset.fecha=globals.vFecha;
				forms[frm].foundset.search();
				forms[frm].controller.setPageFormat(210,297,10,0,5,0,0,0);
				//forms.frm_resumen_prn_copy.controller.showPrintPreview()
				forms[frm].controller.print();
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B067DD2-A2A5-4897-8509-879896BC2AEB"}
 */
function onAction_btn_volver(event) {
	//history.back()
    forms.frm_elige_menu.controller.show()	
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
 * @properties={typeid:24,uuid:"DBDE3ED1-03EA-4902-AE79-D641FFFECC8A"}
 */
function onDataChange_fecha(oldValue, newValue, event) {
	globals.vFecha=globals.vFecha.setHours(0)
	globals.vFecha=globals.vFecha.setMinutes(0)
	globals.vFecha=globals.vFecha.setSeconds(0)
	globals.vFecha=globals.vFecha.setMilliseconds(0)
	elements.btn_imprimir.visible=true
	globals.items=1
	forms.tabless_resumen.elements.tabs_154.tabIndex=1
	forms.frm_resumen_balance.controller.focusFirstField()
	return true
}
