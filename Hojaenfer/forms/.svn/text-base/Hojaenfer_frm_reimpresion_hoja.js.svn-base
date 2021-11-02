/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8A11C6AB-8F6F-4587-BF00-86DDB5DDE480"}
 */
var f_turno = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4408BFA8-9651-433E-A3EC-6C2E1BAAED00"}
 */
var f_sector = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E3A150E1-E1B9-42C0-A2E3-46E62F415F94"}
 */
var f_habitacion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5F237BD3-23B3-4863-857D-F688EAF4B082",variableType:4}
 */
var f_hora = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DB9F5135-C073-457F-AD51-D8DA5EB3D268"}
 */
var f_dia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"97F363C0-5D75-49CC-BF6B-733CDC456CF9",variableType:4}
 */
var $_histClin = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C85C1EA8-1F15-4E1C-B6B1-CED48CDF5892"}
 */
var f_cama = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CBC21DBC-1B42-4819-896E-9800694CC1C6",variableType:4}
 */
var $countFilter = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F59E7F54-81A0-4BF3-B2B5-072D08792390"}
 */
var f_paciente = null;

/**
 * @properties={typeid:35,uuid:"45D94BAC-7C90-4E1B-8DE9-D365155F68EE",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"250B0BB2-9A8F-42F1-89D0-D4A1CF4FAF65"}
 */
var f_histClinUnica = 'null';

/**
 * TODO generated, please specify type and doc for the params
 * @param filterValue
 *
 * @properties={typeid:24,uuid:"CC7A6827-D0CF-49EE-A557-7DA2718B9101"}
 */
function buscarPedido(filterValue) {
	
	if(validDataForm(filterValue)){
		
		elements.lbl_procesando.visible = true;
		application.updateUI();
		$countFilter = 0;
		/*
		var fechaDesde;
		var fechaHasta;
		if(f_fechaDesde != null && f_fechaHasta != null){
			fechaDesde = globals.FormatearFecha(f_fechaDesde,"AAAAMMDD");
			fechaHasta = globals.FormatearFecha(f_fechaHasta,"AAAAMMDD");
		}
		*/
		var $ds;
		var $sql1 = "SELECT h.HoeHistClinica histclin ,adm.Adm_ApelNom paciente ,adm.Adm_HistClinUni histclinunica,h.HoeFecha dia,h.HoeHora hora\
			,adm.Adm_Habita habita,adm.Adm_Cama cama,h.HoeUtiliza sector\
			FROM tbc_hojenfer h\
			left join tbc_ADMISION adm on h.HoeHistClinica = adm.Adm_HistClin\
			WHERE ";
		
		if(isNaN(filterValue)){
			
			var paciente = utils.stringTrim(filterValue).toLocaleUpperCase();
			var ds_inter = databaseManager.getDataSetByQuery('asistencial',"select Adm_HistClin from tbc_ADMISION where Adm_ApelNom like '" + paciente + "%'",null,-1);
					
			$ds = databaseManager.createEmptyDataSet();
			$ds.addColumn('histclin');
			$ds.addColumn('paciente');
			$ds.addColumn('histclinunica');
			$ds.addColumn('dia');
			$ds.addColumn('hora');
			$ds.addColumn('habita');
			$ds.addColumn('cama');
			$ds.addColumn('sector');
			
			var count = 0;
			var $ds1
			var i;
			var k;
			var sql2 ="";
		
			// buscqueda de hojas de enfermeria segun pacientes internados
			count = 0;
			sql2 = "";
			for(i=1 ; i<= ds_inter.getMaxRowIndex() ; i++){
				count++;
				if(count==1)
					sql2 = $sql1 + " (h.HoeHistClinica = " + ds_inter.getValue(i,1) + ")";
				else
					sql2 += " or (h.HoeHistClinica = " + ds_inter.getValue(i,1) + ")";
				
				if(count == 20){
					$ds1 = databaseManager.getDataSetByQuery('asistencial',sql2,null,-1);
					for(k = 1; k<= $ds1.getMaxRowIndex() ; k++){
						$ds.addRow($ds1.getRowAsArray(k))
					}
					count = 0;
				}
			}
			
			if(count > 0){
				$ds1 = databaseManager.getDataSetByQuery('asistencial',sql2,null,-1);
				for(k = 1; k<= $ds1.getMaxRowIndex() ; k++){
					$ds.addRow($ds1.getRowAsArray(k))
				}
			}
			
			$countFilter += 1;
		}
		else{
					
			$sql1 += " h.HoeHistClinica = " + filterValue;
			$ds = databaseManager.getDataSetByQuery('asistencial',$sql1,null,-1);
			
			$countFilter +=1;
		}
				 
		if($countFilter >0){
			
			if($ds.getMaxRowIndex() > 0){
				
				if(isNaN(filterValue)){
					$ds.sort(1,false);	
				}
				
				var $frm = solutionModel.getForm('Hojaenfer_tbl_reimpresion_hoja');
				var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
				$frm.dataSource = $ds.createDataSource('Hojaenfer_tbl_reimpresion_hoja', $tipos);
				forms.Hojaenfer_tbl_reimpresion_hoja.controller.recreateUI();
				
				elements.lbl_procesando.visible = false;
				application.updateUI();
				openListViewReimpresion();
			}
			else{
				elements.lbl_procesando.visible = false;
				application.updateUI();
				
				globals.DIALOGS.showWarningDialog("Atención","No se encontraron datos.","Aceptar");
			}
			
			$countFilter = 0;
		}
		else{
			elements.lbl_procesando.visible = false;
			application.updateUI();
			
			globals.DIALOGS.showWarningDialog("Atención","Debe ingresar al menos un criterio de filtro.","Aceptar");
			elements.txt_paciente.requestFocus();
		}
	}
}

/**
 * @properties={typeid:24,uuid:"077D5306-B986-4BAB-A364-F57EB4279B6D"}
 */
function validDataForm(filterValue) {
	
	var isValid = true;	
	var messageError = "No ha sido posible realizar la consulta. Corrija los siguientes errores y vuelva a intentar."
	
	if(filterValue ==  null){
		messageError += "\nDebe ingresar nro. de historia clínica o al menos las 3 primeras letras del apellido del paciente.";        
        isValid = false;
	}
	else{
		var texto = utils.stringTrim(filterValue) 
		if(isNaN(texto) && texto.length < 3){
			messageError += "\Debe ingresar nro. de historia clínica o al menos las 3 primeras letras del apellido del paciente.";
			isValid = false;
		}
	}
	
	/*
	if (f_fechaDesde != null && f_fechaHasta == null){
		messageError += "\nDebe ingresar fecha hasta.";        
	    isValid = false;
	}
	
	if (f_fechaHasta != null && f_fechaDesde == null){
		messageError += "\nDebe ingresar fecha desde.";        
        isValid = false;
	}
	
	if(f_fechaDesde != null && f_fechaHasta != null){
		if (f_fechaHasta < f_fechaDesde){
			messageError += "\nLa fecha hasta debe ser mayor o igual a la fecha desde.";        
	        isValid = false;
		}
	}
	
	if(utils.stringTrim(f_paciente).length > 0){
		
		if (f_fechaHasta == null || f_fechaDesde == null){
			messageError += "\nDebe ingresar fecha desde y hasta.";        
	        isValid = false;
		}
	}
	*/
	if(!isValid){
		globals.DIALOGS.showWarningDialog("Atención",messageError,"Aceptar")
		elements.txt_paciente.requestFocus();
	}
	
	return isValid;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD24FDA4-EA7B-4445-8E81-BEE90B07A9C4"}
 */
function onAction_limpiarForm(event) {
	
	limpiarForm();
	elements.txt_paciente.requestFocus();
}

/**
 * @properties={typeid:24,uuid:"9744292B-6808-4A3C-9570-BBBA737D5795"}
 */
function limpiarForm () {
	
	f_cama = null;
	f_dia = null;
	f_habitacion = null;
	f_histClinUnica = null;
	f_hora = null;
	f_paciente =  null;
	f_sector = null;
	f_turno = null;
	
	$_histClin = 0;
	$countFilter = 0
	
	if(forms.Hojaenfer_tbl_reimpresion_hoja.foundset.getSize() > 0){
		forms.Hojaenfer_tbl_reimpresion_hoja.foundset.clear();		
	}
	
	elements.lbl_procesando.visible = false;
	application.updateUI();
	
	elements.txt_paciente.enabled = true;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67029D43-8988-4F32-AF4E-09D0CD85C61A"}
 */
function onShow_inicializarForm(firstShow, event) {
	
	f_cerrarForm = false;
	limpiarForm();

	var ds_hoja = databaseManager.createEmptyDataSet();
	ds_hoja.addColumn('histclin');
	ds_hoja.addColumn('paciente');
	ds_hoja.addColumn('histclinunica');
	ds_hoja.addColumn('dia');
	ds_hoja.addColumn('hora');
	ds_hoja.addColumn('habita');
	ds_hoja.addColumn('cama');
	ds_hoja.addColumn('sector');
	
	var $frm = solutionModel.getForm('Hojaenfer_tbl_reimpresion_hoja');
	var $tipos = [JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT, JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT,JSColumn.TEXT];
	$frm.dataSource = ds_hoja.createDataSource('Hojaenfer_tbl_reimpresion_hoja', $tipos);
	forms.Hojaenfer_tbl_reimpresion_hoja.controller.recreateUI();
	
	elements.txt_paciente.requestFocus();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"2BFE619C-4455-4837-A8CC-C992C73171FF"}
 */
function onHide_consultaProtocolo(event) {
	if(f_cerrarForm){
		var $win = application.getWindow(application.getActiveWindow().getName());
		if($win != null){
			$win.hide();
			$win.destroy();
		}
	}
	return f_cerrarForm;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"18AFB1FF-F3BE-482F-BE9D-8CC24604557D"}
 */
function onAction_cerrar(event) {
	f_cerrarForm = true;
	onHide_consultaProtocolo(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5F43B2AC-DE31-4690-99D1-17728D9B6A6B"}
 */
function onAction_paciente(event) {
	
	buscarPedido(f_paciente);
}

/**
 * @properties={typeid:24,uuid:"3BFE4DF4-6A96-4009-8C5A-B0B82A5E8E70"}
 */
function openListViewReimpresion() {
	
	var win = application.createWindow("Hojaenfer_tbl_reimpresion_hoja",JSWindow.MODAL_DIALOG);
	win.title = "Búsqueda de Hoja de Enefermeria";
	win.resizable = false;
	win.show(forms.Hojaenfer_tbl_reimpresion_hoja);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6E0D1F85-9C71-4C80-BE67-3A3F9DB06720"}
 */
function onAction_btnImprimir(event) {
	
	forms.Hojaenfer_print.imprimirHojaEnfer($_histClin,Number(f_dia),f_hora)
	/*
	if(f_paciente != null){
		
		var res = globals.DIALOGS.showQuestionDialog('¡Atención!','¿Confirma reimpresión?', 'Si', 'No');
		if( res == 'Si'){
			forms.Hojaenfer_print.imprimirHojaEnfer($_histClin,Number(f_dia),f_hora)
		}
	}
	else{
		globals.DIALOGS.showWarningDialog("Atención","No hay datos para imprimir.","Aceptar");
		elements.txt_paciente.requestFocus();
	}
	*/
}
