dataSource:"db:/bases_auxiliares/tbl_movimientos_accesos",
items:[
{
dataProviderID:"mov_motivo",
displayType:1,
location:"125,124",
name:"mov_motivo",
size:"414,100",
text:"Mov Motivo",
toolTipText:"Motivo de la visita",
typeid:4,
uuid:"0629DBC8-998C-4244-B217-094CC5B6D8D5"
},
{
dataProviderID:"mov_a_quien",
displayType:2,
editable:false,
location:"125,94",
name:"mov_a_quien",
size:"245,20",
text:"Mov A Quien",
toolTipText:"A quien viene a visitar",
typeid:4,
uuid:"2EA58F32-8C88-49FD-86C3-31EEC8C9C725",
valuelistID:"31E1478F-624D-489D-8CB0-30ED88B95D0A"
},
{
labelFor:"mov_sector",
location:"35,64",
name:"mov_sector_label",
size:"80,20",
text:"Sector",
transparent:true,
typeid:7,
uuid:"319A8689-6558-4307-81E0-5BE4B8FC5C3D"
},
{
horizontalAlignment:0,
imageMediaID:"59D6FC38-35FA-4959-90C6-3B60B3CCF8D9",
location:"290,249",
name:"btn_cancela",
onActionMethodID:"C541B1AF-EF51-4272-9B33-A0D45C3CBBED",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
rolloverImageMediaID:"3C2D9174-1248-4752-B4F2-E3548CC8FA2C",
toolTipText:"Cancelar Ingreso",
typeid:7,
uuid:"5D0AAEC8-0E48-44FA-AA98-F8BA14B32280"
},
{
labelFor:"mov_fecha_ing",
location:"35,34",
name:"mov_fecha_ing_label",
size:"86,20",
text:"Fecha Ingreso",
transparent:true,
typeid:7,
uuid:"92AC651B-A39D-4DA8-925F-74AE5D34233C"
},
{
dataProviderID:"mov_fecha_ing",
editable:false,
enabled:false,
format:"dd-MM-yyyy|dd-MM-yyyy",
location:"131,34",
name:"mov_fecha_ing",
size:"103,20",
text:"Mov Fecha Ing",
toolTipText:"Fecha de Ingreso",
typeid:4,
uuid:"9A645538-1E3A-464E-9C78-EA6E1C0CE662"
},
{
labelFor:"mov_motivo",
location:"35,124",
name:"mov_motivo_label",
size:"80,20",
text:"Motivo Visita",
transparent:true,
typeid:7,
uuid:"9A68C1B3-1EF7-4983-9C9B-B78E37EA0C1C"
},
{
dataProviderID:"mov_hora_ing",
editable:false,
enabled:false,
format:"HH:mm|HH:mm",
location:"339,34",
name:"mov_hora_ing",
size:"72,20",
text:"Mov Hora Ing",
toolTipText:"Hora de Ingreso",
typeid:4,
uuid:"A906BC29-A333-4B66-B056-6328BBAE98C9"
},
{
dataProviderID:"mov_sector",
displayType:2,
editable:false,
location:"125,64",
name:"mov_sector",
onDataChangeMethodID:"E99EA595-07DE-4CC1-9C5F-50D3555D1DFF",
size:"245,20",
toolTipText:"Sector al cual Visita",
typeid:4,
uuid:"C747B6B9-B1B5-4219-9FE6-5E385D764E5C",
valuelistID:"6B069140-6261-4BFA-BBE8-54B4028E7B96"
},
{
horizontalAlignment:0,
imageMediaID:"3A84EB96-A393-499E-B3DA-AE9962C60858",
location:"209,249",
name:"btn_grabar",
onActionMethodID:"8BC2CE83-BCAB-40DA-B597-1264BFD10A3D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
rolloverImageMediaID:"94F5590B-0A8F-4F3C-8455-BB6654A3A130",
toolTipText:"Grabar Ingreso",
typeid:7,
uuid:"C78A7851-2FBA-44AB-AE78-9688D0410074"
},
{
height:271,
partType:5,
typeid:19,
uuid:"E4693A94-F182-49C8-AE95-E767D4DD38E5"
},
{
labelFor:"mov_hora_ing",
location:"249,34",
name:"mov_hora_ing_label",
size:"80,20",
text:"Hora Ingreso",
transparent:true,
typeid:7,
uuid:"E8365A4D-BEB5-4AB9-AE21-A83F8CD4304B"
},
{
labelFor:"mov_a_quien",
location:"35,94",
name:"mov_a_quien_label",
size:"80,20",
text:"A Quien Visita",
transparent:true,
typeid:7,
uuid:"F7A5AA74-BA5C-4EAC-9A61-A70E90135ADF"
}
],
name:"frm_movimientos_dtl",
navigatorID:"-1",
onShowMethodID:"98673B92-0A51-4944-A551-DF884D22E672",
scrollbars:36,
size:"558,284",
styleName:"Sanatorio",
typeid:3,
uuid:"71644B4B-759F-4E78-9823-56446177474C"