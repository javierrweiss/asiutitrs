extendsID:"-1",
items:[
{
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
location:"26,95",
size:"217,20",
text:"Ingrese Apellido ó Nro.Internación",
transparent:true,
typeid:7,
uuid:"1E7DCC13-8DBC-4303-AD7F-5585064134D2"
},
{
fontType:"Tahoma,1,16",
location:"750,17",
name:"btn_salir",
onActionMethodID:"782691C7-B235-42CC-858E-B31BDB9EA48A",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"88,28",
text:"Volver",
toolTipText:"Haga click sobre este botón para ir a la pantalla anterior.",
typeid:7,
uuid:"20D4C2B6-D17A-4A91-861E-6986AAB1E4DF"
},
{
anchors:3,
fontType:"Tahoma,0,14",
foreground:"#000000",
location:"764,64",
onActionMethodID:"AED35579-857F-4B00-BF25-BB93F6C24EB2",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
text:"Ayuda",
toolTipText:"<html><body>
<p><font size=4 face=\"sans\"><b>1ro.-<\/b> Ingresar las primeras letras del apellido del paciente .<br>(es indistinto si es MAYÚSCULA o minúscula),.<br> ó el numero de internación.<br>
<b>2do.-<\/b> Oprimir la tecla ENTER (o Intro) .<br>
<b>3ro.-<\/b> Seleccionar el paciente haciendo doble clic sobre la fila coincidente.<br> ú oprimiendo la tecla ENTER cuando el foco.<br> este sobre la fila mencionada.<br>
<\/body><\/html>  ",
typeid:7,
uuid:"33B543F8-B348-4A6B-856B-E6FE04730286"
},
{
dataProviderID:"scopes.globals.vFechaAhora0",
fontType:"Tahoma,1,12",
foreground:"#000000",
format:"dd-MM-yyyy HH:mm",
location:"567,2",
size:"153,20",
transparent:true,
typeid:7,
uuid:"5B661FD4-1527-4F29-BF38-21CC2C93AC2D"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
location:"567,95",
size:"67,20",
text:"Operador:",
transparent:true,
typeid:7,
uuid:"6DF58E12-B714-48B5-A229-45C28E2571AC"
},
{
dataProviderID:"globals.vHisclistrynro",
location:"271,95",
name:"Histclin",
onActionMethodID:"E79985AB-A3D8-4B20-BABB-009C398F98F7",
onDataChangeMethodID:"2A8FAA84-DCCB-4CE2-BC1C-0565347442D0",
selectOnEnter:true,
size:"140,20",
toolTipText:"<html><body><H4>Ingresar las iniciales del apellido del paciente ó<BR>
el Número de Internación, luego oprima ENTER<BR>
Si ingresa las iniciales del apellido se mostrará un listado<BR>
ordenado alfabeticamente de los internados actuales.<BR>
Si ingresa el Número de Internación se mostrará<BR>
un listado ordenado numericamente.<\/H4>
<\/body><\/html>",
typeid:4,
uuid:"795070D0-FE75-408E-B741-B54D3216EC9D"
},
{
borderType:"EtchedBorder,0,null,null",
fontType:"Tahoma,1,16",
foreground:"#000000",
horizontalAlignment:0,
location:"345,37",
size:"362,26",
text:"Selección de Internados Actuales",
transparent:true,
typeid:7,
uuid:"932A8A76-8747-4272-A5C2-9F048E732A9C"
},
{
borderType:"EtchedBorder,0,null,null",
items:[
{
containsFormID:"6E6CA378-F4D1-4495-92BC-D448AF45D8DB",
location:"170,206",
relationName:"vhiscli_to_tbc_admision_scroll",
text:"frm_scr_tbc_admision_N_1",
typeid:15,
uuid:"24B6C639-37E7-49E9-A56D-0275522A7375"
},
{
containsFormID:"DB41C1AD-1BAF-41D1-ABB3-4872E177D99B",
location:"37,155",
relationName:"valfa_to_tbc_admision_scroll",
text:"frm_scr_tbc_admision_L_1",
typeid:15,
uuid:"44967AC1-7446-43A4-B74A-3C36FBBE83C5"
}
],
location:"10,134",
name:"tabless_72",
printable:false,
size:"839,427",
tabOrientation:-1,
transparent:true,
typeid:16,
uuid:"95B9A858-B101-4E55-8C8D-AC5D4BF31918"
},
{
dataProviderID:"globals.vOperadorActual",
fontType:"Tahoma,0,12",
location:"650,95",
size:"209,20",
text:"type",
transparent:true,
typeid:7,
uuid:"F0F3D201-E0EA-4F98-9336-1095C25DB96E"
},
{
imageMediaID:"97E0E77B-A2D4-4886-866B-60FA2A9917B2",
location:"7,7",
size:"323,56",
typeid:7,
uuid:"FC9AADF9-C083-4267-95BA-3F91EF85B0BF"
},
{
height:591,
partType:5,
typeid:19,
uuid:"FD87A3DA-C87B-4B41-AC26-316693924F00"
}
],
name:"tab_scr_tbc_admision",
navigatorID:"-2",
onDeleteAllRecordsCmdMethodID:"-1",
onDeleteRecordCmdMethodID:"-1",
onDuplicateRecordCmdMethodID:"-1",
onFindCmdMethodID:"-1",
onInvertRecordsCmdMethodID:"-1",
onLoadMethodID:"-1",
onNewRecordCmdMethodID:"-1",
onNextRecordCmdMethodID:"-1",
onOmitRecordCmdMethodID:"-1",
onPreviousRecordCmdMethodID:"-1",
onPrintPreviewCmdMethodID:"-1",
onSearchCmdMethodID:"-1",
onShowAllRecordsCmdMethodID:"-1",
onShowMethodID:"703860A3-4A8B-4310-BE51-B78DD7CC2DF6",
onShowOmittedRecordsCmdMethodID:"-1",
onSortCmdMethodID:"-1",
showInMenu:false,
size:"864,591",
styleName:"Sanatorio",
typeid:3,
uuid:"BA38CC3C-439C-48CA-ADB1-DFD536E47494"