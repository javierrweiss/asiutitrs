/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3287606E-1A73-440D-9FB1-A944159B9218"}
 */
var f_presenta = ' ';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"60794F95-A827-47DD-AE05-43D0CB6DD968"}
 */
var f_descrip = ' ';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C898BA84-A76C-4F69-8D98-E99F92D11441",variableType:4}
 */
var vNroAnestesia = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BC63BF45-D575-43C7-91D9-5EA0BA73C61A"}
 */
var vString = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0E56A78B-9F8F-47C9-9CC2-8BBECF91B4D7"}
 */
var vDatosQueFaltan = '';

/**
 * @properties={typeid:35,uuid:"E9B11177-3E2E-4251-A0FA-9A015DC623A9",variableType:-4}
 */
var vProtocoloOk = false;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DFD5D0DE-A72A-4FBF-8613-05D633BAAD30"}
 * @AllowToRunInFind
 */
function onAction_Cantidad(event) {
	
	var tipoarticulo=''
	switch (bandejaciru_vcodigomed_to_tbc_articulos.art_tipart){
		case 1:tipoarticulo='Medicamento';
		case 2:tipoarticulo='Material Descartable';
		default:tipoarticulo='Articulo';
	}
	
	//var fs1 = databaseManager.getFoundSet("asistencial","tbc_his_lectora")
	var encontrado = false
	if(globals.bandejaciru_vCodigoMed!=0&&globals.bandejaciru_cantidad!=0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Confirma Grabación del '+ tipoarticulo, '¿Confirma la grabación del '+ globals.bandejaciru_vCodigoMed + ' - ' + bandejaciru_vcodigomed_to_tbc_articulos.art_descrip +' ?','Si','No');
	 	if (thePressedButton == "Si"){ 
	 		if(bandejaciru_vestado2259_to_tbc_his_lectora.getSize()<1){
			/*
				forms.bandejaciru_his_lectora.foundset.newRecord()
			globals.InicializarDatos("frm_his_lectora","asistencial","tbc_his_lectora")
			forms.frm_his_lectora.foundset.hlechiscli=globals.vHiscli
			forms.frm_his_lectora.foundset.hlecestado=1
			forms.frm_his_lectora.foundset.hlecart=globals.vCodigoMed
			forms.frm_his_lectora.foundset.hleccan=globals.vCantidad
			fecha_actual=application.getServerTimeStamp()
			anio_actual = fecha_actual.getFullYear()
			mes_actual = fecha_actual.getMonth()+1
			dia_actual = fecha_actual.getDate()
			hora = fecha_actual.getHours()
			min = fecha_actual.getMinutes()
			seg = fecha_actual.getSeconds()
			mil = fecha_actual.getUTCMilliseconds()
			forms.frm_his_lectora.foundset.hlecfecha=anio_actual+''+mes_actual_ed+''+dia_actual_ed
			forms.frm_his_lectora.foundset.hlechora=hora+''+min+''+seg+''+mil.toString().substr(0,2)
			databaseManager.saveData(forms.frm_his_lectora.foundset.getRecord(1))
			*/
				elements.bean_243.visible=true
				elements.bean_243.minimum=0
				elements.bean_243.maximum=1
				elements.bean_243.stringPainted=true
				elements.bean_243.value = 0
				application.updateUI()
				bandejaciru_vestado2259_to_tbc_his_lectora.newRecord()
				globals.InicializarDatosDeRelacion(bandejaciru_vestado2259_to_tbc_his_lectora,"asistencial","tbc_his_lectora")
				elements.bean_243.value = 1
				application.updateUI()
				elements.bean_243.visible=false
			}else{
				for(var i=1;i<=bandejaciru_vestado2259_to_tbc_his_lectora.getSize()&&!encontrado;i++){
					bandejaciru_vestado2259_to_tbc_his_lectora.setSelectedIndex(i)
					if(bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art==globals.bandejaciru_vCodigoMed){
						encontrado = true
					}
				}
				if(encontrado){
					bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cant=globals.bandejaciru_cantidad
				}else{
				
					elements.bean_243.visible=true
					elements.bean_243.minimum=0
					elements.bean_243.maximum=1
					elements.bean_243.stringPainted=true
					elements.bean_243.value = 0
					application.updateUI()
					bandejaciru_vestado2259_to_tbc_his_lectora.newRecord()
					globals.InicializarDatosDeRelacion(bandejaciru_vestado2259_to_tbc_his_lectora,"asistencial","tbc_his_lectora")
				}
			}	
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_histclin=globals.bandejaciru_hiscli
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_estado=globals.bandejaciru_vEstado
			if(bandejaciru_vcodigomed_to_tbc_articulos.art_medpide>0){
					bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art=bandejaciru_vcodigomed_to_tbc_articulos.art_medpide
			}else{
					bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art=globals.bandejaciru_vCodigoMed
			}
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cant=globals.bandejaciru_cantidad
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_imed=globals.bandejaciru_vImed
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_protocolo=globals.bandejaciru_protocolo
				//vestado2259_to_tbc_his_lectora.hlec_fec=anio_actual+''+mes_actual_ed+''+dia_actual_ed
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_fec=utils.stringToNumber(globals.CapturaFechaSistema().toString())
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_hora=utils.stringToNumber(globals.CapturaHoraSistema("HHMMSSDD").toString())
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_feclec=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_fec
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_horlec=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_hora
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_fecing=bandejaciru_vs3_to_tbc_cirugint.cirifechacarga
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_horing=utils.stringToNumber(bandejaciru_vs3_to_tbc_cirugint.cirihoracarga.toString().substr(0,4))
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_legmed=bandejaciru_vs3_to_tbc_cirugint.cirilegciru
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_tiplegmed=bandejaciru_vs3_to_tbc_cirugint.ciriieciru
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cama=bandejaciru_vhiscli2259_unico_to_tbc_admision_scroll.adm_cama
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_habita=bandejaciru_vhiscli2259_unico_to_tbc_admision_scroll.adm_habita
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_tiplegoper=globals.bandejaciru_TipOperador
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_legoper=globals.bandejaciru_LegOperador
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_tiphistclin=globals.bandejaciru_TipHisclin
			bandejaciru_vestado2259_to_tbc_his_lectora.hlec_sector=globals.bandejaciru_vSector
			try{
					databaseManager.saveData(bandejaciru_vestado2259_to_tbc_his_lectora.getRecord(1))
					var array = databaseManager.getFailedRecords(bandejaciru_vestado2259_to_tbc_his_lectora)
					for (var ii = 0; ii < array.length; ii++) {
						var record = array[ii];
						var jstable = databaseManager.getTable(record);
						var tableSQLName = jstable.getSQLName();
						plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
						plugins.dialogs.showErrorDialog("Error en grabación de vestado2259_to_tbc_his_lectora",record.exception.getMessage());
						//application.output(record.exception);
						if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
						// exception thrown in pre-insert/update/delete event method
							var thrown = record.exception.getErrorCode()
							//application.output("Record validation failed: " + thrown)
						}
					}
				}catch(msg){
					application.output(msg)
				}
				elements.bean_243.value = 1
				application.updateUI()
				elements.bean_243.visible=false
			
		
		
		 	globals.bandejaciru_vAlfaCodigoMed=''
		 	globals.bandejaciru_vCodigoMed=0
		 	globals.bandejaciru_cantidad=0
		 	elements.btn_anula.visible=false
		 	elements.codigo.requestFocus()
	 	}
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D88FF6D2-9427-470B-8645-B8095CF8994B"}
 * @AllowToRunInFind
 */
function onAction_CodigoMed(event) {
	
	if(globals.bandejaciru_vImed>0){
		elements.btn_anula.visible=false
		var long_his_lectora=0
		var hislectora_vacio=bandejaciru_vestado2259_to_tbc_his_lectora.getSize()
		var largo = globals.bandejaciru_vAlfaCodigoMed.length;
		var codigo_aux=0
		var esnumero = true;
		var encontrado = false;
		var fecha_actual = new Date()
		var anio_actual = 0
		var mes_actual = 0
		var dia_actual = 0
		var mil = 0
		fecha_actual=application.getServerTimeStamp()
		anio_actual = fecha_actual.getFullYear()
		mes_actual = fecha_actual.getMonth()+1
		dia_actual = fecha_actual.getDate()
	
		var mes_actual_ed =''
		var dia_actual_ed = ''
		if(mes_actual < 10){
			mes_actual_ed="0"+mes_actual
		}else{
			mes_actual_ed=mes_actual
		}
		if(dia_actual < 10){
			dia_actual_ed="0"+dia_actual
		}else{
			dia_actual_ed=dia_actual
		}
		var hora =utils.stringToNumber(fecha_actual.getHours().toString())
		var hora_ed=''
		if (hora < 10){
			hora_ed='0'+hora
		}else{
			hora_ed=hora
		}
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
		mil = fecha_actual.getUTCMilliseconds()
		mil = 970
		mil=0
		var mil_ed=''
		for (var ii= 0;ii<largo && esnumero == true; ii++){
			if (globals.bandejaciru_vAlfaCodigoMed.charCodeAt(ii)< 48 || globals.bandejaciru_vAlfaCodigoMed.charCodeAt(ii) > 57){
				esnumero = false
			}
		}
	
		if (esnumero){
			if(largo>6){
				plugins.dialogs.showInfoDialog("Error en Codigo de Medicamento Ã³ Descartable","El CÃ³digo es mayor a 6 digitos.","Ok")
				if (event.getType() == JSEvent.ACTION) {
					elements.codigo.requestFocus()
				}
			}else{
				globals.bandejaciru_vCodigoMed = utils.stringToNumber(globals.bandejaciru_vAlfaCodigoMed.valueOf());
				if(bandejaciru_vcodigomed_to_tbc_articulos.getSize()>0){
					for(var i=1;i<=bandejaciru_vestado2259_to_tbc_his_lectora.getSize()&&!encontrado;i++){
						bandejaciru_vestado2259_to_tbc_his_lectora.setSelectedIndex(i)
						if(bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art==globals.bandejaciru_vCodigoMed){
							encontrado = true
							globals.bandejaciru_cantidad=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cant
						}
					}
					if(encontrado){
						elements.btn_anula.visible=true
					}
					elements.cantidad.requestFocus()
				}else{
					plugins.dialogs.showErrorDialog("Error de Ingreso","Código de Medicamento/Descartable Inexistente")
					elements.codigo.requestFocus()
				}
			}
		}
		else{
			globals.bandejaciru_vAlfaCodigoMed = globals.bandejaciru_vAlfaCodigoMed.toLocaleUpperCase()
			if(globals.bandejaciru_vAlfaCodigoMed.charAt(0)=='B'&&globals.bandejaciru_vAlfaCodigoMed.charCodeAt(1)>=48&&globals.bandejaciru_vAlfaCodigoMed.charCodeAt(1)<=57){
			 	globals.bandejaciru_vCodigoCombo=utils.stringToNumber(globals.bandejaciru_vAlfaCodigoMed.toString())
			 	var busqueda_ok =false
			 	var fs = databaseManager.getFoundSet("maestros","tbc_combo_med")
			 //plugins.dialogs.showInfoDialog("codigocombo",globals.vCodigoCombo)
			 	fs.find()
			 	fs['combnumero']=globals.bandejaciru_vCodigoCombo
			 	fs['combtipo']=2
			 	fs.search()
			 	if(fs.getSize()<1){
			 		globals.bandejaciru_vCodigoCombo=0
			 		var win = application.createWindow("c",JSWindow.MODAL_DIALOG)
			 		win.title = "Búsqueda de Combos de Medicamento y Descartable";
			 		win.setSize(480,550)
			 		win.show(forms.bandejaciru_frm_busqueda_combo)
			 		if(globals.bandejaciru_vCodigoCombo!=0){
			 			fs.find()
			 			fs['combnumero']=globals.bandejaciru_vCodigoCombo
			 			fs['combtipo']=2
			 			fs.search()
			 			busqueda_ok=true
			 		}
			 		win.hide()
			 	}else{
			 		busqueda_ok=true
			 	}
			 	if(busqueda_ok){
			 		var thePressedButton = plugins.dialogs.showQuestionDialog('Confirma Grabación de Combo', '¿Confirma la grabación del Combo '+ fs['combnombre']+' ?','Si','No');
			 			if (thePressedButton == "Si"){ 
			 				fs.setSelectedIndex(1)
							
							//GrabaComboConCobol()
							
			 				if(hislectora_vacio>0){
							
			 					var query = "select hlec_art from tbc_his_lectora where hlec_histclin = ? and hlec_estado = ? and hlec_sector = ? and hlec_imed = ?";
			 					var args = new Array();
			 					args[0]=globals.bandejaciru_hiscli;
			 					args[1]=globals.bandejaciru_vEstado;
			 					args[2]=globals.bandejaciru_vSector;
			 					args[3]=globals.bandejaciru_vImed;
						    				
			 					var dataset = new Array();
			 					dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 200);
			 					long_his_lectora=dataset.getMaxRowIndex()
							//plugins.dialogs.showInfoDialog("getMaxRowIndex()",long_his_lectora.toString())
							}
							for(var k=1;k<=60&&fs['combtart_'+k]>0;k++){
							
							}
							elements.bean_243.visible=true
							elements.bean_243.minimum=1
							elements.bean_243.maximum=k
							elements.bean_243.stringPainted=true
							elements.bean_243.value = 0
							application.updateUI()
							for(var j=1;j<=60&&fs['combtart_'+j]>0;j++){
								globals.bandejaciru_vCodigoArt_tmp=fs['combtart_'+j]
								if(bandejaciru_vcodigoart_tmp_to_tbc_articulos.art_medpide>0){
									codigo_aux=bandejaciru_vcodigoart_tmp_to_tbc_articulos.art_medpide
								}else{
									codigo_aux=fs['combtart_'+j]
								}
								if(long_his_lectora<1){
									encontrado=false
								}else{
									encontrado=false
									for(var h=0;h<=dataset.getMaxRowIndex()&&!encontrado;h++){
										if(codigo_aux==dataset.getValue(h,1)){
											encontrado=true
										}
									}
								}
							
							if(hislectora_vacio>0){
								for(h=1;h<=bandejaciru_vestado2259_to_tbc_his_lectora.getSize()&&!encontrado;h++){
									bandejaciru_vestado2259_to_tbc_his_lectora.setSelectedIndex(h)
									globals.bandejaciru_vCodigoArt_tmp=fs['combtart_'+j]
									if(bandejaciru_vcodigoart_tmp_to_tbc_articulos.art_medpide>0){
										if(bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art==bandejaciru_vcodigoart_tmp_to_tbc_articulos.art_medpide){
											encontrado = true
										}
									}else{
										if(bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art==fs['combtart_'+j]){
											encontrado = true
										}
									}
									
								}
							}else{
								encontrado = false
							}
							
							//acacacacaca va el asterisco y la barra
								if(encontrado){
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cant=fs['combtcan_'+j]
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_combo=1
									databaseManager.saveData(bandejaciru_vestado2259_to_tbc_his_lectora.getRecord(1))
									bandejaciru_vestado2259_to_tbc_his_lectora.loadAllRecords()
									//databaseManager.refreshRecordFromDatabase(vestado2259_to_tbc_his_lectora,-1)
								}else{
									bandejaciru_vestado2259_to_tbc_his_lectora.newRecord()
								//plugins.dialogs.showInfoDialog("Inicializacion Prev",'1')
									globals.InicializarDatosDeRelacion(bandejaciru_vestado2259_to_tbc_his_lectora,"asistencial","tbc_his_lectora")
								//plugins.dialogs.showInfoDialog("Inicializacion Post",'2')
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_histclin=globals.vHiscli
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_estado=globals.bandejaciru_vEstado
									globals.bandejaciru_vCodigoArt_tmp=fs['combtart_'+j]
									if(bandejaciru_vcodigoart_tmp_to_tbc_articulos.art_medpide>0){
										bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art=bandejaciru_vcodigoart_tmp_to_tbc_articulos.art_medpide
									}else{
										bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art=fs['combtart_'+j]
									}
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cant=fs['combtcan_'+j]
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_imed=globals.bandejaciru_vImed
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_protocolo=globals.bandejaciru_protocolo
									mil++
									if (mil < 10){
										mil_ed="0"+mil
									}else{
										mil_ed=mil
									}
						
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_fec=anio_actual+''+mes_actual_ed+''+dia_actual_ed
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_hora=hora_ed+''+min_ed+''+seg_ed+''+mil_ed
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_feclec=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_fec
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_horlec=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_hora
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_combo=1
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_fecing=bandejaciru_vs3_to_tbc_cirugint.cirifechacarga
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_horing=utils.stringToNumber(bandejaciru_vs3_to_tbc_cirugint.cirihoracarga.toString().substr(0,4))
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_legmed=bandejaciru_vs3_to_tbc_cirugint.cirilegciru
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_tiplegmed=bandejaciru_vs3_to_tbc_cirugint.ciriieciru
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cama=bandejaciru_vhiscli2259_unico_to_tbc_admision_scroll.adm_cama
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_habita=bandejaciru_vhiscli2259_unico_to_tbc_admision_scroll.adm_habita
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_tiplegoper=globals.bandejaciru_TipOperador
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_legoper=globals.bandejaciru_LegOperador
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_tiphistclin=globals.bandejaciru_TipHisclin
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_sector=globals.bandejaciru_vSector
								
									
									databaseManager.saveData(bandejaciru_vestado2259_to_tbc_his_lectora.getRecord(1))
									elements.bean_243.value = j
									application.updateUI()
								//vestado2259_to_tbc_his_lectora.loadAllRecords()
								//plugins.dialogs.showInfoDialog("RefreshRecord Prev",'1')
								//databaseManager.refreshRecordFromDatabase(vestado2259_to_tbc_his_lectora,-1)
								//plugins.dialogs.showInfoDialog("RefreshRecord Post",'2')
								}
								encontrado = false
								}
			 			      
							}
					
							databaseManager.saveData()
							elements.bean_243.value = k
							bandejaciru_vestado2259_to_tbc_his_lectora.loadAllRecords()
							application.updateUI()
							elements.bean_243.visible=false		
							globals.bandejaciru_vAlfaCodigoMed=''
							globals.bandejaciru_vCodigoMed=0
							globals.bandejaciru_vCantidad=0
					//plugins.dialogs.showInfoDialog("RefreshRecord Prev",'1')
					//databaseManager.refreshRecordFromDatabase(vestado2259_to_tbc_his_lectora,-1)
					//plugins.dialogs.showInfoDialog("RefreshRecord Post",'2')
							elements.codigo.requestFocus()
						}
					}else{
						var win1 = application.createWindow("c",JSWindow.MODAL_DIALOG)
						win1.title = "Búsqueda de Medicamentos y Descartables";
						win1.setSize(565,257)
						win1.show(forms.bandejaciru_frm_busqueda_medicamentos)
					}

				}
	}else{
		plugins.dialogs.showInfoDialog("Atención","Debe seleccionar el tipo de Medicamento Cirugía ó Anestesia")
		elements.combo_Imed.enabled=true
		elements.combo_Imed.requestFocus()
	}
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"040F33CE-7362-42BB-90AA-485EFF2985D0"}
 * @AllowToRunInFind
 */
function onShow_IngresoMedicamentos_tab(firstShow, event) {
	/*
	elements.bean_243.visible=false
	elements.lbl_procesando.visible=false
	globals.vImed=0
	globals.Hiscli_edit=globals.vHiscli2259.toString()
	var largo = globals.Hiscli_edit.length
	globals.Hiscli_edit = globals.Hiscli_edit.substr(0, largo - 1) + '/' + globals.Hiscli_edit.substr(largo - 1, 1)
	
	var fs = databaseManager.getFoundSet("asistencial","tbc_cirugint")
	fs.clear()
	if(fs.find()){
	fs['cirihistcl']=globals.vHiscli2259
	fs['ciriprotocolo']=globals.vNroProtocolo2259
	fs['ciricodnome']=0
	fs['ciritiponome']=0
	fs['ciriestado']=0
	fs.search()
	if(fs.getSize()>0){
		fs.setSelectedIndex(1)
		if(fs['cirifechafinal']==0){
			elements.btn_cierre.visible=false
		}else{
				if(fs['ciriconsenti']=='S'&&fs['cirilegconsenti']!=0){
			elements.btn_cierre.visible=true
		}
			}
		if(fs['ciritipointerven']==2){
			//globals.vEstado2259=4
			globals.vEstado2259=3
			globals.vSector=34
		}else{
			//globals.vEstado2259=5
			globals.vEstado2259=1
			globals.vSector=66
		}
		if(fs['cirianestesia']==1){
			
			var thePressedButton = plugins.dialogs.showQuestionDialog('Seleccione una opción','Medicamentos de:', 'Cirugía', 'Anestesia');
			switch (thePressedButton){
				case 'Cirugía':globals.vImed=1;break;
				case 'Anestesia':globals.vImed=2;break;
				default:globals.vImed=0;break;
			}
						elements.combo_Imed.enabled=true
			plugins.dialogs.showInfoDialog("Atención","Debe seleccionar el tipo de Medicamento Cirugía ó Anestesia")
			elements.combo_Imed.requestFocus()
		}else{
			elements.combo_Imed.enabled=false
			globals.vImed=1
			elements.codigo.requestFocus()
		}
		globals.vAlfaCodigoMed=''
		globals.vCodigoMed=0
		globals.vCantidad2259=0
		elements.btn_anula.visible=false
	}else{
		globals.Desloc_Bandeja_Ciru()
		plugins.dialogs.showErrorDialog("ERROR", "No tiene cargado el PROTOCOLO")
		application.showForm("frm_menu_principal")
	}
}
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"13C58A65-FF74-42CF-BFF2-719283491E27"}
 * @AllowToRunInFind
 */
function onAction_btn_anula(event) {
	/*
	var fs = databaseManager.getFoundSet("asistencial","tbc_his_lectora")
	fs.find()
	fs['hlechiscli']=globals.vHiscli2259
	fs['hlecestado']=1
	fs.search()
	var encontrado = false
	if(fs.getSize()>0){
		for(var i=1;i<=fs.getSize()&&!encontrado;i++){
		    fs.setSelectedIndex(i)
			if(fs['hlecart']==globals.vCodigoMed){
				encontrado = true
				fs['hlecestado']=9
				databaseManager.saveData(fs.getRecord(1))
			}
		}
	}
	*/
	/*
	vestado2259_to_tbc_his_lectora.hlec_estado=9
	databaseManager.saveData(vestado2259_to_tbc_his_lectora.getRecord(1))
	vestado2259_to_tbc_his_lectora.loadAllRecords()
	//databaseManager.refreshRecordFromDatabase(vestado2259_to_tbc_his_lectora,-1)
	globals.vAlfaCodigoMed=''
	globals.vCodigoMed=0
	globals.vCantidad2259=0
	elements.btn_anula.visible=false
	
	elements.codigo.requestFocus()
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3F52CEF6-8150-4DF1-8778-7DC43D0AD019"}
 */
function onAction_volver(event) {
	/*
	globals.Desloc_Bandeja_Ciru()
	application.showForm("frm_menu_principal")
	//globals.vClose=true
	//application.exit()
	 
	 */
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE2509CA-CB93-48B7-80DA-B3FD63CD7453"}
 * @AllowToRunInFind
 */
function onAction_btn_cierre(event) {
	/*
	forms.frm_IngresoMedicamentos_tab.elements.btn_volver.visible=false
	forms.frm_IngresoMedicamentos_tab.elements.btn_cierre.visible=false
	application.updateUI()
	application.sleep(30)
	
	vProtocoloOk=true
	vDatosQueFaltan=''
	
	var fs = databaseManager.getFoundSet("asistencial","tbc_cirugint")
	
	fs.find()
	fs['cirihistcl']=globals.vHiscli
	fs['ciriestado']=0
	fs['ciritiponome']=0
	fs['ciricodnome']=0
	fs.search(true)
	if(fs.getSize()>0){
		fs.setSelectedIndex(1)
		if(fs['cirifechafinal']==0||fs['cirifechafinal']==null){
			vDatosQueFaltan+="Falta dar el Alta al Protocolo."+'\n'
			vProtocoloOk=false
		}
	}else{
		vDatosQueFaltan+="Falta Ingresar Protocolo de Cirugía."+'\n'
		vProtocoloOk=false
	}
	application.sleep(100)
	Controla_Codigos_Cirugia()
	application.sleep(100)
	Controla_Txt_1_2_3()
	application.sleep(100)
	Controla_Medicamentos_Cirugia()
	application.sleep(100)
	if(fs['cirianestesia']==1){
		Controla_Medicamentos_Anestesia()
		application.sleep(100)
		//Controlo_FichaAnestesica()
		//application.sleep(100)
	}
	
	if(vProtocoloOk!=true){
		globals.Desloc_Bandeja_Ciru()
		plugins.dialogs.showWarningDialog("Datos Faltantes",vDatosQueFaltan)
		application.showForm("frm_menu_principal")
	}else{
		try{
			Graba_Medic_cir()
		}catch(msg){
			forms.frm_consulta_protocolo.grabaLog(msg.message)
			forms.frm_consulta_protocolo.grabaLog("Error Graba_Medic_cir()")
		}finally{
			forms.frm_consulta_protocolo.grabaLog("Graba_Medic_cir()")
		}
		application.sleep(100)
		try{
			EjecutaRunCobol()
		}catch(msg){
			forms.frm_consulta_protocolo.grabaLog(msg.message)
			forms.frm_consulta_protocolo.grabaLog("EjecutaRunCobol()")
		}
		//vString='ok '
		application.sleep(100)
		//databaseManager.refreshRecordFromDatabase(vs_to_tbc_cirugint2,-1)
		globals.vHisclin=globals.vHiscli2259
		globals.vHiscli=globals.vHiscli2259
		globals.vNroProtocolo=globals.vNroProtocolo2259
		globals.Nprotocolo=globals.vNroProtocolo2259
		var $estado=0;
		if(vString!=null&&vString!=''){
			if(vString.search('mal')>0){
				$estado=1
			}
			
		}else{
			$estado=1
		}
		if ($estado>0||(vs_to_tbc_cirugint2.getSize()>0&&vs_to_tbc_cirugint2.ciriestado==0&&vs_to_tbc_cirugint2.ciriconsenti=='S')){
		
					vs_to_tbc_cirugint2.ciriestado=1
					try {
						
						databaseManager.saveData(vs_to_tbc_cirugint2.getRecord(1))
						
					}catch (msg){
						(plugins.dialogs.showInfoDialog("Error al grabar Cirugint",msg.toString(),"ok"))
						//	application.output(msg.rhinoException.getMessage())
					}
					var error1=''
					var error2=''
					var array = databaseManager.getFailedRecords(vs_to_tbc_cirugint2)
					for (var i = 0; i < array.length; i++) {
						var record = array[i];
						var jstable = databaseManager.getTable(record);
						var tableSQLName = jstable.getSQLName();
						error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
						error2='Error en grabación '+record.exception;
						if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					// exception thrown in pre-insert/update/delete event method
							var thrown = record.exception.getValue()
							plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
						}
					}
					if(error1!=''){
						plugins.dialogs.showErrorDialog("Error en grabacion de Cirugint",error1,"Ok")
						plugins.dialogs.showErrorDialog("Error en grabacion de Cirugint",error2,"Ok")
						//plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
					}
		}
		try{
			Actualiza_Anestesia()
		}catch(msg){
			forms.frm_consulta_protocolo.grabaLog(msg.message)
			forms.frm_consulta_protocolo.grabaLog("Actualiza_Anestesia()")
		}
		globals.Tipopac=0
		globals.vListado='Protocolo Quirúrgico'
		globals.vTipoListado=4
		globals.protocolo=globals.vNroProtocolo2259+"|"+fs['cirifechacarga']+"|"+fs['cirihoracarga']
		globals.vPacApeynom = vhisclin_to_tbc_admision.adm_apelnom
	    var fecha_nac = vhisclin_to_tbc_admision.adm_fecnac
	    globals.vEdad = globals.CalculoEdad(fecha_nac)+" "+globals.vTipoEdad
		try{
			forms.frm_consulta_protocolo.Imprime_Protocolo()
		}catch(msg){
			forms.frm_consulta_protocolo.grabaLog(msg.message)
			forms.frm_consulta_protocolo.grabaLog("Imprime_Protocolo()")
		}
		try{
			forms.frm_consulta_protocolo.Genera_Protocolo_en_Pdf()
		}catch(msg){
			forms.frm_consulta_protocolo.grabaLog(msg.message)
		}finally{
			forms.frm_consulta_protocolo.grabaLog("forms.frm_consulta_protocolo.Genera_Protocolo_en_Pdf()")
		}
		
		if(vnroprotocolo2259_to_tbc_anestesia.getSize()>0){
			vnroprotocolo2259_to_tbc_anestesia.setSelectedIndex(1)
			globals.Histcli_unico2259=vhiscli2259_unico_to_tbc_admision_scroll.adm_histclinuni
			globals.FechaCargaAnes2259=vnroprotocolo2259_to_tbc_anestesia.anes_feccarga
			globals.HoraCargaAnes2259=vnroprotocolo2259_to_tbc_anestesia.anes_horcarga
			
			plugins.dialogs.showInfoDialog("histcli_unico2259","nro: "+globals.Histcli_unico2259)
			plugins.dialogs.showInfoDialog("fecha carga2259","nro: "+globals.FechaCargaAnes2259)
			plugins.dialogs.showInfoDialog("hora carga2259","nro: "+globals.HoraCargaAnes2259)
			
			if(bandeja_vs_to_fichaaneste_cab.getSize()>0){
				crear_ds_grilla_fichaanestesica()
				forms.fichaaneste_impr_det_1.controller.setPageFormat(210,297,15,5,3,2,1,0);
				forms.fichaaneste_impr_det_1.controller.print(false,false); 
			}
		}
		
		
		globals.Desloc_Bandeja_Ciru()
		
		globals.vListado=''
		globals.vTipoListado=0
		globals.protocolo=''
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
		globals.vNroProtocolo2259=0
		globals.vNroProtocolo=0
		//elements.lbl_procesando.visible=false
		
		
		
		//globals.vClose=true
		//application.exit()
		//application.showForm(forms.LoginCirugia)
		globals.vClose=true
		var args = globals.vLegajo+';'+globals.vLega+';'+globals.vOperador+';'+globals.vTipoOperador+';'+"true";
		application.closeSolution('Menu','retorno_MenuCirugia',args)
	}
	
	//EjecutaRunCobol()
	 
	 */
}

/**
 * @properties={typeid:24,uuid:"A23AFAEE-8514-4243-B047-DFA15F3DEE3C"}
 */
function Controla_Codigos_Cirugia() {
	/*
	var query = "select * from tbc_cirugint_dtl where cirihistcl = ? and ciritiponome = 1 and ciriprotocolo = ? and ciricodnome > 0";
    var args = new Array();
    args[0]=globals.vHiscli;
    args[1]=globals.vNroProtocolo;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 10);
	//if(vs_to_tbc_cirugint_dtl.getSize()<1){
	if(dataset.getMaxRowIndex()<1){
		vProtocoloOk=false
		vDatosQueFaltan+="No grabo opción 2, códigos de cirugía"+'\n'
	}
	*/
}

/**
 * @properties={typeid:24,uuid:"472E77A4-9880-47CD-A894-E4626D1E7F0C"}
 * @AllowToRunInFind
 */
function Controla_Txt_1_2_3() {
	/*
	var z=0
	for(var i=1;i<=3&&vProtocoloOk;i++){
		
		var fs2 = databaseManager.getFoundSet("asistencial", "tbc_protoc_txt")
		
		fs2.find()
		fs2['protxt_protocolo'] = globals.vNroProtocolo
		fs2['protxt_grupo'] = i
		fs2['protxt_nro1'] = 1
		fs2['protxt_secuen'] = 1
		fs2.search(true)
		
		globals.grupo_texto=i
		if (vs1_to_tbl_protoc_txt.getSize() < 1) {
			vProtocoloOk=false
			z++
			if(z==1){
				vDatosQueFaltan="Datos faltantes: "+'\n'
			}
			switch (i){
				case 1:vDatosQueFaltan+="Falta Diagnóstico Pre-operatorio"+'\n'
				case 2:vDatosQueFaltan+="Falta Diagnóstico Post-operatorio"+'\n'
				case 3:vDatosQueFaltan+="Falta Operación Efectuada y Descripción"+'\n'
			}
		}
	}
	*/
}

/**
 * @properties={typeid:24,uuid:"BFD37903-B9BA-4977-BC25-E6E4D1B455EA"}
 */
function Controla_Medicamentos_Cirugia() {
	/*
	var query = "select * from tbc_his_lectora where hlec_histclin = ? and hlec_estado = ? and hlec_sector = ? and hlec_protocolo = ? and hlec_imed = 1";
    var args = new Array();
    args[0]=globals.vHiscli2259;
    args[1]=globals.vEstado2259;
    args[2]=globals.vSector;
    args[3]=globals.vNroProtocolo2259;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 10);
	//if(vs_to_tbc_cirugint_dtl.getSize()<1){
	if(dataset.getMaxRowIndex()<1){
		vProtocoloOk=false
		vDatosQueFaltan+="Falta ingresar medicamentos de la cirugía"+'\n'
	}	
	*/
}

/**
 * @properties={typeid:24,uuid:"74EA6531-7177-46E3-BEAC-8687B7D806D0"}
 */
function Controla_Medicamentos_Anestesia() {
	/*
	var query = "select * from tbc_his_lectora where hlec_histclin = ? and hlec_estado = ? and hlec_sector = ? and hlec_protocolo = ? and hlec_imed = 2";
    var args = new Array();
    args[0]=globals.vHiscli2259;
    args[1]=globals.vEstado2259;
    args[2]=globals.vSector;
    args[3]=globals.vNroProtocolo2259;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 10);
	//if(vs_to_tbc_cirugint_dtl.getSize()<1){
	if(dataset.getMaxRowIndex()<1){
		vProtocoloOk=false
		vDatosQueFaltan+="Falta ingresar medicamentos de la anestesia"+'\n'
	}
	*/
}

/**
 * @properties={typeid:24,uuid:"DBC8DBDC-C97D-451D-8EA5-E14D132E2E42"}
 * @AllowToRunInFind
 */
function EjecutaRunCobol() {
	/*
	var fs = databaseManager.getFoundSet("asistencial","tbc_cirugint")
	fs.find()
	fs['cirihistcl']=globals.vHiscli
	//fs['cirihistcl']=2128380
	fs['ciriestado']=0
	fs['ciritiponome']=0
	fs['ciricodnome']=0
	fs.search(true)
	//plugins.dialogs.showInfoDialog("Pasa find & Search",fs.getSize().toString())
	if(fs.getSize()>0){
		fs.setSelectedIndex(1)
		var pipo = fs['cirihistcl']
		var cerox=''
		switch (pipo.toString().length){
		case 7:cerox="000";break;
		case 8:cerox="00";break;
		case 9:cerox="0";break;
		case 10:cerox='';break;
		}
		var vClaveCiru= ""
		
		var vHoraCargaCiru=""
		vHoraCargaCiru=fs['cirihoracarga']
		if(vHoraCargaCiru.length<6){
			switch (vHoraCargaCiru.length){
				case 5:vHoraCargaCiru="0"+fs['cirihoracarga'];break;
				case 4:vHoraCargaCiru="00"+fs['cirihoracarga'];break;
				case 3:vHoraCargaCiru="000"+fs['cirihoracarga'];break;
				case 2:vHoraCargaCiru="0000"+fs['cirihoracarga'];break;
				case 1:vHoraCargaCiru="00000"+fs['cirihoracarga'];break;
			}
		}
		
		var vHoraCargaCiru=""
		if(fs['cirihoracarga']>99999){
			vHoraCargaCiru=fs['cirihoracarga']
		}else{
			if(fs['cirihoracarga']>9999){
				vHoraCargaCiru="0"+fs['cirihoracarga']
			}else{
				if(fs['cirihoracarga']>999){
					vHoraCargaCiru="00"+fs['cirihoracarga']
				}else{
					if(fs['cirihoracarga']>99){
						vHoraCargaCiru="000"+fs['cirihoracarga']
					}else{
						if(fs['cirihoracarga']>9){
							vHoraCargaCiru="0000"+fs['cirihoracarga']
						}else{
							vHoraCargaCiru="00000"+fs['cirihoracarga']
						}
					}
				}
			}
		}
		vClaveCiru+=cerox
		vClaveCiru+=fs['cirihistcl']
		vClaveCiru+=fs['cirifechacarga']
		vClaveCiru+=vHoraCargaCiru
		vClaveCiru+="00"
		vClaveCiru+="000000"
		//plugins.dialogs.showInfoDialog("vClaveCiru",vClaveCiru)
		//plugins.dialogs.showInfoDialog("PROTOCOLO",fs['ciriprotocolo'])
		
		 var url=application.getServerURL()
		 var largo = url.length
		 var puerto=url.substr(largo-5,4)
		 var servidor=0
		 switch (puerto){
				case '8080':servidor=3;break;
				case '9080':servidor=9;break;
		}
	plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
	var vServer = plugins.UserManager.Server();
	
	var hc="00021072202015011211025400000000"
	var fecha = 20141113
	var hora = 101702
	
	var protocolo = fs['ciriprotocolo']
	 var legajo = globals.vLega
	 var tipo_legajo = globals.vTipoOperador
	 var tipo = 0
	 if(globals.vSector==66){
		 tipo = 1
	 }else{
		 tipo = 3
	 }
	 //var vString = vServer.executeCommand('ssh -l svysc 10.200.0.90 -C "sh sh-pruebaservoy1"');
	vString = vServer.executeCommand("/app/servoy/scripts/shcob4000 "+servidor+" "+"1"+" "+vClaveCiru+" "+protocolo+" "+tipo+" "+legajo+" "+tipo_legajo);
	//plugins.dialogs.showInfoDialog("Prueba de shell",vString)
	//application.output(vString)
	
	}
	*/
}

/**
 * @properties={typeid:24,uuid:"ECD9E84E-D355-417B-9474-D93BB3AF10F6"}
 */
function Graba_Medic_cir() {
	/*
	globals.vTipoArticulo=1
	var query_cirugia = "select hlec_art, hlec_cant from tbc_his_lectora where hlec_histclin = ? and hlec_estado = ? and hlec_sector = ? and hlec_protocolo = ? and hlec_imed = 1";
    var args = new Array();
    args[0]=globals.vHiscli2259;
    args[1]=globals.vEstado2259;
    args[2]=globals.vSector;
    args[3]=globals.vNroProtocolo2259;
    var dataset_cirugia = new Array();
    dataset_cirugia = databaseManager.getDataSetByQuery("asistencial", query_cirugia, args, 99);
    if(dataset_cirugia.getMaxRowIndex()>0){
    	//elements.lbl_procesando.visible=true
    	elements.bean_243.visible=true
		elements.bean_243.minimum=1
		elements.bean_243.maximum=dataset_cirugia.getMaxRowIndex()
		elements.bean_243.stringPainted=true
		elements.bean_243.value = 0
		application.updateUI()
		vs_to_tbc_medic_cir.newRecord()
		globals.InicializarDatosDeRelacion(vs_to_tbc_medic_cir,"asistencial","tbc_medic_cir")
		for (var i=1;i<=dataset_cirugia.getMaxRowIndex();i++){
			vs_to_tbc_medic_cir['medcarti_'+i]=dataset_cirugia.getValue(i,1)
			vs_to_tbc_medic_cir['medccant_'+i]=dataset_cirugia.getValue(i,2)
			elements.bean_243.value = i
			application.updateUI()
		}
		vs_to_tbc_medic_cir.medcprotocolo=globals.vNroProtocolo2259
		vs_to_tbc_medic_cir.medctipo=globals.vTipoArticulo
		
		try{
			databaseManager.saveData(vs_to_tbc_medic_cir.getRecord(1))
		}catch (msg){
			(plugins.dialogs.showInfoDialog("Error al grabar MEDIC-CIR",msg.toString(),"ok"))
			forms.frm_consulta_protocolo.grabaLog(msg.message)
			forms.frm_consulta_protocolo.grabaLog("Error Graba_Medic_cir() Tipo 1")
		}
		var error1=''
		var error2=''
		var array = databaseManager.getFailedRecords(vs_to_tbc_medic_cir)
		for ( i = 0; i < array.length; i++) {
			var record = array[i];
			var jstable = databaseManager.getTable(record);
			var tableSQLName = jstable.getSQLName();
			error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
			error2='Error en grabación '+record.exception;
			if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
				var thrown = record.exception.getValue()
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown)
			}
		}
		if(error1!=''){
			plugins.dialogs.showErrorDialog("Error en grabacion de MEDIC-CIR",error1,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de MEDIC-CIR",error2,"Ok")
			//plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
		//}else{
			//databaseManager.refreshRecordFromDatabase(fs1,-1)
		}
	}
	globals.vTipoArticulo=2
	var query_anestesia = "select hlec_art, hlec_cant from tbc_his_lectora where hlec_histclin = ? and hlec_estado = ? and hlec_sector = ? and hlec_protocolo = ? and hlec_imed = 2";
    var dataset_anestesia = new Array();
    dataset_anestesia = databaseManager.getDataSetByQuery("asistencial", query_anestesia, args, 99);
	if(dataset_anestesia.getMaxRowIndex()>0){
		elements.bean_243.visible=true
		elements.bean_243.minimum=1
		elements.bean_243.maximum=dataset_cirugia.getMaxRowIndex()
		elements.bean_243.stringPainted=true
		elements.bean_243.value = 0
		application.updateUI()
		vs_to_tbc_medic_cir.newRecord()
		globals.InicializarDatosDeRelacion(vs_to_tbc_medic_cir,"asistencial","tbc_medic_cir")
		for (var j=1;j<=dataset_anestesia.getMaxRowIndex();j++){
			vs_to_tbc_medic_cir['medcarti_'+j]=dataset_anestesia.getValue(j,1)
			vs_to_tbc_medic_cir['medccant_'+j]=dataset_anestesia.getValue(j,2)
			elements.bean_243.value = j
			application.updateUI()
		}
		vs_to_tbc_medic_cir.medcprotocolo=globals.vNroProtocolo2259
		vs_to_tbc_medic_cir.medctipo=globals.vTipoArticulo
		try{
			databaseManager.saveData(vs_to_tbc_medic_cir.getRecord(1))
		}catch (msg){
			(plugins.dialogs.showInfoDialog("Error al grabar MEDIC-CIR",msg.toString(),"ok"))
			forms.frm_consulta_protocolo.grabaLog(msg.message)
			forms.frm_consulta_protocolo.grabaLog("Error Graba_Medic_cir() Tipo 2")
		}
		var error3=''
		var error4=''
		var array1 = databaseManager.getFailedRecords(vs_to_tbc_medic_cir)
		for ( ii = 0; ii < array1.length; ii++) {
			var record1 = array1[ii];
			var jstable1 = databaseManager.getTable(record1);
			var tableSQLName1 = jstable1.getSQLName();
			error3='Error de Grabación en Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
			error4='Error en grabación '+record1.exception;
			if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
				var thrown1 = record1.exception.getValue()
				plugins.dialogs.showErrorDialog("Error de grabación","Record validation failed: " + thrown1)
			}
		}
		if(error3!=''){
			plugins.dialogs.showErrorDialog("Error en grabacion de MEDIC-CIR",error3,"Ok")
			plugins.dialogs.showErrorDialog("Error en grabacion de MEDIC-CIR",error4,"Ok")
			//plugins.dialogs.showInfoDialog("Reintentar","Reintente grabar!!")
		//}else{
			//databaseManager.refreshRecordFromDatabase(fs1,-1)
		}
	}	
	elements.bean_243.visible=false
	
	application.updateUI()
	*/
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
 * @properties={typeid:24,uuid:"BD531F6D-78AA-42E3-9B06-B1AF01701565"}
 */
function onDataChange_vImed(oldValue, newValue, event) {
	elements.codigo.requestFocus()
	return true
}

/**
 * @properties={typeid:24,uuid:"B12183F7-D065-4C30-9EBC-56C7A56F157C"}
 * @AllowToRunInFind
 */
function Actualiza_Anestesia() {
	/*
	/////////////////////// Actualiza PARAM, campo prm_32 último Nro de Hoja de Anestesia ////////////////
	var done0 = plugins.rawSQL.executeSQL("parametros", "param", "begin; lock table param in row exclusive mode;")
	if (!done0) {
		var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok')
	}
	var done = plugins.rawSQL.executeSQL("parametros", "param", "select * from param where key_param = 1 for update;")
	if (!done) {
		var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
	}

	var vQuery = " SELECT prm_32 FROM param WHERE key_param = 1";
	var vDataset = databaseManager.getDataSetByQuery("parametros", vQuery, null, 1);
	
	//plugins.dialogs.showInfoDialog("contador",vDataset.getValue(1,1));
	
	vNroAnestesia=vDataset.getValue(1,1)+1;
	
	var done1 = plugins.rawSQL.executeSQL("parametros", "param", "update param set prm_32 = prm_32 + 1 where key_param = 1; commit;")
	if (!done1) {
		var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		plugins.dialogs.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
	}
	/////////////////////////// Actualiza campo anes_numero de tabla tbc_anestesia ///////////////////////
	var fs = databaseManager.getFoundSet("asistencial","tbc_anestesia")
	if(fs.find()){
		fs['anes_protocolo']=globals.vNroProtocolo2259
		fs.search()
	}
	if(fs.getSize()>0){
		elements.bean_243.visible=true
		elements.bean_243.minimum=1
		elements.bean_243.maximum=fs.getSize()
		elements.bean_243.stringPainted=true
		elements.bean_243.value = 0
		application.updateUI()
		for(var i=1;i<=fs.getSize();i++){
			fs.setSelectedIndex(i)
			fs['anes_numero']=vNroAnestesia
			fs['anes_estado']=2
			elements.bean_243.value = i
			application.updateUI()
			try{
				databaseManager.saveData(fs.getRecord(1))
			}catch (msg){
				(plugins.dialogs.showInfoDialog("Error al actualizar ANESTESIA",msg.toString(),"ok"))
			}
		}
		elements.bean_243.visible=false
		application.updateUI()
	}
	*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7B5E215C-5BB1-45E1-9396-30E2EF33279A"}
 */
function onAction_comboImed(event) {
	elements.codigo.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"4FAEFFE0-B547-436D-8845-E2EC314C3813"}
 */
function GrabaComboConCobol() {
	/*
	var pipo = globals.vHiscli2259
	var cerox=''
	switch (pipo.toString().length){
	case 7:cerox="000";break;
	case 8:cerox="00";break;
	case 9:cerox="0";break;
	case 10:cerox='';break;
	}
	var vHiscli= ""
	vHiscli+=cerox	
	vHiscli+=globals.vHiscli2259
	var tipo=0
	if(globals.vSector==66){
		 tipo = 1
	 }else{
		 tipo = 3
	 }
	 var url=application.getServerURL()
	 var largo = url.length
	 var puerto=url.substr(largo-5,4)
	 var servidor=0
	 switch (puerto){
			case '8080':servidor=3;break;
			case '9080':servidor=9;break;
	}
	plugins.UserManager.register( "Hypertelia", "q9SA5eCyb085cvATVO8s9onGe3iBzJyCTel8Y7J72BuG599wodOiU5OL26/pkKyv" );
	var vServer = plugins.UserManager.Server();
	vString = vServer.executeCommand("/app/servoy/scripts/shcob4002 "+servidor+" "+"1"+" "+vHiscli+","+globals.vCodigoCombo+","+globals.vNroProtocolo2259+","+globals.vSector+","+tipo+","+globals.vImed+","+globals.vTipoOperador+","+globals.vLega+","+vs3_to_tbc_cirugint.cirilegciru+","+vs3_to_tbc_cirugint.ciriieciru+","+vhiscli2259_unico_to_tbc_admision_scroll.adm_cama+","+vhiscli2259_unico_to_tbc_admision_scroll.adm_habita+","+vs3_to_tbc_cirugint.cirifechacarga+","+vs3_to_tbc_cirugint.cirihoracarga.toString().substr(0,4));
	//vString = vServer.executeCommand("/app/servoy/scripts/sh-pruebacobol3 "+vHiscli+" "+globals.vCodigoCombo+" "+globals.vNroProtocolo2259+" "+globals.vSector+" "+tipo+" "+globals.vImed+" "+globals.vTipoOperador+"|"+globals.vLega+" "+vs3_to_tbc_cirugint.cirilegciru+"|"+vs3_to_tbc_cirugint.ciriieciru+" "+vhiscli2259_unico_to_tbc_admision_scroll.adm_cama+"|"+vhiscli2259_unico_to_tbc_admision_scroll.adm_habita+" "+vs3_to_tbc_cirugint.cirifechacarga+"|"+vs3_to_tbc_cirugint.cirihoracarga.toString().substr(0,4));
	//plugins.dialogs.showInfoDialog("vString",vString)
	 * 
	 */
}

/**
 * @properties={typeid:24,uuid:"7935E023-FD36-4B97-B28A-1A3FAF002268"}
 */
function Controlo_FichaAnestesica() {
	/*
	//var retorno = false
	globals.vFeccarga=vnroprotocolo2259_to_tbc_anestesia.anes_feccarga
	globals.vHorcarga=vnroprotocolo2259_to_tbc_anestesia.anes_horcarga
	var sql = "select histcli, fecha_final from fichaaneste_cab where histcli_unico="+vhiscli2259_unico_to_tbc_admision_scroll.adm_histclinuni+" and tbc_anest_carga_fecha="+globals.vFeccarga+" and tbc_anest_carga_hora="+globals.vHorcarga
	var $dataset = databaseManager.getDataSetByQuery("desal",sql,null,-1)
	if($dataset.getMaxRowIndex()>0){
		if($dataset.getValue(1,2)==null){
				//retorno = true
				vProtocoloOk=false
				vDatosQueFaltan+="Falta finalizar Ficha Anestésica "+'\n'
		}
	}else{
		vProtocoloOk=false
		vDatosQueFaltan+="Falta cargar Ficha Anestésica "+'\n'
	}
	//return retorno
	 * 
	 */
}

/**
 * @properties={typeid:24,uuid:"3D9869F3-8634-4491-BA4F-41D719739DC2"}
 */
function crear_ds_grilla_fichaanestesica() {
	/*
	globals.Histcli_unico2259=vhiscli2259_unico_to_tbc_admision_scroll.adm_histclinuni
	var fichaanestesia_cab_id = bandeja_vs_to_fichaaneste_cab.fichaaneste_cab_id
	globals.fichaaneste_cab_id=fichaanestesia_cab_id
	//plugins.dialogs.showInfoDialog("crear_ds_grilla_fichaanestesica: fichaaneste_cab_id","nro: "+bandeja_vs_to_fichaaneste_cab.fichaaneste_cab_id)
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
					var $fec  = new Date(bandeja_vs_to_fichaaneste_cab.fecha_inicio.getFullYear(), bandeja_vs_to_fichaaneste_cab.fecha_inicio.getMonth(), bandeja_vs_to_fichaaneste_cab.fecha_inicio.getDate(), bandeja_vs_to_fichaaneste_cab.fecha_inicio.getHours(), bandeja_vs_to_fichaaneste_cab.fecha_inicio.getMinutes() + frm_ds.getValue(i,1), 0, 0)	
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
				var $fec  = new Date(bandeja_vs_to_fichaaneste_cab.fecha_inicio.getFullYear(), bandeja_vs_to_fichaaneste_cab.fecha_inicio.getMonth(), bandeja_vs_to_fichaaneste_cab.fecha_inicio.getDate(), bandeja_vs_to_fichaaneste_cab.fecha_inicio.getHours(), bandeja_vs_to_fichaaneste_cab.fecha_inicio.getMinutes() + frm_ds.getValue(i,1), 0, 0)	
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
	*/
}
