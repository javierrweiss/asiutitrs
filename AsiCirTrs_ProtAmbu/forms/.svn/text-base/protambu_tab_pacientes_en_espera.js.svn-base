/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6ED0A57E-DCDE-4D5F-9120-2365E2CED01C"}
 */
var fbusqueda = '';


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A4DC94CE-40A0-4C5D-85A9-478346887AC0"}
 */
function onShow_tab_pacientes_en_espera(firstShow, event) {
	if(validaFechaLibro()){
		globals.protambu_cron=true
		generaFoundset()
		plugins.scheduler.addCronJob('30segs', '0/30 * * * * ?', generaFoundset)
	}else{
		globals.protambu_cron=false
		var name=application.getActiveWindow()
		name.getName()
		var $win=application.getWindow(name.getName())
		if($win!=null){
			$win.hide()
			$win.destroy()
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FBAA9D38-23A1-40D8-8D85-78ED4C78E2C8"}
 * @AllowToRunInFind
 */
function onAction(event) {
	if(fbusqueda!=null&&fbusqueda!=''){
		var largo = fbusqueda.length;
		var esnumero = true;
		for (var i= 0;i<largo && esnumero == true; i++){
			if (fbusqueda.charCodeAt(i)< 48 || fbusqueda.charCodeAt(i) > 57){
				esnumero = false
			}
		}
		forms.protambu_scr_pacientes_en_espera.foundset.find()
	    if (esnumero){
	    	forms.protambu_scr_pacientes_en_espera.foundset['fguar_histclinica']= utils.stringToNumber(fbusqueda.valueOf())
	    }else{
	    	forms.protambu_scr_pacientes_en_espera.foundset['fguar_apenom']="#%" + fbusqueda + "%"
	    }
	    forms.protambu_scr_pacientes_en_espera.foundset.search()
	}else{
		forms.protambu_scr_pacientes_en_espera.foundset.loadAllRecords()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E538D23E-28D6-4759-A678-10E096CB7101"}
 */
function onAction_limpia_filtro(event) {
	fbusqueda=''
	forms.protambu_scr_pacientes_en_espera.foundset.loadAllRecords()	
}

/**
 * @properties={typeid:24,uuid:"968F1BBA-4298-42D3-A4F1-B781E45E98F9"}
 */
function generaFoundset() {
	var $sql = "select GUARDIA.Guar_ApeNom, GUARDIA.Guar_FechaIngreso, GUARDIA.Guar_HoraIngreso, INTERVEN.Itv_Descripcion, GUARDIA.Guar_Estado, GUARDIA.Guar_HistClinica, GUARDIA.Guar_Diagnostico \
				 from tbc_guardia GUARDIA inner join maestros.tbc_interven INTERVEN on INTERVEN.Itv_Codi = GUARDIA.Guar_Diagnostico \
				where GUARDIA.Guar_Especialidad=5 and GUARDIA.Guar_Estado<3";
	
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
	var fecha_ed = ''
	var hora_ed = ''
	var estado_ed = ''
	if (largo_ds>0){
		for(var j=1;j<=largo_ds;j++){
			fecha_ed = ds.getValue(j,2)
			fecha_ed = fecha_ed.toString().substr(6,2)+"/"+fecha_ed.toString().substr(4,2)+"/"+fecha_ed.toString().substr(0,4)
			hora_ed = ds.getValue(j,3)
			switch (hora_ed.toString().length){
				case 1:hora_ed="0:0"+hora_ed.toString();break;
				case 2:hora_ed="0:"+hora_ed.toString();break;
				case 3:hora_ed="0"+hora_ed.toString().substr(0,1)+":"+hora_ed.toString().substr(1,2);break;
				case 4:hora_ed=hora_ed.toString().substr(0,2)+":"+hora_ed.toString().substr(2,2);break;
			}
			switch (ds.getValue(j,5)){
				case 1:estado_ed="Sin Atender";break;
				case 2:estado_ed="Atendido y en espera";break;
			}
			$ds2.addRow([ds.getValue(j,1),fecha_ed,hora_ed,ds.getValue(j,4),estado_ed,ds.getValue(j,6),ds.getValue(j,7),ds.getValue(j,2),ds.getValue(j,3)])
		}
	}
	var $tipos = [JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.TEXT, JSColumn.NUMBER, JSColumn.INTEGER, JSColumn.NUMBER, JSColumn.INTEGER];

	var $frm = solutionModel.getForm('protambu_scr_pacientes_en_espera');
	$frm.dataSource = $ds2.createDataSource('Ds_Link', $tipos);
	forms.protambu_scr_pacientes_en_espera.controller.recreateUI();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"74E712AE-4A66-4A51-8213-701385D0C4FC"}
 */
function onHide_protambu_tab_pacientes(event) {
	if(globals.protambu_cron){
		plugins.scheduler.removeJob('30segs');
	}
	return true
}

/**
 * @properties={typeid:24,uuid:"E8AB1D4F-42AF-4CCD-A39E-089690CB1C2C"}
 */
function validaFechaLibro(){
	var $sql="select prm_46 from param where key_param=1"
	var ds_param = databaseManager.getDataSetByQuery("parametros",$sql,null,-1)
	var fecha_actual=application.getServerTimeStamp()
	//fecha_actual = fecha_actual - (1000*60*60*24*60)
	fecha_actual = fecha_actual.setMonth(fecha_actual.getMonth()-2)
	var fecha_libro=new Date()
	if(ds_param.getMaxRowIndex()>0){
		fecha_libro=globals.IntegerToDate(utils.stringToNumber(ds_param.getValue(1,1)))
		if(fecha_actual > fecha_libro){
			var fecha_display = fecha_libro.getDate()+"/"+(fecha_libro.getMonth()+1)+"/"+fecha_libro.getFullYear()
			globals.DIALOGS.showErrorDialog("Error en Fecha del Libro","Pasados 2 meses desde la última emisión"+'\n'+"del Libro de Cirugía ("+fecha_display+"), no puede ingresar "+'\n'+"Protocolos Quirúrgicos Ambulatorios.","Ok")
			return false
		}else{
			return true
		}
	}else{
		globals.DIALOGS.showErrorDialog("Error en Fecha del Libro","No se puede acceder a la fecha de última emisión "+'\n'+"del Libro de Cirugía de Ambulatorios"+'\n'+"Avise urgente a Sistemas por favor!","Ok")
		return false
	}
}
