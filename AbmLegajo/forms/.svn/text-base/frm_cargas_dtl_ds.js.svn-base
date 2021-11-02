/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"813B161F-03E8-4465-9B59-93246EAECFFB"}
 */
var f_titulo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B8EE00F0-4F85-4182-9892-67A8696F8385"}
 */
var fecha = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DB63C8DA-402A-4571-8B8F-B59BFC142E88"}
 */
function onAction_graba_cargas_familiares(event) {
	//if(globals.gAlta){
	//}
	var $car4=0
	var $car7=0
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
		$car4=anio+''+ed_mes+''+ed_dia
	}else{
		$car4=0
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
		$car7=anio+''+ed_mes+''+ed_dia
	}else{
		$car7=0
	}
	if(globals.cargas_tipo=='conyugue'){
		var $ds2 = databaseManager.createEmptyDataSet()
		$ds2.addColumn('car1',1,JSColumn.NUMBER)   
		$ds2.addColumn('car2',2,JSColumn.NUMBER)
		$ds2.addColumn('car3',3,JSColumn.TEXT)
		$ds2.addColumn('car4',4,JSColumn.NUMBER)
		$ds2.addColumn('car5',5,JSColumn.TEXT)
		$ds2.addColumn('car6',6,JSColumn.NUMBER)
		$ds2.addColumn('car7',7,JSColumn.NUMBER)
		$ds2.addColumn('car9',8,JSColumn.NUMBER)
		$ds2.addColumn('vl_car5',9,JSColumn.NUMBER)
		
		$ds2.addRow([globals.per_8, globals.car2, globals.car3, globals.car4, application.getValueListDisplayValue('vl_tipo_documento',globals.car5), globals.car6, globals.car7, globals.car9, globals.car5])
		
		var $tipos = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.DATETIME, JSColumn.TEXT, JSColumn.NUMBER, JSColumn.DATETIME, JSColumn.NUMBER, JSColumn.NUMBER]

		var $frm = solutionModel.getForm('frm_cargas_conyugue_ds')
		$frm.dataSource = $ds2.createDataSource('Ds_Conyugue', $tipos)
		forms.frm_cargas_conyugue_ds.controller.recreateUI()
	}else{
		if(globals.cargas_tipo=='concubino'){
			var $ds3 = databaseManager.createEmptyDataSet()
			$ds3.addColumn('car1',1,JSColumn.NUMBER)   
			$ds3.addColumn('car2',2,JSColumn.TEXT)
			$ds3.addColumn('car3',3,JSColumn.NUMBER)
			$ds3.addColumn('car4',4,JSColumn.NUMBER)
			$ds3.addColumn('car5',5,JSColumn.NUMBER)
			$ds3.addColumn('car6',6,JSColumn.NUMBER)
			$ds3.addColumn('car7',7,JSColumn.NUMBER)
			$ds3.addColumn('car9',8,JSColumn.NUMBER)
			$ds3.addColumn('vl_car5',9,JSColumn.NUMBER)
			
			$ds3.addRow([globals.per_8, globals.car2, globals.car3, globals.car4, application.getValueListDisplayValue('vl_tipo_documento',globals.car5), globals.car6, globals.car7, globals.car9, globals.car5])
		
			var $tipos3 = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.DATETIME, JSColumn.TEXT, JSColumn.NUMBER, JSColumn.DATETIME, JSColumn.NUMBER, JSColumn.NUMBER]

			var $frm3 = solutionModel.getForm('frm_cargas_concubino_ds')
			$frm3.dataSource = $ds3.createDataSource('Ds_Concubino', $tipos3)
			forms.frm_cargas_concubino_ds.controller.recreateUI()
		}else{
			if(globals.cargas_tipo=='hijos'){
				if(globals.car2>1){
					if(globals.gAlta){
						forms.frm_cargas_hijos_tbl_ds.foundset.newRecord()
					}
					forms.frm_cargas_hijos_tbl_ds.foundset['car1']=globals.per_8
					forms.frm_cargas_hijos_tbl_ds.foundset['car2']=globals.car2
					forms.frm_cargas_hijos_tbl_ds.foundset['car3']=globals.car3
					forms.frm_cargas_hijos_tbl_ds.foundset['car4']=globals.car4
					forms.frm_cargas_hijos_tbl_ds.foundset['car5']= application.getValueListDisplayValue('vl_tipo_documento',globals.car5)
					forms.frm_cargas_hijos_tbl_ds.foundset['car6']=globals.car6
					forms.frm_cargas_hijos_tbl_ds.foundset['car7']=globals.car7
					forms.frm_cargas_hijos_tbl_ds.foundset['car9']=globals.car9
					forms.frm_cargas_hijos_tbl_ds.foundset['vl_car5']=globals.car5
					databaseManager.saveData(forms.frm_cargas_hijos_tbl_ds.foundset)
				}else{
					if(globals.gAlta){
						var $ds4 = databaseManager.createEmptyDataSet()
						$ds4.addColumn('car1',1,JSColumn.NUMBER)   
						$ds4.addColumn('car2',2,JSColumn.NUMBER)
						$ds4.addColumn('car3',3,JSColumn.TEXT)
						$ds4.addColumn('car4',4,JSColumn.NUMBER)
						$ds4.addColumn('car5',5,JSColumn.TEXT)
						$ds4.addColumn('car6',6,JSColumn.NUMBER)
						$ds4.addColumn('car7',7,JSColumn.NUMBER)
						$ds4.addColumn('car9',8,JSColumn.NUMBER)
						$ds4.addColumn('vl_car5',9,JSColumn.NUMBER)
				
						$ds4.addRow([globals.per_8, globals.car2, globals.car3, globals.car4, application.getValueListDisplayValue('vl_tipo_documento',globals.car5), globals.car6, globals.car7, globals.car9, globals.car5])
			
						var $tipos4 = [JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.DATETIME, JSColumn.TEXT, JSColumn.NUMBER, JSColumn.DATETIME, JSColumn.NUMBER, JSColumn.NUMBER]
					
	
						var $frm4 = solutionModel.getForm('frm_cargas_hijos_tbl_ds')
						$frm4.dataSource = $ds4.createDataSource('Ds_Hijos', $tipos4)
						forms.frm_cargas_hijos_tbl_ds.controller.recreateUI()
					}else{
						forms.frm_cargas_hijos_tbl_ds.foundset['car1']=globals.per_8
						forms.frm_cargas_hijos_tbl_ds.foundset['car2']=globals.car2
						forms.frm_cargas_hijos_tbl_ds.foundset['car3']=globals.car3
						forms.frm_cargas_hijos_tbl_ds.foundset['car4']=globals.car4
						forms.frm_cargas_hijos_tbl_ds.foundset['car5']= application.getValueListDisplayValue('vl_tipo_documento',globals.car5)
						forms.frm_cargas_hijos_tbl_ds.foundset['car6']=globals.car6
						forms.frm_cargas_hijos_tbl_ds.foundset['car7']=globals.car7
						forms.frm_cargas_hijos_tbl_ds.foundset['car9']=globals.car9
						forms.frm_cargas_hijos_tbl_ds.foundset['vl_car5']=globals.car5
						databaseManager.saveData(forms.frm_cargas_hijos_tbl_ds.foundset)
					}
				}
			}
		}
	}
	
	inicializaVariablesCargas()
	globals.cargaFamiliares=true
	if(globals.tit_estado_tratamiento=='Alta'){
		globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
	}
	forms.frm_tab_cargas.elements.tabless.tabIndex=3
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"83DAFACB-C28B-45D4-8F00-4A9B0BCEC4B2"}
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
 * @properties={typeid:24,uuid:"4104BA79-9894-40E1-9367-FA3980F93680"}
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
 * @properties={typeid:24,uuid:"78F9FDBC-385A-4970-A7F8-C0DB5E4D43B0"}
 */
function onAction_cancela_cargas_familiares(event) {
	inicializaVariablesCargas()
	forms.frm_tab_cargas.elements.tabless.tabIndex=3
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ACA9A2E7-5D03-48F9-9C73-AB27879E4AA5"}
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
 * @properties={typeid:24,uuid:"DDD90970-5B95-41E4-ADAC-AC16E829CD27"}
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
 * @properties={typeid:24,uuid:"28FDD289-B082-4F7B-81C0-E366B11597FA"}
 */
function resguardoValoresIniciales() {
	globals.car3_old=globals.car3
	globals.car4_old=globals.car4
	globals.car5_old=globals.car5
	globals.car6_old=globals.car6
	globals.car7_old=globals.car7
	globals.car9_old=globals.car9
}
