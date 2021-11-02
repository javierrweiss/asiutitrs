
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"92236A7E-5F58-40D9-ACDC-7AE44E1AF5C9"}
 */
function onAction_btn_graba_profmefa(event) {
	elements.btn_graba_factu.visible=false
	elements.lbl_graba_factu.visible=false
	application.updateUI()
	if(per_1_to_tbc_profmefa.getSize()<1){
		per_1_to_tbc_profmefa.newRecord()
		globals.InicializarDatosDeRelacion(per_1_to_tbc_profmefa,"rrhh","tbc_profmefa")
	}
	per_1_to_tbc_profmefa.profa_codmed=globals.per_1
	per_1_to_tbc_profmefa.profa_tipmed=0
	per_1_to_tbc_profmefa.profa_categori=globals.profa_categori
	per_1_to_tbc_profmefa.profa_mod_contrat=globals.profa_mod_contrat
	per_1_to_tbc_profmefa.profa_fec_modif=globals.fechaActual()
	per_1_to_tbc_profmefa.profa_hor_modif=globals.horaActual()
	per_1_to_tbc_profmefa.profa_codoper=globals.vLega
	per_1_to_tbc_profmefa.profa_tipoper=0
	per_1_to_tbc_profmefa.profa_serv_aten_1=globals.profa_serv_aten_1
	per_1_to_tbc_profmefa.profa_serv_aten_2=globals.profa_serv_aten_2
	per_1_to_tbc_profmefa.profa_serv_aten_3=globals.profa_serv_aten_3
	per_1_to_tbc_profmefa.profa_serv_aten_4=globals.profa_serv_aten_4
	per_1_to_tbc_profmefa.profa_serv_aten_5=globals.profa_serv_aten_5
	per_1_to_tbc_profmefa.profa_paci_aten_1=globals.profa_paci_aten_1
	per_1_to_tbc_profmefa.profa_paci_aten_2=globals.profa_paci_aten_2
	per_1_to_tbc_profmefa.profa_paci_aten_3=globals.profa_paci_aten_3
	per_1_to_tbc_profmefa.profa_paci_aten_4=globals.profa_paci_aten_4
	per_1_to_tbc_profmefa.profa_paci_aten_5=globals.profa_paci_aten_5
	per_1_to_tbc_profmefa.profa_paci_aten_6=globals.profa_paci_aten_6
	per_1_to_tbc_profmefa.profa_paci_aten_7=globals.profa_paci_aten_7
	per_1_to_tbc_profmefa.profa_paci_aten_8=globals.profa_paci_aten_8
	per_1_to_tbc_profmefa.profa_paci_aten_9=globals.profa_paci_aten_9
	per_1_to_tbc_profmefa.profa_paci_aten_10=globals.profa_paci_aten_10
	
	databaseManager.saveData(per_1_to_tbc_profmefa.getRecord(1))
	
	if(per_1_to_tbc_persegu.getSize()<1){
		per_1_to_tbc_persegu.newRecord()
		globals.InicializarDatosDeRelacion(per_1_to_tbc_persegu,"rrhh","tbc_persegu")
	}
	
	per_1_to_tbc_persegu.perse_codper=globals.per_1
	per_1_to_tbc_persegu.perse_nropol=globals.perse_nropol
	per_1_to_tbc_persegu.perse_ciaseg=globals.perse_ciaseg
	per_1_to_tbc_persegu.perse_polmon=globals.perse_polmon
	per_1_to_tbc_persegu.perse_polpes=globals.perse_polpes
	var mes=0
	var mes_ed=''
	var dia=0
	var dia_ed=''
	if(globals.perse_vigdes_fec==null){
		globals.perse_vigdes=0
	}else{
		mes=globals.perse_vigdes_fec.getMonth()+1
		dia=globals.perse_vigdes_fec.getDate()
		if(mes<10){
			mes_ed='0'+mes
		}else{
			mes_ed=mes
		}
		if(dia<10){
			dia_ed='0'+dia
		}else{
			dia_ed=dia
		}
		globals.perse_vigdes=globals.perse_vigdes_fec.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
	}
	mes=0
	dia=0
	mes_ed=''
	dia_ed=''
	if(globals.perse_vighas_fec==null){
		globals.perse_vighas=0
	}else{
		mes=globals.perse_vighas_fec.getMonth()+1
		dia=globals.perse_vighas_fec.getDate()
		if(mes<10){
			mes_ed='0'+mes
		}else{
			mes_ed=mes
		}
		if(dia<10){
			dia_ed='0'+dia
		}else{
			dia_ed=dia
		}
		globals.perse_vighas=globals.perse_vighas_fec.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
	}
	per_1_to_tbc_persegu.perse_vigdes=globals.perse_vigdes
	per_1_to_tbc_persegu.perse_vighas=globals.perse_vighas
	
	databaseManager.saveData(per_1_to_tbc_persegu.getRecord(1))
	
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
 * @properties={typeid:24,uuid:"34BA9E41-55DF-43FB-B65D-AE179F6AC4D3"}
 */
function onDataChange_gral(oldValue, newValue, event) {
	elements.btn_graba_factu.visible=true
	elements.lbl_graba_factu.visible=true
	application.updateUI()
	return true
}
