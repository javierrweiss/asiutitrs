/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4B56A216-032D-4EF1-A5FC-FF73E0E843DC"}
 */
function onAction_add_Anatomia_dtl(event) {
	globals.anatpaob1=''
	forms.IngresoAnatomia_tab.elements.btn_new.visible=false
	forms.IngresoAnatomia_tab.elements.btn_edit.visible=false
	forms.IngresoAnatomia_tab.elements.btn_delete.visible=false
	forms.IngresoAnatomia_tab.elements.btn_ayuda.visible=false
	forms.form116_dtl.elements.volver_form116.enabled=false
	forms.IngresoAnatomia_tab.elements.tabless_ingreso_anatomia.tabIndex=2
	//forms.Ingreso_anatomia_dtl.foundset.newRecord()
	//globals.InicializarDatos("Ingreso_anatomia_dtl","asistencial","tbc_anatpade")
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E4317E0-D3E2-455E-A031-49C4250D63C6"}
 */
function onShow_IngresoAnatomia_tab(firstShow, event) {
	if(vs_to_tbc_anatpaca.getSize()>0){
		globals.anatobgral=MostrarTextoAnatomiaPatologica(vs_to_tbc_anatpaca.apca_nrosolic, 0)
	}
	controller.focusFirstField()
}

/**
 * @param {number} nro_solicitud
 * @param {number} codigo_nome
 * 
 * @properties={typeid:24,uuid:"69EABCA2-F4FA-4A2A-9C2E-44C8DBDB9DC6"}
 * @AllowToRunInFind
 */
function MostrarTextoAnatomiaPatologica(nro_solicitud, codigo_nome) {
	var texto = '';
	var j = 0;
	
	var fs1 = databaseManager.getFoundSet("asistencial", "tbc_anatpaob")
	var name = new Array()
	name[0] = "apobnrosolic"
	name[1] = "apobtiponome"
	name[2] = "apobcodnome"
	name[3] = "apobsecuencia"
	name[4] = "apoblinea"
	name[5] = "apobfiller"
	
	fs1.find()
	fs1[name[0]] = nro_solicitud
	fs1[name[1]] = 1
	fs1[name[2]] = codigo_nome
	fs1.search()
	
	var filasf = utils.stringToNumber(utils.stringTrim(fs1.getSize()))
	if (filasf > 0) {
		fs1.setSelectedIndex(1)
		texto = fs1[name[4]];
		for (j = 2; j < filasf + 1; j++) {
			fs1.setSelectedIndex(j)
			texto = texto + utils.stringTrim(fs1[name[4]]);
		}
	}
	return texto
}

/**
 * @properties={typeid:24,uuid:"8F75E24A-BB56-49A3-BAF6-CA3554F00CBD"}
 */
function MostrarTextoConRelacion() {
	globals.names_campos[0] = "apobnrosolic"
	globals.names_campos[1] = "apobtiponome"
	globals.names_campos[2] = "apobcodnome"
	globals.names_campos[3] = "apobsecuencia"
	globals.names_campos[4] = "apoblinea"
	globals.names_campos[5] = "apobfiller"
	
    globals.frm_txt = "Anatpaob1"
	globals.vServer = "asistencial"
	globals.vTabla = "tbc_anatpaob"	
	globals.names_relacion = 'vs_to_tbc_anatpaob'
	globals.campo_texto1='anatpaob1'
	MuestroTexto(globals.frm_txt, globals.names_campos, globals.vServer, globals.vTabla, globals.names_relacion, globals.campo_texto1)
}

/**
 * @properties={typeid:24,uuid:"6632B307-563C-4F24-BDEF-CBA62CE2E5AD"}
 */
function MuestroTexto(frm, names, server, tabla, relacion, campo) {
	var name = new Array()
	name = names;
	var filas = foundset[relacion].getSize()
	globals[campo] = '';
	if (filas > 0)
	{
		foundset[relacion].sort('apobnrosolic asc, apobtiponome asc, apobcodnome asc, apobsecuencia asc')
		
		foundset[relacion].setSelectedIndex(1)
	    globals[campo] = foundset[relacion][name[4]];
				
		for (var j=2;j<filas+1;j++)
 		{
			foundset[relacion].setSelectedIndex(j)
			
		    globals[campo] = globals[campo] + foundset[relacion][name[4]];
		   
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1E206DC7-C9B4-47D9-958D-B6AECD28EAE4"}
 */
function onAction_btn_delete_AnatomiaPatologica(event) {
	try{
		vs_to_tbc_anatpaca.tbc_anatpaca_to_tbc_anatpade.deleteRecord()
	}catch (msg){
		(plugins.dialogs.showInfoDialog("No borra Detalle de Anatomía Patológica",msg.toString(),"ok"))
	}
	forms.Ingreso_anatomia_dtl.borrar_TextoAnatomiaObs(vs_to_tbc_anatpaca.tbc_anatpaca_to_tbc_anatpade.apde_nrosolic, vs_to_tbc_anatpaca.tbc_anatpaca_to_tbc_anatpade.apde_codnom, 1)
	forms.Ingreso_anatomia_dtl.grabar_TextoAnatomiaObs(vs_to_tbc_anatpaca.tbc_anatpaca_to_tbc_anatpade.apde_nrosolic, vs_to_tbc_anatpaca.tbc_anatpaca_to_tbc_anatpade.apde_codnom, '',1)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"90B06B7C-4220-4644-BC34-C82DB5297931"}
 */
function onAction_ayuda_IngresoAnatomia_tab(event) {
	globals.textoAyuda='AYUDA-24'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Ingreso de Anatomía Patológica";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_gral_Z)
}
