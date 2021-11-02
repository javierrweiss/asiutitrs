/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E095EA96-7A29-400B-99DB-DD9037425C52",variableType:93}
 */
var frm_fec_hoy = new Date;
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"68B8D670-EE40-4A35-85EE-76762A44561E",variableType:93}
 */
var frm_hora_hoy = new Date;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E9DD2A85-A30A-4B8A-944E-E6B5DD78C73C",variableType:4}
 */
var frm_dias_actual = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F14E2818-76BF-426E-A60F-9469B999DD1B",variableType:4}
 */
var frm_dias_ideal = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CFF3FD2E-047A-40B9-9EAE-F35AF90EF2E0"}
 */
function onShow_cargar_datos(firstShow, event) {
	frm_fec_hoy     = application.getServerTimeStamp()
	frm_hora_hoy    = application.getServerTimeStamp()
	var $fecha_desde  = globals.FormatearFecha(frm_fec_hoy,'AAAAMMDD').substr(0,6)		 
	
	elements.lbl_procesando.visible = true
	//application.updateUI()
	var aArgs = new Array();
	var SQL = "select adm_histclin, DET.Det2, DET.Det3, DET.Det8, DET.Det9, CAM.cam_utilstand " 
	        + "from tbc_admision_scroll "
			+ "left join asistencial.tbc_detalle DET on adm_histclin = DET.det1 "
			+ "left join maestros.tbc_camas CAM on DET.det7 = CAM.cam_cama and DET.det4 = CAM.cam_habi "
			+ "where adm_obrsoc = 1132 and adm_FecAltaEfec = 0 "
			+ " order by adm_FecAltaEfec asc, adm_apellido_5 asc, DET.Det1 asc, DET.Det2 asc, DET.Det3 asc "
	var _ds = databaseManager.getDataSetByQuery("admisionscroll", SQL, aArgs, -1);
	var $max = _ds.getMaxRowIndex()
	
	// Busca la cantidad de dias en el parametros
	var aArgs2 = new Array();
	var SQL2 = "select * from tbl_parametros where paramid = 28 "			
	var _ds2 = databaseManager.getDataSetByQuery("desal", SQL2, aArgs2, -1);
	var $max2 = _ds.getMaxRowIndex()
	var $dias_camas = 0
	if ($max2 > 0){
		$dias_camas = _ds2.getValue(1,4)
	}
	frm_dias_actual = 0
	frm_dias_ideal  = frm_fec_hoy.getDate() * $dias_camas
	
	var $fec_hoy       = globals.FormatearFecha(frm_fec_hoy,'AAAAMMDD')
	var $histcli       = 0
	var $ant_histcli   = 0
	var $fec_ingreso   = 0
    var $util_actual   = 0
	var $fec_salida    = 0
	var $util_stand    = 0
	
	var $fec_desde     = 0
	var $fec_hasta     = 0	
	var $cant_dias     = 0
	var $cant_tot_dias = 0
	var $total_dias_camas = new Array(91)
	for (var j = 0; j < 92; j++){
		$total_dias_camas[j]= 0
	}
	
	if ($max == 0){
		globals.showWarningDialog('No hay datos que mostrar', null, 'Ok',null, null, null);
	}else{
		elements.lbl_procesando.visible = true
		for(var i = 1; i <= $max; i++){
			$histcli     = _ds.getValue(i,1)
			if($ant_histcli != $histcli){
				$ant_histcli = $histcli
				$cant_tot_dias = 0
				$cant_dias     = 0
				$total_dias_camas[1] = $total_dias_camas[1] + 1
			}
			$fec_ingreso = _ds.getValue(i,2)
			$util_actual = _ds.getValue(i,4)
			$fec_salida  = _ds.getValue(i,5)
			$util_stand  = _ds.getValue(i,6)
			if($util_actual == 0){
				$util_actual = $util_stand
			}
			if($util_actual < 1 && $util_actual > 92){				
			}else{
				$fec_desde = $fec_ingreso
				if($fec_salida == 0){
					$fec_salida = $fec_hoy				
				}
				var $salir = 0
				do{
					var $per_desde = utils.stringToNumber($fec_desde.toString().substr(0,6))
					var $per_hasta = utils.stringToNumber($fec_salida.toString().substr(0,6))
					if($per_desde < $per_hasta){
				        $fec_hasta = $fec_desde
						var $dias_hasta = globals.Ultimo_dia_mes(utils.stringToNumber($fec_hasta.toString().substr(0,6)))
						$fec_hasta =  $fec_hasta.toString().substr(0,6) + $dias_hasta.toString()
					}else{
						$fec_hasta  = $fec_salida
						$dias_hasta = utils.stringToNumber($fec_hasta.toString().substr(6,2))
					}
					var $dias_desde = utils.stringToNumber($fec_desde.toString().substr(6,2))	
					$cant_dias = $dias_hasta - $dias_desde
				
					if($cant_dias == 0 && $cant_tot_dias == 0 && $fec_hasta == $fec_hoy){
						$cant_dias = 1
					}					
					
					$cant_tot_dias = $cant_tot_dias + $cant_dias
					if($fec_hasta != $fec_salida){
						$cant_dias     = $cant_dias +1
						$cant_tot_dias = $cant_tot_dias +1
					}
					if($fecha_desde == $per_desde){
					    $total_dias_camas[$util_actual] = $total_dias_camas[$util_actual] + $cant_dias
					}
					var $mes_desde  = utils.stringToNumber($fec_desde.toString().substr(4,2)) +1 
					var $anio_desde = utils.stringToNumber($fec_desde.toString().substr(0,4))
					if($fec_hasta == $fec_salida){
					    $salir = 1	
					}else{
						$salir = 0
					    if($mes_desde == 13){
					        $mes_desde  = 1
					        $anio_desde = $anio_desde +1
				        }
					    if($mes_desde.toString().length == 1){
						    $mes_desde = '0' + $mes_desde
					    }
					    $fec_desde = $anio_desde.toString() + $mes_desde.toString() + '01'
					}
				}
				while($salir == 0)				
			}
		}
		frm_dias_actual = 0
		for (j = 0; j < 92; j++){
			frm_dias_actual = frm_dias_actual + $total_dias_camas[j]
		}
		var aArgs2 = new Array();
		var SQL2 = "select sum(dc_DiasCamas) from tbc_dias_camas "
			     + "where dc_per = " + $fecha_desde 
				 + " and Dc_Obra = 1132 and Dc_Sector <> 7 and Dc_Sector <> 9"			 	 
		var _ds2 = databaseManager.getDataSetByQuery("asistencial", SQL2, aArgs2, -1);
		var $max2 = _ds.getMaxRowIndex()
		if($max2 > 0){
			frm_dias_actual = frm_dias_actual + _ds2.getValue(1,1)
		}
		elements.lbl_procesando.visible = false
		application.updateUI()
	}	
}