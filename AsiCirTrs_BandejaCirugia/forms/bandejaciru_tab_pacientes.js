/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3B5ACEF4-48F7-4103-9A2C-0FAFEDC4EA29",variableType:4}
 */
var fila_ds = 0;

/**
 * @properties={typeid:35,uuid:"BC47B255-FA49-45CE-9BA4-12B8F9A0FDAA",variableType:-4}
 */
var f_ds = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6F18C112-3FD2-4804-AEFE-508C50F2F473",variableType:4}
 */
var f_protocolo = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"42B22A4E-3A6C-4890-9A31-751A506247A3",variableType:8}
 */
var f_hiscli = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9AF4B752-5705-4112-B5B8-58795325F44C"}
 */
var f_tipo_nro_o_str = '';

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"B5631816-55A7-4B29-B914-1276E2585F21"}
 */
function onShow(firstShow, event) {

	scopes.globals.bandejaciru_gbl_fecha = application.getServerTimeStamp()
	var dia = scopes.globals.bandejaciru_gbl_fecha.getDate()
	if (dia < 10)
		{dia = '0' + dia}
	var mes = scopes.globals.bandejaciru_gbl_fecha.getMonth() + 1 
	if (mes < 10)
		{mes = '0' + mes}
	var anio = scopes.globals.bandejaciru_gbl_fecha.getFullYear()
	var fectra_aux  = anio + '' + mes + '' + dia
	//scopes.globals.fichaaneste_vfecha8 = utils.stringToNumber(fectra_aux)

	
	creoDatasetCargoCirugint()
	controller.focusFirstField()
	
	elements.tabless_72.tabIndex = 2
}

/**
 * @properties={typeid:24,uuid:"633D1FF0-B4BE-4C1B-8515-FA61753FAC06"}
 */
function creoDatasetCargoCirugint() {
	forms.bandejaciru_scroll_pacientes.controller.deleteAllRecords()
	elements.esperando.visible = true
	application.updateUI()
	var $estado=0
	var ip_sector=application.getIPAddress()
	if(ip_sector=="12.100.10.67"||ip_sector=="12.100.10.68"){
		$estado=3
	}else{
		$estado = 1
	}
	if(application.isInDeveloper()){
		if(ip_sector=="10.8.0.54"){
			$estado=1
		}else{
			$estado = 3
		}
	}else{
		if(ip_sector=="10.8.0.54"){
			$estado=3
		}
	}
	var fecha_hoy = new Date()
	var fecha = 0
	var fecha_aux = 0
	fecha_aux = application.getServerTimeStamp().getTime() - (20 * 1000 * 60 * 60 * 24)
	var fecha_ant = new Date(fecha_hoy.setTime(fecha_aux))
	fecha = globals.DateToEntero(fecha_ant)
	var $SQL="select CIRU.ciriprotocolo, ADM.Adm_ApelNom, CIRU.cirihistcl, OBR.obr_razonsoc, MED.medperapeynom, CIRU.cirihistcl, 0, CIRU.ciriieciru, CIRU.cirilegciru , CIRU.cirifechacarga ,CIRU.cirihoracarga, 0, 0, 0, 0 "
	+"from tbc_cirugint CIRU "
	+"inner join asistencial.tbc_admision ADM on ADM.adm_histclin = CIRU.cirihistcl " 
	+"inner join maestros.tbc_obras OBR on OBR.Obr_Codigo = ADM.Adm_ObrSoc "
	+"inner join maestros.tbc_medicos_personal MED on MED.medpercod  = CIRU.cirilegciru "
	//+"where ciritiponome = 0 and ciricodnome = 0 and ciriestado = 0 order by cirifechacarga asc, cirihoracarga asc, ciritiponome asc, ciricodnome asc"
	+"where cirifechacarga >= "+fecha+" and ciritiponome = 0 and ciricodnome = 0 and ciriestado = 0 order by cirifechacarga asc, cirihoracarga asc, ciritiponome asc, ciricodnome asc"
	var frm_ds = databaseManager.getDataSetByQuery("asistencial", $SQL, null, -1);
	var $max= frm_ds.getMaxRowIndex()
	fecha_aux = application.getServerTimeStamp().getTime() - (16 * 1000 * 60 * 60 * 24)
	fecha_ant = new Date(fecha_hoy.setTime(fecha_aux))
	fecha = globals.DateToEntero(fecha_ant)
	var $sql1 = "select CIRU.cirgprotocolo, GUARDIA.Guar_ApeNom, GUARDIA.Guar_HistClinica,  OBR.Obr_razonsoc, MED.medperapeynom, GUARDIA.Guar_HistClinica, 1, GUARDIA.guar_tipomed, GUARDIA.guar_medico, GUARDIA.guar_fechaingreso, GUARDIA.guar_horaingreso, 0, 0, 0, 0 "
		 + "from tbc_guardia GUARDIA inner join maestros.tbc_interven INTERVEN on INTERVEN.Itv_Codi = GUARDIA.Guar_Diagnostico "
		 + "left join asistencial.tbc_ciruguar CIRU on CIRU.cirghistclinica = GUARDIA.guar_histclinica and CIRU.cirgfechaingreso = GUARDIA.guar_fechaingreso and CIRU.cirghoraingreso = GUARDIA.guar_horaingreso "
		 +"left join maestros.tbc_obras OBR on OBR.Obr_Codigo = GUARDIA.guar_obra "
		 +"left join maestros.tbc_medicos_personal MED on MED.medpercod  = GUARDIA.guar_medico "
		 + "where GUARDIA.Guar_FechaIngreso3 >= "+fecha+" and GUARDIA.Guar_Especialidad3 = 5 and GUARDIA.Guar_Estado3 < 4 order by GUARDIA.Guar_FechaIngreso3 asc, GUARDIA.Guar_HoraIngreso3 asc, GUARDIA.Guar_Especialidad3 asc, GUARDIA.Guar_Estado3 asc";
	var frm_ds1 = databaseManager.getDataSetByQuery("asistencial",$sql1,null,-1);
	var $largo_ds = frm_ds1.getMaxRowIndex()
	
	var $sql2 = "select LECTORA.Hlec_Protocolo, HISTCAB.HistCabApellNom, LECTORA.hlec_histclin,  OBR.Obr_razonsoc, MED.medperapeynom, LECTORA.hlec_histclin , 1, LECTORA.Hlec_TipLegMed, LECTORA.Hlec_LegMed , LECTORA.Hlec_FecIng, LECTORA.Hlec_HorIng, LECTORA.Hlec_Nomencla, LECTORA.Hlec_Urgen, LECTORA.Hlec_FecPed, LECTORA.Hlec_HorPed " 
			+ "from tbc_his_lectora LECTORA " 
			+ "inner join asistencial.tbc_hist_cab_new HISTCAB on HISTCAB.HistCabNroUnico=LECTORA.hlec_histclin "
			+ "inner join maestros.tbc_obras OBR on OBR.Obr_Codigo = HISTCAB.HistCabObra "
			+ "left join maestros.tbc_medicos_personal MED on MED.medpercod  = LECTORA.Hlec_LegMed " 
			+ "where LECTORA.hlec_estado="+$estado+" and (LECTORA.hlec_nomencla > 0 or LECTORA.hlec_nomencla = 0) and LECTORA.hlec_tiphistclin = 1 order by LECTORA.hlec_estado asc, LECTORA.hlec_histclin asc, LECTORA.hlec_fec asc, LECTORA.hlec_hora asc";
			//+ "where (LECTORA.hlec_estado=3 or LECTORA.hlec_estado=1) and LECTORA.hlec_nomencla > 0 and LECTORA.hlec_tiphistclin = 1 order by LECTORA.hlec_estado asc, LECTORA.hlec_histclin asc, LECTORA.hlec_fec asc, LECTORA.hlec_hora asc";
	var frm_ds2 = databaseManager.getDataSetByQuery("asistencial",$sql2,null,-1);
	var $largo_ds2 = frm_ds2.getMaxRowIndex()
	
	var $sql3 = "select LECTORA.Hlec_Protocolo, ADM.Adm_ApelNom, LECTORA.hlec_histclin ,  OBR.Obr_razonsoc, MED.medperapeynom, LECTORA.hlec_histclin , 0, LECTORA.Hlec_TipLegMed, LECTORA.Hlec_LegMed , LECTORA.Hlec_FecIng, LECTORA.Hlec_HorIng, LECTORA.Hlec_Nomencla, LECTORA.Hlec_Urgen, LECTORA.Hlec_FecPed, LECTORA.Hlec_HorPed " 
			+ "from tbc_his_lectora LECTORA " 
			+ "left join asistencial.tbc_cirugint CIRU on CIRU.cirihistcl = LECTORA.hlec_histclin and CIRU.ciriprotocolo = LECTORA.hlec_protocolo " 
			+ "inner join asistencial.tbc_admision ADM on ADM.adm_histclin = LECTORA.hlec_histclin " 
			+ "inner join maestros.tbc_obras OBR on OBR.Obr_Codigo = ADM.Adm_ObrSoc " 
			+ "left join maestros.tbc_medicos_personal MED on MED.medpercod  = LECTORA.Hlec_LegMed " 
			+ "where LECTORA.hlec_estado="+$estado+" and (LECTORA.hlec_nomencla > 0 or LECTORA.hlec_nomencla = 0) and LECTORA.hlec_tiphistclin = 0 order by LECTORA.hlec_estado asc, LECTORA.hlec_histclin asc, LECTORA.hlec_fec asc, LECTORA.hlec_hora asc";
			//+ "where (LECTORA.hlec_estado=3 or LECTORA.hlec_estado=1) and LECTORA.hlec_nomencla > 0 and LECTORA.hlec_tiphistclin = 0 order by LECTORA.hlec_estado asc, LECTORA.hlec_histclin asc, LECTORA.hlec_fec asc, LECTORA.hlec_hora asc";
	var frm_ds3 = databaseManager.getDataSetByQuery("asistencial",$sql3,null,-1);
	var $largo_ds3 = frm_ds3.getMaxRowIndex()
	
	f_ds = databaseManager.createEmptyDataSet()
	f_ds.addColumn('col1',1,JSColumn.TEXT)   
	f_ds.addColumn('col2',2,JSColumn.TEXT)
	f_ds.addColumn('col3',3,JSColumn.TEXT)
	f_ds.addColumn('col4',4,JSColumn.TEXT)
	f_ds.addColumn('col5',5,JSColumn.TEXT)
	f_ds.addColumn('whiscli',6,JSColumn.NUMBER)
	f_ds.addColumn('wtiphcl',7,JSColumn.INTEGER)
	f_ds.addColumn('wtipomed',8,JSColumn.INTEGER)
	f_ds.addColumn('wlegamed',9,JSColumn.INTEGER)
	f_ds.addColumn('wfecing',10,JSColumn.INTEGER)
	f_ds.addColumn('whoring',11,JSColumn.INTEGER)
	f_ds.addColumn('wnomencla',12,JSColumn.INTEGER)
	f_ds.addColumn('wurgen',13,JSColumn.INTEGER)
	f_ds.addColumn('wamdped',14,JSColumn.INTEGER)
	f_ds.addColumn('whorped',15,JSColumn.INTEGER)
	f_ds.addColumn('wkeycir',16,JSColumn.TEXT)
	f_ds.addColumn('wkeyhis',17,JSColumn.TEXT)
	
	var hiscli_ed = ' ';
	var protocolo_ed = ' ';
	var i=0;
	if ($largo_ds2 > 0){
		for(i=1;i<=$largo_ds2;i++){
			if(frm_ds2.getValue(i,1)==null||frm_ds2.getValue(i,1)==0){
				switch (frm_ds2.getValue(i,13)){
					case 1:protocolo_ed="**MUY URG.**";break;
					case 2:protocolo_ed="**URGENTE**";break;
					case 3:protocolo_ed="**DIFERIDO**";break;
					default:protocolo_ed=null;break;
				}
			}else{
				protocolo_ed=frm_ds2.getValue(i,1)
			}
			if(!filtraDuplicados(frm_ds2.getValue(i,1),frm_ds2.getValue(i,6))){
				f_ds.addRow([protocolo_ed,frm_ds2.getValue(i,2),frm_ds2.getValue(i,3),frm_ds2.getValue(i,4),frm_ds2.getValue(i,5),frm_ds2.getValue(i,6),frm_ds2.getValue(i,7),frm_ds2.getValue(i,8),frm_ds2.getValue(i,9),frm_ds2.getValue(i,10),frm_ds2.getValue(i,11),frm_ds2.getValue(i,12),frm_ds2.getValue(i,13),frm_ds2.getValue(i,14),frm_ds2.getValue(i,15),"",""])
			}
		}
	}
	if ($largo_ds3 > 0){
		for(i=1;i<=$largo_ds3;i++){
			hiscli_ed=convertNumberToHistoria(frm_ds3.getValue(i,3))
			if(frm_ds3.getValue(i,1)==null||frm_ds3.getValue(i,1)==0){
				switch (frm_ds3.getValue(i,13)){
					case 1:protocolo_ed="**MUY URG.**";break;
					case 2:protocolo_ed="**URGENTE**";break;
					case 3:protocolo_ed="**DIFERIDO**";break;
					default:protocolo_ed=null;break;
				}
			}else{
				protocolo_ed=frm_ds3.getValue(i,1)
			}
			if(!filtraDuplicados(frm_ds3.getValue(i,1),frm_ds3.getValue(i,6))){
				f_ds.addRow([protocolo_ed,frm_ds3.getValue(i,2),hiscli_ed,frm_ds3.getValue(i,4),frm_ds3.getValue(i,5),frm_ds3.getValue(i,6),frm_ds3.getValue(i,7),frm_ds3.getValue(i,8),frm_ds3.getValue(i,9),frm_ds3.getValue(i,10),frm_ds3.getValue(i,11),frm_ds3.getValue(i,12),frm_ds3.getValue(i,13),frm_ds3.getValue(i,14),frm_ds3.getValue(i,15),"",""])
			}
		}
	}
	if ($max > 0){
		var hiscli_key=0
		var cerox=''
		var vClaveCiru= ""	
		var vHoraCargaCiru=""
		for(i=1;i<=$max;i++){
			hiscli_ed=convertNumberToHistoria(frm_ds.getValue(i,3))
			hiscli_key = frm_ds.getValue(i,6)
			
			switch (hiscli_key.toString().length){
			case 7:cerox="000";break;
			case 8:cerox="00";break;
			case 9:cerox="0";break;
			case 10:cerox='';break;
			}
			
			
			
			if(frm_ds.getValue(i,11)>99999){
				vHoraCargaCiru=frm_ds.getValue(i,11)
			}else{
				if(frm_ds.getValue(i,11)>9999){
					vHoraCargaCiru="0"+frm_ds.getValue(i,11)
				}else{
					if(frm_ds.getValue(i,11)>999){
						vHoraCargaCiru="00"+frm_ds.getValue(i,11)
					}else{
						if(frm_ds.getValue(i,11)>99){
							vHoraCargaCiru="000"+frm_ds.getValue(i,11)
						}else{
							if(frm_ds.getValue(i,11)>9){
								vHoraCargaCiru="0000"+frm_ds.getValue(i,11)
							}else{
								vHoraCargaCiru="00000"+frm_ds.getValue(i,11)
							}
						}
					}
				}
			}
			vClaveCiru+=cerox
			vClaveCiru+=frm_ds.getValue(i,6)
			vClaveCiru+=frm_ds.getValue(i,11)
			vClaveCiru+=vHoraCargaCiru
			vClaveCiru+="00"
			vClaveCiru+="000000"
			protocolo_ed=frm_ds.getValue(i,1)
			if(!filtraDuplicados(frm_ds.getValue(i,1),frm_ds.getValue(i,6))){
				f_ds.addRow([protocolo_ed,frm_ds.getValue(i,2),hiscli_ed,frm_ds.getValue(i,4),frm_ds.getValue(i,5),frm_ds.getValue(i,6),frm_ds.getValue(i,7),frm_ds.getValue(i,8),frm_ds.getValue(i,9),frm_ds.getValue(i,10),frm_ds.getValue(i,11),frm_ds.getValue(i,12),frm_ds.getValue(i,13),frm_ds.getValue(i,14),frm_ds.getValue(i,15),vClaveCiru,""])
			}else{
				f_ds.setValue(fila_ds,1,protocolo_ed)
				f_ds.setValue(fila_ds,10,frm_ds.getValue(i,10))
				f_ds.setValue(fila_ds,11,frm_ds.getValue(i,11))
			}
		}
	}
	if ($largo_ds > 0){
		for(i=1;i<=$largo_ds;i++){
			protocolo_ed=frm_ds1.getValue(i,1)
			if(!filtraDuplicados(frm_ds1.getValue(i,1),frm_ds1.getValue(i,6))){
				f_ds.addRow([protocolo_ed,frm_ds1.getValue(i,2),frm_ds1.getValue(i,3),frm_ds1.getValue(i,4),frm_ds1.getValue(i,5),frm_ds1.getValue(i,6),frm_ds1.getValue(i,7),frm_ds1.getValue(i,8),frm_ds1.getValue(i,9),frm_ds1.getValue(i,10),frm_ds1.getValue(i,11),frm_ds1.getValue(i,12),frm_ds1.getValue(i,13),frm_ds1.getValue(i,14),frm_ds1.getValue(i,15),"",""])
			}else{
				f_ds.setValue(fila_ds,1,protocolo_ed)
				f_ds.setValue(fila_ds,10,frm_ds1.getValue(i,10))
				f_ds.setValue(fila_ds,11,frm_ds1.getValue(i,11))
			}
		}
	}
	elements.esperando.visible = false
	application.updateUI()
	if(f_ds.getMaxRowIndex()>0){
		f_ds.sort(6,true)
		var $tipos = [JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.NUMBER, JSColumn.INTEGER, JSColumn.INTEGER, JSColumn.INTEGER, JSColumn.INTEGER, JSColumn.INTEGER, JSColumn.INTEGER, JSColumn.INTEGER, JSColumn.INTEGER, JSColumn.INTEGER, JSColumn.TEXT, JSColumn.TEXT]
			
		var $frm = solutionModel.getForm('bandejaciru_scroll_pacientes')
		$frm.dataSource = f_ds.createDataSource('Ds_Cirugint', $tipos)
		forms.bandejaciru_scroll_pacientes.controller.recreateUI()
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param historia
 *
 * @properties={typeid:24,uuid:"49C32237-7724-4440-AD02-9836DB7E48EC"}
 */
function convertNumberToHistoria(historia) {
	var $hc = '';
	if(historia != '0')
		$hc = historia.toString().substr(0,(historia.toString().length - 1))+"/"+historia.toString().substr((historia.toString().length - 1),1);
	
	return $hc;
}

/**
 * @param protocolo 
 * @param hiscli
 * @properties={typeid:24,uuid:"1866D1FD-EE8F-4F97-94F9-35AB1A95EE1A"}
 */
function filtraDuplicados(protocolo, hiscli) {
	fila_ds=0
	var $encontrado=false
	var $largo_dataset =f_ds.getMaxRowIndex()
	for(var i=1;i<=$largo_dataset&&!$encontrado;i++){
		if(protocolo==null||protocolo==0){
			if(f_ds.getValue(i,6)==hiscli){
				fila_ds=i
				$encontrado=true
			}
		}else{
			if(f_ds.getValue(i,1)==protocolo && f_ds.getValue(i,6)==hiscli){
				fila_ds=i
				$encontrado=true
			}
		}
	}
	return $encontrado
}
