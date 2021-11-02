/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"51E60996-832D-4E85-8E1F-039BF053E9EB",variableType:8}
 */
var frm_tipo = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D371AC06-4CE8-406E-9FA6-36D05C47EE1C",variableType:8}
 */
var frm_error = 0;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F98E3207-3CDE-44C0-8BA4-CB0AB13AA310"}
 */
function onAction_salir(event) { 
	application.closeAllWindows() 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"77856202-5040-4368-B663-23F3F848374F"}
 */
function onAction_procesar(event) {
//	forms.frm_consentimientos_hist.onAction_buscar_hist_clin(event)
//	application.updateUI()
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
 * @properties={typeid:24,uuid:"261A7F52-C128-4CC4-B0DC-4BC4B6FAA1D3"}
 */
function procesar() {
	switch (frm_tipo){
		case 0:
		     globals.apeynom   = hisclin_to_tbc_admision_scroll.adm_apelnom
	         globals.tipo_docu = hisclin_to_tbc_admision_scroll.tipo_docu
	         globals.documento = hisclin_to_tbc_admision_scroll.adm_nrodocu
			 break;
		case 1:
	         globals.apeynom   = hisclin_to_tbc_histcab_scroll.histcabapellnom
	    	 globals.tipo_docu = hisclin_to_tbc_histcab_scroll.tipo_documento
             globals.documento = hisclin_to_tbc_histcab_scroll.histcabnrodoc
		     break;
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
     	globals.frm_foundset = 'IMPR-2813' 
		globals.frm_impresion = 'impr_rtf_10';
		var frm = globals.frm_current_impr
		globals.numeroJobs = 1
		globals.prn_titulo = 'C.A.B.A., ' + fechadeldia.getDate() + ' de ' +  mes + ' de ' + fechadeldia.getFullYear()
		forms[frm].print_default()
     	application.closeAllWindows()
}

/**
 * @properties={typeid:24,uuid:"2B5E722A-087A-43E4-91DF-0CD1F89D4140"}
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
 * @properties={typeid:24,uuid:"3412E0BD-EEBF-4F11-8B75-D30B830DD123"}
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
 * @properties={typeid:24,uuid:"E4369668-ED1C-4C4D-BBDE-21A75BA9AD95"}
 */
function onAction_buscar_hist_clin_consulta(event) {
	//lupa
	if (frm_tipo == 0) {
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
		       globals.showErrorDialog('Error en Nro.de Internado, Ingrese Nro. correcto', null, 'Ok', null, null, null);
		       elements.con_hiscli.requestFocus()
		       frm_error = 1
	       } else {
			   	   globals.gbl_con_indice = 2
			   	   globals.gbl_hiscli = utils.stringToNumber(globals.gbl_con_hiscli.valueOf())
				   var win = application.createWindow("Busca_hist_clin", JSWindow.MODAL_DIALOG)
				   win.title = 'Buscar Nro.de Internacion'
				   win.resizable = false
				   win.show(forms.frm_tab_hist_clin)
				   globals.hisclin = buscar_tbc_admision_scroll_numero.adm_histclin
				   if (hisclin_to_tbc_admision_scroll.getSize() > 0){
				   	   globals.gbl_con_hiscli = hisclin_to_tbc_admision_scroll.adm_histclin.toString()
				       globals.apeynom = hisclin_to_tbc_admision_scroll.adm_apelnom
				   }
				       elements.btn_ok.requestFocus()
	              }
		   } else {
		    	   globals.gbl_con_indice = 1
			       globals.gbl_con_hiscli = globals.gbl_con_hiscli.toLocaleUpperCase()
			       win = application.createWindow("Busca_hist_clin", JSWindow.MODAL_DIALOG)
			       win.title = 'Buscar Nro.de Internacion'
			       win.resizable = false
			       win.show(forms.frm_tab_hist_clin)
			       globals.hisclin = buscar_tbc_admision_scroll_nombre.adm_histclin_1
			       if (hisclin_to_tbc_admision_scroll.getSize() > 0){
		   	    	  globals.gbl_con_hiscli = hisclin_to_tbc_admision_scroll.adm_histclin.toString()
				      globals.apeynom = hisclin_to_tbc_admision_scroll.adm_apelnom
	
			       }
		   }
		}
    //Ambulatorio		
	} else {
	       if (globals.gbl_con_hiscli != '') {
	    	  // identifica si el campo es numérico o alfanumerico
		      largo = globals.gbl_con_hiscli.length;
	          esnumero = true;
		      for ( i = 0; i < largo && esnumero == true; i++) {
			      if (globals.gbl_con_hiscli.charCodeAt(i) < 48 || globals.gbl_con_hiscli.charCodeAt(i) > 57) {
				      esnumero = false
	    	      }
		   }
		   if (esnumero) {
		       if (largo > 7) {
				  //muestra mensaje de "dialogo"
		    		globals.showErrorDialog('Error en Nro.de Internado, Ingrese Nro. correcto', null, 'Ok', null, null, null);
		    		elements.con_hiscli.requestFocus()
		    		frm_error = 1
	           } else {
			           globals.gbl_con_indice = 2
			           globals.gbl_hiscli = utils.stringToNumber(globals.gbl_con_hiscli.valueOf())
				       win = application.createWindow("Busca_hist_clin_unica", JSWindow.MODAL_DIALOG)
				       win.title = 'Buscar Historia Clinica Unica'
				       win.resizable = false
					   win.show(forms.frm_tab_hist_clin_unica)
					   globals.hisclin = buscar_tbc_admision_scroll_unica_numero.histcabnrounico
        		       if (hisclin_to_tbc_histcab_scroll.getSize() > 0){
				          globals.gbl_con_hiscli = hisclin_to_tbc_histcab_scroll.histcabnrounico.toString()
					      globals.apeynom = hisclin_to_tbc_histcab_scroll.histcabapellnom
				       }
					   elements.btn_ok.requestFocus()
	    	        }
		   } else {
		    	      globals.gbl_con_indice = 1
			          globals.gbl_con_hiscli = globals.gbl_con_hiscli.toLocaleUpperCase()
			          win = application.createWindow("Busca_hist_clin_unica", JSWindow.MODAL_DIALOG)
			          win.title = 'Buscar Nro.Historia Unica'
			          win.resizable = false
			          win.show(forms.frm_tab_hist_clin_unica)
			          globals.hisclin = buscar_tbc_admision_scroll_unica_nombre.histcabnrounico
			          if (hisclin_to_tbc_histcab_scroll.getSize() > 0){
		   	    	     globals.gbl_con_hiscli = hisclin_to_tbc_histcab_scroll.histcabnrounico.toString()
				         globals.apeynom = hisclin_to_tbc_histcab_scroll.histcabapellnom
					  
			          }
		          }
		   }
    	
	}	

}


/**  
 * @param event
 *
 * @properties={typeid:24,uuid:"C230AD86-7937-4883-881C-9E5AE9C96402"}
 */
function onAction_buscar_hist_clin(event) {
	if (frm_tipo == 0) {
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
		    		globals.showErrorDialog('Error en Nro.de Internado, Ingrese Nro. correcto', null, 'Ok', null, null, null);
		    		elements.con_hiscli.requestFocus()
		    		frm_error = 1
	    	   } else {
		    		globals.hisclin = utils.stringToNumber(globals.gbl_con_hiscli.valueOf())
			    	if (hisclin_to_tbc_admision_scroll.getSize() < 1) {
				    	frm_error = 1
			    		globals.showWarningDialog('Internado Inexistente.', null, 'Ok', null, null, null);
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
			       globals.gbl_con_hiscli = globals.gbl_con_hiscli.toLocaleUpperCase()
			       var win = application.createWindow("Busca_hist_clin", JSWindow.MODAL_DIALOG)
			       win.title = 'Buscar Nro.de Internacion'
			       win.resizable = false
			       win.show(forms.frm_tab_hist_clin)
			       globals.hisclin = buscar_tbc_admision_scroll_nombre.adm_apelnom
			       if (hisclin_to_tbc_admision_scroll.getSize() > 0){
		   	    	  globals.gbl_con_hiscli = hisclin_to_tbc_admision_scroll.adm_histclin.toString()
				      globals.apeynom = hisclin_to_tbc_admision_scroll.adm_apelnom
	
			       }
		     }
		}
	} else {
			
   	    if (globals.gbl_con_hiscli != '') {
	    	// identifica si el campo es numérico o alfanumerico
	       largo = globals.gbl_con_hiscli.length;
	       esnumero = true;
		   for ( i = 0; i < largo && esnumero == true; i++) {
			   if (globals.gbl_con_hiscli.charCodeAt(i) < 48 || globals.gbl_con_hiscli.charCodeAt(i) > 57) {
				  esnumero = false
	    		}
		   }
		   if (esnumero) {
			  if (largo > 7) {
				  //muestra mensaje de "dialogo"
		    		globals.showErrorDialog('Error en Nro. de Historia Unica, Ingrese un código correcto', null, 'Ok', null, null, null);
		    		elements.con_hiscli.requestFocus()
		    		frm_error = 1
	    		} else {
		    		globals.hisclin = utils.stringToNumber(globals.gbl_con_hiscli.valueOf())
				
			    	if (hisclin_to_tbc_histcab_scroll.getSize() < 1) {
				    	frm_error = 1
			    		globals.showWarningDialog('Historia Unica Inexistente.', null, 'Ok', null, null, null);
				    	globals.gbl_con_hiscli = ''
					   globals.hisclin = 0
					   globals.apeynom = ''
					   elements.con_hiscli.requestFocus() 
				    } else {
					   globals.apeynom = hisclin_to_tbc_histcab_scroll.histcabapellnom
					   elements.btn_ok.requestFocus()
		    		}
	    		}
		 } else {
		    	  globals.gbl_con_indice = 1
			      globals.gbl_con_hiscli = globals.gbl_con_hiscli.toLocaleUpperCase()
			      win = application.createWindow("Busca_hist_unic", JSWindow.MODAL_DIALOG)
			      win.title = 'Buscar Historia Unica'
			      win.resizable = false
			      win.show(forms.frm_tab_hist_clin_unica)
			      globals.hisclin = buscar_tbc_admision_scroll_unica_nombre.histcabnrounico
			      if (hisclin_to_tbc_histcab_scroll.getSize() > 0){
		   	    	  globals.gbl_con_hiscli = hisclin_to_tbc_histcab_scroll.histcabnrounico.toString()
				      globals.apeynom = hisclin_to_tbc_histcab_scroll.histcabapellnom
			      }
			}
		}
	}
}
   

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"00AB6DD9-0BC9-4E17-B5F0-52458B66AA92"}
 */
function onAction_tipo_paciente(event) {
	if (frm_tipo == 0) {
		elements.lbl_paciente.text = 'Nro.de Internado:'
	} else {
		elements.lbl_paciente.text = 'Nro.Historia Unica:'
	}
}
