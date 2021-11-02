/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"11E74F97-0CF7-40D1-8E52-097CAD028DAD",variableType:93}
 */
var tmp_fecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"52BA0563-4CB1-456F-861E-4207BF21B85B",variableType:8}
 */
var tmp_quirofano = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2BC6436D-DA08-4E85-B622-C3C5C85FC064"}
 */
var html = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"16FEE5BD-B0EA-422B-8E08-0F291783BE6B"}
 */
var tempHTML = '';

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"CFD12116-1F25-46CB-ABE6-24B1963424E1",variableType:93}
 */
var fecha_impre = new Date();

/**
 * @properties={typeid:24,uuid:"9D4F25D7-F9EC-43F8-84EF-B241FF67D137"}
 */
function cargar_html() {
	if (tmp_fecha != aux_fecha){
		if (tmp_fecha != null){
			for (var j= 0; j < 9999; j++){
				if (globals.gbl_tot_fecha[j] == tmp_fecha){
					html += '<table width=100% cellpadding=1 cellspacing=0>'
		    		
				    html += '<tr>'
				    html += '</tr>'
					
			        html += '<tr>'
			        html += '<td width="35%">' + ' ' + '</td>' 
			        html += '<td width="10%">' + 'Total Ambulatorio' + '</td>'
					if (globals.gbl_tot_ambulatorio[j] == null){
						html += '<td width="55%">' + '0' + '</td>'
					}else{
						html += '<td width="55%">' + globals.gbl_tot_ambulatorio[j] + '</td>'
					}
				    html += '</tr>'
				    html += '<tr>'
				    html += '<td width="25%">' + ' ' + '</td>'
			        html += '<td width="15%">' + 'Total Internados' + '</td>' 
				    if (globals.gbl_tot_internado[j] == null){
			        	html += '<td width="55%">' + '0' + '</td>'
			        }else{
			        	html += '<td width="55%">' + globals.gbl_tot_internado[j] + '</td>'
				    }
				    html += '</tr>'
				    html += '<tr>'
				    html += '<td width="25%">' + ' ' + '</td>'
			        html += '<td width="10%">' + 'Total' + '</td>' 
			        if (globals.gbl_tot_totales[j] == null){
			        	html += '<td width="55%">' + '0' + '</td>'
			        }else{
			        	html += '<td width="55%">' + globals.gbl_tot_totales[j] + '</td>'
				    }
			        html += '</tr>'
					
				    html += '<tr>'
				    html += '</tr>'
					
				    html += '<tr>'
				    html += '<td width="25%">' + ' ' + '</td>'
			        html += '<td width="15%">' + '*** Total Urgente' + '</td>'
			        if (globals.gbl_tot_urgente[j] == null){
			        	html += '<td width="55%">' + '0' + '</td>'
			        }else{
			        	html += '<td width="55%">' + globals.gbl_tot_urgente[j] + '</td>'
				    }
				    html += '</tr>'	
			        html += '</table>'
			        	
		    		html += '<table width=100% cellpadding=1 cellspacing=0>'
			        html += '<tr>'
			        html += '<HR align="LEFT" width="1000" noshade>'
			        html += '</tr>'
			        html += '</table>'
			        j = 9999
			    }
			}
		}
		tmp_fecha = aux_fecha
	    tmp_quirofano = null
    }
    if (tmp_quirofano != aux_quirofano_nro){
    	if (tmp_quirofano != null){
    		html += '<table width=100% cellpadding=1 cellspacing=0>'
	        html += '<tr>'
	        html += '<HR align="LEFT" width="1000" noshade>'
	        html += '</tr>'
	        html += '</table>'
	    }
    	tmp_quirofano = aux_quirofano_nro
		html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'
	    html += '<td align="center" width=3%>' + '<b>' + aux_quirofano_nro + '</b>' + '</td>'
	    html += '<td align="left" width=97%>' +  '<b>' + utils.dateFormat(aux_fecha, 'dd/MM/yyyy') + '</b>' + '</td>'
	    html += '</tr>'
	    html += '</table>'
	}
	
	html += '<table width=100% cellpadding=1 cellspacing=0>'
		
	
	html += '<tr>'
	html += '<td width="3%">' + aux_hora_desde + '</td>'
	html += '<td width="3%">' + aux_hora_hasta + '</td>' 
	html += '<td width="4%">' + aux_histcli_tipo + '</td>' 
 	html += '<td width="22%">' + aux_histcli_nombre.substr(0,30) + '</td>' 
  	html += '<td width="10%">' + aux_histcli_telefono + '</td>'
  	html += '<td width="22%">' + aux_obras_nombre.substr(0,30) + '</td>'
  	html += '<td width="20%">' + aux_profesional_nombre.substr(0,25) + '</td>' 
  	html += '<td width="2%">' + aux_anes + '</td>' 
  	html += '<td width="2%">' + aux_instrumentador + '</td>'
  	html += '<td width="7%">' + aux_quirofano_estado.substr(0,10) + '</td>'
  	html += '<td width="5%">' + utils.dateFormat(aux_fecha_carga, 'dd/MM/yyyy') + '</td>'
	html += '</tr>'

		
	html += '</table>'
		
	html += '<table width=100% cellpadding=1 cellspacing=0>'
	html += '<tr>'
	html += '<td width="15%">' + ' ' + '</td>' 
	html += '<td width="31%">' + aux_intervencion + '</td>' 
	html += '<td width="27%">' + aux_practica_nombre + '</td>'
	html += '<td width="27%">' + aux_anestesista_nombre + '</td>'
	html += '</tr>'
	html += '</table>'
		
	if (aux_observaciones.substr(0,1) != ' '){
		html += '<table width=100% cellpadding=1 cellspacing=0>'
	    html += '<tr>'
	    html += '<td width="10%">' + ' ' + '</td>' 
	    html += '<td width="90%">' + aux_observaciones + '</td>' 
	    html += '</tr>'
	    html += '</table>'
	}

}

/**
 * @properties={typeid:24,uuid:"79EE90D4-5C12-455E-B3DD-FDD9CF6155F6"}
 */
function recorre_aux() {
	tempHTML = ''
	tmp_quirofano = null
	tmp_fecha = null
	var reg = forms.frm_cons_turnos_quirofano_tbl.foundset.getSize()
	if (reg > 0){
// Barra de proceso 
		forms.msg_bar_progress.elements.bean_progress.minimum = 1
		forms.msg_bar_progress.elements.bean_progress.maximum = reg	
		html = '<html><body>'
		for (var i = 1 ; i <= reg ; i++){
			forms.frm_cons_turnos_quirofano_tbl.foundset.setSelectedIndex(i)
			forms.msg_bar_progress.elements.bean_progress.value = i
			application.updateUI()
	        cargar_html()
		}
		for (var j= 0; j < 9999; j++){
			if (globals.gbl_tot_fecha[j] == tmp_fecha){
				html += '<table width=100% cellpadding=1 cellspacing=0>'
	    		
			    html += '<tr>'
			    html += '</tr>'
				
		        html += '<tr>'
		        html += '<td width="35%">' + ' ' + '</td>' 
		        html += '<td width="10%">' + 'Total Ambulatorio' + '</td>'
		        if (globals.gbl_tot_ambulatorio[j] == null){
		        	html += '<td width="55%">' + '0' + '</td>'
		        }else{
		        	html += '<td width="55%">' + globals.gbl_tot_ambulatorio[j] + '</td>'
			    }
			    html += '</tr>'
			    html += '<tr>'
			    html += '<td width="25%">' + ' ' + '</td>'
		        html += '<td width="15%">' + 'Total Internados' + '</td>' 
			    if (globals.gbl_tot_internado[j] == null){
		        	html += '<td width="55%">' + '0' + '</td>'
		        }else{
		        	html += '<td width="55%">' + globals.gbl_tot_internado[j] + '</td>'
			    }
			    html += '</tr>'
			    html += '<tr>'
			    html += '<td width="25%">' + ' ' + '</td>'
		        html += '<td width="10%">' + 'Total' + '</td>' 
			    if (globals.gbl_tot_totales[j] == null){
		        	html += '<td width="55%">' + '0' + '</td>'
		        }else{
		        	html += '<td width="55%">' + globals.gbl_tot_totales[j] + '</td>'
			    }
			    html += '</tr>'
				
			    html += '<tr>'
			    html += '</tr>'
				
			    html += '<tr>'
			    html += '<td width="25%">' + ' ' + '</td>'
		        html += '<td width="15%">' + '*** Total Urgente' + '</td>'
		        if (globals.gbl_tot_urgente[j] == null){
		        	html += '<td width="55%">' + '0' + '</td>'
		        }else{
		        	html += '<td width="55%">' + globals.gbl_tot_urgente[j] + '</td>'
			    }
			    html += '</tr>'	
		        html += '</table>'
		        j = 9999
		    }
		}

		html += '</body></html>' 
    	tempHTML = html
		
	}
}
