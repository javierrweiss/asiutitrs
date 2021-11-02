/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E8483BC0-AFF2-489B-8B88-C80B4D0709E0"}
 */
var fLegajoApeynom = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E2CE43FC-227D-4700-9048-E56DC904CED4",variableType:4}
 */
var fTipoOperador = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AE0A6313-3981-42D8-9A49-350626919687"}
 */
var fOperadorActual = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5F20866D-E6FE-49DA-9AB9-B6CB0F0C0DD4"}
 */
var fOperador = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0928942C-7027-44DC-AA8D-37A5A271C0E7",variableType:4}
 */
var fLega = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7B7CA9BB-A660-4282-A885-95832AF48EBA",variableType:4}
 */
var fLegajo = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D5E95D7B-D795-4C45-9180-2E49E20CA93A"}
 */
function onShow_frm_abm_legajo(firstShow, event) {
	elements.lbl_estado_proceso.text=''
	elements.fld_per1_str.visible=false
	elements.fld_per1_str.enabled=false
	elements.btn_imprime.enabled=false;
    elements.lbl_imprime.enabled=false;
	globals.per_foto=plugins.images.getImage('c:\\temp\\fr_sin_foto_H.png')
	globals.vLega=globals.vLegajo
	globals.vlargo= globals.vLega.toString().length - 1;
    globals.vLega=globals.vLega.toString().substr(0,globals.vlargo)
	globals.digito_verificador = utils.stringToNumber(globals.vLegajo.toString().substr(globals.vlargo, 1))
	if (globals.digito_verificador == 0){
		if (vlegajo_to_tbc_medicos.getSize()>0){
			globals.vOperador=vlegajo_to_tbc_medicos.med_apenom;
			globals.vTipoOperador=1
		}else{
	    	if(vlegajo_to_tbc_personal_login.getSize()>0){
	    		globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
				globals.vTipoOperador=0
			}else{
	    		if(vlegajo_to_tbc_perext.getSize()>0){
	    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
	    			globals.vTipoOperador=2
				
	    		}
	    	}
		}
	}else{
		if(vlegajo_to_tbc_personal_login.getSize()>0){
		        globals.vOperador=vlegajo_to_tbc_personal_login.per_apelnom;
	        	globals.vTipoOperador=0
	   	}else{
	    		if(vlegajo_to_tbc_perext.getSize()>0){
	    			globals.vOperador=vlegajo_to_tbc_perext.perext_nom;
	    			globals.vTipoOperador=2
				
	    		}
	    }
	}
    //globals.per_firma=plugins.images.getImage('c:\\temp\\FIRMA_DRA_CAMARA_2.gif').resize(120,120)
	inicializoFrmLegajo();
	globals.cargaFamiliares=false
	globals.tit_solucion="Tratamiento de Legajo de Personal"
	elements.per_vto_firma_fec.editable=false
	elements.btn_captura.enabled=false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD7F995A-832B-4865-ACB3-2AA57291AC5B"}
 */
function onAction_captura_foto(event) {
	//currentcontroller.enabled = false
	var osname = application.getOSName()
	//var $sacaFoto=null
	if (osname.charAt(0) == 'W') {
		plugins.file.deleteFile('c:\\temp\\foto.jpg')
	   //$sacaFoto=application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", "c:\\temp\\FotoWebCam2.jar "+"c:\\temp\\"+globals.per_8+".jpg"]);
		//$sacaFoto=application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", "c:\\temp\\FotoWebCam2.jar", "c:\\temp\\foto.jpg" ] );
		application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", "c:\\temp\\FotoWebCam2.jar" ] );
	}else{
		plugins.file.deleteFile('//home//administrador//Documentos//temp//foto.jpg')
		application.executeProgram("xdg-open", ["//home//administrador//Documentos//temp//FotoWebCam2.jar"]);	
	}
	//espera 10 segundos	
	application.sleep(10000)
	//application.output(globals.per_1)
	//activa el formulario
	//currentcontroller.enabled = true
	//plugins.file.showFileSaveDialog(globals.per_8+'.jpg')
		//application.output('error')
	//}
	/*
	var f = plugins.file.convertToJSFile('c:\\temp\\foto.jpg');
	
	var fcopy = plugins.file.createFile("c:\\temp\\"+globals.per_1+".jpg");
	if (!plugins.file.copyFile(f, fcopy))
		application.output("Copy failed.");
	*/
	// or for a remote file:
	// var f = plugins.convertToRemoteJSFile('/story.txt');
	// f.renameTo('/otherstory.txt');
	//application.sleep(20000)
	//application.output(f.getAbsolutePath())
	//application.output(f.getAbsoluteFile())
	//globals.per_foto=plugins.images.getImage("c:\\temp\\"+globals.per_1+".jpg")
	globals.per_foto=plugins.images.getImage("c:\\temp\\foto.jpg")
	application.updateUI()
	//.resize(145,145)
	//application.updateUI()
	
}

/**
 * @properties={typeid:24,uuid:"0D33C370-96D5-4BAA-9244-EAADB663B55B"}
 * @AllowToRunInFind
 */
function muestraLegajo() {
	if(globals.per_1!=0){
		if(legajo_to_tbc_personal_rrhh.getSize()>0){
			globals.per_1_str=legajo_to_tbc_personal_rrhh.per_1_str
			globals.per_84=legajo_to_tbc_personal_rrhh.per_84
			globals.per_18=legajo_to_tbc_personal_rrhh.per_18
			
			for (var i = 0; i < legajo_to_tbc_personal_rrhh.alldataproviders.length; i++) {
				var name = legajo_to_tbc_personal_rrhh.alldataproviders[i]
				if(name.substr(0,4)=='per_'){
					globals[name]=legajo_to_tbc_personal_rrhh[name]
				}
			}
			
			if(legajo_to_tbc_personal_rrhh.per_9>0&&legajo_to_tbc_personal_rrhh.per_9!=null){
				var fecha = legajo_to_tbc_personal_rrhh.per_9.toString()
				globals.per_9_fec=globals.per_9_fec.setFullYear(utils.stringToNumber(fecha.substr(0,4)))
				globals.per_9_fec=globals.per_9_fec.setMonth(utils.stringToNumber(fecha.substr(4,2)-1))
				globals.per_9_fec=globals.per_9_fec.setDate(utils.stringToNumber(fecha.substr(6,2)))
			}else{
				globals.per_9_fec=null
			}
			if(legajo_to_tbc_personal_rrhh.per_13>0&&legajo_to_tbc_personal_rrhh.per_13!=null){
				var fecha1 = legajo_to_tbc_personal_rrhh.per_13.toString()
				globals.per_13_fec=globals.per_13_fec.setFullYear(utils.stringToNumber(fecha1.substr(0,4)))
				globals.per_13_fec=globals.per_13_fec.setMonth(utils.stringToNumber(fecha1.substr(4,2)-1))
				globals.per_13_fec=globals.per_13_fec.setDate(utils.stringToNumber(fecha1.substr(6,2)))
			}else{
				globals.per_13_fec=null
			}
			if(legajo_to_tbc_personal_rrhh.per_15>0&&legajo_to_tbc_personal_rrhh.per_15!=null){
				var fecha2 = legajo_to_tbc_personal_rrhh.per_15.toString()
				globals.per_15_fec=globals.per_15_fec.setFullYear(utils.stringToNumber(fecha2.substr(0,4)))
				globals.per_15_fec=globals.per_15_fec.setMonth(utils.stringToNumber(fecha2.substr(4,2)-1))
				globals.per_15_fec=globals.per_15_fec.setDate(utils.stringToNumber(fecha2.substr(6,2)))
			}else{
				globals.per_15_fec=null
			}
			if(legajo_to_tbc_personal_rrhh.per_17_8>0&&legajo_to_tbc_personal_rrhh.per_17_8!=null){
				var fecha3 = legajo_to_tbc_personal_rrhh.per_17_8.toString()
				globals.per_17_8_fec=globals.per_17_8_fec.setFullYear(utils.stringToNumber(fecha3.substr(0,4)))
				globals.per_17_8_fec=globals.per_17_8_fec.setMonth(utils.stringToNumber(fecha3.substr(4,2)-1))
				globals.per_17_8_fec=globals.per_17_8_fec.setDate(utils.stringToNumber(fecha3.substr(6,2)))
				
			}else{
				globals.per_17_8_fec=null
			}
			if(legajo_to_tbc_personal_rrhh.per_vto_firma>0&&legajo_to_tbc_personal_rrhh.per_vto_firma!=null){
				var fecha4 = legajo_to_tbc_personal_rrhh.per_vto_firma.toString()
				globals.per_vto_firma_fec=new Date()
				globals.per_vto_firma_fec=globals.per_vto_firma_fec.setFullYear(utils.stringToNumber(fecha4.substr(0,4)))
				globals.per_vto_firma_fec=globals.per_vto_firma_fec.setMonth(utils.stringToNumber(fecha4.substr(4,2)-1))
				globals.per_vto_firma_fec=globals.per_vto_firma_fec.setDate(utils.stringToNumber(fecha4.substr(6,2)))
				
			}else{
				globals.per_vto_firma_fec=null
			}
			if(legajo_to_tbc_personal_rrhh.per_vto_matricula>0&&legajo_to_tbc_personal_rrhh.per_vto_matricula!=null){
				var fecha5 = legajo_to_tbc_personal_rrhh.per_vto_matricula.toString()
				globals.per_vto_matricula_fec=new Date()
				globals.per_vto_matricula_fec=globals.per_vto_matricula_fec.setFullYear(utils.stringToNumber(fecha5.substr(0,4)))
				globals.per_vto_matricula_fec=globals.per_vto_matricula_fec.setMonth(utils.stringToNumber(fecha5.substr(4,2)-1))
				globals.per_vto_matricula_fec=globals.per_vto_matricula_fec.setDate(utils.stringToNumber(fecha5.substr(6,2)))
				
			}else{
				globals.per_vto_matricula_fec=null
			}
			if(legajo_to_tbc_personal_rrhh.per_106>0&&legajo_to_tbc_personal_rrhh.per_106!=null){
				globals.per_106_grupo=utils.stringToNumber(globals.per_106.toString().substr(0,2))
				globals.per_106_edit=utils.stringToNumber(globals.per_106.toString().substr(2,8))
				globals.per_106_edit_str=globals.per_106.toString().substr(2,8)
				globals.per_106_dig_verif=utils.stringToNumber(globals.per_106.toString().substr(10,1))
			}else{
				globals.per_106_grupo=0
				globals.per_106_edit=0
				globals.per_106_edit_str=''
				globals.per_106_dig_verif=0
			}
			if((legajo_to_tbc_personal_rrhh.per_16!=0 && legajo_to_tbc_personal_rrhh.per_44!=0)||(per_1_to_tbc_personal_rrhh.per_16!=0 && per_1_to_tbc_personal_rrhh.per_44!=0)){
				//elements.lbl_msg_baja.bgcolor="#FA5858"
				//elements.lbl_msg_baja.fgcolor="#FA5858"	
				globals.msg_baja="Dado de Baja.        Fecha:"+per_1_to_tbc_personal_rrhh.per_16.toString().substr(6,2)+"/"+per_1_to_tbc_personal_rrhh.per_16.toString().substr(4,2)+"/"+per_1_to_tbc_personal_rrhh.per_16.toString().substr(0,4)+"       Motivo:"+application.getValueListDisplayValue("vl_motivo_baja",per_1_to_tbc_personal_rrhh.per_44)
				globals.per_16=per_1_to_tbc_personal_rrhh.per_16
				globals.per_44=per_1_to_tbc_personal_rrhh.per_44
			}else{
				globals.msg_baja=""
			}
			if(legajo_to_tbc_personal_rrhh.per_nrocta>0&&legajo_to_tbc_personal_rrhh.per_nrocta!=null){
				globals.per_nrocta=legajo_to_tbc_personal_rrhh.per_nrocta
			}else{
				globals.per_nrocta=per_1_to_tbc_personal_rrhh.per_nrocta
			}
			if(legajo_to_tbc_personal_rrhh.per_55>0&&legajo_to_tbc_personal_rrhh.per_55!=null){
				globals.per_55=legajo_to_tbc_personal_rrhh.per_55
				globals.per_55_str=legajo_to_tbc_personal_rrhh.per_55_str.toString()
				var largo=0
				if(globals.per_55_str!=null){
					largo=globals.per_55_str.toString().length
				}
				if(largo<22){
					if(largo==21){
						globals.per_55_bco=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(0,7)), "0")
						globals.per_55_cta=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(7,14)),"0")
					}else{
						if(largo!=0){
							globals.per_55_bco=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(0,6)), "0")
							globals.per_55_cta=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(6,14)),"0")
						}
					}
				}else{
					globals.per_55_bco=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(0,8)),"0")
					globals.per_55_cta=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(8,14)),"0")
				}
				
			}else{
				if(per_1_to_tbc_personal_rrhh.per_55>0&&per_1_to_tbc_personal_rrhh.per_55!=null){
					globals.per_55=per_1_to_tbc_personal_rrhh.per_55
					globals.per_55_str=per_1_to_tbc_personal_rrhh.per_55.toString()
					var largo2=0
					if(globals.per_55_str!=null){
						largo2=globals.per_55_str.toString().length
					}
					if(largo2<22){
						if(largo2==21){
							globals.per_55_bco=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(0,7)), "0")
							globals.per_55_cta=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(7,14)),"0")
						}else{
							if(largo2!=0){
								globals.per_55_bco=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(0,6)), "0")
								globals.per_55_cta=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(6,14)),"0")
							}
						}
					}else{
						globals.per_55_bco=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(0,8)),"0")
						globals.per_55_cta=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(8,14)),"0")
					}
				}
			}
			if(legajo_to_tbc_personal_rrhh.per_55_str!=per_1_to_tbc_personal_rrhh.per_55){
				if(per_1_to_tbc_personal_rrhh.per_52==9){
					if(per_1_to_tbc_personal_rrhh.per_55>0&&per_1_to_tbc_personal_rrhh.per_55!=null){
						globals.per_55=per_1_to_tbc_personal_rrhh.per_55
						globals.per_55_str=per_1_to_tbc_personal_rrhh.per_55.toString()
						var largo3=0
						if(globals.per_55_str!=null){
						 	largo3=globals.per_55_str.toString().length
						}
						if(largo3<22){
							if(largo3==21){
								globals.per_55_bco=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(0,7)), "0")
								globals.per_55_cta=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(7,14)),"0")
							}else{
								if(largo3!=0){
									globals.per_55_bco=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(0,6)), "0")
									globals.per_55_cta=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(6,14)),"0")
								}
							}
						}else{
							globals.per_55_bco=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(0,8)),"0")
							globals.per_55_cta=utils.numberFormat(utils.stringToNumber(globals.per_55_str.substr(8,14)),"0")
						}
					}
				}
			}
			if(legajo_to_tbc_personal_rrhh.per_20==0){
				globals.per_21=0
			}
			if(globals.per_18!=2){
				elements.tabs.setTabEnabledAt(6,false)
			}else{
				muestraDatosProfesional()
				elements.tabs.setTabEnabledAt(6,true)
				forms.frm_datos_profesionales.elements.tabs.enabled=true
				forms.frm_datos_profesionales.elements.tabs.setTabEnabledAt(1,true)
				forms.frm_datos_profesionales.elements.tabs.setTabEnabledAt(2,true)
				forms.frm_datos_profesionales.elements.tabs.setTabEnabledAt(3,true)
				forms.frm_datos_facturacion.elements.tabs.enabled=true
				forms.frm_datos_facturacion.elements.tabs.setTabEnabledAt(1,true)
				forms.frm_datos_facturacion.elements.tabs.setTabEnabledAt(2,true)
				forms.frm_datos_facturacion.elements.tabs.setTabEnabledAt(3,true)
				forms.frm_datos_facturacion.elements.tabs.setTabEnabledAt(4,true)
				forms.frm_datos_facturacion.elements.tabs.setTabEnabledAt(5,true)
			}
			globals.per_26_old=legajo_to_tbc_personal_rrhh.per_26
			globals.per_23_old=legajo_to_tbc_personal_rrhh.per_23
			globals.per_22_old=legajo_to_tbc_personal_rrhh.per_22
			globals.per_84_old=legajo_to_tbc_personal_rrhh.per_84
			globals.per_84_ant=legajo_to_tbc_personal_rrhh.per_84
			globals.per_3_old=legajo_to_tbc_personal_rrhh.per_3
			globals.per_4_old=legajo_to_tbc_personal_rrhh.per_4
			globals.per_5_old=legajo_to_tbc_personal_rrhh.per_5
			globals.per_74_old=legajo_to_tbc_personal_rrhh.per_74
			globals.per_75_old=legajo_to_tbc_personal_rrhh.per_75
			globals.per_76_old=legajo_to_tbc_personal_rrhh.per_76
			globals.per_77_old=legajo_to_tbc_personal_rrhh.per_77
			globals.per_94_old=legajo_to_tbc_personal_rrhh.per_94
			globals.per_52_old=legajo_to_tbc_personal_rrhh.per_52
			globals.per_nrocta_old=legajo_to_tbc_personal_rrhh.per_nrocta
			globals.per_55_str_old=legajo_to_tbc_personal_rrhh.per_55_str
			globals.per_foto=legajo_to_tbc_personal_rrhh.per_foto
			
		}
	}
}

/**
 * @param {String} tipo
 * 
 * @properties={typeid:24,uuid:"5FC28C49-CDD6-4386-91C6-183868BB0137"}
 */
function habilitaDeshabilita(tipo) {
	var max = elements.tabs.getMaxTabIndex()
	//var tipo = 'consulta'
	//var tipo = globals.tit_estado_tratamiento
	
	if(max >0){
		for(var i=1;i<=max;i++){
			var frm = elements.tabs.getTabFormNameAt(i)
			globals.HabilitaDeshabilitaCampos(frm,tipo)
		}
	}
	
	globals.HabilitaDeshabilitaCampos('frm_datos_personales',tipo)
	application.updateUI()
	
	if(globals.per_18!=1){
		globals.HabilitaDeshabilitaCampos('frm_titulo_profesional',tipo)
		globals.HabilitaDeshabilitaCampos('frm_titulo_especialista',tipo)
		globals.HabilitaDeshabilitaCampos('frm_datos_facturacion',tipo)
		globals.HabilitaDeshabilitaCampos('frm_tab_empresas_que_factura',tipo)
		globals.HabilitaDeshabilitaCampos('frm_tab_sectores_que_atiende',tipo)
		globals.HabilitaDeshabilitaCampos('frm_pacientes_que_atiende',tipo)
		globals.HabilitaDeshabilitaCampos('frm_tab_especialidad_atiende',tipo)
		globals.HabilitaDeshabilitaCampos('frm_servicios_que_atiende',tipo)
		globals.HabilitaDeshabilitaCampos('frm_seguro_mala_praxis',tipo)
	}
}

/**
 * @properties={typeid:24,uuid:"32EF4B5E-1C48-4567-8B31-A70CA63235D6"}
 */
function inicializoFrmLegajo() {
	/*
	fLega=globals.vLega
	fLegajo=globals.vLegajo
	fOperador=globals.vOperador
	fOperadorActual=globals.vOperador
	fTipoOperador=globals.vTipoOperador
	
	globals.limpiaVariablesGlobales()
	
	globals.vLega=fLega
	globals.vLegajo=fLegajo
	globals.vOperador=fOperador
	globals.vOperadorActual=fOperadorActual
	globals.vTipoOperador=fTipoOperador
	*/
	elements.tabs.enabled=false
	for (var ii = 0; ii < elements.allnames.length; ii++) {

        var name = elements.allnames[ii];   // nombre de el elemento

        var elem = elements[name];
        
        if(name.substr(0,3)=="fld"){
        	elem.enabled=false
        }
        // propiedades del elemento
	}
	globals.per_vto_firma_fec=null
	globals.per_turno=null
	elements.btn_graba.enabled=false
	elements.lbl_graba.enabled=false
	elements.btn_modifica.enabled=false
	elements.lbl_modifica.enabled=false
	elements.btn_consulta.enabled=true
	elements.lbl_consulta.enabled=true
	elements.fld_per1.enabled=true
	forms.frm_datos_personales.elements.btn_domicilio_alter.visible=false
	elements.fld_per1.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"91FF6543-048D-402D-B896-BBF3AC9DB270"}
 */
function onAction_fld_per_1(event) {
	if(globals.per_1!=0&&globals.per_1!=null){
		if(legajo_to_tbc_personal_rrhh.getSize()>0){
		elements.lbl_estado_proceso.text='Cargando Datos ...'
		application.updateUI()
		globals.tit_estado_tratamiento="Consulta"
		elements.tabs.enabled=true;
		muestraLegajo();
		habilitaDeshabilita("Consulta");
		elements.fld_per1.enabled=false;
		elements.btn_modifica.enabled=true;
		elements.lbl_modifica.enabled=true;
		forms.frm_datos_personales.elements.btn_histo_domicilio.enabled=true
		forms.frm_datos_personales.elements.btn_histo_est_civil.enabled=true
		forms.frm_datos_liquidacion.elements.btn_histo_obra.enabled=true
		forms.frm_datos_liquidacion.elements.btn_histo_puesto.enabled=true
		forms.frm_datos_liquidacion.elements.btn_histo_sindicato.enabled=true
		elements.fld_foto.enabled=true
		elements.lbl_estado_proceso.text=''
		elements.btn_imprime.enabled=true;
	    elements.lbl_imprime.enabled=true;	
	    elements.per_vto_firma_fec.editable=false
		elements.per_vto_firma_fec.enabled=false
		application.updateUI()
		}else{
			return
		}
	}else{
		elements.btn_nuevo.enabled=true;
		elements.lbl_nuevo.enabled=true;
		elements.btn_modifica.enabled=false;
		elements.lbl_modifica.enabled=false;
		elements.btn_imprime.enabled=false;
	    elements.lbl_imprime.enabled=false;
		forms.frm_datos_personales.elements.btn_histo_domicilio.enabled=false
		forms.frm_datos_personales.elements.btn_histo_est_civil.enabled=false
		forms.frm_datos_liquidacion.elements.btn_histo_obra.enabled=false
		forms.frm_datos_liquidacion.elements.btn_histo_puesto.enabled=false
		forms.frm_datos_liquidacion.elements.btn_histo_sindicato.enabled=false
        forms.frm_abm_legajo.elements.fld_per1.enabled=true;
        globals.tit_estado_tratamiento=""
        elements.per_vto_firma_fec.editable=false
		elements.per_vto_firma_fec.enabled=false	
        application.updateUI()
	};
	
}

/**
 * @properties={typeid:24,uuid:"5CEE897C-EC48-4470-B7B0-EFC62542A1B7"}
 */
function muestraDatosProfesional() {
	if(per_1_to_tbc_persegu.getSize()>0){
		for (var i = 0; i < per_1_to_tbc_persegu.alldataproviders.length; i++) {
			var name = per_1_to_tbc_persegu.alldataproviders[i]
			if(name.substr(0,6)=='perse_'){
				globals[name]=per_1_to_tbc_persegu[name]
			}
		}
	}
	if(per_1_to_tbc_profmedesp.getSize()>0){
		for (var j = 0; j < per_1_to_tbc_profmedesp.alldataproviders.length; j++) {
			var name1= per_1_to_tbc_profmedesp.alldataproviders[j]
			if(name1.substr(0,6)=='prfme_'){
				globals[name1]=per_1_to_tbc_profmedesp[name1]
			}
		}
	}
		if(globals.prfme_ins_fec_ing>0&&globals.prfme_ins_fec_ing!=null){
			var fecha10 = globals.prfme_ins_fec_ing.toString()
			globals.ed_prfme_ins_fec_ing=globals.ed_prfme_ins_fec_ing.setFullYear(utils.stringToNumber(fecha10.substr(0,4)))
			globals.ed_prfme_ins_fec_ing=globals.ed_prfme_ins_fec_ing.setMonth(utils.stringToNumber(fecha10.substr(4,2)-1))
			globals.ed_prfme_ins_fec_ing=globals.ed_prfme_ins_fec_ing.setDate(utils.stringToNumber(fecha10.substr(6,2)))
			
		}else{
			globals.ed_prfme_ins_fec_ing=null
		}
		if(globals.prfme_ins_fec_egr>0&&globals.prfme_ins_fec_egr!=null){
			var fecha9 = globals.prfme_ins_fec_egr.toString()
			globals.ed_prfme_ins_fec_egr=globals.ed_prfme_ins_fec_egr.setFullYear(utils.stringToNumber(fecha9.substr(0,4)))
			globals.ed_prfme_ins_fec_egr=globals.ed_prfme_ins_fec_egr.setMonth(utils.stringToNumber(fecha9.substr(4,2)-1))
			globals.ed_prfme_ins_fec_egr=globals.ed_prfme_ins_fec_egr.setDate(utils.stringToNumber(fecha9.substr(6,2)))
			
		}else{
			globals.ed_prfme_ins_fec_egr=null
		}
		if(globals.prfme_jef_fec_ing>0&&globals.prfme_jef_fec_ing!=null){
			var fecha8 = globals.prfme_jef_fec_ing.toString()
			globals.ed_prfme_jef_fec_ing=globals.ed_prfme_jef_fec_ing.setFullYear(utils.stringToNumber(fecha8.substr(0,4)))
			globals.ed_prfme_jef_fec_ing=globals.ed_prfme_jef_fec_ing.setMonth(utils.stringToNumber(fecha8.substr(4,2)-1))
			globals.ed_prfme_jef_fec_ing=globals.ed_prfme_jef_fec_ing.setDate(utils.stringToNumber(fecha8.substr(6,2)))
			
		}else{
			globals.ed_prfme_jef_fec_ing=null
		}
		if(globals.prfme_jef_fec_egr>0&&globals.prfme_jef_fec_egr!=null){
			var fecha7 = globals.prfme_jef_fec_egr.toString()
			globals.ed_prfme_jef_fec_egr=globals.ed_prfme_jef_fec_egr.setFullYear(utils.stringToNumber(fecha7.substr(0,4)))
			globals.ed_prfme_jef_fec_egr=globals.ed_prfme_jef_fec_egr.setMonth(utils.stringToNumber(fecha7.substr(4,2)-1))
			globals.ed_prfme_jef_fec_egr=globals.ed_prfme_jef_fec_egr.setDate(utils.stringToNumber(fecha7.substr(6,2)))
			
		}else{
			globals.ed_prfme_jef_fec_egr=null
		}
		if(globals.prfme_res_fec_egr>0&&globals.prfme_res_fec_egr!=null){
			var fecha6 = globals.prfme_res_fec_egr.toString()
			globals.ed_prfme_res_fec_egr=globals.ed_prfme_res_fec_egr.setFullYear(utils.stringToNumber(fecha6.substr(0,4)))
			globals.ed_prfme_res_fec_egr=globals.ed_prfme_res_fec_egr.setMonth(utils.stringToNumber(fecha6.substr(4,2)-1))
			globals.ed_prfme_res_fec_egr=globals.ed_prfme_res_fec_egr.setDate(utils.stringToNumber(fecha6.substr(6,2)))
			
		}else{
			globals.ed_prfme_res_fec_egr=null
		}
		if(globals.prfme_res_fec_ing>0&&globals.prfme_res_fec_ing!=null){
			var fecha5 = globals.prfme_res_fec_ing.toString()
			globals.ed_prfme_res_fec_ing=globals.ed_prfme_res_fec_ing.setFullYear(utils.stringToNumber(fecha5.substr(0,4)))
			globals.ed_prfme_res_fec_ing=globals.ed_prfme_res_fec_ing.setMonth(utils.stringToNumber(fecha5.substr(4,2)-1))
			globals.ed_prfme_res_fec_ing=globals.ed_prfme_res_fec_ing.setDate(utils.stringToNumber(fecha5.substr(6,2)))
			
		}else{
			globals.ed_prfme_res_fec_ing=null
		}
		if(globals.prfme_fec_vtosss>0&&globals.prfme_fec_vtosss!=null){
			var fecha4 = globals.prfme_fec_vtosss.toString()
			globals.ed_prfme_fec_vtosss=globals.ed_prfme_fec_vtosss.setFullYear(utils.stringToNumber(fecha4.substr(0,4)))
			globals.ed_prfme_fec_vtosss=globals.ed_prfme_fec_vtosss.setMonth(utils.stringToNumber(fecha4.substr(4,2)-1))
			globals.ed_prfme_fec_vtosss=globals.ed_prfme_fec_vtosss.setDate(utils.stringToNumber(fecha4.substr(6,2)))
			
		}else{
			globals.ed_prfme_fec_vtosss=null
		}
		if(globals.prfme_fec_recert>0&&globals.prfme_fec_recert!=null){
			var fecha3 = globals.prfme_fec_recert.toString()
			globals.ed_prfme_fec_recert=globals.ed_prfme_fec_recert.setFullYear(utils.stringToNumber(fecha3.substr(0,4)))
			globals.ed_prfme_fec_recert=globals.ed_prfme_fec_recert.setMonth(utils.stringToNumber(fecha3.substr(4,2)-1))
			globals.ed_prfme_fec_recert=globals.ed_prfme_fec_recert.setDate(utils.stringToNumber(fecha3.substr(6,2)))
			
		}else{
			globals.ed_prfme_fec_recert=null
		}
		if(globals.prfme_fec_exped>0&&globals.prfme_fec_exped!=null){
			var fecha2 = globals.prfme_fec_exped.toString()
			globals.ed_prfme_fec_exped=globals.ed_prfme_fec_exped.setFullYear(utils.stringToNumber(fecha2.substr(0,4)))
			globals.ed_prfme_fec_exped=globals.ed_prfme_fec_exped.setMonth(utils.stringToNumber(fecha2.substr(4,2)-1))
			globals.ed_prfme_fec_exped=globals.ed_prfme_fec_exped.setDate(utils.stringToNumber(fecha2.substr(6,2)))
			
		}else{
			globals.ed_prfme_fec_exped=null
		}
	
	if(per_1_to_tbc_profmedtit.getSize()>0){
		for (var k = 0; k < per_1_to_tbc_profmedtit.alldataproviders.length; k++) {
			var name2= per_1_to_tbc_profmedtit.alldataproviders[k]
			
			if(name2.substr(0,6)=='prfmt_'){
				globals[name2]=per_1_to_tbc_profmedtit[name2]
			}
		}
	}
		if(globals.prfmt_fec_recib>0&&globals.prfmt_fec_recib!=null){
			var fecha = globals.prfmt_fec_recib.toString()
			globals.ed_prfmt_fec_recib=globals.ed_prfmt_fec_recib.setFullYear(utils.stringToNumber(fecha.substr(0,4)))
			globals.ed_prfmt_fec_recib=globals.ed_prfmt_fec_recib.setMonth(utils.stringToNumber(fecha.substr(4,2)-1))
			globals.ed_prfmt_fec_recib=globals.ed_prfmt_fec_recib.setDate(utils.stringToNumber(fecha.substr(6,2)))
			
		}else{
			globals.ed_prfmt_fec_recib=null
		}
		if(globals.prfmt_fec_diplo>0&&globals.prfmt_fec_diplo!=null){
			var fecha1 = globals.prfmt_fec_diplo.toString()
			globals.ed_prfmt_fec_diplo=globals.ed_prfmt_fec_diplo.setFullYear(utils.stringToNumber(fecha1.substr(0,4)))
			globals.ed_prfmt_fec_diplo=globals.ed_prfmt_fec_diplo.setMonth(utils.stringToNumber(fecha1.substr(4,2)-1))
			globals.ed_prfmt_fec_diplo=globals.ed_prfmt_fec_diplo.setDate(utils.stringToNumber(fecha1.substr(6,2)))	
		}else{
			globals.ed_prfmt_fec_diplo=null
		}
	
	if(per_1_to_tbc_profmeem.getSize()>0){
		for (var l = 0; l < per_1_to_tbc_profmeem.alldataproviders.length; l++) {
			var name3= per_1_to_tbc_profmeem.alldataproviders[l]
			if(name3.substr(0,6)=='proem_'){
				globals[name3]=per_1_to_tbc_profmeem[name3]
			}
		}
	}
	if(per_1_to_tbc_profmees.getSize()>0){
		for (var m = 0; m < per_1_to_tbc_profmees.alldataproviders.length; m++) {
			var name4= per_1_to_tbc_profmees.alldataproviders[m]
			if(name4.substr(0,6)=='proes_'){
				globals[name4]=per_1_to_tbc_profmees[name4]
			}
		}
	}
	if(per_1_to_tbc_profmefa.getSize()>0){
		for (var n = 0; n < per_1_to_tbc_profmefa.alldataproviders.length; n++) {
			var name5= per_1_to_tbc_profmefa.alldataproviders[n]
			if(name5.substr(0,6)=='profa_'){
				globals[name5]=per_1_to_tbc_profmefa[name5]
			}
		}
	}
	if(per_1_to_tbc_profmese.getSize()>0){
		for (var o = 0; o < per_1_to_tbc_profmese.alldataproviders.length; o++) {
			var name6= per_1_to_tbc_profmese.alldataproviders[o]
			if(name6.substr(0,6)=='prose_'){
				globals[name6]=per_1_to_tbc_profmese[name6]
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"CEE405D8-7FA3-4D8E-9DB4-914FA8E4C9F9"}
 */
function buscoFoto() {
	var f = plugins.file.convertToJSFile('c:\\temp\\'+globals.per_1+'.jpg');
	if(plugins.file.getFileSize(f)>0){
		elements.fld_foto.enabled=true
		globals.per_foto=plugins.images.getImage('c:\\temp\\'+globals.per_1+'.jpg')
	}else{
		globals.per_foto=plugins.images.getImage('c:\\temp\\fr_sin_foto_H.png')
	}
}

/**
 * @properties={typeid:24,uuid:"63289BFC-4225-4068-88A6-6767441625A5"}
 * @AllowToRunInFind
 */
function cargoDatosHistCab() {
	//var servername = databaseManager.getDataSourceServerName(forms.frm_scr_personal_rrhh_A.controller.getDataSource());
	//var tablename = databaseManager.getDataSourceTableName(forms.frm_scr_personal_rrhh_A.controller.getDataSource());
	
	var fs = databaseManager.getFoundSet('rrhh', 'tbc_hist_cab')
	if(fs.find()){
		fs.histcabnrounico=globals.gHistCabNroUnico
		fs.search()
		if(fs.getSize()>0){
			globals.per_nombre=fs['histcabnombres']
			globals.per_apellido=fs['histcabapellido']
			globals.per_2_2=fs['histcabapellnom']
			globals.per_9=fs['histcabfechanac']
			
			globals.per_9_fec=new Date()
			globals.per_9_fec=globals.per_9_fec.setFullYear(utils.stringToNumber(globals.per_9.toString().substr(0,4)))
			globals.per_9_fec=globals.per_9_fec.setMonth(utils.stringToNumber(globals.per_9.toString().substr(4,2))-1)
			globals.per_9_fec=globals.per_9_fec.setDate(utils.stringToNumber(globals.per_9.toString().substr(6,2)))
			if(fs['histcabsexo']==1){
				globals.per_6='F'
			}else{
				globals.per_6='M'
			}
			globals.per_7=fs['histcabtipodoc']
			globals.per_8=fs['histcabnrodoc']
			globals.per_37=fs['histcabnacionalidad']
			globals.per_26=fs['histcabestcivil']
			
			if(globals.per_6=='F'){
				globals.per_106_grupo=27
			}else{
				globals.per_106_grupo=20
			}
			globals.per_106_edit=fs['histcabnrodoc']
			var largo_per_106_edit=0
			if(globals.per_106_edit!=null){
			 	largo_per_106_edit=globals.per_106_edit.toString().length
			}
			if (largo_per_106_edit<8){
				switch (largo_per_106_edit){
					case 6:globals.per_106_edit_str='00'+fs['histcabnrodoc'];break;
					case 7:globals.per_106_edit_str='0'+fs['histcabnrodoc'];break;
				}
			}else{
				globals.per_106_edit_str=globals.per_106_edit
			}
			globals.per_106=globals.per_8
			globals.per_3=fs['histcabdomicilio']
			globals.per_5=fs['histcablocalidad']
			globals.per_4=fs['histcabcodpostal']
			globals.per_mail=fs['histcabemail']
			/*
			globals.per_23=fs['histcabobra']
			var largo=0
			if(globals.per_23!=null){
				largo=globals.per_23.toString().length
			}
			if(largo<4){
				globals.per_23=globals.per_23.toString().substr(1,2)
			}else{
				globals.per_23=globals.per_23.toString().substr(2,2)
			}
			*/
			globals.per_23=null
			globals.per_27=fs['histcabplanx']
			globals.per_hist_cli=fs['histcabnrounico']
			
			if(fs['histcabnrolinea_1']!=0){
				globals.per_41=fs['histcabcodarea_1']+'-'+fs['histcabnrolinea_1']
			}else{
				globals.per_41=fs['histcabcodareacel_1']+'-'+fs['histcab15cel_1']+fs['histcabnrolinea_1']
			}
			globals.per_marca_hepb=fs['histcabmarcahepb']
		}
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EF01E7FD-7BE7-4851-A05D-B634B507C1A4"}
 */
function onAction_btn_consulta(event) {
	_super.onAction_btn_consulta(event)
	fLega=globals.vLega
	fLegajo=globals.vLegajo
	fOperador=globals.vOperador
	fOperadorActual=globals.vOperador
	fTipoOperador=globals.vTipoOperador
	
	globals.limpiaVariablesGlobales()
	
	globals.vLega=fLega
	globals.vLegajo=fLegajo
	globals.vOperador=fOperador
	globals.vOperadorActual=fOperadorActual
	globals.vTipoOperador=fTipoOperador
	
	elements.fld_per1_str.visible=false
	elements.fld_per1_str.enabled=false
    globals.per_foto=plugins.images.getImage('c:\\temp\\fr_sin_foto_H.png')
	//globals.per_firma=plugins.images.getImage('c:\\temp\\FIRMA_DRA_CAMARA_2.gif').resize(120,120)
	globals.tit_solucion="Tratamiento de Legajo de Personal"
	globals.tit_estado_tratamiento="Consulta"
    var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Búsqueda de Legajo";
	win.show(forms.frm_tab_personal_rrhh);
	if(globals.per_1!=0&&globals.per_1!=null){
		elements.lbl_estado_proceso.text='Cargando Datos ...'
		application.updateUI()
		globals.tit_estado_tratamiento="Consulta"
		forms.frm_abm_legajo.elements.tabs.enabled=true;
		forms.frm_abm_legajo.habilitaDeshabilita("Consulta");
		forms.frm_abm_legajo.muestraLegajo();
		forms.frm_datos_personales.elements.btn_histo_est_civil.enabled=true
		forms.frm_datos_personales.elements.btn_histo_domicilio.enabled=true
		forms.frm_datos_personales.elements.btn_domicilio_alter.visible=false
		forms.frm_datos_liquidacion.elements.btn_histo_obra.enabled=true
		forms.frm_datos_liquidacion.elements.btn_histo_puesto.enabled=true
		forms.frm_datos_liquidacion.elements.btn_histo_sindicato.enabled=true
		forms.frm_abm_legajo.elements.fld_per1.enabled=false;
		//forms.frm_abm_legajo.elements.fld_foto.enabled=true;
		forms.frm_nav_top_1.elements.btn_modifica.enabled=true;
		forms.frm_nav_top_1.elements.lbl_modifica.enabled=true;
		elements.btn_imprime.enabled=true;
        elements.lbl_imprime.enabled=true;
		elements.lbl_estado_proceso.text=''
		application.updateUI()
	}else{
		elements.btn_nuevo.enabled=true;
        elements.lbl_nuevo.enabled=true;
        elements.btn_modifica.enabled=true;
        elements.lbl_modifica.enabled=true;
        forms.frm_abm_legajo.elements.fld_per1.enabled=true;
        globals.tit_estado_tratamiento=""
        application.updateUI()
	}
	elements.per_vto_firma_fec.editable=false
	elements.per_vto_firma_fec.enabled=false
	//return _super.onAction_btn_consulta(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3CBDE597-BE26-43A8-B83D-9F1D5E032653"}
 */
function onAction_btn_nuevo(event) {
	_super.onAction_btn_nuevo(event)
	
	//elements.lbl_estado_proceso.text='Cargando Datos ...'
	//application.updateUI()
	
	fLega=globals.vLega
	fLegajo=globals.vLegajo
	fOperador=globals.vOperador
	fOperadorActual=globals.vOperador
	fTipoOperador=globals.vTipoOperador
	
	globals.inicializoVariablesGlobales();
	
	globals.vLega=fLega
	globals.vLegajo=fLegajo
	globals.vOperador=fOperador
	globals.vOperadorActual=fOperadorActual
	globals.vTipoOperador=fTipoOperador
	
	
	elements.fld_per1_str.visible=false
	elements.fld_per1_str.enabled=false
	elements.btn_imprime.enabled=false;
    elements.lbl_imprime.enabled=false;
    globals.per_foto=plugins.images.getImage('c:\\temp\\fr_sin_foto_H.png')
	//globals.per_firma=plugins.images.getImage('c:\\temp\\FIRMA_DRA_CAMARA_2.gif').resize(120,120)
	globals.tit_solucion="Tratamiento de Legajo de Personal"
	globals.tit_estado_tratamiento="Alta"
   
	globals.gHistCabNroUnico=0
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Búsqueda de Historia Clinica en Preocupacional";
	win.show(forms.frm_scr_hist_cab);
	if(globals.gHistCabNroUnico==0||globals.gHistCabNroUnico==null){
		elements.btn_consulta.enabled=true
		elements.btn_nuevo.enabled=true
		return
	}
		
	forms.frm_abm_legajo.habilitaDeshabilita("Alta");
	forms.frm_abm_legajo.elements.tabs.enabled=true;
	forms.frm_abm_legajo.elements.fld_per1.enabled=false;
	elements.lbl_estado_proceso.text='Cargando Datos ...'
	application.updateUI()
	forms.frm_abm_legajo.cargoDatosHistCab()
	//forms.frm_abm_legajo.elements.fld_foto.enabled=true;
	forms.frm_datos_personales.elements.btn_domicilio_alter.visible=true
	forms.frm_datos_personales.elements.btn_histo_est_civil.enabled=false
	forms.frm_datos_personales.elements.btn_histo_domicilio.enabled=false
	forms.frm_datos_liquidacion.elements.btn_histo_obra.enabled=false
	forms.frm_datos_liquidacion.elements.btn_histo_puesto.enabled=false
	forms.frm_datos_liquidacion.elements.btn_histo_sindicato.enabled=false
	globals.per_106_vector=new Array()
	elements.per_vto_firma_fec.editable=true
	elements.per_vto_firma_fec.enabled=true
	elements.btn_captura.enabled=true
	elements.fld_foto.enabled=true
	elements.lbl_estado_proceso.text=''
	application.updateUI()
	forms.frm_datos_personales.elements.per_106_grupo.requestFocus()
	
	//return _super.onAction_btn_nuevo(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA32597E-7138-477D-AD1A-EC7413A790BC"}
 */
function onAction_btn_cancela(event) {
	 _super.onAction_btn_cancela(event)
	 databaseManager.revertEditedRecords()
	  forms.frm_abm_legajo.inicializoFrmLegajo();
	  	fLega=globals.vLega
		fLegajo=globals.vLegajo
		fOperador=globals.vOperador
		fOperadorActual=globals.vOperador
		fTipoOperador=globals.vTipoOperador
		
	  globals.limpiaVariablesGlobales();
	  
	  	globals.vLega=fLega
		globals.vLegajo=fLegajo
		globals.vOperador=fOperador
		globals.vOperadorActual=fOperadorActual
		globals.vTipoOperador=fTipoOperador
		
	  globals.per_foto=plugins.images.getImage('c:\\temp\\fr_sin_foto_H.png')
	  //globals.per_firma=plugins.images.getImage('c:\\temp\\FIRMA_DRA_CAMARA_2.gif').resize(120,120)
	  globals.tit_solucion="Tratamiento de Legajo de Personal"
	  globals.tit_estado_tratamiento=""  
	  elements.btn_captura.enabled=false
	  elements.fld_foto.enabled=false  
	  elements.per_vto_firma_fec.editable=false
	  elements.per_vto_firma_fec.enabled=false
	  forms.frm_abm_legajo.elements.fld_per1.enabled=true;
	  elements.btn_imprime.enabled=false;
	  elements.lbl_imprime.enabled=false;
	  application.updateUI();
	//return _super.onAction_btn_cancela(event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A8944D73-4541-4DE7-933A-694CF9B97D3C"}
 */
function onAction_btn_graba(event) {
	if(globals.tit_estado_tratamiento=='Alta'){
		if(!globals.cargaFamiliares){
			var win = application.createWindow("u",JSWindow.MODAL_DIALOG);
			win.title = "¡Atención!";
			win.show(forms.frm_win_cargas);
			if(!globals.cargaFamiliares){
				return
			}else{
				forms.frm_abm_legajo.elements.tabs.setTabFGColorAt(5,"#040404")
				if(globals.per_1 == null || globals.per_1 == 0){
					obtieneLegajo();
				}
			}
		}else{
			if(globals.per_1 == null || globals.per_1 == 0){
				//globals.validoNroLegajo();
				obtieneLegajo();
			}
		}
	}else{
		if(globals.per_106_dig_verif==null||globals.per_106_grupo==null){
			plugins.dialogs.showErrorDialog("Error en CUIL","Falta completar número de CUIL")
			return
		}
	}
	
	_super.onAction_btn_graba(event)
	
	elements.lbl_estado_proceso.text='Grabando Datos ...'
	application.updateUI()
	
	globals.per_1_str=globals.per_1.toString()+'/'+globals.obtieneDigitoVerificador(globals.per_1)
	globals.per_1_int=globals.per_1.toString()+''+globals.obtieneDigitoVerificador(globals.per_1)
	
    globals.per_105_1=globals.per_apellido.substr(0,8)
	globals.per_10_1=globals.per_apellido.substr(0,8)
	globals.per_11_1=globals.per_apellido.substr(0,8)
	globals.per_15_1=globals.per_apellido.substr(0,8)
	globals.per_16_1=globals.per_apellido.substr(0,8)
	globals.per_18_1=globals.per_apellido.substr(0,8)
	globals.per_19_1=globals.per_apellido.substr(0,8)
	globals.per_23_1=globals.per_apellido.substr(0,8)
	globals.per_10=per_84_to_tbc_puesto.pto2
	globals.per_11=per_84_to_tbc_puesto.pto4
	globals.per_19=vsector_to_tbc_sector.sector18
	var mes=0
	var mes_ed=''
	var dia=0
	var dia_ed=''
	if(globals.per_9_fec==null){
		globals.per_9=0
	}else{
		mes=globals.per_9_fec.getMonth()+1
		dia=globals.per_9_fec.getDate()
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
		globals.per_9=globals.per_9_fec.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
	}
	mes=0
	dia=0
	mes_ed=''
	dia_ed=''	
	if(globals.per_13_fec==null){
		globals.per_13=0
	}else{
		mes=globals.per_13_fec.getMonth()+1
		dia=globals.per_13_fec.getDate()
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
		globals.per_13=globals.per_13_fec.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
	}
	mes=0
	dia=0
	mes_ed=''
	dia_ed=''
	if(globals.per_15_fec==null){
		globals.per_15=0
	}else{
		mes=globals.per_15_fec.getMonth()+1
		dia=globals.per_15_fec.getDate()
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
		globals.per_15=globals.per_15_fec.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
	}
	mes=0
	dia=0
	mes_ed=''
	dia_ed=''
	if(globals.per_17_8_fec==null){
		globals.per_17_8=0
	}else{
		mes=globals.per_17_8_fec.getMonth()+1
		dia=globals.per_17_8_fec.getDate()
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
		globals.per_17_8=globals.per_17_8_fec.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
	}
	mes=0
	dia=0
	mes_ed=''
	dia_ed=''
	if(globals.per_vto_firma_fec==null){
		globals.per_vto_firma=0
	}else{
		mes=globals.per_vto_firma_fec.getMonth()+1
		dia=globals.per_vto_firma_fec.getDate()
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
		globals.per_vto_firma=globals.per_vto_firma_fec.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
	}
	mes=0
	dia=0
	mes_ed=''
	dia_ed=''
	
	if(globals.per_vto_matricula_fec==null){
		globals.per_vto_matricula=0
	}else{
		mes=globals.per_vto_matricula_fec.getMonth()+1
		dia=globals.per_vto_matricula_fec.getDate()
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
		globals.per_vto_matricula=globals.per_vto_matricula_fec.getFullYear().toString()+''+mes_ed.toString()+''+dia_ed.toString()
	}
	
	if(globals.per_19==1||globals.per_19==2||globals.per_19==3||globals.per_19==5){
		globals.per_105=1
	}else{
		globals.per_105=globals.per_19
	}
	var cerosx_per_106=''
	try{
		if(globals.per_106_edit!=null){
			var largo_per_106_edit = globals.per_106_edit.toString().length
			switch (largo_per_106_edit){
				case 8:cerosx_per_106='';break;
				case 7:cerosx_per_106='0';break;
				case 6:cerosx_per_106='00';break;
			}
			globals.per_106=globals.per_106_grupo+cerosx_per_106+globals.per_106_edit+''+globals.per_106_dig_verif
		}else{
			globals.per_106=0
		}
	}catch(msg){
		application.output(msg.message)
	}
	try{
			var cerosx_bco = ''
			var cerosx_cta = ''
			var largo_bco = 0
			var largo_cta = 0
			if(globals.per_55_bco!=null){
				largo_bco = globals.per_55_bco.toString().length
			}
			if(globals.per_55_cta!=null){
			 	largo_cta = globals.per_55_cta.toString().length
			}
			switch (largo_bco){
				case 8:cerosx_bco = '';break;
				case 7:cerosx_bco = '0';break;
				case 6:cerosx_bco = '00';break;
				case 5:cerosx_bco = '000';break;
			}
			switch (largo_cta){
				case 14:cerosx_cta = '';break;
				case 13:cerosx_cta = '0';break;
				case 12:cerosx_cta = '00';break;
				case 11:cerosx_cta = '000';break;
			}
			globals.per_55=cerosx_bco+globals.per_55_bco+cerosx_cta+globals.per_55_cta
			globals.per_55_str=cerosx_bco+globals.per_55_bco+cerosx_cta+globals.per_55_cta
	}catch(msg){
		application.output(msg.message)
	}
	globals.per_16=0
	globals.per_44=0
	globals.per_57=0
	globals.per_102=0
	globals.mpass=0
	globals.per_confidencial= " "
	globals.per_tty_mod= " "
	globals.per_107=25
	globals.per_113=0
	globals.per_1er_trabajo=0
	//globals.per_21=0
	globals.per_40=0
	globals.per_43=0
	globals.per_79=0
	globals.per_anmat=0
	globals.per_casa_nac=0
	globals.per_fec_mod=0
	globals.per_hor_mod=0
	//globals.per_jefe=0
	globals.per_lega_mod=globals.vLega
	globals.per_modalidad=0
	globals.per_mpass=0
	globals.per_tipo_mod=0
	//globals.per_marca_hepb=0
	if (globals.per_calle1_alter==null){
		globals.per_calle1_alter=' '
	}
	if (globals.per_calle2_alter==null){
		globals.per_calle2_alter=' '
	}
	if (globals.per_41==null){
		globals.per_41=' '
	}
	if(globals.per_20==0||globals.per_20==null){
		globals.per_21=0
	}
	if(globals.per_55==''||globals.per_55==null){
		globals.per_55=0
	}
	//globals.per_1_str=globals.per_1+'/'+globals.obtieneDigitoVerificador(globals.per_1)
    if (globals.per_1>0){
    	
    	if(globals.tit_estado_tratamiento=='Alta'){
    		per_1_to_tbc_personal_rrhh.newRecord()
			globals.InicializarDatosDeRelacion(per_1_to_tbc_personal_rrhh,"rrhh","tbc_personal_rrhh")
    	}
		var name=''
		
		for(var i=0;i<per_1_to_tbc_personal_rrhh.alldataproviders.length;i++){
			name=per_1_to_tbc_personal_rrhh.alldataproviders[i]
			if(globals[name]!=null){
				per_1_to_tbc_personal_rrhh[name]=globals[name]
			}
		}	
		
		databaseManager.saveData(per_1_to_tbc_personal_rrhh.getRecord(1))
		var error1 = ''
		var error2 = ''
		var array = databaseManager.getFailedRecords(per_1_to_tbc_personal_rrhh)
		for (var k = 0; k < array.length; k++) {
			var record = array[k];
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
		if(error1!=''){
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			plugins.dialogs.showErrorDialog("Error en grabacion de Personal Relativity",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de Personal Relativity",error2,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
		}
	
		if(globals.tit_estado_tratamiento=='Alta'){
			legajo_to_tbc_personal_rrhh.newRecord()
		}
		name=''
		for(var j=0;j<legajo_to_tbc_personal_rrhh.alldataproviders.length;j++){
			name=legajo_to_tbc_personal_rrhh.alldataproviders[j]
			legajo_to_tbc_personal_rrhh[name]=globals[name]
			
			//application.output(legajo_to_tbc_personal_rrhh[name])
		}	
		
		error1 = ''
		error2 = ''
			
		databaseManager.startTransaction()
		if(databaseManager.saveData(legajo_to_tbc_personal_rrhh.getRecord(1))){
			databaseManager.commitTransaction()
		}else{
			var array1 = databaseManager.getFailedRecords(legajo_to_tbc_personal_rrhh)
			for (var l = 0; l < array1.length; l++) {
				var record1 = array1[l];
				var jstable1 = databaseManager.getTable(record1);
				var tableSQLName1 = jstable1.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error2='Error en grabación '+record1.exception;
				if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			// exception thrown in pre-insert/update/delete event method
					var thrown1 = record1.exception.getValue()
					//plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				}
			}
			databaseManager.rollbackTransaction()
			if(error1!=''){
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
				plugins.dialogs.showErrorDialog("Error en grabacion de Histórico",error1,"Ok")
				plugins.dialogs.showErrorDialog("Error en grabacion de Histórico",error2,"Ok")
			}
			plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
		}
		
		graboHistoricoDatos()
		graboCargasFamiliares()
		borroHistCabPreocupacional()
		regraboPuestos()
		grabaMedPer()
		grabaBancoC()
		regrabaHistCab()
	}
	/*
	var $params={
		legajo_per:globals.per_1
	}
	//plugins.jasperPluginRMI.runReport(null, 'report17.jasper', null, plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,$params)
	plugins.jasperPluginRMI.runReport(legajo_to_tbc_personal_rrhh, 'report18.jasper', null, plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,null)
	*/
	
	elements.fld_foto.enabled=false
	elements.btn_captura.enabled=false
	//set display values (return values will be same as display values)
	elements.lbl_per_1.text=globals.per_1_str2 + ' - '+globals.per_2_2
	elements.lbl_per_1.visible=true
	if(globals.tit_estado_tratamiento=='Modifica'){
		onAction_btn_refresh(event)
		elements.lbl_estado_proceso.text=''
		application.updateUI();
	}else{
		habilitaDeshabilita("Consulta")
		//globals.HabilitaDeshabilitaCampos('frm_tab_cargas',"Alta")
		elements.per_vto_firma_fec.enabled=false
		elements.fld_per1.visible=false
		elements.fld_per1.enabled=false
		fLegajoApeynom=globals.per_1_str+' '+globals.per_2_2
		elements.fld_per1_str.visible=true
		elements.fld_per1_str.enabled=true
		elements.lbl_estado_proceso.text=''
		application.updateUI();
		
		imprimir_Reglamentos();
		/*
		globals.selec_deselec=false
		var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
		win.title = "Selección de Reglamentos y listados a Imprimir";
		win.setSize(500,650)
		win.show(forms.frm_sel_reglamentos);
		*/
	}
	
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8D0BF99F-7971-4FFC-B550-FC7CD6321773"}
 */
function onAction_btn_refresh(event) {
	_super.onAction_btn_refresh(event)
	
	//databaseManager.revertEditedRecords()
	elements.lbl_estado_proceso.text='Inicializando Datos ...'
	application.updateUI();
	
	  forms.frm_abm_legajo.inicializoFrmLegajo();
	  
	fLega=globals.vLega
	fLegajo=globals.vLegajo
	fOperador=globals.vOperador
	fOperadorActual=globals.vOperador
	fTipoOperador=globals.vTipoOperador
	try{
	  globals.limpiaVariablesGlobales();
	}catch(msg){
		globals.DIALOGS.showErrorDialog("Error - Avise a Sistemas",msg.message,"Ok")
		application.exit()
	}
	  
	globals.vLega=fLega
	globals.vLegajo=fLegajo
	globals.vOperador=fOperador
	globals.vOperadorActual=fOperadorActual
	globals.vTipoOperador=fTipoOperador
	
	  globals.per_vto_firma_fec=null
	  globals.per_turno=null
	 // globals.preguntaCargas=true
	  globals.cargaFamiliares=false
	  elements.fld_per1_str.visible=false
	  elements.fld_per1_str.enabled=false
		fLegajoApeynom=''
	  //globals.per_foto=plugins.images.getImage('c:\\temp\\fr_sin_foto_H.png')
	  //globals.per_firma=plugins.images.getImage('c:\\temp\\FIRMA_DRA_CAMARA_2.gif').resize(120,120)
	  globals.tit_solucion="Tratamiento de Legajo de Personal"
	  globals.tit_estado_tratamiento=""  
	  forms.frm_abm_legajo.elements.fld_per1.enabled=true;
	  forms.frm_abm_legajo.elements.fld_per1.visible=true;
	  elements.btn_captura.enabled=false
	  elements.fld_foto.enabled=false
	  elements.per_vto_firma_fec.editable=false
	  elements.per_vto_firma_fec.enabled=false
	  elements.btn_imprime.enabled=false;
	  elements.lbl_imprime.enabled=false;
	  elements.lbl_estado_proceso.text=''
	  forms.frm_abm_legajo.elements.tabs.setTabFGColorAt(5,"#040404")
	  forms.frm_cargas_conyugue_ds.foundset.deleteAllRecords()
	  forms.frm_cargas_conyugue_ds.controller.recreateUI()
	  forms.frm_cargas_concubino_ds.foundset.deleteAllRecords()
	  forms.frm_cargas_concubino_ds.controller.recreateUI()
	  forms.frm_cargas_hijos_tbl_ds.foundset.deleteAllRecords()
	  forms.frm_cargas_hijos_tbl_ds.controller.recreateUI()  
	  application.updateUI();
	//return _super.onAction_btn_refresh(event)
}

/**
 * @properties={typeid:24,uuid:"3F01E71D-5BD6-4D94-A63D-31A9F466DD51"}
 */
function graboHistoricoDatos() {
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
	if(globals.per_26_old!=legajo_to_tbc_personal_rrhh.per_26){
		globals.dat_per_tipo='per_26'
		per_1_to_tbl_rrhh_hist_datos_pers.newRecord()
		per_1_to_tbl_rrhh_hist_datos_pers.legajo=globals.per_1
		per_1_to_tbl_rrhh_hist_datos_pers.tipo=globals.dat_per_tipo
		per_1_to_tbl_rrhh_hist_datos_pers.fecha=globals.dat_per_fecha
		per_1_to_tbl_rrhh_hist_datos_pers.hora=globals.dat_per_hora
		per_1_to_tbl_rrhh_hist_datos_pers.valor_numerico=legajo_to_tbc_personal_rrhh.per_26
		per_1_to_tbl_rrhh_hist_datos_pers.campo_display=application.getValueListDisplayValue('vl_estado_civil',legajo_to_tbc_personal_rrhh.per_26)
		per_1_to_tbl_rrhh_hist_datos_pers.tipo_operador=0
		per_1_to_tbl_rrhh_hist_datos_pers.nro_operador=globals.vLega
		per_1_to_tbl_rrhh_hist_datos_pers.fecha_display=fecha_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.hora_display=hora_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.nombre_operador=globals.vOperadorActual
	}
	if(globals.per_23_old!=legajo_to_tbc_personal_rrhh.per_23){
		globals.dat_per_tipo='per_23'
		per_1_to_tbl_rrhh_hist_datos_pers.newRecord()
		per_1_to_tbl_rrhh_hist_datos_pers.legajo=globals.per_1
		per_1_to_tbl_rrhh_hist_datos_pers.tipo=globals.dat_per_tipo
		per_1_to_tbl_rrhh_hist_datos_pers.fecha=globals.dat_per_fecha
		per_1_to_tbl_rrhh_hist_datos_pers.hora=globals.dat_per_hora
		if(legajo_to_tbc_personal_rrhh.per_23!=null&&legajo_to_tbc_personal_rrhh.per_23!=0&&legajo_to_tbc_personal_rrhh.per_23!=''){
			per_1_to_tbl_rrhh_hist_datos_pers.valor_numerico=legajo_to_tbc_personal_rrhh.per_23
			per_1_to_tbl_rrhh_hist_datos_pers.campo_display=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_obras_pers.obpdescr
		}
		per_1_to_tbl_rrhh_hist_datos_pers.tipo_operador=0
		per_1_to_tbl_rrhh_hist_datos_pers.nro_operador=globals.vLega
		per_1_to_tbl_rrhh_hist_datos_pers.fecha_display=fecha_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.hora_display=hora_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.nombre_operador=globals.vOperadorActual
	}
	if(globals.per_22_old!=legajo_to_tbc_personal_rrhh.per_22){
		globals.dat_per_tipo='per_22'
		per_1_to_tbl_rrhh_hist_datos_pers.newRecord()
		per_1_to_tbl_rrhh_hist_datos_pers.legajo=globals.per_1
		per_1_to_tbl_rrhh_hist_datos_pers.tipo=globals.dat_per_tipo
		per_1_to_tbl_rrhh_hist_datos_pers.fecha=globals.dat_per_fecha
		per_1_to_tbl_rrhh_hist_datos_pers.hora=globals.dat_per_hora
		per_1_to_tbl_rrhh_hist_datos_pers.valor_numerico=legajo_to_tbc_personal_rrhh.per_22
		per_1_to_tbl_rrhh_hist_datos_pers.campo_display=application.getValueListDisplayValue('vl_sino',legajo_to_tbc_personal_rrhh.per_22)
		per_1_to_tbl_rrhh_hist_datos_pers.tipo_operador=0
		per_1_to_tbl_rrhh_hist_datos_pers.nro_operador=globals.vLega
		per_1_to_tbl_rrhh_hist_datos_pers.fecha_display=fecha_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.hora_display=hora_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.nombre_operador=globals.vOperadorActual
	}
	if(globals.per_84_old!=legajo_to_tbc_personal_rrhh.per_84){
		globals.dat_per_tipo='per_84'
		per_1_to_tbl_rrhh_hist_datos_pers.newRecord()
		per_1_to_tbl_rrhh_hist_datos_pers.legajo=globals.per_1
		per_1_to_tbl_rrhh_hist_datos_pers.tipo=globals.dat_per_tipo
		per_1_to_tbl_rrhh_hist_datos_pers.fecha=globals.dat_per_fecha
		per_1_to_tbl_rrhh_hist_datos_pers.hora=globals.dat_per_hora
		per_1_to_tbl_rrhh_hist_datos_pers.valor_numerico=legajo_to_tbc_personal_rrhh.per_84
		per_1_to_tbl_rrhh_hist_datos_pers.campo_display=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto11
		per_1_to_tbl_rrhh_hist_datos_pers.tipo_operador=0
		per_1_to_tbl_rrhh_hist_datos_pers.nro_operador=globals.vLega
		per_1_to_tbl_rrhh_hist_datos_pers.fecha_display=fecha_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.hora_display=hora_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.nombre_operador=globals.vOperadorActual
	}
	if(globals.per_3_old!=legajo_to_tbc_personal_rrhh.per_3){
		globals.dat_per_tipo='per_3'
		per_1_to_tbl_rrhh_hist_datos_pers.newRecord()
		per_1_to_tbl_rrhh_hist_datos_pers.legajo=globals.per_1
		per_1_to_tbl_rrhh_hist_datos_pers.tipo=globals.dat_per_tipo
		per_1_to_tbl_rrhh_hist_datos_pers.fecha=globals.dat_per_fecha
		per_1_to_tbl_rrhh_hist_datos_pers.hora=globals.dat_per_hora
		per_1_to_tbl_rrhh_hist_datos_pers.valor_alfa=legajo_to_tbc_personal_rrhh.per_3
		per_1_to_tbl_rrhh_hist_datos_pers.campo_display=legajo_to_tbc_personal_rrhh.per_3
		per_1_to_tbl_rrhh_hist_datos_pers.tipo_operador=0
		per_1_to_tbl_rrhh_hist_datos_pers.nro_operador=globals.vLega
		per_1_to_tbl_rrhh_hist_datos_pers.fecha_display=fecha_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.hora_display=hora_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.nombre_operador=globals.vOperadorActual
	}
	if(globals.per_52_old!=legajo_to_tbc_personal_rrhh.per_52){
		globals.dat_per_tipo='per_52'
		per_1_to_tbl_rrhh_hist_datos_pers.newRecord()
		per_1_to_tbl_rrhh_hist_datos_pers.legajo=globals.per_1
		per_1_to_tbl_rrhh_hist_datos_pers.tipo=globals.dat_per_tipo
		per_1_to_tbl_rrhh_hist_datos_pers.fecha=globals.dat_per_fecha
		per_1_to_tbl_rrhh_hist_datos_pers.hora=globals.dat_per_hora
		per_1_to_tbl_rrhh_hist_datos_pers.valor_alfa=legajo_to_tbc_personal_rrhh.per_52
		per_1_to_tbl_rrhh_hist_datos_pers.campo_display=application.getValueListDisplayValue('vl_banco_cobro',legajo_to_tbc_personal_rrhh.per_52)
		per_1_to_tbl_rrhh_hist_datos_pers.tipo_operador=0
		per_1_to_tbl_rrhh_hist_datos_pers.nro_operador=globals.vLega
		per_1_to_tbl_rrhh_hist_datos_pers.fecha_display=fecha_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.hora_display=hora_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.nombre_operador=globals.vOperadorActual
	}
	if(globals.per_nrocta_old!=legajo_to_tbc_personal_rrhh.per_nrocta){
		globals.dat_per_tipo='per_nrocta'
		per_1_to_tbl_rrhh_hist_datos_pers.newRecord()
		per_1_to_tbl_rrhh_hist_datos_pers.legajo=globals.per_1
		per_1_to_tbl_rrhh_hist_datos_pers.tipo=globals.dat_per_tipo
		per_1_to_tbl_rrhh_hist_datos_pers.fecha=globals.dat_per_fecha
		per_1_to_tbl_rrhh_hist_datos_pers.hora=globals.dat_per_hora
		per_1_to_tbl_rrhh_hist_datos_pers.valor_alfa=legajo_to_tbc_personal_rrhh.per_nrocta
		per_1_to_tbl_rrhh_hist_datos_pers.campo_display=legajo_to_tbc_personal_rrhh.per_nrocta
		per_1_to_tbl_rrhh_hist_datos_pers.tipo_operador=0
		per_1_to_tbl_rrhh_hist_datos_pers.nro_operador=globals.vLega
		per_1_to_tbl_rrhh_hist_datos_pers.fecha_display=fecha_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.hora_display=hora_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.nombre_operador=globals.vOperadorActual
	}
	if(globals.per_55_str_old!=legajo_to_tbc_personal_rrhh.per_55_str){
		globals.dat_per_tipo='per_55_str'
		per_1_to_tbl_rrhh_hist_datos_pers.newRecord()
		per_1_to_tbl_rrhh_hist_datos_pers.legajo=globals.per_1
		per_1_to_tbl_rrhh_hist_datos_pers.tipo=globals.dat_per_tipo
		per_1_to_tbl_rrhh_hist_datos_pers.fecha=globals.dat_per_fecha
		per_1_to_tbl_rrhh_hist_datos_pers.hora=globals.dat_per_hora
		per_1_to_tbl_rrhh_hist_datos_pers.valor_alfa=legajo_to_tbc_personal_rrhh.per_55_str
		per_1_to_tbl_rrhh_hist_datos_pers.campo_display=legajo_to_tbc_personal_rrhh.per_55_str
		per_1_to_tbl_rrhh_hist_datos_pers.tipo_operador=0
		per_1_to_tbl_rrhh_hist_datos_pers.nro_operador=globals.vLega
		per_1_to_tbl_rrhh_hist_datos_pers.fecha_display=fecha_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.hora_display=hora_dsp
		per_1_to_tbl_rrhh_hist_datos_pers.nombre_operador=globals.vOperadorActual
	}
	databaseManager.startTransaction()
	if(databaseManager.saveData(per_1_to_tbl_rrhh_hist_datos_pers)){
		databaseManager.commitTransaction()
	}else{
		var error1 = ''
		var error2 = ''
		var array = databaseManager.getFailedRecords(per_1_to_tbl_rrhh_hist_datos_pers)
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
		if(error1!=''){
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			plugins.dialogs.showErrorDialog("Error en grabacion de Histórico",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de Histórico",error2,"Ok")
		}
		plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1437581E-E244-419B-884F-198877B6038F"}
 */
function onAction_btn_modifica(event) {
	if(globals.per_16!=0){
		plugins.dialogs.showErrorDialog("Legajo dado de Baja","No se puede modificar. Legajo dado de Baja.")
		return
	}
	_super.onAction_btn_modifica(event)
	forms.frm_abm_legajo.habilitaDeshabilita("Modifica");
	elements.per_vto_firma_fec.editable=true
	elements.per_vto_firma_fec.enabled=true
	elements.per_vto_firma_fec_label.fgcolor
	elements.fld_per1_str.visible=false
	elements.fld_per1_str.enabled=false
	elements.fld_foto.enabled=true
	elements.btn_captura.enabled=true
	forms.frm_datos_liquidacion.elements.btn_buscar_puesto.enabled=false
	forms.frm_datos_liquidacion.elements.per_84.enabled=false
	forms.frm_datos_liquidacion.elements.btn_histo_puesto.enabled=false
	application.updateUI()
}

/**
 * @properties={typeid:24,uuid:"80D54542-97DB-4E39-8E98-4F2751751F6D"}
 */
function borroHistCabPreocupacional() {
	if(ghistcabnrounico_to_tbl_rrhh_hist_cab.getSize()>0){
		ghistcabnrounico_to_tbl_rrhh_hist_cab.deleteRecord(1)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3DF9ECD3-FEFB-4081-B762-2E20BF26FB4A"}
 * @AllowToRunInFind
 */
function onAction(event) {
	/*
	globals.per_1=9283
	var fs = databaseManager.getFoundSet("desal","tbl_personal")
	fs.find()
	fs['per_1']=8636
	fs.search()
	var $params={
		legajo_per:globals.per_1
	}
	plugins.jasperPluginRMI.runReport(fs, 'report18.jasper', null, plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW,null)
	*/
	var frm =  'frm_abm_legajo'
	
	forms[frm].print_default()
}

/**
 * @properties={typeid:24,uuid:"15C0F448-B2E1-4E44-AF46-639ADC44FAC1"}
 */
function print_default() {
	/*
	globals.vTextoNorma = '2663-1'
	var frm = 'frm_prn_2663_1'
	forms[frm].sub_buildReport();
	globals.printRoutine0(frm,true);
	*/
	/*
	globals.vTextoNorma = '2663-2'
	var frm = 'frm_prn_2663_2'
	forms[frm].sub_buildReport();
	globals.printRoutine0(frm,true);
	*/
	globals.vTextoNorma = '2663-8'
	var frm = 'frm_prn_2663_2'
	forms[frm].sub_buildReport();
	globals.printRoutine0(frm,true);
}

/**
 * @properties={typeid:24,uuid:"8C91495A-C3C6-4F9C-9678-F11C1AA6C18D"}
 */
function regraboPuestos() {
	if(per_1_to_tbc_personal_rrhh.per_84==0&&globals.per_84_ant==0){
		return
	}
	if(per_1_to_tbc_personal_rrhh.per_84!=globals.per_84_ant){
		if(per_84_ant_to_tbc_puesto.getSize()>0){
			per_84_ant_to_tbc_puesto.pto3=0
			per_84_ant_to_tbc_puesto.pto15=globals.fechaActual()
			databaseManager.saveData(per_84_ant_to_tbc_puesto.getRecord(1))
		}
	}
	if(per_84_to_tbc_puesto.getSize()>0){
		if(per_84_to_tbc_puesto.pto3!=globals.per_1&&per_1_to_tbc_personal_rrhh.per_16==0){
			per_84_to_tbc_puesto.pto3=globals.per_1
			databaseManager.saveData(per_84_to_tbc_puesto.getRecord(1))
		}
	}
}

/**
 * @properties={typeid:24,uuid:"73114741-1BEF-4201-8920-F3114C808AA8"}
 */
function regrabaHistCab() {
	var largo_area=0
	var largo_numero=0
	if(per_hist_cli_to_tbc_hist_cab.getSize()>0){
		per_hist_cli_to_tbc_hist_cab.histcabespersonal=2
		if(per_1_to_tbc_personal_rrhh.per_apellido!=''){
			per_hist_cli_to_tbc_hist_cab.histcabapellido=per_1_to_tbc_personal_rrhh.per_apellido
			per_hist_cli_to_tbc_hist_cab.histcabape6=per_1_to_tbc_personal_rrhh.per_apellido
			per_hist_cli_to_tbc_hist_cab.histcabcharsape=per_1_to_tbc_personal_rrhh.per_apellido
		}
		if(per_1_to_tbc_personal_rrhh.per_nombre!=''){
			per_hist_cli_to_tbc_hist_cab.histcabnombres=per_1_to_tbc_personal_rrhh.per_nombre
		}
		per_hist_cli_to_tbc_hist_cab.histcabapellnom=per_1_to_tbc_personal_rrhh.per_2_2
		per_hist_cli_to_tbc_hist_cab.histcabfechanac=per_1_to_tbc_personal_rrhh.per_9
		if(per_1_to_tbc_personal_rrhh.per_6=='F'){
			per_hist_cli_to_tbc_hist_cab.histcabsexo=1
		}else{
			per_hist_cli_to_tbc_hist_cab.histcabsexo=2
		}
		per_hist_cli_to_tbc_hist_cab.histcabtipodoc=per_1_to_tbc_personal_rrhh.per_7
		per_hist_cli_to_tbc_hist_cab.histcabnrodoc=per_1_to_tbc_personal_rrhh.per_8
		per_hist_cli_to_tbc_hist_cab.histcabestcivil=per_1_to_tbc_personal_rrhh.per_26
		per_hist_cli_to_tbc_hist_cab.histcabdomicilio=per_1_to_tbc_personal_rrhh.per_3
		per_hist_cli_to_tbc_hist_cab.histcablocalidad=per_1_to_tbc_personal_rrhh.per_5
		per_hist_cli_to_tbc_hist_cab.histcabcodpostal=per_1_to_tbc_personal_rrhh.per_4
		per_hist_cli_to_tbc_hist_cab.histcabtelefono=per_1_to_tbc_personal_rrhh.per_41
		/*
		if(legajo_to_tbc_personal_rrhh.per_41.substr(0,3)=='011'){
			if(legajo_to_tbc_personal_rrhh.per_41.substr(4,2)=='15'){
				per_hist_cli_to_tbc_hist_cab.histcabcodareacel_1=legajo_to_tbc_personal_rrhh.per_41.substr(0,3)
				per_hist_cli_to_tbc_hist_cab.histcab15cel_1=15
				per_hist_cli_to_tbc_hist_cab.histcabnrolineacel_1=legajo_to_tbc_personal_rrhh.per_41.substr(6,8)
			}else{
				per_hist_cli_to_tbc_hist_cab.histcabcodarea_1=legajo_to_tbc_personal_rrhh.per_41.substr(0,3)
				per_hist_cli_to_tbc_hist_cab.histcabnrolinea_1=legajo_to_tbc_personal_rrhh.per_41.substr(4,8)
			}
		}else{
			if(legajo_to_tbc_personal_rrhh.per_41.substr(5,2)=='15'){
				per_hist_cli_to_tbc_hist_cab.histcabcodareacel_1=legajo_to_tbc_personal_rrhh.per_41.substr(0,4)
				per_hist_cli_to_tbc_hist_cab.histcab15cel_1=15
				per_hist_cli_to_tbc_hist_cab.histcabnrolineacel_1=legajo_to_tbc_personal_rrhh.per_41.substr(7,7)
			}else{
				if(legajo_to_tbc_personal_rrhh.per_41.substr(6,2)=='15'){
					per_hist_cli_to_tbc_hist_cab.histcabcodareacel_1=legajo_to_tbc_personal_rrhh.per_41.substr(0,5)
					per_hist_cli_to_tbc_hist_cab.histcab15cel_1=15
					per_hist_cli_to_tbc_hist_cab.histcabnrolineacel_1=legajo_to_tbc_personal_rrhh.per_41.substr(8,6)
				}else{
					*/
				if (per_1_to_tbc_personal_rrhh.per_41!=null){	
					largo_numero=per_1_to_tbc_personal_rrhh.per_41.toString().length
					largo_area=per_1_to_tbc_personal_rrhh.per_41.toString().indexOf('-')
					if (largo_area>0){
						per_hist_cli_to_tbc_hist_cab.histcabcodarea_1=utils.stringToNumber(per_1_to_tbc_personal_rrhh.per_41.substr(0,largo_area))
						per_hist_cli_to_tbc_hist_cab.histcabnrolinea_1=utils.stringToNumber(per_1_to_tbc_personal_rrhh.per_41.substr(largo_area+1,largo_numero-largo_area))
					}else{
						if(largo_numero>0){
							if(largo_numero>8){
								per_hist_cli_to_tbc_hist_cab.histcabcodarea_1=utils.stringToNumber(per_1_to_tbc_personal_rrhh.per_41.substr(0,largo_numero-8))
								per_hist_cli_to_tbc_hist_cab.histcabnrolinea_1=utils.stringToNumber(per_1_to_tbc_personal_rrhh.per_41.substr(largo_numero-8,largo_numero))
							}
						}
						
						per_hist_cli_to_tbc_hist_cab.histcabnrolinea_1=utils.stringToNumber(per_1_to_tbc_personal_rrhh.per_41.substr(4,4))
					}
				}
					/*
				}
			}
		}
		*/
		if(globals.per_celular_area!=null){
			per_hist_cli_to_tbc_hist_cab.histcabcodareacel_2=globals.per_celular_area
			per_hist_cli_to_tbc_hist_cab.histcab15cel_2=15
			per_hist_cli_to_tbc_hist_cab.histcabnrolineacel_2=globals.per_celular_nro
		}
		per_hist_cli_to_tbc_hist_cab.histcabmarcahepb=globals.per_marca_hepb
		
		databaseManager.saveData(per_hist_cli_to_tbc_hist_cab.getRecord(1))
		var error1 = ''
		var error2 = ''
		var array = databaseManager.getFailedRecords(per_hist_cli_to_tbc_hist_cab)
		for (var k = 0; k < array.length; k++) {
			var record = array[k];
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
		if(error1!=''){
			plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			plugins.dialogs.showErrorDialog("Error en grabacion de HIST-CAB Relativity",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de HIST-CAB Relativity",error2,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
		}
	}
}

/**
 * @properties={typeid:24,uuid:"19E670B1-C431-4C15-8BE6-D7763D467891"}
 */
function grabaMedPer() {
	if(per_1_to_tbc_personal_rrhh.per_18!=2){
		return
	}
	if(globals.tit_estado_tratamiento=='Alta'){
		if(per_1_to_tbc_med_per.getSize()<1){
			per_1_to_tbc_med_per.newRecord()
			globals.InicializarDatosDeRelacion(per_1_to_tbc_med_per,"rrhh","tbc_med_per")
		}
	}else{
		if(per_1_to_tbc_med_per.getSize()<1){
			per_1_to_tbc_med_per.newRecord()
			globals.InicializarDatosDeRelacion(per_1_to_tbc_med_per,"rrhh","tbc_med_per")
		}
	}
	per_1_to_tbc_med_per.medpercod=globals.per_1
	per_1_to_tbc_med_per.medperapeynom=per_1_to_tbc_personal_rrhh.per_2_2
	per_1_to_tbc_med_per.medperemp=per_1_to_tbc_personal_rrhh.per_19
	per_1_to_tbc_med_per.medpertipoie=0
	per_1_to_tbc_med_per.medperesp=per_1_to_tbc_personal_rrhh.per_54
	per_1_to_tbc_med_per.medpertipocontrato=0
	per_1_to_tbc_med_per.medpermatricula=per_1_to_tbc_personal_rrhh.per_21.toString()
	per_1_to_tbc_med_per.medperfechabaja=per_1_to_tbc_personal_rrhh.per_16
	per_1_to_tbc_med_per.medperfechafcontrato=per_1_to_tbc_personal_rrhh.per_13
	per_1_to_tbc_med_per.medperfechaacredita=per_1_to_tbc_personal_rrhh.per_15
	per_1_to_tbc_med_per.medperestado=0
	per_1_to_tbc_med_per.medpercuit=per_1_to_tbc_personal_rrhh.per_8
	per_1_to_tbc_med_per.medpermatricun=per_1_to_tbc_personal_rrhh.per_21	
	
	databaseManager.saveData(per_1_to_tbc_med_per.getRecord(1))
	var error1 = ''
	var error2 = ''
	var array = databaseManager.getFailedRecords(per_1_to_tbc_med_per)
	for (var k = 0; k < array.length; k++) {
		var record = array[k];
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
	if(error1!=''){
		plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
		plugins.dialogs.showErrorDialog("Error en grabacion de MED-PER Relativity",error1,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabacion de MED-PER Relativity",error2,"Ok")
		plugins.dialogs.showErrorDialog("Error en grabación","Se ha producido un error de grabación. "+'\n'+"Avise a Sistemas, por favor.", "Ok")
	}
}

/**
 * @properties={typeid:24,uuid:"3F0DCE51-887B-42E5-B30B-15ED09DBAC99"}
 */
function grabaBancoC() {
	if(legajo_to_tbc_personal_rrhh.per_52==0){
		return
	}
	if(legajo_to_tbc_personal_rrhh.per_nrocta==0){
		return
	}
	if(vs_to_tbc_banco_cta.getSize()<1){
		vs_to_tbc_banco_cta.newRecord()
		globals.InicializarDatosDeRelacion(vs_to_tbc_banco_cta,"rrhh","tbc_banco_cta")
	}
	if(legajo_to_tbc_personal_rrhh.per_52!=null){
		vs_to_tbc_banco_cta.bctacodigo=legajo_to_tbc_personal_rrhh.per_52
	}
	if(legajo_to_tbc_personal_rrhh.per_nrocta!=null){
		vs_to_tbc_banco_cta.bctacuenta=legajo_to_tbc_personal_rrhh.per_nrocta
	}
	vs_to_tbc_banco_cta.bctalegajo=legajo_to_tbc_personal_rrhh.per_1
	if(globals.per_55_bco!=null&&globals.per_55_cta!=null){
		vs_to_tbc_banco_cta.bctacbu=globals.per_55_bco+''+globals.per_55_cta
	}
	if(legajo_to_tbc_personal_rrhh.per_52!=null){
		databaseManager.saveData(vs_to_tbc_banco_cta.getRecord(1))
	}
}

/**
 * @properties={typeid:24,uuid:"69E9F0EE-FAAB-44DE-9F87-03A56F7FD6A1"}
 */
function regrabaVacunasPer() {
	if(per_hist_cli_to_tbc_vacunas_per.getSize()>0){
		per_hist_cli_to_tbc_vacunas_per.vaclegajo=globals.per_1
		
		databaseManager.saveData(per_hist_cli_to_tbc_vacunas_per.getRecord(1))
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"86F3B926-40BF-4B36-9DF2-98A1C7D54E63"}
 */
function onAction1_ingresa_vto_firma(event) {
	if(globals.tit_estado_tratamiento=='Alta'){
		globals.valida_Campos_Obligatorios_Completos('frm_abm_legajo')
		//if(globals.vCamposCompletos){
			//globals.callback=null
			//globals.showWarningDialog('Debe grabar el Legajo antes de ingresar las Cargas Familiares', null, 'OK', null, null, null)
		//}
	}
}

/**
 * @properties={typeid:24,uuid:"9EA2627C-4919-4B2F-B7EB-F1BB40E09572"}
 */
function obtieneUltimoNroLegajo() {
	var fUltimoNroLegajo=0
	var done0 = plugins.rawSQL.executeSQL("desal", "tbl_param_s", "begin; lock table tbl_param_s in row exclusive mode;")
	if (!done0) {
		var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok')
	}
	var done = plugins.rawSQL.executeSQL("desal", "tbl_param_s", "select * from tbl_param_s where prm_clave = 1 for update;")
	if (!done) {
		var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
	}

	var vQuery = " SELECT prm_19 FROM tbl_param_s WHERE prm_clave = 1";
	var vDataset = databaseManager.getDataSetByQuery("desal", vQuery, null, 1);
	
	//plugins.dialogs.showInfoDialog("contador",vDataset.getValue(1,1));
	
	fUltimoNroLegajo=vDataset.getValue(1,1)+1;
	
	var done1 = plugins.rawSQL.executeSQL("desal", "tbl_param_s", "update tbl_param_s set prm_19 = prm_19 + 1 where prm_clave = 1; commit;")
	if (!done1) {
		var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
	}
	return fUltimoNroLegajo
}

/**
 * @properties={typeid:24,uuid:"FD799894-F48D-4EC1-84AB-731EDCEA4E42"}
 * @AllowToRunInFind
 */
function obtieneLegajo() {
	var $legajo=obtieneUltimoNroLegajo()
	if($legajo==0){
		globals.showWarningDialog('Error al obtener Número de Legajo: ', null, 'OK', null, null, null)
	}else{
		var fsmedicos = databaseManager.getFoundSet('rrhh','tbc_medicos')
		if(fsmedicos.find()){
			fsmedicos['med1']=$legajo
			fsmedicos.search()
			if(fsmedicos.getSize()>0){
				obtieneLegajo()
			}else{
				var digito_verif=globals.obtieneDigitoVerificador($legajo)
				var fsperext = databaseManager.getFoundSet('rrhh','tbc_perext')
				if(fsperext.find()){
					fsperext['perextlega']=$legajo+''+digito_verif
					fsperext.search()
					if(fsperext.getSize()>0){
						obtieneLegajo()
					}else{
						//globals.showWarningDialog('El Número de Legajo asignado es: '+$legajo+'/'+digito_verif, null, 'OK', null, null, null)
						forms.frm_win_legajo_asignado.fLegajoAsignado='El Número de Legajo asignado es: '+$legajo+'/'+digito_verif
						globals.per_1= $legajo
						var win = application.createWindow("z",JSWindow.MODAL_DIALOG);
						win.title = "¡Atención!";
						win.show(forms.frm_win_legajo_asignado);
					}
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
 * @properties={typeid:24,uuid:"4EEDEB32-188B-4F81-BDFC-1F9423B214A5"}
 */
function onAction_prueba_impresion(event) {
	globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
	forms.impr_2663_1.frm_foundset = 'IMPR-2740';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_31';
	globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
	globals.prn_titulo=' Estructura de Sueldos'
	forms.impr_rtf_31.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
	forms.impr_rtf_31.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_rtf_31.frm_tipo_liq=legajo_to_tbc_personal_rrhh.per_18+'  '+application.getValueListDisplayValue('vl_tipo_liquidacion',legajo_to_tbc_personal_rrhh.per_18)
	forms.impr_rtf_31.frm_tipo_estruc='3  por Puesto ('+legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22+' / '+legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2+')'
	forms.impr_rtf_31.frm_puesto=legajo_to_tbc_personal_rrhh.per_84
	globals.vtipo_liquidacion=legajo_to_tbc_personal_rrhh.per_18
	globals.vtipo_estructura=3
	globals.vPuesto=legajo_to_tbc_personal_rrhh.per_84
	if(vs_to_tbc_s_estruct.getSize()>0){
		var name6='sestr6_'
		var name7='sestr7_'
		var name8='sestr8_'
		var total_gral=0
		for(var i=1;i<=30;i++){
			if(vs_to_tbc_s_estruct[name6+i]!=0){
				forms.impr_rtf_31.fcod[i]=vs_to_tbc_s_estruct[name6+i]
				globals.vConcepto=vs_to_tbc_s_estruct[name6+i]
				forms.impr_rtf_31.fdescri[i]='&nbsp;&nbsp; '+vconcepto_to_tbc_conc.conc22
				if(vs_to_tbc_s_estruct[name7+i]>0){
					forms.impr_rtf_31.fcanti[i]=vs_to_tbc_s_estruct[name7+i]
					forms.impr_rtf_31.fimp[i]=utils.numberFormat(vs_to_tbc_s_estruct[name7+i]*vs_to_tbc_s_estruct[name8+i],'###,##0.00')
					total_gral=total_gral+(vs_to_tbc_s_estruct[name7+i]*vs_to_tbc_s_estruct[name8+i])
				}else{
					forms.impr_rtf_31.fcanti[i]=''
					forms.impr_rtf_31.fimp[i]=utils.numberFormat(vs_to_tbc_s_estruct[name8+i],'###,##0.00')
					total_gral=total_gral+(vs_to_tbc_s_estruct[name8+i])
				}
				forms.impr_rtf_31.funi[i]=utils.numberFormat(vs_to_tbc_s_estruct[name8+i],'###,##0.00')
			}else{
				forms.impr_rtf_31.fcod[i]=''
				forms.impr_rtf_31.fdescri[i]=''
				forms.impr_rtf_31.fcanti[i]=''
				forms.impr_rtf_31.funi[i]=''
				forms.impr_rtf_31.fimp[i]=''	
			}
		}
	}
	forms.impr_rtf_31.ftotal_gral=utils.numberFormat(total_gral,'###,###.00')
	forms.impr_rtf_31.frm_prog='pr-2318'
	forms.impr_2663_1.printRoutine(true);
	
	
	forms.impr_2663_1.frm_foundset = 'IMPR-2740';
	forms.impr_2663_1.frm_impresion = 'impr_2740';
	forms.impr_2740.frazonsocial='Razón social: '+legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
	forms.impr_2740.fcuit='C.U.I.T. : '+legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp9
	switch (legajo_to_tbc_personal_rrhh.per_19){
		case 1:forms.impr_2740.fdir='Dirección:  CONDE 851 p:1 Edif. Adm.';break;
		case 9:forms.impr_2740.fdir='Dirección:  CONDE 849 1 Subsuelo';break;
		case 11:forms.impr_2740.fdir='Dirección:  CONDE 849';break;
	}
	forms.impr_2740.flocali='Localidad: C.A.B.A.'
	forms.impr_2740.fprovin='Provincia: C.A.B.A.'
	forms.impr_2740.fcpostal='C.P.: 1426'
	forms.impr_2740.fapeynom='Nombre y Apellido del trabajador: '+legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_2740.fdni='D.N.I.: '+legajo_to_tbc_personal_rrhh.per_8
	forms.impr_2663_1.printRoutine(true);
	
	
	forms.impr_2663_1.frm_foundset = 'IMPR-0559';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_29';
	forms.impr_rtf_29.frm_prog='pr-559'
	globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
	globals.prn_titulo='* Datos Maestros del Empleado *'
	forms.impr_rtf_29.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
	forms.impr_rtf_29.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_rtf_29.frm_leg_doc_tipo=application.getValueListDisplayValue('vl_tipo_documento',legajo_to_tbc_personal_rrhh.per_7)
	forms.impr_rtf_29.frm_leg_doc_nro=legajo_to_tbc_personal_rrhh.per_8
	forms.impr_rtf_29.frm_nro_cuil=legajo_to_tbc_personal_rrhh.per_106.toString().substr(0,2)+'-'+legajo_to_tbc_personal_rrhh.per_106.toString().substr(2,8)+'-'+legajo_to_tbc_personal_rrhh.per_106.toString().substr(10,1)
	forms.impr_rtf_29.frm_afjp='REPARTO'
	forms.impr_rtf_29.frm_categ=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
	forms.impr_rtf_29.frm_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
	forms.impr_rtf_29.frm_fec_nac=legajo_to_tbc_personal_rrhh.per_9.toString().substr(6,2)+'/'+legajo_to_tbc_personal_rrhh.per_9.toString().substr(4,2)+'/'+legajo_to_tbc_personal_rrhh.per_9.toString().substr(0,4)
	forms.impr_rtf_29.frm_sexo=application.getValueListDisplayValue('vl_sexo',legajo_to_tbc_personal_rrhh.per_6)
	forms.impr_rtf_29.frm_nacion=application.getValueListDisplayValue('vl_nacionalidad',legajo_to_tbc_personal_rrhh.per_37)
	forms.impr_rtf_29.frm_estcivil=application.getValueListDisplayValue('vl_estado_civil',legajo_to_tbc_personal_rrhh.per_26)
	forms.impr_rtf_29.frm_tipo_liq=application.getValueListDisplayValue('vl_tipo_liquidacion',legajo_to_tbc_personal_rrhh.per_18)
	forms.impr_rtf_29.frm_funcion=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto11
	forms.impr_rtf_29.frm_fec_ing=legajo_to_tbc_personal_rrhh.per_15.toString().substr(6,2)+'/'+legajo_to_tbc_personal_rrhh.per_15.toString().substr(4,2)+'/'+legajo_to_tbc_personal_rrhh.per_15.toString().substr(0,4)
	forms.impr_rtf_29.frm_fec_fincon=legajo_to_tbc_personal_rrhh.per_13.toString().substr(6,2)+'/'+legajo_to_tbc_personal_rrhh.per_13.toString().substr(4,2)+'/'+legajo_to_tbc_personal_rrhh.per_13.toString().substr(0,4)
	if(legajo_to_tbc_personal_rrhh.per_23!=null&&legajo_to_tbc_personal_rrhh.per_23!=0&&legajo_to_tbc_personal_rrhh.per_23!=''){
		forms.impr_rtf_29.frm_obra=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_obras_pers.obpdescr
		forms.impr_rtf_29.frm_plan=legajo_to_tbc_personal_rrhh.per_27
	}
	forms.impr_rtf_29.frm_fliares=legajo_to_tbc_personal_rrhh.per_108
	forms.impr_rtf_29.frm_cobro=application.getValueListDisplayValue('vl_banco_cobro',legajo_to_tbc_personal_rrhh.per_52)
	forms.impr_rtf_29.frm_cbu=legajo_to_tbc_personal_rrhh.per_55
	forms.impr_rtf_29.frm_vto_libsan=legajo_to_tbc_personal_rrhh.per_17_8.toString().substr(6,2)+'/'+legajo_to_tbc_personal_rrhh.per_17_8.toString().substr(4,2)+'/'+legajo_to_tbc_personal_rrhh.per_17_8.toString().substr(0,4)
	forms.impr_rtf_29.frm_domic=legajo_to_tbc_personal_rrhh.per_3
	forms.impr_rtf_29.frm_calle1=legajo_to_tbc_personal_rrhh.per_74
	forms.impr_rtf_29.frm_calle2=legajo_to_tbc_personal_rrhh.per_75
	forms.impr_rtf_29.frm_barrio=legajo_to_tbc_personal_rrhh.per_77
	forms.impr_rtf_29.frm_cpostal=legajo_to_tbc_personal_rrhh.per_4
	forms.impr_rtf_29.frm_locali=legajo_to_tbc_personal_rrhh.per_5
	forms.impr_rtf_29.frm_provin=application.getValueListDisplayValue('vl_provincia',legajo_to_tbc_personal_rrhh.per_94)
	forms.impr_rtf_29.frm_asfalto=application.getValueListDisplayValue('vl_sino',legajo_to_tbc_personal_rrhh.per_76)
	
	forms.impr_rtf_29.frm_domic_alter=legajo_to_tbc_personal_rrhh.per_domic_alter
	forms.impr_rtf_29.frm_calle1_alter=legajo_to_tbc_personal_rrhh.per_calle1_alter
	forms.impr_rtf_29.frm_calle2_alter=legajo_to_tbc_personal_rrhh.per_calle2_alter
	forms.impr_rtf_29.frm_barrio_alter=legajo_to_tbc_personal_rrhh.per_barrio_alter
	forms.impr_rtf_29.frm_cpostal_alter=legajo_to_tbc_personal_rrhh.per_cpostal_alter
	forms.impr_rtf_29.frm_locali_alter=legajo_to_tbc_personal_rrhh.per_locali_alter
	forms.impr_rtf_29.frm_provin_alter=application.getValueListDisplayValue('vl_provincia',legajo_to_tbc_personal_rrhh.per_provin_alter)
	forms.impr_rtf_29.frm_asfalto_alter=application.getValueListDisplayValue('vl_sino',legajo_to_tbc_personal_rrhh.per_asfalto_alter)
	forms.impr_rtf_29.frm_telefono=legajo_to_tbc_personal_rrhh.per_41
	forms.impr_rtf_29.frm_celular=legajo_to_tbc_personal_rrhh.per_celular_area+'-'+legajo_to_tbc_personal_rrhh.per_celular_nro
	
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-2740';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_30';
	forms.impr_rtf_30.frm_prog='pr-2740'
	globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
	globals.prn_titulo=' ENTREGA DE ROPA Y ELEMENTOS DE PROTECCION PERSONAL'
	forms.impr_rtf_30.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
	forms.impr_rtf_30.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_2663_1.printRoutine(true);
	
	
	
	forms.impr_2663_1.frm_foundset = 'IMPR-2663-1';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_28';
	globals.prn_titulo==''
	forms.impr_rtf_28.frm_prog='pr-2663'	
	forms.impr_rtf_28.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
	forms.impr_rtf_28.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_rtf_28.frm_leg_doc_tipo=application.getValueListDisplayValue('vl_tipo_documento',legajo_to_tbc_personal_rrhh.per_7)
	forms.impr_rtf_28.frm_leg_doc_nro=legajo_to_tbc_personal_rrhh.per_8
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-2663-2';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
	forms.impr_rtf_22.frm_prog='pr-2663'
	globals.prn_titulo==''
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-0392-1';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
	forms.impr_rtf_22.frm_prog='pr-392'
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-0392-2';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
	forms.impr_rtf_22.frm_prog='pr-392'
	forms.impr_2663_1.printRoutine(true);
	
	
	forms.impr_2663_1.frm_foundset = 'IMPR-0412-1';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_21';
	globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
	forms.impr_rtf_21.frm_prog='pr-412'
	forms.impr_rtf_21.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
	forms.impr_rtf_21.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_rtf_21.frm_leg_categoria=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
	forms.impr_rtf_21.frm_leg_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
	forms.impr_rtf_21.frm_leg_dni=legajo_to_tbc_personal_rrhh.per_8
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-0412-2';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
	forms.impr_rtf_22.frm_prog='pr-412'
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-0412-3';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
	forms.impr_rtf_22.frm_prog='pr-412'
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-2681';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_24';
	forms.impr_rtf_24.frm_prog='pr-2681'
	globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
	forms.impr_rtf_24.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
	forms.impr_rtf_24.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_rtf_24.frm_leg_categoria=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
	forms.impr_rtf_24.frm_leg_horario=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_horarios.hor22
	forms.impr_rtf_24.frm_leg_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
	forms.impr_rtf_24.frm_leg_puesto=legajo_to_tbc_personal_rrhh.per_84
	if(legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto12==1){
		forms.impr_rtf_24.frm_leg_funcion="BECARIO"
	}else{
		forms.impr_rtf_24.frm_leg_funcion=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto11
	}
	forms.impr_rtf_24.frm_leg_fecha_ing=legajo_to_tbc_personal_rrhh.per_15.toString().substr(06,02)+"/"+legajo_to_tbc_personal_rrhh.per_15.toString().substr(04,02)+"/"+legajo_to_tbc_personal_rrhh.per_15.toString().substr(0,04)
	forms.impr_rtf_24.frm_leg_vto_cont=legajo_to_tbc_personal_rrhh.per_13.toString().substr(06,02)+"/"+legajo_to_tbc_personal_rrhh.per_13.toString().substr(04,02)+"/"+legajo_to_tbc_personal_rrhh.per_13.toString().substr(0,04)
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-2679';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_24';
	forms.impr_rtf_24.frm_prog='pr-2679'
	globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
	forms.impr_rtf_24.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
	forms.impr_rtf_24.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_rtf_24.frm_leg_categoria=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
	forms.impr_rtf_24.frm_leg_horario=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_horarios.hor22
	forms.impr_rtf_24.frm_leg_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
	forms.impr_rtf_24.frm_leg_puesto=legajo_to_tbc_personal_rrhh.per_84
	if(legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto12==1){
		forms.impr_rtf_24.frm_leg_funcion="BECARIO"
	}else{
		forms.impr_rtf_24.frm_leg_funcion=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto11
	}
	forms.impr_rtf_24.frm_leg_fecha_ing=legajo_to_tbc_personal_rrhh.per_15.toString().substr(06,02)+"/"+legajo_to_tbc_personal_rrhh.per_15.toString().substr(04,02)+"/"+legajo_to_tbc_personal_rrhh.per_15.toString().substr(0,04)
	forms.impr_rtf_24.frm_leg_vto_cont=legajo_to_tbc_personal_rrhh.per_13.toString().substr(06,02)+"/"+legajo_to_tbc_personal_rrhh.per_13.toString().substr(04,02)+"/"+legajo_to_tbc_personal_rrhh.per_13.toString().substr(0,04)
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-2601';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_23';
	forms.impr_rtf_23.frm_prog='pr-2601'
	globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
	forms.impr_rtf_23.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
	forms.impr_rtf_23.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-2660';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_28';
	forms.impr_rtf_28.frm_prog='pr-2660'
	forms.impr_rtf_28.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
	forms.impr_rtf_28.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_rtf_28.frm_leg_doc_tipo=application.getValueListDisplayValue('vl_tipo_documento',legajo_to_tbc_personal_rrhh.per_7)
	forms.impr_rtf_28.frm_leg_doc_nro=legajo_to_tbc_personal_rrhh.per_8
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-2650';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_27';
	forms.impr_rtf_27.frm_prog='pr-2650'
	globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
	forms.impr_rtf_27.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
	forms.impr_rtf_27.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_rtf_27.frm_leg_dni=legajo_to_tbc_personal_rrhh.per_8
	forms.impr_rtf_27.frm_leg_dom=legajo_to_tbc_personal_rrhh.per_3
	forms.impr_rtf_27.frm_leg_local=legajo_to_tbc_personal_rrhh.per_5
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-2682';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_26';
	forms.impr_rtf_26.frm_prog='pr-2682'
	forms.impr_rtf_26.frm_titulo = 'PEDIDO DE INFORME'
	globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
	forms.impr_rtf_26.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
	forms.impr_rtf_26.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-393';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_25';
	forms.impr_rtf_25.frm_prog='pr-393'
	globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
	forms.impr_rtf_25.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
	forms.impr_rtf_25.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_2663_1.printRoutine(true);
	
	forms.impr_2663_1.frm_foundset = 'IMPR-0411';
	forms.impr_2663_1.frm_impresion = 'impr_rtf_25';
	forms.impr_rtf_25.frm_prog='pr-411'
	globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
	forms.impr_rtf_25.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
	forms.impr_rtf_25.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
	forms.impr_2663_1.printRoutine(true);
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C2986388-A0D8-40F5-9FA6-E47837279C56"}
 */
function onAction1_graba_consentimiento(event) {
	forms.frm_sel_reglamentos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0B2E6945-CA37-44AB-95B1-CDCA6A07E848"}
 */
function onAction1_sel_reglamentos(event) {
	forms.frm_sel_reglamentos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3D861AF3-908C-493D-8673-B3397688DD3B"}
 */
function onAction_btn_imprime(event) {
	if(globals.per_16!=0){
		plugins.dialogs.showErrorDialog("Legajo dado de Baja","No se puede reimprimir reglamentos. Legajo dado de Baja.")
		return
	}
	globals.selec_deselec=false
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG);
	win.title = "Selección de Reglamentos y listados a Imprimir";
	win.setSize(500,650)
	win.show(forms.frm_sel_reglamentos);
}

/**
 * @properties={typeid:24,uuid:"35E9D852-48C9-4C99-B6E3-50D9144A8EA1"}
 */
function imprimir_Reglamentos() {	
	//var continua=globals.DIALOGS.showQuestionDialog("Atención!","¿Confirma la impresión de los reglamentos?","Si", "No")
	var win = application.createWindow("t",JSWindow.MODAL_DIALOG);
	win.title = "Reglamentos a Imprimir";
	win.show(forms.frm_win_reglamentos);
	if(globals.preguntaReglamentos){
		forms.impr_2663_1.frm_foundset = 'IMPR-0559';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_29';
		forms.impr_rtf_29.frm_prog='pr-559'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo='* Datos Maestros del Empleado *'
		forms.impr_rtf_29.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_29.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_29.frm_leg_doc_tipo=application.getValueListDisplayValue('vl_tipo_documento',legajo_to_tbc_personal_rrhh.per_7)
		forms.impr_rtf_29.frm_leg_doc_nro=legajo_to_tbc_personal_rrhh.per_8
		forms.impr_rtf_29.frm_nro_cuil=legajo_to_tbc_personal_rrhh.per_106.toString().substr(0,2)+'-'+legajo_to_tbc_personal_rrhh.per_106.toString().substr(2,8)+'-'+legajo_to_tbc_personal_rrhh.per_106.toString().substr(10,1)
		forms.impr_rtf_29.frm_afjp='REPARTO'
		forms.impr_rtf_29.frm_categ=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
		forms.impr_rtf_29.frm_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
		forms.impr_rtf_29.frm_fec_nac=legajo_to_tbc_personal_rrhh.per_9.toString().substr(6,2)+'/'+legajo_to_tbc_personal_rrhh.per_9.toString().substr(4,2)+'/'+legajo_to_tbc_personal_rrhh.per_9.toString().substr(0,4)
		forms.impr_rtf_29.frm_sexo=application.getValueListDisplayValue('vl_Sexo',legajo_to_tbc_personal_rrhh.per_6)
		forms.impr_rtf_29.frm_nacion=application.getValueListDisplayValue('vl_nacionalidad',legajo_to_tbc_personal_rrhh.per_37)
		forms.impr_rtf_29.frm_estcivil=application.getValueListDisplayValue('vl_estado_civil',legajo_to_tbc_personal_rrhh.per_26)
		forms.impr_rtf_29.frm_tipo_liq=application.getValueListDisplayValue('vl_tipo_liquidacion',legajo_to_tbc_personal_rrhh.per_18)
		forms.impr_rtf_29.frm_funcion=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto11
		forms.impr_rtf_29.frm_fec_ing=legajo_to_tbc_personal_rrhh.per_15.toString().substr(6,2)+'/'+legajo_to_tbc_personal_rrhh.per_15.toString().substr(4,2)+'/'+legajo_to_tbc_personal_rrhh.per_15.toString().substr(0,4)
		forms.impr_rtf_29.frm_fec_fincon=legajo_to_tbc_personal_rrhh.per_13.toString().substr(6,2)+'/'+legajo_to_tbc_personal_rrhh.per_13.toString().substr(4,2)+'/'+legajo_to_tbc_personal_rrhh.per_13.toString().substr(0,4)
		if(legajo_to_tbc_personal_rrhh.per_23!=null&&legajo_to_tbc_personal_rrhh.per_23!=0&&legajo_to_tbc_personal_rrhh.per_23!=''){
			forms.impr_rtf_29.frm_obra=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_obras_pers.obpdescr
			forms.impr_rtf_29.frm_plan=legajo_to_tbc_personal_rrhh.per_27
		}
		forms.impr_rtf_29.frm_fliares=legajo_to_tbc_personal_rrhh.per_108
		forms.impr_rtf_29.frm_cobro=application.getValueListDisplayValue('vl_banco_cobro',legajo_to_tbc_personal_rrhh.per_52)
		forms.impr_rtf_29.frm_cbu=legajo_to_tbc_personal_rrhh.per_55
		if(legajo_to_tbc_personal_rrhh.per_17_8==0){
			forms.impr_rtf_29.frm_vto_libsan='00/00/0000'
		}else{
			forms.impr_rtf_29.frm_vto_libsan=legajo_to_tbc_personal_rrhh.per_17_8.toString().substr(6,2)+'/'+legajo_to_tbc_personal_rrhh.per_17_8.toString().substr(4,2)+'/'+legajo_to_tbc_personal_rrhh.per_17_8.toString().substr(0,4)	
		}
		forms.impr_rtf_29.frm_domic=legajo_to_tbc_personal_rrhh.per_3
		forms.impr_rtf_29.frm_calle1=legajo_to_tbc_personal_rrhh.per_74
		forms.impr_rtf_29.frm_calle2=legajo_to_tbc_personal_rrhh.per_75
		forms.impr_rtf_29.frm_barrio=legajo_to_tbc_personal_rrhh.per_77
		forms.impr_rtf_29.frm_cpostal=legajo_to_tbc_personal_rrhh.per_4
		forms.impr_rtf_29.frm_locali=legajo_to_tbc_personal_rrhh.per_5
		forms.impr_rtf_29.frm_provin=application.getValueListDisplayValue('vl_provincia',legajo_to_tbc_personal_rrhh.per_94)
		forms.impr_rtf_29.frm_asfalto=application.getValueListDisplayValue('vl_sino',legajo_to_tbc_personal_rrhh.per_76)
		forms.impr_rtf_29.frm_domic_alter=legajo_to_tbc_personal_rrhh.per_domic_alter
		forms.impr_rtf_29.frm_calle1_alter=legajo_to_tbc_personal_rrhh.per_calle1_alter
		forms.impr_rtf_29.frm_calle2_alter=legajo_to_tbc_personal_rrhh.per_calle2_alter
		forms.impr_rtf_29.frm_barrio_alter=legajo_to_tbc_personal_rrhh.per_barrio_alter
		forms.impr_rtf_29.frm_cpostal_alter=legajo_to_tbc_personal_rrhh.per_cpostal_alter
		forms.impr_rtf_29.frm_locali_alter=legajo_to_tbc_personal_rrhh.per_locali_alter
		forms.impr_rtf_29.frm_provin_alter=application.getValueListDisplayValue('vl_provincia',legajo_to_tbc_personal_rrhh.per_provin_alter)
		forms.impr_rtf_29.frm_asfalto_alter=application.getValueListDisplayValue('vl_sino',legajo_to_tbc_personal_rrhh.per_asfalto_alter)
		forms.impr_rtf_29.frm_telefono=legajo_to_tbc_personal_rrhh.per_41
		forms.impr_rtf_29.frm_celular=legajo_to_tbc_personal_rrhh.per_celular_area+'-'+legajo_to_tbc_personal_rrhh.per_celular_nro
		forms.impr_2663_1.printRoutine(true);
	
		forms.impr_2663_1.frm_foundset = 'IMPR-0411';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_25';
		forms.impr_rtf_25.frm_prog='pr-411'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		forms.impr_rtf_25.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_25.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_2663_1.printRoutine(true);
	
		forms.impr_2663_1.frm_foundset = 'IMPR-2740';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_37';
		forms.impr_2663_1.printRoutine(true);
	
		if(legajo_to_tbc_personal_rrhh.per_19!=10){
			for (var j=1;j<=3;j++){
				forms.impr_2663_1.frm_foundset = 'IMPR-412-1-'+j;
				forms.impr_2663_1.frm_impresion = 'impr_rtf_45';
				globals.prn_titulo=='REGLAMENTO INTERNO DEL PERSONAL'
				forms.impr_rtf_45.fhoja='Hoja '+j+' de 4'
				forms.impr_2663_1.printRoutine(true);
			}
			forms.impr_2663_1.frm_foundset = 'IMPR-2740';
			//forms.impr_2663_1.frm_impresion = 'impr_rtf_21_bis';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_44';
			forms.impr_rtf_44.fhoja = 'Hoja 4 de 4'
			//forms.impr_2663_1.frm_impresion = 'impr_rtf_45';
			globals.prn_empresa=''
			globals.prn_titulo=='REGLAMENTO INTERNO DEL PERSONAL'
			forms.impr_rtf_21_bis.fecha_impre=null
			forms.impr_rtf_44.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
			forms.impr_rtf_44.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
			forms.impr_rtf_44.frm_categ=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
			forms.impr_rtf_44.frm_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
			forms.impr_rtf_44.frm_leg_doc_nro=legajo_to_tbc_personal_rrhh.per_8
			forms.impr_2663_1.printRoutine(true);
		}else{
			forms.impr_2663_1.frm_foundset = '0412-1-NOBEL';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_45';
			globals.prn_empresa=''
			globals.prn_titulo==''
			forms.impr_rtf_21.fecha_impre=null
			forms.impr_rtf_21.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
			forms.impr_rtf_21.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
			//forms.impr_rtf_21.frm_leg_categoria=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
			//forms.impr_rtf_21.frm_leg_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
			forms.impr_rtf_21.frm_leg_dni=legajo_to_tbc_personal_rrhh.per_8
			forms.impr_2663_1.printRoutine(true);
		}
		
		forms.impr_2663_1.frm_foundset = 'IMPR-0412-2';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
		forms.impr_rtf_22.fecha_impre=null
		//forms.impr_rtf_22.frm_prog='pr-412'
		globals.prn_empresa=''
		globals.prn_titulo==''
		forms.impr_2663_1.printRoutine(true);
		
		if(legajo_to_tbc_personal_rrhh.per_19!=10){
			forms.impr_2663_1.frm_foundset = 'IMPR-0412-3';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
			forms.impr_rtf_22.fecha_impre=null
			globals.prn_empresa=''
			globals.prn_titulo==''
			forms.impr_2663_1.printRoutine(true);
			forms.impr_2663_1.frm_foundset = 'IMPR-2740';
			//forms.impr_2663_1.frm_impresion = 'impr_rtf_21_bis';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_46';
			forms.impr_rtf_46.fhoja = ''
			//forms.impr_2663_1.frm_impresion = 'impr_rtf_45';
			forms.impr_2663_1.printRoutine(true);
		}else{
			forms.impr_2663_1.frm_foundset = '0412-3-NOBEL';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
			forms.impr_rtf_22.fecha_impre=null
			globals.prn_empresa=''
			globals.prn_titulo==''
			forms.impr_2663_1.printRoutine(true);
			forms.impr_2663_1.frm_foundset = 'IMPR-2740';
			//forms.impr_2663_1.frm_impresion = 'impr_rtf_21_bis';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_47';
			forms.impr_rtf_46.fhoja = ''
			//forms.impr_2663_1.frm_impresion = 'impr_rtf_45';
			forms.impr_2663_1.printRoutine(true);
		}
		
	
		if(legajo_to_tbc_personal_rrhh.per_19==11){
			forms.impr_2663_1.frm_foundset = 'IMPR-2740';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_39';
			globals.prn_titulo=''
			forms.impr_2663_1.printRoutine(true);
		
			forms.impr_2663_1.frm_foundset = 'IMPR-2740';
			forms.impr_2663_1.frm_impresion = 'impr_rtf_38';
			globals.prn_titulo='INDUCCIÓN DE PERSONAL RECIENTE INGRESO'
			forms.impr_2663_1.printRoutine(true);
		}else{
			if(legajo_to_tbc_personal_rrhh.per_19==11){				
				forms.impr_2663_1.frm_foundset = 'IMPR-2740';
				forms.impr_2663_1.frm_impresion = 'impr_rtf_41';
				globals.prn_titulo=''
				forms.impr_2663_1.printRoutine(true);

				forms.impr_2663_1.frm_foundset = 'IMPR-2740';
				forms.impr_2663_1.frm_impresion = 'impr_rtf_40';
				globals.prn_titulo='INDUCCIÓN DE PERSONAL RECIENTE INGRESO'
				forms.impr_2663_1.printRoutine(true);
			}else{
				forms.impr_2663_1.frm_foundset = 'IMPR-2740';
				forms.impr_2663_1.frm_impresion = 'impr_rtf_43';
				globals.prn_titulo=''
				forms.impr_2663_1.printRoutine(true);

				forms.impr_2663_1.frm_foundset = 'IMPR-2740';
				forms.impr_2663_1.frm_impresion = 'impr_rtf_42';
				globals.prn_titulo='INDUCCIÓN DE PERSONAL RECIENTE INGRESO'
				forms.impr_2663_1.printRoutine(true);
				
			}
		}
		forms.impr_2663_1.frm_foundset = 'IMPR-2681';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_24';
		forms.impr_rtf_24.frm_prog='pr-2681'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo='SERVICIO DE MEDICINA DEL TRABAJO'
		forms.impr_rtf_24.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_24.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_24.frm_leg_categoria=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
		forms.impr_rtf_24.frm_leg_horario=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_horarios.hor22
		forms.impr_rtf_24.frm_leg_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
		forms.impr_rtf_24.frm_leg_puesto=legajo_to_tbc_personal_rrhh.per_84
		if(legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto12==1){
			forms.impr_rtf_24.frm_leg_funcion="BECARIO"
		}else{
			forms.impr_rtf_24.frm_leg_funcion=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto11
		}
		forms.impr_rtf_24.frm_leg_fecha_ing=legajo_to_tbc_personal_rrhh.per_15.toString().substr(06,02)+"/"+legajo_to_tbc_personal_rrhh.per_15.toString().substr(04,02)+"/"+legajo_to_tbc_personal_rrhh.per_15.toString().substr(0,04)
		forms.impr_rtf_24.frm_leg_vto_cont=legajo_to_tbc_personal_rrhh.per_13.toString().substr(06,02)+"/"+legajo_to_tbc_personal_rrhh.per_13.toString().substr(04,02)+"/"+legajo_to_tbc_personal_rrhh.per_13.toString().substr(0,04)
		forms.impr_2663_1.printRoutine(true);
	
		/*
		forms.impr_2663_1.frm_foundset = 'IMPR-393';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_25';
		forms.impr_rtf_25.frm_prog='pr-393'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo==''
		globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		forms.impr_rtf_25.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_25.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		*/
		
		forms.impr_2663_1.frm_foundset = 'IMPR-2740';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_34';
		forms.impr_2663_1.printRoutine(true);
	
		forms.impr_2663_1.frm_foundset = 'IMPR-2679';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_24';
		forms.impr_rtf_24.frm_prog='pr-2679'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo="EVALUACIÓN DEL PERSONAL"
		forms.impr_rtf_24.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_24.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_24.frm_leg_categoria=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22
		forms.impr_rtf_24.frm_leg_horario=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_horarios.hor22
		forms.impr_rtf_24.frm_leg_sector=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2
		forms.impr_rtf_24.frm_leg_puesto=legajo_to_tbc_personal_rrhh.per_84
		if(legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto12==1){
			forms.impr_rtf_24.frm_leg_funcion="BECARIO"
		}else{
			forms.impr_rtf_24.frm_leg_funcion=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.pto11
		}
		forms.impr_rtf_24.frm_leg_fecha_ing=legajo_to_tbc_personal_rrhh.per_15.toString().substr(06,02)+"/"+legajo_to_tbc_personal_rrhh.per_15.toString().substr(04,02)+"/"+legajo_to_tbc_personal_rrhh.per_15.toString().substr(0,04)
		forms.impr_rtf_24.frm_leg_vto_cont=legajo_to_tbc_personal_rrhh.per_13.toString().substr(06,02)+"/"+legajo_to_tbc_personal_rrhh.per_13.toString().substr(04,02)+"/"+legajo_to_tbc_personal_rrhh.per_13.toString().substr(0,04)
		forms.impr_2663_1.printRoutine(true);
	
		forms.impr_2663_1.frm_foundset = 'IMPR-2740';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_35';
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=''
		forms.impr_rtf_35.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_35.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_2663_1.printRoutine(true);
		
		forms.impr_2663_1.frm_foundset = 'IMPR-2740';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_36';
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=''
		forms.impr_rtf_36.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_36.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_2663_1.printRoutine(true);
	
		forms.impr_2663_1.frm_foundset = 'IMPR-2682';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_26';
		forms.impr_rtf_26.frm_prog='pr-2682'
		globals.prn_titulo==''
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		forms.impr_rtf_26.frm_titulo = 'PEDIDO DE UNIFORME'
		forms.impr_rtf_26.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_26.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_2663_1.printRoutine(true);
	
		forms.impr_2663_1.frm_foundset = 'IMPR-2650';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_27';
		forms.impr_rtf_27.frm_prog='pr-2650'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		switch(legajo_to_tbc_personal_rrhh.per_19){
			case 1:forms.impr_rtf_27.frm_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1;
			       forms.impr_rtf_27.frm_domicilio='Conde 851 Edificio Administrativo 1er. Piso';
			       forms.impr_rtf_27.frm_representante='Horacio Eduardo González';
			       forms.impr_rtf_27.frm_documento_repres='4.387.719';
			       break;
			case 4:forms.impr_rtf_27.frm_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1;
					forms.impr_rtf_27.frm_domicilio='Av. Federico Lacroze 3225';
		       		forms.impr_rtf_27.frm_representante='Carlos Fernando Gini';
		       		forms.impr_rtf_27.frm_documento_repres='14.768.164';
		       		break;       
			case 9:forms.impr_rtf_27.frm_empresa='Centro Integral de Resonancia S.A.'
					forms.impr_rtf_27.frm_domicilio='Tomas Le Breton 4540 Piso 3 "C"';
					forms.impr_rtf_27.frm_representante='Eduardo Zalis';
					forms.impr_rtf_27.frm_documento_repres='30.278.199';
		            break;
			case 10:forms.impr_rtf_27.frm_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1;
					forms.impr_rtf_27.frm_domicilio='Conde 815';
					forms.impr_rtf_27.frm_representante='María Teresa Abal';
					forms.impr_rtf_27.frm_documento_repres='93.700.014';
					break;    
			case 11:forms.impr_rtf_27.frm_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1;
					forms.impr_rtf_27.frm_domicilio='Conde 849';
					forms.impr_rtf_27.frm_representante='Juan Pablo González';
					forms.impr_rtf_27.frm_documento_repres='22.179.240';
					break;       		         
		}
		forms.impr_rtf_27.frm_sexo=legajo_to_tbc_personal_rrhh.per_6
		forms.impr_rtf_27.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_27.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_27.frm_leg_dni=legajo_to_tbc_personal_rrhh.per_8
		forms.impr_rtf_27.frm_leg_dom=legajo_to_tbc_personal_rrhh.per_3
		forms.impr_rtf_27.frm_leg_local=legajo_to_tbc_personal_rrhh.per_5
		forms.impr_2663_1.printRoutine(true);
	
		forms.impr_2663_1.frm_foundset = 'IMPR-2660';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_28';
		forms.impr_rtf_28.frm_prog='pr-2660'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=" "
		forms.impr_rtf_28.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_28.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_28.frm_leg_doc_tipo=application.getValueListDisplayValue('vl_tipo_documento',legajo_to_tbc_personal_rrhh.per_7)
		forms.impr_rtf_28.frm_leg_doc_nro=legajo_to_tbc_personal_rrhh.per_8
		forms.impr_2663_1.printRoutine(true);
	
		forms.impr_2663_1.frm_foundset = 'IMPR-2663-1';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_33';
		forms.impr_rtf_33.frm_prog='pr-2663'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo==''
		forms.impr_rtf_33.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_33.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_33.frm_leg_doc_tipo=application.getValueListDisplayValue('vl_tipo_documento',legajo_to_tbc_personal_rrhh.per_7)
		forms.impr_rtf_33.frm_leg_doc_nro=legajo_to_tbc_personal_rrhh.per_8
		forms.impr_2663_1.printRoutine(true);
		/*
		forms.impr_2663_1.frm_foundset = 'IMPR-2663-2';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_22_bis';
		globals.prn_titulo=''
		globals.prn_empresa=''
		forms.impr_rtf_22_bis.fecha_impre=null
		forms.impr_rtf_22_bis.frm_prog=''
		forms.impr_2663_1.printRoutine(true);
		*/
		for (var k=1;k<=9;k++){
			forms.impr_2663_1.frm_foundset = 'IMPR-2663-3-'+k;
			forms.impr_2663_1.frm_impresion = 'impr_rtf_45';
			forms.impr_rtf_45.fhoja='Hoja '+k+' de 9'
			forms.impr_2663_1.printRoutine(true);
		}
	
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		forms.impr_2663_1.frm_foundset = 'IMPR-2740';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_31';
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=' Estructura de Sueldos'
		forms.impr_rtf_31.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_31.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_rtf_31.frm_tipo_liq=legajo_to_tbc_personal_rrhh.per_18+'  '+application.getValueListDisplayValue('vl_tipo_liquidacion',legajo_to_tbc_personal_rrhh.per_18)
		forms.impr_rtf_31.frm_tipo_estruc='3  por Puesto ('+legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ22+' / '+legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_sector.sector_2_2+')'
		forms.impr_rtf_31.frm_puesto=legajo_to_tbc_personal_rrhh.per_84
		globals.vtipo_liquidacion=legajo_to_tbc_personal_rrhh.per_18
		globals.vtipo_estructura=3
		globals.vPuesto=legajo_to_tbc_personal_rrhh.per_84
		if(vs_to_tbc_s_estruct.getSize()>0){
			var name6='sestr6_'
			var name7='sestr7_'
			var name8='sestr8_'
			var total_gral=0
			for(var i=1;i<=30;i++){
				if(vs_to_tbc_s_estruct[name6+i]!=0){
					forms.impr_rtf_31.fcod[i]=vs_to_tbc_s_estruct[name6+i]
					globals.vConcepto=vs_to_tbc_s_estruct[name6+i]
					forms.impr_rtf_31.fdescri[i]='&nbsp;&nbsp; '+vconcepto_to_tbc_conc.conc22
					if(vs_to_tbc_s_estruct[name7+i]>0){
						if(legajo_to_tbc_personal_rrhh.per_18==2){
							forms.impr_rtf_31.fimp[i]=utils.numberFormat(vs_to_tbc_s_estruct[name8+i],'###,##0.00')
							total_gral=total_gral+(vs_to_tbc_s_estruct[name8+i])
						}else{
							forms.impr_rtf_31.fimp[i]=utils.numberFormat(vs_to_tbc_s_estruct[name7+i]*vs_to_tbc_s_estruct[name8+i],'###,##0.00')
							total_gral=total_gral+(vs_to_tbc_s_estruct[name7+i]*vs_to_tbc_s_estruct[name8+i])
						}
						forms.impr_rtf_31.fcanti[i]=vs_to_tbc_s_estruct[name7+i]
					}else{
						forms.impr_rtf_31.fcanti[i]=''
						forms.impr_rtf_31.fimp[i]=utils.numberFormat(vs_to_tbc_s_estruct[name8+i],'###,##0.00')
						total_gral=total_gral+(vs_to_tbc_s_estruct[name8+i])
					}
					forms.impr_rtf_31.funi[i]=utils.numberFormat(vs_to_tbc_s_estruct[name8+i],'###,##0.00')
				}else{
					forms.impr_rtf_31.fcod[i]=''
					forms.impr_rtf_31.fdescri[i]=''
					forms.impr_rtf_31.fcanti[i]=''
					forms.impr_rtf_31.funi[i]=''
					forms.impr_rtf_31.fimp[i]=''	
				}
			}
		}
		forms.impr_rtf_31.ftotal_gral=utils.numberFormat(total_gral,'###,###.00')
		forms.impr_rtf_31.frm_prog='pr-2318'
		forms.impr_2663_1.printRoutine(true);
	
		if(legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ1==10||legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_puesto.tbc_puesto_to_tbc_categ.categ1==19){
		forms.impr_2663_1.frm_foundset = 'IMPR-0392-1';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
		forms.impr_rtf_22.frm_prog='pr-392'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo==''
		forms.impr_2663_1.printRoutine(true);
		
		forms.impr_2663_1.frm_foundset = 'IMPR-0392-2';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_22';
		forms.impr_rtf_22.frm_prog='pr-392'
		globals.prn_titulo==''
		forms.impr_2663_1.printRoutine(true);
		
		}
	
	
	
	
		forms.impr_2663_1.frm_foundset = 'IMPR-2601';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_23';
		forms.impr_rtf_23.frm_prog='pr-2601'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=''
		forms.impr_rtf_23.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_23.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_2663_1.printRoutine(true);
	
		forms.impr_2663_1.frm_foundset = 'IMPR-2740';
		forms.impr_2663_1.frm_impresion = 'impr_rtf_30';
		forms.impr_rtf_30.frm_prog='pr-2740'
		globals.prn_empresa=legajo_to_tbc_personal_rrhh.tbl_personal_to_tbc_empresas.emp1
		globals.prn_titulo=' ENTREGA DE ROPA Y ELEMENTOS DE PROTECCION PERSONAL'
		forms.impr_rtf_30.frm_leg=legajo_to_tbc_personal_rrhh.per_1_str
		forms.impr_rtf_30.frm_leg_nom=legajo_to_tbc_personal_rrhh.per_2_2
		forms.impr_2663_1.printRoutine(true);
	}
}

/**
 * @properties={typeid:24,uuid:"0089A6C8-38C6-4387-AE05-091E261D6E01"}
 */
function graboCargasFamiliares() {
	if(globals.tit_estado_tratamiento!="Alta"){
		return
	}
	if(forms.frm_cargas_conyugue_ds.foundset.getSize()>0){
		forms.frm_cargas_conyugue_ds.foundset.setSelectedIndex(1)
		per_1_to_tbc_cargas.newRecord()
		per_1_to_tbc_cargas.car1=globals.per_1
		per_1_to_tbc_cargas.car2=forms.frm_cargas_conyugue_ds.foundset['car2']
		per_1_to_tbc_cargas.car3=forms.frm_cargas_conyugue_ds.foundset['car3']
		per_1_to_tbc_cargas.car5=forms.frm_cargas_conyugue_ds.foundset['vl_car5']
		per_1_to_tbc_cargas.car6=forms.frm_cargas_conyugue_ds.foundset['car6']
		if(forms.frm_cargas_conyugue_ds.foundset['car4']!=null && forms.frm_cargas_conyugue_ds.foundset['car4']!=0){
			var anio = forms.frm_cargas_conyugue_ds.foundset['car4'].getFullYear()
			var mes = forms.frm_cargas_conyugue_ds.foundset['car4'].getMonth()+1
			var dia = forms.frm_cargas_conyugue_ds.foundset['car4'].getDate()
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
		if(forms.frm_cargas_conyugue_ds.foundset['car7']!=null && forms.frm_cargas_conyugue_ds.foundset['car7']!=0){
			anio = forms.frm_cargas_conyugue_ds.foundset['car7'].getFullYear()
			mes = forms.frm_cargas_conyugue_ds.foundset['car7'].getMonth()+1
			dia = forms.frm_cargas_conyugue_ds.foundset['car7'].getDate()
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
		per_1_to_tbc_cargas.car9=forms.frm_cargas_conyugue_ds.foundset['car9']
		
		databaseManager.saveData(per_1_to_tbc_cargas.getRecord(1))
		
		globals.car3=forms.frm_cargas_conyugue_ds.foundset['car3']
		globals.car4=forms.frm_cargas_conyugue_ds.foundset['car4']
		globals.car5=forms.frm_cargas_conyugue_ds.foundset['vl_car5']
		globals.car6=forms.frm_cargas_conyugue_ds.foundset['car6']
		globals.car7=forms.frm_cargas_conyugue_ds.foundset['car7']
		globals.car9=forms.frm_cargas_conyugue_ds.foundset['car9']
		globals.cargas_tipo='conyugue'
		grabaHistoricoCargas()
	}
	if(forms.frm_cargas_concubino_ds.foundset.getSize()>0){
		forms.frm_cargas_concubino_ds.foundset.setSelectedIndex(1)
		per_1_to_tbc_cargas.newRecord()
		per_1_to_tbc_cargas.car1=globals.per_1
		per_1_to_tbc_cargas.car2=forms.frm_cargas_concubino_ds.foundset['car2']
		per_1_to_tbc_cargas.car3=forms.frm_cargas_concubino_ds.foundset['car3']
		per_1_to_tbc_cargas.car5=forms.frm_cargas_concubino_ds.foundset['vl_car5']
		per_1_to_tbc_cargas.car6=forms.frm_cargas_concubino_ds.foundset['car6']
		if(forms.frm_cargas_concubino_ds.foundset['car4']!=null && forms.frm_cargas_concubino_ds.foundset['car4']!=0){
			anio = forms.frm_cargas_concubino_ds.foundset['car4'].getFullYear()
			mes = forms.frm_cargas_concubino_ds.foundset['car4'].getMonth()+1
			dia = forms.frm_cargas_concubino_ds.foundset['car4'].getDate()
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
			per_1_to_tbc_cargas.car4=anio+''+ed_mes+''+ed_dia
		}else{
			per_1_to_tbc_cargas.car4=0
		}
		if(forms.frm_cargas_concubino_ds.foundset['car7']!=null && forms.frm_cargas_concubino_ds.foundset['car7']!=0){
			anio = forms.frm_cargas_concubino_ds.foundset['car7'].getFullYear()
			mes = forms.frm_cargas_concubino_ds.foundset['car7'].getMonth()+1
			dia = forms.frm_cargas_concubino_ds.foundset['car7'].getDate()
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
		per_1_to_tbc_cargas.car9=forms.frm_cargas_concubino_ds.foundset['car9']
		
		databaseManager.saveData(per_1_to_tbc_cargas.getRecord(1))
		
		globals.car3=forms.frm_cargas_concubino_ds.foundset['car3']
		globals.car4=forms.frm_cargas_concubino_ds.foundset['car4']
		globals.car5=forms.frm_cargas_concubino_ds.foundset['vl_car5']
		globals.car6=forms.frm_cargas_concubino_ds.foundset['car6']
		globals.car7=forms.frm_cargas_concubino_ds.foundset['car7']
		globals.car9=forms.frm_cargas_concubino_ds.foundset['car9']
		globals.cargas_tipo='concubino'
		grabaHistoricoCargas()
	}
	var cantidad_hijos=forms.frm_cargas_hijos_tbl_ds.foundset.getSize()
	if(cantidad_hijos>0){
		for(var i=1;i<=cantidad_hijos;i++){
			forms.frm_cargas_hijos_tbl_ds.foundset.setSelectedIndex(i)
			per_1_to_tbc_cargas.newRecord()
			per_1_to_tbc_cargas.car1=globals.per_1
			per_1_to_tbc_cargas.car2=forms.frm_cargas_hijos_tbl_ds.foundset['car2']
			per_1_to_tbc_cargas.car3=forms.frm_cargas_hijos_tbl_ds.foundset['car3']
			per_1_to_tbc_cargas.car5=forms.frm_cargas_hijos_tbl_ds.foundset['vl_car5']
			per_1_to_tbc_cargas.car6=forms.frm_cargas_hijos_tbl_ds.foundset['car6']
			if(forms.frm_cargas_hijos_tbl_ds.foundset['car4']!=null && forms.frm_cargas_hijos_tbl_ds.foundset['car4']!=0){
				anio = forms.frm_cargas_hijos_tbl_ds.foundset['car4'].getFullYear()
				mes = forms.frm_cargas_hijos_tbl_ds.foundset['car4'].getMonth()+1
				dia = forms.frm_cargas_hijos_tbl_ds.foundset['car4'].getDate()
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
				per_1_to_tbc_cargas.car4=anio+''+ed_mes+''+ed_dia
			}else{
				per_1_to_tbc_cargas.car4=0
			}
			if(forms.frm_cargas_hijos_tbl_ds.foundset['car7']!=null && forms.frm_cargas_hijos_tbl_ds.foundset['car7']!=0){
				anio = forms.frm_cargas_hijos_tbl_ds.foundset['car7'].getFullYear()
				mes = forms.frm_cargas_hijos_tbl_ds.foundset['car7'].getMonth()+1
				dia = forms.frm_cargas_hijos_tbl_ds.foundset['car7'].getDate()
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
			per_1_to_tbc_cargas.car9=forms.frm_cargas_hijos_tbl_ds.foundset['car9']
			
			databaseManager.saveData(per_1_to_tbc_cargas.getRecord(1))
			
			globals.car3=forms.frm_cargas_hijos_tbl_ds.foundset['car3']
			globals.car4=forms.frm_cargas_hijos_tbl_ds.foundset['car4']
			globals.car5=forms.frm_cargas_hijos_tbl_ds.foundset['vl_car5']
			globals.car6=forms.frm_cargas_hijos_tbl_ds.foundset['car6']
			globals.car7=forms.frm_cargas_hijos_tbl_ds.foundset['car7']
			globals.car9=forms.frm_cargas_hijos_tbl_ds.foundset['car9']
			globals.cargas_tipo='hijos'+i.toString()
			grabaHistoricoCargas()
		}
	}
}

/**
 * @properties={typeid:24,uuid:"E313D8C9-8FEF-404F-9924-8158419817ED"}
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
