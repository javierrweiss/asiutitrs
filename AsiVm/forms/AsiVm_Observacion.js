/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"59568F5A-C2D8-4904-AA2C-B6E5A632C25A"}
 */
var f_observacion=''
	
	/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"06F9BAC6-4F69-421B-A20B-BCA515912F8C"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	
}
	
	/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"030464FE-55A5-4A62-931E-586743AAFEEC"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	f_observacion = ''
	loadData()
}

/**
 * @properties={typeid:24,uuid:"CF8754A4-0C4D-462D-85B1-F939D053A894"}
 */
function loadData(){

	//generar ficha
	if(asivm_observacion.fecha==null ){
		asivm_observacion.newRecord();
		scopes.globals.InicializarDatosDeRelacion(asivm_observacion, "desal", "fichakine_observacion")
		asivm_observacion.histcli = scopes.globals.AsiVm_hisclin
		var fechahora = application.getServerTimeStamp()
		asivm_observacion.fecha = fechahora
//		asivm_ficha_monitoreo.fichavm = scopes.globals.AsiVm_ficha_id // cuando agrega nuevo pone 0, mal. hay que poner ficha_kine_id
		asivm_observacion.fichavm = asivm_fichakine.ficha_id
		asivm_observacion.tipo = globals.AsiVm_tipo
		f_observacion = ''
//		winObs.show(forms.AsiVm_Observacion);
	}

	else if (asivm_observacion!=null && asivm_observacion.getSize() ==1){
		f_observacion= asivm_observacion.observacion
//		forms.AsiVm_Ficha_Inicio.elements.grp_otras_observaciones.visible=true
		
	}
}
	
	/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"635F8A94-0327-4134-850A-06ED494B54CD"}
 */
function onActionSave(event) {
	// TODO Auto-generated method stub
//	databaseManager.startTransaction();
	databaseManager.startTransaction();
	try {
		asivm_observacion.observacion=f_observacion
		asivm_observacion.marcaarm=0
		var resultSave = databaseManager.saveData(asivm_observacion.getRecord(1));
		
		if (resultSave == true) {
			
			var isSaveMarcaArm =globals.saveMarcaArmAdmision(0)
			if(isSaveMarcaArm==true && resultSave==true && asivm_rel_asistencial_arm_uso_abierta.getSize()==1){// luego mirar porque debe ser la ultima
				var fechahora = application.getServerTimeStamp()
				var fechaIngresoArmUso =asivm_rel_asistencial_arm_uso_abierta.armusofecing
				var horaIngresoArmUso =asivm_rel_asistencial_arm_uso_abierta.armusohoring
				var isSaveArmUso = globals.saveArmUsoFin(asivm_rel_buscar_admision.adm_histclin,fechahora)
				
				if(isSaveArmUso==true){//informar a rend cab y det
					//Defini variables rend y rendcab
					globals.AsiVm_Mod_rcHClinica=asivm_rel_buscar_admision.adm_histclin
					globals.AsiVm_Mod_rcPeriodo=utils.dateFormat(fechahora,'yyyyMM')
					globals.AsiVm_Mod_rcCierre =1
					globals.AsiVm_Mod_rcAdmision=0 //internados
					globals.AsiVm_Mod_rcEmpresa=1
					globals.AsiVm_Mod_ploObra = asivm_rel_admision_arm.adm_obrsoc;
					globals.AsiVm_Mod_ploPlanx10 = asivm_rel_admision_arm.adm_planobr

					var isSaveRendDet = globals.saveRendDet(globals.AsiVm_Mod_rcHClinica,fechahora, fechaIngresoArmUso, horaIngresoArmUso)
					if(isSaveRendDet==true){
						globals.saveRendCab(asivm_rel_buscar_admision.adm_histclin,fechahora);
					}
					
				}
				//si falla que hago? rollback!!
			}
			globals.DIALOGS.showInfoDialog("Resultado", "Observación guardada exitosamente.", "Aceptar");
		}
	} catch (e) {
		// TODO: handle exception
		databaseManager.rollbackTransaction()
		 application.output('Exception: Error al guardar observación en ficha sin soporte '+e.message, LOGGINGLEVEL.ERROR);
		
	}
	databaseManager.commitTransaction();

}
	
	/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D934DF11-A2C2-418C-8207-49E227563827"}
 */
function onDataChange(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	f_observacion = newValue
	return true
}
	