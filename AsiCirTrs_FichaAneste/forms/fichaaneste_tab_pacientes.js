/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A7114A85-B4BC-469E-9975-A365B71C4E45"}
 */
var f_tipo_nro_o_str = '';

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} firstShow
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"34C06A6E-1B04-4216-ABE4-6F11A08D0AF2"}
 */
function onShow(firstShow, event) {

	scopes.globals.fichaaneste_vfecha = application.getServerTimeStamp()
	var dia = scopes.globals.fichaaneste_vfecha.getDate()
	if (dia < 10)
		{dia = '0' + dia}
	var mes = scopes.globals.fichaaneste_vfecha.getMonth() + 1 
	if (mes < 10)
		{mes = '0' + mes}
	var anio = scopes.globals.fichaaneste_vfecha.getFullYear()
	var fectra_aux  = anio + '' + mes + '' + dia
	scopes.globals.fichaaneste_vfecha8 = utils.stringToNumber(fectra_aux)

	if(scopes.globals.fichaaneste_tipoPac  == 0){
		f_tipo_nro_o_str = "Ingrese Apellido ó Nro.Iternación"
	}else{
		f_tipo_nro_o_str = "Ingrese Apellido ó Hist.Clin.Única"
	}
	scopes.globals.fichaaneste_vHisclistrynro = '';
	globals.vAlfa = '';
	globals.vClose = false
	globals.vFormulario = currentcontroller.getName()
	//creoDatasetInternadosAlfabetico()
	controller.focusFirstField()
	elements.Histclin.requestFocus()
	elements.tabless_72.tabIndex = 1
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"C961A3E3-B269-44AD-AB0A-D9090E99C7BC"}
 */
function onAction_btn_volver(event) {
	//globals.vClose = true
	// Heredados del modelo que se tomo
	globals.vClave  = 0
	globals.vPassOperador = ''
	//**//**//**//  RESTAURAR estas tres variables porque al volver no dibuja el menu del usuario con
	//  el que se ingreso al menu
	globals.vLegajo   = scopes.globals.fichaaneste_vLegajo  
	globals.vLega     = scopes.globals.fichaaneste_vLega        
	globals.vOperador = scopes.globals.fichaaneste_vOperador
	//**//**//**// 	
	forms.fichaaneste_PideLegajo.controller.show()
}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {Object} oldValue
 * @param {Object} newValue
 * @param {Object} event
 *
 * @properties={typeid:24,uuid:"62000FBB-2A26-424B-B60D-ED8B19F327ED"}
 */
function onDataChange_FIND_LetrasOnumeros(oldValue, newValue, event) {
	
	var largo = scopes.globals.fichaaneste_vHisclistrynro.length;
	var esnumero = true;
	for (var i = 0; i < largo && esnumero == true; i++){
		if (globals.vHisclistrynro.charCodeAt(i) < 48 || scopes.globals.fichaaneste_vHisclistrynro.charCodeAt(i) > 57){
			esnumero = false
			}
		}
	
	if (largo == 0)
		{esnumero = false}

    if (esnumero){
    	if(largo < 7){
    		if(scopes.globals.fichaaneste_tipoPac  == 0){
    			plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
    			return false
    		}
	   	}
		     globals.vHiscli = utils.stringToNumber(scopes.globals.fichaaneste_vHisclistrynro.valueOf());
		     scopes.globals.fichaaneste_histcli = utils.stringToNumber(scopes.globals.fichaaneste_vHisclistrynro.valueOf());

			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
		     if(scopes.globals.fichaaneste_tipoPac  == 0){
					elements.tabless_72.tabIndex = 3	
					forms.fichaaneste_admision_N_1.controller.focusFirstField()
					forms.fichaaneste_admision_N_1.elements.adm_histclin.requestFocus()
			}else{
					//*//elements.tabless_72.tabIndex = 4
					elements.tabless_72.tabIndex = 6
					if ( scopes.globals.fichaaneste_histcli  == 0 || scopes.globals.fichaaneste_histcli  == null) 
					 	{generaFoundset_guardia(0)}
					 else
					 	{generaFoundset_guardia(1)}
						//generaFoundset_guardia()
			}
			return true
    }
    else{
    	 globals.vAlfa = scopes.globals.fichaaneste_vHisclistrynro.toLocaleUpperCase()
		 if(scopes.globals.fichaaneste_tipoPac == 0){
				elements.esperando.visible = true
				application.updateUI()
			 	creoDatasetInternadosAlfabetico()   
	 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
	 			elements.tabless_72.tabIndex = 2
	 			forms.fichaaneste_admision_alf_dataset.controller.focusFirstField()
				elements.esperando.visible = false
				application.updateUI()
			 }else{
				//cargaDatasetAmbulatorios()
				//elements.tabless_72.tabIndex = 5
	 			//forms.fichaaneste_hist_clinica_unica_alf.controller.focusFirstField()
				 elements.esperando.visible = true
				 application.updateUI()
				 if ( globals.vAlfa == '' || globals.vAlfa == null) 
				 	{generaFoundset_guardia(0)}
				 else
				 	{generaFoundset_guardia(2)}
				 	//generaFoundset_guardia()
				 elements.tabless_72.tabIndex = 6
				 forms.fichaaneste_pacientes_en_espera.controller.focusFirstField()
				 elements.esperando.visible = false
				 application.updateUI()
			 }  
			return true
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A3BB82B-40E2-41E0-B830-349594416CF3"}
 */
function onAction_ayuda_busqueda_pacientes(event) {
	globals.textoAyuda='AYUDA-2'
	var win = application.createWindow("p",JSWindow.MODAL_DIALOG)
	win.title = "Ayuda en Búsqueda de Pacientes Internados";
	win.setLocation(810,300)
	win.setSize(500,350)
	//win.show(forms.frm_ayuda_1)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F2B9DC23-98D5-4A3D-B7AB-913FC13894B5"}
 */
function onAction_histcli(event) {
	var largo = scopes.globals.fichaaneste_vHisclistrynro.length;
	var esnumero = true;
	for (var i = 0; i < largo && esnumero == true; i++){
		if (scopes.globals.fichaaneste_vHisclistrynro.charCodeAt(i) < 48 || scopes.globals.fichaaneste_vHisclistrynro.charCodeAt(i) > 57){
			esnumero = false
		}
	}
	if (largo == 0)
		{esnumero = false}
	
    if (esnumero){
    	if(largo < 7){
    		if(scopes.globals.fichaaneste_tipoPac == 0){
    			plugins.dialogs.showInfoDialog("Error en Nro.Internación","El número de Internación es menor a 7 digitos."+'\n'+" Completar la cantidad de dígitos.","Ok")
				return
    		}
	   	}
		     globals.vHiscli = utils.stringToNumber(scopes.globals.fichaaneste_vHisclistrynro.valueOf());
		     scopes.globals.fichaaneste_histcli = utils.stringToNumber(scopes.globals.fichaaneste_vHisclistrynro.valueOf());
		
			//plugins.dialogs.showInfoDialog("",globals.vHiscli,"ok")
			//globals.muestroNuevoDatasetN("frm_scr_tbc_admision_N")
		if(scopes.globals.fichaaneste_tipoPac  == 0){
			elements.tabless_72.tabIndex = 3	
			forms.fichaaneste_admision_N_1.controller.focusFirstField()
			forms.fichaaneste_admision_N_1.elements.adm_histclin.requestFocus()
		}else{
			//elements.tabless_72.tabIndex = 4
			if ( scopes.globals.fichaaneste_histcli  == 0 || scopes.globals.fichaaneste_histcli  == null) 
			 	{generaFoundset_guardia(0)}
			 else
			 	{generaFoundset_guardia(1)}
			elements.tabless_72.tabIndex = 6
			forms.fichaaneste_pacientes_en_espera.controller.focusFirstField()
		}
    }
    else{
    	 globals.vAlfa = scopes.globals.fichaaneste_vHisclistrynro.toLocaleUpperCase()
		 if(scopes.globals.fichaaneste_tipoPac  == 0){
		 	creoDatasetInternadosAlfabetico()   
 			//globals.muestroNuevoDatasetAlfa("tbc_admisionL_copy")
 			elements.tabless_72.tabIndex = 2
 			forms.fichaaneste_admision_alf_dataset.controller.focusFirstField()
		 }else{
			//cargaDatasetAmbulatorios()
			//elements.tabless_72.tabIndex = 5
 			//forms.fichaaneste_hist_clinica_unica_alf.controller.focusFirstField()
			 if ( globals.vAlfa == '' || globals.vAlfa == null) 
			 	{generaFoundset_guardia(0)}
			 else
			 	{generaFoundset_guardia(2)}
			 //generaFoundset_guardia()
			 elements.tabless_72.tabIndex = 6
			 forms.fichaaneste_pacientes_en_espera.controller.focusFirstField()
		 }
    }

}

/**
 * @properties={typeid:24,uuid:"2BC8AF84-4A2E-4B1D-B78E-638A5B4C50A4"}
 */
function creoDatasetInternadosAlfabetico() {
	//var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec, adm_histclinuni, adm_sexo, adm_obrsoc, adm_fecnac from tbc_admision_scroll where Adm_ApelNom LIKE '"+globals.vAlfa+"%' and adm_fecaltaefec = 0 order by Adm_ApelNom asc"
	var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec, adm_histclinuni, adm_sexo, adm_obrsoc, adm_fecnac from tbc_admision_scroll where Adm_ApelNom LIKE '"+globals.vAlfa+"%' order by Adm_ApelNom asc"
	//var $SQL="select adm_histclin, adm_apelnom, adm_habita, adm_cama, adm_fecing, adm_fecaltaefec from tbc_admision_scroll where Adm_ApelNom >='"+globals.vAlfa+" ' and Adm_ApelNom <='"+globals.vAlfa+"Z' order by Adm_ApelNom asc"
    var frm_ds = databaseManager.getDataSetByQuery("admisionscroll", $SQL, null, 500);
    
   	var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('fhiscli_edit',1,JSColumn.TEXT)   
	$ds.addColumn('fapeynom',2,JSColumn.TEXT)
	$ds.addColumn('fhabi',3,JSColumn.NUMBER)
	$ds.addColumn('fcama',4,JSColumn.TEXT)
	$ds.addColumn('fingreso',5,JSColumn.TEXT)
	$ds.addColumn('fegreso',6,JSColumn.TEXT)
	$ds.addColumn('fhiscli',7,JSColumn.NUMBER)
	$ds.addColumn('fhiscliuni',8,JSColumn.NUMBER)
	$ds.addColumn('fsexo',9,JSColumn.NUMBER)
	$ds.addColumn('fobrsoc',10,JSColumn.NUMBER)
	$ds.addColumn('ffecnac',11,JSColumn.NUMBER)

					
	var $max         = frm_ds.getMaxRowIndex()
	var $hiscli_edit = ' ';
   	var $largo_edit  = 0;
   	var $fingreso    = ' ';
   	var $fegreso     = ' ';
	if ($max > 0){
		for(var i=1; i<=$max ; i++){
			$hiscli_edit=frm_ds.getValue(i,1)
			
			if($hiscli_edit!=null&&$hiscli_edit!=''){
				$largo_edit=$hiscli_edit.toString().length
				$hiscli_edit=$hiscli_edit.toString().substr(0,$largo_edit-1)+"/"+$hiscli_edit.toString().substr($largo_edit-1,1)
			}
			$fingreso = frm_ds.getValue(i,5)
			$fegreso  = frm_ds.getValue(i,6)
			if(frm_ds.getValue(i,6) == 0){
				$fegreso = ' '
			}else{
				$fegreso = $fegreso.toString().substr(6,2)+"/"+$fegreso.toString().substr(4,2)+"/"+$fegreso.toString().substr(0,4)
			}
			$ds.addRow([$hiscli_edit,frm_ds.getValue(i,2),frm_ds.getValue(i,3),frm_ds.getValue(i,4),$fingreso.toString().substr(6,2)+"/"+$fingreso.toString().substr(4,2)+"/"+$fingreso.toString().substr(0,4),$fegreso,frm_ds.getValue(i,1),frm_ds.getValue(i,7),frm_ds.getValue(i,8),frm_ds.getValue(i,9),frm_ds.getValue(i,10)])
		}
    }

	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER]

	var $frm = solutionModel.getForm('fichaaneste_admision_alf_dataset')
	$frm.dataSource = $ds.createDataSource('Ds_Admision', $tipos)
	forms.fichaaneste_admision_alf_dataset.controller.recreateUI()
}

/**
 * @param {Number} $que_busca
 * @properties={typeid:24,uuid:"B59ED648-3729-401E-9BB0-7D9F47A53F18"}
 */
function generaFoundset_guardia($que_busca)
{	// estado < 4
	if ($que_busca == 0)  // todos
		{var $sql = "select GUARDIA.Guar_ApeNom, GUARDIA.Guar_FechaIngreso, GUARDIA.Guar_HoraIngreso, INTERVEN.Itv_Descripcion, GUARDIA.Guar_Estado, GUARDIA.Guar_HistClinica, GUARDIA.Guar_Diagnostico \
						from tbc_guardia GUARDIA inner join maestros.tbc_interven INTERVEN on INTERVEN.Itv_Codi = GUARDIA.Guar_Diagnostico \
						where GUARDIA.Guar_Especialidad=5 and GUARDIA.Guar_Estado<4";
	}
	else
	{if ($que_busca == 1) // numeros
		{var $sql = "select GUARDIA.Guar_ApeNom, GUARDIA.Guar_FechaIngreso, GUARDIA.Guar_HoraIngreso, INTERVEN.Itv_Descripcion, GUARDIA.Guar_Estado, GUARDIA.Guar_HistClinica, GUARDIA.Guar_Diagnostico \
		 				from tbc_guardia GUARDIA inner join maestros.tbc_interven INTERVEN on INTERVEN.Itv_Codi = GUARDIA.Guar_Diagnostico \
		 				where GUARDIA.Guar_Especialidad=5 and GUARDIA.Guar_Estado<4  and GUARDIA.Guar_HistClinica = "+ scopes.globals.fichaaneste_histcli}
	else   // letras
		{var $sql = "select GUARDIA.Guar_ApeNom, GUARDIA.Guar_FechaIngreso, GUARDIA.Guar_HoraIngreso, INTERVEN.Itv_Descripcion, GUARDIA.Guar_Estado, GUARDIA.Guar_HistClinica, GUARDIA.Guar_Diagnostico \
		 				from tbc_guardia GUARDIA inner join maestros.tbc_interven INTERVEN on INTERVEN.Itv_Codi = GUARDIA.Guar_Diagnostico \
		 				where GUARDIA.Guar_Especialidad=5 and GUARDIA.Guar_Estado<4 and GUARDIA.Guar_ApeNom LIKE '"+globals.vAlfa+"%'"}
		 }
	var ds = databaseManager.getDataSetByQuery("asistencial",$sql,null,-1);
	var largo_ds = ds.getMaxRowIndex()
	
	var $ds2 = databaseManager.createEmptyDataSet();
	$ds2.addColumn('fguar_apenom',1,JSColumn.TEXT);
	$ds2.addColumn('fguar_fechaingreso',2,JSColumn.TEXT);
	$ds2.addColumn('fguar_horaingreso',3,JSColumn.TEXT);
	$ds2.addColumn('fitv_descripcion',4,JSColumn.TEXT);
	$ds2.addColumn('fguar_estado',5,JSColumn.TEXT);
	$ds2.addColumn('fguar_histclinica',6,JSColumn.NUMBER);
	$ds2.addColumn('fguar_diagnostico',7,JSColumn.INTEGER);
	$ds2.addColumn('fguar_fecha_guardia',8,JSColumn.NUMBER);
	$ds2.addColumn('fguar_hora_guardia',9,JSColumn.INTEGER);
	var fecha_ed  = ''
	var hora_ed   = ''
	var estado_ed = ''
	if (largo_ds > 0){
		for(var j = 1 ; j <= largo_ds ; j++){
			fecha_ed = ds.getValue(j,2)
			fecha_ed = fecha_ed.toString().substr(6,2)+"/"+fecha_ed.toString().substr(4,2)+"/"+fecha_ed.toString().substr(0,4)
			hora_ed  = ds.getValue(j,3)
			switch (hora_ed.toString().length){
				case 1:hora_ed = "0:0"+hora_ed.toString();break;
				case 2:hora_ed = "0:"+hora_ed.toString();break;
				case 3:hora_ed = "0"+hora_ed.toString().substr(0,1)+":"+hora_ed.toString().substr(1,2);break;
				case 4:hora_ed = hora_ed.toString().substr(0,2)+":"+hora_ed.toString().substr(2,2);break;
			}
			switch (ds.getValue(j,5)){
				case 1:estado_ed="Sin Atender";break;
				case 2:estado_ed="Atendido y en espera";break;
			}
			$ds2.addRow([ds.getValue(j,1),fecha_ed,hora_ed,ds.getValue(j,4),estado_ed,ds.getValue(j,6),ds.getValue(j,7),ds.getValue(j,2),ds.getValue(j,3)])
		}
	}
	var $tipos = [JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.NUMBER, JSColumn.INTEGER, JSColumn.NUMBER, JSColumn.INTEGER];

	var $frm = solutionModel.getForm('fichaaneste_pacientes_en_espera');
	$frm.dataSource = $ds2.createDataSource('Ds_Link', $tipos);
	forms.fichaaneste_pacientes_en_espera.controller.recreateUI();	
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
 * @properties={typeid:24,uuid:"4C674A21-68D3-4F53-B0C0-DEB63C3131BA"}
 */
function onDataChange_tipo_pac(oldValue, newValue, event) {
	if(newValue == 0){
		f_tipo_nro_o_str = "Ingrese Apellido ó Nro.Iternación"
	}else{
		f_tipo_nro_o_str = "Ingrese Apellido ó Hist.Clin.Única"
	}
	elements.tabless_72.tabIndex = 1
	elements.Histclin.requestFocus()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"304E8352-D95F-4ECF-8F10-DCBB26374FBD"}
 */
function onAction_limpiar(event) {
	scopes.globals.fichaaneste_vHisclistrynro = ''
}
