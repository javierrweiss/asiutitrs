/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"62813278-BE7E-4BC4-88B6-07C4E3DB3638"}
 */
function onAction_graba_titulo(event) {
	if(per_1_to_tbc_profmedtit.getSize()<1){
		per_1_to_tbc_profmedtit.newRecord()
		globals.InicializarDatosDeRelacion(per_1_to_tbc_profmedtit,"rrhh","tbc_profmedtit")
	}
	globals.prfmt_codmed=globals.per_1
	globals.prfmt_tipmed=0
	globals.prfmt_codoper=globals.vLega
	globals.prfmt_tipoper=globals.vTipoOperador
	globals.prfmt_fec_modif=globals.fechaActual()
	globals.prfmt_hor_modif=globals.horaActual()
	var mes=0
	var mes_ed=''
	var dia=0
	var dia_ed=''
	if(globals.ed_prfmt_fec_recib==null){
		globals.prfmt_fec_recib=0
	}else{
		mes=globals.ed_prfmt_fec_recib.getMonth()+1
		dia=globals.ed_prfmt_fec_recib.getDate()
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
		globals.prfmt_fec_recib=globals.ed_prfmt_fec_recib.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
	}
	mes=0
	dia=0
	mes_ed=''
	dia_ed=''
	if(globals.ed_prfmt_fec_diplo==null){
		globals.prfmt_fec_diplo=0
	}else{
		mes=globals.ed_prfmt_fec_diplo.getMonth()+1
		dia=globals.ed_prfmt_fec_diplo.getDate()
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
		globals.prfmt_fec_diplo=globals.ed_prfmt_fec_diplo.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
	}
	mes=0
	dia=0
	mes_ed=''
	dia_ed=''
	if(globals.ed_prfmt_fec_firma==null){
		globals.prfmt_fec_firma=0
	}else{
		mes=globals.ed_prfmt_fec_firma.getMonth()+1
		dia=globals.ed_prfmt_fec_firma.getDate()
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
		globals.prfmt_fec_firma=globals.ed_prfmt_fec_firma.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
	}
	var name=''
	
	for(var i=0;i<per_1_to_tbc_profmedtit.alldataproviders.length;i++){
		name=per_1_to_tbc_profmedtit.alldataproviders[i]
		if(globals[name]!=null){
			per_1_to_tbc_profmedtit[name]=globals[name]
		}
	}	
	databaseManager.saveData(per_1_to_tbc_profmedtit.getRecord(1))
	elements.btn_graba.visible=false
	elements.lbl_graba.visible=false
	application.updateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1497B919-9DF9-487A-8C88-3491180E4C15"}
 */
function onAction_campo_gral(event) {
	switch (event.getElementName()){
	case 'prfmt_curso_en':elements.prfmt_tpo_estud.requestFocus();break;
	case 'prfmt_tpo_estud':elements.prfmt_fec_recib.requestFocus();break;
	case 'prfmt_fec_recib':elements.prfmt_prom_gral.requestFocus();break;
	case 'prfmt_prom_gral':elements.prfmt_diploma.requestFocus();break;
	
	case 'prfmt_diploma':elements.prfmt_fec_diplo.requestFocus();break;
	case 'prfmt_fec_diplo':elements.prfmt_observ_ti.requestFocus();break;
	case 'prfmt_observ_ti':elements.prfmt_matric_na.requestFocus();break;
	case 'prfmt_matric_na':elements.btn_graba.requestFocus();break;
	}
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
 * @properties={typeid:24,uuid:"27592E1A-2B21-47F5-B41A-80218D461C13"}
 */
function onDataChange_campo_gral(oldValue, newValue, event) {
	elements.btn_graba.visible=true
	elements.lbl_graba.visible=true
	application.updateUI()
	return true
}
