/**
 * @properties={type:12,typeid:36,uuid:"3E135ED4-908D-437E-8EDC-7E84D88723BC"}
 */
function Fecha_Carga()
{
	
	var med_ed = aux_fecha_carga.getMonth()+1
	return aux_fecha_carga.getDate()+"/"+med_ed+"/"+aux_fecha_carga.getFullYear();
}

/**
 * @properties={type:12,typeid:36,uuid:"32DB8D24-554A-43EC-8233-90F8BBF7D9A3"}
 */
function Fecha_Final()
{
	var med_ed = aux_fechafinal.getMonth()+1
	return aux_fechafinal.getDate()+"/"+med_ed+"/"+aux_fechafinal.getFullYear();
}

/**
 * @properties={type:12,typeid:36,uuid:"1AA63D82-42E6-4E7D-9EF5-0F01EDD9F284"}
 */
function Fecha_Inicio()
{
	var med_ed = aux_fechainicio.getMonth()+1
	return aux_fechainicio.getDate()+"/"+med_ed+"/"+aux_fechainicio.getFullYear();
}

/**
 * @properties={type:12,typeid:36,uuid:"2F733E9A-D846-447D-8442-1E90919A113B"}
 */
function Historia_Clinica_Nombre()
{
	return aux_histcli_nombre;
}

/**
 * @properties={type:12,typeid:36,uuid:"FC18D277-1A80-4748-B46E-EF1B9F4F945E"}
 */
function Hora_Carga()
{
	return aux_hora_carga;
}

/**
 * @properties={type:12,typeid:36,uuid:"4D678BF3-0F50-451E-82A6-E5F4FE0BC3CD"}
 */
function Hora_Final()
{
	return aux_horafinal;
}

/**
 * @properties={type:12,typeid:36,uuid:"01D75E58-61EC-46EA-90D7-140DE8E3AE37"}
 */
function Hora_Inicio()
{
	return aux_horainicio;
}

/**
 * @properties={type:12,typeid:36,uuid:"FA684BD7-776F-442B-A12B-FD0B7028BE98"}
 */
function Obra_Social()
{
	return aux_obras_nombre;
}

/**
 * @properties={type:8,typeid:36,uuid:"FC5E36E7-7BCD-4892-BF02-DD724D92A57F"}
 */
function Protocolo()
{
	return  aux_protocolo;
}

/**
 * @properties={type:8,typeid:36,uuid:"F80BECBD-1FED-4D29-B199-006C0B766CD1"}
 */
function Profesional()
{
	return  aux_profesional;
}

/**
 * @properties={type:12,typeid:36,uuid:"4CD77D85-5D78-4733-80C8-4C0CD914FA99"}
 */
function Profesional_Nombre()
{
	return aux_profesional_nombre;
}

/**
 * @properties={type:12,typeid:36,uuid:"33104D26-1A5D-47B6-8045-568C7F4BEF10"}
 */
function Historia_Clinica()
{
	return aux_histcl_alf;
}
