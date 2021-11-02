/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7E7828B6-61BC-44C3-931E-57D8041A2528",variableType:4}
 */
var periodo_hasta_anterior = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"05BB4D55-EE21-4F67-B8E4-472DDBA0D65C",variableType:4}
 */
var periodo_desde_anterior = 0;

/**
 * @properties={typeid:35,uuid:"226DE10D-6C34-4F24-9328-790587903A07",variableType:-4}
 */
var vector_periodo = new Array();

/**
 * @properties={typeid:35,uuid:"305E86D6-B95E-4203-9617-68D20185963C",variableType:-4}
 */
var aux_periodo_tabla_subtotal = new Array();

/**
 * @properties={typeid:35,uuid:"D01C10FD-4E77-4DD6-8658-DC961CE29675",variableType:-4}
 */
var aux_periodo_tabla_subtotal_categclie = new Array();

/**
 * @properties={typeid:35,uuid:"4BED1893-7F06-41A7-841A-64F392CCE225",variableType:-4}
 */
var aux_periodo_tabla_totalgen = new Array();

/**
 * @properties={typeid:35,uuid:"9F1B5BEF-7DF1-4E1C-8356-04FE0E9BB1DD",variableType:-4}
 */
var aux_periodo_tabla_totaltotal = new Array();

/**
 * @properties={typeid:35,uuid:"69DC29BE-429D-4661-A9C1-BF6F461A961F",variableType:-4}
 */
var aux_periodo_tabla_totalgastos = new Array();

/**
 * @properties={typeid:35,uuid:"22370DCC-B098-4D33-A061-38188BDCB05E",variableType:-4}
 */
var aux_periodo_tabla_tot = new Array();

/**
 * @properties={typeid:35,uuid:"AE16E029-46AA-4BE4-B6D7-43871D78A57A",variableType:-4}
 */
var vector = new Array();

/**
 * @properties={typeid:35,uuid:"0D85B1FA-E4C2-4ED5-B7BE-962125B9CBAB",variableType:-4}
 */
var aux_periodo_tabla_razonsoc = new Array();

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"263E75F2-30E5-452E-BDCC-504CFCC894E7",variableType:4}
 */
var frm_tot_per = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C3424667-FFDC-48B6-BC3D-52FAC87C0572",variableType:4}
 */
var frm_index = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A9F3FB8E-959A-48EA-8CC0-8552C28DB2F4",variableType:4}
 */
var frm_tot_per2 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CD161F2D-3030-4FAD-9F03-0AAC7F955DE7",variableType:4}
 */
var frm_tot_per3 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0B107539-42E5-4863-A76B-6560C3EF8229",variableType:4}
 */
var frm_encontro = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load 
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6CEA5D19-51C9-4F9A-ADF8-B176B2F57090"}
 * @AllowToRunInFind
 */
function onShow_inicia(firstShow, event) {	
	globals.tableroasis_agrupacion=2
	globals.tableroasis_comparar=1
	elements.chk_compara.visible=false
	elements.combo_tipo.visible=false
	elements.lbl_tipo.visible=false
	elements.frm_per_desde.requestFocus()
}

/**
 * Handle changed data.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"422EEC2A-DCF7-48EB-A473-7CC8DBEDAE14"}
 */
function onDataChange_controla_fecha_hasta(oldValue, newValue, event) {
		if (globals.tableroasis_periodo_hasta != null){
		   if (globals.tableroasis_periodo_hasta < globals.tableroasis_periodo_desde){
			   globals.showErrorDialog('El Período Hasta no puede ser menor al Período Desde.', null, 'Ok', null, null, null);
			   elements.frm_per_hasta.requestFocus()
			}
		}
		elements.btn_procesa.requestFocus();
		return true
	}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6D73E1B4-CE7B-4BA9-860D-CA87FF09AFB4"}
 */
function onAction_boton_procesa(event) {
	if (globals.tableroasis_periodo_desde == null){
		globals.showErrorDialog('Debe ingresar Período desde', null, 'Ok',null, null, null);
        elements.frm_per_desde.requestFocus()
    }else{
	    if (globals.tableroasis_periodo_hasta == null){
	        globals.showErrorDialog('Debe ingresar Período hasta', null, 'Ok',null, null, null);
	        elements.frm_per_hasta.requestFocus()
	    }else{
	    	if (globals.tableroasis_periodo_hasta < globals.tableroasis_periodo_desde){
	 			   globals.showErrorDialog('El Período Hasta no puede ser menor al Período Desde.', null, 'Ok', null, null, null);
	 			   elements.frm_per_hasta.requestFocus()
	    	}else{
	    		if (globals.Contar_mes(globals.tableroasis_periodo_desde,globals.tableroasis_periodo_hasta) > 12){
		 			   globals.showErrorDialog('El Rango de Período no puede ser mayor a 12', null, 'Ok', null, null, null);
		 			   elements.frm_per_hasta.requestFocus()
		    	}else{	
		    		//onAction_comparar(event)
		    		//forms.frm_cons_estado_economico_2898.elements.tabs.visible = false
				    elements.lbl_procesando.visible = true 
					elements.btn_imprime.enabled    = false
					elements.btn_exp_excel.enabled  = false
					elements.btn_exp_pdf.enabled    = false
					//elements.btn_limpiar.enabled    = false
					
					//globals.gbl_tip_compras         = 1 
					frm_encontro = 0
				    
					//Cargar Resumen
					frm_index = 1
					elements.lbl_procesando.text = 'Procesando Resumen'
		    		application.updateUI()	
		    		//forms.frm_cons_estado_eco_tp_resumen.frm_pos = 0
		    		cargar_tabla()
		   		
		    		//Cargar Detalle
		    		/*
					frm_index = 2
					elements.lbl_procesando.text = 'Procesando Detalles'
		    		application.updateUI()	
		    		cargar_tabla()		    		
		    		*/
							    		
					elements.lbl_procesando.visible = false
					elements.combo_tipo.visible=true
					elements.lbl_tipo.visible=true
					elements.lbl_procesando.text = 'Procesando'
					
		    	}
	    	}
	    }
    }	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E0D68BC-BFBB-453F-85E9-323780A9F88C"}
 */
function onAction_buscar_periodo_d(event) {
	buscar_periodo()
	if(globals.gbl_periodo_ok == 1){
		globals.tableroasis_periodo_desde = globals.gbl_periodo_gral
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5328DB65-B68E-4B3F-B9A5-8A07F5517658"}
 */
function onAction_buscar_periodo_h(event) {
	buscar_periodo()
	if(globals.gbl_periodo_ok == 1){
		globals.tableroasis_periodo_hasta = globals.gbl_periodo_gral
	}
}

/**
 * @properties={typeid:24,uuid:"408AE6F8-2360-4264-B855-4B7E44574950"}
 */
function buscar_periodo(){
	var $win = application.createWindow("pide_periodo",JSWindow.MODAL_DIALOG)	
	$win.title= 'Seleccione Período'
	$win.resizable = false
	solutionModel.removeForm
	$win.show(forms.msg_periodo)
}

/**
 * @properties={typeid:24,uuid:"DB8E10A5-6575-4370-8E8D-026FF87D2BC2"}
 * @AllowToRunInFind
 */
function cargar_tabla(){
	var $anio_aux=0
	var $mes_aux=''
	$anio_aux=globals.tableroasis_periodo_desde.getFullYear()
	var $m_aux = globals.tableroasis_periodo_desde.getMonth() + 1
	var $mes_per_aux=globals.tableroasis_periodo_desde.getMonth() + 1
	if($m_aux<10){
		$mes_aux='0'+$m_aux
	}else{
		$mes_aux=$m_aux
	}
	var $periodo_aux=$anio_aux+''+$mes_aux
	var $ds
	var $Args = new Array();

	if ($m_aux < 10){
		$m_aux = '0' + $m_aux	
	}
	var $periodo_desde = globals.tableroasis_periodo_desde.getFullYear() + '' + $m_aux
	$m_aux = globals.tableroasis_periodo_hasta.getMonth() + 1
		
	if ($m_aux < 10){
		$m_aux = '0' + $m_aux	
	}
	var $periodo_hasta = globals.tableroasis_periodo_hasta.getFullYear() + '' + $m_aux
	// esto es para hacer comparativa con periodo anterior
	if(globals.tableroasis_comparar == 1){
		$m_aux = globals.tableroasis_periodo_desde.getMonth() + 1
		
		if ($m_aux < 10){
			$m_aux = '0' + $m_aux	
		}
		periodo_desde_anterior = (globals.tableroasis_periodo_desde.getFullYear()-1) + '' + $m_aux
		$m_aux = globals.tableroasis_periodo_hasta.getMonth() + 1
		
		if ($m_aux < 10){
			$m_aux = '0' + $m_aux	
		}
		periodo_hasta_anterior = (globals.tableroasis_periodo_hasta.getFullYear()-1) + '' + $m_aux
		var $SQL
		switch (frm_index){
			case  1:
			   $SQL = "select * " 
                  +"from tbl_tablero_items "
	              +"where (periodo >= "
	              + $periodo_desde
	              +" and periodo <= "
	              + $periodo_hasta
	              +") order by orden asc, suborden asc, nivel asc, periodo asc "
	              ;break
			
		}
		$ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);		
	// termina comparativa
	}else{
		switch (frm_index){
			case  1:
				   $SQL = "select * " 
		           +"from tbl_tablero_items "
		           +"where (periodo >= "
		           + $periodo_desde
		           +" and periodo <= "
		           + $periodo_hasta
		           +") order by orden asc, suborden asc, nivel asc, periodo asc "
		           ;break
			
	    }
	    $ds = databaseManager.getDataSetByQuery("desal", $SQL, $Args, -1);
	}
	var $max = $ds.getMaxRowIndex()
	
	globals.tableroasis_meses = globals.Contar_mes(globals.tableroasis_periodo_desde,globals.tableroasis_periodo_hasta)
	vector_periodo[1]=utils.stringToNumber($periodo_aux)
	for(var p=2;p<=globals.tableroasis_meses;p++){
		if($mes_per_aux==12){
			$mes_per_aux=1
			$anio_aux++
		}else{
			$mes_per_aux++
		}
		if($mes_per_aux<10){
			$mes_aux='0'+$mes_per_aux
		}else{
			$mes_aux=$mes_per_aux
		}
		vector_periodo[p]=utils.stringToNumber($anio_aux+''+$mes_aux)
	}
	
	if ($max > 0){		
		frm_encontro = 1
	    //Procesar y crear nuevo Dataset
	   
	   
		var $ds2 = databaseManager.createEmptyDataSet()
		var $col = 0
		$ds2.addColumn('tit_1',1,JSColumn.TEXT)   
		for (var i=1; i <= 13;i++){
			$col++
		    $ds2.addColumn('col_'+ $col,($col+1),JSColumn.TEXT)
			//$ds2.addColumn('col_'+ $col,($col+1),JSColumn.NUMBER)
	 	}
	 	$ds2.addColumn('orden',15,JSColumn.NUMBER)
		$ds2.addColumn('suborden',16,JSColumn.NUMBER)
		$ds2.addColumn('nivel',17,JSColumn.NUMBER)
		$ds2.addColumn('formato',18,JSColumn.NUMBER)
		
		var ii=1
		var aux_titulo=''
		var aux_titulo_ds=''
		var jj=1
		var $col_meses=new Array()
		var $col_valores=new Array()
		var $col_valores_prom=new Array()
		var $tit_periodo=new Array()
		var $orden=0
		var $suborden=0
		var $nivel=0
		var $formato=0
		var v=0
		var existe_periodo=false
		
		var $tot_promedios=0
		var $tot_promedios_str=''
		while (ii<=$max){
			
			$orden=$ds.getValue(ii,2)
			$suborden=$ds.getValue(ii,3)
			$nivel=$ds.getValue(ii,4)
			aux_titulo = $ds.getValue(ii,5)
			$formato=$ds.getValue(ii,7)
			if($nivel==1){
				aux_titulo_ds = $ds.getValue(ii,5)
			}else{
				aux_titulo_ds = '   - '+$ds.getValue(ii,5)
			}
			$col_meses=new Array()
			$col_valores=new Array()
			$col_valores_prom=new Array()
			jj=1
			/*
			for (var x=1;x<=globals.tableroasis_meses;x++){
				if($col_valores[x]==null){
					$col_valores[x]=0
				}
			}
			*/
			$tot_promedios=0
			$tot_promedios_str=''
			while (ii<=$max&&aux_titulo==$ds.getValue(ii,5)){
				jj=vector_periodo.indexOf($ds.getValue(ii,1))
				$col_meses[jj]=$ds.getValue(ii,1)
				if($ds.getValue(ii,7)==2){
					$col_valores[jj]=utils.numberFormat($ds.getValue(ii,6),'#,##0.000')
				}else{
					$col_valores[jj]=utils.numberFormat($ds.getValue(ii,6),'####')
				}
				$col_valores_prom[jj]= $ds.getValue(ii,6)
							
				if($tit_periodo.length>0){
				 	for(var t=0;t<$tit_periodo.length&&!existe_periodo;t++){
						
						if($tit_periodo[t]==$ds.getValue(ii,1)){
							existe_periodo=true
						}
					}
					if(!existe_periodo){
						$tit_periodo[v]=$ds.getValue(ii,1)
						v++
					}else{
						existe_periodo=false
					}
				}else{
					$tit_periodo[v]=$ds.getValue(ii,1)
					v++
				}
				
				ii++
				
				
			}
			
			for (var x=1;x<=12;x++){
				if($col_valores[x]==null){
					$col_valores[x]=' '
					//$col_valores[x]=0
				}
			}
			$tot_promedios=0
			for (x=1;x<=globals.tableroasis_meses;x++){
				if($col_valores_prom[x]!=null){
					$tot_promedios=$tot_promedios+$col_valores_prom[x]
				}
			}
			$tot_promedios=$tot_promedios / globals.tableroasis_meses
			$tot_promedios_str=utils.numberFormat($tot_promedios,'#,##0.000')
			//if(aux_titulo!=null&&$col_valores[1]!=null&&$col_valores[2]!=null&&$col_valores[3]!=null&&$col_valores[4]!=null&&$col_valores[5]!=null&&$col_valores[6]!=null&&$col_valores[7]!=null&&$col_valores[8]!=null&&$col_valores[9]!=null&&$col_valores[10]!=null&&$col_valores[11]!=null&&$col_valores[12]!=null){
				$ds2.addRow(aux_titulo_ds,$col_valores[1],$col_valores[2],$col_valores[3],$col_valores[4],$col_valores[5],$col_valores[6],$col_valores[7],$col_valores[8],$col_valores[9],$col_valores[10],$col_valores[11],$col_valores[12],$tot_promedios_str,$orden,$suborden,$nivel,$formato)
			//}
		}
		var z=0
		$tit_periodo.sort()
		for(var y=0;y<$tit_periodo.length&&z<12;y++){
			if($tit_periodo[y]!=0&&$tit_periodo[y]!=''&&$tit_periodo[y]!=null){
				z++
				globals['tableroasis_fecha_per_'+z]=globals['tableroasis_fecha_per_'+z].setFullYear(utils.stringToNumber($tit_periodo[y].toString().substr(0,4)))
				globals['tableroasis_fecha_per_'+z]=globals['tableroasis_fecha_per_'+z].setMonth(utils.stringToNumber($tit_periodo[y].toString().substr(4,2))-1)
				globals['tableroasis_fecha_per_'+z]=globals['tableroasis_fecha_per_'+z].setDate(1)
				globals['tableroasis_per_'+z]="<html><body><div alig=center>"+$tit_periodo[y].toString().substr(0,4)+"<br>"+globals.getMonthName(globals['tableroasis_fecha_per_'+z],false)+"</div></body></html>"
				globals['tableroasis_compara_per_'+z]="<html><body><div alig=center>"+globals.getMonthName(globals['tableroasis_fecha_per_'+z],false)+"</div></body></html>"
			}
		}
		
		//graba total Final		
		
		$col = new Array()
		for (var j= 0; j < 12; j++){
			if (j < globals.tableroasis_meses){
				$col[j] = aux_periodo_tabla_totaltotal[j]
		    }else{
			    $col[j] = null
		    }
		}
						
		//Crear DataSource desde Dataset $ds2
		var $tipos = [JSColumn.TEXT]
		for (i=0; i < 13;i++){
			$tipos.push(JSColumn.TEXT)
			//$tipos.push(JSColumn.NUMBER)
		}
		
		$tipos.push(JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER)
	}
		var $SQL1="select * " 
                  +"from tbl_tablero_dtl_cob "
	              +"where (periodo >= "
	              + $periodo_desde
	              +" and periodo <= "
	              + $periodo_hasta
	              +") order by orden asc, suborden asc, nivel asc, obra_str asc, periodo asc "
	    var $ds1 = databaseManager.getDataSetByQuery("desal", $SQL1, null, -1);
	    var $max1 = $ds1.getMaxRowIndex()
		
		if ($max1 > 0){		
			frm_encontro = 1
		    //Procesar y crear nuevo Dataset
		    var $ds3 = databaseManager.createEmptyDataSet()
			$col = 0
			$ds3.addColumn('tit_1',1,JSColumn.TEXT)   
			for (var i=1; i <= 13;i++){
				$col++
			    $ds3.addColumn('col_'+ $col,($col+1),JSColumn.TEXT)
				//$ds2.addColumn('col_'+ $col,($col+1),JSColumn.NUMBER)
		 	}
		 	$ds3.addColumn('orden',15,JSColumn.NUMBER)
			$ds3.addColumn('suborden',16,JSColumn.NUMBER)
			$ds3.addColumn('nivel',17,JSColumn.NUMBER)

			ii=1
			aux_titulo=''
			aux_titulo_ds=''
			jj=1
			$col_meses=new Array()
			$col_valores=new Array()
			var $col_valores_totales=new Array()
			for (var y=0;y<=12;y++){
				$col_valores_totales[y]=0	
			}
			$col_valores_prom=new Array()
			$tit_periodo=new Array()
			$orden=0
			$suborden=0
			$nivel=0
			v=0
			existe_periodo=false
			var $titulo_totales=''
			$tot_promedios=0
			$tot_promedios_str=''
			while (ii<=$max1){
				
				$orden=$ds1.getValue(ii,2)
				$suborden=$ds1.getValue(ii,3)
				$nivel=$ds1.getValue(ii,4)
				$titulo_totales="Totales de "+$ds1.getValue(ii,7)
				$col_meses=new Array()
				
				
				$col_valores_totales=new Array()
				for (var y=0;y<=12;y++){
					$col_valores_totales[y]=0	
				}
				jj=1
				/*
				for (var x=1;x<=globals.tableroasis_meses;x++){
					if($col_valores[x]==null){
						$col_valores[x]=0
					}
				}
				*/
				$tot_promedios=0
				$tot_promedios_str=''
				while (ii<=$max1&&$orden==$ds1.getValue(ii,2)&&$suborden==$ds1.getValue(ii,3)){
					aux_titulo = $ds1.getValue(ii,10)
					$formato=$ds1.getValue(ii,9)
					if($nivel==2){
						aux_titulo_ds = '   - '+$ds1.getValue(ii,10)
					}else{
						aux_titulo_ds = '<html><body'
						aux_titulo_ds += '<table width=340 cellpadding=1 cellspacing=0>'
						aux_titulo_ds += '<tr>'
						aux_titulo_ds += '<td width=280>' + $ds1.getValue(ii,10) +'</td>'
						aux_titulo_ds += '<td width=50>' + " - ("+$ds1.getValue(ii,5)+")" +'</td>'
						aux_titulo_ds += '</tr>'
						aux_titulo_ds += '</table>'
						aux_titulo_ds += '</body></html>'
							
					}
					$col_valores=new Array()
					
					$col_valores_prom=new Array()
					while (ii<=$max1&&$orden==$ds1.getValue(ii,2)&&$suborden==$ds1.getValue(ii,3)&&aux_titulo==$ds1.getValue(ii,10)){
						jj=vector_periodo.indexOf($ds1.getValue(ii,1))
						$col_meses[jj]=$ds1.getValue(ii,1)
						
						if($ds1.getValue(ii,9)==2){
							$col_valores[jj]=utils.numberFormat($ds1.getValue(ii,8),'#,##0.000')
						}else{
							$col_valores[jj]=utils.numberFormat($ds1.getValue(ii,8),'####')
						}
						$col_valores_prom[jj]= $ds1.getValue(ii,8)
						
						$col_valores_totales[jj]=$col_valores_totales[jj] + $ds1.getValue(ii,8)  
							
						if($tit_periodo.length>0){
						 	for(var t=0;t<$tit_periodo.length&&!existe_periodo;t++){
								
								if($tit_periodo[t]==$ds1.getValue(ii,1)){
									existe_periodo=true
								}
							}
							if(!existe_periodo){
								$tit_periodo[v]=$ds1.getValue(ii,1)
								v++
							}else{
								existe_periodo=false
							}
						}else{
							$tit_periodo[v]=$ds1.getValue(ii,1)
							v++
						}
						ii++
						
						
					}
					
					for (var x=1;x<=12;x++){
						if($col_valores[x]==null){
							$col_valores[x]=' '
							//$col_valores[x]=0
						}
					}
					$tot_promedios=0
					for (x=1;x<=globals.tableroasis_meses;x++){
						if($col_valores_prom[x]!=null){
							$tot_promedios=$tot_promedios+$col_valores_prom[x]
						}
					}
					$tot_promedios=$tot_promedios / globals.tableroasis_meses
					if($formato==2){
						$tot_promedios_str=utils.numberFormat($tot_promedios,'#,##0.000')
					}else{
						$tot_promedios_str=utils.numberFormat($tot_promedios,'####')
					}
					
						$ds3.addRow(aux_titulo_ds,$col_valores[1],$col_valores[2],$col_valores[3],$col_valores[4],$col_valores[5],$col_valores[6],$col_valores[7],$col_valores[8],$col_valores[9],$col_valores[10],$col_valores[11],$col_valores[12],$tot_promedios_str,$orden,$suborden,$nivel)
					
				}
				if($formato==2){
					$ds3.addRow($titulo_totales,utils.numberFormat($col_valores_totales[1],'#,##0.000'),utils.numberFormat($col_valores_totales[2],'#,##0.000'),utils.numberFormat($col_valores_totales[3],'#,##0.000'),utils.numberFormat($col_valores_totales[4],'#,##0.000'),utils.numberFormat($col_valores_totales[5],'#,##0.000'),utils.numberFormat($col_valores_totales[6],'#,##0.000'),utils.numberFormat($col_valores_totales[7],'#,##0.000'),utils.numberFormat($col_valores_totales[8],'#,##0.000'),utils.numberFormat($col_valores_totales[9],'#,##0.000'),utils.numberFormat($col_valores_totales[10],'#,##0.000'),utils.numberFormat($col_valores_totales[11],'#,##0.000'),utils.numberFormat($col_valores_totales[12],'#,##0.000'),' ',$orden,$suborden,$nivel)
				}else{
					$ds3.addRow($titulo_totales,utils.numberFormat($col_valores_totales[1],'####'),utils.numberFormat($col_valores_totales[2],'####'),utils.numberFormat($col_valores_totales[3],'####'),utils.numberFormat($col_valores_totales[4],'####'),utils.numberFormat($col_valores_totales[5],'####'),utils.numberFormat($col_valores_totales[6],'####'),utils.numberFormat($col_valores_totales[7],'####'),utils.numberFormat($col_valores_totales[8],'####'),utils.numberFormat($col_valores_totales[9],'####'),utils.numberFormat($col_valores_totales[10],'####'),utils.numberFormat($col_valores_totales[11],'####'),utils.numberFormat($col_valores_totales[12],'####'),' ',$orden,$suborden,$nivel)
				}
				
			}
			z=0
			$tit_periodo.sort()
			for(y=0;y<$tit_periodo.length&&z<12;y++){
				if($tit_periodo[y]!=0&&$tit_periodo[y]!=''&&$tit_periodo[y]!=null){
					z++
					globals['tableroasis_fecha_per_'+z]=globals['tableroasis_fecha_per_'+z].setFullYear(utils.stringToNumber($tit_periodo[y].toString().substr(0,4)))
					globals['tableroasis_fecha_per_'+z]=globals['tableroasis_fecha_per_'+z].setMonth(utils.stringToNumber($tit_periodo[y].toString().substr(4,2))-1)
					globals['tableroasis_fecha_per_'+z]=globals['tableroasis_fecha_per_'+z].setDate(1)
					globals['tableroasis_per_'+z]="<html><body><div alig=center>"+$tit_periodo[y].toString().substr(0,4)+"<br>"+globals.getMonthName(globals['tableroasis_fecha_per_'+z],false)+"</div></body></html>"
					globals['tableroasis_compara_per_'+z]="<html><body><div alig=center>"+globals.getMonthName(globals['tableroasis_fecha_per_'+z],false)+"</div></body></html>"
				}
			}
			
			//graba total Final		
			
			$col = new Array()
			for (j= 0; j < 12; j++){
				if (j < globals.tableroasis_meses){
					$col[j] = aux_periodo_tabla_totaltotal[j]
			    }else{
				    $col[j] = null
			    }
			}
							
			//Crear DataSource desde Dataset $ds2
			var $tipos2 = [JSColumn.TEXT]
			for (i=0; i < 13;i++){
				$tipos2.push(JSColumn.TEXT)
				//$tipos.push(JSColumn.NUMBER)
			}
			
			$tipos2.push(JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER)
		}
	    var $frm = solutionModel.getForm('tableroasis_frm_resumen_periodos')
	    $frm.dataSource = $ds2.createDataSource('Ds_AuxTableroAsis_resumen', $tipos)
	    forms.tableroasis_frm_resumen_periodos.controller.recreateUI()
		
		var $frm2 = solutionModel.getForm('tableroasis_frm_resumen_detalle_obras')
	    $frm2.dataSource = $ds3.createDataSource('Ds_AuxTableroAsis_detalle', $tipos2)
	    forms.tableroasis_frm_resumen_detalle_obras.controller.recreateUI()
		
		cargo_periodo_anterior()
		
		elements.btn_imprime.enabled   = true
	    elements.btn_exp_excel.enabled = true
		elements.btn_exp_pdf.enabled   = true
		elements.btn_limpiar.enabled   = true
		 /*
		 forms.tableroasis_frm_resumen_periodos.foundset.find()
		 forms.tableroasis_frm_resumen_periodos.foundset['nivel']=2
		 forms.tableroasis_frm_resumen_periodos.foundset.search()
		 */
		 elements.tabless.tabIndex=2
		 application.updateUI()
	    //forms.frm_cons_estado_eco_tp_resumen.filtra_visibles()
	    //forms.frm_cons_estado_economico_2898.elements.tabs.visible = true
			    

}

/**
 * @param $ano_tit
 * @param $mes_tit
 *
 * @properties={typeid:24,uuid:"B2C05751-7AD3-4FE5-AD08-6EB4A46CC237"}
 */
function cargar_titulo_per($ano_tit, $mes_tit){
	//Carga titulos periodo

    var mes_aux =  globals.gbl_periodo_hasta.getMonth()
    var ano_aux =  globals.gbl_periodo_hasta.getFullYear() 
	globals.periodo_tabla_per = new Array()    
    
    for (j= 0; j < 12; j++){
		aux_periodo_tabla_tot[j]                = 0
		aux_periodo_tabla_subtotal[j]           = 0
		aux_periodo_tabla_totalgen[j]           = 0
		aux_periodo_tabla_razonsoc[j]           = 0
		aux_periodo_tabla_totaltotal[j]         = 0
		aux_periodo_tabla_totalgastos[j]        = 0
		aux_periodo_tabla_subtotal_categclie[j] = 0
	}
	// Vector para agrupar periodos
    var agrupa 
	var  i = 0
	var  k = 0
	var  j = 0
	var ii = 0
	var jj = 0
	switch (globals.gbl_agrupacion){
		case 1: agrupa = 1; break;
	    case 2: agrupa = 3; break;
	    case 3: agrupa = 4; break;
	    case 4: agrupa = 6; break;
	    case 5: agrupa = 12; break; 
	}
    var aux_meses = globals.gbl_meses 
	var ant_mes = 0
	var ant_ano = 0
	if (globals.gbl_comparar == 1 && globals.gbl_agrupacion != 1){
		aux_meses = aux_meses / 2
	}
    
	vector = new Array()
    while (i < globals.gbl_meses){ 
    	ant_mes = mes_aux
		ant_ano = ano_aux
    	for (j=1; j <= agrupa; j++){

    		if (ii < aux_meses){
    			vector[i] = k
			   		
    		    m_aux = mes_aux + 1
			    if (m_aux < 10){
  			  	    m_aux = '0' + m_aux	
			    }
			    globals.periodo_tabla_per[i] = ano_aux + '' + m_aux
			    mes_aux--
			    if (mes_aux == -1){
				    ano_aux --
				    mes_aux = 11
			    }
			    i++
				ii++
			}
    	}
		if (globals.gbl_comparar == 1 ){
			k++
			ant_ano = ant_ano - 1
			for (j=0; j < agrupa; j++){
				if (i < globals.gbl_meses){
					vector[i] = k
					
					
    		        m_aux = ant_mes + 1
			        if (m_aux < 10){
  			  	        m_aux = '0' + m_aux	
			        } 
			        globals.periodo_tabla_per[i] = ant_ano + '' + m_aux
			        ant_mes++
			        if (ant_mes > 11){
				        ant_ano ++
				        ant_mes = 0
			        }
				    i++
				}
			}			
		}
		k++
    }
    
    // fin vector para agrupar periodos
    
    mes_aux =  globals.gbl_periodo_hasta.getMonth()
    ano_aux =  globals.gbl_periodo_hasta.getFullYear() 
	ii = 0
	jj = 0
	var vec_mes_aux = mes_aux
	var vec_ano_aux = ano_aux
	var m_aux
	var $cambio_ano = 0
	
    m_aux = globals.gbl_periodo_desde.getMonth().toString()
	if (m_aux < 10){
	  	m_aux = '0' + m_aux	
	}
	var aux_per_desde =  globals.gbl_periodo_desde.getFullYear().toString() + m_aux 
    m_aux = mes_aux.toString()  
	if (m_aux < 10){
	  	m_aux = '0' + m_aux	
	}
	var vec_per = ano_aux.toString() + m_aux
	
	for (i= 0; i < 12; i++){
		
		
        if (i< globals.gbl_meses){
        	$ano_tit[ii] = 'Año ' + ano_aux + '       '
            $mes_tit[ii] = globals.Traer_nom_mes(mes_aux)			
             
 			if (globals.gbl_agrupacion != 1){
				var primero = vec_mes_aux
				$ano_tit[ii] = 'Año ' + vec_ano_aux + '       '
        		$mes_tit[ii] = globals.Traer_nom_mes_corto(vec_mes_aux)+ '..'
				
				for (jj=2; jj <= agrupa; jj++){
					vec_mes_aux = vec_mes_aux - 1
					
					m_aux = vec_mes_aux.toString()
					if (m_aux < 10){
					  	m_aux = '0' + m_aux	
					}
				    vec_per = vec_ano_aux.toString() + m_aux
					if(vec_per < aux_per_desde){
        		    	vec_mes_aux = globals.gbl_periodo_desde.getMonth()
						jj = 99
        		    }else{
        		    	if (vec_mes_aux == -1){
                    	    vec_mes_aux = 11
						    $ano_tit[ii] = 'Año ' + vec_ano_aux + '/' + (vec_ano_aux - 1)  + '  '
					        vec_ano_aux--
							$cambio_ano = 1
        		    	}
				    }				    			    
        		}        		
        		
				if(primero == vec_mes_aux){
					$mes_tit[ii] = globals.Traer_nom_mes(vec_mes_aux)
				}else{
					$mes_tit[ii] += globals.Traer_nom_mes_corto(vec_mes_aux) + '    '
				}
				vec_mes_aux--
				if (vec_mes_aux == -1){					
					vec_ano_aux--
					vec_mes_aux = 11
				}
        	}
            
        	if (globals.gbl_comparar == 1){
				ii++
				if (globals.gbl_agrupacion == 1){
				    $ano_tit[ii] = 'Año ' + (ano_aux - 1) + '       '
				}else{
					$ano_tit[ii] = 'Año ' + (vec_ano_aux - 1) + '       '
				}					
	            $mes_tit[ii] = $mes_tit[ii -1]
	            if (globals.gbl_agrupacion != 1 && $cambio_ano == 1){
	            	$ano_tit[ii] = 'Año ' + (vec_ano_aux -2) + '/' + (vec_ano_aux -1) + '  '
					$cambio_ano = 0
	            }
			}
        	m_aux = mes_aux + 1
			if (m_aux < 10){
			  	m_aux = '0' + m_aux	
			}			
        }else{
        	$ano_tit[ii] = ''
	        $mes_tit[ii] = ''
        }		
		ii++
	    mes_aux--
	    if (mes_aux == -1){
		    mes_aux = 11
		    ano_aux--
	    }
	} 
	
	globals.gbl_meses = k
}

/**
 * @properties={typeid:24,uuid:"9D884989-7A05-4C3E-B30E-0015D162EA61"}
 */
function buscar_formulario(){
	var $aux_form
	switch (globals.gbl_index){	    
    case  1 : $aux_form = 'frm_cons_estado_eco_tp_resumen';break;
    case  2 : $aux_form = 'frm_cons_estado_eco_tp_ventas';break;
    case  3 : if (globals.gbl_index_2 == 1){
    	          $aux_form = 'frm_cons_estado_eco_tp_compras_cc';
              }else{
                  $aux_form = 'frm_cons_estado_eco_tp_compras_ug';
              };break;
    case  4 : if (globals.gbl_index_3 == 1){
                  $aux_form = 'frm_cons_estado_eco_tp_presta_medica_cc';
              }else{
                  $aux_form = 'frm_cons_estado_eco_tp_presta_medica_ug';
              };break;
    case  5 : if (globals.gbl_index_4 == 1){
                 $aux_form = 'frm_cons_estado_eco_tp_rrhh_sec';
              }else{
                 $aux_form = 'frm_cons_estado_eco_tp_rrhh_emp';
              };break;
    case  6 : $aux_form = 'frm_cons_estado_eco_tp_finanzas_ug';break;
    case  7 : $aux_form = 'frm_cons_estado_eco_tp_impuestos';break;
    case  8 : $aux_form = 'frm_cons_estado_eco_tp_legales_ug';break;
    case  9 : $aux_form = 'frm_cons_estado_eco_tp_snd';break;
    case 10 : $aux_form = 'frm_cons_estado_eco_tp_varios';break;
	}return $aux_form
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67C4FF84-6B91-4BEF-B503-59A33F611F71"}
 * @AllowToRunInFind
 */
function onAction_expandir(event) {
	if (globals.gbl_index != 1 && globals.gbl_index != 7 && globals.gbl_index != 9 && globals.gbl_index != 10){
	    var $aux_form =	buscar_formulario()
	    forms[$aux_form].controller.sort('sector asc, tipmov asc, tipoprest_desc asc, concepto_desc asc, subconcepto_desc asc, tipo asc')	
   	    elements.lbl_procesando.visible = true
	    application.updateUI()
	    forms[$aux_form].controller.find()
	    forms[$aux_form].foundset.tipo = '5 || 6'
	    forms[$aux_form].foundset.visible = 0
	    forms[$aux_form].controller.newRecord()
	    forms[$aux_form].foundset.tipo = '4'
	    forms[$aux_form].foundset.visible = 1
	    forms[$aux_form].controller.search()
	
	    var $max = databaseManager.getFoundSetCount(forms[$aux_form].foundset)
 	
    	var i
	    for (i = 1; i <= $max ; i++){
		    forms[$aux_form].foundset.setSelectedIndex(i)
		    if (forms[$aux_form].foundset.tipo == 5 || forms[$aux_form].foundset.tipo == 6){
			forms[$aux_form].foundset.visible = 1
	        }else{
	    	    if (forms[$aux_form].foundset.tipo == 4){
				    forms[$aux_form].foundset.boton_m = 1
	    	    }
	        }
		    if(forms[$aux_form].foundset.razonsoc == 'Todos' || forms[$aux_form].foundset.categclie_desc == 'Todos'){
		        forms[$aux_form].foundset.marca_totales = 1		    
		    }
		    	
	    }
	    forms[$aux_form].filtra_visibles()
	    elements.lbl_procesando.visible = false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CF8B9D84-131B-40C1-A0E8-DE009A6C8696"}
 * @AllowToRunInFind
 */
function onAction_contraer(event) {
	if (globals.gbl_index != 1 && globals.gbl_index != 7 && globals.gbl_index != 9 && globals.gbl_index != 10){
	    var $aux_form =	buscar_formulario()
	    forms[$aux_form].controller.sort('sector asc, tipmov asc, tipoprest asc, concepto asc, subconcepto asc, tipo asc')	
   	    elements.lbl_procesando.visible = true
	    application.updateUI()
	    forms[$aux_form].controller.find()
	    forms[$aux_form].foundset.tipo = '4 || 5 || 6'
	    forms[$aux_form].foundset.visible = 1	
	    forms[$aux_form].controller.search()
    
	    var $max = databaseManager.getFoundSetCount(forms[$aux_form].foundset)
	    var i
	    for (i = 1; i <= $max ; i++){
		    forms[$aux_form].foundset.setSelectedIndex(i)
		    if (forms[$aux_form].foundset.tipo == 5 || forms[$aux_form].foundset.tipo == 6){
    			forms[$aux_form].foundset.visible = 0
	        }else{
	        	if (forms[$aux_form].foundset.tipo == 4){
			    	forms[$aux_form].foundset.boton_m = 0
	    	    }
	        }
	        if(forms[$aux_form].foundset.razonsoc == 'Todos' || forms[$aux_form].foundset.categclie_desc == 'Todos'){
		        forms[$aux_form].foundset.marca_totales = 0
	        }		    
	    }
	    forms[$aux_form].filtra_visibles()
	    elements.lbl_procesando.visible = false
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D088D295-1683-4C8A-BCD0-69D3F5452EDF"}
 */
function onAction_boton_imprimir(event) {
	var $aux_form =	buscar_formulario()
	var $rp 
	var $params = {
		lbl_ano_0:  globals.gbl_ano_tit[0],  lbl_mes_0:  globals.gbl_mes_tit[0],
		lbl_ano_1:  globals.gbl_ano_tit[1],  lbl_mes_1:  globals.gbl_mes_tit[1],
		lbl_ano_2:  globals.gbl_ano_tit[2],  lbl_mes_2:  globals.gbl_mes_tit[2],
		lbl_ano_3:  globals.gbl_ano_tit[3],  lbl_mes_3:  globals.gbl_mes_tit[3],
		lbl_ano_4:  globals.gbl_ano_tit[4],  lbl_mes_4:  globals.gbl_mes_tit[4],
		lbl_ano_5:  globals.gbl_ano_tit[5],  lbl_mes_5:  globals.gbl_mes_tit[5],
		lbl_ano_6:  globals.gbl_ano_tit[6],  lbl_mes_6:  globals.gbl_mes_tit[6],
		lbl_ano_7:  globals.gbl_ano_tit[7],  lbl_mes_7:  globals.gbl_mes_tit[7],
		lbl_ano_8:  globals.gbl_ano_tit[8],  lbl_mes_8:  globals.gbl_mes_tit[8],
		lbl_ano_9:  globals.gbl_ano_tit[9],  lbl_mes_9:  globals.gbl_mes_tit[9],
		lbl_ano_10: globals.gbl_ano_tit[10], lbl_mes_10: globals.gbl_mes_tit[10],
		lbl_ano_11: globals.gbl_ano_tit[11], lbl_mes_11: globals.gbl_mes_tit[11],
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	if (globals.gbl_meses > 4){
		$rp = 'rp_2898_2.jasper'
	}else{
		$rp = 'rp_2898_1.jasper'
	}
	 
	plugins.jasperPluginRMI.runReport(forms[$aux_form].foundset,$rp,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT,$params)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F70ADE03-C8BC-457C-9259-4DA1CC11355E"}
 */
function onAction_boton_exp_excel(event) {
	var $aux_form =	buscar_formulario()
	var $tipo = ''
	switch(globals.gbl_index){
		case 1 : $tipo = 'RESU'
			    break;
		case 2 : $tipo = 'VENT'
			    break;
		case 3 : $tipo = 'COMP'
	            break;
        case 4 : $tipo = 'PRES'
	            break;
        case 5 : $tipo = 'RRHH'
	            break;
        case 6 : $tipo = 'FINA'
	            break;
        case 7 : $tipo = 'IMPU'
                break;
        case 8 : $tipo = 'LEGA'
                break;
        case 9 : $tipo = 'SND'
                break;
        case 10: $tipo = 'VARI'
                break;
	}
	
	var $arch = plugins.file.showFileSaveDialog('SQ-2898-' + $tipo +application.getIPAddress() + '.xls')
	var $params= {
	    lbl_ano_0:  globals.gbl_ano_tit[0],  lbl_mes_0:  globals.gbl_mes_tit[0],
		lbl_ano_1:  globals.gbl_ano_tit[1],  lbl_mes_1:  globals.gbl_mes_tit[1],
		lbl_ano_2:  globals.gbl_ano_tit[2],  lbl_mes_2:  globals.gbl_mes_tit[2],
		lbl_ano_3:  globals.gbl_ano_tit[3],  lbl_mes_3:  globals.gbl_mes_tit[3],
		lbl_ano_4:  globals.gbl_ano_tit[4],  lbl_mes_4:  globals.gbl_mes_tit[4],
		lbl_ano_5:  globals.gbl_ano_tit[5],  lbl_mes_5:  globals.gbl_mes_tit[5],
		lbl_ano_6:  globals.gbl_ano_tit[6],  lbl_mes_6:  globals.gbl_mes_tit[6],
		lbl_ano_7:  globals.gbl_ano_tit[7],  lbl_mes_7:  globals.gbl_mes_tit[7],
		lbl_ano_8:  globals.gbl_ano_tit[8],  lbl_mes_8:  globals.gbl_mes_tit[8],
		lbl_ano_9:  globals.gbl_ano_tit[9],  lbl_mes_9:  globals.gbl_mes_tit[9],
		lbl_ano_10: globals.gbl_ano_tit[10], lbl_mes_10: globals.gbl_mes_tit[10],
		lbl_ano_11: globals.gbl_ano_tit[11], lbl_mes_11: globals.gbl_mes_tit[11]
	}
	if ($arch){
		plugins.jasperPluginRMI.runReport(forms[$aux_form].foundset,'rp_2898_3.jasper',$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.EXCEL,$params)
		application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C56708D0-9F7A-4A55-907C-108299EF44F3"}
 */
function onAction_boron_exp_pdf(event) {
	var $aux_form =	buscar_formulario()
	var $arch = plugins.file.showFileSaveDialog('SQ-2898-' + application.getIPAddress() + '.pdf')
	var $rp 
	var $params = {
		lbl_ano_0:  globals.gbl_ano_tit[0],  lbl_mes_0:  globals.gbl_mes_tit[0],
		lbl_ano_1:  globals.gbl_ano_tit[1],  lbl_mes_1:  globals.gbl_mes_tit[1],
		lbl_ano_2:  globals.gbl_ano_tit[2],  lbl_mes_2:  globals.gbl_mes_tit[2],
		lbl_ano_3:  globals.gbl_ano_tit[3],  lbl_mes_3:  globals.gbl_mes_tit[3],
		lbl_ano_4:  globals.gbl_ano_tit[4],  lbl_mes_4:  globals.gbl_mes_tit[4],
		lbl_ano_5:  globals.gbl_ano_tit[5],  lbl_mes_5:  globals.gbl_mes_tit[5],
		lbl_ano_6:  globals.gbl_ano_tit[6],  lbl_mes_6:  globals.gbl_mes_tit[6],
		lbl_ano_7:  globals.gbl_ano_tit[7],  lbl_mes_7:  globals.gbl_mes_tit[7],
		lbl_ano_8:  globals.gbl_ano_tit[8],  lbl_mes_8:  globals.gbl_mes_tit[8],
		lbl_ano_9:  globals.gbl_ano_tit[9],  lbl_mes_9:  globals.gbl_mes_tit[9],
		lbl_ano_10: globals.gbl_ano_tit[10], lbl_mes_10: globals.gbl_mes_tit[10],
		lbl_ano_11: globals.gbl_ano_tit[11], lbl_mes_11: globals.gbl_mes_tit[11],
		pr_img1:"media:///logo1.png",
		pr_img2:"media:///logo2.png"
	}
	if (globals.gbl_meses > 4){
		$rp = 'rp_2898_2.jasper'
	}else{
		$rp = 'rp_2898_1.jasper'
	}	
	if ($arch){		
		plugins.jasperPluginRMI.runReport(forms[$aux_form].foundset,$rp ,$arch.getAbsolutePath(),plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,$params)
		application.executeProgram("rundll32.exe", ["url.dll,FileProtocolHandler", $arch.getAbsolutePath()]);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"57526833-D55F-45E5-8CCD-45649DBB5E2B"}
 */
function onAction_comparar(event) {
	if (globals.gbl_comparar == 1){
		if(globals.gbl_periodo_desde != null && globals.gbl_periodo_hasta != null){
		    globals.gbl_meses = globals.Contar_mes(globals.gbl_periodo_desde,globals.gbl_periodo_hasta)
			var agrupa
			switch (globals.gbl_agrupacion){
			   case 1: agrupa = 1; break;
		       case 2: agrupa = 3; break;
		       case 3: agrupa = 4; break;
		       case 4: agrupa = 6; break;
		       case 5: agrupa = 12; break;
		    }
		    globals.gbl_meses = globals.gbl_meses / agrupa
		    if(globals.gbl_meses > 6){
			    globals.showErrorDialog('No se puede comparar más de 6 columnas', null, 'Ok', null, null, null);
			    globals.gbl_comparar = 0
		    }
	    }
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0EC861FE-B73F-4047-9679-922E47A4A4D2"}
 */
function onShow_login(firstShow, event) {
	//Login
	if (globals.gbl_title == ''){
	   	var win = application.createWindow("Psw",JSWindow.MODAL_DIALOG)	
    	win.title= 'Login'
    	win.resizable = false
    	solutionModel.removeForm
    	win.show(forms.psw_login_adm)
    	//application.getWindow('Psw').hide()
	}
	//Fin login
	onShow_inicia(firstShow,event)
	
	// Filtra las solapas que puede ver cada usuario
	var ip = application.getIPAddress()
	elements.tabless.setTabEnabledAt( 1,false)
	elements.tabless.setTabEnabledAt( 2,false)
	elements.tabless.setTabEnabledAt( 3,false)
	elements.tabless.setTabEnabledAt( 4,false)
	elements.tabless.setTabEnabledAt( 5,false)
	elements.tabless.setTabEnabledAt( 6,false)
	elements.tabless.setTabEnabledAt( 7,false)
	elements.tabless.setTabEnabledAt( 8,false)
	elements.tabless.setTabEnabledAt( 9,false)
	elements.tabless.setTabEnabledAt(10,false)
	if (globals.vLega == 9283 || globals.vLega == 7337 || globals.vLega == 3441 ||
	    globals.vLega == 4483 || globals.vLega == 5273 || globals.vLega == 6886 || 
		ip == '12.100.70.4' || ip == '12.100.70.5'){		
			elements.tabless.setTabEnabledAt( 1,true)
			elements.tabless.setTabEnabledAt( 2,true)
			elements.tabless.setTabEnabledAt( 3,true)
			elements.tabless.setTabEnabledAt( 4,true)
			elements.tabless.setTabEnabledAt( 5,true)
			elements.tabless.setTabEnabledAt( 6,true)
			elements.tabless.setTabEnabledAt( 7,true)
			elements.tabless.setTabEnabledAt( 8,true)
			elements.tabless.setTabEnabledAt( 9,true)
			elements.tabless.setTabEnabledAt(10,true)	    
	}
	switch (globals.vLega){
		case  5198: elements.tabless.setTabEnabledAt(2,true)//Claudio Smocovich
	                elements.tabless.setTabEnabledAt(4,true)
					elements.tabless.tabIndex = 2; break
					
		case  8584: elements.tabless.setTabEnabledAt(2,true)//Silvia Gallo
                    elements.tabless.setTabEnabledAt(4,true)
					elements.tabless.tabIndex = 2; break
					
		case  9327: elements.tabless.setTabEnabledAt(2,true)//Carlos Longo
                    elements.tabless.setTabEnabledAt(4,true)
					elements.tabless.tabIndex = 2; break
					
		case  2117: elements.tabless.setTabEnabledAt(3,true)//María Cristina Barreiro
		            elements.tabless.setTabEnabledAt(9,true)
					elements.tabless.tabIndex = 3; break
					
		case  4940: elements.tabless.setTabEnabledAt(3,true)//Ocampo Gonzalo
		            elements.tabless.setTabEnabledAt(9,true)
					elements.tabless.tabIndex = 3; break
		            
		case  3544: elements.tabless.setTabEnabledAt(5,true)
		            elements.tabless.tabIndex = 5; break //Oscar Miñan
				
		case  7973: elements.tabless.setTabEnabledAt(6,true)
		            elements.tabless.tabIndex = 6; break //Sergio Greco
		
		case  7959: elements.tabless.setTabEnabledAt(8,true)
		            elements.tabless.tabIndex = 8; break //Cesar Abatti           		
     }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6A17B3B1-4E2A-40E8-898C-F9C173499227"}
 */
function onActionFechaDesde(event) {
	elements.frm_per_hasta.requestFocus();
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"948F0382-30A0-49DE-AEEE-46AC626DED67"}
 * @AllowToRunInFind
 */
function onDataChange_nivel(oldValue, newValue, event) {
	var $nivel='<='+newValue
	forms.tableroasis_frm_resumen_periodos.foundset.find()
	forms.tableroasis_frm_resumen_periodos.foundset['nivel']=$nivel
	forms.tableroasis_frm_resumen_periodos.foundset.search()
	return true
}

/**
 * TODO generated, please specify type and doc for the params
 * @param periodo
 *
 * @properties={typeid:24,uuid:"6706B30A-F8E2-4451-89BE-353DF308CBC1"}
 */
function busco_indice_periodo(periodo){
	
}

/**
 * @properties={typeid:24,uuid:"8ACD284F-7DE7-47F2-86FA-B0D45B87A5C6"}
 */
function cargo_periodo_anterior(){
	var $anio_aux=0
	var $anio_aux_desde=0
	var $mes_aux=''
	var $col_valores_ant=new Array()
	var $col_valores_act=new Array()
	$anio_aux=globals.tableroasis_periodo_desde.getFullYear()-1
	$anio_aux_desde=$anio_aux
	var $m_aux = globals.tableroasis_periodo_desde.getMonth() + 1
	var $mes_per_aux=globals.tableroasis_periodo_desde.getMonth() + 1
	if($m_aux<10){
		$mes_aux='0'+$m_aux
	}else{
		$mes_aux=$m_aux
	}
	var $periodo_aux=$anio_aux+''+$mes_aux
	var $ds
	var $Args = new Array();
	var $SQL=''
	vector_periodo[1]=utils.stringToNumber($periodo_aux)
	for(var p=2;p<=globals.tableroasis_meses;p++){
		if($mes_per_aux==12){
			$mes_per_aux=1
			$anio_aux++
		}else{
			$mes_per_aux++
		}
		if($mes_per_aux<10){
			$mes_aux='0'+$mes_per_aux
		}else{
			$mes_aux=$mes_per_aux
		}
		vector_periodo[p]=utils.stringToNumber($anio_aux+''+$mes_aux)
	}
	$SQL = "select * " 
           +"from tbl_tablero_items "
           +"where (periodo >= "
           + periodo_desde_anterior
           +" and periodo <= "
           + periodo_hasta_anterior
           +") order by orden asc, suborden asc, nivel asc, periodo asc "
    application.output(periodo_desde_anterior)	
	application.output(periodo_hasta_anterior)
	var $ds = databaseManager.getDataSetByQuery("desal", $SQL, null, -1);
	var $max = $ds.getMaxRowIndex()
	application.output($max)
	var ii=1
	var aux_titulo=''
	var aux_titulo_ds=''
	var jj=1
	var $col_meses=new Array()
	var $col_valores=new Array()
	var $col_valores_prom=new Array()
	var $tit_periodo=new Array()
	var $orden=0
	var $suborden=0
	var $nivel=0
	var $formato=0
	var v=0
	var existe_periodo=false
	
	var $tot_promedios=0
	var $tot_promedios_str=''
	var $ds2 = databaseManager.createEmptyDataSet()
	var $col = 0
	$ds2.addColumn('tit_1',1,JSColumn.TEXT)   
	for (var i=1; i <= 13;i++){
		$col++
	    $ds2.addColumn('col_'+ $col,($col+1),JSColumn.TEXT)
		//$ds2.addColumn('col_'+ $col,($col+1),JSColumn.NUMBER)
 	}
 	$ds2.addColumn('orden',15,JSColumn.NUMBER)
	$ds2.addColumn('suborden',16,JSColumn.NUMBER)
	$ds2.addColumn('nivel',17,JSColumn.NUMBER)
	$ds2.addColumn('formato',18,JSColumn.NUMBER)
	if ($max > 0){		
		frm_encontro = 1
	    //Procesar y crear nuevo Dataset
	   
	    elements.btn_imprime.enabled   = true
	    elements.btn_exp_excel.enabled = true
		elements.btn_exp_pdf.enabled   = true
		
		$col = 0
		
		
		ii=1
		aux_titulo=''
		aux_titulo_ds=''
		jj=1
		$col_meses=new Array()
		$col_valores=new Array()
		$col_valores_prom=new Array()
		$tit_periodo=new Array()
		$orden=0
		$suborden=0
		$nivel=0
		$formato=0
		v=0
		existe_periodo=false
		
		$tot_promedios=0
		$tot_promedios_str=''
		while (ii<=$max){
			
			$orden=$ds.getValue(ii,2)
			$suborden=$ds.getValue(ii,3)
			$nivel=$ds.getValue(ii,4)
			
			aux_titulo = $ds.getValue(ii,5)
			if($nivel==1){
				aux_titulo_ds = $ds.getValue(ii,5)
			}else{
				aux_titulo_ds = '   - '+$ds.getValue(ii,5)
			}
			$col_meses=new Array()
			$col_valores=new Array()
			$col_valores_prom=new Array()
			jj=1
			/*
			for (var x=1;x<=globals.tableroasis_meses;x++){
				if($col_valores[x]==null){
					$col_valores[x]=0
				}
			}
			*/
			$tot_promedios=0
			$tot_promedios_str=''
			while (ii<=$max&&aux_titulo==$ds.getValue(ii,5)){
				jj=vector_periodo.indexOf($ds.getValue(ii,1))
				$col_meses[jj]=$ds.getValue(ii,1)
				$formato=$ds.getValue(ii,7)
				if($ds.getValue(ii,7)==2){
					$col_valores[jj]=utils.numberFormat($ds.getValue(ii,6),'#,##0.000')
				}else{
					$col_valores[jj]=utils.numberFormat($ds.getValue(ii,6),'####')
				}
				$col_valores_prom[jj]= $ds.getValue(ii,6)
							
				if($tit_periodo.length>0){
				 	for(var t=0;t<$tit_periodo.length&&!existe_periodo;t++){
						
						if($tit_periodo[t]==$ds.getValue(ii,1)){
							existe_periodo=true
						}
					}
					if(!existe_periodo){
						$tit_periodo[v]=$ds.getValue(ii,1)
						v++
					}else{
						existe_periodo=false
					}
				}else{
					$tit_periodo[v]=$ds.getValue(ii,1)
					v++
				}
				ii++
				
				
			}
			
			for (var x=1;x<=12;x++){
				if($col_valores[x]==null){
					$col_valores[x]=' '
					//$col_valores[x]=0
				}
			}
			$tot_promedios=0
			for (x=1;x<=globals.tableroasis_meses;x++){
				if($col_valores_prom[x]!=null){
					$tot_promedios=$tot_promedios+$col_valores_prom[x]
				}
			}
			$tot_promedios=$tot_promedios / globals.tableroasis_meses
			$tot_promedios_str=utils.numberFormat($tot_promedios,'#,##0.000')
	
				$ds2.addRow("Año "+$anio_aux_desde,$col_valores[1],$col_valores[2],$col_valores[3],$col_valores[4],$col_valores[5],$col_valores[6],$col_valores[7],$col_valores[8],$col_valores[9],$col_valores[10],$col_valores[11],$col_valores[12],$tot_promedios_str,$orden,$suborden,$nivel,$formato)
				
			for(var s=1;s<=12;s++){
				$col_valores_ant[s]=utils.stringToNumber($col_valores[s])
			}
		}
	}
	
	$anio_aux=0
	$mes_aux=''
	$anio_aux=globals.tableroasis_periodo_desde.getFullYear()
	$m_aux = globals.tableroasis_periodo_desde.getMonth() + 1
	$mes_per_aux=globals.tableroasis_periodo_desde.getMonth() + 1
	if($m_aux<10){
		$mes_aux='0'+$m_aux
	}else{
		$mes_aux=$m_aux
	}
	$periodo_aux=$anio_aux+''+$mes_aux
	
	$Args = new Array();
	if ($m_aux < 10){
		$m_aux = '0' + $m_aux	
	}
	var $periodo_desde = globals.tableroasis_periodo_desde.getFullYear() + '' + $m_aux
	$m_aux = globals.tableroasis_periodo_hasta.getMonth() + 1
		
	if ($m_aux < 10){
		$m_aux = '0' + $m_aux	
	}
	var $periodo_hasta = globals.tableroasis_periodo_hasta.getFullYear() + '' + $m_aux
	$SQL=''
	vector_periodo[1]=utils.stringToNumber($periodo_aux)
	for(var p=2;p<=globals.tableroasis_meses;p++){
		if($mes_per_aux==12){
			$mes_per_aux=1
			$anio_aux++
		}else{
			$mes_per_aux++
		}
		if($mes_per_aux<10){
			$mes_aux='0'+$mes_per_aux
		}else{
			$mes_aux=$mes_per_aux
		}
		vector_periodo[p]=utils.stringToNumber($anio_aux+''+$mes_aux)
	}
	$SQL = "select * " 
           +"from tbl_tablero_items "
           +"where (periodo >= "
           + $periodo_desde
           +" and periodo <= "
           + $periodo_hasta
           +") order by orden asc, suborden asc, nivel asc, periodo asc "
    	
	$ds = databaseManager.getDataSetByQuery("desal", $SQL, null, -1);
	$max = $ds.getMaxRowIndex()
	application.output($max)
	if ($max > 0){		
		frm_encontro = 1
	    //Procesar y crear nuevo Dataset
	   
	    elements.btn_imprime.enabled   = true
	    elements.btn_exp_excel.enabled = true
		elements.btn_exp_pdf.enabled   = true
		
		
		
		ii=1
		aux_titulo=''
		aux_titulo_ds=''
		jj=1
		$col_meses=new Array()
		$col_valores=new Array()
		$col_valores_prom=new Array()
		$tit_periodo=new Array()
		$orden=0
		$suborden=0
		$nivel=0
		v=0
		existe_periodo=false
		
		$tot_promedios=0
		$tot_promedios_str=''
		while (ii<=$max){
			
			$orden=$ds.getValue(ii,2)
			$suborden=$ds.getValue(ii,3)
			$nivel=$ds.getValue(ii,4)
			aux_titulo = $ds.getValue(ii,5)
			if($nivel==1){
				aux_titulo_ds = $ds.getValue(ii,5)
			}else{
				aux_titulo_ds = '   - '+$ds.getValue(ii,5)
			}
			$col_meses=new Array()
			$col_valores=new Array()
			$col_valores_prom=new Array()
			jj=1
			/*
			for (var x=1;x<=globals.tableroasis_meses;x++){
				if($col_valores[x]==null){
					$col_valores[x]=0
				}
			}
			*/
			$tot_promedios=0
			$tot_promedios_str=''
			while (ii<=$max&&aux_titulo==$ds.getValue(ii,5)){
				jj=vector_periodo.indexOf($ds.getValue(ii,1))
				$col_meses[jj]=$ds.getValue(ii,1)
				$formato=$ds.getValue(ii,7)
				if($ds.getValue(ii,7)==2){
					$col_valores[jj]=utils.numberFormat($ds.getValue(ii,6),'#,##0.000')
				}else{
					$col_valores[jj]=utils.numberFormat($ds.getValue(ii,6),'####')
				}
				$col_valores_prom[jj]= $ds.getValue(ii,6)
							
				if($tit_periodo.length>0){
				 	for( t=0;t<$tit_periodo.length&&!existe_periodo;t++){
						
						if($tit_periodo[t]==$ds.getValue(ii,1)){
							existe_periodo=true
						}
					}
					if(!existe_periodo){
						$tit_periodo[v]=$ds.getValue(ii,1)
						v++
					}else{
						existe_periodo=false
					}
				}else{
					$tit_periodo[v]=$ds.getValue(ii,1)
					v++
				}
				ii++
				
				
			}
			
			for (x=1;x<=12;x++){
				if($col_valores[x]==null){
					$col_valores[x]=' '
					//$col_valores[x]=0
				}
			}
			$tot_promedios=0
			for (x=1;x<=globals.tableroasis_meses;x++){
				if($col_valores_prom[x]!=null){
					$tot_promedios=$tot_promedios+$col_valores_prom[x]
				}
			}
			$tot_promedios=$tot_promedios / globals.tableroasis_meses
			$tot_promedios_str=utils.numberFormat($tot_promedios,'#,##0.000')
	
				$ds2.addRow("Año "+globals.tableroasis_periodo_desde.getFullYear(),$col_valores[1],$col_valores[2],$col_valores[3],$col_valores[4],$col_valores[5],$col_valores[6],$col_valores[7],$col_valores[8],$col_valores[9],$col_valores[10],$col_valores[11],$col_valores[12],$tot_promedios_str,$orden,$suborden,$nivel,$formato)
			
			for(var ss=1;ss<=12;ss++){
				$col_valores_act[ss]=utils.stringToNumber($col_valores[ss])
			}	
			
		}
	}
	
	
	var $tipos = [JSColumn.TEXT]
	for (i=0; i < 13;i++){
		$tipos.push(JSColumn.TEXT)
		//$tipos.push(JSColumn.NUMBER)
	}
	
	$tipos.push(JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER, JSColumn.NUMBER)
	var $frm = solutionModel.getForm('tableroasis_frm_resumen_comparacion_periodos')
	$frm.dataSource = $ds2.createDataSource('Ds_AuxTableroAsis_comparacion', $tipos)
	forms.tableroasis_frm_resumen_comparacion_periodos.controller.recreateUI()
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"22BF8658-447C-43AB-BC8B-8D7F86FB096C"}
 */
function onAction_btn_limpia(event) {
	forms.tableroasis_frm_resumen_comparacion_periodos.controller.deleteAllRecords()
	forms.tableroasis_frm_resumen_periodos.controller.deleteAllRecords()
	forms.tableroasis_frm_resumen_detalle_obras.controller.deleteAllRecords()
	elements.btn_imprime.enabled    = false
	elements.btn_exp_excel.enabled  = false
	elements.btn_exp_pdf.enabled    = false
	//elements.btn_limpiar.enabled    = false
	globals.tableroasis_agrupacion=2
	globals.tableroasis_comparar=1
	globals.tableroasis_periodo_desde=null
	globals.tableroasis_periodo_hasta=null
	elements.chk_compara.visible=false
	elements.combo_tipo.visible=false
	elements.lbl_tipo.visible=false
	elements.tabless.tabIndex=1
	elements.frm_per_desde.requestFocus()
}
