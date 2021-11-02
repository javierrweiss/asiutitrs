/**
 * @properties={type:12,typeid:36,uuid:"AE3A289B-6CBC-4146-9F1B-8FA05ADD863A"}
 */
function Anestesiologo()
{
	return aux_anes;
}

/**
 * @properties={type:12,typeid:36,uuid:"5DE50C1F-3CA6-4CBD-BCCB-78801010104C"}
 */
function Anestesiologo_Nombre()
{
	return aux_anestesista_nombre;
}

/**
 * @properties={type:12,typeid:36,uuid:"75DE27F6-18A5-4567-8A5F-65591CBFEAE8"}
 */
function Fecha()
{
	var med_ed = aux_fecha.getMonth()+1
	return aux_fecha.getDate()+"/"+med_ed+"/"+aux_fecha.getFullYear();
}

/**
 * @properties={type:12,typeid:36,uuid:"1EC0D53A-C4C8-4671-B492-3E80BB13E2A1"}
 */
function Fecha_Carga()
{
	var med_ed = aux_fecha_carga.getMonth()+1
	return aux_fecha_carga.getDate()+"/"+med_ed+"/"+aux_fecha_carga.getFullYear();
}

/**
 * @properties={type:12,typeid:36,uuid:"8109E634-FEC9-4985-BB9E-B15B7A5C3946"}
 */
function Paciente_Nombre()
{
	return aux_histcli_nombre;
}

/**
 * @properties={type:12,typeid:36,uuid:"9F3BD97E-5432-44AF-81E7-B4764F5D4FBC"}
 */
function Paciente_Telefono()
{
	return aux_histcli_telefono;
}

/**
 * @properties={type:12,typeid:36,uuid:"897AEEFF-8D3F-4D07-9E34-87C6035A065E"}
 */
function Paciente_Tipo()
{
	return aux_histcli_tipo;
}

/**
 * @properties={type:12,typeid:36,uuid:"8C3E0E5D-984F-4238-8E67-8455FD9EED8F"}
 */
function Hora_Carga()
{
	return aux_hora_carga;
}

/**
 * @properties={type:12,typeid:36,uuid:"2DB4165A-B81B-4695-955B-1170B415BF77"}
 */
function Hora_Desde()
{
	return aux_hora_desde;
}

/**
 * @properties={type:12,typeid:36,uuid:"2DC2DB5E-D6F6-4D61-B420-0A01E27BDDB9"}
 */
function Hora_Hasta()
{
	return aux_hora_hasta;
}

/**
 * @properties={type:12,typeid:36,uuid:"019815B0-6D9B-4A5D-A31D-2B921B7356A7"}
 */
function Instrumentador()
{
	return aux_instrumentador;
}

/**
 * @properties={type:12,typeid:36,uuid:"1F3733F8-0BBE-4AE2-9AA1-2318B7EDDF00"}
 */
function Intervencion()
{
	return aux_intervencion;
}

/**
 * @properties={type:12,typeid:36,uuid:"E10CA900-4627-49D2-91D8-FF942D22F256"}
 */
function Obra_Social()
{
	return aux_obras_nombre;
}

/**
 * @properties={type:12,typeid:36,uuid:"168E0680-67DE-4743-A427-3169356CAF72"}
 */
function Observaciones()
{
	return aux_observaciones;
}

/**
 * @properties={type:12,typeid:36,uuid:"F756923F-199D-46BF-B333-1BEEE67EB033"}
 */
function Operador_Alta()
{
	return aux_operador_alta_nombre;
}

/**
 * @properties={type:12,typeid:36,uuid:"9E85EDD9-6816-4830-9277-3B7AEF5B48FF"}
 */
function Operador_Modifica()
{
	return aux_operador_modifica_nombre;
}

/**
 * @properties={type:12,typeid:36,uuid:"ADAF650F-3AB7-4533-BB1D-36405A816F33"}
 */
function Intervencion_Descripcion()
{
	return aux_practica_nombre;
}

/**
 * @properties={type:12,typeid:36,uuid:"38FA1A05-8287-430C-8574-3CCA53170BA7"}
 */
function Cirujano_Nombre()
{
	return aux_profesional_nombre;
}

/**
 * @properties={type:12,typeid:36,uuid:"A3C097C7-9A7D-477A-BF74-285656E90B83"}
 */
function Quirofano_Estado()
{
	return aux_quirofano_estado;
}

/**
 * @properties={type:12,typeid:36,uuid:"8DCDE7F1-35F9-40BD-8BD6-13E0135F31F2"}
 */
function Quirofano_Motivo_Susp()
{
	return aux_quirofano_motivo_susp;
}

/**
 * @properties={type:12,typeid:36,uuid:"E5737B92-FEB8-44BC-8529-F4060E7C31DB"}
 */
function Quirofano_Nro()
{
	return aux_quirofano_nro;
}
