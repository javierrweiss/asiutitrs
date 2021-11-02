/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2A4E257C-F2A9-4AED-ACAD-8F598803F50F",variableType:8}
 */
var frm_tot_bruto = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"978D1C75-A99E-43B7-B463-3BF0903B8357",variableType:8}
 */
var frm_tot_neto = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"29218209-A2CF-4907-8B71-C997708C40F3",variableType:8}
 */
var frm_tot_reten = 0;


    /**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C0C31E39-1A56-48C9-B26A-29C17DC16E68"}
 * @AllowToRunInFind
 */
function onShow_inicia(firstShow, event) {
	controller.find()
	liq1    = globals.gbl_categclie
	liq2    = globals.gbl_tipmov
	liq3    = 0
	liq4    = globals.gbl_concepto
	liq5    = '< 8999'
    controller.search()
	
	elements.lbl_periodo.text = globals.gbl_periodo.toString().substr(4,2) + '/' +
	                                globals.gbl_periodo.toString().substr(0,4)
	var $Ars = new Array								
	var $SQL = "select liq5, liq8 from tbc_liquid "
	         + "where liq1 = "
	         + globals.gbl_categclie
	         + " and liq2 = "
	         + globals.gbl_tipmov
	         + " and liq3 = 0 "
	         + " and liq4 = "
	         + globals.gbl_concepto
	         + " and (liq5 = 9000 or liq5 = 9050 or liq5 = 9100 or liq5 = 9200) " 
	var $ds = databaseManager.getDataSetByQuery("maestros", $SQL,$Ars, -1)
	var $max = $ds.getMaxRowIndex()	
	frm_tot_bruto = 0
	frm_tot_neto  = 0
	frm_tot_reten = 0
	var i = 0
	if ($max != 0){
		for (i ; i <=$max; i++){
			switch ($ds.getValue(i,1)){
				case 9200: frm_tot_neto  = $ds.getValue(i,2);break;
				case 9100: frm_tot_reten = $ds.getValue(i,2);break;
				case 9050: frm_tot_bruto = frm_tot_bruto + $ds.getValue(i,2);break;
				case 9000: frm_tot_bruto = frm_tot_bruto + $ds.getValue(i,2);break;
			}
		}
	}									
	application.updateUI()
}
  
/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"61C2CBF8-3881-43DE-B631-7E3B92DB0752"}
 */
function onRender_todos(event) {
	var $rcd = event.getRecord()
	var $elemento = event.getRenderable().getName()
	var $prop = event.getRenderable()
	if ($rcd.liq5 > 4000){
		if ($elemento == 'liq8'){
            $prop.bgcolor = '#DDE7F4'
    	    $prop.fgcolor = '#DDE7F4'                    
            //$prop.border = 'LineBorder,1,#DDE7F4'
		}
    }else{
    	if ($elemento == 'liq8_ret'){
            $prop.bgcolor = '#DDE7F4'
    	    $prop.fgcolor = '#DDE7F4'                    
            //$prop.border = 'LineBorder,1,#DDE7F4'
		}	
	}		  
}