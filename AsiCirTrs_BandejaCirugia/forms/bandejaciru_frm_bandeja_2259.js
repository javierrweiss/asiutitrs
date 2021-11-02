/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"96E25CCC-D624-4B71-B244-BE4458F5DB83",variableType:4}
 */
var vNroAnestesia = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0E6AC1EF-67F4-4BEE-9AD5-414F3C98302A"}
 */
var vString = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"93E081DE-7342-4AE2-ADB2-2C862A2B2C92"}
 */
var vDatosQueFaltan = '';

/**
 * @properties={typeid:35,uuid:"B7C6B94A-4E81-486E-AF6C-6D5EBB377B6C",variableType:-4}
 */
var vProtocoloOk = false;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA65CD17-D556-4EA0-9DBC-F651266A06C6"}
 * @AllowToRunInFind
 */
function onShow_IngresoMedicamentos_tab(firstShow, event) {
	elements.bean_243.visible=false
	//elements.lbl_procesando.visible=false
	var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('fProtocolo_edit',1,JSColumn.TEXT)
	$ds.addColumn('fPaciente',2,JSColumn.TEXT)
	$ds.addColumn('fHiscli_edit',3,JSColumn.TEXT)
	$ds.addColumn('fObraSocial',4,JSColumn.TEXT)
	$ds.addColumn('fMedico',5,JSColumn.TEXT)
	$ds.addColumn('fHiscli',6,JSColumn.NUMBER)
	$ds.addColumn('fAmdped',7,JSColumn.NUMBER)
	$ds.addColumn('fAmding',8,JSColumn.NUMBER)
	$ds.addColumn('fHoring',9,JSColumn.NUMBER)
	$ds.addColumn('fHorped',10,JSColumn.NUMBER)
	$ds.addColumn('fKeyhislectora',11,JSColumn.TEXT)
	$ds.addColumn('fLegamed',12,JSColumn.NUMBER)
	$ds.addColumn('fNomencla',13,JSColumn.NUMBER)
	$ds.addColumn('fNomencla_des',14,JSColumn.TEXT)
	$ds.addColumn('fProtocolo',15,JSColumn.NUMBER)
	$ds.addColumn('fTipomed',16,JSColumn.NUMBER)
	$ds.addColumn('fUrgen',17,JSColumn.NUMBER)
	$ds.addColumn('fUrgen_des',18,JSColumn.TEXT)
	$ds.addColumn('fArt',19,JSColumn.NUMBER)
	$ds.addColumn('fTipHiscli',20,JSColumn.NUMBER)
	
	
	var $sql1="select HLEC.Hlec_HistClin Hisclin, HLEC.Hlec_TipHistClin Tipo, HLEC.Hlec_Protocolo Protocolo, HLEC.Hlec_LegMed Medico, if (HLEC.Hlec_TipHistClin = 0 , ADM.Adm_ApelNom, HCAB.histcabapellnom) Nombre, " 
	          +"if (HLEC.Hlec_TipHistClin = 1 , OBRA.Obr_razonsoc, OBR.Obr_razonsoc) Obras, MEDICOS.MedPerApeynom Medico ,"
			  + "HLEC.Hlec_fecing fecing, HLEC.Hlec_horing horing "
	          +"from tbc_HIS_LECTORA HLEC " 
	          +"left join asistencial.tbc_admision ADM on ADM.adm_histclin = HLEC.Hlec_HistClin " 
	          +"left join asistencialsc9.tbc_hist_cab_new HCAB  on HCAB.histcabnrounico = HLEC.Hlec_HistClin "
	          +"left join maestros.tbc_obras OBR on OBR.Obr_Codigo = ADM.Adm_ObrSoc " 
	          +"left join maestros.tbc_obras OBRA  on OBRA.Obr_Codigo = HCAB.HistCabObra "
			  +"left join maestros.tbc_medicos_personal MEDICOS on MEDICOS.MedPerCod = HLEC.Hlec_LegMed "
	          +"where HLEC.Hlec_Estado=1 "
	var ds = databaseManager.getDataSetByQuery("asistencial",$sql1,null,-1)
	var cant = ds.getMaxRowIndex()
	var $hiscli=0
	var indice=1
	var indice_ant=0
	var $protocolo=''
	var $paciente=''
	var $hisclin_edit=''
	var $obrasocial=''
	var $medico=''
	var $nomencla_des=''
	var $urgen_des=''
	var $distinct=0	
	var array = new Array()
	if(cant > 0){
		while (indice<=cant){
			while ($hiscli==ds.getValue(indice,1)&&indice<=cant){
				indice++
			}
			
			$hiscli=ds.getValue(indice,1)
			
			/*
			globals.bandejaciru_hiscli=ds.getValue(indice,1)
			globals.bandejaciru_medico=ds.getValue(indice,5)
			if(ds.getValue(indice,2)==0){
				if($hiscli!=null){
					$paciente=bandejaciru_hiscli_to_tbc_admision_scroll.adm_apelnom
					$obrasocial=bandejaciru_hiscli_to_tbc_admision_scroll.bandejaciru_tbc_admision_scroll_to_tbc_obras.obr_razonsoc
					$hisclin_edit=ds.getValue(indice,1)
					$hisclin_edit=$hisclin_edit.toString().substr(0,6)+"/"+$hisclin_edit.toString().substr(6,1)
				}
			}else{
				if($hiscli!=null){
					$paciente=bandejaciru_hiscli_to_tbc_hist_cab_new.histcabapellnom
					$obrasocial=bandejaciru_hiscli_to_tbc_hist_cab_new.bandejaciru_tbc_hist_cab_new_to_tbc_obras.obr_razonsoc
					$hisclin_edit=ds.getValue(indice,1)
				}
			}
			$medico=bandejaciru_medico_to_tbc_medicos_personal.medperapeynom
			*/
			if(indice<=cant){
			$ds.addRow([ds.getValue(indice,3),ds.getValue(indice,5),ds.getValue(indice,1),ds.getValue(indice,6),ds.getValue(indice,7),ds.getValue(indice,1),ds.getValue(indice,1),ds.getValue(indice,8),ds.getValue(indice,9),ds.getValue(indice,10),ds.getValue(indice,11),ds.getValue(indice,12),ds.getValue(indice,13),ds.getValue(indice,14),ds.getValue(indice,15),ds.getValue(indice,16),ds.getValue(indice,17),ds.getValue(indice,18),ds.getValue(indice,2)])
			$distinct++
			array[$distinct]=ds.getValue(indice,1)
			}
		}
	}
	var $sql2 = "select Guar_HistClinica, Guar_FechaIngreso, Guar_HoraIngreso, Guar_Apenom, Guar_Obra, Guar_Plan, Guar_Medico, Guar_TipoMed, Guar_Diagnostico from tbc_guardia where Guar_Especialidad=5 and Guar_Estado<4"
	var $ds2 = databaseManager.getDataSetByQuery("asistencial",$sql2,null,-1)
	var cant2 = $ds2.getMaxRowIndex()
	var $encontro=false
	if(cant2 > 0){
		for(var i = 1; i<=cant2;i++){
			for(var z = 1;z<=$distinct&&!$encontro;z++){
				if(array[z]==$ds2.getValue(i,1)){
					$encontro=true
				}
			}
			
			if(!$encontro){
				$ds.addRow([$ds2.getValue(i,1),$ds2.getValue(i,2),$ds2.getValue(i,3),$ds2.getValue(i,4),$ds2.getValue(i,5),$ds2.getValue(i,1),ds.getValue(indice,1),ds.getValue(indice,8),ds.getValue(indice,9),ds.getValue(indice,10),ds.getValue(indice,11),ds.getValue(indice,12),ds.getValue(indice,13),ds.getValue(indice,14),ds.getValue(indice,15),ds.getValue(indice,16),ds.getValue(indice,17),ds.getValue(indice,18),ds.getValue(indice,2)])
				
			}
		}
	}
	var $sql3="select cirihistcl, ciriprotocolo, cirifechacarga, cirihoracarga, cirilegciru, ciriieciru from tbc_cirugint where CiriFechaCarga>=20170901 and CiriCodNome=0 and CiriTipoNome=0 and CiriEstado=0"
	var $ds3 = databaseManager.getDataSetByQuery("asistencial",$sql3,null,-1)
	var cant3 = $ds3.getMaxRowIndex()
	if(cant3 > 0){
		$encontro=false
		for(var j = 1; j<=cant3;j++){
				for( z = 1;z<=$distinct&&!$encontro;z++){
					if(array[z]==$ds3.getValue(j,1)){
						$encontro=true
					}
				}
				
				if(!$encontro){
					$ds.addRow([$ds3.getValue(j,1),$ds3.getValue(j,2),$ds3.getValue(j,3),$ds3.getValue(j,4),$ds3.getValue(j,5),$ds3.getValue(j,1),ds.getValue(indice,1),ds.getValue(indice,8),ds.getValue(indice,9),ds.getValue(indice,10),ds.getValue(indice,11),ds.getValue(indice,12),ds.getValue(indice,13),ds.getValue(indice,14),ds.getValue(indice,15),ds.getValue(indice,16),ds.getValue(indice,17),ds.getValue(indice,18),ds.getValue(indice,2)])
					
			}
		}
	}
	
	$ds.sort(3,true)
	var $tipos = [JSColumn.TEXT, JSColumn.TEXT, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.TEXT, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.TEXT, JSColumn.NUMBER, JSColumn.NUMBER]
		var $frm = solutionModel.getForm('bandejaciru_frm_bandeja_2259_tbl')
		$frm.dataSource = $ds.createDataSource('Ds_Bandeja', $tipos)
		forms.bandejaciru_frm_bandeja_2259_tbl.controller.recreateUI()
		application.updateUI()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"64596AA7-914D-4270-9FBF-1FE632A78C56"}
 */
function onAction_volver(event) {
	
	application.showForm("frm_menu_principal")
	//globals.vClose=true
	//application.exit()
}
