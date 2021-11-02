/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F20D52C4-9FF9-4977-BC60-1EFE640CE6B8",variableType:8}
 */
var frm_error = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FFCE5BC9-835F-4EE9-9FEA-7EE6D35B5E6C"}
 */
function onAction_salir(event) { 
	application.closeAllWindows() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6C54BF2E-5F14-4C33-AC66-8F98C987E0F8"}
 */
function onAction_procesar(event) {
	forms.frm_consentimientos_hist.onAction_buscar_hist_clin(event)
	application.updateUI()
	if (globals.gbl_con_hiscli == '') {
		globals.showErrorDialog('Debe Ingresar Historia Clínica', null, 'Ok', null, null, null);
		elements.con_hiscli.requestFocus()
	} else {
		//ojo
		//globals.gbl_transacciones_1 = '16'
		//globals.gbl_transacciones_2 = '1'
		procesar()
	}
}

/**
 * @properties={typeid:24,uuid:"FD0FA772-62F2-4EB2-B60A-96441CA2240D"}
 */
function procesar() {
	switch (globals.gbl_transacciones_1){
	case 1:case 2:case 3:case 4:case 6:case 7:case 10:case 11:
	case 12:case 13:case 14:case 15:case 16:
		globals.apeynom = hisclin_to_tbc_admision_scroll.adm_apelnom
	    globals.obra_social = '(' + hisclin_to_tbc_admision_scroll.adm_obrsoc + ') ' + hisclin_to_tbc_admision_scroll.tbc_admision_scroll_2_to_tbc_obras.obr_razonsoc
	    globals.tipo_docu = hisclin_to_tbc_admision_scroll.tipo_docu
	    globals.documento = hisclin_to_tbc_admision_scroll.adm_nrodocu
	    globals.habitacion = hisclin_to_tbc_admision_scroll.adm_habita
	    globals.cama = hisclin_to_tbc_admision_scroll.adm_cama
	    globals.hist_clinica = hisclin_to_tbc_admision_scroll.hiscli2
	    globals.afiliado = hisclin_to_tbc_admision_scroll.adm_nrobenef
	    globals.domicilio = hisclin_to_tbc_admision_scroll.adm_domicilio + '   ' +
	                        hisclin_to_tbc_admision_scroll.adm_localidad + ' (' + hisclin_to_tbc_admision_scroll.adm_codpostal + ')'
	    globals.hist_cli_unica = hisclin_to_tbc_admision_scroll.adm_histclinuni
	}
	var fechadeldia = new Date();
	var mes = '';
	switch (fechadeldia.getMonth()) {
	case 0:
		mes = 'Enero';
		break;
	case 1:
		mes = 'Febrero';
		break;
	case 2:
		mes = 'Marzo';
		break;
	case 3:
		mes = 'Abril';
		break;
	case 4:
		mes = 'Mayo';
		break;
	case 5:
		mes = 'Junio';
		break;
	case 6:
		mes = 'Julio';
		break;
	case 7:
		mes = 'Agosto';
		break;
	case 8:
		mes = 'Setiembre';
		break;
	case 9:
		mes = 'Octubre';
		break;
	case 10:
		mes = 'Noviembre';
		break;
	case 11:
		mes = 'Diciembre';
		break;
	}

	switch (globals.gbl_transacciones_1) {
	case 1:
		globals.frm_foundset = '1058-2015-1' 
		globals.frm_impresion = 'impr_rtf_1';
		var frm = globals.frm_current_impr
		globals.numeroJobs = 1
		globals.prn_titulo = 'CONSENTIMIENTO INFORMATIVO BILATERAL'
		globals.frm_titulo = 'El/La Sr/Sra. :' + hisclin_to_tbc_admision_scroll.adm_apelnom + '  ' + 'D.N.I. ' + hisclin_to_tbc_admision_scroll.adm_nrodocu + ', con docimicilio real en ' + hisclin_to_tbc_admision_scroll.adm_domicilio
		globals.frm_titulo_2 = hisclin_to_tbc_admision_scroll.adm_localidad + ' (' + hisclin_to_tbc_admision_scroll.adm_codpostal + ')'
		globals.frm_titulo_3 = 'Historia Clínica: (' + hisclin_to_tbc_admision_scroll.hiscli2 + '), representada es este acto por ______________________________________________';
		forms[frm].print_default()
		break
	case 2:
		globals.frm_foundset = 'IMPR-0278-1';
		globals.frm_impresion = 'impr_rtf_1';
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		globals.prn_titulo = 'CONSENTIMIENTO INFORMATIVO BILATERAL'
		globals.frm_titulo = 'El/La Sr/Sra. :' + hisclin_to_tbc_admision_scroll.adm_apelnom + '  ' + 'D.N.I. ' + hisclin_to_tbc_admision_scroll.adm_nrodocu + ', con docimicilio real en ' + hisclin_to_tbc_admision_scroll.adm_domicilio
		globals.frm_titulo_2 = hisclin_to_tbc_admision_scroll.adm_localidad + ' (' + hisclin_to_tbc_admision_scroll.adm_codpostal + ')'
		globals.frm_titulo_3 = 'Nro.Internación: _____________, representada es este acto por ___________________________________________';
		forms[frm].print_default()
		break
	case 3:
		globals.frm_foundset = 'IMPR-0959';
		globals.frm_impresion = 'impr_html';
		globals.prn_titulo = 'CONSENTIMIENTO  INFORMADO  PARA  INTERVENCIÓN  Y/O  PROCEDIMIENTO  QUIRÚRGICO'
		globals.talon1 = 'talon-1';
		globals.talon2 = 'talon-3';
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 4:
		globals.frm_foundset = 'IMPR-0967';
		globals.frm_impresion = 'impr_html2';
		globals.prn_titulo = 'SERVICIO DE CIRUGÍA VASCULAR Y FLEBOLOGÍA'
		globals.talon1 = 'talon-2';
		globals.talon2 = 'talon_4';
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 5:
		globals.frm_foundset = 'IMPR-0222';
		globals.frm_impresion = 'impr_rtf_3';
		globals.prn_titulo = 'CONSENTIMIENTO  INFORMADO'
		globals.nro_hoja_d = 1
		globals.nro_hoja_h = 1
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 6:
		globals.frm_foundset = 'IMPR-1440';
		globals.frm_impresion = 'impr_rtf_4';
		globals.prn_titulo = 'SERVICIO  DE  OBSTETRICIA'
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 7:
		globals.frm_titulo_2 = 'Buenos Aires, ' + fechadeldia.getDate() + " de " + mes + " de " + fechadeldia.getFullYear();
		globals.frm_titulo = 'PACIENTE: ' + hisclin_to_tbc_admision_scroll.hiscli2 + '  ' + hisclin_to_tbc_admision_scroll.adm_apelnom;
		globals.frm_foundset = 'ACV';
		globals.frm_impresion = 'impr_rtf_5';
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 8:
		globals.frm_foundset = 'IMPR-2859-1';
		globals.frm_impresion = 'impr_rtf_3';
		globals.nro_hoja_d = 1
		globals.nro_hoja_h = 3
		globals.prn_titulo = 'CONSENTIMIENTO  PARA  ANESTESIA'
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		
		globals.frm_foundset = 'IMPR-2859-2';
		globals.nro_hoja_d = 2
		globals.nro_hoja_h = 3
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		
		globals.frm_foundset = 'IMPR-2859-3';
		globals.nro_hoja_d = 3
		globals.nro_hoja_h = 3
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
		
	case 18:
		globals.frm_foundset = 'IMPR-2273-1-1';
		globals.frm_impresion = 'impr_rtf_2';
		globals.nro_hoja_d = 1
		globals.nro_hoja_h = 2
		globals.prn_titulo = 'CONSENTIMIENTO PARA ENDOSCOPÍA COLÓNICA'
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
			
		globals.frm_foundset = 'IMPR-2273-1-2';
		globals.nro_hoja_d = 2
		globals.nro_hoja_h = 2
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 19:
		globals.frm_foundset = 'IMPR-2273-2-1';
		globals.frm_impresion = 'impr_rtf_2';
		globals.nro_hoja_d = 1
		globals.nro_hoja_h = 2
		globals.prn_titulo = 'CONSENTIMIENTO PARA ENDOSCOPÍA DIGESTIVA ÁLTA'
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
			
		globals.frm_foundset = 'IMPR-2273-2-2';
		globals.nro_hoja_d = 2
		globals.nro_hoja_h = 2
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break		
		
	case 10:
		globals.prn_titulo = 'CIRUGÍA DE OSTEOTOMÍA DE CADERA'
		globals.frm_foundset = 'OSTEOT-CAD';
		globals.frm_impresion = 'impr_rtf_6';
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 11:
		globals.prn_titulo = 'CIRUGÍA DE OSTEOTOMÍA DE RODILLA'
		globals.frm_foundset = 'OSTEOT-ROD';
		globals.frm_impresion = 'impr_rtf_6';
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 12:
		globals.prn_titulo = 'CIRUGÍA DE OSTEOSÍNTESIS DE CADERA'
		globals.frm_foundset = 'OSTEOS-CAD';
		globals.frm_impresion = 'impr_rtf_6';
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 13:
		globals.prn_titulo = 'CIRUGÍA DE PRÓTESIS ARTICULAR DEL MIEMBRO INFERIOR'
		globals.frm_foundset = 'PROTESIS-INF';
		globals.frm_impresion = 'impr_rtf_6';
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 14:
		globals.prn_titulo = 'CIRUGÍA DE RECAMBIO O RETIRO DE PRÓTESIS ARTICULAR DEL MIEMBREO INFERIOR'
		globals.frm_foundset = 'PROTESIS-RECAM';
		globals.frm_impresion = 'impr_rtf_6';
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 15:
		globals.frm_foundset = 'RECHAZO';
		globals.prn_titulo = 'RECHAZO TERAPÉUTICO - DENEGACIÓN DE CONSENTIMIENTO'
		globals.frm_titulo = 'Nro. Internación. ' + hisclin_to_tbc_admision_scroll.hiscli2 + '   Historia Clínica única. '+ hisclin_to_tbc_admision_scroll.adm_histclinuni
		globals.frm_impresion = 'impr_rtf_7';
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 16:
		globals.frm_lugar_fec_hor = 'Buenos Aires, ' + fechadeldia.getDate() + " de " + mes + " de " + fechadeldia.getFullYear();
		globals.frm_titulo = 'APELLIDO Y NOMBRE: ' + hisclin_to_tbc_admision_scroll.adm_apelnom;
		globals.frm_titulo_2 = 'DOMICILIO: ' + hisclin_to_tbc_admision_scroll.adm_domicilio + ' ' + hisclin_to_tbc_admision_scroll.adm_localidad + ' (' + hisclin_to_tbc_admision_scroll.adm_codpostal + ')';
		globals.frm_titulo_3 = 'TIPO y NRO. DE DOCUMENTO: ' + globals.tipo_docu + ' ' + hisclin_to_tbc_admision_scroll.adm_nrodocu + '                          EDAD: ' + globals.CalculoEdad(hisclin_to_tbc_admision_scroll.adm_fecnac)  + ' ' + globals.vTipoEdad;
		globals.frm_foundset = 'IMPR-2849';
		globals.prn_titulo = 'CONSENTIMIENTO INFORMADO "CIRUGÍA ESTÉTICA"'
		globals.frm_impresion = 'impr_rtf_8';
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 20:
		globals.frm_foundset = 'IMPR-2039-1-1';
		globals.frm_impresion = 'impr_rtf_2';
		globals.nro_hoja_d = 1
		globals.nro_hoja_h = 2
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
			
		globals.frm_foundset = 'IMPR-2039-1-2';
		globals.frm_impresion = 'impr_rtf_9';
		globals.nro_hoja_d = 2
		globals.nro_hoja_h = 2
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
			
		break
	case 21:
		globals.frm_foundset = 'IMPR-2039-2-1';
		globals.frm_impresion = 'impr_rtf_2';
		globals.nro_hoja_d = 1
		globals.nro_hoja_h = 2
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		
		globals.frm_foundset = 'IMPR-2039-2-2';
		globals.frm_impresion = 'impr_rtf_9';
		globals.nro_hoja_d = 2
		globals.nro_hoja_h = 2
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
		forms[frm].print_default()
		break
	case 22:
		globals.frm_foundset = 'IMPR-2039-3-1';
		globals.frm_impresion = 'impr_rtf_2';
		frm = globals.frm_current_impr
		globals.nro_hoja_d = 1
		globals.nro_hoja_h = 2
		globals.numeroJobs = 1
		forms[frm].print_default()
			
		globals.frm_foundset = 'IMPR-2039-3-2';
		globals.frm_impresion = 'impr_rtf_9';
		globals.nro_hoja_d = 2
		globals.nro_hoja_h = 2
		frm = globals.frm_current_impr
		globals.numeroJobs = 1
	    forms[frm].print_default()
		break
	}
	application.closeAllWindows()
}

/**
 * @properties={typeid:24,uuid:"6E6ECD4E-4E1A-4381-AEEB-4A35D40B4608"}
 */
function print_default() {
	globals.texto = globals.frm_foundset;
	var frm = globals.frm_impresion;
	forms[frm].sub_buildReport();
	globals.printRoutine(frm, true);
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D733A9C4-BD64-48B2-84DD-4EF0F28AF911"}
 */
function onLoad_inicia(event) {
	globals.gbl_con_hiscli = ''
	globals.gbl_hiscli = 0
	globals.apeynom = ''
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"48561B0A-6577-40D1-8CF8-54C1AFB5200E"}
 */
function onAction_buscar_hist_clin_consulta(event) {
	var largo = globals.gbl_con_hiscli.length;
	var esnumero = true;
	globals.gbl_con_indice = 1;
	for (var i = 0; i < largo && esnumero == true; i++) {
		if (globals.gbl_con_hiscli.charCodeAt(i) < 48 || globals.gbl_con_hiscli.charCodeAt(i) > 57) {
			esnumero = false
		}
	}
	if (esnumero) {
		globals.gbl_hiscli = utils.stringToNumber(globals.gbl_con_hiscli.valueOf())
		globals.gbl_con_indice = 2
	} else {
		globals.gbl_con_indice = 1
	}
	var win = application.createWindow("Busca_hist_clin", JSWindow.MODAL_DIALOG)
	win.title = 'Buscar Historia Clínica'
	win.resizable = false
	win.show(forms.frm_tab_hist_clin)
	win.destroy()
	if (globals.gbl_con_indice == 1 ){
		globals.hisclin = buscar_tbc_admision_scroll_nombre.adm_histclin_1
	}else{
	    globals.hisclin = buscar_tbc_admision_scroll_numero.adm_histclin 
	}
	if (hisclin_to_tbc_admision_scroll.getSize() > 0) {
		globals.gbl_con_hiscli = hisclin_to_tbc_admision_scroll.adm_histclin.toString()
		globals.apeynom = hisclin_to_tbc_admision_scroll.adm_apelnom
	} else {
		globals.gbl_hiscli = 0
		globals.hisclin = 0
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"210D0E42-C9A9-487B-A260-4E9D9FE103B5"}
 */
function onAction_buscar_hist_clin(event) {
	if (globals.gbl_con_hiscli != '') {
		// identifica si el campo es numérico o alfanumerico
		var largo = globals.gbl_con_hiscli.length;
		var esnumero = true;
		for (var i = 0; i < largo && esnumero == true; i++) {
			if (globals.gbl_con_hiscli.charCodeAt(i) < 48 || globals.gbl_con_hiscli.charCodeAt(i) > 57) {
				esnumero = false
			}
		}
		if (esnumero) {
			if (largo > 7) {
				//muestra mensaje de "dialogo"
				globals.showErrorDialog('Error en código de Historia Clínica, Ingrese un código correcto', null, 'Ok', null, null, null);
				elements.con_hiscli.requestFocus()
				frm_error = 1
			} else {
				globals.hisclin = utils.stringToNumber(globals.gbl_con_hiscli.valueOf())
				
				if (hisclin_to_tbc_admision_scroll.getSize() < 1) {
					frm_error = 1
					globals.showWarningDialog('Registro Inexistente.', null, 'Ok', null, null, null);
					globals.gbl_con_hiscli = ''
					globals.hisclin = 0
					globals.apeynom = ''
					elements.con_hiscli.requestFocus() 
				} else {
					globals.apeynom = hisclin_to_tbc_admision_scroll.adm_apelnom
					elements.btn_ok.requestFocus()
				}
			}
		} else {
			globals.gbl_con_indice = 1
			globals.gbl_apeynom = globals.gbl_con_hiscli.toLocaleUpperCase()
			var win = application.createWindow("Busca_hist_clin", JSWindow.MODAL_DIALOG)
			win.title = 'Buscar Historia Clínica'
			win.resizable = false
			win.show(forms.frm_tab_hist_clin)
			win.destroy()
			globals.hisclin = buscar_tbc_admision_scroll_nombre.adm_histclin_1
			if (hisclin_to_tbc_admision_scroll.getSize() > 0){
				globals.gbl_con_hiscli = hisclin_to_tbc_admision_scroll.adm_histclin.toString()
				globals.apeynom = hisclin_to_tbc_admision_scroll.adm_apelnom
			
			}
		}
	}
}
