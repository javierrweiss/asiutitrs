/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DD7AA148-B342-4C6F-8905-60A1727FC18F",variableType:4}
 */
var frm_fec_prop = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EBFC56DD-7BED-43BF-8F40-444C064539FD",variableType:4}
 */
var frm_fec_alqu = 0;
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BDF2DC38-A9E2-4188-B761-0DEE77500AFE",variableType:93}
 */
var frm_fec_dis_prop = null;
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"2C96D6D8-012B-47BC-87C5-CE7CC3F2AEBF",variableType:93}
 */
var frm_fec_dis_alqu = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6A423C07-1641-497C-9468-0C8E7258ABF4",variableType:8}
 */
var frm_prop_uso = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1B918F38-A648-4ADC-80A9-6F89E6B2F0B6",variableType:4}
 */
var frm_prop_fser = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C04E99FD-CC33-4940-9A7D-543B4AB08138",variableType:4}
 */
var frm_prop_dis = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B6521AC9-4EFB-4112-9422-265188F40473",variableType:4}
 */
var frm_prop_tot = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"23CBCCC3-F387-4736-849D-CE8FDAB38963",variableType:4}
 */
var frm_alqu_uso = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A4CBFC13-5354-4E36-B238-C63D13E8238D",variableType:4}
 */
var frm_alqu_fser = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BF6562C7-F7B2-4E74-8D5A-9FDACEA5F4B8",variableType:4}
 */
var frm_alqu_dis = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AD0B64DE-564E-44CA-AF0A-5BF33C929ED8",variableType:4}
 */
var frm_alqu_tot = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"74A89797-BF9C-4284-970D-F91FCA37910E"}
 */
function onShow_cargar_datos(firstShow, event) {	
	var aArgs = new Array();
	var SQL = "select * " 
	        + "from tbc_respirador "
	var _ds = databaseManager.getDataSetByQuery("asistencial", SQL, aArgs, -1);
	var $max = _ds.getMaxRowIndex()
	frm_alqu_uso  = 0
	frm_alqu_fser = 0
	frm_alqu_dis  = 0
	frm_alqu_tot  = 0
	frm_prop_uso  = 0
	frm_prop_fser = 0
	frm_prop_dis  = 0
	frm_prop_tot  = 0
	frm_fec_prop  = 99999999
	frm_fec_alqu  = 0
	frm_fec_dis_prop = null
	frm_fec_dis_alqu = null
	elements.bt_buscar_p.visible = false
	elements.bt_buscar_a.visible = false
	
	var $rsp_en_uso
	var $rsp_dispon
	var $rsp_codint
	var $rsp_desde
	var $rsp_fecvenc

	
	if ($max == 0){
		globals.showWarningDialog('No hay datos que mostrar', null, 'Ok',null, null, null);
	}else{
		elements.lbl_procesando.visible = true
		for(var i = 1; i <= $max; i++){
			$rsp_codint  = _ds.getValue(i,1)
			$rsp_en_uso  = _ds.getValue(i,3)
			$rsp_dispon  = _ds.getValue(i,13)
			$rsp_desde   = _ds.getValue(i,14)
			$rsp_fecvenc = _ds.getValue(i,12)
			if ($rsp_codint == '**ALQUILER**' && $rsp_fecvenc < globals.gbl_fecha_hoy_int){				
			}else{
				if ($rsp_codint == '**ALQUILER**'){
					if($rsp_en_uso == 1){
						frm_alqu_uso++						
					}else{
						if($rsp_dispon == 1){							
							frm_alqu_dis++
							if ($rsp_desde > frm_fec_alqu){
								frm_fec_alqu = $rsp_desde
							}
						}else{							
							frm_alqu_fser++ 
						}
					}
					frm_alqu_tot++
				}else{
					if($rsp_en_uso == 1){
						frm_prop_uso++						
					}else{
						if($rsp_dispon == 1){														 
							frm_prop_dis++
							if ($rsp_desde < frm_fec_prop){
								frm_fec_prop = $rsp_desde
							}
						}else{							
							frm_prop_fser++ 
						}
					}
					frm_prop_tot++
				}
			}
		}		
		elements.lbl_procesando.visible = false
	}
	if (frm_prop_tot > 0){
		elements.bt_buscar_p.visible = true
		frm_fec_dis_prop = globals.IntegerToDate(frm_fec_prop) 
	}
	if (frm_alqu_tot > 0){
		elements.bt_buscar_a.visible = true
		frm_fec_dis_alqu = globals.IntegerToDate(frm_fec_alqu) 
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"71B58B75-B8CB-4305-A859-88248450E465"}
 */
function onAction_buscar_propio(event) {	
	globals.gbl_habitacion = 0
	elements.lbl_procesando.visible = true
	application.updateUI()
	//globals.gbl_consulta = frm_item
	forms.Mapa_Cama_todos.Carga_aux(0,null,1,'',0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,'',0) 
    elements.lbl_procesando.visible = false 
	var boton_press = event.getElementName()
	if (boton_press == 'bt_buscar_p'){
		globals.gbl_habitacion = -3
	}else{
		globals.gbl_habitacion = -4
	}
	var win = application.createWindow("Det_Habita",JSWindow.MODAL_DIALOG)	
	win.title= 'Detalle de la Habitacion '
	win.resizable = false
	solutionModel.removeForm
	win.show(forms.frm_Mapa_Cama_Habita)
	application.getWindow('Det_Habita').hide()	    
	application.getWindow('Det_Habita').destroy()
}
