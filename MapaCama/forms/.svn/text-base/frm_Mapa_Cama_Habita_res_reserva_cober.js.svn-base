/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"460D80CE-0624-4E59-92BD-54377F58B8FB"}
 */
var frm_item = '\'\'';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4D8A2427-4AF6-48E4-AEAE-1D09A3E5F80C"}
 */
var html = null;

/**
 * @properties={typeid:35,uuid:"903F46C5-493D-4FBC-91E7-E7A8EFD5C367",variableType:-4}
 */
var $ds2 = new Array;

/**
 * @properties={typeid:35,uuid:"BEB49124-55B5-44B3-95BF-E3BD0ECA776B",variableType:-4}
 */
var $ds2_tit = new Array;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C1D58592-29E6-4873-9DE4-A1EE20016AC8"}
 */
function onShow_carga_consulta(firstShow, event) {
	var j
	var $col
	for(j=0; j < 9; j++){
		if (globals.gbl_res_ocupacion[j][0] != null){
		    $col = 'lbl_col' + (j+1)
	        elements[$col].text = globals.gbl_res_ocupacion[j][0]
	        $ds2_tit[j]= globals.gbl_res_ocupacion[j][0]
		}
	}
	//Procesar y crear nuevo Dataset
    $ds2 = databaseManager.createEmptyDataSet()
	$ds2.addColumn('aux_cod_cober',1,JSColumn.TEXT)   
	$ds2.addColumn('aux_cober',2,JSColumn.NUMBER)
	$ds2.addColumn('aux_col1',3,JSColumn.NUMBER)
	$ds2.addColumn('aux_col2',4,JSColumn.NUMBER)
	$ds2.addColumn('aux_col3',5,JSColumn.NUMBER)
	$ds2.addColumn('aux_col4',6,JSColumn.NUMBER)
	$ds2.addColumn('aux_col5',7,JSColumn.NUMBER)
	$ds2.addColumn('aux_col6',8,JSColumn.NUMBER)
	$ds2.addColumn('aux_col7',9,JSColumn.NUMBER)
	$ds2.addColumn('aux_col8',10,JSColumn.NUMBER)
	$ds2.addColumn('aux_col9',11,JSColumn.NUMBER)
	$ds2.addColumn('aux_col10',12,JSColumn.NUMBER)
	$ds2.addColumn('aux_col11',13,JSColumn.NUMBER)
	$ds2.addColumn('aux_col12',14,JSColumn.NUMBER)
	$ds2.addColumn('aux_col13',15,JSColumn.NUMBER)
	$ds2.addColumn('aux_col14',16,JSColumn.NUMBER)
	$ds2.addColumn('aux_col15',17,JSColumn.NUMBER)	
	$ds2.addColumn('aux_total',18,JSColumn.NUMBER)
	$ds2.addColumn('aux_por',19,JSColumn.NUMBER)
	var i
	for (i = 0; i < 100; i++){
		if (globals.gbl_res_reserva_cober[i][2] != ''){
	        $ds2.addRow([globals.gbl_res_reserva_cober[i][1], globals.gbl_res_reserva_cober[i][2], globals.gbl_res_reserva_cober[i][3], globals.gbl_res_reserva_cober[i][4], 
	                     globals.gbl_res_reserva_cober[i][5], globals.gbl_res_reserva_cober[i][6], globals.gbl_res_reserva_cober[i][7], globals.gbl_res_reserva_cober[i][8],
						 globals.gbl_res_reserva_cober[i][9], globals.gbl_res_reserva_cober[i][10],globals.gbl_res_reserva_cober[i][11],globals.gbl_res_reserva_cober[i][12],
						 globals.gbl_res_reserva_cober[i][13],globals.gbl_res_reserva_cober[i][14],globals.gbl_res_reserva_cober[i][15],globals.gbl_res_reserva_cober[i][16],
						 globals.gbl_res_reserva_cober[i][17],globals.gbl_res_reserva_cober[i][18],globals.gbl_res_reserva_cober[i][19]])    
		}
	}
	var aArgs = new Array();
    var aArgs_i = new Array();
    for (i = 0; i < 100; i++){
    	if (globals.gbl_res_reserva_cober[i][1] == 0){
    		i = 100
    	}else{
    		html = '<html><body>'
            if(i%2== 0){
                html += '<TABLE border=1 cellspacing=0 cellpadding=1  BGCOLOR="#d8d8d8" FONT COLOR = "#000000" width=100%>'
    		}else{
            	html += '<TABLE border=1 cellspacing=0 cellpadding=1  BGCOLOR="#ffffff" FONT COLOR = "#000000" width=100%>' 	
            }
            html += '<tr>'
            html += '<td align=right width=40>'  + globals.gbl_res_reserva_cober[i][1] + '</td>'	
            html += '<td align=left  width=270>' + globals.gbl_res_reserva_cober[i][2] + '</td>'   
            html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[i][3] + '</td>'    
            html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[i][4] + '</td>'  
            html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[i][5] + '</td>'   
            html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[i][6] + '</td>'
            html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[i][7] + '</td>'
            html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[i][8] + '</td>'
            html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[i][9] + '</td>'
            html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[i][10] + '</td>'
            html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[i][11] + '</td>'			
            html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[i][18] + '</td>'
            html += '<td align=right width=60>'  + utils.numberFormat(globals.gbl_res_reserva_cober[i][19],2) + '</td>'        
            //html += '<td align=right width=10>' + '' + '</td>'             
            html += '<IMG align=right WIDTH=20 HEIGHT=20 SRC="media:///fr_nueva_vista.png" >'
	        html += '</tr>' 
	
	        html += '</TABLE>'   
            html += '</body></html>'
            aArgs.push(html)
            aArgs_i.push(globals.gbl_res_reserva_cober[i][1]) 
    	}
    }	
	
    application.setValueListItems('vl_consultas_1',aArgs,aArgs_i)
	globals.gbl_consultas_1 = 1
	
	html = '<html><body>'
    html += '<TABLE border=1 cellspacing=0 cellpadding=1 width=100%>'
  
    html += '<tr>'
    html += '<td align=right width=40>' + '' + '</td>'	
    html += '<td align=left  width=270>' + globals.gbl_res_reserva_cober[99][2] + '</td>'   
    html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[99][3] + '</td>'    
    html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[99][4] + '</td>'  
    html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[99][5] + '</td>'   
    html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[99][6] + '</td>'
    html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[99][7] + '</td>'
    html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[99][8] + '</td>'
    html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[99][9] + '</td>'
    html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[99][10] + '</td>'
    html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[99][11] + '</td>'
	
	html += '<td align=right width=65>'  + globals.gbl_res_reserva_cober[99][18] + '</td>'
	//html += '<td align=right width=65>' + '' + '</td>'
    //html += '<td align=right width=10>' + '' + '</td>'
    //html += '<td align=right width=40>' + '' + '</td>' 
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
 * @properties={typeid:24,uuid:"64CEBBE0-8046-4F17-85CC-B9546BDD313F"}
 */
function onAction_buscar(event) {
	var $selec = frm_item
	globals.gbl_habitacion = 0
	elements.lbl_procesando.visible = true
	application.updateUI()
	globals.gbl_consulta = frm_item
	forms.Mapa_Cama_todos.Carga_aux(0,null,1,'',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',$selec)  
    elements.lbl_procesando.visible = false
	globals.gbl_habitacion = -2
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
 * @properties={typeid:24,uuid:"800C38C8-25A9-4167-8ECE-D49CB0C28238"}
 */
function onAction_imprimir(event) {	
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_tit_col1: $ds2_tit[0],
		pr_tit_col2: $ds2_tit[1],
		pr_tit_col3: $ds2_tit[2],
		pr_tit_col4: $ds2_tit[3],
		pr_tit_col5: $ds2_tit[4],
		pr_tit_col6: $ds2_tit[5],
		pr_tit_col7: $ds2_tit[6],
		pr_tit_col8: $ds2_tit[7],
		pr_tit_col9: $ds2_tit[8],
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	plugins.jasperPluginRMI.runReport($ds2,'rp_80_resumen_cober_1.jasper',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"2BB1062B-D98C-4777-BFA7-817A79537EB6"}
 */
function onAction_exportar_pfd(event) {	   
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_tit_col1: $ds2_tit[0],
		pr_tit_col2: $ds2_tit[1],
		pr_tit_col3: $ds2_tit[2],
		pr_tit_col4: $ds2_tit[3],
		pr_tit_col5: $ds2_tit[4],
		pr_tit_col6: $ds2_tit[5],
		pr_tit_col7: $ds2_tit[6],
		pr_tit_col8: $ds2_tit[7],
		pr_tit_col9: $ds2_tit[8],
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"		
	}
	var $arch = plugins.file.showFileSaveDialog('SQ-80-' + application.getIPAddress() + '.pdf')
	if ($arch){		
		plugins.jasperPluginRMI.runReport($ds2,'rp_80_resumen_cober_1.jasper' ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
				
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
 * @properties={typeid:24,uuid:"1C282149-262D-4B48-8FA5-E3E1C349938C"}
 */
function onAction_exportar_excel(event) {
	var $params = {
		pr_titulo: elements.lbl_titulo.text,
		pr_tit_col1: $ds2_tit[0],
		pr_tit_col2: $ds2_tit[1],
		pr_tit_col3: $ds2_tit[2],
		pr_tit_col4: $ds2_tit[3],
		pr_tit_col5: $ds2_tit[4],
		pr_tit_col6: $ds2_tit[5],
		pr_tit_col7: $ds2_tit[6],
		pr_tit_col8: $ds2_tit[7],
		pr_tit_col9: $ds2_tit[8]		
	}
	var $arch = plugins.file.showFileSaveDialog('SQ-80-' + application.getIPAddress() + '.xls')
	if ($arch){
		plugins.jasperPluginRMI.runReport($ds2,'rp_80_resumen_cober_2.jasper',$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.EXCEL,$params)
		
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
