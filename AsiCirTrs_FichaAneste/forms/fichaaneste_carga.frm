dataSource:"db:/desal/fichaaneste_cab",
items:[
{
fontType:"Microsoft Sans Serif,1,11",
formIndex:32,
location:"546,588",
name:"cerrarc",
onActionMethodID:"8CDC19B0-B317-4187-99B3-563B394370A5",
size:"149,35",
text:"Volver\r
",
toolTipText:"Salir de la carga de la Ficha Anestésica sin grabar",
transparent:true,
typeid:7,
uuid:"06452BB3-4EC0-48CA-B990-58E58EE5BDB5"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"scopes.globals.fichaaneste_vfecha",
editable:false,
fontType:"Microsoft Sans Serif,0,14",
formIndex:13,
format:"dd/MM/yyyy|mask",
horizontalAlignment:2,
location:"848,15",
name:"fichaaneste_vfecha",
size:"102,20",
transparent:true,
typeid:4,
uuid:"0C42D9BB-515C-4D3A-B8DD-E351C95DCB5F"
},
{
dataProviderID:"edad",
editable:false,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
formIndex:33,
location:"830,81",
name:"edad",
size:"43,20",
typeid:4,
uuid:"14CDE826-8D19-4E6A-A11A-A3962247526E"
},
{
anchors:11,
fontType:"Microsoft Sans Serif,0,12",
items:[
{
containsFormID:"17226827-504C-44B0-8778-8AF36ADB942F",
location:"329,179",
relationName:"fichaaneste_cab_to_fichaaneste_cab",
text:"Observaciones",
typeid:15,
uuid:"04B5C354-0972-447B-8DA3-7FC0622539CE"
},
{
containsFormID:"1ACF6ED8-53D0-4F3A-AC53-F87AE8538E4A",
location:"199,166",
relationName:"fichaaneste_cab_to_fichaaneste_cab.fichaaneste_cab_to_fichaaneste_cab",
text:"Pie             ",
typeid:15,
uuid:"2D854E9C-DAEB-4F1D-8D01-5975344E55E9"
},
{
containsFormID:"7FBA4D94-3FB4-4084-9810-C214DC324653",
location:"110,160",
name:"grilla",
text:"Grilla          ",
typeid:15,
uuid:"A6D0A404-3DCA-495C-A3A9-B6DA16764A14"
},
{
containsFormID:"68DE3EA6-9407-45BD-AFC5-DD67816015ED",
location:"10,145",
relationName:"fichaaneste_cab_to_fichaaneste_cab.fichaaneste_cab_to_fichaaneste_cab",
text:"Encabezado",
typeid:15,
uuid:"E7AA37C1-FFCD-42A7-9AB8-7A00A23992E3"
}
],
location:"0,113",
name:"tabs",
printable:false,
size:"1100,475",
transparent:true,
typeid:16,
uuid:"14DE9738-5160-4A23-A84D-4E4AAC0A68B0"
},
{
dataProviderID:"sexo",
editable:false,
formIndex:44,
location:"830,64",
size:"101,20",
typeid:4,
uuid:"1827ED42-28F5-4EB9-A27D-3A38CE52440F",
valuelistID:"01031E4D-B0E7-4476-AE40-7B1CAE954CA8"
},
{
formIndex:10,
imageMediaID:"179C47FC-4B9D-4DF3-89E2-74AB2958C5D2",
location:"0,0",
mediaOptions:12,
size:"318,58",
transparent:true,
typeid:7,
uuid:"18A496DE-760B-4532-9B89-42374EC7F854"
},
{
anchors:11,
fontType:"Microsoft Sans Serif,0,16",
formIndex:3,
horizontalAlignment:0,
location:"0,43",
name:"lbl_titulo",
size:"1151,20",
styleClass:"title",
text:"Ficha   Anestèsica     -  Carga de datos",
typeid:7,
uuid:"19FCD0A9-FC32-403B-82CE-83290B3D76E9"
},
{
dataProviderID:"fichaaneste_cab_id",
editable:false,
formIndex:50,
location:"1105,3",
name:"fichaaneste_cab_id",
size:"45,20",
text:"Fichaaneste Cab Id",
typeid:4,
uuid:"1A962C90-CCCE-47AB-8C53-3849F752E384",
visible:false
},
{
formIndex:5,
location:"4,82",
size:"93,20",
text:"Obra Social",
transparent:true,
typeid:7,
uuid:"1B7F87F3-4537-4DD6-BF87-1FC0A0CD7BE6"
},
{
fontType:"Microsoft Sans Serif,1,11",
formIndex:9,
horizontalAlignment:0,
location:"387,588",
name:"salir",
onActionMethodID:"B8DDA20D-0876-4FB9-81BF-294729FAFBAF",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"149,35",
text:"<html><body><p align=\"center\">Cerrar <br>Ficha Anestésica<\/p><\/body><\/html>",
toolTipText:"Cerrar la Ficha Anestésica",
typeid:7,
uuid:"2146BF0E-C016-4E68-8393-F43B67867F2F",
verticalAlignment:0
},
{
formIndex:3,
location:"1,623",
size:"1155,4",
styleClass:"title",
typeid:7,
uuid:"283FBA7B-F7B8-4016-B7A3-CA932C5786FD"
},
{
formIndex:14,
location:"794,13",
size:"42,20",
text:"Fecha",
transparent:true,
typeid:7,
uuid:"2E947E55-D1BD-4636-913E-BCCE40A7ABEE"
},
{
dataProviderID:"histcli",
editable:false,
fontType:"Microsoft Sans Serif,1,12",
formIndex:35,
format:"#",
location:"671,64",
name:"histcli",
size:"91,20",
typeid:4,
uuid:"360C976A-821D-4274-A37C-FE1FE1EB3237"
},
{
height:627,
partType:5,
typeid:19,
uuid:"48620186-B1E0-412D-8339-077602C7FF99"
},
{
borderType:"EtchedBorder,0,null,null",
formIndex:1,
lineSize:1,
location:"0,63",
shapeType:1,
size:"1151,40",
transparent:true,
typeid:21,
uuid:"7515A0AD-B91D-4F22-A9B0-0776C9C8AA04"
},
{
formIndex:34,
location:"463,64",
name:"hiscli_label",
size:"206,20",
text:"Nro.Historia Clínica o Internacion",
transparent:true,
typeid:7,
uuid:"7B4C3930-288D-4BB4-B2C1-1846BF77F878"
},
{
fontType:"Microsoft Sans Serif,1,11",
formIndex:32,
location:"228,588",
name:"cerrar",
onActionMethodID:"4E43B8D3-A96D-4670-BEC4-E1FD02B6D0CA",
size:"149,35",
text:"<html><body><p align=\"center\">Salir  sin cerrar<br>Ficha Anestésica<\/p><\/body><\/html>\r
",
toolTipText:"Salir sin cerrar la Ficha Anestésica",
typeid:7,
uuid:"7C624F01-32D0-4A2A-B6A7-ABE1CB67CB74"
},
{
formIndex:51,
labelFor:"fecha_inicio",
location:"948,64",
name:"fecha_inicio_label",
size:"80,20",
text:"Fecha Ficha",
transparent:true,
typeid:7,
uuid:"8C907AA6-5FCC-4B9B-BE5B-CD2D7744BD9B"
},
{
formIndex:46,
location:"463,82",
size:"206,20",
text:"Nro.Historia Clinica Unico",
transparent:true,
typeid:7,
uuid:"930F3A91-A38A-4BAB-A703-8236A1920B04"
},
{
anchors:11,
formIndex:3,
location:"0,103",
size:"1151,8",
styleClass:"title",
typeid:7,
uuid:"956DBB72-6523-4D09-B83E-A60EB6F9AD49"
},
{
dataProviderID:"histcli_unico",
editable:false,
fontType:"Microsoft Sans Serif,1,12",
formIndex:6,
location:"98,64",
size:"351,20",
typeid:4,
uuid:"A64749A1-D038-4322-A91E-DFE579726B98",
valuelistID:"F5C1CBCC-7937-471B-8D19-609B77FC08E2"
},
{
dataProviderID:"histcli_unico",
editable:false,
formIndex:45,
format:"#",
location:"671,82",
name:"histcli_unico",
size:"91,20",
text:"Fichaaneste Histcli Unico",
typeid:4,
uuid:"B29BCDD6-A9EA-4488-95E6-4BB85069C5FC"
},
{
formIndex:43,
location:"776,64",
size:"54,20",
text:"Sexo",
transparent:true,
typeid:7,
uuid:"BD9B02A4-0CCE-4604-B41F-73630DC7E7F6"
},
{
dataProviderID:"obra_social",
editable:false,
formIndex:47,
location:"98,82",
name:"fichaaneste_obrasocial",
size:"351,20",
text:"Fichaaneste Obrasocial",
typeid:4,
uuid:"C7800BAD-41A5-491F-A6A7-65787EBBBE4F",
valuelistID:"D5C8F2E8-72AC-40FC-9CA0-A666179813BB"
},
{
fontType:"Microsoft Sans Serif,0,16",
formIndex:1,
horizontalAlignment:0,
labelFor:"",
location:"487,277",
name:"esperando",
size:"249,43",
styleClass:"button",
text:"Procesando . . .",
typeid:7,
uuid:"DE829C69-5FC5-4F1F-AF54-8D2D0C1BE1EF",
visible:false
},
{
dataProviderID:"fecha_inicio",
editable:false,
formIndex:52,
format:"dd/MM/yyyy",
location:"1031,64",
name:"fecha_inicio",
size:"80,20",
typeid:4,
uuid:"E2428195-DB76-4C0A-8452-64A6431E8B71"
},
{
formIndex:5,
location:"4,64",
size:"93,20",
text:"Paciente",
transparent:true,
typeid:7,
uuid:"EDE697C1-CB48-4E58-BEE9-48DE944AEFB7"
},
{
formIndex:30,
location:"776,81",
size:"57,20",
text:"Edad",
transparent:true,
typeid:7,
uuid:"F6790E1A-2113-4FFC-A60A-4B0C4E804580"
}
],
name:"fichaaneste_carga",
navigatorID:"-1",
onHideMethodID:"9E351D70-7AF1-481A-8878-57EBB3C0F049",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onRenderMethodID:"-1",
onShowMethodID:"7ACF812A-1781-4572-9428-861E55828E08",
onUnLoadMethodID:"-1",
size:"1155,650",
styleName:"Sanatorio",
typeid:3,
uuid:"FD2474A1-8775-42EC-87C7-D388571E8555"