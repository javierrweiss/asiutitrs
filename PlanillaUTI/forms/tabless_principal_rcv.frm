extendsID:"-1",
items:[
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.hiscli",
formIndex:6,
horizontalAlignment:4,
location:"119,87",
margin:"0,0,0,5",
size:"87,20",
transparent:true,
typeid:7,
uuid:"0FEB9BF5-835A-4FAF-97A5-D29FB32AD711",
verticalAlignment:0
},
{
beanClassName:"com.ibm.clock.IClock",
beanXML:"<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<java version=\"1.7.0_21\" class=\"java.beans.XMLDecoder\">
 <object class=\"com.ibm.clock.IClock\">
  <void property=\"size\">
   <object class=\"java.awt.Dimension\" id=\"Dimension0\">
    <void class=\"java.awt.Dimension\" method=\"getField\">
     <string>width<\/string>
     <void method=\"set\">
      <object idref=\"Dimension0\"/>
      <int>95<\/int>
     <\/void>
    <\/void>
    <void class=\"java.awt.Dimension\" method=\"getField\">
     <string>height<\/string>
     <void method=\"set\">
      <object idref=\"Dimension0\"/>
      <int>24<\/int>
     <\/void>
    <\/void>
   <\/object>
  <\/void>
  <void property=\"analogNumeralFont\">
   <object class=\"javax.swing.plaf.FontUIResource\">
    <string>Segoe UI<\/string>
    <int>0<\/int>
    <int>12<\/int>
   <\/object>
  <\/void>
  <void property=\"digitalBackGroundColor\">
   <object class=\"java.awt.Color\">
    <int>193<\/int>
    <int>224<\/int>
    <int>255<\/int>
    <int>255<\/int>
   <\/object>
  <\/void>
  <void property=\"digitalDisplayAMPM\">
   <boolean>false<\/boolean>
  <\/void>
  <void property=\"digitalDisplayStyle\">
   <int>2<\/int>
  <\/void>
  <void property=\"digitalNumeralFont\">
   <object class=\"java.awt.Font\">
    <string>Tahoma<\/string>
    <int>1<\/int>
    <int>16<\/int>
   <\/object>
  <\/void>
  <void property=\"digitalTwelveHourMode\">
   <boolean>false<\/boolean>
  <\/void>
  <void property=\"displayMode\">
   <int>5<\/int>
  <\/void>
  <void property=\"timeZone\">
   <void property=\"ID\">
    <string>America/Argentina/Buenos_Aires<\/string>
   <\/void>
  <\/void>
 <\/object>
<\/java>
",
formIndex:22,
location:"736,12",
name:"bean_417",
size:"69,24",
typeid:12,
uuid:"1E7C9CB7-E5F6-4A9F-BC7B-D41A49418AF5"
},
{
borderType:"TitledBorder,Datos del Paciente,4,0",
lineSize:1,
location:"5,66",
size:"805,53",
transparent:true,
typeid:21,
uuid:"1F4D4737-DE1F-4764-A2A6-F093B48451F5"
},
{
dataProviderID:"scopes.globals.vFechaActualEnfermeria",
editable:false,
enabled:false,
fontType:"Times New Roman,1,16",
formIndex:24,
format:"dd-MM-yyyy|dd-MM-yyyy",
horizontalAlignment:0,
location:"564,10",
size:"111,26",
transparent:true,
typeid:4,
uuid:"22519977-8D60-4F9F-AE7D-3E9C3AC6952D"
},
{
fontType:"Verdana,0,12",
formIndex:11,
items:[
{
containsFormID:"D696D05E-8F08-4A77-A098-F4A464B033A8",
location:"540,237",
name:"egresos",
relationName:"vs_to_hojauti",
text:"Balance Egresos",
typeid:15,
uuid:"0FD92F67-71BE-4A93-BC6B-35648DEB4B03"
},
{
containsFormID:"C038971F-9C1C-4421-8486-6B8E48CBC0DA",
location:"193,212",
name:"valoracion_2",
relationName:"vs_to_hojauti",
text:"Valoracion-II",
typeid:15,
uuid:"2380D35D-FF98-4485-B07B-37F9F9C6A7FC"
},
{
containsFormID:"012A1067-45F1-4BA8-80C3-2043F7FAAF9F",
location:"846,256",
name:"cateteres",
text:"Control de Cateteres",
typeid:15,
uuid:"2DEAF270-41E6-469C-8173-500A5F13994B"
},
{
containsFormID:"78CC6C57-D262-4D1A-8ACA-A09CB1268DE7",
location:"433,223",
name:"ingresos",
relationName:"vs_to_hojauti",
text:"Balance Ingresos",
typeid:15,
uuid:"3D1799DD-0262-4E8C-ADA8-FC348CA32B84"
},
{
containsFormID:"2C907E86-BA09-4854-8A78-E6A5F6C65355",
location:"770,256",
name:"cultivos",
relationName:"vs_to_hojauti_cultivos",
text:"Cultivos",
typeid:15,
uuid:"5A61CE10-F1AD-48D2-86A0-49F461EE11E9"
},
{
containsFormID:"2E6AC661-DCE6-4D0B-A928-693A8BF5F846",
location:"113,212",
name:"valoracion_1",
relationName:"vs_to_hojauti",
text:"Valoracion-I",
typeid:15,
uuid:"5E056716-776D-4DBD-8820-F48C12FFF6BB"
},
{
containsFormID:"366AB024-07B2-4B40-AE38-1D3298EC7643",
location:"295,217",
name:"valoracion_3",
relationName:"vs_to_hojauti",
text:"Valoración-III",
typeid:15,
uuid:"6BE00956-54E6-4AD2-88DF-452080F6E17D"
},
{
containsFormID:"157DE143-9ED8-491F-A8CD-2B0FD5CD391F",
location:"33,212",
name:"parametros",
relationName:"vs_to_hojauti",
text:"Parametros",
typeid:15,
uuid:"78B8521D-005B-4626-9AC7-DF596054D198"
},
{
containsFormID:"AA02D3BA-7542-47E9-A1E6-BCD75BCB8EEC",
location:"980,268",
text:"Observaciones",
typeid:15,
uuid:"DE5E7C0F-E917-4E7A-A7EE-6AE93FB294C7"
},
{
containsFormID:"B863BED9-7554-4493-8098-302EBE537FD9",
location:"647,247",
name:"cuidados",
relationName:"vs_to_hojauti",
text:"Plan de Cuidados",
typeid:15,
uuid:"E29ABE32-5D22-413F-84D7-DA7A01ED8E78"
}
],
location:"10,154",
name:"tabs_154",
onChangeMethodID:"961D4CEC-61D8-4DF2-859B-383E3645F481",
printable:false,
size:"1295,529",
transparent:true,
typeid:16,
uuid:"2AEA3264-2F1F-4BC9-856E-0AC226E93F0A"
},
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.adm_apelnom",
formIndex:9,
horizontalAlignment:2,
location:"211,87",
margin:"0,5,0,0",
size:"292,20",
transparent:true,
typeid:7,
uuid:"2B70157A-C366-4684-A86D-1A61FA619CF3",
verticalAlignment:0
},
{
displaysTags:true,
formIndex:12,
imageMediaID:"18C3A590-6587-42EB-9FF9-6D290D6CFB0B",
location:"829,7",
mediaOptions:6,
name:"btn_graba",
onActionMethodID:"6F89CE54-330D-4F1E-8416-403610C18CCA",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"58,58",
toolTipText:"<html><body><H4>Haga click sobre este botón para grabar<BR>\r
la Hoja de Enfermería del paciente<BR>\r
 %%globals.vApeyNom%%<BR>\r
del día %%fecha_edit%% y hora %%hora_edit%%<BR>\r
Sólo podrá hacerlo cuando todos los campos<BR>\r
obligatorios hayan sido ingresados<\/H4>\r
<\/body><\/html>",
transparent:true,
typeid:7,
uuid:"3213B492-FE5D-4755-A27E-EB87DAB7D9FF"
},
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.adm_cama",
formIndex:3,
horizontalAlignment:0,
location:"647,87",
size:"18,20",
transparent:true,
typeid:7,
uuid:"3389948E-7976-4B51-8AF8-704D125997CF",
verticalAlignment:0
},
{
fontType:"Tahoma,1,12",
formIndex:29,
location:"1019,77",
size:"63,20",
text:"Operador:",
transparent:true,
typeid:7,
uuid:"35ABDB71-380F-4A01-BC3C-44164A4BF926"
},
{
displaysTags:true,
fontType:"Tahoma,1,16",
formIndex:18,
location:"911,7",
mediaOptions:1,
name:"btn_salir",
onActionMethodID:"601D5402-6A1B-4002-B766-373A3F694CD4",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"86,31",
text:"Volver",
toolTipText:"<html><body><H4>Haga click aquí para volver a la pantalla anterior.<BR>\r
Si no grabó perderá todos los cambios.<\/H4>\r
<\/body><\/html>",
typeid:7,
uuid:"39B34CB2-42C2-4FFC-9606-8D77A48D1B2C"
},
{
dataProviderID:"globals.vHora",
displayType:2,
fontType:"Tahoma,1,13",
formIndex:2,
location:"815,117",
name:"box_hora",
onActionMethodID:"6AC202D5-9B66-4101-9D48-F1AB4AB335A2",
onDataChangeMethodID:"D05AA48F-BA62-4C9A-BA2B-D6C8EDE50E03",
size:"84,27",
typeid:4,
uuid:"40A3431B-4FAE-4DF9-A869-345FDC4BEC7C",
valuelistID:"6572ECC2-2C01-4DE2-B572-8ED9A9D4B8C1"
},
{
displaysTags:true,
fontType:"Tahoma,1,12",
formIndex:16,
location:"155,117",
name:"btn_nueva",
onActionMethodID:"1E492454-C563-4FCB-9484-AFF5250D69BD",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"107,27",
text:"Nueva Hoja",
toolTipText:"<html><body><H4>Haga click sobre este botón para crear<BR>\r
una nueva hoja de enfermería <BR>\r
del paciente %%globals.vApeyNom%%<\/H4>\r
<\/body><\/html>",
typeid:7,
uuid:"4185ED73-9F1B-48CE-AC7C-1F1500E5A303"
},
{
borderType:"EtchedBorder,0,null,null",
dataProviderID:"globals.vEstadoAccion",
displaysTags:true,
fontType:"Tahoma,1,16",
formIndex:25,
horizontalAlignment:0,
location:"1043,10",
size:"181,31",
text:"type",
transparent:true,
typeid:7,
uuid:"4BDFB655-A30B-4723-A69E-E62504342C32"
},
{
fontType:"Tahoma,1,12",
formIndex:13,
location:"275,124",
name:"lbl_1",
size:"182,20",
text:"Seleccione Hoja del día y hora",
transparent:true,
typeid:7,
uuid:"5AF1DF7B-226E-4C59-AB51-290EF9F5B0BB"
},
{
height:688,
partType:5,
typeid:19,
uuid:"633039DD-DA4E-4FFD-BBF1-F4282950E75C"
},
{
displaysTags:true,
fontType:"Tahoma,1,16",
formIndex:27,
horizontalAlignment:0,
location:"911,53",
name:"btn_limpia",
onActionMethodID:"21CEB0AB-2A04-4DD7-92E8-AC19D60CB1B7",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"86,29",
text:"Limpia",
toolTipText:"<html><body><H4>Haga click aquí para limpiar la pantalla.<BR>\r
Si no grabó perderá todos los cambios.<\/H4>\r
<\/body><\/html>",
typeid:7,
uuid:"673EFF23-2F22-49D6-BA2E-B68AB312911C"
},
{
formIndex:20,
horizontalAlignment:0,
labelFor:"",
location:"808,71",
name:"lbl_4",
size:"106,20",
transparent:true,
typeid:7,
uuid:"692E6237-21AF-4190-AFE7-1551551F4FB9"
},
{
displaysTags:true,
fontType:"Tahoma,1,12",
formIndex:15,
location:"10,117",
name:"btn_consulta",
onActionMethodID:"43503B8C-DE2E-44D5-8F44-94D886E0C61B",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"131,27",
text:"Consulta Hojas",
toolTipText:"<html><body><H4>Haga un click sobre este botón para consultar<BR>\r
los valores ingresados en la hoja de enfermería<BR>\r
del paciente %%globals.vApeyNom%%<BR>\r
en la fecha y hora que seleccione<\/H4>\r
<\/body><\/html>",
typeid:7,
uuid:"7755903F-6D0A-4E8E-9F0F-D205D05B9127"
},
{
fontType:"Tahoma,1,14",
formIndex:23,
horizontalAlignment:4,
location:"448,10",
size:"109,26",
text:"Fecha Actual",
transparent:true,
typeid:7,
uuid:"7A97B795-2467-44AC-A838-03DA14C43B7B"
},
{
fontType:"Tahoma,1,12",
formIndex:8,
location:"15,87",
size:"105,20",
text:"Nro. Internación",
transparent:true,
typeid:7,
uuid:"7ED67E80-C25C-4CFD-A801-AC99A63F62C6"
},
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.adm_histclinuni",
formIndex:7,
horizontalAlignment:4,
location:"718,87",
margin:"0,0,0,5",
transparent:true,
typeid:7,
uuid:"8C2ECF1C-62A5-4583-8A4C-32A8C7AE8558",
verticalAlignment:0
},
{
fontType:"Tahoma,1,18",
formIndex:26,
horizontalAlignment:0,
location:"333,38",
size:"470,28",
text:"HOJA DE ENFERMERIA  UTI/UCO",
transparent:true,
typeid:7,
uuid:"94015719-7272-4CD9-8C06-10061CA1DD21"
},
{
fontType:"Tahoma,1,12",
formIndex:5,
location:"670,87",
size:"41,20",
text:"H.C.U.",
transparent:true,
typeid:7,
uuid:"A0A53AC8-E3DC-4F9E-9A75-23E361C6C6F1"
},
{
dataProviderID:"globals.vOperador",
displaysTags:true,
fontType:"Tahoma,0,12",
formIndex:28,
location:"1086,77",
size:"212,20",
text:"type",
transparent:true,
typeid:7,
uuid:"A2C338C7-6658-4797-81E0-F324D9F8831B"
},
{
fontType:"Tahoma,1,12",
formIndex:10,
horizontalAlignment:0,
location:"506,87",
size:"43,20",
text:"Habit.",
transparent:true,
typeid:7,
uuid:"A6C7FA19-78B5-4C0C-88FE-F33D783FAD93"
},
{
dataProviderID:"globals.vFechayHora",
displayType:2,
displaysTags:true,
formIndex:14,
location:"459,117",
name:"box_fecha_hora",
onActionMethodID:"5A31AF73-4A55-49C4-9E34-FE20FEE1725B",
onDataChangeMethodID:"-1",
size:"143,27",
toolTipText:"Seleccione la fecha y hora que desea ver.",
typeid:4,
uuid:"A75A3F22-A376-4B3B-89BF-4DA3BF800C76",
valuelistID:"2EE2A58C-B135-4285-A717-71AD6EA72750"
},
{
fontType:"Tahoma,1,14",
formIndex:30,
horizontalAlignment:4,
location:"685,10",
size:"51,26",
text:"Hora",
transparent:true,
typeid:7,
uuid:"A84EE05F-013F-46DF-8F53-05E3F67C8AB5"
},
{
fontType:"Tahoma,1,12",
formIndex:4,
horizontalAlignment:0,
location:"598,87",
size:"46,20",
text:"Cama",
transparent:true,
typeid:7,
uuid:"A93A5980-7898-495C-88C1-BF7E8763AFBB"
},
{
fontType:"Tahoma,1,12",
formIndex:3,
location:"778,117",
name:"lbl_3",
size:"36,27",
text:"Hora",
transparent:true,
typeid:7,
uuid:"B8513927-D845-41C0-A521-C0E08D62471C"
},
{
fontType:"Tahoma,1,12",
foreground:"#040404",
formIndex:19,
location:"904,117",
name:"btn_nuevo_registro",
onActionMethodID:"33BE92D8-89BC-4B31-B3EF-886E77AC351C",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"114,27",
text:"Abrir Nueva",
typeid:7,
uuid:"D1A23D32-5AF0-4AD7-8B2A-39F0683D18EA"
},
{
borderType:"LineBorder,1,#000000",
dataProviderID:"vhiscli_to_tbc_admision.adm_habita",
formIndex:5,
horizontalAlignment:0,
location:"551,87",
size:"45,20",
transparent:true,
typeid:7,
uuid:"D394F60D-47D5-4122-BAF5-DD62D4D34359",
verticalAlignment:0
},
{
fontType:"Tahoma,1,12",
formIndex:1,
horizontalAlignment:0,
location:"607,117",
name:"lbl_2",
size:"49,27",
text:"Fecha",
transparent:true,
typeid:7,
uuid:"DA424907-9A84-4143-BE11-792F6ACCDC1B"
},
{
borderType:"EmptyBorder,0,0,0,0",
displaysTags:true,
enabled:false,
formIndex:31,
location:"1055,101",
size:"243,48",
text:"<html><body><H4>(*) Datos de ingreso obligatorio<BR>en la primer evolución de cada turno<\/H4><\/body><\/html>",
transparent:true,
typeid:7,
uuid:"E88814FA-004C-469C-AFF3-0DE0E71BD282",
verticalAlignment:3
},
{
imageMediaID:"97E0E77B-A2D4-4886-866B-60FA2A9917B2",
location:"5,5",
size:"323,56",
text:"",
typeid:7,
uuid:"F09C09B0-60E6-4885-A802-C2019ABEE65A"
},
{
dataProviderID:"globals.vFecha",
displayType:5,
formIndex:4,
format:"dd-MM-yyyy|dd-MM-yyyy",
location:"654,117",
name:"fld_fecha",
size:"118,27",
toolTipText:"<html><body><H4>Seleccione la fecha de la Hoja de Enfermería a crear.<BR>\r
Si el turno que informa es el de 22:00 a 6:00 hs, <BR>\r
la fecha seleccionada puede ser del día anterior, <BR>\r
si es así, la hora seleccionada no debe ser menor<BR>\r
a las 22:00 hs. En todos los demás casos la fecha<BR>\r
debe ser la fecha actual<\/H4>\r
<\/body><\/html>",
typeid:4,
uuid:"F0B211FB-CBD1-47F3-8770-C194A5A354E6"
}
],
name:"tabless_principal_rcv",
navigatorID:"-2",
onHideMethodID:"-1",
onLoadMethodID:"-1",
onShowMethodID:"0D4ADF52-0751-4C64-A3C3-50BA03A39F46",
onUnLoadMethodID:"9EE8BDBB-8974-4C53-B5EB-E27B28A3A3BB",
showInMenu:true,
size:"1313,688",
styleName:"planillaUti",
typeid:3,
uuid:"8FE0DAF8-9B6E-436D-85E6-308B805AA5FD",
view:0