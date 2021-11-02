/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"83C7CDEC-451A-4C94-815A-A518EF118455"}
 */
function onAction_volver(event) {
	//history.back()
	//forms.tab_scr_tbc_admision.controller.show()
	globals.vLegajo=0
	globals.vClave=0
	globals.vOperador=''
	globals.vPassOperador=''
	globals.vHiscli1=0
	globals.vhclin9=0
	globals.vHiscli2259=0
	globals.vhiscli=0
	globals.vHiscli=0
	//globals.hisclin=0
	globals.vHisclin=0
	//globals.vClose=true
	//application.exit()
	//forms.LoginCirugia.controller.show()
	globals.vClose=true
		var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+"true";
		application.closeSolution('Menu','retorno_MenuCirugia',args)
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"0CE9AC1F-A88B-444B-B073-34FE97413D71"}
 */
function onShow(firstShow, event) {
	globals.Hiscli_edit = globals.vHiscli.toString();
	switch (globals.Hiscli_edit.length){
		case 2:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,1)+'/'+globals.Hiscli_edit.substr(1,1);break;
		case 3:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,2)+'/'+globals.Hiscli_edit.substr(2,1);break;
		case 4:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,3)+'/'+globals.Hiscli_edit.substr(3,1);break;
		case 5:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,4)+'/'+globals.Hiscli_edit.substr(4,1);break;
		case 6:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,5)+'/'+globals.Hiscli_edit.substr(5,1);break;
		case 7:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,6)+'/'+globals.Hiscli_edit.substr(6,1);break;
		case 8:	globals.Hiscli_edit = globals.Hiscli_edit.substr(0,7)+'/'+globals.Hiscli_edit.substr(7,1);break;
	}	
	elements.btn_seguqui.requestFocus()

}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"BF721E00-4DBC-462E-A662-B4977381FCC9"}
 */
function onAction_elige_seguridadQuirurgica(event) {
	try{
	globals.vhisclinica=globals.vHiscli
	globals.vhiscli=globals.vHiscli
	globals.vvalhisto=false
	globals.vprotocolo=0
	globals.vtipohist = 0
	globals.vexisteciru=''
	globals.vexistesegu=''
	globals.vexistelectora=''
	globals.vtiponome=1
	//globals.vcodnome=0
	globals.vnropedunico=0
	//globals.vservicio=0
	//globals.vantinstru=''
	//globals.valergia=''
	//globals.vmaterial=''
	//globals.vmuestras=''
	//globals.vdesinstru=''
	globals.ControlAlerta(0, globals.vHiscli, 1, 1)	
	forms.frm_menu_0.elements.lookup_nomenclador.visible=false
	forms.frm_menu_0.elements.tabless_opciones.visible=false
	forms.frm_menu_0.controller.show()
	}catch (msg){
		plugins.dialogs.showErrorDialog("Error en Seguridad Quirúrgica",msg.message)
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"914BE936-7072-4A92-A617-C6991147EBD4"}
 * @AllowToRunInFind
 */
function onAction_elige_evaluacionAnestesica(event) {
	//application.closeSolution('EvaluacionAnestesicaPreoperatoria')
	try{
	var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
	win.title = "Ingrese Legajo del Anestesiólogo";
	win.setSize(570,260)
	win.resizable=false
	globals.vSolomedicos=true
	globals.EsAnestesista=false
	globals.vLegajo=0
	globals.vLega=0
	globals.vOperador=''
	globals.vClave=0
	win.show(forms.PideLegajoMedico)
	if(!globals.EsAnestesista){
		win.hide()
		win.destroy()
	}
	globals.vLegajoAnestesista=globals.vLega
	globals.vLegajoAnestesistaIE=globals.vTipoOperador
	globals.vNombreAnestesista=globals.vOperador
	globals.ControlAlerta(0, globals.vHiscli, 1, 1)	
	if (globals.vLegajoAnestesista!=0&&globals.vSolomedicos&&globals.EsAnestesista){
		var fecha_actual = application.getServerTimeStamp()
		var anio=fecha_actual.getFullYear()
		var mes=fecha_actual.getMonth()+1
		var mes_ed
		if((fecha_actual.getMonth()+1)> 9){
			mes_ed=mes
		}else{
			mes_ed="0"+mes
		}
		var dia=fecha_actual.getDate()
		var dia_ed
		if(fecha_actual.getDate()>9){
			dia_ed=dia
		}else{
			dia_ed="0"+dia
		}
		var fecha_hoy=anio.toString()+mes_ed.toString()+dia_ed.toString()
		var min =utils.stringToNumber(fecha_actual.getMinutes().toString())
		var min_ed=''
		if (min < 10){
			min_ed='0'+min
		}else{
			min_ed=min
		}
		var hora_hoy=utils.stringToNumber(fecha_actual.getHours().toString()+min_ed)
		globals.vFechaActual=fecha_hoy
		globals.vSeleccionoRegistro=true
		
		vs_to_tbc_anestesia.loadAllRecords()
		vhiscli_to_tbc_anestesia.loadAllRecords()
		
		//databaseManager.refreshRecordFromDatabase(vs_to_tbc_anestesia,-1)
		//databaseManager.refreshRecordFromDatabase(vhiscli_to_tbc_anestesia,-1)
		if(vs_to_tbc_anestesia.getSize()>0){
			globals.vFeccarga=vs_to_tbc_anestesia.anes_feccarga
			globals.vHorcarga=vs_to_tbc_anestesia.anes_horcarga
			vhiscli_to_tbc_anestesia.find()
			vhiscli_to_tbc_anestesia.search()
		}else{
			globals.vFeccarga=fecha_hoy
			globals.vHorcarga=hora_hoy
		}
		globals.vHoraInicio=''
		globals.vInterven=0
		globals.vTipoInterv=''
		globals.vEdad=''
		globals.txt_4=''
		forms.InicioEvaluacionAnestesica.controller.show()
		forms.frm_anestesia_preoperatoria_dtl.controller.focusFirstField()
	}else{
		return
	}
	}catch (msg){
		plugins.dialogs.showErrorDialog("Error en Evaluacion Anestésica",msg.message)
	}
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"3B49B3ED-6846-489B-8D30-BBA06E3E024C"}
 * @AllowToRunInFind
 */
function onAction_elige_ProtocoloQuirurgico(event) {
	try{
	globals.Ver_hcir_ocu()
	
	if (globals.vHcirOcu){
		plugins.dialogs.showInfoDialog("Historia Clinica Tomada","Historia Clinica tomada por otro Usuario y/o Sesión")
	}else{
		globals.ControlAlerta(0, globals.vHiscli, 1, 1)
		//databaseManager.refreshRecordFromDatabase(vs_to_tbc_cirugint,-1)
		//vs_to_tbc_cirugint.find()
		/*
		vs_to_tbc_cirugint.cirihistcl=globals.vHiscli
		vs_to_tbc_cirugint.ciricodnome=0
		vs_to_tbc_cirugint.ciritiponome=0
		vs_to_tbc_cirugint.ciriestado=0
		*/
		//vs_to_tbc_cirugint.search(true)
		vs_to_tbc_cirugint.loadAllRecords()
		globals.proto1=''
		globals.proto2=''
		globals.proto3=''
		globals.proto4=''
		globals.proto5=''
		globals.proto6=''
		globals.proto7=''
		globals.proto8=''
		globals.proto9=''
		globals.hcicirtxt1=''
		globals.hcicirtxt2=''
		globals.hcicirtxt3=''
		globals.hcicirtxt4=''
		globals.hcicirtxt5=''
		globals.hcicirtxt6=''
		globals.hcicirtxt7=''
		globals.hcicirtxt8=''
		globals.obstetritxt1=''
		globals.obstetritxt2=''
		globals.obstetritxt3=''
		globals.obstetritxt4=''
		globals.obstetritxt5=''
		globals.obstetritxt6=''
		var fecha_actual = application.getServerTimeStamp()
		var anio=fecha_actual.getFullYear()
		var mes=fecha_actual.getMonth()+1
		var mes_ed
		if((fecha_actual.getMonth()+1)> 9){
			mes_ed=mes
		}else{
			mes_ed="0"+mes
		}
		var dia=fecha_actual.getDate()
		var dia_ed
		if(fecha_actual.getDate()>9){
			dia_ed=dia
		}else{
			dia_ed="0"+dia
		}
		var fecha_hoy=anio.toString()+mes_ed.toString()+dia_ed.toString()
		var min =utils.stringToNumber(fecha_actual.getMinutes().toString())
		var min_ed=''
		if (min < 10){
			min_ed='0'+min
		}else{
			min_ed=min
		}
		var seg =utils.stringToNumber(fecha_actual.getSeconds().toString())
		var seg_ed=''
		if (seg < 10){
			seg_ed='0'+seg
		}else{
			seg_ed=seg
		}
		var hora_hoy=utils.stringToNumber(fecha_actual.getHours().toString()+min_ed+seg_ed)
		
		globals.vFechaActual=fecha_hoy
		
		var fs2 = databaseManager.getFoundSet("asistencial","tbc_seguqui_new")
		
		fs2.clear()
		fs2.find()
		fs2['segtipohc']=0
		fs2['seghistclinica']=globals.vHiscli
		fs2['segprotocolo']=0
		fs2.search(true)
		
		var fs = databaseManager.getFoundSet("asistencial","tbc_cirugint")
		fs.clear()
		fs.find()
		fs['cirihistcl']=globals.vHiscli
		fs['ciriestado']=0
		fs['ciritiponome']=0
		fs['ciricodnome']=0
		fs.search(true)
		if(fs.getSize()>0){
			forms.form116_dtl.elements.alta_protocolo.visible=false
			forms.form116_dtl.elements.ciri_fecfinal.visible=true
			//forms.form116_dtl.elements.graba_protocolo.visible=true
			forms.form116_dtl.elements.EsHemo.enabled=false
			forms.form116_dtl.elements.ciri_interven.enabled=false
			forms.form116_dtl.elements.ciri_interven_code.enabled=false
			forms.form116_dtl.elements.busca_interven.enabled=false
			globals.vAltaProtocolo=false
			fs.setSelectedIndex(1)
			/*
			if(vs_to_tbc_cirugint.cirifechacarga!=null){
				globals.vFechaCarga=vs_to_tbc_cirugint.cirifechacarga
				globals.vHoraCarga=vs_to_tbc_cirugint.cirihoracarga
				globals.vNroProtocolo=vs_to_tbc_cirugint.ciriprotocolo
			}
			*/
			globals.vFechaCarga=fs['cirifechacarga']
			globals.vHoraCarga=fs['cirihoracarga']
			globals.vNroProtocolo=fs['ciriprotocolo']
			
			//databaseManager.refreshRecordFromDatabase(vhiscli_to_tbc_cirugint,-1)
			//vhiscli_to_tbc_cirugint.find()
			//vhiscli_to_tbc_cirugint.search()
			vhiscli_to_tbc_cirugint.loadAllRecords()
			globals.vInterven0=fs['ciriinterven']
			globals.vAnesChek=fs['cirianestesia']
			globals.vtipo_ciru_ie=fs['ciriieciru']
			globals.vtipo_cirujano_ie=fs['ciriieciru']
			globals.vciri_legciru=fs['cirilegciru']
			globals.vciri_legneonato=fs['cirilegneonato']
			globals.vciri_legpartero=fs['cirilegpartero']
			globals.vQuirofano=fs['cirinroquirofa']
			globals.vFechaInicio=fs['cirifechainicio']
			globals.vPinzasInicio=fs['ciripinzasinicio']
		
			switch (fs['ciritipointerven']){
			case 0:globals.vEsHemodinamia="No"
			case 1:globals.vEsHemodinamia="No"
			case 2:globals.vEsHemodinamia="Si"
			default:globals.vEsHemodinamia="No"
			}	
			
			
			/*
			globals.MuestroTextoProtocTxt(1,'proto1')
			globals.MuestroTextoProtocTxt(2,'proto2')
			globals.MuestroTextoProtocTxt(3,'proto3')
			globals.MuestroTextoProtocTxt(4,'proto4')
			globals.MuestroTextoProtocTxt(5,'proto5')
			globals.MuestroTextoProtocTxt(6,'proto6')
			globals.MuestroTextoProtocTxt(7,'proto7')
			globals.MuestroTextoProtocTxt(8,'proto8')
			globals.MuestroTextoProtocTxt(9,'proto9')
			*/
			globals.vItemTexto=1
			globals.proto1=vs_to_tbl_protoc_txt.texto
			globals.vItemTexto=2
			globals.proto2=vs_to_tbl_protoc_txt.texto
			globals.vItemTexto=3
			globals.proto3=vs_to_tbl_protoc_txt.texto
			globals.vItemTexto=4
			globals.proto4=vs_to_tbl_protoc_txt.texto
			globals.vItemTexto=5
			globals.proto5=vs_to_tbl_protoc_txt.texto
			globals.vItemTexto=6
			globals.proto6=vs_to_tbl_protoc_txt.texto
			globals.vItemTexto=7
			globals.proto7=vs_to_tbl_protoc_txt.texto
			globals.vItemTexto=8
			globals.proto8=vs_to_tbl_protoc_txt.texto
			globals.vItemTexto=9
			globals.proto9=vs_to_tbl_protoc_txt.texto
			var fs_hcicir=databaseManager.getFoundSet("asistencial","tbc_hcicir_new")
			fs_hcicir.clear()
			if(fs_hcicir.find()){
				fs_hcicir['hcirtipohc']=0
				fs_hcicir['hcirhiscli']=globals.vHiscli
				fs_hcicir['hcirprotocolo']=globals.vNroProtocolo
				fs_hcicir.search()
				if(fs_hcicir.getSize()>0){
					fs_hcicir.setSelectedIndex(1)
					globals.vFechaHcir=fs_hcicir['hcirfecha']
					globals.vHoraHcir=fs_hcicir['hcirhora']
				}else{
					globals.vFechaHcir=0
					globals.vHoraHcir=0
				}
			}else{
				globals.vFechaHcir=0
				globals.vHoraHcir=0
			}
			globals.hcicirtxt1=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,1)
			globals.hcicirtxt2=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,2)
			globals.hcicirtxt3=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,3)
			globals.hcicirtxt4=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,4)
			globals.hcicirtxt5=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,5)
			globals.hcicirtxt6=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,6)
			globals.hcicirtxt7=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,7)
			globals.hcicirtxt8=globals.MostrarTextoCargadoHCIR(globals.vHiscli,globals.vFechaHcir,globals.vHoraHcir,8)
		
			globals.current_obstetri_gest=fs['ciriobstgesta']
			
			if(globals.proto5==''){
				globals.vMonitoSiNo="No"
			}else{
				globals.vMonitoSiNo="Si"
			}
			if(globals.vInterven0==161||globals.vInterven0==162||globals.vInterven0==878){
				if(vhiscli_to_tbc_cirugint.ciriparto==1){
					if(vhiscli_to_tbc_cirugint.tbc_cirugint_to_tbc_obstetri_gesta.getSize()>0){
						globals.current_obstetri_gest=vhiscli_to_tbc_cirugint.ciriobstgesta
						globals.obstetritxt1=globals.MostrarTextoCargadoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,1)
						globals.obstetritxt2=globals.MostrarTextoCargadoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,2)
						globals.obstetritxt3=globals.MostrarTextoCargadoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,3)
						globals.obstetritxt4=globals.MostrarTextoCargadoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,4)
						globals.obstetritxt5=globals.MostrarTextoCargadoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,5)
						globals.obstetritxt6=globals.MostrarTextoCargadoOBSTXT(globals.vHiscli,globals.current_obstetri_gest,6)
					}
				}
			}
		
		
			if(fs['cirianestesia']!=1){
				forms.form116_dtl.elements.tab_extension.setTabEnabledAt(6,false)
			}else{
				forms.form116_dtl.BuscoAnestesia()
				forms.form116_dtl.elements.tab_extension.setTabEnabledAt(6,true)
			}
			
			var fecha = ''
			fecha=fs['cirifechabanio'].toString() 
			var hora = ''
			hora=fs['cirihorabanio'].toString()
			var fecha1 = ''
			fecha1=fs['cirifecharasura'].toString()
			var hora1 = ''
			hora1=fs['cirihorarasura'].toString()
			if(fs['cirifechabanio']==0){
				forms.Preparacion_dtl.elements.lbl_1.visible=false
				forms.Preparacion_dtl.elements.var_ciri_fecbano_lbl.visible=false
				globals.vFuebaniado='No'
			}else{
				forms.Preparacion_dtl.elements.lbl_1.visible=true
				forms.Preparacion_dtl.elements.var_ciri_fecbano_lbl.visible=true
				globals.vFuebaniado='Si'
				globals.var_ciri_fecbanio=globals.var_ciri_fecbanio.setFullYear(utils.stringToNumber(fecha.substr(0,4)))
				globals.var_ciri_fecbanio=globals.var_ciri_fecbanio.setMonth(utils.stringToNumber(fecha.substr(4,2)-1))
				globals.var_ciri_fecbanio=globals.var_ciri_fecbanio.setDate(utils.stringToNumber(fecha.substr(6,2)))
		
				if(hora.length==1){
					globals.var_ciri_fecbanio=globals.var_ciri_fecbanio.setHours(utils.stringToNumber('0'))
					globals.var_ciri_fecbanio=globals.var_ciri_fecbanio.setMinutes(utils.stringToNumber(hora.substr(0,1)))
				}else{
					if(hora.length==2){
						globals.var_ciri_fecbanio=globals.var_ciri_fecbanio.setHours(utils.stringToNumber('0'))
						globals.var_ciri_fecbanio=globals.var_ciri_fecbanio.setMinutes(utils.stringToNumber(hora.substr(0,2)))
					}else{
						if(hora.length==3){
							globals.var_ciri_fecbanio=globals.var_ciri_fecbanio.setHours(utils.stringToNumber(hora.substr(0,1)))
							globals.var_ciri_fecbanio=globals.var_ciri_fecbanio.setMinutes(utils.stringToNumber(hora.substr(1,2)))
						}else{
							globals.var_ciri_fecbanio=globals.var_ciri_fecbanio.setHours(utils.stringToNumber(hora.substr(0,2)))
							globals.var_ciri_fecbanio=globals.var_ciri_fecbanio.setMinutes(utils.stringToNumber(hora.substr(2,2)))
						}
					}
				}	
			}
			if(vhiscli_to_tbc_cirugint.cirifecharasura==0){
				forms.Preparacion_dtl.elements.lbl_2.visible=false
				forms.Preparacion_dtl.elements.lbl_3.visible=false
				forms.Preparacion_dtl.elements.var_ciri_fecrasura_lbl.visible=false
				forms.Preparacion_dtl.elements.ciri_conquerasura_lbl.visible=false
				globals.vFuerasurado='No'
					
			}else{
				forms.Preparacion_dtl.elements.lbl_2.visible=true
				forms.Preparacion_dtl.elements.lbl_3.visible=true
				forms.Preparacion_dtl.elements.var_ciri_fecrasura_lbl.visible=true
				forms.Preparacion_dtl.elements.ciri_conquerasura_lbl.visible=true
				globals.vFuerasurado='Si'
				globals.var_ciri_fecrasura=globals.var_ciri_fecrasura.setFullYear(utils.stringToNumber(fecha1.substr(0,4)))
				globals.var_ciri_fecrasura=globals.var_ciri_fecrasura.setMonth(utils.stringToNumber(fecha1.substr(4,2)-1))
				globals.var_ciri_fecrasura=globals.var_ciri_fecrasura.setDate(utils.stringToNumber(fecha1.substr(6,2)))
				if(hora1.length==1){
					globals.var_ciri_fecrasura=globals.var_ciri_fecrasura.setHours(utils.stringToNumber('0'))
					globals.var_ciri_fecrasura=globals.var_ciri_fecrasura.setMinutes(utils.stringToNumber(hora1.substr(0,1)))
				}else{
					if(hora1.length==2){
						globals.var_ciri_fecrasura=globals.var_ciri_fecrasura.setHours(utils.stringToNumber('0'))
						globals.var_ciri_fecrasura=globals.var_ciri_fecrasura.setMinutes(utils.stringToNumber(hora1.substr(0,2)))
					}else{
						if(hora1.length==3){
							globals.var_ciri_fecrasura=globals.var_ciri_fecrasura.setHours(utils.stringToNumber(hora1.substr(0,1)))
							globals.var_ciri_fecrasura=globals.var_ciri_fecrasura.setMinutes(utils.stringToNumber(hora1.substr(1,2)))
						}else{
							globals.var_ciri_fecrasura=globals.var_ciri_fecrasura.setHours(utils.stringToNumber(hora1.substr(0,2)))
							globals.var_ciri_fecrasura=globals.var_ciri_fecrasura.setMinutes(utils.stringToNumber(hora1.substr(2,2)))
						}
					}
				}	
			}
							
			var fecha2 = ''
			fecha2=fs['cirifechainicio'].toString()
			var hora2 = ''
			hora2=fs['cirihorainicio'].toString()
			var fecha3 = ''
			fecha3=fs['cirifechafinal'].toString()
			var hora3 = ''
			hora3=fs['cirihorafinal'].toString()
	
			globals.vFechaInicio=globals.vFechaInicio.setFullYear(utils.stringToNumber(fecha2.substr(0,4)))
			globals.vFechaInicio=globals.vFechaInicio.setMonth(utils.stringToNumber(fecha2.substr(4,2)-1))
			globals.vFechaInicio=globals.vFechaInicio.setDate(utils.stringToNumber(fecha2.substr(6,2)))
	
			if(hora2.length==1){
				globals.vFechaInicio=globals.vFechaInicio.setHours(utils.stringToNumber('0'))
				globals.vFechaInicio=globals.vFechaInicio.setMinutes(utils.stringToNumber(hora2.substr(0,1)))
			}else{
				if(hora2.length==2){
					globals.vFechaInicio=globals.vFechaInicio.setHours(utils.stringToNumber('0'))
					globals.vFechaInicio=globals.vFechaInicio.setMinutes(utils.stringToNumber(hora2.substr(0,2)))
				}else{
					if(hora2.length==3){
						globals.vFechaInicio=globals.vFechaInicio.setHours(utils.stringToNumber(hora2.substr(0,1)))
						globals.vFechaInicio=globals.vFechaInicio.setMinutes(utils.stringToNumber(hora2.substr(1,2)))
					}else{
						globals.vFechaInicio=globals.vFechaInicio.setHours(utils.stringToNumber(hora2.substr(0,2)))
						globals.vFechaInicio=globals.vFechaInicio.setMinutes(utils.stringToNumber(hora2.substr(2,2)))
					}
				}
			}
			if (fs['cirifechafinal']==0){
				forms.form116_dtl.elements.ciri_fecfinal.visible=false
				forms.form116_dtl.elements.ciri_fecfinal_lbl.visible=false
				globals.vFechaFinal=null
			}else{
				forms.form116_dtl.elements.ciri_fecfinal.visible=true
				forms.form116_dtl.elements.ciri_fecfinal_lbl.visible=true
				globals.vFechaFinal=globals.vFechaFinal.setFullYear(utils.stringToNumber(fecha3.substr(0,4)))
				globals.vFechaFinal=globals.vFechaFinal.setMonth(utils.stringToNumber(fecha3.substr(4,2)-1))
				globals.vFechaFinal=globals.vFechaFinal.setDate(utils.stringToNumber(fecha3.substr(6,2)))
				if(hora3.length==1){
					globals.vFechaFinal=globals.vFechaFinal.setHours(utils.stringToNumber('0'))
					globals.vFechaFinal=globals.vFechaFinal.setMinutes(utils.stringToNumber(hora3.substr(0,1)))
				}else{
					if(hora3.length==2){
						globals.vFechaFinal=globals.vFechaFinal.setHours(utils.stringToNumber('0'))
						globals.vFechaFinal=globals.vFechaFinal.setMinutes(utils.stringToNumber(hora3.substr(0,2)))
					}else{
						if(hora3.length==3){
							globals.vFechaFinal=globals.vFechaFinal.setHours(utils.stringToNumber(hora3.substr(0,1)))
							globals.vFechaFinal=globals.vFechaFinal.setMinutes(utils.stringToNumber(hora3.substr(1,2)))
						}else{
							globals.vFechaFinal=globals.vFechaFinal.setHours(utils.stringToNumber(hora3.substr(0,2)))
							globals.vFechaFinal=globals.vFechaFinal.setMinutes(utils.stringToNumber(hora3.substr(2,2)))
						}
					}
				}
			}
			application.showForm("Inicio")
		}else{
			if(vs1_to_tbc_cirugint.getSize()>0){
				var encontro_prot_anterior=false
				for(var i=1;i<=vs1_to_tbc_cirugint.getSize()&&!encontro_prot_anterior;i++){
					vs1_to_tbc_cirugint.setSelectedIndex(i)
					if (vs1_to_tbc_cirugint.cirifechainicio<=utils.stringToNumber(fecha_hoy)){
						var win = application.createWindow("g",JSWindow.MODAL_DIALOG)
						win.title = "Protocolo con Alta";
						win.setSize(350,220)
						var thePressedButton = plugins.dialogs.showQuestionDialog('Existe Cirugía', 'Existe una cirugía para este Protocolo'+'\r\n'+'¿Confirma Nuevo Protocolo?', "Si", "No");
						if (thePressedButton=="Si"){
							globals.vConfirma=true
							globals.vFechaCarga=fecha_hoy
							globals.vHoraCarga=hora_hoy
							globals.vAltaProtocolo=true
							globals.vNroProtocolo=0
							globals.vInterven0=0
							globals.vAnesChek=0
							globals.vciri_legciru=0
							globals.vciri_legneonato=0
							globals.vciri_legpartero=0
							globals.vQuirofano=0
							globals.vFechaInicio=null
							globals.vFechaFinal=null
							globals.vPinzasInicio=0
							globals.anatobgral=''
							globals.anatpaob1=''
							globals.vEsHemodinamia="No"
							globals.vMonitoSiNo="No"
							globals.vFuebaniado="No"
							globals.vFuerasurado="No"
							globals.var_ciri_fecbanio=null
							globals.var_ciri_fecrasura=null
							globals.vtipo_ciru_ie=1
							globals.vtipo_cirujano_ie=1
							encontro_prot_anterior=true
							//if(vs2_to_tbc_seguqui_new.getSize()>0){
							if(fs2.getSize()>0){
								globals.BuscarSeguri()
								if(!globals.vSeguquiOk){
									plugins.dialogs.showInfoDialog("Seguridad Quirurgica","FALTA COMPLETAR LA SEGURIDAD QUIRURGICA")
									plugins.dialogs.showInfoDialog("Datos Faltantes de Seguridad Quirurgica",globals.vBuscarSeguriProcesos)
									globals.DeslocHcir()
									application.showForm("frm_menu_principal")
								}else{
									//vs_to_tbc_cirugint.newRecord()
									//globals.InicializarDatosDeRelacion(vs_to_tbc_cirugint,"asistencial","tbc_cirugint")
									forms.form116_dtl.elements.alta_protocolo.visible=true
									forms.form116_dtl.elements.EsHemo.enabled=true
									forms.form116_dtl.elements.ciri_interven.enabled=true
									forms.form116_dtl.elements.ciri_interven_code.enabled=true
									forms.form116_dtl.elements.busca_interven.enabled=true
									forms.form116_dtl.elements.alta_protocolo.visible=true
									//forms.form116_dtl.elements.graba_protocolo.visible=false
									forms.form116_dtl.elements.tab_extension.enabled=false
									forms.form116_dtl.elements.ciri_fecfinal.visible=false
									forms.form116_dtl.elements.ciri_fecfinal_lbl.visible=false
									application.showForm("Inicio")
								}	
							}else{
								plugins.dialogs.showInfoDialog("Seguridad Quirurgica","FALTA COMPLETAR LA SEGURIDAD QUIRURGICA")
								globals.DeslocHcir()
								application.showForm("frm_menu_principal")
							}
						}else{
							globals.vConfirma=false
						}
						if (!globals.vConfirma){
							globals.DeslocHcir()
							application.showForm("frm_menu_principal")
						}
					}
				}
			}else{
				globals.vFechaCarga=fecha_hoy
				globals.vHoraCarga=hora_hoy
				globals.vAltaProtocolo=true
				globals.vNroProtocolo=0
				globals.vInterven0=0
				globals.vAnesChek=0
				globals.vciri_legciru=0
				globals.vciri_legneonato=0
				globals.vciri_legpartero=0
				globals.vQuirofano=0
				globals.vFechaInicio=null
				globals.vFechaFinal=null
				globals.vPinzasInicio=0
				globals.anatobgral=''
				globals.anatpaob1=''
				globals.vEsHemodinamia="No"
				globals.vMonitoSiNo="No"
				globals.vFuebaniado="No"
				globals.vFuerasurado="No"
				globals.var_ciri_fecbanio=null
				globals.var_ciri_fecrasura=null
				globals.vtipo_ciru_ie=1
				globals.vtipo_cirujano_ie=1
				//if(vs2_to_tbc_seguqui_new.getSize()>0){
				if(fs2.getSize()>0){
					globals.BuscarSeguri()
					if(!globals.vSeguquiOk){
						plugins.dialogs.showInfoDialog("Seguridad Quirurgica","FALTA COMPLETAR LA SEGURIDAD QUIRURGICA")
						plugins.dialogs.showInfoDialog("Datos Faltantes de Seguridad Quirurgica",globals.vBuscarSeguriProcesos)
						globals.DeslocHcir()
						application.showForm("frm_menu_principal")
					}else{
						//vs_to_tbc_cirugint.newRecord()
						//globals.InicializarDatosDeRelacion(vs_to_tbc_cirugint,"asistencial","tbc_cirugint")
						forms.form116_dtl.elements.alta_protocolo.visible=true
						forms.form116_dtl.elements.EsHemo.enabled=true
						forms.form116_dtl.elements.ciri_interven.enabled=true
						forms.form116_dtl.elements.ciri_interven_code.enabled=true
						forms.form116_dtl.elements.busca_interven.enabled=true
						forms.form116_dtl.elements.alta_protocolo.visible=true
						//forms.form116_dtl.elements.graba_protocolo.visible=false
						forms.form116_dtl.elements.tab_extension.enabled=false
						forms.form116_dtl.elements.ciri_fecfinal.visible=false
						forms.form116_dtl.elements.ciri_fecfinal_lbl.visible=false
						application.showForm("Inicio")
					}	
				}else{
					plugins.dialogs.showInfoDialog("Seguridad Quirurgica","FALTA COMPLETAR LA SEGURIDAD QUIRURGICA")
					globals.DeslocHcir()
					application.showForm("frm_menu_principal")
				}
			}
		}

	}
	}catch (msg){
		plugins.dialogs.showErrorDialog("Error en Protocolo",msg.message)
	}
	
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"2B13EF92-2506-4B10-8FDF-64A27973B2FD"}
 */
function onAction_elige_ImprimeProtocolo(event) {
	//forms.frm_consulta_protocolo_dtl.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A42C070E-4743-4EB7-A32E-ECBC66C4D3EF"}
 * @AllowToRunInFind
 */
function onAction_elige_TratamientoObstetricia(event) {
	try{
	globals.Ver_Bandeja_Ciru()
	
	if (globals.vBandejaCiru){
		plugins.dialogs.showInfoDialog("Historia Clinica Tomada","Historia Clinica tomada por otro Usuario y/o Sesión")
	}else{
		globals.vHiscli2259=globals.vHiscli
		var fs = databaseManager.getFoundSet("asistencial","tbc_cirugint")
		fs.find()
		fs['cirihistcl']=globals.vHiscli
		fs['ciriestado']=0
		fs['ciritiponome']=0
		fs['ciricodnome']=0
		fs.search(true)
		if(fs.getSize()>0){
			fs.setSelectedIndex(1)
			globals.vNroProtocolo=fs['ciriprotocolo']
		}
		globals.vNroProtocolo2259=globals.vNroProtocolo
		globals.vTipoHC=0
		globals.vTipoLegajo=globals.vTipoOperador
		globals.vNroLegajo=globals.vLega
		application.showForm("frm_IngresoMedicamentos_tab")
	}
	}catch (msg){
		plugins.dialogs.showErrorDialog("Error en Ingreso de Medicamentos",msg.message)
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B2B57D81-E7BB-43A9-954C-0463C192613D"}
 */
function onAction_Elige_ImpresionProtocoloQuirurgico(event) {
	try{
	globals.vHisclin=globals.vHiscli
	globals.vHisclin_edit=globals.vHisclin.toString()
	var largo = globals.vHisclin_edit.length
	globals.vHisclin_edit=globals.vHisclin_edit.substr(0,largo-1)+'/'+globals.vHisclin_edit.substr(largo-1,1)
	globals.vFormulario="frm_menu_principal"
	application.showForm("frm_consulta_protocolo")
	}catch (msg){
		plugins.dialogs.showErrorDialog("Error en reimpresión",msg.message)
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F057D78-F241-4462-9687-9D8F13222F13"}
 */
function onAction_elige_ImpresionConsentimientos(event) {
	try{
	globals.vClose=true
	var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+globals.vHiscli+';'+globals.vApeyNom+';'+globals.vSexo+';'+globals.vFechaIngreso+';'+globals.vHoraIngreso;
	application.closeSolution('Consentimientos','llamada_desde_Menu_Cirugia',args)
	}catch (msg){
		plugins.dialogs.showErrorDialog("Error en consentimientos",msg.message)
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D2FC22F6-A6EF-4EE3-8FBF-CCC6495255C4"}
 */
function onAction_ayuda_menu_principal(event) {
	globals.textoAyuda='AYUDA-3'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Menú Principal";
	win.setLocation(810,300)
	win.setSize(500,350)
	win.show(forms.frm_ayuda_1)
}
