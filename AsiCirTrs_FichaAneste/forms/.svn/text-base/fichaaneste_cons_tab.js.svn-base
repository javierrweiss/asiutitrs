/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AD833A02-19BB-4AFD-95FF-FC5648A84603",variableType:4}
 */
var f_preview = 0;

/**
 * @properties={typeid:35,uuid:"4E229893-648C-410F-9AEF-652F3EA9E3CC",variableType:-4}
 */
var fmedi = null;

/**
 * @properties={typeid:35,uuid:"EF3051FB-62CA-42D3-A97C-723F10BECA22",variableType:-4}
 */
var f_cerrarForm = false;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9A3DFA19-D251-464B-8CB9-960797DA33B3"}
 */
var $campo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"401E286C-338D-412F-9461-2A1E2C090558",variableType:4}
 */
var f_edad = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AB94635C-B6FE-44E8-935E-9071345D502A",variableType:93}
 */
var f_fecha_dia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C438782A-6E47-4EFB-B1C1-608FE9208178",variableType:4}
 */
var f_hubo_turno = 0;

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E46A903F-6A2D-408B-9B57-C98704D04293"}
 */
function onHide(event) {
	return f_cerrarForm
}

/**
 * @properties={typeid:24,uuid:"686DD765-8475-4AC7-9272-270BC0F0300B"}
 */
function cerrar_window() {
	var $win = application.getWindow(application.getActiveWindow().getName());
	if($win != null){
		$win.hide()
		$win.destroy()
		}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E68508E8-33C6-4A23-8972-02611AA9F7F7"}
 */
function onAction_volver(event) {
	
	forms.fichaaneste_cons_grilla_1.elements.tab_ficha.removeAllTabs()
	f_cerrarForm = true
	var nombre_form = application.getActiveWindow().getName()
	if (nombre_form == null)
		{var $win = application.getWindow('consulta')}
	else
		{var $win = application.getWindow(application.getActiveWindow().getName())}
	if($win != null){
		$win.hide()
		$win.destroy()
		}
	
	//forms.fichaaneste_cons.onAction_buscar(event)
	//forms.fichaaneste_cons.foundset.setSelectedIndex(forms.fichaaneste_cons.fcual_es)

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A8D1EC38-F1D2-4C60-B2CB-D2F8F78716B2"}
 */
function onAction_imprimir(event) {
	f_preview = 2
	elements.esperando.visible =  true
	application.updateUI()  // se anula porque al imprimir no o quita luego xq no pasa por el final de metodo
	/*
	  - se imprime con form  fichaaneste_impr_det_1  , con numeros en las mediciones
	  - fichaaneste_impr_det tiene simbolos(imagen_media)  en las casilla de la grila => al imprimir 
	    no se comporta ok = tarda muchisimo y no los imprime en su totalidad
		//generar_ds_grilla_simbolo()
		//forms.fichaaneste_impr_det.controller.setPageFormat(210,297,10,10,5,5,1,0);
		//forms.fichaaneste_impr_det.controller.print(false,false); 
		con printpreview se muestra ok en pantalla pero cuendo imprime no pone los simbolos
		generando pdf si los muestra e imprime
	  - con forms.fichaaneste_impr_tab imrpime imagen del form de carga , pero solo se ve
	    la parte del tab panel que aparece en pantalla, tiene un ancho de 2 horas solamente
	*/
	
	/*
	//// impresion   form impr_det con simbolos
	crear_ds_grilla_simbolo()
	forms.fichaaneste_impr_det.controller.setPageFormat(210,297,15,5,3,2,1,0)
	forms.fichaaneste_impr_det.controller.print(false,false); 
	*/
	
	//// impresion  form impr_det_1  con numeros
	crear_ds_grilla()
	//forms.fichaaneste_impr_det_1.controller.setPageFormat(210,297,15,5,3,2,1,0);
	forms.fichaaneste_impr_det_1.controller.setPageFormat(210,297,15,0,5,0,1,0);
	forms.fichaaneste_impr_det_1.controller.print(false,false); 
	
	elements.esperando.visible =  false
	application.updateUI()
var a = 23

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"065C0F67-25AB-4308-BC22-DAA9A233521A"}
 */
function onShow(firstShow, event) {
	elements.tabs.tabIndex = 1
	//elements.tabs.addTab("fichaaneste_cons_grilla_1","Grilla","Grilla","",null,null,null,null,1);
}

/**
	 * @properties={typeid:24,uuid:"C3797CBA-103D-4099-BBC7-FE790CF06074"}
	 */
function crear_ds_grilla() {
		var $SQL = "SELECT min_col, tipo_medicion_cod, valor, tipo.simbolo FROM fichaaneste_det med LEFT JOIN fichaaneste_tipomedicion tipo ON tipo.codigo = med.tipo_medicion_cod where fichaaneste_cab_id = "+scopes.globals.fichaaneste_cab_id+"  order by fichaaneste_cab_id , min_col, tipo_medicion_cod"
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
						var $fec  = new Date(fecha_inicio.getFullYear(), fecha_inicio.getMonth(), fecha_inicio.getDate(), fecha_inicio.getHours(), fecha_inicio.getMinutes() + frm_ds.getValue(i,1), 0, 0)	
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
					var $fec  = new Date(fecha_inicio.getFullYear(), fecha_inicio.getMonth(), fecha_inicio.getDate(), fecha_inicio.getHours(), fecha_inicio.getMinutes() + frm_ds.getValue(i,1), 0, 0)	
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
	}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E4F63237-8E57-45AB-8C44-6ADA4AA7099F"}
 */
function onAction_ver_det(event) {

	/*
	if (grilla_horas < 3)
	{  // no se va a usar porque va a confundir con 2 formatos de impresion distintos
		forms.fichaaneste_impr_tab.controller.setPageFormat(210,297,15,5,5,5,1,0);
		forms.fichaaneste_impr_tab.controller.loadRecords(fichaaneste_cab_id)  
		//// vista previa
		f_cerrarForm = true
		forms.fichaaneste_impr_tab.controller.showPrintPreview(true)
		f_cerrarForm = false
		
		forms.fichaaneste_cons.onAction_buscar(event)
		forms.fichaaneste_cons.foundset.setSelectedIndex(forms.fichaaneste_cons.fcual_es)		
	}
	else
	{  } */

	crear_ds_grilla_simbolo()
	f_cerrarForm = true
	forms.fichaaneste_impr_det.controller.setPageFormat(210,297,10,10,5,5,1,0);
    forms.fichaaneste_impr_det.controller.showPrintPreview()
	f_cerrarForm = false

}

/**
 * @properties={typeid:24,uuid:"8A46515B-5613-4D50-9537-0B2FFD61F05B"}
 */
function crear_ds_grilla_simbolo() {
	var $SQL = "SELECT min_col, tipo_medicion_cod, valor, tipo.simbolo FROM fichaaneste_det med LEFT JOIN fichaaneste_tipomedicion tipo ON tipo.codigo = med.tipo_medicion_cod where fichaaneste_cab_id = "+scopes.globals.fichaaneste_cab_id+"  order by fichaaneste_cab_id , min_col, tipo_medicion_cod"
	var frm_ds = databaseManager.getDataSetByQuery("desal", $SQL, null, 500);
    
   	var $ds = databaseManager.createEmptyDataSet()
	$ds.addColumn('fhora_edit',1,JSColumn.TEXT)   
	$ds.addColumn('foper',2,JSColumn.TEXT)
	$ds.addColumn('fanest',3,JSColumn.TEXT)
	$ds.addColumn('fsatur',4,JSColumn.INTEGER)
	$ds.addColumn('fco2',5,JSColumn.INTEGER)
	$ds.addColumn('f200',6,JSColumn.MEDIA)
	$ds.addColumn('f190',7,JSColumn.MEDIA)
	$ds.addColumn('f180',8,JSColumn.MEDIA)
	$ds.addColumn('f170',9,JSColumn.MEDIA)
	$ds.addColumn('f160',10,JSColumn.MEDIA)
	$ds.addColumn('f150',11,JSColumn.MEDIA)
	$ds.addColumn('f140',12,JSColumn.MEDIA)
	$ds.addColumn('f130',13,JSColumn.MEDIA)
	$ds.addColumn('f120',14,JSColumn.MEDIA)
	$ds.addColumn('f110',15,JSColumn.MEDIA)
	$ds.addColumn('f100',16,JSColumn.MEDIA)
	$ds.addColumn('f90',17,JSColumn.MEDIA)
	$ds.addColumn('f80',18,JSColumn.MEDIA)
	$ds.addColumn('f70',19,JSColumn.MEDIA)
	$ds.addColumn('f60',20,JSColumn.MEDIA)
	$ds.addColumn('f50',21,JSColumn.MEDIA)
	$ds.addColumn('f40',22,JSColumn.MEDIA)
	$ds.addColumn('f30',23,JSColumn.MEDIA)
	$ds.addColumn('f20',24,JSColumn.MEDIA)
	$ds.addColumn('f10',25,JSColumn.MEDIA)
	var $max   = frm_ds.getMaxRowIndex()
	
	var $medi  = null
	var $fila  = null
	var $hora_edit = ' ';
	var $satur = null
	var $co2   = null
	var $oper  = null
	var $anest = null
	
	if ($max > 0){
		for(var i = 1; i <= $max; i++){
			if ($fila == null)   // primera pasada
			{	$fila = frm_ds.getValue(i,1)
					var $fec  = new Date(fecha_inicio.getFullYear(), fecha_inicio.getMonth(), fecha_inicio.getDate(), fecha_inicio.getHours(), fecha_inicio.getMinutes() + frm_ds.getValue(i,1), 0, 0)	
				var $min  = $fec.getMinutes()
				var $hora = $fec.getHours()
				if ($min < 10)
					{$min = '0' + $min}	
				if ($hora < 10)
					{$hora = '0' + $hora}
				$hora_edit = $hora +':' + $min
				var $columnas = new Array();
				for(var j = 1; j <= 20; j++)
					{$columnas [j - 1] = null}
			}
			
			if ($fila != frm_ds.getValue(i,1))   // cambia de horario
			{
				$ds.addRow([$hora_edit,$oper,$anest,$satur,$co2, 	
				$columnas[0],$columnas[1],$columnas[2],$columnas[3],$columnas[4],$columnas[5],$columnas[6],$columnas[7],$columnas[8],$columnas[9],$columnas[10],$columnas[11],$columnas[12],$columnas[13],$columnas[14],$columnas[15],$columnas[16],$columnas[17],$columnas[18],$columnas[19]])
			
				$fila = frm_ds.getValue(i,1)			
				$satur = null
				$co2   = null
				$oper  = null
				$anest = null
				
				var $fec  = new Date(fecha_inicio.getFullYear(), fecha_inicio.getMonth(), fecha_inicio.getDate(), fecha_inicio.getHours(), fecha_inicio.getMinutes() + frm_ds.getValue(i,1), 0, 0)	
				var $min  = $fec.getMinutes()
				var $hora = $fec.getHours()
				if ($min < 10)
					{$min = '0' + $min}	
				if ($hora < 10)
					{$hora = '0' + $hora}
				$hora_edit = $hora +':' + $min
				
				var $columnas = new Array();
				for(var j = 1; j <= 20; j++)
					{$columnas [j - 1] = null}
			}
			if (frm_ds.getValue(i,3) == 200) 
				{var $colum = 0}
			else
				{var $colum = (200 - frm_ds.getValue(i,3)) / 10 }
			
			switch(frm_ds.getValue(i,2))
				{
				case 1:   //max
					fmedi = plugins.http.getMediaData('media:///tension-max.png')
					$columnas[$colum] = fmedi 
					break;
				case 2:   // min) 
					fmedi = plugins.http.getMediaData('media:///tension-min.png')
					$columnas[$colum] = fmedi 
					break;
				case 3:   // pulso
					fmedi = plugins.http.getMediaData('media:///pulso.png')
					$columnas[$colum] = fmedi 
					break; 
				case 4:   // satur
					$satur = frm_ds.getValue(i,3).toString();
					$colum = 4
					break;
				case 5:   // CO2
					$co2   = frm_ds.getValue(i,3).toString();
					$colum = 5
					break;
				case 6:
					$anest = plugins.http.getMediaData('media:///anestesia.png')
					$colum = 2
					break;
				case 7:
					$oper  = plugins.http.getMediaData('media:///operacion.png')
					$colum = 3
					break;
				}
		} 

		$ds.addRow([$hora_edit,$oper,$anest,$satur,$co2, 	
		$columnas[0],$columnas[1],$columnas[2],$columnas[3],$columnas[4],$columnas[5],$columnas[6],$columnas[7],$columnas[8],$columnas[9],$columnas[10],$columnas[11],$columnas[12],$columnas[13],$columnas[14],$columnas[15],$columnas[16],$columnas[17],$columnas[18],$columnas[19]])
	
	var $tipos = [JSColumn.TEXT,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.TEXT,JSColumn.TEXT,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA,JSColumn.MEDIA]

	var $frm = solutionModel.getForm('fichaaneste_impr_det')
	$frm.dataSource = $ds.createDataSource('Ds_Grilla', $tipos)   
	forms.fichaaneste_impr_det.controller.recreateUI()

	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B1549D89-956C-4F10-933B-816631B3EFD5"}
 */
function onAction_ver_det_1(event) {
	f_preview = 1
	elements.generando.visible =  true
	application.updateUI() 
	crear_ds_grilla()
	forms.fichaaneste_impr_det_1.controller.setPageFormat(210,297,15,5,3,2,1,0);
	f_cerrarForm = true
    forms.fichaaneste_impr_det_1.controller.showPrintPreview()
	f_cerrarForm = false
	elements.generando.visible =  false
	application.updateUI() 
}
