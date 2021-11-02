/**
 * @properties={type:12,typeid:36,uuid:"8325AB1B-DCF1-4F9C-9759-1ED4033EF55A"}
 */
function usuario_apellido()
{
	var query = "select ope_apellido from tbl_acceso_operador where ope_nro_doc = ?"
	var args = new Array()
	args[0] = mov_nro_doc_ope
	var dataset = databaseManager.getDataSetByQuery("bases_auxiliares", query, args, 1)
	return dataset.getValue(1,1);
}

/**
 * @properties={type:12,typeid:36,uuid:"1854C3FA-80E0-4427-99B9-D255FAA04731"}
 */
function usuario_nombre()
{
	var query = "select ope_nombre from tbl_acceso_operador where ope_nro_doc = ?"
	var args = new Array()
	args[0] = mov_nro_doc_ope
	var dataset = databaseManager.getDataSetByQuery("bases_auxiliares", query, args, 1)
	return dataset.getValue(1,1);
}

/**
 * @properties={type:12,typeid:36,uuid:"C794C45B-0970-4D57-9881-4798E27C7F7C"}
 */
function fecha_egreso()
{
	var med_ed = mov_fecha_egr.getMonth()+1
	return mov_fecha_egr.getDate()+"/"+med_ed+"/"+mov_fecha_egr.getFullYear();
}

/**
 * @properties={type:12,typeid:36,uuid:"9A46E689-6F34-4B90-AD26-A2BF46D24FFE"}
 */
function hora_egreso()
{
	var hora=mov_hora_egr.getHours()
	var hora_ed=''
	if (hora>9){
		hora_ed=hora
	}else{
		hora_ed="0"+hora
	}
	var minutos = mov_hora_egr.getMinutes()
	var minutos_ed=''
	if (minutos>9){
			minutos_ed=minutos
	}else{
			minutos_ed="0"+minutos
	}
	var segundos=	mov_hora_egr.getSeconds()
	var segundos_ed=''
	if (segundos>9){
		segundos_ed=segundos
	}else{
		segundos_ed="0"+segundos
	}
	return hora_ed+":"+minutos_ed;
}

/**
 * @properties={type:12,typeid:36,uuid:"E8CFF601-9C39-4231-991B-EC87F1819CC3"}
 */
function fecha_ingreso()
{
	var med_ed = mov_fecha_ing.getMonth()+1
	return mov_fecha_ing.getDate()+"/"+med_ed+"/"+mov_fecha_ing.getFullYear();
}

/**
 * @properties={type:12,typeid:36,uuid:"EAFAA68D-E2BC-406C-9E3C-A59ADC97F43E"}
 */
function hora_ingreso()
{
	var hora=mov_hora_ing.getHours()
	var hora_ed=''
	if (hora>9){
		hora_ed=hora
	}else{
		hora_ed="0"+hora
	}
	var minutos = mov_hora_ing.getMinutes()
	var minutos_ed=''
	if (minutos>9){
			minutos_ed=minutos
	}else{
			minutos_ed="0"+minutos
	}
	var segundos=	mov_hora_ing.getSeconds()
	var segundos_ed=''
	if (segundos>9){
		segundos_ed=segundos
	}else{
		segundos_ed="0"+segundos
	}
	return hora_ed+":"+minutos_ed;
}
