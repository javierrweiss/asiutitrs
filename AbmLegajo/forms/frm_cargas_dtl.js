/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AD2EDA89-337F-44DC-BF28-8BDC4B7EAF3D"}
 */
var fecha = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E50717EF-7A66-436B-A9FE-CA577C203EBC"}
 */
function onAction_graba_cargas_familiares(event) {
	if(globals.gAlta){
		per_1_to_tbc_cargas.newRecord()
	}
	per_1_to_tbc_cargas.car1=globals.per_1
	per_1_to_tbc_cargas.car2=globals.car2
	per_1_to_tbc_cargas.car3=globals.car3
	per_1_to_tbc_cargas.car5=globals.car5
	per_1_to_tbc_cargas.car6=globals.car6
	if(globals.car4!=null && globals.car4!=0){
		var anio = globals.car4.getFullYear()
		var mes = globals.car4.getMonth()+1
		var dia = globals.car4.getDate()
		var ed_mes=''
		var ed_dia=''
		if (mes<10){
			ed_mes='0'+mes
		}else{
			ed_mes=mes
		}
		if(dia<10){
			ed_dia='0'+dia
		}else{
			ed_dia=dia
		}
		per_1_to_tbc_cargas.car4=anio+''+ed_mes+''+ed_dia
	}else{
		per_1_to_tbc_cargas.car4=0
	}
	
	
	if(globals.car7!=null && globals.car7!=0){
		anio = globals.car7.getFullYear()
		mes = globals.car7.getMonth()+1
		dia = globals.car7.getDate()
		ed_mes=''
		ed_dia=''
		if (mes<10){
			ed_mes='0'+mes
		}else{
			ed_mes=mes
		}
		if(dia<10){
			ed_dia='0'+dia
		}else{
			ed_dia=dia
		}
		per_1_to_tbc_cargas.car7=anio+''+ed_mes+''+ed_dia
	}else{
		per_1_to_tbc_cargas.car7=0
	}
	per_1_to_tbc_cargas.car8_1=0
	per_1_to_tbc_cargas.car8_2=0
	per_1_to_tbc_cargas.car8_3=0
	per_1_to_tbc_cargas.car8_4=0
	per_1_to_tbc_cargas.car8_5=0
	per_1_to_tbc_cargas.car8_6=0
	per_1_to_tbc_cargas.car8_7=0
	per_1_to_tbc_cargas.car8_8=0
	per_1_to_tbc_cargas.car8_9=0
	per_1_to_tbc_cargas.car8_10=0
	per_1_to_tbc_cargas.car9=globals.car9
	
		
	databaseManager.saveData(per_1_to_tbc_cargas.getRecord(1))
	grabaHistoricoCargas()
	inicializaVariablesCargas()
	forms.frm_tab_cargas.elements.tabless.tabIndex=1
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB803562-3B48-4ADB-9B7A-63FCDAD1C28D"}
 */
function onShow_frm_cargas_dtl(firstShow, event) {
	
	if(globals.car2>0){
		elements.fld_fec_cas.visible=false
		elements.lbl_fec_cas.visible=false
	}else{
		elements.fld_fec_cas.visible=true
		elements.lbl_fec_cas.visible=true
	}
	application.updateUI()
}

/**
 * @properties={typeid:24,uuid:"003ADF48-7BAB-475B-A88A-0006B9954F82"}
 */
function inicializaVariablesCargas() {
	globals.car1=0
	globals.car3=''
	globals.car4=null
	globals.car5=0
	globals.car6=''
	globals.car7=null
	globals.car8_1=0
	globals.car8_2=0
	globals.car8_3=0
	globals.car8_4=0
	globals.car8_5=0
	globals.car8_6=0
	globals.car8_7=0
	globals.car8_8=0
	globals.car8_9=0
	globals.car8_10=0
	globals.car9=0
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A9B5DE30-43A5-479A-84AD-F99E418BD5B9"}
 */
function onAction_cancela_cargas_familiares(event) {
	inicializaVariablesCargas()
	forms.frm_tab_cargas.elements.tabless.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7FDFD294-2E27-4DB5-B60E-713CF6A57A3D"}
 */
function onAction_campo_gral(event) {
	switch (event.getElementName()){
	case 'car3':if(globals.car3!=''&&globals.car3!=null)elements.car4.requestFocus();break;
	case 'car4':if(globals.car4!=''&&globals.car4!=null)elements.car5.requestFocus();break;
	case 'car5':elements.car6.requestFocus();break;
	case 'car6':if(globals.car6!=0&&globals.car6!=null){
		if(globals.car2>0){
			elements.btn_graba.requestFocus()
		}else{
			elements.fld_fec_cas.requestFocus()};break;
		}
	}
}

/**
 * @properties={typeid:24,uuid:"091AC4FD-956C-4A7A-B582-97F2F48C8A6F"}
 */
function grabaHistoricoCargas() {
	var mes=0
	var mes_ed=''
	var dia=0
	var dia_ed=''
	var hora=0
	var hora_ed=''
	var minuto=0
	var minuto_ed=''	
	globals.fecha_actual_aux=application.getServerTimeStamp()
	mes=globals.fecha_actual_aux.getMonth()+1
	dia=globals.fecha_actual_aux.getDate()
	hora=globals.fecha_actual_aux.getHours()
	minuto=globals.fecha_actual_aux.getMinutes()
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
	if(hora<10){
		hora_ed='0'+hora
	}else{
		hora_ed=hora
	}
	if(minuto<10){
		minuto_ed='0'+minuto
	}else{
		minuto_ed=minuto
	}
	globals.dat_per_fecha=globals.fecha_actual_aux.getFullYear()+''+mes_ed+''+dia_ed
	globals.dat_per_hora=hora_ed+''+minuto_ed	
	var fecha_dsp = ''
	var hora_dsp = ''
	fecha_dsp=dia_ed+'/'+mes_ed+'/'+globals.fecha_actual_aux.getFullYear()
	hora_dsp=hora_ed+':'+minuto_ed	
	if(globals.car3_old!=globals.car3||globals.car4_old!=globals.car4||globals.car5_old!=globals.car5||globals.car6_old!=globals.car6||globals.car7_old!=globals.car7||globals.car9_old!=globals.car9){
		globals.dat_per_tipo=globals.cargas_tipo
		var dia_nac = globals.car4.getDate()
		var mes_nac = globals.car4.getMonth()+1
		var anio_nac= globals.car4.getFullYear()
		var fecha_cas=''
		if(globals.car7!=null&&globals.car7!=0){
			var dia_cas = globals.car7.getDate()
			var mes_cas = globals.car7.getMonth()+1
			var anio_cas= globals.car7.getFullYear()
			if(globals.car9==0){
				fecha_cas='Fecha Casam.: '+dia_cas+'/'+mes_cas+'/'+anio_cas
			}else{
				fecha_cas='Fecha Inicio: '+dia_cas+'/'+mes_cas+'/'+anio_cas
			}
		}
		per_1_to_tbl_rrhh_hist_datos_pers.newRecord()
		per_1_to_tbl_rrhh_hist_datos_pers.legajo=globals.per_1
		per_1_to_tbl_rrhh_hist_datos_pers.tipo=globals.dat_per_tipo
		per_1_to_tbl_rrhh_hist_datos_pers.fecha=globals.dat_per_fecha
		per_1_to_tbl_rrhh_hist_datos_pers.hora=globals.dat_per_hora
		per_1_to_tbl_rrhh_hist_datos_pers.campo_display=globals.car3+' | '+'Fecha Nac.: '+dia_nac+'/'+mes_nac+'/'+anio_nac+' | '+application.getValueListDisplayValue('vl_tipo_documento',globals.car5)+' | '+globals.car6+' | '+fecha_cas+' | '+globals.car9
		per_1_to_tbl_rrhh_hist_datos_pers.tipo_operador=0
		per_1_to_tbl_rrhh_hist_datos_pers.nro_operador=globals.vLega
		per_1_to_tbl_rrhh_hist_datos_pers.fecha_display=fecha_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.hora_display=hora_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.nombre_operador=globals.vOperador
		databaseManager.saveData(per_1_to_tbl_rrhh_hist_datos_pers.getRecord(1))
	}
}

/**
 * @properties={typeid:24,uuid:"EF88CB22-2D4D-4661-8782-74B003A3D653"}
 */
function resguardoValoresIniciales() {
	globals.car3_old=globals.car3
	globals.car4_old=globals.car4
	globals.car5_old=globals.car5
	globals.car6_old=globals.car6
	globals.car7_old=globals.car7
	globals.car9_old=globals.car9
}
