/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"45886FBB-773E-43BC-A2AA-924E071C257F",variableType:-4}
 */
var vClose = false;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6F89CE54-330D-4F1E-8416-403610C18CCA"}
 */
function onAction_graba(event) {
	var clienttime = application.getServerTimeStamp();
	var horacarga = clienttime.getHours()*100+clienttime.getMinutes()
	vs_to_hojauti.param_ppc = vs_to_hojauti.param_tam - vs_to_hojauti.param_pic
	vs_to_hojauti.param_tam = ((vs_to_hojauti.param_ta_max-vs_to_hojauti.param_ta_min)/3)+vs_to_hojauti.param_ta_min
	vs_to_hojauti.tipo_opera = globals.vTipoOperador
	vs_to_hojauti.nro_operador = globals.vLegajo
	vs_to_hojauti.fecha_carga = application.getServerTimeStamp();
	vs_to_hojauti.hora_carga = horacarga
	vs_to_hojauti.tipo_evolucion=2
	vs_to_hojauti_items.tipo_opera = globals.vTipoOperador
	vs_to_hojauti_items.nro_operador = globals.vLegajo
	vs_to_hojauti_items.fecha_carga = application.getServerTimeStamp();
	vs_to_hojauti_items.hora_carga = horacarga
	arritmias_to_hojauti_items.tipo_opera = globals.vTipoOperador
	arritmias_to_hojauti_items.nro_operador = globals.vLegajo
	arritmias_to_hojauti_items.fecha_carga = application.getServerTimeStamp();
	arritmias_to_hojauti_items.hora_carga = horacarga
	otros_ingresos_to_hojauti_items.tipo_opera = globals.vTipoOperador
	otros_ingresos_to_hojauti_items.nro_operador = globals.vLegajo
	otros_ingresos_to_hojauti_items.fecha_carga = application.getServerTimeStamp();
	otros_ingresos_to_hojauti_items.hora_carga = horacarga
	otros_egresos_to_hojauti_items.tipo_opera = globals.vTipoOperador
	otros_egresos_to_hojauti_items.nro_operador = globals.vLegajo
	otros_egresos_to_hojauti_items.fecha_carga = application.getServerTimeStamp();
	otros_egresos_to_hojauti_items.hora_carga = horacarga
	vs_to_hojauti_cultivos.tipo_opera = globals.vTipoOperador
	vs_to_hojauti_cultivos.nro_operador = globals.vLegajo
	vs_to_hojauti_cultivos.fecha_carga = application.getServerTimeStamp();
	vs_to_hojauti_cultivos.hora_carga = horacarga
	
	try{
		if(vs_to_hojauti.getSize()>0){	
			databaseManager.saveData(vs_to_hojauti.getRecord(1))
			databaseManager.refreshRecordFromDatabase(vs_to_hojauti, -1);
		}
	 }catch (msg){
			(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
	}
	try{ 
		if(vs_to_hojauti_items.getSize()>0){
			for(var i=1;i<=vs_to_hojauti_items.getSize();i++){
				vs_to_hojauti_items.setSelectedIndex(i)
				databaseManager.saveData(vs_to_hojauti_items.getRecord(1))
			}
		}	
	}catch (msg){
			(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
	}
	try{
		if(arritmias_to_hojauti_items.getSize()>0){
			databaseManager.saveData(arritmias_to_hojauti_items)
		}	
	}catch (msg){
			(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
	}
	try{
		if(otros_ingresos_to_hojauti_items.getSize()>0){
			databaseManager.saveData(otros_ingresos_to_hojauti_items)
		}	
	}catch (msg){
			(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
	}
	try{
		if(otros_egresos_to_hojauti_items.getSize()>0){
			databaseManager.saveData(otros_egresos_to_hojauti_items)
		}	
	}catch (msg){
			(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
	}
	try{
		if(heridas_to_hojauti_items.getSize()>0){
			databaseManager.saveData(heridas_to_hojauti_items)
		}	
	}catch (msg){
			(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
	}
	try{
		if(otras_valoriz_to_hojauti_items.getSize()>0){
			databaseManager.saveData(otras_valoriz_to_hojauti_items)
		}	
    }catch (msg){
	    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(otros_plan_to_hojauti_items.getSize()>0){
    		databaseManager.saveData(otros_plan_to_hojauti_items)
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(vs_to_hojauti_cultivos.getSize()>0){
    		if(vs_to_hojauti_cultivos.anat_patol!=null||vs_to_hojauti_cultivos.eco!=null||vs_to_hojauti_cultivos.hemo!=null||vs_to_hojauti_cultivos.labo!=null||vs_to_hojauti_cultivos.otros_estudios!=null||vs_to_hojauti_cultivos.partes_blandas!=null||vs_to_hojauti_cultivos.punta_cateter!=null||vs_to_hojauti_cultivos.rmn!=null||vs_to_hojauti_cultivos.rx!=null||vs_to_hojauti_cultivos.secreciones!=null||vs_to_hojauti_cultivos.tac!=null||vs_to_hojauti_cultivos.uro!=null){
    			databaseManager.saveData(vs_to_hojauti_cultivos.getRecord(1))
    		}	
    	}
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(otros_estudios_to_hojauti_otros_estudios.getSize()>0){
    		databaseManager.saveData(otros_estudios_to_hojauti_otros_estudios)
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(viacen_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(viacen_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(viaper_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(viaper_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(sonves_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(sonves_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(pic_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(pic_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(tam_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(tam_to_hojauti_cateteres.getRecord(1))
    	}
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(traqueo_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(traqueo_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(k108_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(k108_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(sng_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(sng_to_hojauti_cateteres.getRecord(1))
    	}
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(drenajep_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(drenajep_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(balon_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(balon_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
    	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(swan_to_hojauti_cateteres.getSize()>0){
    		databaseManager.saveData(swan_to_hojauti_cateteres.getRecord(1))
    	}	
    }catch (msg){
	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    try{
    	if(globals.textoObser!=''&&globals.textoObser!=null){
    		vs_to_hojauti_observaciones.newRecord()
			vs_to_hojauti_observaciones.observacion=globals.textoObser
			vs_to_hojauti_observaciones.tipo_opera = globals.vTipoOperador
			vs_to_hojauti_observaciones.nro_operador = globals.vLegajo
			vs_to_hojauti_observaciones.fecha_carga = application.getServerTimeStamp();
			vs_to_hojauti_observaciones.hora_carga = horacarga
    		databaseManager.saveData(vs_to_hojauti_observaciones.getRecord(1))
    	}	
    }catch (msg){
	(plugins.dialogs.showInfoDialog("Error",msg.message,"ok"))
    }
    //databaseManager.commitTransaction()
	 globals.vGrabado=true
	onAction_btn_limpia(event)
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D05AA48F-BA62-4C9A-BA2B-D6C8EDE50E03"}
 */
function onDataChange_nuevoRegistro(oldValue, newValue, event) {
	if (vs_to_hojauti.getSize()>0){
		globals.vGrabado=true
		globals.vNuevaHoja=false
	}
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D4ADF52-0751-4C64-A3C3-50BA03A39F46"}
 */
function onShow_tabless_principal(firstShow, event) {
	globals.vEstadoAccion=''
	globals.renglon=0
	globals.renglon2=0
	globals.renglon3=0
	globals.renglon4=0
	globals.renglon5=0
	globals.renglon6=0
	globals.renglon7=0
	globals.renglon8=0
	globals.renglon9=0
	globals.renglon10=0
	globals.vFecha=application.getServerTimeStamp()
	elements.btn_nueva.visible=true
	elements.box_fecha_hora.visible=false
	elements.box_hora.visible=false
	elements.btn_graba.visible=true
	elements.btn_graba.enabled=false
	elements.fld_fecha.visible=false
	elements.lbl_1.visible=false
	elements.lbl_2.visible=false
	elements.lbl_3.visible=false
	elements.lbl_4.visible=false
	elements.btn_consulta.visible=false
	elements.btn_nuevo_registro.visible=false
	elements.tabs_154.visible=false
	elements.box_hora.editable=true
	elements.fld_fecha.editable=true
	elements.box_hora.enabled=true
	elements.fld_fecha.enabled=true
	globals.vTipoArritmias='arritmia'
	globals.vTipo='hemorragia'	
	globals.vTipoOtrosIngresos='otrosing'
	globals.vTipoOtrosEgresos='otrosegr'
	globals.vTipoOtrosEstudios='otrosestud'	
	globals.vTipoHeridas='heridas'	
	globals.vTipoOtrasValoriz='otrosvalor'
	globals.vTipoOtrosPlan='otrosplan'
	globals.vGrabado=false
	globals.vNuevaHoja=false
	globals.vExisteEvolucion=false
	globals.textoObser=''
	globals.name_tabless='tabless_principal_rcv'
	if(vhiscli_to_hojauti.getSize()>0){
		elements.btn_consulta.visible=true
		elements.btn_consulta.requestFocus()
	}else{
		elements.btn_nueva.requestFocus()
	}
	plugins.scheduler.addCronJob('Actualiza Fecha','0 57 12 * * ?',mtActualizaFecha)
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D7D603BE-7E23-4A1B-9C54-2D532150E14A"}
 */
function onLoad(event) {
	globals.vFechayHora+='Nuevo'
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5A31AF73-4A55-49C4-9E34-FE20FEE1725B"}
 * @AllowToRunInFind
 */
function onAction_FechayHora(event) {
	var fecyhor = new Array()
		fecyhor=globals.vFechayHora.split('|')
	var fec = new Array()
	    fec = fecyhor[0].split('/')
	var hor = new Array()
	    hor = fecyhor[1].split(':')
	var fec_aux = new Date(fec[2], fec[1]-1, fec[0]);
	vs_to_hojauti.find()
	globals.vFecha=fec_aux
	globals.vHora=utils.stringToNumber(hor[0]+hor[1])
	vs_to_hojauti.search()
	if (vs_to_hojauti.getSize()>0){
		//globals.vArm=vs_to_hojauti.param_arm
		//globals.vVni=vs_to_hojauti.param_vni
		globals.HabilitaDeshabilitaCampos('frm_parametros','consulta')
		globals.HabilitaDeshabilitaCampos('frm_valoracion','consulta')
		globals.HabilitaDeshabilitaCampos('frm_valoracion_2','consulta')
		globals.HabilitaDeshabilitaCampos('frm_valoracion_3','consulta')
		globals.HabilitaDeshabilitaCampos('frm_balance_ingresos','consulta')
		globals.HabilitaDeshabilitaCampos('frm_balance_egresos','consulta')
		globals.HabilitaDeshabilitaCampos('frm_plan_cuidados','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cultivos','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateteres','consulta')
		globals.HabilitaDeshabilitaCampos('frm_observaciones','consulta')
	}
	if(vs_to_hojauti_observaciones.getSize()>0){
		globals.textoObser=vs_to_hojauti_observaciones.observacion
	}
	elements.btn_consulta.visible=false
	elements.tabs_154.visible=true
	elements.tabs_154.tabIndex=1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"43503B8C-DE2E-44D5-8F44-94D886E0C61B"}
 */
function onAction_btn_consulta(event) {
	elements.btn_nueva.visible=false
	elements.lbl_1.visible=true
	elements.box_fecha_hora.visible=true
	globals.vGrabado=true
	globals.vNuevaHoja=false
	globals.vEstadoAccion="CONSULTA"
	globals.vMuestraIngresa="Muestra "
	elements.box_fecha_hora.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F440C71-CD62-47CE-877E-84FA2C79A233"}
 */
function onAction_btn_limpia(event) {
	if(globals.vNuevaHoja&&!globals.vGrabado){
			if (vs_to_hojauti.getSize()>0){
				vs_to_hojauti.deleteRecord()
				databaseManager.refreshRecordFromDatabase(vs_to_hojauti, -1);
				//vs_to_hojauti.clear()
			}
			if (vs_to_hojauti_cultivos.getSize()>0){
				if (globals.vCultivos){
					vs_to_hojauti_cultivos.deleteRecord()
				}	
			}
			if (vs_to_hojauti_items.getSize()>0){
				vs_to_hojauti_items.deleteAllRecords()
			}
			if (arritmias_to_hojauti_items.getSize()>0){
				arritmias_to_hojauti_items.deleteAllRecords()
			}
			if (heridas_to_hojauti_items.getSize()>0){
				heridas_to_hojauti_items.deleteAllRecords()
			}
			if (otras_valoriz_to_hojauti_items.getSize()>0){
				otras_valoriz_to_hojauti_items.deleteAllRecords()
			}
			if (otros_egresos_to_hojauti_items.getSize()>0){
				otros_egresos_to_hojauti_items.deleteAllRecords()
			}
			if (otros_estudios_to_hojauti_otros_estudios.getSize()>0){
				otros_estudios_to_hojauti_otros_estudios.deleteAllRecords()
			}
			if (otros_ingresos_to_hojauti_items.getSize()>0){
				otros_ingresos_to_hojauti_items.deleteAllRecords()
			}
			if (otros_plan_to_hojauti_items.getSize()>0){
				otros_plan_to_hojauti_items.deleteAllRecords()
			}
			if (balon_to_hojauti_cateteres.getSize()>0){
				balon_to_hojauti_cateteres.deleteRecord()
			}
			if (drenajep_to_hojauti_cateteres.getSize()>0){
				drenajep_to_hojauti_cateteres.deleteRecord()
			}
			if (k108_to_hojauti_cateteres.getSize()>0){
				k108_to_hojauti_cateteres.deleteRecord()
			}
			if (sng_to_hojauti_cateteres.getSize()>0){
				sng_to_hojauti_cateteres.deleteRecord()
			}
			if (sonves_to_hojauti_cateteres.getSize()>0){
				sonves_to_hojauti_cateteres.deleteRecord()
			}
			if (pic_to_hojauti_cateteres.getSize()>0){
				pic_to_hojauti_cateteres.deleteRecord()
			}
			if (swan_to_hojauti_cateteres.getSize()>0){
				swan_to_hojauti_cateteres.deleteRecord()
			}
			if (tam_to_hojauti_cateteres.getSize()>0){
				tam_to_hojauti_cateteres.deleteRecord()
			}
			if (traqueo_to_hojauti_cateteres.getSize()>0){
				traqueo_to_hojauti_cateteres.deleteRecord()
			}
			if (viacen_to_hojauti_cateteres.getSize()>0){
				viacen_to_hojauti_cateteres.deleteRecord()
			}
			if (viaper_to_hojauti_cateteres.getSize()>0){
				viaper_to_hojauti_cateteres.deleteRecord()
			}
			for(var i=1;i<=7;i++){
				forms.tabless_principal_rcv.elements.tabs_154.setTabFGColorAt(i,"#040404")
			}
		}
	globals.vEstadoAccion=''
	globals.vFecha=null
	globals.vHora=null
	globals.renglon=0
	globals.renglon2=0
	globals.renglon3=0
	globals.renglon4=0
	globals.renglon5=0
	globals.renglon6=0
	globals.renglon7=0
	globals.renglon8=0
	globals.renglon9=0
	globals.renglon10=0
	elements.btn_nueva.visible=true
	elements.box_fecha_hora.visible=false
	elements.box_hora.visible=false
	elements.btn_graba.visible=true
	elements.btn_graba.enabled=false
	elements.fld_fecha.visible=false
	elements.lbl_1.visible=false
	elements.lbl_2.visible=false
	elements.lbl_3.visible=false
	elements.lbl_4.visible=false
	elements.btn_consulta.visible=false
	elements.btn_nuevo_registro.visible=false
	elements.tabs_154.visible=false
	globals.vGrabado=false
	globals.vNuevaHoja=false
	globals.vExisteEvolucion=false
	globals.vCultivos=false
	globals.vArm="Ninguno"
	globals.vTipoArritmias='arritmia'
	globals.vTipo='hemorragia'	
	globals.vTipoOtrosIngresos='otrosing'
	globals.vTipoOtrosEgresos='otrosegr'
	globals.vTipoOtrosEstudios='otrosestud'	
	globals.vTipoHeridas='heridas'	
	globals.vTipoOtrasValoriz='otrosvalor'
	globals.vTipoOtrosPlan='otrosplan'	
	globals.textoObser=''
	//for(var j=1;j<=7;j++){
		//forms.tabless_principal.elements.tabs_154.setTabFGColorAt(j,"#fb0000")
	//}	
	if(vhiscli_to_hojauti.getSize()>0){
		elements.btn_consulta.visible=true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"601D5402-6A1B-4002-B766-373A3F694CD4"}
 */
function onAction_btn_salir(event) {
	plugins.scheduler.removeJob('Actualiza Fecha')
	var i=0;
	if(!globals.vNuevaHoja){
		for(i=1;i<=7;i++){
		    forms.tabless_principal_rcv.elements.tabs_154.setTabFGColorAt(i,"#040404")
		}
		globals.vFechayHora=''
		forms.frm_elige_menu.controller.show()
	}else{
		if(globals.vGrabado){
			for(i=1;i<=7;i++){
			    forms.tabless_principal_rcv.elements.tabs_154.setTabFGColorAt(i,"#040404")
			}
			globals.vFechayHora=''
			forms.frm_elige_menu.controller.show()
		}else{
			var boton_presionado=plugins.dialogs.showQuestionDialog("¡Atención!","¿Sale sin Grabar lo ingresado?","Si","No")
			if(boton_presionado=="Si"){
				if (vs_to_hojauti.getSize()>0){
					vs_to_hojauti.deleteRecord()
					databaseManager.refreshRecordFromDatabase(vs_to_hojauti, -1);
					//vs_to_hojauti.clear()
				}
				if (vs_to_hojauti_cultivos.getSize()>0){
					if (globals.vCultivos){
						vs_to_hojauti_cultivos.deleteRecord()
						databaseManager.refreshRecordFromDatabase(vs_to_hojauti_cultivos, -1);
					}	
				}
				if (vs_to_hojauti_items.getSize()>0){
					vs_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(vs_to_hojauti_items, -1);
				}
				if (arritmias_to_hojauti_items.getSize()>0){
					arritmias_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(arritmias_to_hojauti_items, -1);
				}
				if (heridas_to_hojauti_items.getSize()>0){
					heridas_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(heridas_to_hojauti_items, -1);
				}
				if (otras_valoriz_to_hojauti_items.getSize()>0){
					otras_valoriz_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(otras_valoriz_to_hojauti_items, -1);
				}
				if (otros_egresos_to_hojauti_items.getSize()>0){
					otros_egresos_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(otros_egresos_to_hojauti_items, -1);
				}
				if (otros_estudios_to_hojauti_otros_estudios.getSize()>0){
					otros_estudios_to_hojauti_otros_estudios.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(otros_estudios_to_hojauti_otros_estudios, -1);
				}
				if (otros_ingresos_to_hojauti_items.getSize()>0){
					otros_ingresos_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(otros_ingresos_to_hojauti_items, -1);
				}
				if (otros_plan_to_hojauti_items.getSize()>0){
					otros_plan_to_hojauti_items.deleteAllRecords()
					databaseManager.refreshRecordFromDatabase(otros_plan_to_hojauti_items, -1);
				}
				if (balon_to_hojauti_cateteres.getSize()>0){
					balon_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(balon_to_hojauti_cateteres, -1);
				}
				if (drenajep_to_hojauti_cateteres.getSize()>0){
					drenajep_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(drenajep_to_hojauti_cateteres, -1);
				}
				if (k108_to_hojauti_cateteres.getSize()>0){
					k108_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(k108_to_hojauti_cateteres, -1);
				}
				if (sng_to_hojauti_cateteres.getSize()>0){
					sng_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(sng_to_hojauti_cateteres, -1);
				}
				if (sonves_to_hojauti_cateteres.getSize()>0){
					sonves_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(sonves_to_hojauti_cateteres, -1);
				}
				if (pic_to_hojauti_cateteres.getSize()>0){
					pic_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(pic_to_hojauti_cateteres, -1);
				}
				if (swan_to_hojauti_cateteres.getSize()>0){
					swan_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(swan_to_hojauti_cateteres, -1);
				}
				if (tam_to_hojauti_cateteres.getSize()>0){
					tam_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(tam_to_hojauti_cateteres, -1);
				}
				if (traqueo_to_hojauti_cateteres.getSize()>0){
					traqueo_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(traqueo_to_hojauti_cateteres, -1);
				}
				if (viacen_to_hojauti_cateteres.getSize()>0){
					viacen_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(viacen_to_hojauti_cateteres, -1);
				}
				if (viaper_to_hojauti_cateteres.getSize()>0){
					viaper_to_hojauti_cateteres.deleteRecord()
					databaseManager.refreshRecordFromDatabase(viaper_to_hojauti_cateteres, -1);
				}
				for(i=1;i<=7;i++){
				    forms.tabless_principal_rcv.elements.tabs_154.setTabFGColorAt(i,"#040404")
				}
				globals.vFechayHora=''
				globals.vNuevaHoja=false
				forms.frm_elige_menu.controller.show()
				
			}
		}	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1E492454-C563-4FCB-9484-AFF5250D69BD"}
 */
function onAction_btn_nueva(event) {
	globals.vFecha=application.getServerTimeStamp()
	globals.vHora=globals.vFecha.getHours()*100
	elements.btn_nueva.visible=false
	elements.btn_consulta.visible=false
	elements.lbl_1.visible=false
	elements.box_fecha_hora.visible=false
	elements.lbl_2.visible=true
	elements.lbl_3.visible=true
	elements.fld_fecha.visible=true
	elements.box_hora.visible=true
	elements.fld_fecha.enabled=true
	elements.box_hora.enabled=true
	globals.vGrabado=false
	globals.vNuevaHoja=true
	elements.btn_nuevo_registro.visible=true
	globals.vEstadoAccion="ALTA"
	globals.vMuestraIngresa="Ingresar "
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6AC202D5-9B66-4101-9D48-F1AB4AB335A2"}
 */
function onAction(event) {
	if (vs_to_hojauti.getSize()>0){
		globals.vGrabado=true
		globals.vNuevaHoja=false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"33BE92D8-89BC-4B31-B3EF-886E77AC351C"}
 * @AllowToRunInFind
 */
function onAction_btn_nuevo_registro(event) {
	var clienttime = application.getServerTimeStamp();
	globals.vHoraActual = clienttime.getHours()*100+clienttime.getMinutes()
	globals.vFechaActualEnfermeria = application.getServerTimeStamp();
	globals.vFechaActualEnfermeria=globals.vFechaActualEnfermeria.setHours(0)
	globals.vFechaActualEnfermeria=globals.vFechaActualEnfermeria.setMinutes(0)
	globals.vFechaActualEnfermeria=globals.vFechaActualEnfermeria.setSeconds(0)
	globals.vFechaActualEnfermeria=globals.vFechaActualEnfermeria.setMilliseconds(0)
	globals.vFecha=globals.vFecha.setHours(0)
	globals.vFecha=globals.vFecha.setMinutes(0)
	globals.vFecha=globals.vFecha.setSeconds(0)
	globals.vFecha=globals.vFecha.setMilliseconds(0)
	vs_to_hojauti.find()
	vs_to_hojauti.search()
	var hora_tope_inferior = 0
	if(globals.vFecha==globals.vFechaActualEnfermeria){
		if(globals.vHoraActual>=600&&globals.vHoraActual<=1400){
			hora_tope_inferior = 600
		}else{
			if(globals.vHoraActual>=1400&&globals.vHoraActual<=2200){
				hora_tope_inferior = 1400
			}else{
				if(globals.vHoraActual>=2200&&globals.vHoraActual<=2300){
					hora_tope_inferior = 2200
				}else{
					hora_tope_inferior = 0
				}
			}	
		}
	}else{
		if(globals.vFecha==globals.vFechaActualEnfermeria-1){
			hora_tope_inferior = 2200
		}
	}
	if (globals.vFecha<globals.vFechaIngreso){
		plugins.dialogs.showInfoDialog("Fecha Errónea","Fecha de Planilla anterior al Ingreso del paciente","Ok")
		globals.vGrabado=true
		globals.vNuevaHoja=false
	}else{
		if(globals.vFecha==globals.vFechaIngreso&&globals.vHora<globals.vHoraIngreso){
			plugins.dialogs.showInfoDialog("Hora Errónea","Hora de Planilla anterior al Ingreso del Paciente","Ok")
			globals.vGrabado=true
			globals.vNuevaHoja=false
		}else{
			if(globals.vFecha>globals.vFechaActualEnfermeria){
				plugins.dialogs.showInfoDialog("Fecha Errónea","Fecha de Planilla mayor a la actual","Ok")
				globals.vGrabado=true
				globals.vNuevaHoja=false
			
			}else{
				if(globals.vFecha==globals.vFechaActualEnfermeria&&globals.vHora>globals.vHoraActual){
					plugins.dialogs.showInfoDialog("Hora Errónea","Hora de Planilla mayor a la actual","Ok")
					globals.vGrabado=true
					globals.vNuevaHoja=false
				}else{
					if(globals.vFecha==globals.vFechaActualEnfermeria&&globals.vHora<hora_tope_inferior){
						plugins.dialogs.showInfoDialog("Hora Errónea","Hora de Planilla menor al inicio del Turno actual","Ok")
						globals.vGrabado=true
						globals.vNuevaHoja=false
					}else{
						if(globals.vFecha==globals.vFechaActualEnfermeria-1&&globals.vHora<hora_tope_inferior){
							plugins.dialogs.showInfoDialog("Hora Errónea","Hora de Planilla menor al inicio del Turno actual","Ok")
							globals.vGrabado=true
							globals.vNuevaHoja=false
						}else{	
							if(globals.vFecha<globals.vFechaActualEnfermeria-1){
								plugins.dialogs.showInfoDialog("Fecha Errónea","Fecha de Planilla menor al inicio del Turno actual","Ok")
								globals.vGrabado=true
								globals.vNuevaHoja=false
							}else{
							if(vs_to_hojauti.getSize()<1){
								vs_to_hojauti.newRecord()
								databaseManager.saveData(vs_to_hojauti)
						//globals.InicializarDatosDeRelacion(vs_to_hojauti,"enfermeria","hojauti","postgres")
								globals.vGrabado=false
								globals.vNuevaHoja=true
								elements.btn_nuevo_registro.visible=false
								elements.box_hora.editable=false
								elements.fld_fecha.editable=false
								elements.box_hora.enabled=false
								elements.fld_fecha.enabled=false
								globals.vExisteEvolucion=false
								globals.vHoraInferior=hora_tope_inferior
								globals.valida_existencia_evolucion()
								globals.valida_campos_obligatorios_completos(globals.name_tabless)
								globals.HabilitaDeshabilitaCampos('frm_parametros','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_valoracion','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_valoracion_2','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_valoracion_3','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_balance_ingresos','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_balance_egresos','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_plan_cuidados','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_cultivos','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_cateteres','nuevo')
								globals.HabilitaDeshabilitaCampos('frm_observaciones','nuevo')
								globals.textoObser=''
								forms.frm_parametros.elements.lbl_factor_hgt.visible=false
								forms.frm_parametros.elements.lbl_cant_hgt.visible=false
								forms.frm_parametros.elements.factor_correc_hgt.visible=false
								forms.frm_parametros.elements.factor_hgt_cant.visible=false
								elements.tabs_154.visible=true
								elements.tabs_154.tabIndex=1
								//for (var i = 0; i < vs_to_hojauti.alldataproviders.length-1; i++) {
								//	var name = vs_to_hojauti.alldataproviders[i]
								//	application.output(i)
								//	application.output(name)
								//}	
						
							}else{
								plugins.dialogs.showInfoDialog("Registro Existente","Horario ya ingresado","Ok")
								globals.vGrabado=true
								globals.vNuevaHoja=false
							}
						  }
						}	
					}
				}	
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"BBF55267-B940-448C-AEF9-587BEB6EE182"}
 */
function mtActualizaFecha() {
	globals.vFechaActualEnfermeria =application.getServerTimeStamp() 
		//utils.timestampToDate(new Date)
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9EE8BDBB-8974-4C53-B5EB-E27B28A3A3BB"}
 */
function onUnload_tabless_principal(event) {
	plugins.scheduler.removeJob('Actualiza Fecha')
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"60465848-FDBB-4E26-808B-2D7B4FA050E5"}
 */
function onDataChange(oldValue, newValue, event) {
	var fecyhor = new Array()
	fecyhor=globals.vFechayHora.split('|')
	var fec = new Array()
    fec = fecyhor[0].split('/')
    var hor = new Array()
    hor = fecyhor[1].split(':')
    var fec_aux = new Date(fec[2], fec[1]-1, fec[0]);
    globals.vFecha=fec_aux
    globals.vHora=utils.stringToNumber(hor[0]+hor[1])
    if (vs_to_hojauti.getSize()>0){
    	globals.vArm=vs_to_hojauti.param_arm
    	globals.vVni=vs_to_hojauti.param_vni
    	globals.HabilitaDeshabilitaCampos('frm_parametros','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_valoracion','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_valoracion_2','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_valoracion_3','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_balance_ingresos','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_balance_egresos','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_plan_cuidados','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_cultivos','consulta')
    	globals.HabilitaDeshabilitaCampos('frm_cateteres','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_balon','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_drenaje_pleural','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_k108','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_pic','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_sng','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_sonda_vesical','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_swan_ganz','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_tam','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_traqueo','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_via_central','consulta')
		globals.HabilitaDeshabilitaCampos('frm_cateter_via_periferica','consulta')
		globals.HabilitaDeshabilitaCampos('frm_observaciones','consulta')
    }
    elements.btn_consulta.visible=false
    elements.tabs_154.visible=true
	elements.tabs_154.tabIndex=1
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"21CEB0AB-2A04-4DD7-92E8-AC19D60CB1B7"}
 */
function onAction1_btn_limpia(event) {
	if(globals.vNuevaHoja&&!globals.vGrabado){
		var boton_presionado=plugins.dialogs.showQuestionDialog("¡Atención!","Perderá todos los cambios. ¿Desea continuar?","Si","No")
		if(boton_presionado=="Si"){
			onAction_btn_limpia(event)
		}
	}else{
		onAction_btn_limpia(event)
	}
}

/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"961D4CEC-61D8-4DF2-859B-383E3645F481"}
 */
function onTabChange_tab154(previousIndex, event) {
	if(elements.tabs_154.tabIndex==9){
		if(globals.vNuevaHoja){
			globals.HabilitaDeshabilitaCampos('frm_cateter_balon','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_drenaje_pleural','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_k108','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_pic','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_sng','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_sonda_vesical','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_swan_ganz','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_tam','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_traqueo','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_via_central','nuevo')
			globals.HabilitaDeshabilitaCampos('frm_cateter_via_periferica','nuevo')	
			
		}else{
			globals.HabilitaDeshabilitaCampos('frm_cateter_balon','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_drenaje_pleural','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_k108','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_pic','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_sng','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_sonda_vesical','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_swan_ganz','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_tam','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_traqueo','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_via_central','consulta')
			globals.HabilitaDeshabilitaCampos('frm_cateter_via_periferica','consulta')
		}
	}
	if(elements.tabs_154.tabIndex==1){
		
		if(vs_to_hojauti.param_arm==1||vs_to_hojauti.param_arm==2){
			globals.vArm="A.R.M."
		}else{
			if(vs_to_hojauti.param_vni==null||vs_to_hojauti.param_vni==0){
				globals.vArm="Ninguno"
			}else{
				globals.vArm="V.N.I."
			}
		}
	}
}
