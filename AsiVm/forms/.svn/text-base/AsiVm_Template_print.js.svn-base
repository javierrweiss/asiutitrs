/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2F3EE0F6-A0D5-44C5-BA20-C2174B3EB425"}
 */
var f_medicoNombre = '';


/**
 * @properties={typeid:35,uuid:"075131B5-3E12-4C82-A1BA-7F938CCEB814",variableType:-4}
 */
var $ds2=null
/**
 * @properties={typeid:35,uuid:"D81C1864-4570-403A-AE8A-AC98F2ECD945",variableType:-4}
 */
var nDs = null
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AEBABD30-F101-4FE5-91FD-F27CB481AEDC",variableType:4}
 */
var autogenerate = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1E480DCA-AB93-44A8-84A4-0BC55EBE7FA4"}
 */
var html_monitoreo = ''
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6FCBFEA8-6409-4FC5-8A3E-BDB4CCB31FEB"}
 */
var html_final = ''
	

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6B30B91B-3AA1-4AB7-9F31-BE2A55A31364"}
 */
var f_matricula = '';

/**
 * @properties={typeid:35,uuid:"FCB35A7C-9BE8-4327-9E0A-76B0B0497D96",variableType:-4}
 */
var dsAux = null;

///**
// * @properties={typeid:35,uuid:"D9F3A2C7-8E7B-4149-A4BE-923F9177C311",variableType:-4}
// */
//var dsaux1 = null

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"20901D2A-E7C1-422C-A3DD-669855FB19EF"}
 */
var f_histClinIngreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F91BB04D-2A48-4373-A991-1EC0614ADAD9"}
 */
var f_egreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7EB057B5-9F19-423D-BDDC-E61E87872B56"}
 */
var f_ingreso = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2644E067-7E88-4508-8316-082F94F92F36"}
 */
var f_titulo_reporte = ''

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"62DE2DD6-6383-4F98-9A6D-BAF95121E8DF"}
 */
var f_cobertura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B47CD1CC-BEF9-4EA7-A74A-34EF909B6ABA"}
 */
var f_sexo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BE6791DF-0450-4537-AE25-02E59F4B9A75"}
 */
var f_hora = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18919BE7-C40B-404A-A856-60B1AB41C8DB"}
 */
var f_medico = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C39EEF28-D5A8-46DA-8DB7-4F7A0D9E1FF6"}
 */
var f_edad = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C77A7286-5A5B-4CEE-BDF5-158B31026A26"}
 */
var f_cama = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"03C492C8-E014-4B2E-BC73-259EEDC2684B"}
 */
var f_habitacion = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"F9B932C7-3FC0-4BAC-8961-F72C8B88DE96",variableType:93}
 */
var f_fechaImpresion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B96C1C3D-496E-4297-AC5B-6866EA1BF65C"}
 */
var f_histclinunica = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A858F411-E0CC-4D23-9944-6E5AC0D26D87"}
 */
var f_apelnom = '';

/**
 * @properties={typeid:24,uuid:"BD566957-4F56-41B5-9607-5D382F94218B"}
 */
function limpiarForm (){
	
	f_apelnom = '';
	f_cama = '';
	f_medico = '';
	f_fechaImpresion = null;
	f_habitacion = '';
	f_histclinunica = '';
	f_hora = '';
	f_cobertura = '';
	f_sexo = '';
	f_edad = '';
	f_egreso = '';
	f_histClinIngreso = '';
	f_ingreso = '';
	f_matricula = '';
	f_medicoNombre = '';
	
	globals.AsiVm_histClinAsist = 0;
	globals.AsiVm_histClinPrint = 0;
	globals.AsiVm_fechaPrint = 0;
//	globals.AsiVm_horaPrint = 0;
	
	globals.AsiVm_obrCodigo = 0;
	globals.AsiVm_hcUnicaPrint = 0;
//	globals.AsiVm_fechaIngresoPrint = 0;
//	globals.AsiVm_horaIngresoPrint = 0;
//	globals.AsiVm_alerHistClinPrint = 0;
	
	globals.AsiVm_perLegajoPrint = 0;
	globals.AsiVm_medCodigoPrint = 0;
//	globals.AsiVm_patCodiPrint = 0;
	
	
//	if(forms.AsiVm_Template_print.foundset.getSize() > 0)
//		forms.AsiVm_Template_print.foundset.clear();
//	
//	controller.setPageFormat(210,297,10,10,10,10,1,0);
}


/**
 * @properties={typeid:24,uuid:"B430ABB8-C5EA-4B74-9D2C-D8119F9537F4"}
 */
function imprimirReporte(histClin,dateFile,fileType){
	
	
	
	
	limpiarForm();
//	scopes.globals.AsiVm_fecha_Ficha = dateFile
	//Variables globales para la relacion 
//	globals.AsiVm_histClinAsist = histClin;
	globals.AsiVm_histClinPrint = histClin;
	scopes.globals.AsiVm_hisclin_monitoreo_print = histClin
	
	if(fileType==2){
		globals.AsiVm_fechaPrint = asivm_fichakine.fecha; //datos de ficha inicio
		scopes.globals.AsiVm_fecha_monitoreo_print= dateFile //para monotoreo
		globals.Asivm_prestacion = asivm_fichakine.prestacion

	}else if(fileType==1){
		globals.AsiVm_fechaPrint = dateFile;
	}
	else if(fileType==4){
		globals.AsiVm_fechaPrint = dateFile;
	}
	
	if(asivm_rel_buscar_fichavm_print.getSize() > 0 || asivm_ficha_monitoreo_print.getSize()==1){
		
		globals.AsiVm_obrCodigo = asivm_numero_to_asistencial_admision.adm_obrsoc;
		globals.AsiVm_hcUnicaPrint = asivm_numero_to_asistencial_admision.adm_histclinuni;

		var medico = "Confeccionada por ";
		var matricula = "";
		
		if(globals.Srv_Login_Sanatorio_vTipoOperador == 0){
			
			globals.AsiVm_perLegajoPrint = globals.Srv_Login_Sanatorio_vLega;
			if(asivm_rel_buscar_personal_print.per_sexo == 'M'){
				medico += "el Dr. ";
				f_medicoNombre = "Dr. ";
			}
			else{
				medico += "la Dra. ";
				f_medicoNombre = "Dra. ";
			}
			medico += utils.stringTrim(asivm_rel_buscar_personal_print.per_apelnom);
			matricula = asivm_rel_buscar_personal_print.per_codmatri;
			f_medicoNombre += utils.stringTrim(asivm_rel_buscar_personal_print.per_apelnom);
		}
		
		if(globals.Srv_Login_Sanatorio_vTipoOperador== 1){
			globals.AsiVm_medCodigoPrint =  globals.Srv_Login_Sanatorio_vLega;
			medico += "el Dr. " + utils.stringTrim(asivm_rel_buscar_medico_print.med_apenom);
			matricula = asivm_rel_buscar_medico_print.med_matricula;
			f_medicoNombre = "Dr. " + utils.stringTrim(asivm_rel_buscar_medico_print.med_apenom);
		}
		
		var date = new Date();
			date = dateFile;
		medico += " el " + globals.getDayName(date,true) + " " + date.getDate() + " " + globals.getMonthName(date,true) + " / " + date.getFullYear() + " a las " + date.getHours() + " hrs.";
		
		var sexo = "";
		if(asivm_numero_to_asistencial_admision.adm_sexo == 1){
			sexo = "Femenino"; 
		}
		else{
			if(asivm_numero_to_asistencial_admision.adm_sexo == 2)
				sexo = "Masculino";	
		}
		
		if(fileType!=3){
			// cargar Header
			f_fechaImpresion = application.getServerTimeStamp();
			f_medico = medico;
			f_matricula = matricula;
			f_sexo = sexo; 
			if(asivm_numero_to_asistencial_admision.getSize()>0){//no deberia venir nulo.
				f_edad = globals.CalculoEdad(asivm_numero_to_asistencial_admision.adm_fecnac) + ' ' +  globals.vTipoEdad;;
				f_apelnom =  formatearHistclin(asivm_numero_to_asistencial_admision.adm_histclin) + "  " + utils.stringTrim(asivm_numero_to_asistencial_admision.adm_apelnom); 
				f_histclinunica = asivm_numero_to_asistencial_admision.adm_histclinuni;
				f_habitacion = asivm_numero_to_asistencial_admision.adm_habita;
				f_cama = asivm_numero_to_asistencial_admision.adm_cama;
//				f_cobertura = utils.stringTrim(asivm_rel_buscar_obrasocial.obr_razonsoc) + ' (' +asivm_rel_buscar_obrasocial.obr_codigo + ')'; 
//				f_histClinIngreso = asivm_rel_tbc_hist_cab_new.histcabnrounico;
			}
			
//			if(asivm_rel_buscar_guardia.getSize() > 0){
//				
//				var fechaIngreso = globals.IntegerToDate(asivm_rel_buscar_guardia.guar_fechaingreso);
//				f_ingreso = globals.getDayName(fechaIngreso,true) + " " + fechaIngreso.getDate() + " " + globals.getMonthName(fechaIngreso,true) + " / " + fechaIngreso.getFullYear() + " " + convertNumberToHour_HHMM(asivm_rel_buscar_guardia.guar_horaingreso) + " hrs.";
//				
//				var fechaEgreso = globals.IntegerToDate(asivm_rel_buscar_guardia.guar_fechaalta);
//				f_egreso = globals.getDayName(fechaEgreso,true) + " " + fechaEgreso.getDate() + " " + globals.getMonthName(fechaEgreso,true) + " / " + fechaEgreso.getFullYear() + " " + convertNumberToHour_HHMM(asivm_rel_buscar_guardia.guar_horaalta) + " hrs.";
//				
//			}
		}
		
	}
	
	 $ds2 = databaseManager.createEmptyDataSet()
	 var fileName = ''
	 var rp_name = ''
//	if(globals.Asivm_prestacion==3){
//		CreateDataCaf($ds2)
//		fileName = 'MONITOREO-KINE_CAF'
//		rp_name = 'rp_monitoreo_caf.jasper'
//
//	}
//	else if(globals.Asivm_prestacion==2){
//		CreateDataVni($ds2)
//		fileName = 'MONITOREO-KINE_VNI'
//		rp_name = 'rp_monitoreo_vni.jasper'
//	}else{
		CreateDataVm($ds2)
		fileName = 'MONITOREO-KINE_VM'
		rp_name = 'rp_monitoreo.jasper'
//	}
	
	var $params = {
		param_paciente: f_apelnom,
		param_habitacion: f_habitacion,
		param_edad: f_edad,
		param_sexo: f_sexo,
		param_cama: f_cama,
		param_hcu:f_histclinunica,
		param_fecha_monitoreo : asivm_ficha_monitoreo.fecha
		
		
	}
	var fecha_reporte = utils.dateFormat(application.getTimeStamp(),'dd-MM-yyyy')
//	var $arch = plugins.file.showFileSaveDialog((fileName+"_"+fecha_reporte+'.pdf'))
//	if($arch){
		plugins.jasperPluginRMI.runReport($ds2,rp_name,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
//		//	elements.lbl_procesando2.visible = false
//			var $OS = application.getOSName();
//		if (/Windows/.test($OS)) {
//		    application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);	      
//	    } else if (/Linux|Freebsd/.test($OS)) {
//	       application.executeProgram('xdg-open', $arch);
//	    } else if (/Mac/.test($OS)) {
//	       application.executeProgram('open', $arch);
//	    }
//	}
//	else{
//		//application.output("return 8")
//		return
//	}

}


/**
 * TODO generated, please specify type and doc for the params
 * @param $ds2
 *
 * @properties={typeid:24,uuid:"9191844A-DBC9-40DA-A0A6-C38648E645D4"}
 */
function CreateDataCierreFicha($ds2) {
	$ds2.addColumn('liberado_vent_mec',1,JSColumn.NUMBER)
	$ds2.addColumn('extub_no_prog',2,JSColumn.NUMBER)
	$ds2.addColumn('auto_extub',3,JSColumn.TEXT)
	$ds2.addColumn('extub_occidental',4,JSColumn.TEXT)
	$ds2.addColumn('fecha_extub_no_prog',5,JSColumn.NUMBER)
	$ds2.addColumn('reintubado',6,JSColumn.NUMBER)
	$ds2.addColumn('causa_reintubacion',7,JSColumn.NUMBER)
	
	$ds2.addColumn('tqt',8,JSColumn.NUMBER)
	$ds2.addColumn('fecha_tqt',9,JSColumn.NUMBER)
	$ds2.addColumn('decanulacion',10,JSColumn.NUMBER)
	$ds2.addColumn('fecha_decanulacion',11,JSColumn.NUMBER)
	$ds2.addColumn('sdra',12,JSColumn.NUMBER)
	$ds2.addColumn('pao2_fio2_diag',13,JSColumn.NUMBER)
	$ds2.addColumn('neumotorax',14,JSColumn.NUMBER)
	$ds2.addColumn('shock',15,JSColumn.NUMBER)
	
	$ds2.addColumn('delirium',16,JSColumn.NUMBER)
	$ds2.addColumn('dauci',17,JSColumn.NUMBER)
	$ds2.addColumn('dialisis',18,JSColumn.NUMBER)
	$ds2.addColumn('pafi',19,JSColumn.NUMBER)
	$ds2.addColumn('iam',20,JSColumn.NUMBER)
	$ds2.addColumn('tep',21,JSColumn.NUMBER)
	$ds2.addColumn('navm',22,JSColumn.NUMBER)
	$ds2.addColumn('pcr',23,JSColumn.NUMBER)
	
	$ds2.addColumn('intubado',24,JSColumn.NUMBER)
	$ds2.addColumn('exito',25,JSColumn.NUMBER)
	$ds2.addColumn('causa_fracaso',26,JSColumn.NUMBER)
	$ds2.addColumn('complicaciones',27,JSColumn.NUMBER)
	$ds2.addColumn('paliativos',28,JSColumn.NUMBER)
	$ds2.addColumn('fecha_paliativos',29,JSColumn.NUMBER)
	$ds2.addColumn('egreso_vivo_uci',30,JSColumn.NUMBER)
	$ds2.addColumn('fecha_egreso_uci',31,JSColumn.NUMBER)
	$ds2.addColumn('fecha_egreso_sanatorio',32,JSColumn.NUMBER)
	$ds2.addColumn('derivacion',33,JSColumn.NUMBER)
	
	
	$ds2.addColumn('vm_vni',34,JSColumn.NUMBER)
//	$ds2.addColumn('vm_exito',35,JSColumn.NUMBER)
//	
	if(asivm_fichakine.getSize()>0){
		
		var libVentMec= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.vm_liberado_vent_mec)
		var fechaFin= asivm_fichakine_cierre.fecha_fin
		var extubNoProg= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.vm_extub_no_programada)
		var extubAuto= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.vm_extub_auto)
		var extubOccidental= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.vm_extub_accidental)
		var extubFechaNoProg= utils.dateFormat(asivm_fichakine_cierre.vm_extub_fecha,'dd/MM/yyyy hh:mm aa')
		var extubReintubado= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.vm_extub_reintubado)
		
		
		var codCausaReintubado = asivm_fichakine_cierre.vm_extub_causa_reintubado.split(",");
		var extubCausaReintubado = "";
		for (var indiceCodCausaReintubado = 0; indiceCodCausaReintubado < codCausaReintubado.length; indiceCodCausaReintubado++) {
			extubCausaReintubado = application.getValueListDisplayValue('AsiVm_vl_causa_reintubacion',codCausaReintubado[indiceCodCausaReintubado])+ (extubCausaReintubado==''?extubCausaReintubado: ', '+ extubCausaReintubado);
		}
		
		
//		var extubCausaReintubado= application.getValueListDisplayValue('AsiVm_vl_causa_reintubacion',asivm_fichakine_cierre.vm_extub_causa_reintubado)
		var tqt= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.vm_tqt)
		var tqtFecha= utils.dateFormat(asivm_fichakine_cierre.vm_tqt_fecha,'dd/MM/yyyy hh:mm aa')
		var tqtDecanulacion= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.vm_tqt_decanulacion)
		var tqtFechaDecanulacion= utils.dateFormat(asivm_fichakine_cierre.vm_tqt_fecha_decanulacion,'dd/MM/yyyy hh:mm aa')
		

		var sdra= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.complicaciones_sdra)
		var pao2_fio2= asivm_fichakine_cierre.complicaciones_pao2_fio2
		var neumotorax= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.complicaciones_neumotorax)	
		var shock= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.complicaciones_shock)
	
		
		var intubado= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.intubado);
		var exito= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.exito);
		
		var delirium= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.complicaciones_delirium);
		var dauci= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.complicaciones_dauci);
		var dialisis= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.complicaciones_dialisis);
		var pafi= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.complicaciones_pafimenordos);
		var iam= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.complicaciones_iam);
		var tep= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.complicaciones_tep);
		var navm= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.complicaciones_navm);
		var pcr= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.complicaciones_pcr);
		
		var fecha_fin= asivm_fichakine_cierre.fecha_fin;
	
		var causa_fracaso = ''
		var complicaciones = ''
		if(globals.Asivm_prestacion==1){
//			 causa_fracaso= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.causa_fracaso);
//			 complicaciones= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.complicaciones);
			
		}else if(globals.Asivm_prestacion==2){
			 causa_fracaso= application.getValueListDisplayValue('AsiVm_vl_causa_fracasos_vni',asivm_fichakine_cierre.causa_fracaso);
			 complicaciones= application.getValueListDisplayValue('AsiVm_vl_complicaciones_vni',asivm_fichakine_cierre.complicaciones);
			
		}else{
			 causa_fracaso= application.getValueListDisplayValue('AsiVm_vl_causa_fracasos_caf',asivm_fichakine_cierre.causa_fracaso);
			 complicaciones= application.getValueListDisplayValue('AsiVm_vl_complicaciones_caf',asivm_fichakine_cierre.complicaciones);
			
		}
		var paliativos= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.paliativos);
		var paliativos_fecha= utils.dateFormat(asivm_fichakine_cierre.paliativos_fecha,'dd/MM/yyyy hh:mm aa')
		
		

//		asivm_fichakine_cierre.estado = 2 // Sin uso
		var egresoVivoUci= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.egreso_vivo_uci);
		var fechaEgresoUci= utils.dateFormat(asivm_fichakine_cierre.fecha_egreso_uci,'dd/MM/yyyy hh:mm aa')
		var fechaEgresoSanatorio= utils.dateFormat(asivm_fichakine_cierre.fecha_egreso_sanatorio,'dd/MM/yyyy hh:mm aa')
	
		
		
		var codDerivacion = asivm_fichakine_cierre.derivacion.split(",");
		var derivacion = "";
		for (var indiceCodAnalgesicos = 0; indiceCodAnalgesicos < codDerivacion.length; indiceCodAnalgesicos++) {
			derivacion = application.getValueListDisplayValue('AsiVm_vl_derivacion',codDerivacion[indiceCodAnalgesicos])+ (derivacion==''?derivacion: ', '+ derivacion);
		}
		
		
		var vm_vni= asivm_fichakine_cierre.vm_escenario_vni;
		
//		var vm_exito= application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_fichakine_cierre.vm_exito_vni);
		$ds2.addRow([
		libVentMec==null?"":libVentMec,
		extubNoProg==null?"":extubNoProg,
		extubAuto==null?"":extubAuto,
		extubOccidental==null?"":extubOccidental,
		extubFechaNoProg==null?"":extubFechaNoProg,
		extubReintubado==null?"":extubReintubado,
		extubCausaReintubado==null?"":extubCausaReintubado,
		tqt==null?"":tqt,
		tqtFecha==null?"":tqtFecha,
		tqtDecanulacion==null?"":tqtDecanulacion,
		tqtFechaDecanulacion==null?"":tqtFechaDecanulacion,
		sdra==null?"":sdra,
		pao2_fio2==null?"":pao2_fio2,
		neumotorax==null?"":neumotorax,
		shock==null?"":shock,
		correctionValue(delirium),
		correctionValue(dauci),
		correctionValue(dialisis),
		correctionValue(pafi),
		correctionValue(iam),
		correctionValue(tep),
		correctionValue(navm),
		correctionValue(pcr),
		intubado==null?"":intubado,
		exito==null?"":exito,
	
		causa_fracaso==null?"":causa_fracaso,
		complicaciones==null?"":complicaciones,
		paliativos==null?"":paliativos,
		paliativos_fecha==null?"":paliativos_fecha,
		egresoVivoUci==null?"":egresoVivoUci,
		fechaEgresoUci==null?"":fechaEgresoUci,
		fechaEgresoSanatorio==null?"":fechaEgresoSanatorio,
		derivacion==null?"":derivacion,
		correctionValue(vm_vni),
//		correctionValue(vm_exito)
		]);
		
//		asivm_fichakine_cierre.causa_fracaso = utils.stringReplace(f_causa_fracaso_vni,'\n',',') 
//		asivm_fichakine.complicaciones=utils.stringReplace(f_complicaciones_vni,'\n',',')
	
	
	}

			
}

/**
 * TODO generated, please specify type and doc for the params
 * @param $ds2
 *
 * @properties={typeid:24,uuid:"A380DBB7-CE9A-41EE-BFA5-6C1E4DFD3758"}
 */
function CreateDataVm($ds2) {
	$ds2.addColumn('frec_resp',1,JSColumn.NUMBER)
	$ds2.addColumn('fre_cardiaca',2,JSColumn.NUMBER)
	$ds2.addColumn('ten_art_max',3,JSColumn.TEXT)
	$ds2.addColumn('ten_art_min',4,JSColumn.TEXT)
	$ds2.addColumn('ten_art_med',5,JSColumn.NUMBER)
	$ds2.addColumn('temperatura',6,JSColumn.NUMBER)
	$ds2.addColumn('cpot',7,JSColumn.NUMBER)
	$ds2.addColumn('analgesicos',8,JSColumn.NUMBER)
	$ds2.addColumn('rass',9,JSColumn.NUMBER)
	$ds2.addColumn('sedacion',10,JSColumn.NUMBER)
	$ds2.addColumn('cam_icu',11,JSColumn.NUMBER)
	$ds2.addColumn('bloq_neurom',12,JSColumn.NUMBER)
	$ds2.addColumn('saturacion',13,JSColumn.NUMBER)
	$ds2.addColumn('disnea',14,JSColumn.NUMBER)
	$ds2.addColumn('mecanica',15,JSColumn.NUMBER)
	$ds2.addColumn('modo_ventilatorio',16,JSColumn.NUMBER)

	
	$ds2.addColumn('eab_ph',17,JSColumn.NUMBER)
	$ds2.addColumn('eab_po2',18,JSColumn.NUMBER)
	$ds2.addColumn('eab_pco2',19,JSColumn.NUMBER)
	$ds2.addColumn('eab_hco3',20,JSColumn.NUMBER)
	$ds2.addColumn('eab_pao2_fio2',21,JSColumn.NUMBER)
	
	// SETEO VM
	
//	$ds2.addColumn('modo_ventilatorio',17,JSColumn.NUMBER)
	$ds2.addColumn('vm_seteo_vol_corriente',22,JSColumn.NUMBER)
	$ds2.addColumn('vm_seteo_presion_insp',23,JSColumn.NUMBER)
	$ds2.addColumn('vm_seteo_frec_resp',24,JSColumn.NUMBER)
	$ds2.addColumn('vm_seteo_tiempo_insp',25,JSColumn.NUMBER)
	$ds2.addColumn('vm_seteo_pausa',26,JSColumn.NUMBER)
	$ds2.addColumn('vm_seteo_flujo',27,JSColumn.NUMBER)
	$ds2.addColumn('vm_seteo_fio2',28,JSColumn.NUMBER)
	$ds2.addColumn('vm_seteo_peep',29,JSColumn.NUMBER)
	
	
	
	//CNAF
	$ds2.addColumn('prog_frec_respiratoria',30,JSColumn.NUMBER)
//	$ds2.addColumn('prog_vol_corriente',23,JSColumn.NUMBER)
//	$ds2.addColumn('presion_inspiratoria',24,JSColumn.NUMBER)
//	$ds2.addColumn('prog_presion_soporte',25,JSColumn.NUMBER)
	$ds2.addColumn('prog_flujo',31,JSColumn.NUMBER)
//	$ds2.addColumn('prog_tiempo_inspiratorio',27,JSColumn.NUMBER)
	$ds2.addColumn('prog_fio2',32,JSColumn.NUMBER)
//	$ds2.addColumn('prog_peep',29,JSColumn.NUMBER)
	$ds2.addColumn('prog_equipo',33,JSColumn.NUMBER)
	$ds2.addColumn('prog_tam_canula',34,JSColumn.NUMBER)
	$ds2.addColumn('cnaf_spo2',35,JSColumn.NUMBER)
	$ds2.addColumn('cnaf_presencia_sec',36,JSColumn.NUMBER)
	$ds2.addColumn('cnaf_empleo_muscu',37,JSColumn.NUMBER)
	$ds2.addColumn('cnaf_indice_rox',38,JSColumn.NUMBER)
		
	
	//monitoreo
	$ds2.addColumn('moni_frec_res_total',39,JSColumn.NUMBER)
	$ds2.addColumn('moni_presion_pico',40,JSColumn.NUMBER)
	$ds2.addColumn('moni_presion_plateau',41,JSColumn.NUMBER)
	$ds2.addColumn('moni_presion_media',42,JSColumn.NUMBER)
	$ds2.addColumn('moni_peep_total',43,JSColumn.NUMBER)
	$ds2.addColumn('moni_delta_presion',44,JSColumn.NUMBER)
	$ds2.addColumn('moni_po1',45,JSColumn.NUMBER)
	$ds2.addColumn('moni_vol_corriente_exh',46,JSColumn.NUMBER)
	$ds2.addColumn('moni_compliance',47,JSColumn.NUMBER)
	$ds2.addColumn('moni_resistencia',48,JSColumn.NUMBER)
	$ds2.addColumn('moni_pmi',49,JSColumn.NUMBER)
	$ds2.addColumn('moni_presion_oclusion',50,JSColumn.NUMBER)

	
	$ds2.addColumn('varios_sat',51,JSColumn.NUMBER)
	$ds2.addColumn('varios_exito',52,JSColumn.NUMBER)
	$ds2.addColumn('varios_pre',53,JSColumn.NUMBER)
	$ds2.addColumn('varios_eot',54,JSColumn.NUMBER)
	$ds2.addColumn('varios_dialisis',55,JSColumn.NUMBER)
	$ds2.addColumn('varios_aspirado_traqueal',56,JSColumn.NUMBER)
	$ds2.addColumn('varios_balance_diario',57,JSColumn.NUMBER)
	$ds2.addColumn('varios_sofia_diario',58,JSColumn.NUMBER)
	
	//SETEO VNI
	$ds2.addColumn('seteo_vent',59,JSColumn.NUMBER)
	$ds2.addColumn('seteo_interfase',60,JSColumn.NUMBER)
	$ds2.addColumn('seteo_modo',61,JSColumn.NUMBER)
	$ds2.addColumn('seteo_presion_inspi',62,JSColumn.NUMBER)
	$ds2.addColumn('seteo_peep',63,JSColumn.NUMBER)
	$ds2.addColumn('seteo_frec_respi',64,JSColumn.NUMBER)
	$ds2.addColumn('seteo_tiempo_inspi',65,JSColumn.NUMBER)
	$ds2.addColumn('seteo_fio2',66,JSColumn.NUMBER)
	$ds2.addColumn('vni_volumen_corriente',67,JSColumn.NUMBER)
	$ds2.addColumn('observaciones',68,JSColumn.NUMBER)
	
	if(asivm_ficha_monitoreo.getSize()>0){ // si tiene epicris y la ficha no se cerro, no deberia aparecer como paciente en seguimiento.

				var codAnalgesicos = asivm_ficha_monitoreo_print.analgesicos.split(",");
		var analgesicos = "";
		for (var indiceCodAnalgesicos = 0; indiceCodAnalgesicos < codAnalgesicos.length; indiceCodAnalgesicos++) {
			
			analgesicos = application.getValueListDisplayValue('AsiVm_vl_analgésicos',codAnalgesicos[indiceCodAnalgesicos])+ (analgesicos==''?analgesicos: ', '+ analgesicos);
		}
		
		
		var codSedacion = asivm_ficha_monitoreo_print.sedacion.split(",");
		var sedacion = "";
		for (var indiceCodSedacion = 0; indiceCodSedacion < codSedacion.length; indiceCodSedacion++) {
			
			sedacion = application.getValueListDisplayValue('AsiVm_vl_sedación',codSedacion[indiceCodSedacion])+ (sedacion==''?sedacion: ', '+ sedacion);
		}
		
		var camIcu= application.getValueListDisplayValue('AsiVm_vl_cam_icu',asivm_ficha_monitoreo_print.cam_icu)
		var bloqNeurom = application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_ficha_monitoreo_print.bloqueantes_neuromsucualares)
		var modoVentilatorio = application.getValueListDisplayValue('AsiVm_vl_modo_ventilatorio',asivm_ficha_monitoreo_print.vm_modo_ventilatorio)
		
		
		//varios
		var sat = application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_ficha_monitoreo_print.vm_varios_sat)
		var pre = application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_ficha_monitoreo_print.vm_varios_pre)
		var exito = application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_ficha_monitoreo_print.vm_varios_exito)
		var eot = application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_ficha_monitoreo_print.vm_varios_eot)
		var dialisis = application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_ficha_monitoreo_print.vm_varios_dialisis)
		var aspiradoTraqueal = application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_ficha_monitoreo_print.vm_varios_aspirado_traqueal)
		var balanceDiario = asivm_ficha_monitoreo_print.vm_varios_balance_diario
		var sofaDiario = asivm_ficha_monitoreo_print.vm_sofa_diario
		
		var canula = application.getValueListDisplayValue('AsiVm_vl_programacion_tam_canula',asivm_ficha_monitoreo_print.caf_prog_tamanio_canula);
		var equipo = application.getValueListDisplayValue('AsiVm_vl_programacion_equipo',asivm_ficha_monitoreo_print.caf_prog_equipo);
		
		var presenciaSec = application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_ficha_monitoreo_print.cnaf_presen_secre);
		var empleoMuscu = application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_ficha_monitoreo_print.cnaf_empleo_muscu_accesorio);
//		$ds2.addColumn('cnaf_spo2',35,JSColumn.NUMBER)
//		$ds2.addColumn('cnaf_presencia_sec',36,JSColumn.NUMBER)
//		$ds2.addColumn('cnaf_empleo_muscu',37,JSColumn.NUMBER)
//		$ds2.addColumn('cnaf_indice_rox',38,JSColumn.NUMBER)
		var codMecanica = globals.IsBlank(asivm_ficha_monitoreo_print.mecanica)?"":asivm_ficha_monitoreo_print.mecanica.split(",");
		var mecanica = "";
		for (var indiceCodMecanica = 0; indiceCodMecanica < codMecanica.length; indiceCodMecanica++) {
			
			mecanica = application.getValueListDisplayValue('AsiVm_vl_mecanica',codMecanica[indiceCodMecanica])+ (mecanica==''?mecanica: ', '+ mecanica);
		}
		var disnea = application.getValueListDisplayValue("AsiVm_vl_disnea",asivm_ficha_monitoreo_print.disnea)

					var interfase = application.getValueListDisplayValue("AsiVm_vl_seteo_interfase",asivm_ficha_monitoreo_print.vni_seteo_interfase)
			var ventilador = application.getValueListDisplayValue("AsiVm_vl_seteo_ventilador",asivm_ficha_monitoreo_print.vni_seteo_ventilador)
					
		var modo = application.getValueListDisplayValue("AsiVm_vl_seteo_modo",asivm_ficha_monitoreo.vni_seteo_modo)
		$ds2.addRow([
		correctionValue(asivm_ficha_monitoreo.frecuencia_respiratoria),
		correctionValue(asivm_ficha_monitoreo.frecuencia_cardiaca),
		correctionValue(asivm_ficha_monitoreo.tension_arterial_sistolica),
		correctionValue(asivm_ficha_monitoreo.tension_arterial_diastolica),
		correctionValue(asivm_ficha_monitoreo.tesion_arterial_media),
		correctionValue(asivm_ficha_monitoreo.temperatura),
		correctionValue(asivm_ficha_monitoreo.cpot),
		correctionValue(analgesicos),
		correctionValue(asivm_ficha_monitoreo.rass),
		correctionValue(sedacion),
		correctionValue(camIcu),
		correctionValue(bloqNeurom),
		correctionValue(asivm_ficha_monitoreo.saturacion),
		correctionValue(disnea),
		correctionValue(mecanica),
		correctionValue(modoVentilatorio),
	
		
		correctionValue(asivm_ficha_monitoreo.eab_ph),
		correctionValue(asivm_ficha_monitoreo.eab_p02),
		correctionValue(asivm_ficha_monitoreo.eab_pc02),
		correctionValue(asivm_ficha_monitoreo.eab_hc03),
		correctionValue(asivm_ficha_monitoreo.eab_pa02_fi02),
	
		//SETEO VM
		correctionValue(asivm_ficha_monitoreo.vm_seteo_volumen_corriente),
		correctionValue(asivm_ficha_monitoreo.vm_seteo_presion_inspiratoria),
		correctionValue(asivm_ficha_monitoreo.vm_seteo_frec_respiratoria),
		correctionValue(asivm_ficha_monitoreo.vm_seteo_tiempo_inspiratorio),
		correctionValue(asivm_ficha_monitoreo.vm_seteo_pausa),
		correctionValue(asivm_ficha_monitoreo.vm_seteo_flujo),
		correctionValue(asivm_ficha_monitoreo.vm_seteo_fio2),
		correctionValue(asivm_ficha_monitoreo.vm_seteo_peep),
//		correctionValue(asivm_ficha_monitoreo.eab_pa02_fi02),
		//CNAF
		correctionValue(asivm_ficha_monitoreo.caf_prog_frec_respi),
//		correctionValue(asivm_ficha_monitoreo.progr_volumen_corriente),
//		correctionValue(asivm_ficha_monitoreo.progr_presion_inspiratoria),
//		correctionValue(asivm_ficha_monitoreo.progr_presion_soporte),
		correctionValue(asivm_ficha_monitoreo.caf_prog_flujo),
//		correctionValue(asivm_ficha_monitoreo.progr_tiempo_inspiratorio),
		correctionValue(asivm_ficha_monitoreo.caf_prog_fio2),
//		correctionValue(asivm_ficha_monitoreo.progr_peep),
		correctionValue(equipo),
		correctionValue(canula),
		correctionValue(asivm_ficha_monitoreo.cnaf_spo2),
		correctionValue(presenciaSec),
		correctionValue(empleoMuscu),
		correctionValue(asivm_ficha_monitoreo.cnaf_indice_rox),
		
		correctionValue(asivm_ficha_monitoreo.vm_monit_frec_respitoria_total),
		correctionValue(asivm_ficha_monitoreo.vm_monit_presion_pico),
		correctionValue(asivm_ficha_monitoreo.vm_monit_presion_plateau),
		correctionValue(asivm_ficha_monitoreo.vm_monit_presion_media),
		correctionValue(asivm_ficha_monitoreo.vm_monit_peep_total),
		correctionValue(asivm_ficha_monitoreo.vm_monit_delta_presion),
		correctionValue(asivm_ficha_monitoreo.vm_monit_p01),
		correctionValue(asivm_ficha_monitoreo.vm_monit_vol_corriente_exhalado),
		correctionValue(asivm_ficha_monitoreo.vm_monit_compliance),
		correctionValue(asivm_ficha_monitoreo.vm_monit_resistencia),
		correctionValue(asivm_ficha_monitoreo.vm_monit_pmi),
		correctionValue(asivm_ficha_monitoreo.vm_monit_presion_oclusion),
		correctionValue(sat),
		correctionValue(exito),
		correctionValue(pre),
		correctionValue(eot),
		correctionValue(dialisis),
		correctionValue(aspiradoTraqueal),
		correctionValue(balanceDiario),
		correctionValue(sofaDiario),
		//SETEO VNI
		correctionValue(ventilador),
		correctionValue(interfase),
		correctionValue(modo),
		correctionValue(asivm_ficha_monitoreo.vni_seteo_presion_inspiratoria),
		correctionValue(asivm_ficha_monitoreo.vni_seteo_peep),
		correctionValue(asivm_ficha_monitoreo.vni_seteo_frec_respiratoria),
		correctionValue(asivm_ficha_monitoreo.vni_seteo_tiempo_inspiratorio),
		correctionValue(asivm_ficha_monitoreo.vni_seteo_fio2),
		correctionValue(asivm_ficha_monitoreo.vni_seteo_volumen_corriente)
		//correctionValue(asivm_ficha_monitoreo.observaciones)
			])
		}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"8E80F351-763C-456B-84C5-C89502B1C286"}
 */
function correctionValue(value){
	return value==null?"":value;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param $ds2
 *
 * @properties={typeid:24,uuid:"E5D8179C-2B08-4008-8083-25A0724769B6"}
 */
function CreateDataVni($ds2) {
	
	
	$ds2.addColumn('frec_respiratoria',1,JSColumn.TEXT)
	$ds2.addColumn('fre_cardiaca',2,JSColumn.NUMBER)
	$ds2.addColumn('ten_art_max',3,JSColumn.TEXT)
	$ds2.addColumn('ten_art_min',4,JSColumn.TEXT)
	$ds2.addColumn('ten_art_med',5,JSColumn.NUMBER)
	$ds2.addColumn('saturacion',6,JSColumn.NUMBER)
	$ds2.addColumn('temperatura',7,JSColumn.NUMBER)
	$ds2.addColumn('mecanica',8,JSColumn.NUMBER)
	$ds2.addColumn('disnea',9,JSColumn.NUMBER)
	$ds2.addColumn('rass',10,JSColumn.NUMBER)
	$ds2.addColumn('eab_ph',11,JSColumn.NUMBER)
	$ds2.addColumn('eab_po2',12,JSColumn.NUMBER)
	$ds2.addColumn('eab_pco2',13,JSColumn.NUMBER)
	$ds2.addColumn('eab_hco3',14,JSColumn.NUMBER)
	$ds2.addColumn('eab_pao2_fio2',15,JSColumn.NUMBER)
	$ds2.addColumn('prog_ventilador',16,JSColumn.NUMBER)
	$ds2.addColumn('prog_interfase',17,JSColumn.NUMBER)
	$ds2.addColumn('prog_modo',18,JSColumn.NUMBER)
	$ds2.addColumn('prog_presion_inspi',19,JSColumn.NUMBER)
	$ds2.addColumn('prog_peep',20,JSColumn.NUMBER)
	$ds2.addColumn('prog_frec_respi',21,JSColumn.NUMBER)
	$ds2.addColumn('prog_tiempo_inspi',22,JSColumn.NUMBER)
	$ds2.addColumn('prog_fio2',23,JSColumn.NUMBER)
	if(asivm_ficha_monitoreo.getSize()>0){ // si tiene epicris y la ficha no se cerro, no deberia aparecer como paciente en seguimiento.

		
var codMecanica = globals.IsBlank(asivm_ficha_monitoreo_print.mecanica)?"":asivm_ficha_monitoreo_print.mecanica.split(",");
var mecanica = "";
for (var indiceCodMecanica = 0; indiceCodMecanica < codMecanica.length; indiceCodMecanica++) {
	
	mecanica = application.getValueListDisplayValue('AsiVm_vl_mecanica',codMecanica[indiceCodMecanica])+ (mecanica==''?mecanica: ', '+ sedacion);
}
var disnea = application.getValueListDisplayValue("AsiVm_vl_disnea",asivm_ficha_monitoreo_print.disnea)

			var interfase = application.getValueListDisplayValue("AsiVm_vl_seteo_interfase",asivm_ficha_monitoreo_print.vni_seteo_interfase)
			$ds2.addRow([asivm_ficha_monitoreo.frecuencia_respiratoria,
			asivm_ficha_monitoreo.frecuencia_cardiaca,
			asivm_ficha_monitoreo.tension_arterial_sistolica,
			asivm_ficha_monitoreo.tension_arterial_diastolica,
			asivm_ficha_monitoreo.tesion_arterial_media,
			asivm_ficha_monitoreo.saturacion,
			asivm_ficha_monitoreo.temperatura,
			mecanica,
			disnea,
			asivm_ficha_monitoreo.rass,
			//eab
			asivm_ficha_monitoreo.eab_ph,
			asivm_ficha_monitoreo.eab_p02,
			asivm_ficha_monitoreo.eab_pc02,
			asivm_ficha_monitoreo.eab_hc03,
			asivm_ficha_monitoreo.eab_pa02_fi02,
			
			//seteo.
			asivm_ficha_monitoreo.vni_seteo_ventilador,
			interfase,
			asivm_ficha_monitoreo.vni_seteo_modo,
			asivm_ficha_monitoreo.vni_seteo_presion_inspiratoria,
			asivm_ficha_monitoreo.vni_seteo_peep,
			asivm_ficha_monitoreo.vni_seteo_frec_respiratoria,
			asivm_ficha_monitoreo.vni_seteo_tiempo_inspiratorio,
			asivm_ficha_monitoreo.vni_seteo_fio2
			
			])
		}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param $ds2
 *
 * @properties={typeid:24,uuid:"02C9FDB1-570C-46DF-BB15-44D2EEC76A38"}
 */
function CreateDataCaf($ds2) {
	$ds2.addColumn('frec_respiratoria',1,JSColumn.TEXT)
	$ds2.addColumn('ten_art_max',2,JSColumn.TEXT)
	$ds2.addColumn('ten_art_min',3,JSColumn.TEXT)
	$ds2.addColumn('ten_art_med',4,JSColumn.NUMBER)
	$ds2.addColumn('fre_cardiaca',5,JSColumn.NUMBER)
	$ds2.addColumn('saturacion',6,JSColumn.NUMBER)
	$ds2.addColumn('temperatura',7,JSColumn.NUMBER)
	$ds2.addColumn('rass',8,JSColumn.NUMBER)
	$ds2.addColumn('disnea',9,JSColumn.NUMBER)
	$ds2.addColumn('mecanica',10,JSColumn.NUMBER)
	$ds2.addColumn('eab_ph',11,JSColumn.NUMBER)
	$ds2.addColumn('eab_po2',12,JSColumn.NUMBER)
	$ds2.addColumn('eab_pco2',13,JSColumn.NUMBER)
	$ds2.addColumn('eab_hco3',14,JSColumn.NUMBER)
	$ds2.addColumn('eab_pao2_fio2',15,JSColumn.NUMBER)
	$ds2.addColumn('prog_equipo',16,JSColumn.NUMBER)
	$ds2.addColumn('prog_tam_canula',17,JSColumn.NUMBER)
	$ds2.addColumn('prog_fio2',18,JSColumn.NUMBER)
	$ds2.addColumn('prog_flujo',19,JSColumn.NUMBER)
	if(asivm_ficha_monitoreo.getSize()>0){ // si tiene epicris y la ficha no se cerro, no deberia aparecer como paciente en seguimiento.

		
	var equipo = application.getValueListDisplayValue('AsiVm_vl_programacion_equipo',asivm_ficha_monitoreo_print.caf_prog_equipo);
	var canula = application.getValueListDisplayValue('AsiVm_vl_programacion_tam_canula',asivm_ficha_monitoreo_print.caf_prog_tamanio_canula);


			$ds2.addRow([asivm_ficha_monitoreo.frecuencia_respiratoria,
			asivm_ficha_monitoreo.tension_arterial_sistolica,
			asivm_ficha_monitoreo.tension_arterial_diastolica,
			asivm_ficha_monitoreo.tesion_arterial_media,
			asivm_ficha_monitoreo.frecuencia_cardiaca,
			asivm_ficha_monitoreo.saturacion,
			asivm_ficha_monitoreo.temperatura,
			asivm_ficha_monitoreo.rass,
			asivm_ficha_monitoreo.disnea,
			asivm_ficha_monitoreo.mecanica,
			asivm_ficha_monitoreo.eab_ph,
			asivm_ficha_monitoreo.eab_p02,
			asivm_ficha_monitoreo.eab_pc02,
			asivm_ficha_monitoreo.eab_hc03,
			asivm_ficha_monitoreo.eab_pa02_fi02,
			equipo,
			canula,
			asivm_ficha_monitoreo.progr_fi02,
			asivm_ficha_monitoreo.progr_flujo
			
			])
		}
}
/**
 * @properties={typeid:24,uuid:"F43D6341-7B00-405E-AEDC-83E4B9BD5E14"}
 */
function imprimirVm(histClin,dateFile,fileType){ //fileType 1: ficha de ingreso, 2: ficha  de monitoreo
	
		limpiarForm();
//		scopes.globals.AsiVm_fecha_Ficha = dateFile
		//Variables globales para la relacion 
//		globals.AsiVm_histClinAsist = histClin;
		globals.AsiVm_histClinPrint = histClin;
		scopes.globals.AsiVm_hisclin_monitoreo_print = histClin
		var relacionPrint = asivm_rel_buscar_fichavm_print
		if(fileType==2){
			globals.AsiVm_fechaPrint = asivm_fichakine.fecha; //datos de ficha inicio
			scopes.globals.AsiVm_fecha_monitoreo_print= dateFile //para monotoreo
			globals.Asivm_prestacion = asivm_fichakine.prestacion

		}else if(fileType==1){
			globals.AsiVm_fechaPrint = dateFile;
		}
		else if(fileType==4){
			globals.AsiVm_fechaPrint = dateFile;
			relacionPrint = asivm_rel_buscar_fichacierrevm_print
		}
		
		if(relacionPrint.getSize() > 0 || relacionPrint.getSize()==1){
			
			globals.AsiVm_obrCodigo = asivm_numero_to_asistencial_admision.adm_obrsoc;
			globals.AsiVm_hcUnicaPrint = asivm_numero_to_asistencial_admision.adm_histclinuni;

			var medico = "Confeccionada por ";
			var matricula = "";
			
			if(globals.Srv_Login_Sanatorio_vTipoOperador == 0){
				
				globals.AsiVm_perLegajoPrint = globals.Srv_Login_Sanatorio_vLega;
				if(asivm_rel_buscar_personal_print.per_sexo == 'M'){
					medico += "el Dr. ";
					f_medicoNombre = "Dr. ";
				}
				else{
					medico += "la Dra. ";
					f_medicoNombre = "Dra. ";
				}
				medico += utils.stringTrim(asivm_rel_buscar_personal_print.per_apelnom);
				matricula = asivm_rel_buscar_personal_print.per_codmatri;
				f_medicoNombre += utils.stringTrim(asivm_rel_buscar_personal_print.per_apelnom);
			}
			
			if(globals.Srv_Login_Sanatorio_vTipoOperador== 1){
				globals.AsiVm_medCodigoPrint =  globals.Srv_Login_Sanatorio_vLega;
				medico += "el Dr. " + utils.stringTrim(asivm_rel_buscar_medico_print.med_apenom);
				matricula = asivm_rel_buscar_medico_print.med_matricula;
				f_medicoNombre = "Dr. " + utils.stringTrim(asivm_rel_buscar_medico_print.med_apenom);
			}
			
			var date = new Date();
				date = dateFile;
			medico += " el " + globals.getDayName(date,true) + " " + date.getDate() + " " + globals.getMonthName(date,true) + " / " + date.getFullYear() + " a las " + date.getHours() + " hrs.";
			
			var sexo = "";
			if(asivm_numero_to_asistencial_admision.adm_sexo == 1){
				sexo = "Femenino"; 
			}
			else{
				if(asivm_numero_to_asistencial_admision.adm_sexo == 2)
					sexo = "Masculino";	
			}
			
//			if(fileType!=3){
				// cargar Header
				f_fechaImpresion = application.getServerTimeStamp();
				f_medico = medico;
				f_matricula = matricula;
				f_sexo = sexo; 
				if(asivm_numero_to_asistencial_admision.getSize()>0){//no deberia venir nulo.
					f_edad = globals.CalculoEdad(asivm_numero_to_asistencial_admision.adm_fecnac) + ' ' +  globals.vTipoEdad;;
					f_apelnom =  formatearHistclin(asivm_numero_to_asistencial_admision.adm_histclin) + "  " + utils.stringTrim(asivm_numero_to_asistencial_admision.adm_apelnom); 
					f_histclinunica = asivm_numero_to_asistencial_admision.adm_histclinuni;
					f_habitacion = asivm_numero_to_asistencial_admision.adm_habita;
					f_cama = asivm_numero_to_asistencial_admision.adm_cama;
//					f_cobertura = utils.stringTrim(asivm_rel_buscar_obrasocial.obr_razonsoc) + ' (' +asivm_rel_buscar_obrasocial.obr_codigo + ')'; 
//					f_histClinIngreso = asivm_rel_tbc_hist_cab_new.histcabnrounico;
				}
				
//				if(asivm_rel_buscar_guardia.getSize() > 0){
//					
//					var fechaIngreso = globals.IntegerToDate(asivm_rel_buscar_guardia.guar_fechaingreso);
//					f_ingreso = globals.getDayName(fechaIngreso,true) + " " + fechaIngreso.getDate() + " " + globals.getMonthName(fechaIngreso,true) + " / " + fechaIngreso.getFullYear() + " " + convertNumberToHour_HHMM(asivm_rel_buscar_guardia.guar_horaingreso) + " hrs.";
//					
//					var fechaEgreso = globals.IntegerToDate(asivm_rel_buscar_guardia.guar_fechaalta);
//					f_egreso = globals.getDayName(fechaEgreso,true) + " " + fechaEgreso.getDate() + " " + globals.getMonthName(fechaEgreso,true) + " / " + fechaEgreso.getFullYear() + " " + convertNumberToHour_HHMM(asivm_rel_buscar_guardia.guar_horaalta) + " hrs.";
//					
//				}
//			}


//			cargarBody(fileType);
//			imprimir(fileType);

			 $ds2 = databaseManager.createEmptyDataSet()
			 var fileName = ''
			 var rp_name = ''
//			if(globals.Asivm_prestacion==3){
//				CreateDataCaf($ds2)
//				fileName = 'MONITOREO-KINE_CAF'
//				rp_name = 'rp_monitoreo_caf.jasper'
		//
		
			 var $params ={}
		if(4==fileType){
			CreateDataCierreFicha($ds2)
			fileName = 'MONITOREO-KINE_VM'
			rp_name = 'rp_cierre_ficha.jasper'
				
			$params = {
				param_paciente: f_apelnom,
				param_habitacion: f_habitacion,
				param_edad: f_edad,
				param_sexo: f_sexo,
				param_cama: f_cama,
				param_hcu:f_histclinunica,
				param_fecha_fin_ventilacion : asivm_fichakine.fecha_fin_ventilacion,
				param_fecha_creacion_ficha : asivm_fichakine.fecha
				
			}
		}else{
			CreateDataVm($ds2)
				fileName = 'MONITOREO'
				rp_name = 'rp_monitoreo.jasper'
					$params = {
				param_paciente: f_apelnom,
				param_habitacion: f_habitacion,
				param_edad: f_edad,
				param_sexo: f_sexo,
				param_cama: f_cama,
				param_hcu:f_histclinunica,
				param_fecha_monitoreo : asivm_ficha_monitoreo.fecha
				
				
			}
		}
//			}
//			else if(globals.Asivm_prestacion==2){
//				CreateDataVni($ds2)
//				fileName = 'MONITOREO-KINE_VNI'
//				rp_name = 'rp_monitoreo_vni.jasper'
//			}else{
				
				
//			}
		
	
			var fecha_reporte = utils.dateFormat(application.getTimeStamp(),'dd-MM-yyyy')
//			var $arch = plugins.file.showFileSaveDialog((fileName+"_"+fecha_reporte+'.pdf'))
//			if($arch){
				plugins.jasperPluginRMI.runReport($ds2,rp_name,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
//				//	elements.lbl_procesando2.visible = false
//					var $OS = application.getOSName();
//				if (/Windows/.test($OS)) {
//				    application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);	      
//			    } else if (/Linux|Freebsd/.test($OS)) {
//			       application.executeProgram('xdg-open', $arch);
//			    } else if (/Mac/.test($OS)) {
//			       application.executeProgram('open', $arch);
//			    }
//			}
//			else{
//				//application.output("return 8")
//				return
//			}


			
		}
		else{
			globals.DIALOGS.showWarningDialog("Atención!","No hay datos para imprimir.","Aceptar")
		}
	
}

/**
 * @properties={typeid:24,uuid:"421F01C9-AB01-4C2E-A998-E3E4A697CE68"}
 */
function reporteFichaCierre(){
	
	var diasVM = asivm_rel_buscar_fichavm_print.fecha_inicio==null?0:(Math.floor((f_fechaImpresion.getTime() - asivm_rel_buscar_fichavm_print.fecha_inicio.getTime()) / (1000 * 3600 * 24)));

	setTitlePrint("DATOS DE FICHA CIERRE")
	
	if(asivm_rel_buscar_fichavm_print.prestacion==1){
		var html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de ventilación mecánica invasiva: '+ diasVM +'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);
		html_monitoreo+= html
	
		
		setTitlePrint("WEANING");
		
		setTextoPrintDate('Fecha de cierre',asivm_rel_buscar_fichavm_print.fecha_fin)
		
		// weaning
		if(asivm_rel_buscar_fichavm_print.vm_liberado_vent_mec!=0){
				
				html = ''
				html += '<html><body>'
				html += '<table width="1024">'
				html += '<tr>'
				html += '<td width="40%"><b>Liberado ventilacion mécanica: '+ (application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_rel_buscar_fichavm_print.vm_liberado_vent_mec))+'</b></td>'
				html += '</tr>'
				html += '</table>'
				html += '</body></html>'
				dsAux.addRow([html]);;
				html_monitoreo+= html
				
		}
		setTitlePrint("EXTUBACIÓN");
		//extubación
		setTextoPrintValueList('Extubación no programada',asivm_rel_buscar_fichavm_print.vm_extub_no_programada,'AsiVm_vl_SINO');
		setTextoPrintValueList('Auto extubación',asivm_rel_buscar_fichavm_print.vm_extub_auto,'AsiVm_vl_SINO');	
		setTextoPrintValueList('extubación accedental',asivm_rel_buscar_fichavm_print.vm_extub_accidental,'AsiVm_vl_SINO');
		setTextoPrintDate('Fecha de extubación no programada',asivm_rel_buscar_fichavm_print.vm_extub_fecha_no_progr);
		setTextoPrintValueList('Reintubado',asivm_rel_buscar_fichavm_print.vm_extub_reintubado,'AsiVm_vl_SINO');
		setTextoPrintMultiList('Causa de reintubación',asivm_rel_buscar_fichavm_print.vm_extub_causa_reintubado,'AsiVm_vl_causa_reintubacion');
		
		setTitlePrint("TQT");
		setTextoPrintValueList('TQT',asivm_rel_buscar_fichavm_print.vm_tqt,'AsiVm_vl_SINO');
		setTextoPrintDate('Fecha de TQT',asivm_rel_buscar_fichavm_print.vm_tqt_fecha);
		setTextoPrintValueList('Decanulación',asivm_rel_buscar_fichavm_print.vm_tqt_decanulacion,'AsiVm_vl_SINO');
		setTextoPrintDate('Fecha de decanulación',asivm_rel_buscar_fichavm_print.vm_tqt_fecha_decanulacion);

		setTitlePrint("COMPLICACIONES");
		setTextoPrintValueList('SDRA',asivm_rel_buscar_fichavm_print.complicaciones_sdra,'AsiVm_vl_SINO');
		setTextoPrint('PaO2/Fio2 de diagnóstico',asivm_rel_buscar_fichavm_print.complicaciones_pao2_fio2.toString());
		setTextoPrintValueList('Neumotórax',asivm_rel_buscar_fichavm_print.complicaciones_neumotorax,'AsiVm_vl_SINO');
		setTextoPrintValueList('Shock',asivm_rel_buscar_fichavm_print.complicaciones_shock,'AsiVm_vl_SINO');
	}
	
	
	if(asivm_rel_buscar_fichavm_print.prestacion==2){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de ventilación no invasiva: '+ diasVM+'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);;
		html_monitoreo+= html
		
		setTextoPrintDate('Fecha de cierre',asivm_rel_buscar_fichavm_print.fecha_fin)
		
		setTextoPrintValueList('Intubado',asivm_rel_buscar_fichavm_print.intubado,'AsiVm_vl_SINO');
		setTextoPrintValueList('Éxito de vni',asivm_rel_buscar_fichavm_print.exito,'AsiVm_vl_SINO');
		setTextoPrintMultiList('Causa de fracaso',asivm_rel_buscar_fichavm_print.causa_fracaso,'AsiVm_vl_causa_fracasos_vni');
		setTextoPrintMultiList("Complicaciones",asivm_rel_buscar_fichavm_print.complicaciones,'AsiVm_vl_complicaciones_vni');
	}

	if(asivm_rel_buscar_fichavm_print.prestacion==3){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de caf: '+ diasVM+'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);;
		html_monitoreo+= html
		
		setTextoPrintDate('Fecha de cierre',asivm_rel_buscar_fichavm_print.fecha_fin)
		
		setTextoPrintValueList('Intubado',asivm_rel_buscar_fichavm_print.intubado,'AsiVm_vl_SINO');
		setTextoPrintValueList('Éxito de caf',asivm_rel_buscar_fichavm_print.exito,'AsiVm_vl_SINO');
		setTextoPrintMultiList('Causa de fracaso',asivm_rel_buscar_fichavm_print.causa_fracaso,'AsiVm_vl_causa_fracasos_caf');
		setTextoPrintMultiList("Complicaciones",asivm_rel_buscar_fichavm_print.complicaciones,'AsiVm_vl_complicaciones_caf');
	}
	
	//campos comunes
	setTitlePrint("PALIATIVOS");
	setTextoPrintValueList('Paliativos',asivm_rel_buscar_fichavm_print.paliativos,'AsiVm_vl_SINO');
	setTextoPrintDate('Fecha de paliativos',asivm_rel_buscar_fichavm_print.paliativos_fecha);

	//datos de cierre final
	setTitlePrint("Datos finales de Cierre");
	setTextoPrintValueList('Egreso Vivo de UCI',asivm_rel_buscar_fichavm_print.egreso_vivo_uci,'AsiVm_vl_SINO');
	setTextoPrintDate('Fecha de egreso de UCI',asivm_rel_buscar_fichavm_print.fecha_egreso_uci);
	setTextoPrintDate('Fecha de egreso de Sanatorio',asivm_rel_buscar_fichavm_print.fecha_egreso_sanatorio);
	setTextoPrintMultiList('Derivación',asivm_rel_buscar_fichavm_print.derivacion,'AsiVm_vl_derivacion')
	

}

/**
 * @properties={typeid:24,uuid:"A58263DF-C3B9-42B5-ADCC-6854ECE74488"}
 */
function reporteFicha(){
	var html = ''
	html_monitoreo=''
	var hora = convertNumberToHour_HHMM(asivm_numero_to_tbc_admision.adm_horing);
	var horaAux = hora.split(':')
	var fechaDesde = globals.IntegerToDate(asivm_numero_to_tbc_admision.adm_fecing);
	fechaDesde.setHours(Number(horaAux[0]), Number(horaAux[1]));
	
	var dias = contar_dias(fechaDesde, f_fechaImpresion);
	
	setTitlePrint("DATOS DE FICHA INICIAL")

	
//	// Ingreso a UCI
	var fechaIngresoUCi = utils.dateFormat(asivm_rel_buscar_fichavm_print.fecha_ingreso_uci,'dd/MM/yyyy hh:mm aa')
	var diasVM = asivm_rel_buscar_fichavm_print.fecha_inicio==null?0:(Math.floor((f_fechaImpresion.getTime() - asivm_rel_buscar_fichavm_print.fecha_inicio.getTime()) / (1000 * 3600 * 24)));

	
	if(!globals.IsBlank(fechaIngresoUCi)){
		setTextoPrint("Ingreso UCI", fechaIngresoUCi)
		
	}
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>Días de internación en el sanatorio: '+ dias +'</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);;
	html_monitoreo+= html
	
	
	if(asivm_rel_buscar_fichavm_print.prestacion==1){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de ventilación mecánica invasiva: '+ diasVM +'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);;
		html_monitoreo+= html
	}
	
	if(asivm_rel_buscar_fichavm_print.prestacion==2){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de ventilación no invasiva: '+ diasVM+'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);;
		html_monitoreo+= html
		
	}

	
	if(asivm_rel_buscar_fichavm_print.prestacion==3){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de caf: '+ diasVM+'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);;
		html_monitoreo+= html
	}
	
	
	
	if(!globals.IsBlank(asivm_rel_buscar_fichavm_print.prestacion.toString())){
		setTextoPrint("Prestación", application.getValueListDisplayValue('AsiVm_vl_prestaciones',asivm_rel_buscar_fichavm_print.prestacion))
		setTextoPrint("Observaciones", asivm_rel_buscar_fichavm_print.observaciones)
		setTextoPrint("Altura", asivm_rel_buscar_fichavm_print.altura)
		setTextoPrint("Peso corporal predicho", asivm_rel_buscar_fichavm_print.peso_corporal_predicho)
		setTextoPrint("Peso Estimado", asivm_rel_buscar_fichavm_print.peso_estimado)
		setTextoPrint("Diagnostico", asivm_rel_buscar_fichavm_print.diagnostico)
		
		setTextoPrint("SAPS II", asivm_rel_buscar_fichavm_print.sap2)
		var codMotivos = asivm_rel_buscar_fichavm_print.motivo.split(",");
		var codAntecedentes = asivm_rel_buscar_fichavm_print.antecedentes.split(",");
		var antecedentes = ''
		var motivos = '';
		for (var j = 0; j < codAntecedentes.length; j++) {
			antecedentes=application.getValueListDisplayValue('AsiVm_vl_antecedentes',codAntecedentes[j]) + ((antecedentes=='')?'': ', '+antecedentes);
		}
		for (var index = 0; index < codMotivos.length; index++) {
			switch (asivm_rel_buscar_fichavm_print.prestacion) {
			case 1:
			motivos=application.getValueListDisplayValue('AsiVm_vl_motivo_vm',codMotivos[index])+((motivos=='')?'': ', '+motivos)
				break;
			case 2:
			motivos=application.getValueListDisplayValue('AsiVm_vl_motivo_vni',codMotivos[index]) + ((motivos=='')?'': ', '+motivos)
			break;
		
			case 3:
			motivos=application.getValueListDisplayValue('AsiVm_vl_motivo_caf',codMotivos[index]) + ((motivos=='')?'': ', '+motivos) 
			break;
		
			}
			
		}
		setTextoPrint("Motivo", motivos)
		setTextoPrint("Antecedentes", antecedentes)
		
	}else{
		setTextoPrint("Observaciones", asivm_rel_buscar_fichavm_print.observaciones)
	}
	
	
	switch (asivm_rel_buscar_fichavm_print.prestacion) {
	case 1:
	setTextoPrint("Inicio VM", utils.dateFormat(asivm_rel_buscar_fichavm_print.fecha_inicio,'dd/MM/yyyy hh:mm aa'))
		break;
	
	case 2:
	setTextoPrint("Inicio VNI", utils.dateFormat(asivm_rel_buscar_fichavm_print.fecha_inicio,'dd/MM/yyyy hh:mm aa'))
	break;
	
	case 3:
	setTextoPrint("Inicio CAF", utils.dateFormat(asivm_rel_buscar_fichavm_print.fecha_inicio,'dd/MM/yyyy hh:mm aa'))
	break;

	}	
}

/**
 * @properties={typeid:24,uuid:"216A212C-DC06-4186-933E-0E8A46421D22"}
 */
function reporteFichaMonitoreo(){
	autogenerate=0;
	var html = ''
	setTitlePrint("DATOS DE FICHA MONITOREO");
	
	var hora = convertNumberToHour_HHMM(asivm_numero_to_tbc_admision.adm_horing);
	var horaAux = hora.split(':')
	var fechaDesde = globals.IntegerToDate(asivm_numero_to_tbc_admision.adm_fecing);
	fechaDesde.setHours(Number(horaAux[0]), Number(horaAux[1]));
	
	var dias = contar_dias(fechaDesde, f_fechaImpresion);
	
	
	// Ingreso a UCI
	var fechaIngresoUCi = utils.dateFormat(asivm_rel_buscar_fichavm_print.fecha_ingreso_uci,'dd/MM/yyyy hh:mm aa')
	var diasVM = Math.floor((f_fechaImpresion.getTime() - asivm_rel_buscar_fichavm_print.fecha_inicio.getTime()) / (1000 * 3600 * 24));

	if(!globals.IsBlank(fechaIngresoUCi)){
		setTextoPrint("Ingreso UCI", fechaIngresoUCi)
		
	}
//	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>FECHA MONITOREO: '+ utils.dateFormat(asivm_ficha_monitoreo_print.fecha,'dd/MM/yyyy hh:mm aa') + '</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	html_monitoreo+= html
	
	html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b>Días de internación en el sanatorio: '+ dias +'</b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);
	html_monitoreo+= html
	
	if(asivm_rel_buscar_fichavm_print.prestacion==1){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de ventilación mecánica invasiva: '+ diasVM +'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);;
		html_monitoreo+= html
	}
	
	if(asivm_rel_buscar_fichavm_print.prestacion==2){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de ventilación no invasiva: '+ diasVM+'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);;
		html_monitoreo+= html
		
	}

	if(asivm_rel_buscar_fichavm_print.prestacion==3){
		html = ''
		html += '<html><body>'
		html += '<table width="1024">'
		html += '<tr>'
		html += '<td width="40%"><b>Días de caf: '+ diasVM+'</b></td>'
		html += '</tr>'
		html += '</table>'
		html += '</body></html>'
		dsAux.addRow([html]);;
		html_monitoreo+= html
	}
	
	setTitlePrint("ESTADO GENERAL");
	
	setTextoPrint("Frecuencia Cardíaca", asivm_ficha_monitoreo_print.frecuencia_cardiaca)
	setTextoPrint("Tensión Arterial Sistólica", asivm_ficha_monitoreo_print.tension_arterial_sistolica)
	setTextoPrint("Tensión Arterial Diastólica", asivm_ficha_monitoreo_print.tension_arterial_diastolica)
	setTextoPrint("Tensión Arterial Media", asivm_ficha_monitoreo_print.tesion_arterial_media)
	setTextoPrint("Temperatura", asivm_ficha_monitoreo_print.temperatura)
	setTextoPrint("RASS", asivm_ficha_monitoreo_print.rass)
	
	
	switch (globals.Asivm_prestacion) {
	case 1:
		setTextoPrint("CPOT",asivm_ficha_monitoreo_print.cpot)
		var codAnalgesicos = asivm_ficha_monitoreo_print.analgesicos.split(",");
		var analgesicos = "";
		for (var indiceCodAnalgesicos = 0; indiceCodAnalgesicos < codAnalgesicos.length; indiceCodAnalgesicos++) {
			
			analgesicos = application.getValueListDisplayValue('AsiVm_vl_analgésicos',codAnalgesicos[indiceCodAnalgesicos])+ (analgesicos==''?analgesicos: ', '+ analgesicos);
		}
		setTextoPrint("Analgésicos",analgesicos);
		
		var codSedacion = asivm_ficha_monitoreo_print.analgesicos.split(",");
		var sedacion = "";
		for (var indiceCodSedacion = 0; indiceCodSedacion < codSedacion.length; indiceCodSedacion++) {
			
			sedacion = application.getValueListDisplayValue('AsiVm_vl_sedación',codSedacion[indiceCodSedacion])+ (sedacion==''?sedacion: ', '+ sedacion);
		}
		
		setTextoPrint("Sedación",sedacion)
		setTextoPrint("CAM-ICU",application.getValueListDisplayValue('AsiVm_vl_cam_icu',asivm_ficha_monitoreo_print.cam_icu))
		setTextoPrint("Bloqueantes Neuromsuculares",application.getValueListDisplayValue('AsiVm_vl_SINO',asivm_ficha_monitoreo_print.bloqueantes_neuromsucualares))
		setTextoPrint("Modo Ventilatirio",application.getValueListDisplayValue('AsiVm_vl_modo_ventilatorio',asivm_ficha_monitoreo_print.vm_modo_ventilatorio))
		setTitlePrint("PROGRAMACIÓN");
		setTextoPrint("Frecuencia respitoria",asivm_ficha_monitoreo_print.progr_frec_respira)
		setTextoPrint("Volumen corriente",asivm_ficha_monitoreo_print.progr_volumen_corriente)
		setTextoPrint("Presión inspiratoria",asivm_ficha_monitoreo_print.progr_presion_inspiratoria)
		setTextoPrint("Presión soporte",asivm_ficha_monitoreo_print.progr_presion_soporte)
		setTextoPrint("Flujo",asivm_ficha_monitoreo_print.progr_flujo)
		setTextoPrint("Tiempo inspiratorio",asivm_ficha_monitoreo_print.progr_tiempo_inspiratorio)
		setTextoPrint("FiO2",asivm_ficha_monitoreo_print.progr_fi02)
		setTextoPrint("PEEP",asivm_ficha_monitoreo_print.progr_peep)
		
		setTitlePrint("mONITOREO");
		setTextoPrint("Frecuencia respiratoria total",asivm_ficha_monitoreo_print.vm_monit_frec_respitoria_total)
		setTextoPrint("Presión Pico",asivm_ficha_monitoreo_print.vm_monit_presion_pico)
		setTextoPrint("PresiónPlateau",asivm_ficha_monitoreo_print.vm_monit_presion_plateau)
		setTextoPrint("Presión Media",asivm_ficha_monitoreo_print.vm_monit_presion_media)
		setTextoPrint("PEEP total",asivm_ficha_monitoreo_print.vm_monit_peep_total)
		setTextoPrint("Delta Presion",asivm_ficha_monitoreo_print.vm_monit_delta_presion)
		setTextoPrint("P 0.1",asivm_ficha_monitoreo_print.vm_monit_p01)
		setTextoPrint("Volumen corriente exhalado",asivm_ficha_monitoreo_print.vm_monit_vol_corriente_exhalado)
		setTextoPrint("Compliance",asivm_ficha_monitoreo_print.vm_monit_compliance)
		setTextoPrint("Resistencia",asivm_ficha_monitoreo_print.vm_monit_resistencia)
		setTextoPrint("PMI",asivm_ficha_monitoreo_print.vm_monit_pmi)
		setTextoPrint("Presión de oclusión",asivm_ficha_monitoreo_print.vm_monit_presion_oclusion)

		setTitlePrint("Varios");
		setTextoPrint("SAT",asivm_ficha_monitoreo_print.vm_varios_sat)
		setTextoPrint("Éxito",asivm_ficha_monitoreo_print.vm_varios_exito)
		setTextoPrint("PRE",asivm_ficha_monitoreo_print.vm_varios_pre)
		setTextoPrint("EOT",asivm_ficha_monitoreo_print.vm_varios_eot)
		setTextoPrint("Diálisis",asivm_ficha_monitoreo_print.vm_varios_dialisis)
		setTextoPrint("Aspirado Traqueal",asivm_ficha_monitoreo_print.vm_varios_aspirado_traqueal)
		setTextoPrint("Balance diario",asivm_ficha_monitoreo_print.vm_varios_balance_diario)
		setTextoPrint("SOFA diario",asivm_ficha_monitoreo_print.vm_varios_sat)
		break;
	case 3:
	case 2:
		setTextoPrint("Frecuencia Respiratoria",asivm_ficha_monitoreo_print.frecuencia_respiratoria)
		
		var codMecanica = globals.IsBlank(asivm_ficha_monitoreo_print.mecanica)?"":asivm_ficha_monitoreo_print.mecanica.split(",");
		var mecanica = "";
		for (var indiceCodMecanica = 0; indiceCodMecanica < codMecanica.length; indiceCodMecanica++) {
			
			mecanica = application.getValueListDisplayValue('AsiVm_vl_mecanica',codMecanica[indiceCodMecanica])+ (mecanica==''?mecanica: ', '+ sedacion);
		}
		setTextoPrint("Mecánica",mecanica)
		setTextoPrint("Disnea",application.getValueListDisplayValue("AsiVm_vl_disnea",asivm_ficha_monitoreo_print.disnea))
		
		if(globals.Asivm_prestacion==2){
			setTitlePrint("SETEO");
			setTextoPrint("Ventilador",asivm_ficha_monitoreo_print.vni_seteo_ventilador)
			setTextoPrint("Interfase",asivm_ficha_monitoreo_print.vni_seteo_interfase)
			
				var codModo = globals.IsBlank(asivm_ficha_monitoreo_print.mecanica)?"":asivm_ficha_monitoreo_print.mecanica.split(",");
			var modo = "";
			for (var indiceCodModo = 0; indiceCodModo < codModo.length; indiceCodModo++) {
				
				modo = application.getValueListDisplayValue('AsiVm_vl_modo_ventilatorio',codModo[indiceCodModo])+ (modo==''?modo: ', '+ modo);
			}
			
			setTextoPrint("Modo",modo);
			setTextoPrint("Presión Inspiratoria",asivm_ficha_monitoreo_print.vni_seteo_presion_inspiratoria)
			setTextoPrint("PEEP",asivm_ficha_monitoreo_print.vni_seteo_peep)
			setTextoPrint("Frecuencia Respiratoria",asivm_ficha_monitoreo_print.vni_seteo_frec_respiratoria)
			setTextoPrint("Tiempo inspiratorio",asivm_ficha_monitoreo_print.vni_seteo_tiempo_inspiratorio)
			setTextoPrint("FiO2",asivm_ficha_monitoreo_print.vni_seteo_fio2)
		}
		
		if(globals.Asivm_prestacion==3){
			setTitlePrint("Programación");
			setTextoPrint("Equipo",application.getValueListDisplayValue('AsiVm_vl_programacion_equipo',asivm_ficha_monitoreo_print.caf_prog_equipo));
			setTextoPrint("Tamaño de cánula",application.getValueListDisplayValue('AsiVm_vl_programacion_tam_canula',asivm_ficha_monitoreo_print.caf_prog_tamanio_canula));
			setTextoPrint("Flujo",asivm_ficha_monitoreo_print.progr_flujo);
			setTextoPrint("FiO2",asivm_ficha_monitoreo_print.progr_fi02);
			
		}
	break;

	
	}

	
	
	setTitlePrint("EAB");
	setTextoPrint('pH',asivm_ficha_monitoreo_print.eab_ph)
	setTextoPrint('PO2',asivm_ficha_monitoreo_print.eab_p02)
	setTextoPrint('PCO2',asivm_ficha_monitoreo_print.eab_pc02)
	setTextoPrint('HCO3-',asivm_ficha_monitoreo_print.eab_hc03)
	setTextoPrint('PaO2/FiO2',asivm_ficha_monitoreo_print.eab_pa02_fi02)	
}
/**
 * @properties={typeid:24,uuid:"6D3285EA-5B33-42EB-AB8E-BC3D56C7BD9E"}
 */
function cargarBody(fileType) {
	dsAux = null
	dsAux = databaseManager.createEmptyDataSet();
//	dsAux.addColumn('caracteristica');
//	dsAux.addColumn('valor');
//	dsAux.addColumn('id_row');
	dsAux.addColumn('html_hoja');
//	dsAux.addRow([])
//	
	if(fileType==1){
		f_titulo_reporte = 'Ficha'
		reporteFicha();
	}else if(fileType==2){
		f_titulo_reporte = 'Ficha'
		reporteFichaMonitoreo();
	}
	else if(fileType==4){
		f_titulo_reporte = 'Ficha'
		reporteFichaCierre();
	}
//	html_monitoreo = dsAux.getAsHTML()
//	globals.printRoutine('AsiVm_Template_print', null);
	// actualizando lista de impresion
	
//	var $params = {		
//		pr_img1:"media:///logo1.png", pr_img2:"media:///logo2.png"
//	}
//	
//	var $arch = plugins.file.showFileSaveDialog('SQ-CONV-PROF' + application.getIPAddress() + '.pdf')
//	if ($arch){		
//		plugins.jasperPluginRMI.runReport(dsAux,'rp_monitoreo_kine.jasper' ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
//		
//		var $OS = application.getOSName();
//		if (/Windows/.test($OS)) {
//		    application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);	      
//	    } else if (/Linux|Freebsd/.test($OS)) {
//	       application.executeProgram('xdg-open', $arch);
//	    } else if (/Mac/.test($OS)) {
//	       application.executeProgram('open', $arch);
//	    }
//	}	
//	
//	history.removeForm('AsiVm_Template_print')
//	solutionModel.removeForm('AsiVm_Template_print')
//	
//	html_final=dsAux
//history.clear()
	var $frm_modelo = solutionModel.getForm('AsiVm_Template_print');
	 var $tipos = [JSColumn.TEXT];
	$frm_modelo.dataSource = dsAux.createDataSource('dsAux', $tipos);
	forms['AsiVm_Template_print'].controller.recreateUI()
//	nDs =  dsAux.createDataSource('dsaux1', $tipos);
//	var $frm2 = solutionModel('AsiVm_Template_print2', nDs, null, false, 800,600);
//	ds.addColumn('my_id'); // note: use regular javascript identifiers so they can be used in scripting
//	ds.addColumn('my_label');
//	var uri = ds.createDataSource('mydata', [JSColumn.INTEGER, JSColumn.TEXT]);
//	var jsform = solutionModel.newForm(fname, uri, null, true, 300, 300);
//	var fs = databaseManager.getFoundSet(nDs)
//	forms['AsiVm_Template_print'].foundset.loadRecords(fs)
//	var $campo = $frm.getField("txt_medico")
//	$campo.putDesignTimeProperty("hola",false)
//	forms['AsiVm_Template_print'].controller.recreateUI();
//	forms['AsiVm_Template_print'].controller.relookup()
forms['AsiVm_Template_print'].controller.print(true,false, plugins.pdf_output.getPDFPrinter())
//	forms.AsiVm_Template_print.controller.recreateUI();
//	globals.printRoutine('AsiVm_Template_print', null);

//	.jasper
		
}


/**
 * TODO generated, please specify type and doc for the params
 * @param Fecha_Desde
 * @param Fecha_Hasta
 *
 * @properties={typeid:24,uuid:"EBDDB473-4907-4DA1-A617-CDD8E653FF87"}
 */
function contar_dias(Fecha_Desde, Fecha_Hasta) {
	// El hasta dede ser mayor al desde
	var $contar = 0;

	var $x = Fecha_Hasta - Fecha_Desde//diferencias entre dos dias y lo muestra en milisegundos
	var $un_dia = 1000 * 60 * 60 * 24 //ms * sec * min * hrs de un día
	var $dif_dias = $x / $un_dia //calcula la diferencia en días
		//$contar = Math.ceil($dif_dias )   //redondea
	//$contar = Math.round($dif_dias)
	$contar = Math.floor($dif_dias) //redondea

	return $contar
}


/**
 * TODO generated, please specify type and doc for the params
 * @param labelValue
 * @param value
 *
 * @properties={typeid:24,uuid:"7436C6B0-E90E-43AE-8A0B-F13FE5A32420"}
 */
function setTextoPrint(labelValue, value){
	var valor = value==null?"":value
	var html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><p>'+labelValue+': '+ valor +'</p></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	html_monitoreo+= html
	dsAux.addRow([html]);
	html_monitoreo+= html
}

/**
 * TODO generated, please specify type and doc for the params
 * @param labelValue
 * @param value
 *
 * @properties={typeid:24,uuid:"3EA2F93A-7730-457C-A465-927EBAA11E0D"}
 */
function setTextoPrintDate(labelValue, value){
	var html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><p>'+labelValue+': '+ utils.dateFormat(value,'dd/MM/yyyy hh:mm:ss')+'</table>'
	html += '</body></html>'
	dsAux.addRow([html]);;
	html_monitoreo+= html
}



/**
 * TODO generated, please specify type and doc for the params
 * @param labelValue
 * @param valor
 * @param valuelist
 *
 * @properties={typeid:24,uuid:"BDA15270-A83E-468F-8B5E-B64BF46C695A"}
 */
function setTextoPrintMultiList(labelValue,valor, valuelist){
	var codList = globals.IsBlank(valor)?"":valor.split(",");
	var valores = "";
	for (var indiceCod = 0; indiceCod < codList.length; indiceCod++) {
		
		valores = application.getValueListDisplayValue(valuelist,codList[indiceCod])+ (valores==''?valores: ', '+ valores);
	}
	setTextoPrint(labelValue,valores)
}
/**
 * TODO generated, please specify type and doc for the params
 * @param labelValue
 * @param value
 * @param valuelist
 *
 * @properties={typeid:24,uuid:"5F5AC770-B693-4BDE-AD5F-7B480BF9303F"}
 */
function setTextoPrintValueList(labelValue, value, valuelist){
	var valor=value==null?0:value
	var html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><p>'+labelValue+': '+ (application.getValueListDisplayValue(valuelist,valor))+'</p></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);;
	html_monitoreo+= html
}

/**
 * TODO generated, please specify type and doc for the params
 * @param title
 *
 * @properties={typeid:24,uuid:"72CAEF38-9B0A-4037-8932-88CD9E48E2A7"}
 */
function setTitlePrint(title){
//	lineHorizontal();
	var html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="40%"><b><font size="2">' + title + '</font></b></td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	html_monitoreo+= html
//	dsAux.addRow([html]);
	dsAux.addRow([html]);
	
}

/**
 * @properties={typeid:24,uuid:"6608F576-CEDC-4817-A663-51D920416BB0"}
 */
function lineHorizontal(){
	var html = ''
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html +='<hr>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>'
	dsAux.addRow([html]);;
	html_monitoreo+= html
}
/**
 * TODO generated, please specify type and doc for the params
 * @param {String} dataCol_1
 * @param {String} dataCol_2
 * @param {String} dataCol_3
 * @param {String} dataCol_4
 * @param {String} dataCol_5
 *
 * @return {String}
 * @properties={typeid:24,uuid:"333EAB04-C488-4AF2-B5D6-EDD0F1F23150"}
 */
function getAlertHTML (dataCol_1,dataCol_2,dataCol_3,dataCol_4,dataCol_5) {

	// alertas
	var html = "";
	html += '<html><body>'
	html += '<table width="1024">'
	html += '<tr>'
	html += '<td width="10%">&nbsp;&nbsp;' + dataCol_1 + '</td>'
	html += '<td width="10%">' + dataCol_2 + '</td>'
	html += '<td width="10%">' + dataCol_3 + '</td>'
	html += '<td width="10%">' + dataCol_4 + '</td>'
	html += '<td width="60%">' + dataCol_5 + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '</body></html>';
	
	return html;
}

/**
 * @properties={typeid:24,uuid:"CD9C27DD-EA98-4E55-BDBE-D190C36A41AA"}
 * @AllowToRunInFind
 */
function imprimir(fileType) {
//	forms.AsiVm_Template_print.controller.setPageFormat(210,297,10,10,10,10,1,0);
//	 controller.showPrintPreview(true)
	
	//amb desa
	/*var absoluteFileName = '';
		
	    var fileName = 'prueba' + '.pdf';
	    var $arch = plugins.file.showFileSaveDialog(fileName)
		//var absoluteFileNamep = arch.getAbsoluteFile();
		if($arch){
			
			absoluteFileName = $arch.getAbsolutePath();
			try{
			
				forms.AsiVm_Template_print.controller.print(false,false,plugins.pdf_output.getPDFPrinter(absoluteFileName));
			}
			catch (ex) {
				
				absoluteFileName = '';
				globals.DIALOGS.showWarningDialog("¡Atención!","Error, GenerarReporte_servoyPDF.\n" + ex.message,"Aceptar");
			}
			
		}
		else
			globals.DIALOGS.showWarningDialog("¡Atención!","Error GenerarReporte_servoyPDF, plugins.file.createFile " + fileNameReport,"Aceptar");
	*/
	
	//amb desa
//	var patchArchivoPrueba = ''
//	if(fileType==1){
//		patchArchivoPrueba = 'c:/temp/ficha_kine_'+globals.AsiVm_adm_HistClin.toString()+'_'+utils.dateFormat(f_fechaImpresion,'dd-MM-yyyy hh-mm-ss')+'.pdf';
//	}else if(fileType==2){
//		 patchArchivoPrueba = 'C:/temp/monitoreo_kine_'+globals.AsiVm_adm_HistClin.toString()+'_'+utils.dateFormat(f_fechaImpresion,'dd-MM-yyyy hh-mm-ss')+'.pdf';
//	}else if(fileType==4){
//		 patchArchivoPrueba = 'C:/temp/cierre_kine_'+globals.AsiVm_adm_HistClin.toString()+'_'+utils.dateFormat(f_fechaImpresion,'dd-MM-yyyy hh-mm-ss')+'.pdf';
//	}
//	
//	var success = plugins.pdf_output.startMetaPrintJob(patchArchivoPrueba);
//	if (success)
//	{
//		controller.print(false,false,plugins.pdf_output.getPDFPrinter(patchArchivoPrueba));
//		forms.AsiVm_Template_print.controller.print(false,false,plugins.pdf_output.getPDFPrinter());
//	}
//	plugins.pdf_output.endMetaPrintJob()
//	var formulario = solutionModel.getForm("AsiVm_Template_print")
//	var tipos = [JSColumn.TEXT];
//	formulario.dataSource= dsAux.createDataSource("dataMonito", tipos)
//	forms['AsiVm_Template_print'].controller.recreateUI()
//	forms.AsiVm_Template_print.controller.recreateUI();
//		var $frm = solutionModel.getForm('AsiVm_Template_print');
	
//	$frm.dataSource = dsAux.createDataSource('AsiVm_Template_print', $tipos);
	
//	

	
//	forms.AsiVm_Template_print.foundset.loadRecords(dsAux)
	// amb Produccion
//	forms.AsiVm_Template_print.controller.recreateUI();
//	forms.AsiVm_Template_print.controller.print(false,false);
//	forms.AsiVm_Template_print.controller.print(false,false,plugins.pdf_output.getPDFPrinter());

}

/**
 * TODO generated, please specify type and doc for the params
 * @param value
 *
 * @properties={typeid:24,uuid:"B88F1DB0-1BC4-4DDB-8570-6383A8F8C5DF"}
 */
function convertNumberToHour_HHMM(value) {
	
	var hora = "";
	
	if(value < 1){
		hora = "00:00";
	}
	else{
		if(value < 10){
			hora = "00:0" + value.toString().substr(0,1);
		}
		else{
			if(value < 100){
				hora = "00:" + value.toString().substr(0,2);
			}
			else{
				if(value < 1000){
					hora = "0" + value.toString().substr(0,1) + ":" + value.toString().substr(1,2);
				}
				else{
					if(value <= 2359){
						hora = value.toString().substr(0,2) + ":" + value.toString().substr(2,2);
					}
				}
			}
		}
	}

	return hora;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} HistClin
 *
 * @properties={typeid:24,uuid:"2497FCEC-C1C3-47FA-A631-18D3B7FA5D31"}
 */
function formatearHistclin(HistClin) {
	var histClin = '';
	if(arguments[0] != undefined)
		histClin =  HistClin.toString().substr(0,HistClin.toString().length-1)+"/"+HistClin.toString().substr(HistClin.toString().length -1,1)	

	return histClin;
}


/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"60CC741B-44FF-4A41-BECF-89F1B7F673D9"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	var dsAux1 = databaseManager.createEmptyDataSet();
	dsAux1.addColumn('html_hoja');
	
	// actualizando lista de impresion
	var $frm = solutionModel.getForm('AsiVm_Template_print');
	var $tipos = [JSColumn.TEXT];
	$frm.dataSource = dsAux1.createDataSource('AsiVm_Template_print', $tipos);
	forms.AsiVm_Template_print.controller.recreateUI();
	
//	globals.printRoutine('AsiVm_Template_print', null);
}
