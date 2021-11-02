/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8DC754D8-645E-40EF-A23B-7F9044FE2C9B"}
 */
var f_presenta = ' ';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6424C08D-1CCE-40CC-8067-387B2AEA4C16"}
 */
var f_descrip = ' ';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"482A45AC-C373-477F-BA69-17CB1F06AA91"}
 */
var fNroInternacion = ' ';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C2DCE3E7-1736-45D9-8F2E-A2C783C854D7"}
 */
var fTipoPaciente = ' ';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"03F848CE-EA13-4F87-8A05-857F72E33DC8"}
 */
var f_erroresSeguridadQ = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A4E4B020-5929-4F89-9891-FF75554817AD"}
 */
var fSexo = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0DBFECCC-0A38-4F6D-B41E-A1DE8730542D"}
 */
var fEdad = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"519859A0-7394-4973-9485-AB38923D7512"}
 */
var fObraSocial = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0CA639E1-F76A-467F-9CE3-CF7FAACCC4D4"}
 */
var fPacienteApeynom = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"09D61BBD-711A-4A03-94BF-13BEFE1DD511",variableType:4}
 */
var vNroAnestesia = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"70ED9462-561B-4F2B-BF4E-B14057CBB44F"}
 */
var vString = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"06A80E77-DA64-4C1F-9406-007CFAF1B95D"}
 */
var vDatosQueFaltan = '';

/**
 * @properties={typeid:35,uuid:"5837E813-810C-4AB3-968D-D19F5FC0D4C5",variableType:-4}
 */
var vProtocoloOk = false;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"82AC98EA-BBF6-4E08-8A42-B4BFF6C59543"}
 * @AllowToRunInFind
 */
function onAction_Cantidad(event) {
	var tipoarticulo=''
	switch (bandejaciru_vcodigomed_to_tbc_articulos.art_tipart){
		case 1:tipoarticulo='Medicamento';
		case 2:tipoarticulo='Material Descartable';
		default:tipoarticulo='Articulo';
	}
	
	var fecha=0;
	var hora =0;
	var encontrado = false
	if(globals.bandejaciru_vCodigoMed!=0&&globals.bandejaciru_vCantidad!=0){
		var thePressedButton = plugins.dialogs.showQuestionDialog('Confirma Grabación del '+ tipoarticulo, '¿Confirma la grabación del '+ globals.bandejaciru_vCodigoMed + ' - ' + bandejaciru_vcodigomed_to_tbc_articulos.art_descrip +' ?','Si','No');
	 	if (thePressedButton == "Si"){ 
	 		if(bandejaciru_vestado2259_to_tbc_his_lectora.getSize()<1){
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
			
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_histclin=globals.vHiscli
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_estado=globals.bandejaciru_vEstado
				if(bandejaciru_vcodigomed_to_tbc_articulos.art_medpide>0){
					bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art=bandejaciru_vcodigomed_to_tbc_articulos.art_medpide
				}else{
					bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art=globals.bandejaciru_vCodigoMed
				}
				fecha=utils.stringToNumber(globals.CapturaFechaSistema().toString())
				hora=utils.stringToNumber(globals.CapturaHoraSistema("HHMMSSDD").toString())
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cant=globals.bandejaciru_vCantidad
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_imed=globals.bandejaciru_vImed
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_protocolo=globals.bandejaciru_protocolo
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_fec=fecha
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_hora=hora
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_feclec=fecha
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_horlec=hora
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_fecing=globals.bandejaciru_fechaingreso
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_horing=globals.bandejaciru_horaingreso
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_legmed=globals.bandejaciru_Cirujano
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_tiplegmed=globals.bandejaciru_TipoCirujano
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_tiplegoper=globals.bandejaciru_TipOperador
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_legoper=globals.bandejaciru_LegOperador
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_tiphistclin=globals.bandejaciru_TipHisclin
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_sector=globals.bandejaciru_vSector
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_artpedfar=globals.bandejaciru_vCodigoMed
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cama=globals.bandejaciru_cama
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_canpedfar=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_combo=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_conindic=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_habita=globals.bandejaciru_habita
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_fecped=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_horped=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_imagen=" "
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_justificado=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_key_imapedi=" "
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_key_pedfar="00000000"
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_medori=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_nomencla=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_nropedunico=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_nrorep=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_postanes=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_sdopedfar=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_reposicion=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_urgen=0
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_filler="0"
				
				
				try{
				databaseManager.saveData(bandejaciru_vestado2259_to_tbc_his_lectora.getRecord(1))
				}catch(msg){
					application.output(msg.message)
				}
				
				elements.bean_243.value = 0
				application.updateUI()
				bandejaciru_vestado2259_to_tbc_his_lectora.loadAllRecords()
				elements.bean_243.visible=false
				//databaseManager.refreshRecordFromDatabase(vestado2259_to_tbc_his_lectora,1)
				var array1 = databaseManager.getFailedRecords(bandejaciru_vestado2259_to_tbc_his_lectora)
				for (var jj = 0; jj < array1.length; jj++) {
					var record1 = array1[jj];
					var jstable1 = databaseManager.getTable(record1);
					var tableSQLName1 = jstable1.getSQLName();
					plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
					plugins.dialogs.showErrorDialog("Error en grabación de vestado2259_to_tbc_his_lectora",record1.exception.getMessage());
					application.output(record1.exception);
					if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					// exception thrown in pre-insert/update/delete event method
						var thrown1 = record1.exception.getErrorCode()
						application.output("Record validation failed: " + thrown1)
					}
				}
			}
			
		
		 	globals.bandejaciru_vAlfaCodigoMed=''
		 	globals.bandejaciru_vCodigoMed=0
		 	globals.bandejaciru_vCantidad=0
		 	elements.btn_anula.visible=false
		 	f_descrip=''
			f_presenta=''
		 	Refresca_His_Lectora()
		 	application.updateUI()
			
			
			var $cierreOk=true
			if(!controloHisLectoraMedicamentos(1)){
				$cierreOk=false
			}
			if(bandejaciru_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1&&!controloHisLectoraMedicamentos(2)){
				$cierreOk=false
			}
			if(!verPrestacionesCirugia()){
				$cierreOk=false
			}
			if(!controloTextosCirugia(1)){
				$cierreOk=false
			}
			if(!controloTextosCirugia(3)){
				$cierreOk=false
			}
			if(!verCajasQuirurgicas()){
				$cierreOk=false
			}
			if(!verSeguridadQuirurgica()){
				$cierreOk=false
			}
			
			if(bandejaciru_vhiscli_to_tbc_guardia.guar_fechaalta==0){
				$cierreOk=false
			}
			if(bandejaciru_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1){
				if(controloFichaAnestesica()!=true){
					$cierreOk=false
				}
			}
			elements.btn_cierre.visible=$cierreOk
			f_descrip=''
			f_presenta=''
			application.updateUI()
		 	elements.codigo.requestFocus()
	 	
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1809F66F-4FBB-4216-9807-33C7082882FA"}
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
			if(largo>4){
				plugins.dialogs.showInfoDialog("Error en Codigo de Medicamento o Descartable","El CÃ³digo es mayor a 6 digitos.","Ok")
				if (event.getType() == JSEvent.ACTION) {
					elements.codigo.requestFocus()
				}
			}else{
				globals.bandejaciru_vCodigoMed = utils.stringToNumber(globals.bandejaciru_vAlfaCodigoMed.valueOf());
				if(bandejaciru_vcodigomed_to_tbc_articulos.getSize()>0){
					f_descrip=bandejaciru_vcodigomed_to_tbc_articulos.art_descrip
					f_presenta=bandejaciru_vcodigomed_to_tbc_articulos.art_presenta
					for(var i=1;i<=bandejaciru_vestado2259_to_tbc_his_lectora.getSize()&&!encontrado;i++){
						bandejaciru_vestado2259_to_tbc_his_lectora.setSelectedIndex(i)
						if(bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art==globals.bandejaciru_vCodigoMed){
							encontrado = true
							globals.bandejaciru_vCantidad=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cant
						}
					}
					if(encontrado){
						elements.btn_anula.visible=true
					}
					elements.btn_limpiarenglon.visible=true
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
			 					args[0]=globals.vHiscli;
			 					args[1]=globals.bandejaciru_estado;
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
							//application.updateUI()
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
							
								if(encontrado){
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cant=fs['combtcan_'+j]
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_combo=1
									try{
										databaseManager.saveData(bandejaciru_vestado2259_to_tbc_his_lectora.getRecord(1))
									}catch (msg){
										application.output(msg.message)
									}
									
									bandejaciru_vestado2259_to_tbc_his_lectora.loadAllRecords()
									//databaseManager.refreshRecordFromDatabase(vestado2259_to_tbc_his_lectora,-1)
								}else{
									bandejaciru_vestado2259_to_tbc_his_lectora.newRecord()
									globals.InicializarDatosDeRelacion(bandejaciru_vestado2259_to_tbc_his_lectora,"asistencial","tbc_his_lectora")
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_histclin=globals.vHiscli
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_estado=globals.bandejaciru_vEstado
									globals.bandejaciru_vCodigoArt_tmp=fs['combtart_'+j]
									if(bandejaciru_vcodigoart_tmp_to_tbc_articulos.art_medpide>0){
										bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art=bandejaciru_vcodigoart_tmp_to_tbc_articulos.art_medpide
										bandejaciru_vestado2259_to_tbc_his_lectora.hlec_artpedfar=bandejaciru_vcodigoart_tmp_to_tbc_articulos.art_medpide
									}else{
										bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art=fs['combtart_'+j]
										bandejaciru_vestado2259_to_tbc_his_lectora.hlec_artpedfar=fs['combtart_'+j]
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
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_feclec=anio_actual+''+mes_actual_ed+''+dia_actual_ed
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_horlec=hora_ed+''+min_ed+''+seg_ed+''+mil_ed
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_combo=1
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_fecing=globals.bandejaciru_fechaingreso
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_horing=globals.bandejaciru_horaingreso
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_legmed=globals.bandejaciru_Cirujano
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_tiplegmed=globals.bandejaciru_TipoCirujano
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_tiplegoper=globals.bandejaciru_TipOperador
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_legoper=globals.bandejaciru_LegOperador
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_tiphistclin=globals.bandejaciru_TipHisclin
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_sector=globals.bandejaciru_vSector
									//bandejaciru_vestado2259_to_tbc_his_lectora.hlec_artpedfar=globals.bandejaciru_vCodigoMed
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cama=globals.bandejaciru_cama
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_canpedfar=0
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_conindic=0
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_habita=globals.bandejaciru_habita
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_fecped=0
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_horped=0
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_imagen=" "
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_justificado=0
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_key_imapedi=" "
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_key_pedfar="00000000"
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_medori=0
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_nomencla=0
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_nropedunico=0
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_nrorep=0
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_postanes=0
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_sdopedfar=0
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_reposicion=0
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_urgen=0
									bandejaciru_vestado2259_to_tbc_his_lectora.hlec_filler="0"
								
									try{
										databaseManager.saveData(bandejaciru_vestado2259_to_tbc_his_lectora.getRecord(1))
									}catch(msg){
										application.output(msg.message)
									}
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
			 			    /*
							try{
								databaseManager.saveData()
							}catch(msg){
								application.output(msg.message)
							}
							*/
							var array1 = databaseManager.getFailedRecords(bandejaciru_vestado2259_to_tbc_his_lectora)
							for (var jj = 0; jj < array1.length; jj++) {
								var record1 = array1[jj];
								var jstable1 = databaseManager.getTable(record1);
								var tableSQLName1 = jstable1.getSQLName();
								plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
								plugins.dialogs.showErrorDialog("Error en grabación de vestado2259_to_tbc_his_lectora",record1.exception.getMessage());
								application.output(record1.exception);
								if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
								// exception thrown in pre-insert/update/delete event method
									var thrown1 = record1.exception.getErrorCode()
									application.output("Record validation failed: " + thrown1)
								}
							}
							elements.bean_243.value = k
							bandejaciru_vestado2259_to_tbc_his_lectora.loadAllRecords()
							//databaseManager.refreshRecordFromDatabase(bandejaciru_vestado2259_to_tbc_his_lectora,-1)
							Refresca_His_Lectora()
							elements.bean_243.visible=false		
							globals.bandejaciru_vAlfaCodigoMed=''
							globals.bandejaciru_vCodigoMed=0
							globals.bandejaciru_vCantidad=0
							application.updateUI()
							var $cierreOk=true
							if(!controloHisLectoraMedicamentos(1)){
								$cierreOk=false
							}
							if(bandejaciru_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1&&!controloHisLectoraMedicamentos(2)){
								$cierreOk=false
							}
							if(!verPrestacionesCirugia()){
								$cierreOk=false
							}
							if(!controloTextosCirugia(1)){
								$cierreOk=false
							}
							if(!controloTextosCirugia(3)){
								$cierreOk=false
							}
							if(!verCajasQuirurgicas()){
								$cierreOk=false
							}
							if(!verSeguridadQuirurgica()){
								$cierreOk=false
							}
							
							if(bandejaciru_vhiscli_to_tbc_guardia.guar_fechaalta==0){
								$cierreOk=false
							}
							if(bandejaciru_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1){
								if(controloFichaAnestesica()!=true){
									$cierreOk=false
								}
							}
							elements.btn_cierre.visible=$cierreOk
							application.updateUI()
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
						if(globals.bandejaciru_vCodigoMed!=0){
							f_descrip=bandejaciru_vcodigomed_to_tbc_articulos.art_descrip
							f_presenta=bandejaciru_vcodigomed_to_tbc_articulos.art_presenta
							elements.btn_limpiarenglon.visible=true
							application.updateUI()
							elements.cantidad.requestFocus()
						}
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
 * @properties={typeid:24,uuid:"4FBCF909-446F-4EFC-A116-4FA93F7437FF"}
 * @AllowToRunInFind
 */
function onShow_IngresoMedicamentos_tab(firstShow, event) {
	elements.btn_volver.visible=true
	globals.vClose=false
	
	if((bandejaciru_vhiscli_to_tbc_ciruguar.getSize()>0&&globals.bandejaciru_TipHisclin==1)||(bandejaciru_vs3_to_tbc_cirugint.getSize()>0&&globals.bandejaciru_TipHisclin==0)){
		elements.tabless.tabIndex=1
		globals.Hiscli_edit=globals.vHiscli.toString()
		elements.bean_243.visible=false
		globals.bandejaciru_vImed=0
		globals.bandejaciru_vAlfaCodigoMed=''
		globals.bandejaciru_vCodigoMed=0
		globals.bandejaciru_vCantidad=0
		elements.btn_anula.visible=false
		elements.btn_limpiarenglon.visible=false
		
		elements.btn_cierre.visible=false
		
		if((bandejaciru_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1&&globals.bandejaciru_TipHisclin==1)||(bandejaciru_vs3_to_tbc_cirugint.cirianestesia==1&&globals.bandejaciru_TipHisclin==0)){
			elements.combo_Imed.enabled=true
			plugins.dialogs.showInfoDialog("Atención","Debe seleccionar el tipo de Medicamento Cirugía ó Anestesia")
			elements.combo_Imed.requestFocus()
		}else{
			elements.combo_Imed.enabled=false
			globals.bandejaciru_vImed=1
			elements.codigo.requestFocus()
		}
				
		Refresca_His_Lectora()
		
		var $cierreOk=true
		if(globals.bandejaciru_TipHisclin==1){
			if(!controloHisLectoraMedicamentos(1)){
				$cierreOk=false
			}
			if(bandejaciru_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1&&!controloHisLectoraMedicamentos(2)){
				$cierreOk=false
			}
			if(!verPrestacionesCirugia()){
				$cierreOk=false
			}
			if(!controloTextosCirugia(1)){
				$cierreOk=false
			}
			if(!controloTextosCirugia(3)){
				$cierreOk=false
			}
			if(!verCajasQuirurgicas()){
				$cierreOk=false
			}
			if(!verSeguridadQuirurgica()){
				$cierreOk=false
			}
			
			if(bandejaciru_vhiscli_to_tbc_guardia.guar_fechaalta==0){
				$cierreOk=false
			}
			if(bandejaciru_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1){
				if(controloFichaAnestesica()!=true){
					$cierreOk=false
				}
			}
		}
		if(globals.bandejaciru_TipHisclin==0){
			if(!Controla_Codigos_Cirugia()){
				$cierreOk=false
			}
			if(!Controla_Txt_1_2_3()){
				$cierreOk=false
			}
			if(!Controla_Medicamentos_Cirugia()){
				$cierreOk=false
			}
			if(!Controla_Medicamentos_Anestesia()){
				$cierreOk=false
			}
			if(!Controlo_FichaAnestesica()){
				$cierreOk=false
			}
		}
		elements.btn_cierre.visible=$cierreOk
		application.updateUI()
	}
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AC57B616-B750-4835-A23D-63449B82508C"}
 * @AllowToRunInFind
 */
function onAction_btn_anula(event) {
	
	bandejaciru_vestado2259_to_tbc_his_lectora.hlec_estado=9
	try{
		databaseManager.saveData(bandejaciru_vestado2259_to_tbc_his_lectora.getRecord(1))
	}catch (msg){
		application.output(msg)
	}
	var array1 = databaseManager.getFailedRecords(bandejaciru_vestado2259_to_tbc_his_lectora)
	for (var jj = 0; jj < array1.length; jj++) {
		var record1 = array1[jj];
		var jstable1 = databaseManager.getTable(record1);
		var tableSQLName1 = jstable1.getSQLName();
		plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
		plugins.dialogs.showErrorDialog("Error en grabación de bandejaciru_vestado2259_to_tbc_his_lectora",record1.exception.getMessage());
		application.output(record1.exception);
		if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
			var thrown1 = record1.exception.getErrorCode()
			application.output("Record validation failed: " + thrown1)
		}
	}
	bandejaciru_vestado2259_to_tbc_his_lectora.loadAllRecords()
	//databaseManager.refreshRecordFromDatabase(vestado2259_to_tbc_his_lectora,-1)
	globals.bandejaciru_vAlfaCodigoMed=''
	globals.bandejaciru_vCodigoMed=0
	globals.bandejaciru_vCantidad=0
	elements.btn_anula.visible=false
	f_descrip=''
	f_presenta=''
 	Refresca_His_Lectora()
	elements.codigo.requestFocus()
	application.updateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4B4502C2-EEBA-4DD0-A598-2CE463510665"}
 */
function onAction_volver(event) {
	globals.Desloc_Bandeja_Ciru()
	globals.vClose=true
	application.showForm("protambu_frm_menu_principal")
	
	
	//globals.vClose=true
	//application.exit()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"213D97F8-1B95-4B24-9BED-2C584F5598A5"}
 * @AllowToRunInFind
 */
function onAction_btn_cierre(event) {
	elements.btn_volver.visible=false
	elements.btn_cierre.visible=false
	application.updateUI()
	//application.sleep(30)
	
	vProtocoloOk=true
	vDatosQueFaltan=''
	
	var itemsPendientes='';
	if(globals.bandejaciru_TipHisclin==1){
		if(!controloHisLectoraMedicamentos(1)){
			itemsPendientes+='Falta ingresar Medicamentos de Cirugía '+'\n'
		}
		if(bandejaciru_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1&&!controloHisLectoraMedicamentos(2)){
			itemsPendientes+='Falta ingresar Medicamentos de Anestesia '+'\n'
		}
		if(!verPrestacionesCirugia()){
			itemsPendientes+='No ingreso códigos de Cirugía '+'\n'
		}
		if(!controloTextosCirugia(1)){
			itemsPendientes+='Falta cargar descripción Protocolo '+'\n'
		}
		if(!controloTextosCirugia(3)){
			itemsPendientes+='Falta cargar descripción Monitoreo '+'\n'
		}
		if(!verCajasQuirurgicas()){
			itemsPendientes+='No tiene Cajas quirúrgicas cargadas '+'\n'
		}
		if(!verSeguridadQuirurgica()){
			itemsPendientes+=f_erroresSeguridadQ
		}
		if(bandejaciru_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1){
			if(controloFichaAnestesica()!=true){
				itemsPendientes+='Falta cargar ó finalizar Ficha Anestésica '+'\n'
			}
		}
	}
	if(globals.bandejaciru_TipHisclin==0){
		if(!Controla_Codigos_Cirugia()){
			itemsPendientes+='No ingreso códigos de Cirugía '+'\n'
		}
		if(!Controla_Txt_1_2_3()){
			itemsPendientes+='Falta cargar descripción Protocolo '+'\n'
		}
		if(!Controla_Medicamentos_Cirugia()){
			itemsPendientes+='Falta ingresar Medicamentos de Cirugía '+'\n'
		}
		if(!Controla_Medicamentos_Anestesia()){
			itemsPendientes+='Falta ingresar Medicamentos de Anestesia '+'\n'
		}
		if(!Controlo_FichaAnestesica()){
			itemsPendientes+='Falta cargar ó finalizar Ficha Anestésica '+'\n'
		}
	}
	if(itemsPendientes!=''){
		itemsPendientes+='No se puede dar Cerrar el Protocolo.'
		globals.DIALOGS.showWarningDialog("Items sin cargar",itemsPendientes,"Ok")
		elements.btn_volver.visible=true
		elements.btn_cierre.visible=true
		return
	}
	
	
	try{
		grabo_Reposicion()
	}catch(msg){
		application.output(msg.message)
	}
	
	elements.tabless.tabIndex=3
	application.updateUI()
	
	
	try{
		globals.Desloc_Bandeja_Ciru()
	}catch(msg){
		application.output(msg.message)
	}
	
	
					
	elements.tabless.tabIndex=1
	application.updateUI()
	
	
	globals.vLegajo=0
	globals.vClave=0
	globals.vOperador=''
	globals.vPassOperador=''
	globals.vHiscli1=0
	globals.vHiscli=0
	globals.vHisclin=0
	globals.vNroProtocolo=0
	globals.vClose=true
	application.showForm("bandejaciru_tab_pacientes")
		
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
 * @properties={typeid:24,uuid:"EE860AE1-4529-4BF5-9D4B-8A06807177B9"}
 */
function onDataChange_vImed(oldValue, newValue, event) {
	Refresca_His_Lectora()
	
	var $cierreOk=true
	if(!controloHisLectoraMedicamentos(1)){
		$cierreOk=false
	}
	if(bandejaciru_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1&&!controloHisLectoraMedicamentos(2)){
		$cierreOk=false
	}
	if(!verPrestacionesCirugia()){
		$cierreOk=false
	}
	if(!controloTextosCirugia(1)){
		$cierreOk=false
	}
	if(!controloTextosCirugia(3)){
		$cierreOk=false
	}
	if(!verCajasQuirurgicas()){
		$cierreOk=false
	}
	if(!verSeguridadQuirurgica()){
		$cierreOk=false
	}
	
	if(bandejaciru_vhiscli_to_tbc_guardia.guar_fechaalta==0){
		$cierreOk=false
	}
	if(bandejaciru_vhiscli_to_tbc_ciruguar.cirgusoanestesia==1){
		if(controloFichaAnestesica()!=true){
			$cierreOk=false
		}
	}
	
	elements.btn_cierre.visible=$cierreOk
	application.updateUI()
	elements.codigo.requestFocus()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B0C463B-E364-446E-A21B-47614C6CD14A"}
 */
function onAction_comboImed(event) {
	elements.codigo.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"DFD6D557-61C3-4492-BB6A-9F7CDAF40431"}
 */
function Refresca_His_Lectora() {
	var $sql="select HLEC.Hlec_Art col1, ARTI.art_descrip col2, ARTI.art_presenta col3, HLEC.Hlec_Cant col4 from tbc_HIS_LECTORA HLEC "
    + " left join maestros.tbc_articulos ARTI on ARTI.art_codigo=HLEC.Hlec_Art " 
    + " where HLEC.Hlec_Estado="+globals.bandejaciru_vEstado
	+ " and HLEC.Hlec_HistClin="+globals.vHiscli
	+ " and HLEC.Hlec_Imed="+globals.bandejaciru_vImed
	+ " and HLEC.Hlec_HorIng="+globals.bandejaciru_horaingreso
	+ " and HLEC.Hlec_FecIng="+globals.bandejaciru_fechaingreso
	

var ds = databaseManager.getDataSetByQuery("asistencial",$sql,null,-1)

var $tipos = [JSColumn.NUMBER, JSColumn.TEXT, JSColumn.TEXT, JSColumn.NUMBER]
var $frm = solutionModel.getForm('bandejaciru_frm_his_lectora')
$frm.dataSource = ds.createDataSource('Ds_Hlec', $tipos)
forms.bandejaciru_frm_his_lectora.controller.recreateUI()
elements.tabless.tabIndex=2
application.updateUI()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} tipo
 *
 * @properties={typeid:24,uuid:"8F91F45D-5299-4C0C-92D6-28E42536845A"}
 */
function controloHisLectoraMedicamentos(tipo){
	var retorno = false
	var sql = "select * from tbc_HIS_LECTORA where Hlec_HistClin="+globals.vHiscli+" and Hlec_ArtPedfar <> 0 and Hlec_Art <> 9999 and (hlec_estado=0 or Hlec_Estado=1 or Hlec_Estado=3) and hlec_imed="+tipo
	var $dataset = databaseManager.getDataSetByQuery("asistencial",sql,null,-1)
	if($dataset.getMaxRowIndex()>0){
		retorno = true
	}
	return retorno
}

/**
 * @properties={typeid:24,uuid:"BC7A5A4D-DD3B-4D8C-9F76-5D0FE7E87D8C"}
 */
function verPrestacionesCirugia(){
	var retorno = false
	var sql = "select * from tbc_prest_guar where PregHistClinica="+globals.vHiscli+" and PregFechaIngreso="+globals.bandejaciru_fechaingreso+" and PregHoraIngreso="+globals.bandejaciru_horaingreso+" and (PregTipoPrest=1 or PregTipoPrest=3 or PregTipoPrest=7 or PregTipoPrest=8 or PregTipoPrest=9)"
	var $dataset = databaseManager.getDataSetByQuery("asistencial",sql,null,-1)
	if($dataset.getMaxRowIndex()>0){
		retorno = true
	}
	return retorno
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} grupo
 *
 * @properties={typeid:24,uuid:"FFA41F9B-6B7E-4831-9883-438560DB9E17"}
 */
function controloTextosCirugia(grupo){
	var retorno = false;
	if(grupo==1){
		if(bandejaciru_vhiscli_to_tbc_ciruguar.cirgmarcadescrip==1){
			globals.bandejaciru_vItemTexto=grupo
			if(bandejaciru_vs_to_tbl_proamb_t.texto!=null){
				if(bandejaciru_vs_to_tbl_proamb_t.texto.length>0){
					retorno=true
				}
			}
		}
	}else{
		if(bandejaciru_vhiscli_to_tbc_ciruguar.cirgmarcamonito==1){
			globals.bandejaciru_vItemTexto=grupo
			if(bandejaciru_vs_to_tbl_proamb_t.texto!=null){
				if(bandejaciru_vs_to_tbl_proamb_t.texto.length>0){
					retorno=true
				}
			}
		}
	}
	return retorno;
}

/**
 * @properties={typeid:24,uuid:"12647877-AF44-46CA-BDEC-D9249CBC443F"}
 */
function verCajasQuirurgicas(){
	var retorno = false;
	globals.bandejaciru_horaingreso_cajas=globals.bandejaciru_horaingreso+''+'00'
	if(bandejaciru_vs_to_tbc_cajcirugia.getSize()>0){
		retorno=true
	}
	return retorno;
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"DC39AF3F-560C-42F9-BA98-E408E7F996F8"}
 */
function verSeguridadQuirurgica(){
	var retorno = true;
	var query = "select * from tbc_seguqui_new where segtipohc = 1 and seghistclinica = ? and segfechacarga = ? and seghoracarga = ?";
    var args = new Array();
    args[0]=globals.vHiscli;
    args[1]=globals.bandejaciru_fechaingreso;
    args[2]=globals.bandejaciru_horaingreso;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 1);
    /*
	var fs = databaseManager.getFoundSet("asistencial","tbc_seguqui_new")
	fs.find()
	fs['segtipohc']=1
	fs['seghistclinica']=globals.vHiscli
	fs['segfechacarga']=globals.protambu1400_fechaingreso
	fs['seghoracarga']=globals.protambu1400_hora_ingreso
	fs.search(true)
	*/
	var tieneSeguquiAntes=true
	var tieneSeguquiAIncision=true
	var tieneSeguqui=true
	//if(vhiscli_to_tbc_seguqui_new.getSize()>0){
	//if(fs.getSize()>0){
	if(dataset.getMaxRowIndex()>0){
		if(dataset.getValue(1,14)==0||dataset.getValue(1,15)==0||dataset.getValue(1,16)==0||dataset.getValue(1,17)==0||dataset.getValue(1,18)==0||dataset.getValue(1,19)==0||dataset.getValue(1,20)==0||dataset.getValue(1,10)==0||dataset.getValue(1,21)==0){
		//if(fs['segcirculident']==0||fs['segcirculbanio']==0||fs['segcirculmate']==0||fs['segcirculhiscli']==0||fs['segcirculestu']==0||fs['segcirculprote']==0||fs['segcirculconsen']==0||fs['segadmindiag']==0||fs['seglegacirculini']==0){
			tieneSeguquiAntes=false
		}
		if(dataset.getValue(1,23)==0||dataset.getValue(1,24)==0||dataset.getValue(1,25)==0||dataset.getValue(1,26)==0||dataset.getValue(1,28)==0||dataset.getValue(1,29)==0||dataset.getValue(1,30)==0||dataset.getValue(1,31)==0||dataset.getValue(1,62)==0||dataset.getValue(1,63)==0||dataset.getValue(1,64)==0){
		//if(fs['seganestident']==0||fs['seganestpulso']==0||fs['seganestseguri']==0||fs['seganestviaaerea']==0||fs['seganestacceso']==0||fs['seganestsangre']==0||fs['seglegaanestini']==0||fs['seganestcomorb']==0){
			tieneSeguquiAntes=false
		}
		if(dataset.getValue(1,33)==0||dataset.getValue(1,34)==0||dataset.getValue(1,35)==0||dataset.getValue(1,36)==0||dataset.getValue(1,37)==0){
		//if(fs['segciruident']==0||fs['segciruantibiot']==0||fs['segcirubisturi']==0||fs['segciruincidentes']==0||fs['seglegaciruini']==0){
			tieneSeguquiAntes=false
		}
		if(dataset.getValue(1,39)==0||dataset.getValue(1,42)==0||dataset.getValue(1,43)==0||dataset.getValue(1,44)==0||dataset.getValue(1,40)==0||dataset.getValue(1,45)==0){
		//if(fs['seganestrepasaini']==0||fs['seginstrurepasaini']==0||fs['seginstrugasasini']==0||fs['seginstrupinzasini']==0||fs['seglegaanestrepi']==0||fs['seglegainstruini']==0){
			tieneSeguquiAntes=false
		}
		if(dataset.getValue(1,47)==0||dataset.getValue(1,48)==0||dataset.getValue(1,49)==0){
		//if(fs['segciruproced']==0||fs['segciruindica']==0||fs['seglegacirufin']==0){
			tieneSeguqui=false
		}
		if(dataset.getValue(1,51)==0||dataset.getValue(1,54)==0||dataset.getValue(1,55)==0||dataset.getValue(1,52)==0||dataset.getValue(1,56)==0){
		//if(fs['seganestplan']==0||fs['seginstrugasasfin']==0||fs['seginstrupinzasfin']==0||fs['seglegaanestfin']==0||fs['seglegainstrufin']==0){
			tieneSeguqui=false
		}
		if(dataset.getValue(1,58)==0||dataset.getValue(1,60)==0||dataset.getValue(1,65)==0||dataset.getValue(1,66)==0||dataset.getValue(1,67)==0||dataset.getValue(1,68)==0){
		//if(fs['segcirculmuestras']==0||fs['seglegacirculfin']==0||fs['segcirculproinstru']==0||fs['segcirculnormot']==0||fs['segcirculparteciru']==0||fs['segcirculparteanes']==0){
			tieneSeguqui=false
		}
		if(dataset.getValue(1,69)==0||dataset.getValue(1,70)==0||dataset.getValue(1,71)==0||dataset.getValue(1,72)==0||dataset.getValue(1,73)==0||dataset.getValue(1,74)==0||dataset.getValue(1,75)==0){
		//if(fs['segcirculequipres']==0||fs['segcirculequifunc']==0||fs['segcirculidsipr']==0||fs['segcirculdecubi']==0||fs['segcirculimprev']==0||fs['segcirculanesproblema']==0||fs['seglegacirculcut']==0){
			tieneSeguquiAIncision=false
		}
	}else{
		tieneSeguquiAIncision=false
		tieneSeguqui=false
		tieneSeguquiAntes=false
	}
	if(!tieneSeguqui){
		retorno=false
		f_erroresSeguridadQ+="Falta llenar Seguridad Quirúrgica al final de la Cirugía"+'\n'
	}
	if(!tieneSeguquiAIncision){
		retorno=false
		f_erroresSeguridadQ+="Falta llenar Seguridad Quirúrgica antes de La Incisión Cutánea"+'\n'
	}
	if(!tieneSeguquiAntes){
		retorno=false
		f_erroresSeguridadQ+="Falta llenar Seguridad Quirúrgica antes de la Cirugía"+'\n'
	}
	return retorno;
}

/**
 * @properties={typeid:24,uuid:"3C37D882-C61E-4E62-9C7C-85D3CC1C9460"}
 */
function grabo_Prestguar(){
	elements.bean_243.visible=true
	elements.bean_243.minimum=1
	elements.bean_243.stringPainted=true
	elements.bean_243.value = 0
	var largo_his_lectora = 0
	var largo_prest_guar = 0
	for(var j=1;j<=2;j++){
		globals.bandejaciru_vImed=j
		largo_his_lectora = bandejaciru_vestado2259_to_tbc_his_lectora.getSize()
		elements.bean_243.maximum=largo_his_lectora
		if(largo_his_lectora> 0){
			for(var i = 1; i <= largo_his_lectora;i++){
				bandejaciru_vestado2259_to_tbc_his_lectora.setSelectedIndex(i)
				globals.bandejaciru_secuencia=1
				globals.vCodNome=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_artpedfar
				globals.vTipoNome=99
				largo_prest_guar=bandejaciru_vhiscli_to_tbc_prest_guar.getSize()
				if(largo_prest_guar>0){
					bandejaciru_vhiscli_to_tbc_prest_guar.setSelectedIndex(largo_prest_guar)
					globals.bandejaciru_secuencia=bandejaciru_vhiscli_to_tbc_prest_guar.pregsecuencia
					globals.bandejaciru_secuencia++
				}
				bandejaciru_vhiscli_to_tbc_prest_guar.newRecord()
				globals.InicializarDatosDeRelacion(bandejaciru_vhiscli_to_tbc_prest_guar,"asistencial","tbc_prest_guar")
				bandejaciru_vhiscli_to_tbc_prest_guar.preghistclinica=globals.vHiscli
				bandejaciru_vhiscli_to_tbc_prest_guar.pregfechaingreso=globals.bandejaciru_fechaingreso
				bandejaciru_vhiscli_to_tbc_prest_guar.preghoraingreso=globals.bandejaciru_horaingreso
				bandejaciru_vhiscli_to_tbc_prest_guar.pregtiponome=99
				bandejaciru_vhiscli_to_tbc_prest_guar.pregcodnome=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_artpedfar
				bandejaciru_vhiscli_to_tbc_prest_guar.pregsecuencia=globals.bandejaciru_secuencia
				bandejaciru_vhiscli_to_tbc_prest_guar.pregtipoprest=98
				bandejaciru_vhiscli_to_tbc_prest_guar.pregtipoestu2='04'
				bandejaciru_vhiscli_to_tbc_prest_guar.pregservicio2='00'	
				bandejaciru_vhiscli_to_tbc_prest_guar.pregcantidad=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cant
				bandejaciru_vhiscli_to_tbc_prest_guar.pregpedido='000000'
				bandejaciru_vhiscli_to_tbc_prest_guar.pregpedido2='000000'
				bandejaciru_vhiscli_to_tbc_prest_guar.pregnumefc='000000'	
				bandejaciru_vhiscli_to_tbc_prest_guar.preghorapedido=globals.CapturaHoraSistema("HHMM")
				try{
					databaseManager.saveData(bandejaciru_vhiscli_to_tbc_prest_guar)
				}catch(msg){
					application.output(msg.message)
				}
				elements.bean_243.value = i
				application.updateUI()
				var array1 = databaseManager.getFailedRecords(bandejaciru_vhiscli_to_tbc_prest_guar)
				for (var jj = 0; jj < array1.length; jj++) {
					var record1 = array1[jj];
					var jstable1 = databaseManager.getTable(record1);
					var tableSQLName1 = jstable1.getSQLName();
					plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
					plugins.dialogs.showErrorDialog("Error en grabación de bandejaciru_vhiscli_to_tbc_prest_guar",record1.exception.getMessage());
					application.output(record1.exception);
					if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					// exception thrown in pre-insert/update/delete event method
						var thrown1 = record1.exception.getErrorCode()
						application.output("Record validation failed: " + thrown1)
					}
				}
			}
			elements.bean_243.value = largo_his_lectora
			application.updateUI()
			elements.bean_243.visible=false	
		}
	}
}

/**
 * @properties={typeid:24,uuid:"2D7DC464-6CBA-493A-AD14-2D73693BCE1D"}
 */
function fin_Protocolo_Ambulatorio(){
	if(bandejaciru_vhiscli_to_tbc_ciruguar.getSize()>0){
		if(bandejaciru_vhiscli_to_tbc_guardia.getSize()>0){
			bandejaciru_vhiscli_to_tbc_guardia.guar_estado=4
			bandejaciru_vhiscli_to_tbc_guardia.guar_estado1=4
			bandejaciru_vhiscli_to_tbc_guardia.guar_estado3=4
			try{
				databaseManager.saveData(bandejaciru_vhiscli_to_tbc_guardia)
			}catch(msg){
				application.output(msg.message)
			}
			var array1 = databaseManager.getFailedRecords(bandejaciru_vhiscli_to_tbc_guardia)
			for (var jj = 0; jj < array1.length; jj++) {
				var record1 = array1[jj];
				var jstable1 = databaseManager.getTable(record1);
				var tableSQLName1 = jstable1.getSQLName();
				plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
				plugins.dialogs.showErrorDialog("Error en grabación de bandejaciru_vhiscli_to_tbc_guardia",record1.exception.getMessage());
				application.output(record1.exception);
				if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
				// exception thrown in pre-insert/update/delete event method
					var thrown1 = record1.exception.getErrorCode()
					application.output("Record validation failed: " + thrown1)
				}
			}
			if(bandejaciru_vhiscli_to_tbc_ciruguar.cirgnroquirofa==8){
				grabo_Pracquiro()
				genero_Txt_Visual()
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"E76F88D4-D4BF-4E6E-B8FA-6DCF3BB4EAFD"}
 */
function grabo_Pracquiro(){
	globals.bandejaciru_nropedunico = 0
	var done0 = plugins.rawSQL.executeSQL("parametros", "param2", "begin; lock table param2 in row exclusive mode;")
	if (!done0) {
		var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		globals.DIALOGS.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok')
	}
	var done = plugins.rawSQL.executeSQL("parametros", "param2", "select * from param2 where key_param2 = 1 for update;")
	if (!done) {
		var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		globals.DIALOGS.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
	}
	var vQuery = " SELECT * FROM param2 WHERE key_param2 = 1";
	var vDataset = databaseManager.getDataSetByQuery("parametros", vQuery, null, 1);
	
	var nombre_campo='prm2_54';
	var numero_campo=54;
	globals.bandejaciru_nropedunico=vDataset.getValue(1,numero_campo)+1;
	var done1 = plugins.rawSQL.executeSQL("parametros", "param2", "update param2 set " + nombre_campo + " = " + nombre_campo +" + 1 where key_param2 = 1; commit;")
	if (!done1) {
		var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		globals.DIALOGS.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
	}
	
	var fs = databaseManager.getFoundSet("asistencial","tbc_pracquiro")
	fs.newRecord()
	fs['pracquirohistclinica']=globals.vHiscli
	fs['pracquirofechacarga']=globals.CapturaFechaSistema()
	fs['pracquirohoracarga']=globals.CapturaHoraSistema("HHMMSSDD")
	fs['pracquiroresp']=0
	fs['pracquirormed']=0
	fs['pracquirorfech']=0
	fs['pracquirorhora']=0
	fs['pracquiroghistclinica']=globals.vHiscli
	fs['pracquirogfechaingreso']=globals.bandejaciru_fechaingreso
	fs['pracquiroghoraingreso']=globals.bandejaciru_horaingreso
	fs['pracquirohhiscli']=0
	fs['pracquirohfecha']=0
	fs['pracquirohhora']=0
	fs['pracquiroservicio']=5
	fs['pracquiroestado']=1
	fs['pracquiroprotocolo']=globals.bandejaciru_protocolo
	fs['pracquironropedunico']=globals.bandejaciru_nropedunico
	try{
		databaseManager.saveData(fs)
	}catch(msg){
		application.output(msg.message)
	}
	var array1 = databaseManager.getFailedRecords(fs)
	for (var jj = 0; jj < array1.length; jj++) {
		var record1 = array1[jj];
		var jstable1 = databaseManager.getTable(record1);
		var tableSQLName1 = jstable1.getSQLName();
		plugins.dialogs.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
		plugins.dialogs.showErrorDialog("Error en grabación de pracquiro",record1.exception.getMessage());
		application.output(record1.exception);
		if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
		// exception thrown in pre-insert/update/delete event method
			var thrown1 = record1.exception.getErrorCode()
			application.output("Record validation failed: " + thrown1)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"7E0BB5C2-76AB-4058-B44E-4F65A2CFA0EF"}
 */
function genero_Txt_Visual(){
	
	var pedido=globals.bandejaciru_nropedunico;
	var hclin=globals.vHiscli;
	var fecha=globals.bandejaciru_fechaingreso;
	var hora8=globals.bandejaciru_horaingreso;
	var hora4=globals.bandejaciru_horaingreso;
	globals.GenerarTXTInterfaseVisualMedica(4, 5, pedido, hclin, fecha, hora8, hora4)
	
}

/**
 * @properties={typeid:24,uuid:"DF6A5A9E-F5CB-4937-9ECD-6239F34FDD54"}
 */
function grabo_Reposicion(){
	elements.bean_243.visible=true
	elements.bean_243.minimum=1
	elements.bean_243.stringPainted=true
	elements.bean_243.value = 0
	globals.bandejaciru_numero_rep=0;
	var done0 = plugins.rawSQL.executeSQL("desal", "tbl_parametros", "begin; lock table tbl_parametros in row exclusive mode;")
	if (!done0) {
		var msg0 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		globals.DIALOGS.showErrorDialog('Error', 'SQL exception: ' + msg0, 'Ok')
	}
	var done = plugins.rawSQL.executeSQL("desal", "tbl_parametros", "select * from tbl_parametros where paramid = 19 for update;")
	if (!done) {
		var msg = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		globals.DIALOGS.showErrorDialog('Error', 'SQL exception: ' + msg, 'Ok')
	}

	var vQuery = " SELECT contador_entero FROM tbl_parametros WHERE paramid = 19";
	var vDataset = databaseManager.getDataSetByQuery("desal", vQuery, null, 1);
	
	//plugins.dialogs.showInfoDialog("contador",vDataset.getValue(1,1));
	
	globals.bandejaciru_numero_rep=vDataset.getValue(1,1)+1;
	
	var done1 = plugins.rawSQL.executeSQL("desal", "tbl_parametros", "update tbl_parametros set contador_entero = contador_entero + 1 where paramid = 19; commit;")
	if (!done1) {
		var msg1 = plugins.rawSQL.getException().getMessage(); //see exception node for more info about the exception obj
		globals.DIALOGS.showErrorDialog('Error', 'SQL exception: ' + msg1, 'Ok')
	}
	globals.bandejaciru_fecha_rep=globals.CapturaFechaSistema();
	globals.bandejaciru_artsol_rep=0;
	for(var j=1;j<=2;j++){
		globals.bandejaciru_vImed=j
		var largo_his_lectora = 0
		largo_his_lectora = bandejaciru_vestado2259_to_tbc_his_lectora.getSize()
		if(largo_his_lectora> 0){
			elements.bean_243.maximum=largo_his_lectora
			for(var i = 1; i <= largo_his_lectora;i++){
				bandejaciru_vestado2259_to_tbc_his_lectora.setSelectedIndex(i)
				globals.bandejaciru_artsol_rep=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art
				if(bandejaciru_univoco_to_tbc_reposicion.getSize()<1){
					bandejaciru_univoco_to_tbc_reposicion.newRecord()
					globals.InicializarDatosDeRelacion(bandejaciru_univoco_to_tbc_reposicion,"asistencial","tbc_reposicion")
					var largo_numero = globals.bandejaciru_numero_rep.toString().length
					globals.bandejaciru_numero_rep=utils.stringToNumber(globals.bandejaciru_numero_rep.toString().substr(largo_numero-6,6))
					bandejaciru_univoco_to_tbc_reposicion.reptiprep=1
					bandejaciru_univoco_to_tbc_reposicion.reptiprep3=1
					bandejaciru_univoco_to_tbc_reposicion.repnumero=globals.bandejaciru_numero_rep
					bandejaciru_univoco_to_tbc_reposicion.repnumero3=globals.bandejaciru_numero_rep
					globals.bandejaciru_artsol_rep=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art
					bandejaciru_univoco_to_tbc_reposicion.repartsol=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art
					bandejaciru_univoco_to_tbc_reposicion.repartsol3=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art
					bandejaciru_univoco_to_tbc_reposicion.repfecha=globals.bandejaciru_fecha_rep
					bandejaciru_univoco_to_tbc_reposicion.repfecha3=globals.bandejaciru_fecha_rep
					bandejaciru_univoco_to_tbc_reposicion.repsecsol=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_sector
					bandejaciru_univoco_to_tbc_reposicion.repsecsol3=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_sector
					bandejaciru_univoco_to_tbc_reposicion.repsecpro=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_sector
					bandejaciru_univoco_to_tbc_reposicion.replegsol=globals.vLega
					bandejaciru_univoco_to_tbc_reposicion.repcansol=bandejaciru_vestado2259_to_tbc_his_lectora.hlec_cant
					bandejaciru_univoco_to_tbc_reposicion.reptiphis=1
					bandejaciru_univoco_to_tbc_reposicion.rephiscli=globals.vHiscli
					
					try{
						databaseManager.saveData(bandejaciru_univoco_to_tbc_reposicion)
					}catch(msg){
						application.output(msg.message)
					}
					elements.bean_243.value = i
					application.updateUI()
					var array1 = databaseManager.getFailedRecords(bandejaciru_univoco_to_tbc_reposicion)
					for (var jj = 0; jj < array1.length; jj++) {
						var record1 = array1[jj];
						var jstable1 = databaseManager.getTable(record1);
						var tableSQLName1 = jstable1.getSQLName();
						globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
						globals.DIALOGS.showErrorDialog("Error en grabación de bandejaciru_univoco_to_tbc_reposicion",record1.exception.getMessage());
						globals.DIALOGS.showErrorDialog("Error en grabación de bandejaciru_univoco_to_tbc_reposicion",bandejaciru_vestado2259_to_tbc_his_lectora.hlec_art.toString());
						//application.output(record1.exception);
						if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
						// exception thrown in pre-insert/update/delete event method
							var thrown1 = record1.exception.getErrorCode()
							application.output("Record validation failed: " + thrown1)
						}
					}
				}
				if(bandejaciru_vestado2259_to_tbc_his_lectora.hlec_estado==1){
					bandejaciru_vestado2259_to_tbc_his_lectora.hlec_estado=5
				}else{
					if(bandejaciru_vestado2259_to_tbc_his_lectora.hlec_estado==3){
						bandejaciru_vestado2259_to_tbc_his_lectora.hlec_estado=4
					}
				}
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_protocolo=globals.bandejaciru_protocolo
				bandejaciru_vestado2259_to_tbc_his_lectora.hlec_nrorep=globals.bandejaciru_numero_rep
				try{
					databaseManager.saveData(bandejaciru_vestado2259_to_tbc_his_lectora)
				}catch(msg){
					application.output(msg.message)
				}
				
				array1 = databaseManager.getFailedRecords(bandejaciru_vestado2259_to_tbc_his_lectora)
				for (jj = 0; jj < array1.length; jj++) {
					record1 = array1[jj];
					jstable1 = databaseManager.getTable(record1);
					tableSQLName1 = jstable1.getSQLName();
					globals.DIALOGS.showErrorDialog("Error de Grabación",'Tabla:' + tableSQLName1 + ' en server:' + jstable1.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!')
					globals.DIALOGS.showErrorDialog("Error en grabación de bandejaciru_vestado2259_to_tbc_his_lectora",record1.exception.getMessage());
					//application.output(record1.exception);
					if (record1.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
					// exception thrown in pre-insert/update/delete event method
						thrown1 = record1.exception.getErrorCode()
						application.output("Record validation failed: " + thrown1)
					}
				}
			}
			elements.bean_243.value = largo_his_lectora
			application.updateUI()
			elements.bean_243.visible=false	
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
 * @properties={typeid:24,uuid:"DAAF9165-C34A-4BCF-932E-C0FFA1F815F3"}
 */
function onHide_bandejaciru_frm_IngresoMedicamentos_tab(event) {
	
	return globals.vClose
}

/**
 * @properties={typeid:24,uuid:"B2F96623-9C15-46F3-A56D-D2011C0EB404"}
 */
function busco_guardia_IOQ(){
	var retorno = true
	if(bandejaciru_vhiscli_to_tbc_hist_cab.getSize()>0){
		if(bandejaciru_vhiscli_to_tbc_hist_cab.histcab_subestado==11){
			if(bandejaciru_vhiscli_to_tbc_hist_cab.histcab_intobsamd!=0&&bandejaciru_vhiscli_to_tbc_hist_cab.histcab_intobsamd!=''&&bandejaciru_vhiscli_to_tbc_hist_cab.histcab_intobsamd!=null){
				globals.bandejaciru_fechaingreso_aux=bandejaciru_vhiscli_to_tbc_hist_cab.histcab_intobsamd
				globals.bandejaciru_horaingreso_aux=bandejaciru_vhiscli_to_tbc_hist_cab.histcab_intobshor			
				if(bandejaciru_vhiscli_aux_to_tbc_guardia.guar_estado<4){
					globals.DIALOGS.showErrorDialog("Paciente ya ingresado o sin alta en guardia anterior","El Paciente ya tiene un ingreso en Internación"+'\n'+"Obs.Post-Quirurgica el:"+globals.bandejaciru_fechaingreso_aux.toString().substr(6,2)+"/"+globals.bandejaciru_fechaingreso_aux.toString().substr(4,2)+"/"+globals.bandejaciru_fechaingreso_aux.toString().substr(0,4)+" a las "+globals.bandejaciru_horaingreso_aux.toString().substr(0,2)+":"+globals.bandejaciru_horaingreso_aux.toString().substr(2,2)+"Hs."+'\n'+"Se Cancela el ingreso a Recuperación Post-Quir.")       
					retorno = false
				}
			}
		}
	}
	return retorno
}

/**
 * @properties={typeid:24,uuid:"869810B9-C894-4728-BCDE-02ECCC6B19CD"}
 */
function controloFichaAnestesica() {
	var retorno = false
	var sql = "select histcli, fecha_final from fichaaneste_cab where histcli_unico="+globals.vHiscli+" and tbc_anest_carga_fecha="+globals.bandejaciru_fechaingreso+" and tbc_anest_carga_hora="+globals.bandejaciru_horaingreso
	var $dataset = databaseManager.getDataSetByQuery("desal",sql,null,-1)
	if($dataset.getMaxRowIndex()>0){
		if($dataset.getValue(1,2)!=null){
				retorno = true
		}
	}
	return retorno
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D830665A-5A75-476E-B04A-99CF01827AED"}
 */
function onAction_btn_limpia(event) {
	globals.bandejaciru_vAlfaCodigoMed=''
 	globals.bandejaciru_vCodigoMed=0
 	globals.bandejaciru_vCantidad=0
 	elements.btn_anula.visible=false
 	f_descrip=''
	f_presenta=''
	elements.btn_limpiarenglon.visible=false
	elements.codigo.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"8138A748-A2D9-4EE5-8EAE-45DFCF513BE7"}
 */
function Controla_Codigos_Cirugia() {
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
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"38F564F1-ECDD-45C5-BD46-D0D5F5D76D78"}
 */
function Controla_Txt_1_2_3() {
	var z=0
	for(var i=1;i<=3&&vProtocoloOk;i++){
		globals.bandejaciru_grupo_texto=i
		if (bandejaciru_vs_to_tbl_protoc_txt.getSize() < 1) {
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
}

/**
 * @properties={typeid:24,uuid:"FB88199A-004E-4AA6-AC1E-F2BFB35305BA"}
 */
function Controla_Medicamentos_Cirugia() {
	var query = "select * from tbc_his_lectora where hlec_histclin = ? and hlec_estado = ? and hlec_sector = ? and hlec_protocolo = ? and hlec_imed = 1";
    var args = new Array();
    args[0]=globals.bandejaciru_hiscli;
    args[1]=globals.bandejaciru_vEstado;
    args[2]=globals.bandejaciru_vSector;
    args[3]=globals.bandejaciru_protocolo;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 10);
	//if(vs_to_tbc_cirugint_dtl.getSize()<1){
	if(dataset.getMaxRowIndex()<1){
		vProtocoloOk=false
		vDatosQueFaltan+="Falta ingresar medicamentos de la cirugía"+'\n'
	}	
}

/**
 * @properties={typeid:24,uuid:"5B417C94-9196-4A4A-9B2E-B55939DFB83B"}
 */
function Controla_Medicamentos_Anestesia() {
	var query = "select * from tbc_his_lectora where hlec_histclin = ? and hlec_estado = ? and hlec_sector = ? and hlec_protocolo = ? and hlec_imed = 2";
    var args = new Array();
    args[0]=globals.bandejaciru_hiscli;
    args[1]=globals.bandejaciru_vEstado;
    args[2]=globals.bandejaciru_vSector;
    args[3]=globals.bandejaciru_protocolo;
    var dataset = new Array();
    dataset = databaseManager.getDataSetByQuery("asistencial", query, args, 10);
	//if(vs_to_tbc_cirugint_dtl.getSize()<1){
	if(dataset.getMaxRowIndex()<1){
		vProtocoloOk=false
		vDatosQueFaltan+="Falta ingresar medicamentos de la anestesia"+'\n'
	}
}

/**
 * @properties={typeid:24,uuid:"9CD99CD5-92CC-4F10-B3B3-6C3042DB970B"}
 */
function Controlo_FichaAnestesica() {
	//var retorno = false
	globals.vFeccarga=bandejaciru_protocolo_to_tbc_anestesia.anes_feccarga
	globals.vHorcarga=bandejaciru_protocolo_to_tbc_anestesia.anes_horcarga
	if(globals.vFeccarga!=null&&globals.vHorcarga!=null){
		var sql = "select histcli, fecha_final from fichaaneste_cab where histcli_unico="+bandejaciru_vhiscli2259_unico_to_tbc_admision_scroll.adm_histclinuni+" and tbc_anest_carga_fecha="+globals.vFeccarga+" and tbc_anest_carga_hora="+globals.vHorcarga
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
	}else{
		vProtocoloOk=false
		vDatosQueFaltan+="Falta cargar Ficha Anestésica "+'\n'
	}
	//return retorno
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"9AFBED39-D7F6-4763-8454-1734A7E55D3F"}
 */
function EjecutaRunCobol() {
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
	
	var protocolo = fs['ciriprotocolo']
	 var legajo = globals.vLega
	 var tipo_legajo = globals.vTipoOperador
	 var tipo = 0
	 if(globals.bandejaciru_vSector==66){
		 tipo = 1
	 }else{
		 tipo = 3
	 }
	 //var vString = vServer.executeCommand('ssh -l svysc 10.200.0.90 -C "sh sh-pruebaservoy1"');
	vString = vServer.executeCommand("/app/servoy/scripts/shcob4000 "+servidor+" "+"1"+" "+vClaveCiru+" "+protocolo+" "+tipo+" "+legajo+" "+tipo_legajo);
	//plugins.dialogs.showInfoDialog("Prueba de shell",vString)
	//application.output(vString)
	
	}
}
