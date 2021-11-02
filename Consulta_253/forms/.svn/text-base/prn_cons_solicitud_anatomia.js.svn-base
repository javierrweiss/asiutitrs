/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B8EBE150-6B2F-4455-B89D-DD1720767105"}
 */
 var html = null;
 /**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"33B6B214-86E7-42DE-9995-8850B6BF369A",variableType:4}
 */
var total_practicas = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BD985C26-1D96-42F0-B74A-3554AF11F1A1",variableType:4}
 */
var aux_max1 = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1ED367EB-D8CA-466B-AC13-BDE362CE88DF"}
 */
var tempHTML = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"8F2B9BB2-A78D-4F2B-A44E-5AF59F1683B8",variableType:93}
 */
var fecha_impre = new Date();
/**
 * @properties={typeid:24,uuid:"3A8EE6CB-4E17-461E-B2B2-113033D89B41"}
 */
function cargar_html() {
	forms.prn_cons_solicitud_anatomia.elements.prn_titulo2.visible = true
	forms.prn_cons_solicitud_anatomia.elements.prn_titulo3.visible = true

	if (globals.gbl_con_fecha_desde == null  &&
			  globals.gbl_con_fecha_hasta == null)  { 
		forms.prn_cons_solicitud_anatomia.elements.prn_titulo3.visible = false
		forms.prn_cons_solicitud_anatomia.elements.prn_titulo2.visible = false
	}
	html += '<BR>'
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td align="left" width=4%>'  + aux_histclin_alf + '</td>'
	html += '<td align="left" width=21%>' + aux_histnom + '</td>'
	html += '<td align="left" width=7%>' + aux_nrosolic + '</td>'
	html += '<td align="left" width=7%>'  + utils.dateFormat(aux_fecsolic_3, 'dd/MM/yyyy') + '</td>'
	html += '<td align="left" width=7%>'  + utils.dateFormat(aux_fecreci, 'dd/MM/yyyy') + '</td>'
	html += '<td align="left" width=7%>'  + utils.dateFormat(aux_feccargares, 'dd/MM/yyyy') + '</td>'
	html += '<td align="left" width=7%>'  + utils.dateFormat(aux_fecentre, 'dd/MM/yyyy') + '</td>'
	html += '<td align="left" width=5%>'  + utils.numberFormat(aux_codnom, '00,00,00') + '</td>'
	html += '<td align="left" width=21%>' + aux_nome_descr + '</td>'
	html += '<td align="left" width=7%>'  + aux_cantidad + '</td>'
	html += '</tr>'
	html += '</table>'
	html += '<BR>'
	// Sumar totales
	var posi = 0 
    for (var j= 0; j <= aux_max1; j++){
    	if (globals.gbl_total_practicas_des[j] == aux_nome_descr){
       	    posi = j
		    j = 9999
       	}else{
       	    posi = j 
        }
	}
	if (j != 10000){
		aux_max1++
	    globals.gbl_total_practicas_cod[posi]= aux_codnom
		globals.gbl_total_practicas_des[posi]= aux_nome_descr
	}
	var aux_t_tot		
	total_practicas = total_practicas + aux_cantidad
	aux_t_tot =	utils.stringToNumber(globals.gbl_total_practicas[posi]) + aux_cantidad 
		globals.gbl_total_practicas[posi]= aux_t_tot
}

/**
 * @properties={typeid:24,uuid:"5ACB91AE-0D3D-46B4-B7C8-59AFFF0251F4"}
 */
function recorre_aux() {
	tempHTML = ''
	total_practicas = 0
	aux_max1 = 0
	//Inicializa totales
	
    for (var j= 0; globals.gbl_total_practicas[j] > 0; j++){
    	globals.gbl_total_practicas[j] = 0
		globals.gbl_total_practicas_des[j] = null
		globals.gbl_total_practicas_cod[j] = 0
    }
    var reg = forms.frm_cons_solicitud_anatomia_tbl.foundset.getSize()
	if (reg > 0){
// Barra de proceso 
		forms.msg_bar_progress.elements.bean_progress.minimum = 1
		forms.msg_bar_progress.elements.bean_progress.maximum = reg	
		
		// Para salto de Paguina	
		html +='<style type="text/css"> '
        html +='@media all {'
       	html += 'div.saltopagina{'
       	html += 'display: none;'
       	html += '}'
       	html += '}'
 
       	html += '@media print{'
       	html += 'div.saltopagina{'
        html += 'display:block;'
        html += 'page-break-before:always;'
        html += '}'
 
        /*No imprimir*/
        html += '.oculto {display:none}'
        html += '}' 
        html += '</style>'
		
        html = '<html><body>'
        	
		for (var i = 1 ; i <= reg ; i++){
			forms.frm_cons_solicitud_anatomia_tbl.foundset.setSelectedIndex(i)
			forms.msg_bar_progress.elements.bean_progress.value = i
			application.updateUI()
	        cargar_html()
		}
		
		html += '<BR>'
		html += '<BR>'
		html += '<BR>'
		// Lista Totales
		for (j= 0; j < 9999; j++){
			if (globals.gbl_total_practicas_des[j] != null){
				if (j == 0){
					html += '<table width=100% cellpadding=1 cellspacing=0>'
	    			html += '<tr>'
		            html += '<td width="24%">' + ' ' + '</td>' 
		            html += '<td width="48%">' + 'Practicas' + '</td>'
		            html += '<td width="37%">' + 'Cantidad' + '</td>'
		            html += '</tr>'	
		            html += '</table>'
		            	
		            html += '<table width=100% cellpadding=1 cellspacing=0>'
			        html += '<tr>'
			        html += '<td  align="left" width="20%">' + ' ' + '</td>'
			        html += '<HR align="LEFT" width="550" noshade>'
			        html += '</tr>'
			        html += '</table>'
				}	
				html += '<table width=100% cellpadding=1 cellspacing=0>'
		        html += '<tr>'
		        html += '<td  align="left"  width="20%">' + ' ' + '</td>'
		        html += '<td  align="left"  width="5%">' + utils.numberFormat(globals.gbl_total_practicas_cod[j], '00,00,00') + '</td>'
		        html += '<td  align="left"  width="25%">' + globals.gbl_total_practicas_des[j] + '</td>'
		        html += '<td  align="right" width="20%">' + globals.gbl_total_practicas[j] + '</td>'
		        html += '<td  align="left"  width="30%">' + ' ' + '</td>'
		        html += '</tr>'
		        html += '</table>'
			}else{
				j = 9999
			}
	    }
		html += '<BR>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
        html += '<tr>'
        html += '<td  align="left"  width="25%">' + ' ' + '</td>'
        html += '<td  align="left"  width="25%">' + ' TOTAL GENERAL' + '</td>'
        html += '<td  align="right" width="21%">' + total_practicas + '</td>'
    	html += '<td  align="left"  width="30%">' + ' ' + '</td>'
    	html += '</tr>'
    	html += '</table>'
			
		html += '</div>'
		html += '</body></html>' 
    	tempHTML = html
	}
}
