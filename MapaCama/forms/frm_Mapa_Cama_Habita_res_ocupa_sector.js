/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C5BA80EC-31F4-43CA-A019-EE70CE034AC1"}
 */
var frm_item = '\'\'';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F65717D0-3F0E-4979-9788-36CAD2F14E57"}
 */
var html = null;
/**
 * @properties={typeid:35,uuid:"80E1D2AE-8258-4BD1-AB22-FC38A67F1DB3",variableType:-4}
 */
var $ds2 = new Array;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"07859B66-595D-4494-BE87-C8D3B1D3CC5C"}
 */
function onShow_carga_consulta(firstShow, event) {
	//Procesar y crear nuevo Dataset
    $ds2 = databaseManager.createEmptyDataSet()
	$ds2.addColumn('aux_sector',1,JSColumn.TEXT)   
	$ds2.addColumn('aux_ocupa',2,JSColumn.NUMBER)
	$ds2.addColumn('aux_inter',3,JSColumn.NUMBER)
	$ds2.addColumn('aux_amb',4,JSColumn.NUMBER)
	$ds2.addColumn('aux_libre',5,JSColumn.NUMBER)
	$ds2.addColumn('aux_total',6,JSColumn.NUMBER)
	$ds2.addColumn('aux_por_ocupa',7,JSColumn.NUMBER)
	var i
	for (i = 0; i < 20; i++){
		if (globals.gbl_res_ocupacion[i][0] != ''){
	        $ds2.addRow([globals.gbl_res_ocupacion[i][0],globals.gbl_res_ocupacion[i][1],globals.gbl_res_ocupacion[i][2],globals.gbl_res_ocupacion[i][3],
	                     globals.gbl_res_ocupacion[i][4],globals.gbl_res_ocupacion[i][5],globals.gbl_res_ocupacion[i][6]])    
		}
	}
	var aArgs = new Array();
    var aArgs_i = new Array();
    for (i = 0; i < 19; i++){
    	if (globals.gbl_res_ocupacion[i][0] != ''){
    		html = '<html><body>'         
    		if(i%2== 0){
                html += '<TABLE border=1 cellspacing=0 cellpadding=1  BGCOLOR="#d8d8d8" FONT COLOR = "#000000" width=100%>'
    		}else{
            	html += '<TABLE border=1 cellspacing=0 cellpadding=1  BGCOLOR="#ffffff" FONT COLOR = "#000000" width=100%>' 	
            }
            html += '<tr>'
            html += '<td align=left width=140>' + globals.gbl_res_ocupacion[i][0] + '</td>'	
            html += '<td align=right width=72>' + globals.gbl_res_ocupacion[i][1] + '</td>'   
            html += '<td align=right width=72>' + globals.gbl_res_ocupacion[i][2] + '</td>'    
            html += '<td align=right width=72>' + globals.gbl_res_ocupacion[i][3] + '</td>'  
            html += '<td align=right width=72>' + globals.gbl_res_ocupacion[i][4] + '</td>'   
            html += '<td align=right width=72><B>' + globals.gbl_res_ocupacion[i][5] + '</B></td>'
            html += '<td align=right width=80>' + utils.numberFormat(globals.gbl_res_ocupacion[i][6],2) + ' % </td>'
            //html += '<td align=right width=90>' + globals.gbl_res_ocupacion[i][7] + '</td>'
            //html += '<td align=right width=10>' + '' + '</td>'             
            html += '<IMG align=right WIDTH=20 HEIGHT=20 SRC="media:///fr_nueva_vista.png" >'
	        html += '</tr>' 
	
	        html += '</TABLE>'   
            html += '</body></html>'
            aArgs.push(html)
            aArgs_i.push(globals.gbl_res_ocupacion[i][0]) 
    	}
    }	
	
    application.setValueListItems('vl_consultas_1',aArgs,aArgs_i)
	globals.gbl_consultas_1 = 1
	
	html = '<html><body>'
    html += '<TABLE border=1 cellspacing=0 cellpadding=1 width=100%>'

    html += '<tr>'
    html += '<td align=left width=140>' + 'Total' + '</td>'	
    html += '<td align=right width=72>' + globals.gbl_res_ocupacion[19][1] + '</td>'   
    html += '<td align=right width=72>' + globals.gbl_res_ocupacion[19][2] + '</td>'    
    html += '<td align=right width=72>' + globals.gbl_res_ocupacion[19][3] + '</td>'  
    html += '<td align=right width=72>' + globals.gbl_res_ocupacion[19][4] + '</td>'   
    html += '<td align=right width=72><B>' + globals.gbl_res_ocupacion[19][5] + '</B></td>'
    html += '<td align=right width=80>' + utils.numberFormat(globals.gbl_res_ocupacion[19][6],2) + ' % </td>'
    //html += '<td align=right width=90>' + '' + '</td>'
    //html += '<td align=right width=10>' + '' + '</td>'  
    html += '</tr>' 

    html += '</TABLE>'   
    html += '</body></html>'
	globals.gbl_html_prn = html
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B04EDAC8-B723-4DCD-9EA9-8FC076E88C8D"}
 */
function onAction_buscar(event) {
	var $selec = frm_item
	globals.gbl_habitacion = 0
	elements.lbl_procesando.visible = true
	application.updateUI()
	globals.gbl_sector_des = frm_item
	forms.Mapa_Cama_todos.Carga_aux(0,null,1,'',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,$selec,0) 
    elements.lbl_procesando.visible = false
    globals.gbl_habitacion = -1
    var win = application.createWindow("Det_Habita",JSWindow.MODAL_DIALOG)	
	win.title= 'Detalle de la Habitacion '
	win.resizable = false
	solutionModel.removeForm
	win.show(forms.frm_Mapa_Cama_Habita)
	application.getWindow('Det_Habita').hide()	    
	application.getWindow('Det_Habita').destroy()
	frm_item = ''
    
}
/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"7B59B469-914E-43FC-99AE-FD0469674D46"}
 */
function onAction_imprimir(event) {	
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	plugins.jasperPluginRMI.runReport($ds2,'rp_80_resumen_1.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
}
/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"717274C6-40F2-4815-9516-198B32438A1A"}
 */
function onAction_exportar_pfd(event) {	   
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	var $arch = plugins.file.showFileSaveDialog('SQ-80-' + application.getIPAddress() + '.pdf')
	if ($arch){		
		plugins.jasperPluginRMI.runReport($ds2,'rp_80_resumen_1.jasper' ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
		
		var $OS = application.getOSName();
		if (/Windows/.test($OS)) {
		    application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);	      
	    } else if (/Linux|Freebsd/.test($OS)) {
	       application.executeProgram('xdg-open', $arch);
	    } else if (/Mac/.test($OS)) {
	       application.executeProgram('open', $arch);
	    }
	}
}
/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"9EB932B8-0E99-45FF-9DA4-D61B71BB3007"}
 */
function onAction_exportar_excel(event) {
	var $arch = plugins.file.showFileSaveDialog('SQ-80-' + application.getIPAddress() + '.xls')
	if ($arch){
		plugins.jasperPluginRMI.runReport($ds2,'rp_80_resumen_2.jasper',$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.EXCEL,null)
		
		var $OS = application.getOSName();
		if (/Windows/.test($OS)) {
		    application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);	      
	    } else if (/Linux|Freebsd/.test($OS)) {
	       application.executeProgram('xdg-open', $arch);
	    } else if (/Mac/.test($OS)) {
	       application.executeProgram('open', $arch);
	    }
	}
}

