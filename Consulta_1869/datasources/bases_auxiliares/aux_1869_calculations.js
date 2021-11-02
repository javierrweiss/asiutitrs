
/**
 * @properties={typeid:36,uuid:"167DCBC0-65EE-4AC9-AC95-9251687C7AD6"}
 */
function Observaciones_Motivos()
{
	return aux_observa_suspencion;
}


/**
 * @properties={typeid:36,uuid:"65F463B4-01AE-4364-9281-B95B145B18D6"}
 */
function Especialidad_Cirujano()
{
	return aux_profesional_espe;
}


/**
 * @properties={typeid:36,uuid:"740410E4-70CB-4AC0-A039-B044D99C0C9A"}
 */
function Anestesiologo()
{
	return aux_anes;
}


/**
 * @properties={typeid:36,uuid:"1C98B3B1-4454-4E25-9E81-465C247EE88F"}
 */
function Anestesiologo_Nombre()
{
	return aux_anestesista_nombre;
}


/**
 * @properties={typeid:36,uuid:"EDC49AF1-75FE-4EB6-9CCF-ADEE28B14119"}
 */
function Fecha()
{
	var med_ed = aux_fecha.getMonth()+1
	return aux_fecha.getDate()+"/"+med_ed+"/"+aux_fecha.getFullYear();
}


/**
 * @properties={typeid:36,uuid:"5845D10D-2077-47A9-ABAE-EF046F6527E6"}
 */
function Fecha_Carga()
{
	var med_ed = aux_fecha_carga.getMonth()+1
	return aux_fecha_carga.getDate()+"/"+med_ed+"/"+aux_fecha_carga.getFullYear();
}


/**
 * @properties={typeid:36,uuid:"A9A246EC-F98D-4A9B-BC6A-0452682E2E58"}
 */
function Paciente_Nombre()
{
	return aux_histcli_nombre;
}


/**
 * @properties={typeid:36,uuid:"EC915CA2-F7DD-40A3-B1C9-4DCF88D81434"}
 */
function Paciente_Histcli()
{
	return aux_histcl_alf;
}


/**
 * @properties={typeid:36,uuid:"183410B5-CBE2-4917-948F-EC0FEFD5C93B"}
 */
function Paciente_Tipo()
{
	return aux_histcli_tipo;
}


/**
 * @properties={typeid:36,uuid:"2067CBAB-1D30-4547-934F-74FA444A8B9E"}
 */
function Hora_Carga()
{
	return aux_hora_carga;
}


/**
 * @properties={typeid:36,uuid:"510E2008-C026-4A15-8E67-F56D9AD2F6BC"}
 */
function Hora_Desde()
{
	return aux_hora_desde;
}


/**
 * @properties={typeid:36,uuid:"C5A8A1B7-B878-4F72-A9E3-80A121C4C5C1"}
 */
function Hora_Hasta()
{
	return aux_hora_hasta;
}


/**
 * @properties={typeid:36,uuid:"408C4AAD-2E4D-4828-B06D-FEF4963B8E45"}
 */
function Instrumentador()
{
	return aux_instrumentador;
}


/**
 * @properties={typeid:36,uuid:"A280B975-DE1C-4E18-B270-09C58FC65B37"}
 */
function Intervencion()
{
	return aux_intervencion;
}


/**
 * @properties={typeid:36,uuid:"8C2D3204-3A76-4772-9A72-4BA121C6682F"}
 */
function Obra_Social()
{
	return aux_obras_nombre;
}


/**
 * @properties={typeid:36,uuid:"D958E5E1-5EC5-4FA7-8D23-F62A48B9C229"}
 */
function Observaciones()
{
	return aux_observaciones;
}


/**
 * @properties={typeid:36,uuid:"ED7DA2AC-BD52-420A-BEF9-064B3CB7ADA2"}
 */
function Operador_Alta()
{
	return aux_operador_alta_nombre;
}


/**
 * @properties={typeid:36,uuid:"BD40E12C-376A-4174-A172-FB040C800255"}
 */
function Operador_Modifica()
{
	return aux_operador_modifica_nombre;
}


/**
 * @properties={typeid:36,uuid:"8EEBEF21-BAAF-4C54-8F81-6B84786D98E2"}
 */
function Intervencion_Descripcion()
{
	return aux_practica_nombre;
}

/**
 * @properties={typeid:36,uuid:"35030D9F-494F-47DF-99F7-3CE3A437F0CA"}
 */
function Cirujano_Nombre()
{
	return aux_profesional_nombre;
}


/**
 * @properties={typeid:36,uuid:"9B909C6C-A80C-44A8-82A5-DD3CC586EBFC"}
 */
function Quirofano_Estado()
{
	return aux_quirofano_estado;
}


/**
 * @properties={typeid:36,uuid:"504FDFE2-A3D1-4D8C-8FC4-93FAC7B02CC7"}
 */
function Quirofano_Motivo_Susp()
{
	return aux_quirofano_motivo_susp;
}


/**
 * @properties={typeid:36,uuid:"70444BDC-1904-4F78-84BB-529732CA461C"}
 */
function Quirofano_Nro()
{
	return aux_quirofano_nro;
}