/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6EF61AD5-F4EB-4BB5-90A5-5FC9762743BB",variableType:4}
 */
var tmp_motivo_tot = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"899BAD5C-152F-4E06-8A03-D82F861A0045",variableType:4}
 */
var tmp_obra_tot = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9DFC2EA3-6FA4-4D14-AC76-C60494AC936A",variableType:4}
 */
var tmp_medico_tot = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4F4CA04C-B411-4969-958A-EF22548F1EE4",variableType:4}
 */
var tmp_especialidad_tot = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6B215FD7-B6A8-431C-BF4D-A2BA681AB3DC",variableType:4}
 */
 var aux_max1 = 0;
 /**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FA8C2BA6-9EA0-457E-AD98-87225D71121A",variableType:4}
 */
var aux_max2 = 0;
 /**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D04F8F6D-3509-4C47-992E-3239CD6A454D",variableType:4}
 */
var aux_max3 = 0;
 /**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"558D821B-6F49-418E-8A89-6E69394C10D9",variableType:4}
 */
var aux_max4 = 0;
 /**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1BA70B12-FBDF-4D3D-8CF7-24F4EB72F9BA",variableType:4}
 */
var aux_t_tot = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"27E1346A-F3A8-4934-B4FC-3C8373B546FB"}
 */
var tmp_especialidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4E9A463A-A649-48BD-9F00-A7ECF2428BC8"}
 */
var tmp_medico = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D57280B8-17AE-437E-BFCF-F5D2C0D1BCBD"}
 */
var tmp_obra = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4CD58223-C1EC-4BE0-B769-E383255DF618"}
 */
var tmp_motivo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3BDF00BA-F0AD-4833-AB95-E9BEC398DCFF"}
 */
var html = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"81FB9923-6FF6-4BEE-83F7-33B623C466BC"}
 */
var tempHTML = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A566FA6C-A35D-4A6B-A402-6BFC66688C8C",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @properties={typeid:24,uuid:"E5A32DDA-9E0D-4B8A-8222-DDBCC1905951"}
 */
function cargar_html() {	
	if (tmp_motivo != aux_quirofano_motivo_susp){
		if (globals.gbl_con_tipo_reporte != 0){
			if (tmp_motivo != null){
				
    			html += '<BR>'
			    html += '<table width=100% cellpadding=1 cellspacing=0>'
		        html += '<tr>'
		        html += '<td width="35%">'  + ' ' + '</td>'
		        html += '<td align="left" width=5%>' + 'TOTAL->' + '</td>'
		        html += '<td align="left" width=35%>' + tmp_medico + '</td>'
		        html += '<td align="right" width=10%>' + '...............................................................' + '</td>'
		        html += '<td align="left" width=15%>' + tmp_medico_tot + '</td>'
		        html += '</tr>'
		        html += '</table>'
		        html += '<BR>'	

    			html += '<BR>'
			    html += '<table width=100% cellpadding=1 cellspacing=0>'
		        html += '<tr>'
		        html += '<td width="20%">'  + ' ' + '</td>'
		        html += '<td align="left" width=5%>' + 'TOTAL->' + '</td>'
		        html += '<td align="left" width=35%>' + tmp_obra + '</td>'
		        html += '<td align="right" width=28%>' + '...............................................................' + '</td>'
		        html += '<td align="left" width=12%>' + tmp_obra_tot + '</td>'
		        html += '</tr>'
		        html += '</table>'
		        html += '<BR>'	
				
			    html += '<BR>'
			    html += '<table width=100% cellpadding=1 cellspacing=0>'
		        html += '<tr>'
		        html += '<td width="5%">'  + ' ' + '</td>'
		        html += '<td align="left" width=5%>' + 'TOTAL->' + '</td>'
		        html += '<td align="left" width=35%>' + tmp_motivo + '</td>'
		        html += '<td align="right" width=43%>' + '...............................................................' + '</td>'
		        html += '<td align="left" width=12%>' + tmp_motivo_tot + '</td>'
		        html += '</tr>'	
		        html += '</table>'
		        html += '<BR>'
			}
		}
		html += '<BR>'
		html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'
	    html += '<td align="left" width=25%>' + '<b>' + aux_quirofano_motivo_susp + '-' + '</b>' + '</td>'
	    html += '<td align="left" width=25%>' + '<b>' + aux_obras_nombre + '-' + '</b>' + '</td>'
	    html += '<td align="left" width=25%>' + '<b>' + aux_profesional_nombre + '-' + '</b>' + '</td>'
	    html += '<td align="left" width=25%>' + '<b>' + aux_profesional_espe + '-' + '</b>' + '</td>'
	    html += '</tr>'
	    html += '</table>'
	    html += '<BR>'
		tmp_motivo = aux_quirofano_motivo_susp
		tmp_motivo_tot = 0
		tmp_obra_tot = 0
		tmp_medico_tot = 0
		tmp_especialidad_tot = 0
	    tmp_obra = null
		tmp_medico = null
		tmp_especialidad = null
    }
    if (tmp_obra != aux_obras_nombre){
    	if (tmp_obra != null){
    		if (globals.gbl_con_tipo_reporte != 0){
    			
    			html += '<BR>'
			    html += '<table width=100% cellpadding=1 cellspacing=0>'
		        html += '<tr>'
		        html += '<td width="35%">'  + ' ' + '</td>'
		        html += '<td align="left" width=5%>' + 'TOTAL->' + '</td>'
		        html += '<td align="left" width=35%>' + tmp_medico + '</td>'
		        html += '<td align="right" width=10%>' + '...............................................................' + '</td>'
		        html += '<td align="left" width=15%>' + tmp_medico_tot + '</td>'
		        html += '</tr>'
		        html += '</table>'
		        html += '<BR>'	

    			html += '<BR>'
			    html += '<table width=100% cellpadding=1 cellspacing=0>'
		        html += '<tr>'
		        html += '<td width="20%">'  + ' ' + '</td>'
		        html += '<td align="left" width=5%>' + 'TOTAL->' + '</td>'
		        html += '<td align="left" width=35%>' + tmp_obra + '</td>'
		        html += '<td align="right" width=28%>' + '...............................................................' + '</td>'
		        html += '<td align="left" width=12%>' + tmp_obra_tot + '</td>'
		        html += '</tr>'
		        html += '</table>'
		        html += '<BR>'	
    		}
    		html += '<BR>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
		    html += '<tr>'
		    html += '<td align="left" width=25%>' + '<b>' + aux_quirofano_motivo_susp + '-' + '</b>' + '</td>'
		    html += '<td align="left" width=25%>' + '<b>' + aux_obras_nombre + '-' + '</b>' + '</td>'
		    html += '<td align="left" width=25%>' + '<b>' + aux_profesional_nombre + '-' + '</b>' + '</td>'
		    html += '<td align="left" width=25%>' + '<b>' + aux_profesional_espe + '-' + '</b>' + '</td>'
		    html += '</tr>'
		    html += '</table>'
		    html += '<BR>'
	    }
    	tmp_obra = aux_obras_nombre
		tmp_medico = null
		tmp_especialidad = null
		tmp_obra_tot = 0
		tmp_medico_tot = 0
		tmp_especialidad_tot = 0
	}
	if (tmp_medico != aux_profesional_nombre){
    	if (tmp_medico != null){
    		if (globals.gbl_con_tipo_reporte != 0){
        		    			
    			html += '<BR>'
			    html += '<table width=100% cellpadding=1 cellspacing=0>'
		        html += '<tr>'
		        html += '<td width="35%">'  + ' ' + '</td>'
		        html += '<td align="left" width=5%>' + 'TOTAL->' + '</td>'
		        html += '<td align="left" width=35%>' + tmp_medico + '</td>'
		        html += '<td align="right" width=10%>' + '...............................................................' + '</td>'
		        html += '<td align="left" width=15%>' + tmp_medico_tot + '</td>'
		        html += '</tr>'
		        html += '</table>'
		        html += '<BR>'	
    		}
    		html += '<BR>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
		    html += '<tr>'
		    html += '<td align="left" width=25%>' + '<b>' + aux_quirofano_motivo_susp + '-' + '</b>' + '</td>'
		    html += '<td align="left" width=25%>' + '<b>' + aux_obras_nombre + '-' + '</b>' + '</td>'
		    html += '<td align="left" width=25%>' + '<b>' + aux_profesional_nombre + '-' + '</b>' + '</td>'
		    html += '<td align="left" width=25%>' + '<b>' + aux_profesional_espe + '-' + '</b>' + '</td>'
		    html += '</tr>'
		    html += '</table>'
		    html += '<BR>'
	    }
    	tmp_medico = aux_profesional_nombre
		tmp_especialidad = null
		tmp_medico_tot = 0
		tmp_especialidad_tot = 0
	}
	if (tmp_especialidad != aux_profesional_espe){
    	if (tmp_especialidad != null){
    		html += '<BR>'
			html += '<table width=100% cellpadding=1 cellspacing=0>'
		    html += '<tr>'
		    html += '<td align="left" width=25%>' + '<b>' + aux_quirofano_motivo_susp + '-' + '</b>' + '</td>'
		    html += '<td align="left" width=25%>' + '<b>' + aux_obras_nombre + '-' + '</b>' + '</td>'
		    html += '<td align="left" width=25%>' + '<b>' + aux_profesional_nombre + '-' + '</b>' + '</td>'
		    html += '<td align="left" width=25%>' + '<b>' + aux_profesional_espe + '-' + '</b>' + '</td>'
		    html += '</tr>'
		    html += '</table>'
		    html += '<BR>'
	    }
    	tmp_especialidad = aux_profesional_espe
		tmp_especialidad_tot = 0
	}
	if (globals.gbl_con_tipo_reporte != 2){
		html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'
        html += '<td width="8%">'  +  utils.dateFormat(aux_fecha, 'dd/MM/yyyy') + '</td>'
	    html += '<td width="3%">'  + aux_quirofano_nro + '</td>'		
	    html += '<td width="6%">'  + aux_hora_desde + '</td>'
	    html += '<td width="6%">'  + aux_hora_hasta + '</td>'
	    html += '<td width="34%">' + aux_histcli_nombre.substr(0,30) + '</td>'
	    html += '<td width="8%">'  + '(' + foundset.aux_histcl_alf + ')'+'</td>'
	    html += '<td width="8%">'  + '(' + aux_histcli_tipo + ')'+'</td>'
 	    html += '<td width="24%">' + aux_intervencion + '</td>'
 	    html += '<td width="3%">'  + ' ' + '</td>'
	    html += '</tr>'
	    html += '</table>'
	}
	tmp_motivo_tot = tmp_motivo_tot + 1
	tmp_obra_tot = tmp_obra_tot + 1
	tmp_medico_tot = tmp_medico_tot + 1
	tmp_especialidad_tot = tmp_especialidad_tot + 1
	// Sumar totales
	var posi = 0 
    for (var j= 0; j <= aux_max1; j++){
    	if (globals.gbl_con_total_motivo_des[j] == aux_quirofano_motivo_susp){
       	    posi = j
		    j = 9999
       	}else{
       	    posi = j
        }
	}
	if (j != 10000){
		aux_max1++
	    globals.gbl_con_total_motivo_des[posi]= aux_quirofano_motivo_susp
	}
			
	aux_t_tot =	utils.stringToNumber(globals.gbl_con_total_motivo[posi]) + 1 
		globals.gbl_con_total_motivo[posi]= aux_t_tot
	   
	posi = 0   
	for (j= 0; j <= aux_max2; j++){
        if (globals.gbl_con_total_obra_des[j] == aux_obras_nombre){
        	posi = j
		    j = 9999
        }else{
            posi = j
        }
	}
	if (j != 10000){
		aux_max2++
	    globals.gbl_con_total_obra_des[posi]= aux_obras_nombre
	}
			
	aux_t_tot =	utils.stringToNumber(globals.gbl_con_total_obra[posi]) + 1 
	globals.gbl_con_total_obra[posi]= aux_t_tot
	
	posi = 0   
	for (j= 0; j <= aux_max3; j++){
        if (globals.gbl_con_total_medico_des[j] == aux_profesional_nombre){
       	   	posi = j
		    j = 9999
       	}else{
       	   	posi = j
        }
	}
	if (j != 10000){
		aux_max3++
		globals.gbl_con_total_medico_des[posi]= aux_profesional_nombre
	}
			
	aux_t_tot =	utils.stringToNumber(globals.gbl_con_total_medico[posi]) + 1 
	globals.gbl_con_total_medico[posi]= aux_t_tot
	
	posi = 0
	for (j= 0; j <= aux_max4; j++){
        if (globals.gbl_con_total_especialidad_des[j] == aux_profesional_espe){
       	   	posi = j
		    j = 9999
       	}else{
       	   	posi = j
        }
	}
	if (j != 10000){
	   aux_max4++
	   globals.gbl_con_total_especialidad_des[posi]= aux_profesional_espe
	}
			
	aux_t_tot =	utils.stringToNumber(globals.gbl_con_total_especialidad[posi]) + 1 
	globals.gbl_con_total_especialidad[posi]= aux_t_tot
}

/**
 * @properties={typeid:24,uuid:"EA22AA02-CF6B-40DE-8DAD-F374C719420F"}
 */
function recorre_aux() {
	tempHTML = ''
	tmp_motivo = null
	tmp_obra = null
	tmp_medico = null
	tmp_especialidad = null
	tmp_motivo_tot = 0
	tmp_obra_tot = 0
	tmp_medico_tot = 0
	tmp_especialidad_tot = 0
	aux_t_tot = 0
	aux_max1 = 0
	aux_max2 = 0
	aux_max3 = 0
	aux_max4 = 0
	if (globals.gbl_con_tipo_reporte == 2){
		elements.prn_titulo5.visible = false
	}else{
		elements.prn_titulo5.visible = true
	}
	//Inicializa totales
	
    for (var j= 0; globals.gbl_con_total_motivo[j] > 0; j++){
    	globals.gbl_con_total_motivo[j] = 0
		globals.gbl_con_total_motivo_des[j] = null
    }
    for (j= 0; globals.gbl_con_total_obra[j] > 0; j++){
	    globals.gbl_con_total_obra[j] = 0
		globals.gbl_con_total_obra_des[j] = null
    }
    for (j= 0; globals.gbl_con_total_medico[j] > 0; j++){
		globals.gbl_con_total_medico[j] = 0
		globals.gbl_con_total_medico_des[j] = null
    }
    for (j= 0; globals.gbl_con_total_especialidad[j] > 0; j++){
		globals.gbl_con_total_especialidad[j] = 0
		globals.gbl_con_total_especialidad_des[j] = null
    }
	
	var reg = forms.frm_cons_cirugias_suspendidas_tbl.foundset.getSize()
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
			forms.frm_cons_cirugias_suspendidas_tbl.foundset.setSelectedIndex(i)
			forms.msg_bar_progress.elements.bean_progress.value = i
			application.updateUI()
	        cargar_html()
		}
		
		if (globals.gbl_con_tipo_reporte != 0){
			if (tmp_motivo != null){
				
    			html += '<BR>'
			    html += '<table width=100% cellpadding=1 cellspacing=0>'
		        html += '<tr>'
		        html += '<td width="35%">'  + ' ' + '</td>'
		        html += '<td align="left" width=5%>' + 'TOTAL->' + '</td>'
		        html += '<td align="left" width=35%>' + tmp_medico + '</td>'
		        html += '<td align="right" width=10%>' + '...............................................................' + '</td>'
		        html += '<td align="left" width=15%>' + tmp_medico_tot + '</td>'
		        html += '</tr>'
		        html += '</table>'
		        html += '<BR>'	

    			html += '<BR>'
			    html += '<table width=100% cellpadding=1 cellspacing=0>'
		        html += '<tr>'
		        html += '<td width="20%">'  + ' ' + '</td>'
		        html += '<td align="left" width=5%>' + 'TOTAL->' + '</td>'
		        html += '<td align="left" width=35%>' + tmp_obra + '</td>'
		        html += '<td align="right" width=28%>' + '...............................................................' + '</td>'
		        html += '<td align="left" width=12%>' + tmp_obra_tot + '</td>'
		        html += '</tr>'
		        html += '</table>'
		        html += '<BR>'	
				
			    html += '<BR>'
			    html += '<table width=100% cellpadding=1 cellspacing=0>'
		        html += '<tr>'
		        html += '<td width="5%">'  + ' ' + '</td>'
		        html += '<td align="left" width=5%>' + 'TOTAL->' + '</td>'
		        html += '<td align="left" width=35%>' + tmp_motivo + '</td>'
		        html += '<td align="right" width=43%>' + '...............................................................' + '</td>'
		        html += '<td align="left" width=12%>' + tmp_motivo_tot + '</td>'
		        html += '</tr>'	
		        html += '</table>'
		        html += '<BR>'
			}
		}
		
		
		
		
		html += '<BR>'
		html += '<BR>'
		html += '<BR>'
		// Lista Totales
		if (globals.gbl_con_resumen_motivo == true){
			for (j= 0; j < 9999; j++){
				if (globals.gbl_con_total_motivo_des[j] != null){
					if (j == 0){
					    html += '<table width=100% cellpadding=1 cellspacing=0>'
	    			    html += '<tr>'
		                html += '<td width="15%">' + ' ' + '</td>' 
		                html += '<td width="45%">' + '** Resumen    Motivos' + '</td>'
		                html += '<td width="40%">' + 'Suspendidos' + '</td>'
		                html += '</tr>'	
			            html += '<tr>'
			            html += '<td  align="left" width="15%">' + ' ' + '</td>'
			            html += '<HR align="LEFT" width="550" noshade>'
			            html += '</tr>'
			            html += '</table>'
					}
					html += '<table width=100% cellpadding=1 cellspacing=0>'
		            html += '<tr>'
		            html += '<td  align="left" width="15%">' + ' ' + '</td>'
		            html += '<td  align="left" width="30%">' + globals.gbl_con_total_motivo_des[j] + '</td>'
		        	html += '<td  align="right" width="20%">' + globals.gbl_con_total_motivo[j] + '</td>'
		        	html += '<td  align="left" width="35%">' + ' ' + '</td>'
		        	html += '</tr>'
		        	html += '</table>'
				}else{
		            j = 9999
		        }
			}
			html += '<BR>'
			html += '<BR>'
			html += '<BR>'
		}
		if (globals.gbl_con_resumen_obra == true){
			for ( j= 0; j < 9999; j++){
				if (globals.gbl_con_total_obra_des[j] != null){
					if (j == 0){
					   html += '<table width=100% cellpadding=1 cellspacing=0>'
	    			   html += '<tr>'
		               html += '<td width="15%">' + ' ' + '</td>' 
		               html += '<td width="45%">' + '** Resumen    Obras Sociales' + '</td>'
		               html += '<td width="40%">' + 'Suspendidos' + '</td>'
		               html += '</tr>'	
			           html += '<tr>'
			           html += '<td  align="left" width="15%">' + ' ' + '</td>'
			           html += '<HR align="LEFT" width="550" noshade>'
			           html += '</tr>'
			           html += '</table>'
					}
					html += '<table width=100% cellpadding=1 cellspacing=0>'
		            html += '<tr>'
		            html += '<td  align="left" width="15%">' + ' ' + '</td>'
		            html += '<td  align="left" width="30%">' + globals.gbl_con_total_obra_des[j] + '</td>'
		        	html += '<td  align="right" width="20%">' + globals.gbl_con_total_obra[j] + '</td>'
		        	html += '<td  align="left" width="35%">' + ' ' + '</td>'
		        	html += '</tr>'
		        	html += '</table>'
				}else{
		            j = 9999
		        }
			}
			html += '<BR>'
			html += '<BR>'
			html += '<BR>'
		}
		if (globals.gbl_con_resumen_medico == true){
			for (j= 0; j < 9999; j++){
				if (globals.gbl_con_total_medico_des[j] != null){
					if (j == 0){
					   html += '<table width=100% cellpadding=1 cellspacing=0>'
	    			   html += '<tr>'
		               html += '<td width="15%">' + ' ' + '</td>' 
		               html += '<td width="45%">' + '** Resumen    Médicos' + '</td>'
		               html += '<td width="40%">' + 'Suspendidos' + '</td>'
		               html += '</tr>'	
			           html += '<tr>'
			           html += '<td  align="left" width="15%">' + ' ' + '</td>'
			           html += '<HR align="LEFT" width="550" noshade>'
			           html += '</tr>'
			           html += '</table>'
					}
					html += '<table width=100% cellpadding=1 cellspacing=0>'
		            html += '<tr>'
		            html += '<td  align="left" width="15%">' + ' ' + '</td>'
		            html += '<td  align="left" width="30%">' + globals.gbl_con_total_medico_des[j] + '</td>'
		        	html += '<td  align="right" width="20%">' + globals.gbl_con_total_medico[j] + '</td>'
		        	html += '<td  align="left" width="35%">' + ' ' + '</td>'
		        	html += '</tr>'
		        	html += '</table>'
				}else{
		            j = 9999
		        }
			}
			html += '<BR>'
			html += '<BR>'
			html += '<BR>'
		}
		if (globals.gbl_con_resumen_especialidad == true){
			for ( j= 0; j < 9999; j++){
				if (globals.gbl_con_total_especialidad_des[j] != null){
					if (j == 0){
					   html += '<table width=100% cellpadding=1 cellspacing=0>'
	    			   html += '<tr>'
		               html += '<td width="15%">' + ' ' + '</td>' 
		               html += '<td width="45%">' + '** Resumen    Especialidades' + '</td>'
		               html += '<td width="40%">' + 'Suspendidos' + '</td>'
		               html += '</tr>'	
			           html += '<tr>'
			           html += '<td  align="left" width="15%">' + ' ' + '</td>'
			           html += '<HR align="LEFT" width="550" noshade>'
			           html += '</tr>'
			           html += '</table>'
					}
					html += '<table width=100% cellpadding=1 cellspacing=0>'
		            html += '<tr>'
		            html += '<td  align="left" width="15%">' + ' ' + '</td>'
		            html += '<td  align="left" width="30%">' + globals.gbl_con_total_especialidad_des[j] + '</td>'
		        	html += '<td  align="right" width="20%">' + globals.gbl_con_total_especialidad[j] + '</td>'
		        	html += '<td  align="left" width="35%">' + ' ' + '</td>'
		        	html += '</tr>'
		        	html += '</table>'
				}else{
		            j = 9999
		        }
			}
			html += '<BR>'
			html += '<BR>'
			html += '<BR>'
		}	
		html += '</div>'
		html += '</body></html>' 
    	tempHTML = html
		
	}
}
