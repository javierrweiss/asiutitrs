/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1C287B36-C1C6-4683-B3A6-830D68BBD2EF",variableType:4}
 */
var Call_2142_autori = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BC0CB87C-4459-493A-A918-0A1B6E6C4F8D",variableType:4}
 */
var Call_2142_filtraPrest = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A419E578-212B-4514-AFE7-68557AB4832A"}
 */
var Call_2142_planX = null;

/**
 * @properties={typeid:35,uuid:"466AFB9A-48F6-45BB-A6C4-B23226AF15D0",variableType:-4}
 */
var Call_2142_ok = false;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"893C471E-6E58-4F14-88F6-22872D4FF2E2",variableType:4}
 */
var Call_2142_codiNome = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B04D20B4-9E71-4EED-A6EC-36D78C9D4149",variableType:4}
 */
var Call_2142_tipoNome = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9B20E8AA-9882-4776-8616-A80007609650",variableType:4}
 */
var Call_2142_sector = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2E4F68C6-F600-4F9E-9DB2-CBB9EE5AF94B"}
 */
var Call_2142_planX10 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1EAB35BA-6C31-4853-8C58-2A3495657A4E",variableType:4}
 */
var Call_2142_obra = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8594004B-4CFD-43BF-AE91-28575CDBBB43",variableType:4}
 */
var Call_2142_empresa = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"727CC546-F2D1-415C-997C-00FC414CFCF9",variableType:4}
 */
var Call_2142_pantNome = 0;

/**
 * @param {Number} que
 * @param {Number} sector
 * @param {Number} empresa
 * @param {Number} tiponome
 * @param {Number} codnome
 * @param {Number} obra
 * @param {String} planx10 
 * @properties={typeid:24,uuid:"0C69E86D-FBF4-4EF2-880E-D93861405968"}
 * @AllowToRunInFind
 */
function ControlCodobra(que,sector,empresa,tiponome,codnome,obra,planx10) {
	var fs_obra = databaseManager.getFoundSet("maestros","tbc_obras")
	fs_obra.find()
	fs_obra['obr_codigo']=obra
	fs_obra.search()
	if(fs_obra.getSize()>0){
		fs_obra.setSelectedIndex(1)
		if(fs_obra['obr_filtraprest']==1){
			if(planx10==''||planx10==' '||planx10=='          '){
				if(fs_obra['obr_cantplanes']==0){
					try{
						var fs_codobra1 = databaseManager.getFoundSet("asistencial","tbc_codobra")
						fs_codobra1.find()
						fs_codobra1['codoempre']=empresa
						fs_codobra1['codoobra']=obra
						fs_codobra1['codoplan']=planx10
						fs_codobra1['codosector']=sector
						fs_codobra1['codonometipo']=tiponome
						fs_codobra1['codonomecodi']=codnome
						fs_codobra1.search()
						if(fs_codobra1.getSize()>0){
							fs_codobra1.setSelectedIndex(1)
							if(fs_codobra1['codoautori']==1){
								return true
							}else{
								return false
							}
						}else{
							return false
						}	
						}catch(msg){
							grabaLogs(msg.message)
						}finally{
							grabaLogs('Paso por codobra planx10=" " Call_2142')
						}
				}else{
					var fs_plan_obra1 = databaseManager.getFoundSet("asistencial","tbc_plan_obra")
					fs_plan_obra1.find()
					fs_plan_obra1['ploobra1']=obra
					fs_plan_obra1['ploplanx10']=planx10
					fs_plan_obra1.search()
					if(fs_plan_obra1.getSize()>0){
						fs_plan_obra1.setSelectedIndex(1)
						try{
							var fs_codobra2 = databaseManager.getFoundSet("asistencial","tbc_codobra")
							fs_codobra2.find()
							fs_codobra2['codoempre']=empresa
							fs_codobra2['codoobra']=obra
							fs_codobra2['codoplan']=fs_plan_obra['ploplanx']
							fs_codobra2['codosector']=sector
							fs_codobra2['codonometipo']=tiponome
							fs_codobra2['codonomecodi']=codnome
							fs_codobra2.search()
							if(fs_codobra2.getSize()>0){
								fs_codobra2.setSelectedIndex(1)
								if(fs_codobra2['codoautori']==1){
									return true
								}else{
									return false
								}
							}else{
								return false
							}	
						}catch(msg){
							grabaLogs(msg.message)
						}finally{
							grabaLogs('Paso por plan-obra y codobra planx10=" " Call_2142')
						}
					}else{
						return false
					}
				}
			}else{
				var fs_plan_obra = databaseManager.getFoundSet("asistencial","tbc_plan_obra")
				fs_plan_obra.find()
				fs_plan_obra['ploobra1']=obra
				fs_plan_obra['ploplanx10']=planx10
				fs_plan_obra.search()
				if(fs_plan_obra.getSize()>0){
					fs_plan_obra.setSelectedIndex(1)
					try{
						var fs_codobra = databaseManager.getFoundSet("asistencial","tbc_codobra")
						fs_codobra.find()
						fs_codobra['codoempre']=empresa
						fs_codobra['codoobra']=obra
						fs_codobra['codoplan']=fs_plan_obra['ploplanx']
						fs_codobra['codosector']=sector
						fs_codobra['codonometipo']=tiponome
						fs_codobra['codonomecodi']=codnome
						fs_codobra.search()
						if(fs_codobra.getSize()>0){
							fs_codobra.setSelectedIndex(1)
							if(fs_codobra['codoautori']==1){
								return true
							}else{
								return false
							}
						}else{
							return false
						}	
					}catch(msg){
						grabaLogs(msg.message)
					}finally{
						grabaLogs('Paso por codobra Call_2142')
					}
				}else{
					return false
				}
			}
		}else{
			return false
		}
	}else{
		return false
	}
}

/**
 * @properties={typeid:24,uuid:"7499B537-511B-4BCD-982F-A666B734B109"}
 */
function Call_2142_ControlCodobra() {
	
	globals.Call_2142_ok = true;
	//TABLA-SEC-EMP
	
	if(globals.Call_2142_ok)
		Call_2142_BuscoNomencla();
	
	if(utils.stringTrim(globals.Call_2142_planX).length > 0)
		Call_2142_BuscoPlanX();
	else
		Call_2142_BuscoPlanX10();
	
	if(globals.Call_2142_ok)
		Call_2142_CtrlCodobra();
}

/**
 * @properties={typeid:24,uuid:"1A633797-9D25-4DD3-A3FF-63D485351C11"}
 */
function Call_2142_BuscoNomencla(){
	
	var sql = "select Nome_Pantalla from tbc_NOMENCLA where Nome_Tipo = " + globals.Call_2142_tipoNome + " and Nome_Codigo = " + globals.Call_2142_codiNome;
	var ds = databaseManager.getDataSetByQuery('maestros',sql,null,-1);
	if(ds.getMaxRowIndex() > 0)
		globals.Call_2142_pantNome = ds.getValue(1,1);
	else
		globals.Call_2142_ok = false;
}

/**
 * @properties={typeid:24,uuid:"CEEB40E8-B5E4-4122-85FC-5E720B29661C"}
 */
function Call_2142_BuscoPlanX(){
	
	globals.Call_2142_planX10 = ' ';
	globals.Call_2142_ok = true;
	
	var sql = "select Obr_CantPlanes,Obr_FiltraPrest from tbc_obras where Obr_Codigo = " + globals.Call_2142_obra;
	var ds = databaseManager.getDataSetByQuery('maestros',sql,null,-1);
	if(ds.getMaxRowIndex() > 0){
		
		globals.Call_2142_filtraPrest = ds.getValue(1,2);//Obr_FiltraPrest 
		//Obr_CantPlanes
		if(ds.getValue(1,1) > 0){
			
			//BUSCO-PLANX0
			sql = "select PloPlanX10 from tbc_PLAN_OBRA where PloObra = " + globals.Call_2142_obra + " and PloPlanX = '" + globals.Call_2142_planX + "'";
			ds = databaseManager.getDataSetByQuery('asistencial',sql,null,-1);
			if(ds.getMaxRowIndex() > 0)
				globals.Call_2142_planX10 = ds.getValue(1,1);
			else
				globals.Call_2142_ok = false;
		}
	}	
	else
		globals.Call_2142_ok = false;
}

/**
 * @properties={typeid:24,uuid:"24A975BA-199A-456B-8AE3-0C42FABFC957"}
 */
function Call_2142_BuscoPlanX10(){
	
	globals.Call_2142_planX = ' ';
	globals.Call_2142_ok = true;
	
	var sql = "select Obr_CantPlanes,Obr_FiltraPrest from tbc_obras where Obr_Codigo = " + globals.Call_2142_obra;
	var ds = databaseManager.getDataSetByQuery('maestros',sql,null,-1);
	if(ds.getMaxRowIndex() > 0){
		
		globals.Call_2142_filtraPrest = ds.getValue(1,2);//Obr_FiltraPrest 
		//Obr_CantPlanes
		if(ds.getValue(1,1) > 0){
			
			//UBICO-PLANX
			sql = "select PloPlanX from tbc_PLAN_OBRA where PloObra = " + globals.Call_2142_obra + " and PloPlanX10 = '" + globals.Call_2142_planX10 + "'";
			ds = databaseManager.getDataSetByQuery('asistencial',sql,null,-1);
			if(ds.getMaxRowIndex() > 0)
				globals.Call_2142_planX = ds.getValue(1,1);
			else
				globals.Call_2142_ok = false;
		}
	}	
	else
		globals.Call_2142_ok = false;
	
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"DC5C26B9-5419-44A0-9BED-3A6FF827CC55"}
 */
function Call_2142_CtrlCodobra(){
	
	var codoAutori = 0;
	var codoModuloAne = 0;
	var codoModulo = 0;
		
	if(globals.Call_2142_filtraPrest == 1){
		
		var fs_codobra = databaseManager.getFoundSet("asistencial","tbc_codobra")
		fs_codobra.find()
		fs_codobra['codoempre'] = globals.Call_2142_empresa
		fs_codobra['codoobra'] = globals.Call_2142_obra
		fs_codobra['codoplan'] = globals.Call_2142_planX
		fs_codobra['codosector'] = Call_2142_ObtenerSector(globals.Call_2142_empresa,globals.Call_2142_sector) 
		fs_codobra['codonometipo'] = globals.Call_2142_tipoNome
		fs_codobra['codonomecodi'] = globals.Call_2142_codiNome
		fs_codobra.search()
		
		if(fs_codobra.getSize() > 0){
			
			codoAutori = fs_codobra['codoautori'];
			codoModulo = fs_codobra['codomodulo'];
			codoModuloAne = fs_codobra['codomoduloane'];
		}
		else
			globals.Call_2142_ok = false;
	}
		
	if(globals.Call_2142_ok){
		
		globals.Call_2142_autori = codoAutori;
		//if(codoModulo != 0 && nomeEstrHomol != 0)
		
			//TODOPERFORM AVISO-CONFLICTO
		if(codoModulo > 0)
			Call_2142_Modulo(codoModulo);
		
		if(codoModuloAne > 0)
			Call_2142_ModuloAnestesia(codoModuloAne);
	}
}

/**
 * 
 * @param {Number} codoModulo
 *
 * @properties={typeid:24,uuid:"76D07FD7-6F37-4F4F-B32F-3DBEC672C188"}
 */
function Call_2142_Modulo(codoModulo){
	
	var sql = "select * from tbc_NOMENCLA where Nome_Tipo = 14 and Nome_Codigo = " + codoModulo;
	var ds = databaseManager.getDataSetByQuery('maestros',sql,null,-1);
	if(ds.getMaxRowIndex() > 0){
		
		//TODO
	}
	else
		globals.Call_2142_ok = false;
}

/**
 * 
 * @param {Number} codoModuloAne
 *
 * @properties={typeid:24,uuid:"FA707B19-E9C0-4678-A08B-4D65BCD4514B"}
 */
function Call_2142_ModuloAnestesia(codoModuloAne){
	
	var sql = "select * from tbc_NOMENCLA where Nome_Tipo = 14 and Nome_Codigo = " + codoModuloAne;
	var ds = databaseManager.getDataSetByQuery('maestros',sql,null,-1);
	if(ds.getMaxRowIndex() > 0){
		
		//TODO
	}
	else
		globals.Call_2142_ok = false;
}

/**
 * @properties={typeid:24,uuid:"41050C4D-9181-4AAD-A1BE-C6959A24CC42"}
 */
function Call_2142_InicializarVariables(){
	
	Call_2142_codiNome = 0;
	Call_2142_empresa = 0;
	Call_2142_obra = 0;
	Call_2142_ok = false;
	Call_2142_pantNome = 0;
	Call_2142_planX10 = ' ';
	Call_2142_planX = ' ';
	Call_2142_sector = 0;
	Call_2142_tipoNome = 0;
	Call_2142_filtraPrest = 0;
	
}

/**
 * 
 * @param {Number} nroEmpresa
 * @param {Number} index
 *
 * @return {Number}
 * @properties={typeid:24,uuid:"B361970F-5D46-4F27-85F2-3537EEE6CAF2"}
 */
function Call_2142_ObtenerSector(nroEmpresa,index){
	
	var sector = 0;
	var data = '';
	var cantDig = 2
	var start = ((index * cantDig) - cantDig);
	
	var sql = "select TablaSecTabla from tbc_tabla_sec where TablaSecEmp = 1";
	var ds = databaseManager.getDataSetByQuery('maestros',sql,null,-1);
	if(ds.getMaxRowIndex() > 0){
		
		data = ds.getValue(1,1);

		if(start >= 0 && ((start + 2) <= data.length) )	
			sector = Number(data.substr(start,cantDig));
	}
	
	return sector;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param texto
 *
 * @properties={typeid:24,uuid:"31BB0A1C-F9B7-432C-85A1-F4BB889FE639"}
 */
function grabaLogs(texto) {
	
	var $id=null
    if($id == null || $id == 'null'){
		
		$id = application.getUUID();
		//Verificando si existe clave primaria
		var sql = "SELECT EXISTS( SELECT id FROM cirugia_errores WHERE id='" + $id + "')"
		var dsExists = databaseManager.getDataSetByQuery('bases_auxiliares',sql,null,-1);
		while(dsExists.getValue(1,1) == 1){
			$id = application.getUUID();
			sql = "SELECT EXISTS( SELECT id FROM cirugia_errores WHERE id='" + $id + "')"
			dsExists = databaseManager.getDataSetByQuery('bases_auxiliares',sql,null,-1);
		}
		
		var fs = databaseManager.getFoundSet("bases_auxiliares","cirugia_errores")
		var fechacarga = application.getServerTimeStamp();
		fs.newRecord()
		fs['id'] = $id;
		fs['hiscli']=globals.vHiscli;
		fs['protocolo']=globals.Nprotocolo;
		fs['texto_errores']=texto;
		fs['tipo_pac']='Int';
		fs['fecha']=application.getServerTimeStamp();
		fs['hora']=fechacarga.getHours()+''+fechacarga.getMinutes()
		databaseManager.startTransaction()
		var result = databaseManager.saveData(fs);
		if(result){
			databaseManager.commitTransaction();
			//globals.DIALOGS.showInfoDialog("Resultado","Los datos de envío se guardaron correctamente.","Aceptar");
							
		}
		else{
			var error1 = ''
			var error2 = ''
			var array = databaseManager.getFailedRecords()
			for (var i = 0; i < array.length; i++) {
				var record = array[i];
				var jstable = databaseManager.getTable(record);
				var tableSQLName = jstable.getSQLName();
				error1='Error de Grabación en Tabla:' + tableSQLName + ' en server:' + jstable.getServerName() + ' falló la grabación. Avise urgente a Sistemas, por favor!'
				error2='Error en grabación '+record.exception;
				if (record.exception.getErrorCode() == ServoyException.RECORD_VALIDATION_FAILED) {
			
					var thrown = record.exception.getValue()
				
				}
			}
			databaseManager.rollbackTransaction()
		}
		
    }
}
