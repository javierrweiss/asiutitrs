/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"039864F5-8CB8-4B1A-9A12-0F0220E66EB7"}
 */
function onAction_graba(event) {
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"994F3DD9-B893-4157-9AE6-EE723442CDD7"}
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
	//forms.tabless_resumen.elements.tabs_154.tabIndex=1
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B80D6E66-5C47-450E-8556-BC219AEBDBB0"}
 */
function onLoad(event) {
	globals.vFechayHora+='Nuevo'
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"93F9B6A4-C65C-4A5B-869F-9DD2DE2FD4DF"}
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
	forms.tabless_resumen.elements.tabs_154.tabIndex=1
	forms.frm_resumen_balance_new.onShow_resumen_balance(true,event)
	forms.frm_resumen_balance_new.controller.focusFirstField()
	forms.frm_resumen_balance_new.elements.btn_6.requestFocus()
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AAB3CD99-50E1-40CC-8F36-D8FA2A1DD072"}
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
 * @properties={typeid:24,uuid:"6055C0BC-73CB-45BF-BFE8-F9DA3329A4A6"}
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
		case 1:forms.frm_resumen_balance_new.resumen_balance();globals.vTituloResumen='RESUMEN  BALANCE';break;
		case 2:forms.frm_resumen_plan_cuidados.resumen_Plan_Cuidados();globals.vTituloResumen='RESUMEN   PLAN   DE   CUIDADOS';break;
		case 3:forms.frm_resumen_parametros.resumen_Parametros();globals.vTituloResumen='RESUMEN   PARAMETROS';break;
		case 4:forms.frm_resumen_valoracion.resumen_Valoracion();globals.vTituloResumen='RESUMEN   VALORACION';break;
		case 5:forms.frm_resumen_valoracion.resumen_Valoracion();globals.vTituloResumen='RESUMEN   CULTIVOS';break;
		case 6:forms.frm_tmp_prn_cateter.sub_buildReport();globals.vTituloResumen='RESUMEN   CATETERES';break;
		//case 7:forms.frm_resumen_prn_obser.sub_buildReport();globals.vTituloResumen='RESUMEN   OBSERVACIONES';break;
	}
	if (elements.tabs_154.tabIndex!=5){
		if (elements.tabs_154.tabIndex!=6){
			if(elements.tabs_154.tabIndex==7){
				forms.frm_resumen_prn_obser_html.foundset.find();
				forms.frm_resumen_prn_obser_html.foundset.hiscli=globals.vHiscli;
				//forms.frm_resumen_prn_obser.foundset.fecha=globals.vFecha;
				forms.frm_resumen_prn_obser_html.foundset.search();
				globals.vTituloResumen='RESUMEN   OBSERVACIONES'
					
							globals.vHora=forms.frm_resumen_prn_obser_html.foundset.hora
							//forms.frm_resumen_prn_obser.sub_buildReport()
							forms.frm_resumen_prn_obser_html.controller.setPageFormat(210,297,10,0,5,0,0,0);
							forms.frm_resumen_prn_obser_html.controller.showPrintPreview()
							//forms.frm_resumen_prn_obser_html.controller.print()
							//forms.frm_tab_resumen_prn_obser.controller.setPageFormat(210,297,10,0,5,0,0,0);
							//forms.frm_tab_resumen_prn_obser.controller.showPrintPreview()
					//forms.frm_resumen_prn_obser.controller.print();
					
				
			}else{
				if(elements.tabs_154.tabIndex==1){
					var frm = 'frm_resumen_prn_'+ globals.vRangoHorario
					forms[frm].foundset.find();
					forms[frm].foundset.hiscli=globals.vHiscli;
					forms[frm].foundset.fecha=globals.vFecha;
					forms[frm].foundset.search();
					forms[frm].controller.setPageFormat(210,297,10,0,5,0,0,0);
					//forms[frm].controller.showPrintPreview()
					forms[frm].controller.print();
				}else{
						
					forms.frm_resumen_prn_copy.foundset.find()
					forms.frm_resumen_prn_copy.foundset.hiscli=globals.vHiscli
					forms.frm_resumen_prn_copy.foundset.fecha=globals.vFecha
					forms.frm_resumen_prn_copy.foundset.search()
					forms.frm_resumen_prn_copy.controller.setPageFormat(210,297,10,0,5,10,0,0)
					forms.frm_resumen_prn_copy.controller.showPrintPreview()
					//forms.frm_resumen_prn_copy.controller.print()
					//forms.frm_resumen_prn_copy.controller.print(false, true,plugins.pdf_output.getPDFPrinter('/home/SCDOM/enfeuco/out.pdf'))
			  
				}
			}
		}else{
			//application.output(elements.tabs_154.tabIndex)
			forms.frm_tmp_prn_cateter.foundset.find()
			forms.frm_tmp_prn_cateter.foundset.hiscli=globals.vHiscli
			forms.frm_tmp_prn_cateter.foundset.search()
			forms.frm_tmp_prn_cateter.controller.setPageFormat(210,297,5,0,5,0,1,0)
			//forms.frm_tmp_prn_cateter.controller.showPrintPreview()
			forms.frm_tmp_prn_cateter.controller.print()
		}
	}else{
		forms.frm_tmp_prn.foundset.find()
		forms.frm_tmp_prn.foundset.hiscli=globals.vHiscli
		forms.frm_tmp_prn.foundset.fecha=globals.vFecha
		forms.frm_tmp_prn.foundset.search()
		forms.frm_tmp_prn.controller.setPageFormat(210,297,5,0,5,0,1,0)
		//forms.frm_tmp_prn.controller.showPrintPreview()
		forms.frm_tmp_prn.controller.print()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B58DFC24-A5FA-4F96-B0C3-B10975165045"}
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
 * @properties={typeid:24,uuid:"B0E1EF65-B94D-433A-AB1B-6A527D76E925"}
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

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"580BF76D-AAE7-4DDE-9989-0800B343B116"}
 * @AllowToRunInFind
 */
function onAction_imprimeTodo(event) {
	if(vhiscli_to_hojauti_resumen.getSize()>0){
		var hc = globals.vHiscli
		var done = plugins.rawSQL.executeSQL("enfermeria", "hojauti_resumen", "delete from hojauti_resumen where hiscli = ? ", [hc])
		if (done) {
			//flush is required when changes are made in db
			plugins.rawSQL.flushAllClientsCache("enfermeria", "hojauti_resumen")
		} else {
			var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
			plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
		}
	}
	var $sql = 'select hiscli, fecha from hojauti where hiscli='+globals.vHiscli+' order by hiscli, fecha, hora'
	var $ds = databaseManager.getDataSetByQuery("enfermeria",$sql,null,-1)
		
	var $kant_registros=$ds.getMaxRowIndex()
	//var $kant_registros=vhiscli_to_hojauti.getSize()
	if($kant_registros>0){
		var i = 1
		while (i<=$kant_registros){
			globals.vFecha=$ds.getValue(i,2)
			while (i<=$kant_registros&&globals.vFecha==$ds.getValue(i,2)){
				i++	
			}
			imprimoUnDia()
		}
		//imprimoTodosLosDias()
	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"3180D675-3AD4-4925-95D0-FD6B171C13EA"}
 */
function imprimoUnDia(){
	
	forms.frm_resumen_balance_new.resumen_balance();
	var frm=''
	globals.vTituloResumen='RESUMEN  BALANCE';
	globals.vRangoHorario=1
	frm = 'frm_resumen_prn_'+ globals.vRangoHorario
	forms[frm].foundset.find();
	forms[frm].foundset.hiscli=globals.vHiscli;
	forms[frm].foundset.search();
	forms[frm].controller.setPageFormat(210,297,10,0,5,0,0,0);
	//forms[frm].controller.showPrintPreview()
	forms[frm].controller.print()
	
	
	forms.frm_resumen_balance_new.resumen_balance();
	globals.vTituloResumen='RESUMEN  BALANCE';
	globals.vRangoHorario=2
	frm = 'frm_resumen_prn_'+ globals.vRangoHorario
	forms[frm].foundset.find();
	forms[frm].foundset.hiscli=globals.vHiscli;
	forms[frm].foundset.search();
	forms[frm].controller.setPageFormat(210,297,10,0,5,0,0,0);
	//forms[frm].controller.showPrintPreview()
	forms[frm].controller.print()
		
	forms.frm_resumen_balance_new.resumen_balance();
	globals.vTituloResumen='RESUMEN  BALANCE';
	globals.vRangoHorario=3
	frm = 'frm_resumen_prn_'+ globals.vRangoHorario
	forms[frm].foundset.find();
	forms[frm].foundset.hiscli=globals.vHiscli;
	forms[frm].foundset.search();
	forms[frm].controller.setPageFormat(210,297,10,0,5,0,0,0);
	//forms[frm].controller.showPrintPreview()
	forms[frm].controller.print()
	
	forms.frm_resumen_plan_cuidados.resumen_Plan_Cuidados();
	globals.vTituloResumen='RESUMEN   PLAN   DE   CUIDADOS';
	forms.frm_resumen_prn_copy.foundset.find()
	forms.frm_resumen_prn_copy.foundset.hiscli=globals.vHiscli
	//forms.frm_resumen_prn_copy.foundset.fecha=globals.vFecha
	forms.frm_resumen_prn_copy.foundset.search()
	forms.frm_resumen_prn_copy.controller.setPageFormat(210,297,10,0,5,10,0,0)
	//forms.frm_resumen_prn_copy.controller.showPrintPreview()
	forms.frm_resumen_prn_copy.controller.print()
	
	forms.frm_resumen_parametros.resumen_Parametros();
	globals.vTituloResumen='RESUMEN   PARAMETROS';
	forms.frm_resumen_prn_copy.foundset.find()
	forms.frm_resumen_prn_copy.foundset.hiscli=globals.vHiscli
	//forms.frm_resumen_prn_copy.foundset.fecha=globals.vFecha
	forms.frm_resumen_prn_copy.foundset.search()
	forms.frm_resumen_prn_copy.controller.setPageFormat(210,297,10,0,5,10,0,0)
	//forms.frm_resumen_prn_copy.controller.showPrintPreview()
	forms.frm_resumen_prn_copy.controller.print()
	
	forms.frm_resumen_valoracion.resumen_Valoracion();
	globals.vTituloResumen='RESUMEN   VALORACION';
	forms.frm_resumen_prn_copy.foundset.find()
	forms.frm_resumen_prn_copy.foundset.hiscli=globals.vHiscli
	//forms.frm_resumen_prn_copy.foundset.fecha=globals.vFecha
	forms.frm_resumen_prn_copy.foundset.search()
	forms.frm_resumen_prn_copy.controller.setPageFormat(210,297,10,0,5,10,0,0)
	//forms.frm_resumen_prn_copy.controller.showPrintPreview()
	forms.frm_resumen_prn_copy.controller.print()
	
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"C35BEAC4-555D-43E8-B320-57428A21C5FB"}
 */
function imprimoTodosLosDias(){
	var frm=''
	globals.vTituloResumen='RESUMEN  BALANCE';
	globals.vRangoHorario=1
	frm = 'frm_resumen_prn_'+ globals.vRangoHorario
	forms[frm].foundset.find();
	forms[frm].foundset.hiscli=globals.vHiscli;
	forms[frm].foundset.search();
	forms[frm].controller.setPageFormat(210,297,10,0,5,0,0,0);
	forms[frm].controller.showPrintPreview()
}
