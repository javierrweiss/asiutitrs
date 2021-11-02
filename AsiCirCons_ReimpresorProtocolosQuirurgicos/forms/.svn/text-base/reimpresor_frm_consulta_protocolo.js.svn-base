/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BA8D3ECD-3C1B-4F50-8FA8-105FA45D4796"}
 */
function onShow_ImprimeProtocoloCirugia(firstShow, event) {
	//globals.vHiscli=379429
	globals.vClose=false
	elements.lbl_tipo_listado.visible=false
	elements.combo_tipo_listado.visible=false
	globals.vListado=''
	globals.vTipoListado=0
	//onAction_Hiscli_Protocolo()
	//elements.imprimir.enabled = false
	onAction_protocolo(event)
	elements.protocolo.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"41601834-A492-4FF4-AAD8-2FA3E4554B9F"}
 * @AllowToRunInFind
 */
function onAction_Hiscli_Protocolo() {
	   
		//globals.busqueda_protocolo()
		if(globals.filas > 0){
			var name = '';
			var largo = forms.frm_consulta_protocolo.elements.allnames.length
			for (var i=0;i<largo;i++){
				name = forms.frm_consulta_protocolo.elements.allnames[i]
				forms.frm_consulta_protocolo.elements[name].enabled = true
			}
			forms.frm_consulta_protocolo.elements.hiscli.enabled = false
			
			globals.vPacApeynom = vhisclin_to_tbc_admision.adm_apelnom
		    		    
		    var fecha_nac = vhisclin_to_tbc_admision.adm_fecnac
		    
			globals.vEdad = globals.CalculoEdad(fecha_nac)+" "+globals.vTipoEdad
			
		 }
		else{
			globals.vProtocolo = false
			globals.vSeleccionoRegistro = false
			
		}	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"661C7A0F-30DB-48C0-835A-5E5AD9647352"}
 */
function onAction_Imprime_Protocolo(event) {
	elements.imprimir.enabled=false
	
	Imprime_Protocolo()
	
	//show dialog
	//var thePressedButton = plugins.dialogs.showQuestionDialog('Seguridad Quirúrgica', '¿Imprime Seguridad Quirúrgica?', 'Si', 'No');
	//if(thePressedButton=='Si'){
	if(globals.vListado=='Seguridad Quirúrgica'){
		globals.numeroJobs9=2
		forms.frm_seguqui_html_1.sub_buildReport();
		globals.vfrmActual='frm_seguqui_html_1'
		
		globals.printRoutine4('frm_seguqui_html_1', null);
		
		if(globals.seguquiHTML2!=''){
			globals.vfrmActual='frm_seguqui_html_2'
			
			globals.printRoutine4('frm_seguqui_html_2', null);
			
		}
	}
	//var thePressedButton2 = plugins.dialogs.showQuestionDialog('Protocolo de Anestesia', '¿Imprime Protocolo de Anestesia?', 'Si', 'No');
	//if(thePressedButton2=='Si'){
	if(globals.vListado=='Hoja de Anestesia'){
		globals.numeroJobs9=3	  
		forms.frm_anestesia_html_1.sub_buildReport();
		if(globals.anesteHTML6!=''){
			globals.anesteHOJA6='Hoja 6 de 6'
			globals.anesteHOJA5='Hoja 5 de 6'
			globals.anesteHOJA4='Hoja 4 de 6'
			globals.anesteHOJA3='Hoja 3 de 6'
			globals.anesteHOJA2='Hoja 2 de 6'
			globals.anesteHOJA1='Hoja 1 de 6'
		}else{
			if(globals.anesteHTML5!=''){
				globals.anesteHOJA5='Hoja 5 de 5'
				globals.anesteHOJA4='Hoja 4 de 5'
				globals.anesteHOJA3='Hoja 3 de 5'
				globals.anesteHOJA2='Hoja 2 de 5'
				globals.anesteHOJA1='Hoja 1 de 5'
			}else{
				if(globals.anesteHTML4!=''){
					globals.anesteHOJA4='Hoja 4 de 4'
					globals.anesteHOJA3='Hoja 3 de 4'
					globals.anesteHOJA2='Hoja 2 de 4'
					globals.anesteHOJA1='Hoja 1 de 4'
				}else{
					if(globals.anesteHTML3!=''){
						globals.anesteHOJA3='Hoja 3 de 3'
						globals.anesteHOJA2='Hoja 2 de 3'
						globals.anesteHOJA1='Hoja 1 de 3'
					}else{
						if(globals.anesteHTML2!=''){
							globals.anesteHOJA2='Hoja 2 de 2'
							globals.anesteHOJA1='Hoja 1 de 2'
						}else{
							globals.anesteHOJA1='Hoja 1 de 1'
						}
					}
				}
			}
		}

		
		globals.vfrmActual='frm_anestesia_html_1'
		globals.printRoutine4('frm_anestesia_html_1', null);
		
		if(globals.anesteHTML2!=''){
			globals.vfrmActual='frm_anestesia_html_2'
			
			globals.printRoutine4('frm_anestesia_html_2', null);
			
		}
		if(globals.anesteHTML3!=''){
			globals.vfrmActual='frm_anestesia_html_3'
			
			globals.printRoutine4('frm_anestesia_html_3', null);
			
		}
		if(globals.anesteHTML4!=''){
			globals.vfrmActual='frm_anestesia_html_4'
			
			globals.printRoutine4('frm_anestesia_html_4', null);
			
		}
		if(globals.anesteHTML5!=''){
			globals.vfrmActual='frm_anestesia_html_5'
			
			globals.printRoutine4('frm_anestesia_html_5', null);
			
		}
		if(globals.anesteHTML6!=''){
			globals.vfrmActual='frm_anestesia_html_6'
			
			globals.printRoutine4('frm_anestesia_html_6', null);
			
		}
	}
	if(globals.vListado=='Certificado de Implante'){
		globals.numeroJobs9=5	  
		forms.frm_certificado_implante_html_1.sub_buildReport();
		globals.vfrmActual='frm_certificado_implante_html_1'
		globals.printRoutine4('frm_certificado_implante_html_1', null);
		
	}
	if(globals.vListado=='Solicitud de Anatomía Patológica'){
		globals.numeroJobs9=5	  
		globals.anatopat_tipoAdmi=1
		globals.anatopat_apelnom=reimpresor_vhiscli_to_tbc_hist_cab_new.histcabapellnom
		globals.anatopat_tipo='Nro.Hist.Clinica'
		globals.anatopat_cobertura=reimpresor_vhiscli_to_tbc_hist_cab_new.reimpresor_tbc_hist_cab_new_to_tbc_obras.obr_razonsoc
		globals.anatopat_plan=reimpresor_vhiscli_to_tbc_hist_cab_new.histcabplanx	
		globals.anatopat_beneficiario=reimpresor_vhiscli_to_tbc_hist_cab_new.histcabnrobenef
		globals.anatopat_documento=reimpresor_vhiscli_to_tbc_hist_cab_new.histcabnrodoc
		globals.anatopat_interven=reimpresor_vhiscli_to_tbc_ciruguar.reimpresor_tbc_ciruguar_to_tbc_interven.itv_descripcion
		forms.frm_anatomia_patologica_html_1.sub_buildReport();
		forms.frm_anatomia_patologica_html_3.sub_buildReport_2();
		if(globals.anatopatHTML4!=''&&globals.anatopatHTML3!=''&&globals.anatopatHTML2!=''&&globals.anatopatHTML1!=''){
			globals.anatopatHOJA4='Hoja 4 de 4'
			globals.anatopatHOJA3='Hoja 3 de 4'
			globals.anatopatHOJA2='Hoja 2 de 4'
			globals.anatopatHOJA1='Hoja 1 de 4'
		}else{
			if(globals.anatopatHTML3!=''&&globals.anatopatHTML2!=''&&globals.anatopatHTML1!=''){
				globals.anatopatHOJA3='Hoja 3 de 3'
				globals.anatopatHOJA2='Hoja 2 de 3'
				globals.anatopatHOJA1='Hoja 1 de 3'
			}else{
				if(globals.anatopatHTML3!=''&&globals.anatopatHTML1!=''){
					globals.anatopatHOJA3='Hoja 2 de 2'
					globals.anatopatHOJA1='Hoja 1 de 2'
				}else{
					globals.anatopatHOJA1='Hoja 1 de 1'
				}
			}
		}
		globals.vfrmActual='frm_anatomia_patologica_html_1'
		globals.printRoutine4('frm_anatomia_patologica_html_1', null);
		
		if(globals.anatopatHTML2!=''){
			globals.vfrmActual='frm_anatomia_patologica_html_2'
			
			globals.printRoutine4('frm_anatomia_patologica_html_2', null);
			
		}
		
		globals.vfrmActual='frm_anatomia_patologica_html_3'
		
		globals.printRoutine4('frm_anatomia_patologica_html_3', null);
		if(globals.anatopatHTML4!=''){
			globals.vfrmActual='frm_anatomia_patologica_html_4'
			
			globals.printRoutine4('frm_anatomia_patologica_html_4', null);
			
		}
		
		globals.anatopatHTML1='';
		forms.frm_anatomia_patologica_html_1.sub_buildReport();
		globals.anatopatHOJA1='Hoja 1 de 1'
		globals.vfrmActual='frm_anatomia_patologica_html_1'
		globals.printRoutine4('frm_anatomia_patologica_html_1', null);
	}
	
	if(globals.vListado=='Historia Clinica de Ingreso'){
		if(vhiscli_unico2_to_tbc_admision_scroll.adm_tipoing==2){
			globals.numeroJobs9=10	  
			forms.frm_historia_clinica_ingreso_html_1.sub_buildReport();
		
			if(globals.hcicirHTML4!=''){
				globals.hcicirHOJA4='Hoja 4 de 4'
				globals.hcicirHOJA3='Hoja 3 de 4'
				globals.hcicirHOJA2='Hoja 2 de 4'
				globals.hcicirHOJA1='Hoja 1 de 4'
			}else{
				if(globals.anatopatHTML3!=''){
					globals.hcicirHOJA3='Hoja 3 de 3'
					globals.hcicirHOJA2='Hoja 2 de 3'
					globals.hcicirHOJA1='Hoja 1 de 3'
				}else{
					if(globals.hcicirHTML2!=''){
						globals.hcicirHOJA3='Hoja 2 de 2'
						globals.hcicirHOJA1='Hoja 1 de 2'
					}else{
						globals.hcicirHOJA1='Hoja 1 de 1'
					}
				}
			}
		
			globals.vfrmActual='frm_historia_clinica_ingreso_html_1'
			globals.printRoutine4('frm_historia_clinica_ingreso_html_1', null);
		
			if(globals.hcicirHTML2!=''){
				globals.vfrmActual='frm_historia_clinica_ingreso_html_2'
				globals.printRoutine4('frm_historia_clinica_ingreso_html_2', null);
			}
			if(globals.hcicirHTML3!=''){
				globals.vfrmActual='frm_historia_clinica_ingreso_html_3'
				globals.printRoutine4('frm_historia_clinica_ingreso_html_3', null);
			}
			if(globals.hcicirHTML4!=''){
				globals.vfrmActual='frm_historia_clinica_ingreso_html_4'
				globals.printRoutine4('frm_historia_clinica_ingreso_html_4', null);
			}
		}
	}
	elements.lbl_tipo_listado.visible=false
	elements.combo_tipo_listado.visible=false
	
	globals.vListado=''
	globals.vTipoListado=0
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0BE9A4FD-3CFD-45F4-99E5-A73786C143D9"}
 */
function onAction_protocolo(event) {
	globals.vListado=''
}

/**
 * @properties={typeid:24,uuid:"B1C077C6-3E77-4715-8CF1-6CE222B99C58"}
 */
function busco_protocolos() {
	var query = "select ciriprotocolo from tbc_cirugint where cirihistcl = ? and ciritiponome = 0 and ciricodnome = 0 and ciriprotocolo > 0";
    var args = new Array();
    args[0]=globals.vHisclin;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 300);
    var filas = dataset.getMaxRowIndex()
	filas = protocolo_to_tbc_cirugint.getSize()
	//plugins.dialogs.showInfoDialog("busco protocolo",filas.toString())
	if (filas>0){
		for(var i=0;i>filas;i++){
			globals.protocolo[i]=dataset.getValue(i,1)
		}
	}
    forms.frm_consulta_protocolo.elements.protocolo.setValueListItems(protocolo_to_tbc_cirugint)
	//if(protocolo_to_tbc_cirugint.getSize()>0){
	//	elements.imprimir.enabled = true
	//}
	//plugins.dialogs.showInfoDialog("protocolos",filas,"ok")
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D712094-4C4F-4AD5-96B1-D90E4903CAE4"}
 */
function onAction_Volver(event) {
	/*
	if(globals.vNameSolucion=='AsiCirCons_ReimpresorProtocolosQuirurgicos'){
		application.showForm("reimpresor_tab_scr_pacientes")
	}else{
		application.showForm("protambu_frm_menu_principal")
	}
	*/
	globals.vClose=true
	forms[globals.vFormulario].controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7281294B-2BDF-4C00-947B-5D8C664C2B18"}
 */
function onAction_listado(event) {
	// TODO Auto-generated method stub
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
 * @properties={typeid:24,uuid:"3368F170-393F-4AA8-9D70-A60DD56FEEC3"}
 */
function onDataChange_listado(oldValue, newValue, event) {
	if(newValue=='Protocolo Quirúrgico'){
		elements.lbl_tipo_listado.visible=true
		elements.combo_tipo_listado.visible=true
		elements.combo_tipo_listado.requestFocus()
	}else{
		if(newValue!=''){
			if(protocolo_to_tbc_cirugint.getSize()>0){
				elements.lbl_tipo_listado.visible=false
				elements.combo_tipo_listado.visible=false
				elements.imprimir.enabled = true
			}
		}
	}
	return true
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
 * @properties={typeid:24,uuid:"8D81D0C9-B03B-4EB0-A34D-C5501362CEEB"}
 */
function onDataChange_tipoListado(oldValue, newValue, event) {
	if(newValue!=0){
		if(protocolo_to_tbc_cirugint.getSize()>0){
			elements.imprimir.enabled = true
		}
	}
	return true
}

/**
 * @properties={typeid:24,uuid:"E794B524-681E-44CE-B982-EDEE22EEEB2C"}
 * @AllowToRunInFind
 */
function Imprime_Protocolo() {
	globals.protoHTML1='';
	globals.protoHTML2='';
	globals.protoHTML3='';
	globals.protoHTML4='';
	globals.protoHTML5='';
	globals.protoHTML6='';
	globals.seguquiHTML1='';
	globals.seguquiHTML2='';
	globals.anesteHTML1='';
	globals.anesteHTML2='';
	globals.anesteHTML3='';
	globals.anesteHTML4='';
	globals.anesteHTML5='';
	globals.anesteHTML6='';
	globals.anatopatHTML1='';
	globals.anatopatHTML2='';
	globals.anatopatHTML3='';
	globals.anatopatHTML4='';
	globals.implanteHTML1='';
	globals.hcicirHTML1='';
	globals.hcicirHTML2='';
	globals.hcicirHTML3='';
	globals.hcicirHTML4='';
	
	globals.protoHOJA1='';
	globals.protoHOJA2='';
	globals.protoHOJA3='';
	globals.protoHOJA4='';
	globals.protoHOJA5='';
	globals.protoHOJA6='';
	globals.seguquiHOJA1='Hoja 1 de 2';
	globals.seguquiHOJA2='Hoja 2 de 2';
	globals.anesteHOJA1='';
	globals.anesteHOJA2='';
	globals.anesteHOJA3='';
	globals.anesteHOJA4='';
	globals.anesteHOJA5='';
	globals.anesteHOJA6='';
	globals.anatopatHOJA1='';
	globals.anatopatHOJA2='';
	globals.anatopatHOJA3='';
	globals.anatopatHOJA4='';
	globals.hcicirHOJA1='';
	globals.hcicirHOJA2='';
	globals.hcicirHOJA3='';
	globals.hcicirHOJA4='';
	
	//var frm = currentcontroller.getName()
    //var success = plugins.pdf_output.startMetaPrintJob('c:/temp/out.pdf')
    var str=globals.protocolo
	//plugins.dialogs.showInfoDialog("str",globals.protocolo)
	str=str.toString()
	str=str.split('|')
    globals.vNroProtocolo=utils.stringToNumber(str[0])
	globals.vFechaActual=utils.stringToNumber(str[1])
	globals.vHoraCarga=utils.stringToNumber(str[2])
	globals.Nprotocolo=globals.vNroProtocolo
	globals.vHisclin=globals.vHiscli
	//databaseManager.refreshRecordFromDatabase(vs_to_tbc_cirugint2,-1)
	vs_to_tbc_cirugint2.loadAllRecords()
	if(vs_to_tbc_cirugint2.getSize()>0){
		if(vs_to_tbc_cirugint2.ciriestado==0){
			plugins.dialogs.showInfoDialog("Protocolo sin Cerrar","Falta Cerrar el Protocolo Nro. " + globals.vNroProtocolo + ". Ciérrelo primero para poder reimprimir.")
			globals.vListado=''
		}
	}else{
		plugins.dialogs.showInfoDialog("Protocolo Inexistente","No existe el Protocolo Nro. " + globals.vNroProtocolo ) 
		globals.vListado=''
	}
    /*
	var fs = databaseManager.getFoundSet("asistencial","tbc_cirugint")
	fs.find()
	fs['ciriprotocolo']=globals.vNroProtocolo
	fs['cirifechacarga1']=globals.vFechaActual
	fs['cirihoracarga1']=globals.vHoraCarga
	fs['ciritiponome']=0
	fs['ciricodnome']=0
	fs.search()
	if(fs.getSize()>0){
		if(fs['ciriestado']==0){
			plugins.dialogs.showInfoDialog("Protocolo sin Cerrar","Falta Cerrar el Protocolo Nro. " + globals.vNroProtocolo + ". Ciérrelo primero para poder reimprimir.")
			globals.vListado=''
		}
	}
	*/
	//execute the "print_default" method on each form
	if(globals.vListado=='Protocolo Quirúrgico'){
		globals.numeroJobs9=1
		forms.frm_protocolo_html_1.sub_buildReport();
		if(globals.protoHTML6!=''){
			globals.protoHOJA6='Hoja 6 de 6'
			globals.protoHOJA5='Hoja 5 de 6'
			globals.protoHOJA4='Hoja 4 de 6'
			globals.protoHOJA3='Hoja 3 de 6'
			globals.protoHOJA2='Hoja 2 de 6'
			globals.protoHOJA1='Hoja 1 de 6'
		}else{
			if(globals.protoHTML5!=''){
				globals.protoHOJA5='Hoja 5 de 5'
				globals.protoHOJA4='Hoja 4 de 5'
				globals.protoHOJA3='Hoja 3 de 5'
				globals.protoHOJA2='Hoja 2 de 5'
				globals.protoHOJA1='Hoja 1 de 5'
			}else{
				if(globals.protoHTML4!=''){
					globals.protoHOJA4='Hoja 4 de 4'
					globals.protoHOJA3='Hoja 3 de 4'
					globals.protoHOJA2='Hoja 2 de 4'
					globals.protoHOJA1='Hoja 1 de 4'
				}else{
					if(globals.protoHTML3!=''){
						globals.protoHOJA3='Hoja 3 de 3'
						globals.protoHOJA2='Hoja 2 de 3'
						globals.protoHOJA1='Hoja 1 de 3'
					}else{
						if(globals.protoHTML2!=''){
							globals.protoHOJA2='Hoja 2 de 2'
							globals.protoHOJA1='Hoja 1 de 2'
						}else{
							globals.protoHOJA1='Hoja 1 de 1'
						}
					}
				}
			}
		}
		globals.vfrmActual='frm_protocolo_html_1'
		globals.printRoutine4('frm_protocolo_html_1', null);
		if(globals.protoHTML2!=''){
			globals.vfrmActual='frm_protocolo_html_2'
			globals.printRoutine4('frm_protocolo_html_2', null);
		}
		if(globals.protoHTML3!=''){
			globals.vfrmActual='frm_protocolo_html_3'
			globals.printRoutine4('frm_protocolo_html_3', null);
		}
		if(globals.protoHTML4!=''){
			globals.vfrmActual='frm_protocolo_html_4'
			globals.printRoutine4('frm_protocolo_html_4', null);
		}
		if(globals.protoHTML5!=''){
			globals.vfrmActual='frm_protocolo_html_5'
			globals.printRoutine4('frm_protocolo_html_5', null);
		}
		if(globals.protoHTML6!=''){
			globals.vfrmActual='frm_protocolo_html_6'
			globals.printRoutine4('frm_protocolo_html_6', null);
		}
		if(globals.vTipoListado==4){
			//Seguridad Quirurgica
			forms.frm_seguqui_html_1.sub_buildReport();
			globals.vfrmActual='frm_seguqui_html_1'
			
			globals.printRoutine4('frm_seguqui_html_1', null);
			
			if(globals.seguquiHTML2!=''){
				globals.vfrmActual='frm_seguqui_html_2'
				
				globals.printRoutine4('frm_seguqui_html_2', null);
				
			}
			//Hoja de Anestesia
			if(vs_to_tbc_cirugint2.cirianestesia==1){
				forms.frm_anestesia_html_1.sub_buildReport();
				if(globals.anesteHTML6!=''){
					globals.anesteHOJA6='Hoja 6 de 6'
					globals.anesteHOJA5='Hoja 5 de 6'
					globals.anesteHOJA4='Hoja 4 de 6'
					globals.anesteHOJA3='Hoja 3 de 6'
					globals.anesteHOJA2='Hoja 2 de 6'
					globals.anesteHOJA1='Hoja 1 de 6'
				}else{
					if(globals.anesteHTML5!=''){
						globals.anesteHOJA5='Hoja 5 de 5'
						globals.anesteHOJA4='Hoja 4 de 5'
						globals.anesteHOJA3='Hoja 3 de 5'
						globals.anesteHOJA2='Hoja 2 de 5'
						globals.anesteHOJA1='Hoja 1 de 5'
					}else{
						if(globals.anesteHTML4!=''){
							globals.anesteHOJA4='Hoja 4 de 4'
							globals.anesteHOJA3='Hoja 3 de 4'
							globals.anesteHOJA2='Hoja 2 de 4'
							globals.anesteHOJA1='Hoja 1 de 4'
						}else{
							if(globals.anesteHTML3!=''){
								globals.anesteHOJA3='Hoja 3 de 3'
								globals.anesteHOJA2='Hoja 2 de 3'
								globals.anesteHOJA1='Hoja 1 de 3'
							}else{
								if(globals.anesteHTML2!=''){
									globals.anesteHOJA2='Hoja 2 de 2'
									globals.anesteHOJA1='Hoja 1 de 2'
								}else{
									globals.anesteHOJA1='Hoja 1 de 1'
								}
							}
						}
					}
				}

				globals.vfrmActual='frm_anestesia_html_1'
				globals.printRoutine4('frm_anestesia_html_1', null);
			
				if(globals.anesteHTML2!=''){
					globals.vfrmActual='frm_anestesia_html_2'
					globals.printRoutine4('frm_anestesia_html_2', null);
				}
				if(globals.anesteHTML3!=''){
					globals.vfrmActual='frm_anestesia_html_3'
					globals.printRoutine4('frm_anestesia_html_3', null);
				}
				if(globals.anesteHTML4!=''){
					globals.vfrmActual='frm_anestesia_html_4'
					globals.printRoutine4('frm_anestesia_html_4', null);
				}
				if(globals.anesteHTML5!=''){
					globals.vfrmActual='frm_anestesia_html_5'
					globals.printRoutine4('frm_anestesia_html_5', null);
				}
				if(globals.anesteHTML6!=''){
					globals.vfrmActual='frm_anestesia_html_6'
					globals.printRoutine4('frm_anestesia_html_6', null);
				}
			}
			//Certificado de Implante
			var args = new Array()
			args[0]=globals.vHiscli
			args[1]=globals.vNroProtocolo
	    	var query = "select prote_protocolo from tbc_protesis where prote_histclin = ? and prote_protocolo = ?"
	    	var encontre_protesis=false
	    	var dataset_protesis = databaseManager.getDataSetByQuery("asistencial",query,args,20)
			if(dataset_protesis.getMaxRowIndex()>0){
				//for(var i=1;i<=dataset_protesis.getMaxRowIndex();i++){
					//if(globals.vNroProtocolo==dataset_protesis.getValue(i,1)){
						encontre_protesis=true
					//}
				//}
			}
			if(encontre_protesis){
				forms.frm_certificado_implante_html_1.sub_buildReport();
				globals.vfrmActual='frm_certificado_implante_html_1'
				globals.printRoutine4('frm_certificado_implante_html_1', null);
				globals.printRoutine4('frm_certificado_implante_html_1', null);
			}
			
			//Solicitud de Anatomia Patologica
			if(vs2_to_tbc_anatpaca.getSize()>0){
				globals.anatopat_tipoAdmi=1
				globals.anatopat_apelnom=reimpresor_vhiscli_to_tbc_hist_cab_new.histcabapellnom
				globals.anatopat_tipo='Nro.Hist.Clinica'
				globals.anatopat_cobertura=reimpresor_vhiscli_to_tbc_hist_cab_new.reimpresor_tbc_hist_cab_new_to_tbc_obras.obr_razonsoc
				globals.anatopat_plan=reimpresor_vhiscli_to_tbc_hist_cab_new.histcabplanx	
				globals.anatopat_beneficiario=reimpresor_vhiscli_to_tbc_hist_cab_new.histcabnrobenef
				globals.anatopat_documento=reimpresor_vhiscli_to_tbc_hist_cab_new.histcabnrodoc
				globals.anatopat_interven=reimpresor_vhiscli_to_tbc_ciruguar.reimpresor_tbc_ciruguar_to_tbc_interven.itv_descripcion
				forms.frm_anatomia_patologica_html_1.sub_buildReport();
				forms.frm_anatomia_patologica_html_3.sub_buildReport_2();
				if(globals.anatopatHTML4!=''&&globals.anatopatHTML3!=''&&globals.anatopatHTML2!=''&&globals.anatopatHTML1!=''){
					globals.anatopatHOJA4='Hoja 4 de 4'
					globals.anatopatHOJA3='Hoja 3 de 4'
					globals.anatopatHOJA2='Hoja 2 de 4'
					globals.anatopatHOJA1='Hoja 1 de 4'
				}else{
					if(globals.anatopatHTML3!=''&&globals.anatopatHTML2!=''&&globals.anatopatHTML1!=''){
						globals.anatopatHOJA3='Hoja 3 de 3'
						globals.anatopatHOJA2='Hoja 2 de 3'
						globals.anatopatHOJA1='Hoja 1 de 3'
					}else{
						if(globals.anatopatHTML3!=''&&globals.anatopatHTML1!=''){
							globals.anatopatHOJA3='Hoja 2 de 2'
							globals.anatopatHOJA1='Hoja 1 de 2'
						}else{
							globals.anatopatHOJA1='Hoja 1 de 1'
						}
					}
				}
				globals.vfrmActual='frm_anatomia_patologica_html_1'
				globals.printRoutine4('frm_anatomia_patologica_html_1', null);
			
				if(globals.anatopatHTML2!=''){
					globals.vfrmActual='frm_anatomia_patologica_html_2'
					globals.printRoutine4('frm_anatomia_patologica_html_2', null);
				}
				globals.vfrmActual='frm_anatomia_patologica_html_3'
				globals.printRoutine4('frm_anatomia_patologica_html_3', null);
				if(globals.anatopatHTML4!=''){
					globals.vfrmActual='frm_anatomia_patologica_html_4'
					globals.printRoutine4('frm_anatomia_patologica_html_4', null);
				}
				globals.anatopatHTML1='';
				forms.frm_anatomia_patologica_html_1.sub_buildReport();
				globals.anatopatHOJA1='Hoja 1 de 1'
				globals.vfrmActual='frm_anatomia_patologica_html_1'
				globals.printRoutine4('frm_anatomia_patologica_html_1', null);
			}
			//Historia Clinica de Ingreso
			if(vhiscli_unico2_to_tbc_admision_scroll.adm_tipoing==2){
				if(vhiscli_unico2_to_tbc_admision_scroll.tbc_admision2_scroll_to_tbc_hcicir_new.getSize()>0){
					globals.numeroJobs9=10	  
					forms.frm_historia_clinica_ingreso_html_1.sub_buildReport();
					if(globals.hcicirHTML4!=''){
						globals.hcicirHOJA4='Hoja 4 de 4'
						globals.hcicirHOJA3='Hoja 3 de 4'
						globals.hcicirHOJA2='Hoja 2 de 4'
						globals.hcicirHOJA1='Hoja 1 de 4'
					}else{
						if(globals.anatopatHTML3!=''){
							globals.hcicirHOJA3='Hoja 3 de 3'
							globals.hcicirHOJA2='Hoja 2 de 3'
							globals.hcicirHOJA1='Hoja 1 de 3'
						}else{
							if(globals.hcicirHTML2!=''){
								globals.hcicirHOJA3='Hoja 2 de 2'
								globals.hcicirHOJA1='Hoja 1 de 2'
							}else{
								globals.hcicirHOJA1='Hoja 1 de 1'
							}
						}
					}
					if(vhiscli_unico2_to_tbc_admision_scroll.adm_tipoing==2){
						globals.vfrmActual='frm_historia_clinica_ingreso_html_1'
						globals.printRoutine4('frm_historia_clinica_ingreso_html_1', null);
						if(globals.hcicirHTML2!=''){
							globals.vfrmActual='frm_historia_clinica_ingreso_html_2'
							globals.printRoutine4('frm_historia_clinica_ingreso_html_2', null);
						}
						if(globals.hcicirHTML3!=''){
							globals.vfrmActual='frm_historia_clinica_ingreso_html_3'
							globals.printRoutine4('frm_historia_clinica_ingreso_html_3', null);
						}
						if(globals.hcicirHTML4!=''){
							globals.vfrmActual='frm_historia_clinica_ingreso_html_4'
							globals.printRoutine4('frm_historia_clinica_ingreso_html_4', null);
						}
					}
				}
			}
		}
	}

}

/**
 * @properties={typeid:24,uuid:"F92D20C4-8DAE-40D1-9D7D-D5538AF571E4"}
 * @AllowToRunInFind
 */
function Genera_Protocolo_en_Pdf() {
	try{
	var fs_cirugint_dtl1 = databaseManager.getFoundSet("asistencial","tbc_cirugint_dtl")
	fs_cirugint_dtl1.find()
	fs_cirugint_dtl1['cirihistcl']=globals.vHiscli
	fs_cirugint_dtl1['ciriprotocolo']=globals.Nprotocolo
	fs_cirugint_dtl1['ciritiponome']='>0'
	fs_cirugint_dtl1.search()
	var largo_fs1=fs_cirugint_dtl1.getSize()
	var rp1 = 0
	var rp_aux1 = new Array()
	rp_aux1[0]=''
	rp_aux1[1]=''
	rp_aux1[2]=''
	rp_aux1[3]=''
	rp_aux1[4]=''
	if(largo_fs1>0){
		var fs_nomencla1 = databaseManager.getFoundSet("maestros","tbc_nomencla")
		var codobraOK = false;
		for(var i=1;i<=largo_fs1;i++){
			fs_cirugint_dtl1.setSelectedIndex(i)
			try{
				codobraOK = globals.ControlCodobra(0,1,1,utils.stringToNumber(fs_cirugint_dtl1['ciritiponome']),utils.stringToNumber(fs_cirugint_dtl1['ciricodnome']),vhisclin2_to_tbc_admision.adm_obrsoc,vhisclin2_to_tbc_admision.adm_planobr)
			}catch(msg){
				grabaLog(msg.message)
			}finally{
				grabaLog("codobraOK")
			}
			if(codobraOK){
				fs_nomencla1.find()
				fs_nomencla1['nome_tipo']=fs_cirugint_dtl1['ciritiponome']
				fs_nomencla1['nome_codigo']=fs_cirugint_dtl1['ciricodnome']
				fs_nomencla1.search()
				if(fs_nomencla1.getSize()>0){
					rp_aux1[rp1]=fs_nomencla1['nome_descr']
					rp1++
				}
			}
		}
		
	}else{
		//application.output("return 1")
		return
	}
	}catch (msg){
		grabaLog(msg.message)
		return
	}finally{
		grabaLog('Busca excepcion en Codobra')
	}
	if(rp1==0){
		//application.output("return 2")
		return
	}
	globals.numeroJobs9=1
	globals.protoHOJA1='';
	globals.protoHOJA2='';
	globals.protoHOJA3='';
	globals.protoHOJA4='';
	globals.protoHOJA5='';
	globals.protoHOJA6='';
	globals.protoHTML1='';
	globals.protoHTML2='';
	globals.protoHTML3='';
	globals.protoHTML4='';
	globals.protoHTML5='';
	globals.protoHTML6='';
	//application.output("antes de forms.frm_protocolo_html_1.sub_buildReport()")
	try{
	forms.frm_protocolo_html_1.sub_buildReport();
	}catch (msg){
		grabaLog(msg.toString())
	}finally{
		grabaLog('forms.frm_protocolo_html_1.sub_buildReport()')
	}
	//application.output("despues de forms.frm_protocolo_html_1.sub_buildReport()")
	if(globals.protoHTML6!=''){
		globals.protoHOJA6='Hoja 6 de 6'
		globals.protoHOJA5='Hoja 5 de 6'
		globals.protoHOJA4='Hoja 4 de 6'
		globals.protoHOJA3='Hoja 3 de 6'
		globals.protoHOJA2='Hoja 2 de 6'
		globals.protoHOJA1='Hoja 1 de 6'
	}else{
		if(globals.protoHTML5!=''){
			globals.protoHOJA5='Hoja 5 de 5'
			globals.protoHOJA4='Hoja 4 de 5'
			globals.protoHOJA3='Hoja 3 de 5'
			globals.protoHOJA2='Hoja 2 de 5'
			globals.protoHOJA1='Hoja 1 de 5'
		}else{
			if(globals.protoHTML4!=''){
				globals.protoHOJA4='Hoja 4 de 4'
				globals.protoHOJA3='Hoja 3 de 4'
				globals.protoHOJA2='Hoja 2 de 4'
				globals.protoHOJA1='Hoja 1 de 4'
			}else{
				if(globals.protoHTML3!=''){
					globals.protoHOJA3='Hoja 3 de 3'
					globals.protoHOJA2='Hoja 2 de 3'
					globals.protoHOJA1='Hoja 1 de 3'
				}else{
					if(globals.protoHTML2!=''){
						globals.protoHOJA2='Hoja 2 de 2'
						globals.protoHOJA1='Hoja 1 de 2'
					}else{
						globals.protoHOJA1='Hoja 1 de 1'
					}
				}
			}
		}
	}
	//var success = plugins.pdf_output.startMetaPrintJob(globals.vHiscli+"-"+globals.Nprotocolo+".pdf")
	//application.output('antes de plugins.file.createFile("Protocolo-"+globals.Nprotocolo+"-INT-"+globals.vHiscli+".pdf")')
	try{
		var arch1 = plugins.file.createFile("Protocolo-"+globals.Nprotocolo+"-INT-"+globals.vHiscli+".pdf")
	}catch (msg){
		grabaLog(msg.toString())
	}finally{
		grabaLog('plugins.file.createFile("Protocolo-"+globals.Nprotocolo+"-INT-"+globals.vHiscli+".pdf")')
	}
	
	//application.output('despues de plugins.file.createFile("Protocolo-"+globals.Nprotocolo+"-INT-"+globals.vHiscli+".pdf")')
	//application.output(arch1.exists())
	//application.output('antes de plugins.pdf_output.startMetaPrintJob(arch1.getAbsolutePath())')
	try{
		var success = plugins.pdf_output.startMetaPrintJob(arch1.getAbsolutePath())
	}catch (msg){
		grabaLog(msg.toString())
	}finally{
		grabaLog('plugins.pdf_output.startMetaPrintJob(arch1.getAbsolutePath())')
	}	
	//application.output('despues de plugins.pdf_output.startMetaPrintJob(arch1.getAbsolutePath())')
	//application.output(success.toString())
	globals.vfrmActual='frm_protocolo_html_1'
	//application.output('antes de globals.printRoutine6("frm_protocolo_html_1", null)')
	try{
		globals.printRoutine6('frm_protocolo_html_1', null);
	}catch(msg){
		grabaLog(msg.toString())
	}finally{
		grabaLog('plugins.pdf_output.startMetaPrintJob(arch1.getAbsolutePath())')
	}	
	//application.output('despues de globals.printRoutine6("frm_protocolo_html_1", null)')
	if(globals.protoHTML2!=''){
		globals.vfrmActual='frm_protocolo_html_2'
		globals.printRoutine6('frm_protocolo_html_2', null);
	}
	if(globals.protoHTML3!=''){
		globals.vfrmActual='frm_protocolo_html_3'
		globals.printRoutine6('frm_protocolo_html_3', null);
	}
	if(globals.protoHTML4!=''){
		globals.vfrmActual='frm_protocolo_html_4'
		globals.printRoutine6('frm_protocolo_html_4', null);
	}
	if(globals.protoHTML5!=''){
		globals.vfrmActual='frm_protocolo_html_5'
		globals.printRoutine6('frm_protocolo_html_5', null);
	}
	if(globals.protoHTML6!=''){
		globals.vfrmActual='frm_protocolo_html_6'
		globals.printRoutine6('frm_protocolo_html_6', null);
	}
	try{
		plugins.pdf_output.endMetaPrintJob()
	}catch(msg){
		grabaLog(msg.toString())
	}finally{
		grabaLog('plugins.pdf_output.endMetaPrintJob())')
	}		
	//application.output('antes de EnviaMail(arch1.getAbsolutePath())')
	try{
		EnviaMail(arch1.getAbsolutePath());
	}catch(msg){
		grabaLog(msg.toString())
	}finally{
		grabaLog('EnviaMail(arch1.getAbsolutePath())')
	}		
	//application.output('antes de EnviaMail(arch1.getAbsolutePath())')
}

/**
 * @properties={typeid:24,uuid:"D062335D-190A-4D5F-BB16-C833DE144A84"}
 * @AllowToRunInFind
 */
function EnviaMail(arch) {
	var $ds2 = databaseManager.createEmptyDataSet()
	$ds2.addColumn('fld_apeynom',1,JSColumn.TEXT)
	$ds2.addColumn('fld_cobertura',2,JSColumn.TEXT)
	$ds2.addColumn('fld_afiliado',3,JSColumn.TEXT)
	$ds2.addColumn('fld_cod',4,JSColumn.TEXT)
	$ds2.addColumn('fld_rp1',5,JSColumn.TEXT)
	$ds2.addColumn('fld_rp2',6,JSColumn.TEXT)
	$ds2.addColumn('fld_rp3',7,JSColumn.TEXT)
	$ds2.addColumn('fld_rp4',8,JSColumn.TEXT)
	$ds2.addColumn('fld_rp5',9,JSColumn.TEXT)
	$ds2.addColumn('fld_firma',10,JSColumn.TEXT)
	$ds2.addColumn('fld_apeynom_dr',11,JSColumn.TEXT)
	$ds2.addColumn('fld_matricula',12,JSColumn.TEXT)
	$ds2.addColumn('fld_rp',13,JSColumn.TEXT)
	
	try{
	var fs_cirugint_dtl = databaseManager.getFoundSet("asistencial","tbc_cirugint_dtl")
	fs_cirugint_dtl.find()
	fs_cirugint_dtl['cirihistcl']=globals.vHiscli
	fs_cirugint_dtl['ciriprotocolo']=globals.Nprotocolo
	fs_cirugint_dtl['ciritiponome']='>0'
	fs_cirugint_dtl.search()
	var largo_fs=fs_cirugint_dtl.getSize()
	var rp = 0
	var rp_aux = new Array()
	rp_aux[0]=''
	rp_aux[1]=''
	rp_aux[2]=''
	rp_aux[3]=''
	rp_aux[4]=''
	if(largo_fs>0){
		var fs_nomencla = databaseManager.getFoundSet("maestros","tbc_nomencla")
		for(var i=1;i<=largo_fs;i++){
			fs_cirugint_dtl.setSelectedIndex(i)
			if(globals.ControlCodobra(0,1,1,utils.stringToNumber(fs_cirugint_dtl['ciritiponome']),utils.stringToNumber(fs_cirugint_dtl['ciricodnome']),vhisclin2_to_tbc_admision.adm_obrsoc,vhisclin2_to_tbc_admision.adm_planobr)){
				fs_nomencla.find()
				fs_nomencla['nome_tipo']=fs_cirugint_dtl['ciritiponome']
				fs_nomencla['nome_codigo']=fs_cirugint_dtl['ciricodnome']
				fs_nomencla.search()
				if(fs_nomencla.getSize()>0){
					rp_aux[rp]=fs_nomencla['nome_descr']
					rp++
				}
			}
		}
		
	}else{
		//application.output("return 1")
		return
	}
	}catch (msg){
		grabaLog(msg.message)
		return
	}finally{
		grabaLog('Busca excepcion en Codobra_2')
	}
	if(rp==0){
		//application.output("return 2")
		return
	}
	try{
	globals.obra_mail=vhisclin2_to_tbc_admision.adm_obrsoc
	if (globals.obra_mail==1132){
		globals.vmail_tipo=4
	}else{
		globals.vmail_tipo=2
	}
	if(obra_mail_to_tbc_mail_obra.getSize()<1){
		//application.output("return 3")
		return
	}else{
		obra_mail_to_tbc_mail_obra.setSelectedIndex(1)
		var aux_mail_para=''
		var aux_mail_cc=''
		var aux_mail_cco=''
		for (var x=1;x<=10;x++){
			switch (obra_mail_to_tbc_mail_obra['mailobrdestino_'+x]){
				case 1:aux_mail_para+=utils.stringTrim(obra_mail_to_tbc_mail_obra['mailobrmail_'+x])+",";break;
				case 2:aux_mail_cc+=utils.stringTrim(obra_mail_to_tbc_mail_obra['mailobrmail_'+x])+",";break;
				case 3:aux_mail_cco+=utils.stringTrim(obra_mail_to_tbc_mail_obra['mailobrmail_'+x])+",";break;
			}
		}
	}
	}catch (msg){
		grabaLog(msg.message)
		return
	}finally{
		grabaLog('Busca cuentas de correo en mail-obra')
	}
	if(aux_mail_para==''&&aux_mail_cc==''&&aux_mail_cco==''){
		//application.output("return 4")
		return
	}
	if(aux_mail_para==''){
		//application.output("return 5")
		return
	}
	var fs_firmante = databaseManager.getFoundSet("parametros","prm_medico_firmante")
	fs_firmante.find()
	fs_firmante['codigo']='cirugia'
	fs_firmante.search()
	if(fs_firmante.getSize()<1){
		//application.output("return 6")
		return
	}else{
		fs_firmante.setSelectedIndex(1)
	}
	var cuenta = 'autorizaciones'
	var developer=application.isInDeveloper()
	if(developer){
		cuenta=globals.DIALOGS.showInputDialog(cuenta,"Ingrese la cuenta del correo smtp: ",'autorizaciones')
		aux_mail_para=globals.DIALOGS.showInputDialog(aux_mail_para,"Ingrese la dirección de mail Para: ",'fhuertas@cirendsa.com.ar')
		aux_mail_cc=globals.DIALOGS.showInputDialog(aux_mail_cc,"Ingrese la dirección de mail C.C.: ",'fhuertas@cirendsa.com.ar')
		aux_mail_cco=globals.DIALOGS.showInputDialog(aux_mail_cco,"Ingrese la dirección de mail C.C.O.: ",'fhuertas@cirendsa.com.ar')
	}else{
		var largo_url=application.getServerURL().length
		if (largo_url<24){
			cuenta=globals.DIALOGS.showInputDialog(cuenta,"Ingrese la cuenta del correo smtp: ",'autorizaciones')
			aux_mail_para=globals.DIALOGS.showInputDialog(aux_mail_para,"Ingrese la dirección de mail Para: ",'fhuertas@cirendsa.com.ar')
			aux_mail_cc=globals.DIALOGS.showInputDialog(aux_mail_cc,"Ingrese la dirección de mail C.C.: ",'fhuertas@cirendsa.com.ar')
			aux_mail_cco=globals.DIALOGS.showInputDialog(aux_mail_cco,"Ingrese la dirección de mail C.C.O.: ",'fhuertas@cirendsa.com.ar')
		}else{
			var url=application.getServerURL().substr(0,23)
			var puerto = url.split(':');
			if(puerto[2]=='9080'){
				cuenta=globals.DIALOGS.showInputDialog(cuenta,"Ingrese la cuenta del correo smtp: ",'autorizaciones')
				aux_mail_para=globals.DIALOGS.showInputDialog(aux_mail_para,"Ingrese la dirección de mail Para: ",'fhuertas@cirendsa.com.ar')
				aux_mail_cc=globals.DIALOGS.showInputDialog(aux_mail_cc,"Ingrese la dirección de mail C.C.: ",'fhuertas@cirendsa.com.ar')
				aux_mail_cco=globals.DIALOGS.showInputDialog(aux_mail_cco,"Ingrese la dirección de mail C.C.O.: ",'fhuertas@cirendsa.com.ar')
			}
		}
	}
	
	var fs_mail = databaseManager.getFoundSet("parametros","param_mail_autoriz")
	fs_mail.find()
	fs_mail['cuenta']= cuenta
	fs_mail.search()
	if(fs_mail.getSize()<1){
		//application.output("return 7")
		return
	}else{
		fs_mail.setSelectedIndex(1)
	}
	$ds2.addRow(vhisclin2_to_tbc_admision.adm_apelnom, vhisclin2_to_tbc_admision.tbc_admision_scroll_2_to_tbc_obras.obr_razonsoc,vhisclin2_to_tbc_admision.adm_nrobenef,'Protocolo: '+globals.Nprotocolo,rp_aux[0], rp_aux[1], rp_aux[2], rp_aux[3], rp_aux[4],null,fs_firmante['apeynom_dr'],fs_firmante['matricula'],'SE SOLICITA AUTORIZACION PARA:')
	//$ds2.addRow('PEREZ JOSE', 'ACCORD SALUD','99999-00-0','codigo','VIDEOENDOSCOPIA DIGESTIVA BAJA CON SEDACION', 'VIDEOENDOSCOPIA DIGESTIVA ALTA CON SEDACION', ' ', '','Dr. APEYNOM DOCTOR','M.N. 111111')
	var $params={ 
		//pr_firma: "media:///FIRMA_DRA_CAMARA_5.jpg",
		pr_firma: fs_firmante['firma'],
		pr_recetario: "media:///RecetarioSC2_003.jpg",
		pr_titulo_dr: "Jefe de Departamento de Prestaciones Médicas"	
	}	
	var $existe =true
	if($existe){
		//var $arch = plugins.file.showFileSaveDialog('AUTORIZACION-CIRUGIA-' + $ip + '.pdf')
		//application.output('antes de plugins.file.createFile("Solicitud-"+globals.Nprotocolo+"-INT-"+globals.vHiscli+".pdf")')
		try{
			var $arch = plugins.file.createFile("Solicitud-"+globals.Nprotocolo+"-INT-"+globals.vHiscli+".pdf")
		}catch(msg){
			grabaLog(msg.toString())
		}finally{
			grabaLog('plugins.file.createFile("Solicitud-"+globals.Nprotocolo+"-INT-"+globals.vHiscli+".pdf")')
		}	
		if ($arch){	
			//application.output('antes de plugins.jasperPluginRMI.runReport($ds2,"recetarioSC.jasper" ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)')
			try{
				plugins.jasperPluginRMI.runReport($ds2,'recetarioSC.jasper' ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
			}catch(e){
				
				grabaLog(e.message)
				
			}finally{
				grabaLog("plugins.jasperPluginRMI.runReport($ds2,'recetarioSC.jasper' ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)")
			}	
		}else{
			//application.output("return 8")
			return
		}
	}
	var userName = fs_mail['usuario_mail'];

	var passWord = fs_mail['clave'];

	var properties = new Array();

	//properties[0] = 'mail.smtp.host=smtp.sanatoriocolegiales.com.ar';
	properties[0] = 'mail.smtp.host='+fs_mail['mail_smtp_host'];

	properties[1] = 'mail.smtp.auth=true';

	properties[2] = 'mail.smtp.username=' + userName;

	properties[3] = 'mail.smtp.password=' + passWord;

	properties[4] = 'mail.smtp.port=25';

	//properties[5] = 'mail.smtp.starttls.enable=true';

//application.output(' antes de plugins.mail.createBinaryAttachment("Protocolo-"+globals.Nprotocolo+"-INT-"+globals.vHiscli+".pdf",plugins.file.readFile(arch))')
try{
	var attachment1 = plugins.mail.createBinaryAttachment("Protocolo-"+globals.Nprotocolo+"-INT-"+globals.vHiscli+".pdf",plugins.file.readFile(arch));
}catch(msg){
	grabaLog(msg.toString())
}finally{
	grabaLog('plugins.mail.createBinaryAttachment("Protocolo-"+globals.Nprotocolo+"-INT-"+globals.vHiscli+".pdf",plugins.file.readFile(arch))')
}			
//application.output("attachment1")
//application.output(attachment1.getName())
//application.output('antes de plugins.mail.createBinaryAttachment("Solicitud-"+globals.Nprotocolo+"-INT-"+globals.vHiscli+".pdf",plugins.file.readFile($arch.getAbsolutePath()))')
try{
	var attachment2 = plugins.mail.createBinaryAttachment("Solicitud-"+globals.Nprotocolo+"-INT-"+globals.vHiscli+".pdf",plugins.file.readFile($arch.getAbsolutePath()));
}catch(msg){
	grabaLog(msg.toString())
}finally{
	grabaLog('plugins.mail.createBinaryAttachment("Solicitud-"+globals.Nprotocolo+"-INT-"+globals.vHiscli+".pdf",plugins.file.readFile($arch.getAbsolutePath()))')
}		
//application.output("attachment2")
//application.output(attachment2.getName())
var asunto = "Solicitud Autoriz.Prácticas Quirúrgicas - Paciente "+vhisclin2_to_tbc_admision.adm_apelnom  
var bodymsg= "Se adjunta solicitud de autorización de prácticas quirúrgicas y protocolo quirúrgico en formato PDF correspondiente al paciente "+vhisclin2_to_tbc_admision.adm_apelnom+" Afiliado: "+vhisclin2_to_tbc_admision.adm_nrobenef

aux_mail_cco += 'fhuertas@cirendsa.com.ar'
//application.output("antes de plugins.mail.sendMail(aux_mail_para, fs_mail['mail_origen'], asunto, bodymsg,aux_mail_cc,aux_mail_cco,[attachment2,attachment1], properties)")
try{
	var success = plugins.mail.sendMail(aux_mail_para, fs_mail['mail_origen'], asunto, bodymsg,aux_mail_cc,aux_mail_cco,[attachment2,attachment1], properties);
}catch(msg){
	grabaLog(msg.toString())
}finally{
	grabaLog("plugins.mail.sendMail(aux_mail_para, fs_mail['mail_origen'], asunto, bodymsg,aux_mail_cc,aux_mail_cco,[attachment2,attachment1], properties)")
}		
//application.output("success")
//application.output(success.toString())

//success=false
if (!success)

{
    //plugins.dialogs.showWarningDialog('Alert','Failed to send mail','OK');
    var $id=null
    if($id == null || $id == 'null'){
		
		$id = application.getUUID();
		//Verificando si existe clave primaria
		var sql = "SELECT EXISTS( SELECT id FROM mail_autoriz_cirugia WHERE id='" + $id + "')"
		var dsExists = databaseManager.getDataSetByQuery('bases_auxiliares',sql,null,-1);
		while(dsExists.getValue(1,1) == 1){
			$id = application.getUUID();
			sql = "SELECT EXISTS( SELECT id FROM mail_autoriz_cirugia WHERE id='" + $id + "')"
			dsExists = databaseManager.getDataSetByQuery('bases_auxiliares',sql,null,-1);
		}
		
		var fs = databaseManager.getFoundSet("bases_auxiliares","mail_autoriz_cirugia")
		fs.newRecord()
		
		fs['id'] = $id;
		fs['hiscli']=globals.vHiscli;
		fs['protocolo']=globals.Nprotocolo;
		fs['fecha']=vs_to_tbc_cirugint2.cirifechacarga;
		fs['apeynom']=vhisclin2_to_tbc_admision.adm_apelnom;
		fs['afiliado']=vhisclin2_to_tbc_admision.adm_nrobenef;
		fs['mail_para']=aux_mail_para;
		fs['mail_cc']=aux_mail_cc;
		fs['mail_cco']=aux_mail_cco;
		fs['estado']=false;
		fs['recetario_pdf']=plugins.file.readFile($arch.getAbsolutePath());
		fs['protocolo_pdf']=plugins.file.readFile(arch);
		databaseManager.startTransaction()
		var result = databaseManager.saveData(fs);
		if(result){
			databaseManager.commitTransaction();
			//globals.DIALOGS.showInfoDialog("Resultado","Los datos de envío se guardaron correctamente.","Aceptar");
							
		}
		else{
			var error1 = ''
			var error2 = ''
			var array = databaseManager.getFailedRecords()
			for (var i = 0; i < array.length; i++) {
				var record = array[i];
				var jstable = databaseManager.getTable(record);
				var tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
					var thrown = record.exception.getValue()
					//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			databaseManager.rollbackTransaction()
			//if(error1!=''){
				//globals.DIALOGS.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				//globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error1,"Aceptar")
				//globals.DIALOGS.showErrorDialog("Error en grabacion de Histórico",error2,"Aceptar")
			//}
			//globals.DIALOGS.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Aceptar")
		}
		
    }
  }
  try{
  	plugins.file.deleteFile($arch.getAbsolutePath())
  	plugins.file.deleteFile(arch)
  }catch(msg){
		grabaLog(msg.toString())
	}finally{
		grabaLog("plugins.file.deleteFile($arch.getAbsolutePath())")
	}	
}

/**
 * @param {String} texto
 * @properties={typeid:24,uuid:"882ABF2D-1D70-43D0-9F1C-669BA2B132C3"}
 */
function grabaLog(texto) {
	
	var $id=null
    if($id == null || $id == 'null'){
		
		$id = application.getUUID();
		//Verificando si existe clave primaria
		var sql = "SELECT EXISTS( SELECT id FROM cirugia_errores WHERE id='" + $id + "')"
		var dsExists = databaseManager.getDataSetByQuery('bases_auxiliares',sql,null,-1);
		while(dsExists.getValue(1,1) == 1){
			$id = application.getUUID();
			sql = "SELECT EXISTS( SELECT id FROM cirugia_errores WHERE id='" + $id + "')"
			dsExists = databaseManager.getDataSetByQuery('bases_auxiliares',sql,null,-1);
		}
		
		var fs = databaseManager.getFoundSet("bases_auxiliares","cirugia_errores")
		var fechacarga = application.getServerTimeStamp();
		fs.newRecord()
		fs['id'] = $id;
		fs['hiscli']=globals.vHiscli;
		fs['protocolo']=globals.Nprotocolo;
		fs['texto_errores']=texto;
		fs['tipo_pac']='Int';
		fs['fecha']=application.getServerTimeStamp();
		fs['hora']=fechacarga.getHours()+''+fechacarga.getMinutes()
		databaseManager.startTransaction()
		var result = databaseManager.saveData(fs);
		if(result){
			databaseManager.commitTransaction();
			//globals.DIALOGS.showInfoDialog("Resultado","Los datos de envío se guardaron correctamente.","Aceptar");
							
		}
		else{
			var error1 = ''
			var error2 = ''
			var array = databaseManager.getFailedRecords()
			for (var i = 0; i < array.length; i++) {
				var record = array[i];
				var jstable = databaseManager.getTable(record);
				var tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			
					var thrown = record.exception.getValue()
				
				}
			}
			databaseManager.rollbackTransaction()
		}
		
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75964484-941A-42C4-9E89-AFA95B8D822E"}
 * @AllowToRunInFind
 */
function onAction_imprime_protocolo_ambulatorio(event) {
	globals.protoHTML1='';
	globals.protoHTML2='';
	globals.protoHTML3='';
	globals.protoHTML4='';
	globals.protoHTML5='';
	globals.protoHTML6='';
	globals.seguquiHTML1='';
	globals.seguquiHTML2='';
	globals.anesteHTML1='';
	globals.anesteHTML2='';
	globals.anesteHTML3='';
	globals.anesteHTML4='';
	globals.anesteHTML5='';
	globals.anesteHTML6='';
	globals.anatopatHTML1='';
	globals.anatopatHTML2='';
	globals.anatopatHTML3='';
	globals.anatopatHTML4='';
	globals.implanteHTML1='';
	globals.hcicirHTML1='';
	globals.hcicirHTML2='';
	globals.hcicirHTML3='';
	globals.hcicirHTML4='';
	
	globals.protoHOJA1='';
	globals.protoHOJA2='';
	globals.protoHOJA3='';
	globals.protoHOJA4='';
	globals.protoHOJA5='';
	globals.protoHOJA6='';
	globals.seguquiHOJA1='Hoja 1 de 2';
	globals.seguquiHOJA2='Hoja 2 de 2';
	globals.anesteHOJA1='';
	globals.anesteHOJA2='';
	globals.anesteHOJA3='';
	globals.anesteHOJA4='';
	globals.anesteHOJA5='';
	globals.anesteHOJA6='';
	globals.anatopatHOJA1='';
	globals.anatopatHOJA2='';
	globals.anatopatHOJA3='';
	globals.anatopatHOJA4='';
	globals.hcicirHOJA1='';
	globals.hcicirHOJA2='';
	globals.hcicirHOJA3='';
	globals.hcicirHOJA4='';
	var encontre_protesis=false
	//var frm = currentcontroller.getName()
    //var success = plugins.pdf_output.startMetaPrintJob('c:/temp/out.pdf')
    var str=globals.reimpresor_protocolo
	//plugins.dialogs.showInfoDialog("str",globals.protocolo)
	str=str.toString()
	//str=str.split('|')
    globals.vNroProtocolo=utils.stringToNumber(str)
	//globals.vFechaActual=utils.stringToNumber(str[1])
	//globals.vHoraCarga=utils.stringToNumber(str[2])
	globals.Nprotocolo=globals.vNroProtocolo
	globals.vHisclin=globals.vHiscli
	globals.vEdad=scopes.globals.reimpresor_CalculaEdad(reimpresor_vhiscli_to_tbc_hist_cab_new.histcabfechanac, globals.reimpresor_fecha_ingreso)
	globals.anesambu_fechaingreso=reimpresor_protocolo_to_tbc_ciruguar.cirgfechaingreso
	globals.anesambu_horaingreso=reimpresor_protocolo_to_tbc_ciruguar.cirghoraingreso
	globals.segambu_fecha_ingreso=globals.anesambu_fechaingreso
	globals.protambu1400_fechaingreso=globals.anesambu_fechaingreso
	globals.reimpresor_fecha_ingreso=globals.anesambu_fechaingreso
	globals.segambu_hora_ingreso=globals.anesambu_horaingreso
	globals.protambu1400_hora_ingreso=globals.anesambu_horaingreso
	globals.reimpresor_hora_ingreso=globals.anesambu_horaingreso
	globals.vFechaActual=globals.anesambu_fechaingreso
	globals.vHoraCarga=globals.anesambu_horaingreso
	globals.impresor_fechaingreso=globals.anesambu_fechaingreso
	globals.impresor_horaingreso=globals.anesambu_horaingreso
	
	if(globals.vListado=='Protocolo Quirúrgico'){
		globals.numeroJobs9=1
		forms.reimpresor_frm_protocolo.sub_buildReportNew()
		
		if(globals.vTipoListado==4){
			if(reimpresor_key_guardia_to_tbc_seguqui_new.getSize()>0){
				//Seguridad Quirurgica
				forms.reimpresor_frm_seguqui_html_1.sub_buildReport();
				globals.vfrmActual='reimpresor_frm_seguqui_html_1'
				
				globals.printRoutine4('reimpresor_frm_seguqui_html_1', null);
				
				if(globals.seguquiHTML2!=''){
					globals.vfrmActual='reimpresor_frm_seguqui_html_2'
					
					globals.printRoutine4('reimpresor_frm_seguqui_html_2', null);
				}
			}
			//Hoja de Anestesia
			if(reimpresor_protocolo_to_tbc_ciruguar.cirgusoanestesia==1){
				forms.reimpresor_frm_anestesia.sub_buildReportNew();
			}
			//Certificado de Implante
			globals.reimpresor_grupoTexto=4
			if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0 || reimpresor_vhiscli_to_tbl_proamb_t.getSize()>0){
				encontre_protesis=true
			}else{
				globals.reimpresor_grupoTexto=5
				if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0 || reimpresor_vhiscli_to_tbl_proamb_t.getSize()>0){
					encontre_protesis=true
				}
			}
			
			if(encontre_protesis){
				forms.reimpresor_frm_certificado_implante.sub_buildReport();
				globals.vfrmActual='reimpresor_frm_certificado_implante'
				globals.printRoutine4('reimpresor_frm_certificado_implante', null);
				globals.printRoutine4('reimpresor_frm_certificado_implante', null);
			}
			
			//Solicitud de Anatomia Patologica
			if(vs2_to_tbc_anatpaca.getSize()>0){
				globals.anatopat_tipoAdmi=1
				globals.anatopat_apelnom=reimpresor_vhiscli_to_tbc_hist_cab_new.histcabapellnom
				globals.anatopat_tipo='Nro.Hist.Clinica'
				globals.anatopat_cobertura=reimpresor_vhiscli_to_tbc_hist_cab_new.reimpresor_tbc_hist_cab_new_to_tbc_obras.obr_razonsoc
				globals.anatopat_plan=reimpresor_vhiscli_to_tbc_hist_cab_new.histcabplanx	
				globals.anatopat_beneficiario=reimpresor_vhiscli_to_tbc_hist_cab_new.histcabnrobenef
				globals.anatopat_documento=reimpresor_vhiscli_to_tbc_hist_cab_new.histcabnrodoc
				globals.anatopat_interven=reimpresor_vhiscli_to_tbc_ciruguar.reimpresor_tbc_ciruguar_to_tbc_interven.itv_descripcion
				forms.frm_anatomia_patologica_html_1.sub_buildReport();
				
				forms.frm_anatomia_patologica_html_3.sub_buildReport_2();
				
				if(globals.anatopatHTML4!=''&&globals.anatopatHTML3!=''&&globals.anatopatHTML2!=''&&globals.anatopatHTML1!=''){
					globals.anatopatHOJA4='Hoja 4 de 4'
					globals.anatopatHOJA3='Hoja 3 de 4'
					globals.anatopatHOJA2='Hoja 2 de 4'
					globals.anatopatHOJA1='Hoja 1 de 4'
				}else{
					if(globals.anatopatHTML3!=''&&globals.anatopatHTML2!=''&&globals.anatopatHTML1!=''){
						globals.anatopatHOJA3='Hoja 3 de 3'
						globals.anatopatHOJA2='Hoja 2 de 3'
						globals.anatopatHOJA1='Hoja 1 de 3'
					}else{
						if(globals.anatopatHTML3!=''&&globals.anatopatHTML1!=''){
							globals.anatopatHOJA3='Hoja 2 de 2'
							globals.anatopatHOJA1='Hoja 1 de 2'
						}else{
							globals.anatopatHOJA1='Hoja 1 de 1'
						}
					}
				}
				globals.vfrmActual='frm_anatomia_patologica_html_1'
				globals.printRoutine4('frm_anatomia_patologica_html_1', null);
			
				if(globals.anatopatHTML2!=''){
					globals.vfrmActual='frm_anatomia_patologica_html_2'
					globals.printRoutine4('frm_anatomia_patologica_html_2', null);
				}
				globals.vfrmActual='frm_anatomia_patologica_html_3'
				globals.printRoutine4('frm_anatomia_patologica_html_3', null);
				if(globals.anatopatHTML4!=''){
					globals.vfrmActual='frm_anatomia_patologica_html_4'
					globals.printRoutine4('frm_anatomia_patologica_html_4', null);
				}
				globals.anatopatHTML1='';
				
				forms.frm_anatomia_patologica_html_1.sub_buildReport();
				
				globals.anatopatHOJA1='Hoja 1 de 1'
				globals.vfrmActual='frm_anatomia_patologica_html_1'
				globals.printRoutine4('frm_anatomia_patologica_html_1', null);
			}
			//Historia Clinica de Ingreso
			if(reimpresor_vhiscli_to_tbc_hcicir_new.getSize()>0){
				globals.numeroJobs9=10	  
				forms.reimpresor_frm_historia_clinica_ingreso.sub_buildReport();
				if(globals.hcicirHTML4!=''){
					globals.hcicirHOJA4='Hoja 4 de 4'
					globals.hcicirHOJA3='Hoja 3 de 4'
					globals.hcicirHOJA2='Hoja 2 de 4'
					globals.hcicirHOJA1='Hoja 1 de 4'
				}else{
					if(globals.anatopatHTML3!=''){
						globals.hcicirHOJA3='Hoja 3 de 3'
						globals.hcicirHOJA2='Hoja 2 de 3'
						globals.hcicirHOJA1='Hoja 1 de 3'
					}else{
						if(globals.hcicirHTML2!=''){
							globals.hcicirHOJA3='Hoja 2 de 2'
							globals.hcicirHOJA1='Hoja 1 de 2'
						}else{
							globals.hcicirHOJA1='Hoja 1 de 1'
						}
					}
				}
				globals.vfrmActual='reimpresor_frm_historia_clinica_ingreso'
				globals.printRoutine4('reimpresor_frm_historia_clinica_ingreso', null);
			}
		}
	}else{
		if(globals.vListado=='Hoja de Anestesia'){
			if(reimpresor_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1){
				
				forms.reimpresor_frm_anestesia.sub_buildReportNew();
			} 
		}else{
			if(globals.vListado=='Seguridad Quirúrgica'){
				if(reimpresor_key_guardia_to_tbc_seguqui_new.getSize()>0){
					//Seguridad Quirurgica
					forms.reimpresor_frm_seguqui_html_1.sub_buildReport();
					globals.vfrmActual='reimpresor_frm_seguqui_html_1'
					
					globals.printRoutine4('reimpresor_frm_seguqui_html_1', null);
					
					if(globals.seguquiHTML2!=''){
						globals.vfrmActual='reimpresor_frm_seguqui_html_2'
						
						globals.printRoutine4('reimpresor_frm_seguqui_html_2', null);
					}
				}
			}else{
				
				if(globals.vListado=='Certificado de Implante'){
					globals.reimpresor_grupoTexto=4
					
					if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0 || reimpresor_vhiscli_to_tbl_proamb_t.getSize()>0){
						encontre_protesis=true
					}else{
						globals.reimpresor_grupoTexto=5
						if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0 || reimpresor_vhiscli_to_tbl_proamb_t.getSize()>0){
							encontre_protesis=true
						}
					}
					application.output(encontre_protesis)
					if(encontre_protesis){
						forms.reimpresor_frm_certificado_implante.sub_buildReport();
						globals.vfrmActual='reimpresor_frm_certificado_implante'
						globals.printRoutine4('reimpresor_frm_certificado_implante', null);
						globals.printRoutine4('reimpresor_frm_certificado_implante', null);
					}
				}else{
					if(globals.vListado=='Solicitud de Anatomía Patológica'){
						
					}else{
						if(globals.vListado=='Historia Clinica de Ingreso'){
							if(reimpresor_vhiscli_to_tbc_hcicir_new.getSize()>0){
								globals.numeroJobs9=10	  
								forms.reimpresor_frm_historia_clinica_ingreso.sub_buildReport();
								if(globals.hcicirHTML4!=''){
									globals.hcicirHOJA4='Hoja 4 de 4'
									globals.hcicirHOJA3='Hoja 3 de 4'
									globals.hcicirHOJA2='Hoja 2 de 4'
									globals.hcicirHOJA1='Hoja 1 de 4'
								}else{
									if(globals.anatopatHTML3!=''){
										globals.hcicirHOJA3='Hoja 3 de 3'
										globals.hcicirHOJA2='Hoja 2 de 3'
										globals.hcicirHOJA1='Hoja 1 de 3'
									}else{
										if(globals.hcicirHTML2!=''){
											globals.hcicirHOJA3='Hoja 2 de 2'
											globals.hcicirHOJA1='Hoja 1 de 2'
										}else{
											globals.hcicirHOJA1='Hoja 1 de 1'
										}
									}
								}
								globals.vfrmActual='reimpresor_frm_historia_clinica_ingreso'
								globals.printRoutine4('reimpresor_frm_historia_clinica_ingreso', null)
							}
						}else{
							if(globals.vListado=='Ficha Anestésica'){
								crear_ds_grilla_fichaanestesica()
								forms.fichaaneste_impr_det_1.controller.setPageFormat(210,297,15,5,3,2,1,0);
								forms.fichaaneste_impr_det_1.controller.print(false,false); 
							}
						}
					}
				}
			}
		}
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D6247924-67FE-40A0-A6E6-7BBC11B4D98B"}
 */
function onHide_reimpresor_frm_consulta_protocolo(event) {
	// TODO Auto-generated method stub
	return globals.vClose
}

/**
 *
 * @return {String}
 * @properties={typeid:24,uuid:"D1616912-3996-45FE-8487-3C4CCC2FCE80"}
 * @AllowToRunInFind
 */
function imprime_protocolo_ambulatorio_PDF() {
	
	var absoluteFile = '';
	var fileNameReport = '';
	var result = false;
	
	globals.protoHTML1='';
	globals.protoHTML2='';
	globals.protoHTML3='';
	globals.protoHTML4='';
	globals.protoHTML5='';
	globals.protoHTML6='';
	globals.seguquiHTML1='';
	globals.seguquiHTML2='';
	globals.anesteHTML1='';
	globals.anesteHTML2='';
	globals.anesteHTML3='';
	globals.anesteHTML4='';
	globals.anesteHTML5='';
	globals.anesteHTML6='';
	globals.anatopatHTML1='';
	globals.anatopatHTML2='';
	globals.anatopatHTML3='';
	globals.anatopatHTML4='';
	globals.implanteHTML1='';
	globals.hcicirHTML1='';
	globals.hcicirHTML2='';
	globals.hcicirHTML3='';
	globals.hcicirHTML4='';
	
	globals.protoHOJA1='';
	globals.protoHOJA2='';
	globals.protoHOJA3='';
	globals.protoHOJA4='';
	globals.protoHOJA5='';
	globals.protoHOJA6='';
	globals.seguquiHOJA1='Hoja 1 de 2';
	globals.seguquiHOJA2='Hoja 2 de 2';
	globals.anesteHOJA1='';
	globals.anesteHOJA2='';
	globals.anesteHOJA3='';
	globals.anesteHOJA4='';
	globals.anesteHOJA5='';
	globals.anesteHOJA6='';
	globals.anatopatHOJA1='';
	globals.anatopatHOJA2='';
	globals.anatopatHOJA3='';
	globals.anatopatHOJA4='';
	globals.hcicirHOJA1='';
	globals.hcicirHOJA2='';
	globals.hcicirHOJA3='';
	globals.hcicirHOJA4='';
	var encontre_protesis=false
	//var frm = currentcontroller.getName()
    //var success = plugins.pdf_output.startMetaPrintJob('c:/temp/out.pdf')
    var str=globals.reimpresor_protocolo
	//plugins.dialogs.showInfoDialog("str",globals.protocolo)
	str=str.toString()
	str=str.split('|')
    globals.vNroProtocolo=utils.stringToNumber(str[0])
	globals.vFechaActual=utils.stringToNumber(str[1])
	globals.vHoraCarga=utils.stringToNumber(str[2])
	globals.Nprotocolo=globals.vNroProtocolo
	globals.vHisclin=globals.vHiscli
	globals.vEdad=scopes.globals.reimpresor_CalculaEdad(reimpresor_vhiscli_to_tbc_hist_cab_new.histcabfechanac, globals.reimpresor_fecha_ingreso)
	globals.anesambu_fechaingreso=reimpresor_protocolo_to_tbc_ciruguar.cirgfechaingreso
	globals.anesambu_horaingreso=reimpresor_protocolo_to_tbc_ciruguar.cirghoraingreso
	globals.segambu_fecha_ingreso=globals.anesambu_fechaingreso
	globals.protambu1400_fechaingreso=globals.anesambu_fechaingreso
	globals.reimpresor_fecha_ingreso=globals.anesambu_fechaingreso
	globals.segambu_hora_ingreso=globals.anesambu_horaingreso
	globals.protambu1400_hora_ingreso=globals.anesambu_horaingreso
	globals.reimpresor_hora_ingreso=globals.anesambu_horaingreso
	
	
	if(globals.vListado=='Protocolo Quirúrgico'){
		globals.numeroJobs9=1
		absoluteFile = forms.reimpresor_frm_protocolo.sub_buildReportNew_PDF()
		/*
		if(globals.vTipoListado==4){
			if(reimpresor_key_guardia_to_tbc_seguqui_new.getSize()>0){
				//Seguridad Quirurgica
				forms.reimpresor_frm_seguqui_html_1.sub_buildReport();
				globals.vfrmActual='reimpresor_frm_seguqui_html_1'
				
				globals.printRoutine4('reimpresor_frm_seguqui_html_1', null);
				
				if(globals.seguquiHTML2!=''){
					globals.vfrmActual='reimpresor_frm_seguqui_html_2'
					
					globals.printRoutine4('reimpresor_frm_seguqui_html_2', null);
				}
			}
			//Hoja de Anestesia
			if(reimpresor_protocolo_to_tbc_ciruguar.cirgusoanestesia==1){
				forms.reimpresor_frm_anestesia.sub_buildReportNew();
			}
			//Certificado de Implante
			globals.reimpresor_grupoTexto=4
			if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0 || reimpresor_vhiscli_to_tbl_proamb_t>0){
				encontre_protesis=true
			}else{
				globals.reimpresor_grupoTexto=5
				if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0 || reimpresor_vhiscli_to_tbl_proamb_t>0){
					encontre_protesis=true
				}
			}
			if(encontre_protesis){
				forms.reimpresor_frm_certificado_implante.sub_buildReport();
				globals.vfrmActual='reimpresor_frm_certificado_implante'
				globals.printRoutine4('reimpresor_frm_certificado_implante', null);
				globals.printRoutine4('reimpresor_frm_certificado_implante', null);
			}
			
			//Solicitud de Anatomia Patologica
			if(vs2_to_tbc_anatpaca.getSize()>0){
				forms.frm_anatomia_patologica_html_1.sub_buildReport();
				forms.frm_anatomia_patologica_html_3.sub_buildReport_2();
				if(globals.anatopatHTML4!=''&&globals.anatopatHTML3!=''&&globals.anatopatHTML2!=''&&globals.anatopatHTML1!=''){
					globals.anatopatHOJA4='Hoja 4 de 4'
					globals.anatopatHOJA3='Hoja 3 de 4'
					globals.anatopatHOJA2='Hoja 2 de 4'
					globals.anatopatHOJA1='Hoja 1 de 4'
				}else{
					if(globals.anatopatHTML3!=''&&globals.anatopatHTML2!=''&&globals.anatopatHTML1!=''){
						globals.anatopatHOJA3='Hoja 3 de 3'
						globals.anatopatHOJA2='Hoja 2 de 3'
						globals.anatopatHOJA1='Hoja 1 de 3'
					}else{
						if(globals.anatopatHTML3!=''&&globals.anatopatHTML1!=''){
							globals.anatopatHOJA3='Hoja 2 de 2'
							globals.anatopatHOJA1='Hoja 1 de 2'
						}else{
							globals.anatopatHOJA1='Hoja 1 de 1'
						}
					}
				}
				globals.vfrmActual='frm_anatomia_patologica_html_1'
				globals.printRoutine4('frm_anatomia_patologica_html_1', null);
			
				if(globals.anatopatHTML2!=''){
					globals.vfrmActual='frm_anatomia_patologica_html_2'
					globals.printRoutine4('frm_anatomia_patologica_html_2', null);
				}
				globals.vfrmActual='frm_anatomia_patologica_html_3'
				globals.printRoutine4('frm_anatomia_patologica_html_3', null);
				if(globals.anatopatHTML4!=''){
					globals.vfrmActual='frm_anatomia_patologica_html_4'
					globals.printRoutine4('frm_anatomia_patologica_html_4', null);
				}
				globals.anatopatHTML1='';
				forms.frm_anatomia_patologica_html_1.sub_buildReport();
				globals.anatopatHOJA1='Hoja 1 de 1'
				globals.vfrmActual='frm_anatomia_patologica_html_1'
				globals.printRoutine4('frm_anatomia_patologica_html_1', null);
			}
			//Historia Clinica de Ingreso
			if(reimpresor_vhiscli_to_tbc_hcicir_new.getSize()>0){
				globals.numeroJobs9=10	  
				forms.reimpresor_frm_historia_clinica_ingreso.sub_buildReport();
				if(globals.hcicirHTML4!=''){
					globals.hcicirHOJA4='Hoja 4 de 4'
					globals.hcicirHOJA3='Hoja 3 de 4'
					globals.hcicirHOJA2='Hoja 2 de 4'
					globals.hcicirHOJA1='Hoja 1 de 4'
				}else{
					if(globals.anatopatHTML3!=''){
						globals.hcicirHOJA3='Hoja 3 de 3'
						globals.hcicirHOJA2='Hoja 2 de 3'
						globals.hcicirHOJA1='Hoja 1 de 3'
					}else{
						if(globals.hcicirHTML2!=''){
							globals.hcicirHOJA3='Hoja 2 de 2'
							globals.hcicirHOJA1='Hoja 1 de 2'
						}else{
							globals.hcicirHOJA1='Hoja 1 de 1'
						}
					}
				}
				globals.vfrmActual='reimpresor_frm_historia_clinica_ingreso'
				globals.printRoutine4('reimpresor_frm_historia_clinica_ingreso', null);
			}
		}
		*/
	}else{
		if(globals.vListado=='Hoja de Anestesia'){
			if(reimpresor_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1){
				
				absoluteFile = forms.reimpresor_frm_anestesia.sub_buildReportNew_PDF();
			}
		}else{
			if(globals.vListado=='Seguridad Quirúrgica'){
				if(reimpresor_key_guardia_to_tbc_seguqui_new.getSize()>0){
					//Seguridad Quirurgica
					result = forms.reimpresor_frm_seguqui_html_1.sub_buildReport();
					if(result){
						
						globals.vfrmActual='reimpresor_frm_seguqui_html_1'
						//globals.printRoutine4('reimpresor_frm_seguqui_html_1', null);
						forms[globals.vfrmActual].foundset.find()
						forms[globals.vfrmActual].foundset['tipo']='talon-3'
						forms[globals.vfrmActual].foundset.search()
						
						forms[globals.vfrmActual].controller.setPageFormat(210,297,10,10,10,10,1,0);
						fileNameReport = "SEGURIDAD-QUIRURGICA-AMB-" + globals.reimpresor_protocolo;
						
						absoluteFile = globals.GenerarReporte_servoyPDF(globals.vfrmActual,fileNameReport + '-1');
						
						if(globals.seguquiHTML2!=''){
							globals.vfrmActual='reimpresor_frm_seguqui_html_2'
							//globals.printRoutine4('reimpresor_frm_seguqui_html_2', null);
							forms[globals.vfrmActual].foundset.find()
							forms[globals.vfrmActual].foundset['tipo']='talon-3'
							forms[globals.vfrmActual].foundset.search()
							
							forms[globals.vfrmActual].controller.setPageFormat(210,297,10,10,10,10,1,0);
							
							var absoluteFile_2 = globals.GenerarReporte_servoyPDF(globals.vfrmActual,fileNameReport +'-2');
							var absoluteFile_1 = absoluteFile;
							absoluteFile = plugins.servoyguy_pdf_pro.merge([absoluteFile_1,absoluteFile_2]);
							
							//Eliminado archivos auxiliares
							plugins.file.deleteFile(absoluteFile_1);
							plugins.file.deleteFile(absoluteFile_2);
						}
					}
				}
			}else{
				if(globals.vListado=='Certificado de Implante'){
					globals.reimpresor_grupoTexto=4
					if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0 || reimpresor_vhiscli_to_tbl_proamb_t>0){
						encontre_protesis=true
					}else{
						globals.reimpresor_grupoTexto=5
						if(reimpresor_vhiscli_to_tbc_proamb_t.getSize()>0 || reimpresor_vhiscli_to_tbl_proamb_t>0){
							encontre_protesis=true
						}
					}
					if(encontre_protesis){
						forms.reimpresor_frm_certificado_implante.sub_buildReport();
						globals.vfrmActual='reimpresor_frm_certificado_implante'
						//globals.printRoutine4('reimpresor_frm_certificado_implante', null);
						
						forms[globals.vfrmActual].foundset.find()
						forms[globals.vfrmActual].foundset['tipo']='talon-3'
						forms[globals.vfrmActual].foundset.search()
						
						forms[globals.vfrmActual].controller.setPageFormat(210,297,10,10,10,10,1,0);
						forms[globals.vfrmActual]
						
						fileNameReport = "CERTIFICADO-IMPLANTE-AMB-" + globals.reimpresor_protocolo;
						
						absoluteFile = globals.GenerarReporte_servoyPDF(globals.vfrmActual,fileNameReport);
					}
				}else{
					if(globals.vListado=='Solicitud de Anatomía Patológica'){
						
					}else{
						if(globals.vListado=='Historia Clinica de Ingreso'){
							if(reimpresor_vhiscli_to_tbc_hcicir_new.getSize()>0){
								globals.numeroJobs9=10	  
								result =  forms.reimpresor_frm_historia_clinica_ingreso.sub_buildReport();
								
								if(result){
									
									if(globals.hcicirHTML4!=''){
										globals.hcicirHOJA4='Hoja 4 de 4'
										globals.hcicirHOJA3='Hoja 3 de 4'
										globals.hcicirHOJA2='Hoja 2 de 4'
										globals.hcicirHOJA1='Hoja 1 de 4'
									}else{
										if(globals.anatopatHTML3!=''){
											globals.hcicirHOJA3='Hoja 3 de 3'
											globals.hcicirHOJA2='Hoja 2 de 3'
											globals.hcicirHOJA1='Hoja 1 de 3'
										}else{
											if(globals.hcicirHTML2!=''){
												globals.hcicirHOJA3='Hoja 2 de 2'
												globals.hcicirHOJA1='Hoja 1 de 2'
											}else{
												globals.hcicirHOJA1='Hoja 1 de 1'
											}
										}
									}
									
									globals.vfrmActual='reimpresor_frm_historia_clinica_ingreso'
									//globals.printRoutine4('reimpresor_frm_historia_clinica_ingreso', null)
									forms[globals.vfrmActual].foundset.find()
									forms[globals.vfrmActual].foundset['tipo']='talon-3'
									forms[globals.vfrmActual].foundset.search()
									
									forms[globals.vfrmActual].controller.setPageFormat(210,297,10,10,10,10,1,0);
									fileNameReport = "HISTORIA-CLINICA-AMB-" + globals.reimpresor_protocolo;
									
									absoluteFile = globals.GenerarReporte_servoyPDF(globals.vfrmActual,fileNameReport);
								}
								
							}
						}
					}
				}
			}
		}
	}
	
	return absoluteFile;
}

/**
 * @properties={typeid:24,uuid:"1A4FD8CB-2BE2-44D9-9877-0B38404E4FAD"}
 */
function crear_ds_grilla_fichaanestesica() {
	var fichaanestesia_cab_id = vs_to_fichaaneste_cab.fichaaneste_cab_id
	var $SQL = "SELECT min_col, tipo_medicion_cod, valor, tipo.simbolo FROM fichaaneste_det med LEFT JOIN fichaaneste_tipomedicion tipo ON tipo.codigo = med.tipo_medicion_cod where fichaaneste_cab_id = "+fichaanestesia_cab_id+" order by fichaaneste_cab_id , min_col, tipo_medicion_cod"
	var frm_ds = databaseManager.getDataSetByQuery("desal", $SQL, null, 500);
    
   	var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('fhora_edit',1,JSColumn.TEXT)   
	$ds.addColumn('fanest',2,JSColumn.TEXT)
	$ds.addColumn('foper',3,JSColumn.TEXT)
	$ds.addColumn('fsatur',4,JSColumn.INTEGER)
	$ds.addColumn('fco2',5,JSColumn.INTEGER)
	$ds.addColumn('ft_max',6,JSColumn.INTEGER)
	$ds.addColumn('ft_min',7,JSColumn.INTEGER)
	$ds.addColumn('fpulso',8,JSColumn.INTEGER)
	var $max   = frm_ds.getMaxRowIndex()
	
	var $fila  = null
	var $hora_edit = ' ';
   	var $tmax  = null //0
	var $tmin  = null //0
	var $pulso = null //0
	var $satur = null  //0
	var $co2   = null  //0
	var $oper  = null
	var $anest = null
		
	if ($max > 0){
		for(var i = 1; i <= $max; i++){
			if ($fila == null)
				{$fila = frm_ds.getValue(i,1)
					var $fec  = new Date(vs_to_fichaaneste_cab.fecha_inicio.getFullYear(), vs_to_fichaaneste_cab.fecha_inicio.getMonth(), vs_to_fichaaneste_cab.fecha_inicio.getDate(), vs_to_fichaaneste_cab.fecha_inicio.getHours(), vs_to_fichaaneste_cab.fecha_inicio.getMinutes() + frm_ds.getValue(i,1), 0, 0)	
				var $min  = $fec.getMinutes()
				var $hora = $fec.getHours()
				if ($min < 10)
					{$min = '0' + $min}	
				if ($hora < 10)
					{$hora = '0' + $hora}
				$hora_edit = $hora +':' + $min
				}
			
			if ($fila != frm_ds.getValue(i,1))
			{
				$ds.addRow([$hora_edit,$anest,$oper,$satur,$co2,$tmax,$tmin,$pulso])
				$fila = frm_ds.getValue(i,1)
				$tmax  = null  // 0
				$tmin  = null  // 0
				$pulso = null  // 0
				$satur = null  //0
				$co2   = null  //0
				$oper  = null
				$anest = null
				var $fec  = new Date(vs_to_fichaaneste_cab.fecha_inicio.getFullYear(), vs_to_fichaaneste_cab.fecha_inicio.getMonth(), vs_to_fichaaneste_cab.fecha_inicio.getDate(), vs_to_fichaaneste_cab.fecha_inicio.getHours(), vs_to_fichaaneste_cab.fecha_inicio.getMinutes() + frm_ds.getValue(i,1), 0, 0)	
				var $min  = $fec.getMinutes()
				var $hora = $fec.getHours()
				if ($min < 10)
					{$min = '0' + $min}	
				if ($hora < 10)
					{$hora = '0' + $hora}
				$hora_edit = $hora +':' + $min
			}

			switch(frm_ds.getValue(i,2))
				{
				case 1:
					$tmax = frm_ds.getValue(i,3).toString();
					break;
				case 2:
					$tmin = frm_ds.getValue(i,3).toString();
					break;
				case 3:
					$pulso = frm_ds.getValue(i,3).toString();
					break;
				case 4:
					$satur = frm_ds.getValue(i,3).toString();
					break;
				case 5:
					$co2   = frm_ds.getValue(i,3).toString();
					break;
				case 6:
					$anest = plugins.http.getMediaData('media:///anestesia.png')
					break;
				case 7:
					$oper  = plugins.http.getMediaData('media:///operacion.png')
				break;
				}
			
		}
		$ds.addRow([$hora_edit,$anest,$oper,$satur,$co2,$tmax,$tmin,$pulso]) 		
	
	//var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT]
	var $tipos = [JSColumn.TEXT,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT]

	var $frm = solutionModel.getForm('fichaaneste_impr_det_1')
	$frm.dataSource = $ds.createDataSource('Ds_Grilla', $tipos)   
	forms.fichaaneste_impr_det_1.controller.recreateUI()

	}

}
