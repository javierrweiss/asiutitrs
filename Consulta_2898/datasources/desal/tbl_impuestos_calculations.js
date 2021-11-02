/**
 * @properties={type:12,typeid:36,uuid:"219F2C17-AD8C-43CB-AC37-D94C11D7161D"}
 * @AllowToRunInFind
 */
function impuesto_des()
{
	var $f = databaseManager.getFoundSet('maestros','tbc_impuestos');
	$f.find()
	$f['impuente']   = ente
	$f['imputabla']  = 1
	$f['impucodigo'] = impuesto
	$f.search()
	return $f['impudescrip'];
}

/**
 * @AllowToRunInFind
 *
 * @properties={type:12,typeid:36,uuid:"ACFCF721-610D-4307-9769-8E2E7474F36E"}
 */
function concepto_des()
{
	var $f = databaseManager.getFoundSet('maestros','tbc_impuestos');
	$f.find()
	$f['impuente']   = ente
	$f['imputabla']  = 2
	$f['impucodigo'] = concepto
	$f.search()
	return $f['impudescrip'];
}

/**
 * @AllowToRunInFind
 *
 * @properties={type:12,typeid:36,uuid:"8165466C-458F-4C62-91A3-625E54D94202"}
 */
function subconcepto_des()
{
	var $f = databaseManager.getFoundSet('maestros','tbc_impuestos');
	$f.find()
	$f['impuente']   = ente
	$f['imputabla']  = 3
	$f['impucodigo'] = subconcepto
	$f.search()
	return $f['impudescrip'];
}

/**
 * @properties={type:93,typeid:36,uuid:"37749A36-5A27-4605-B2DE-D8F57567A14F"}
 */
function cal_fechacarga()
{
	return  globals.IntegerToDate(fechacarga);
}
