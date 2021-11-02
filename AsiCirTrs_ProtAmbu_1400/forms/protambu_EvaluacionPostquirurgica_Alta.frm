dataSource:"db:/asistencial/tbc_ciruguar",
extendsID:"-1",
items:[
{
fontType:"Tahoma,1,12",
foreground:"#000000",
formIndex:10,
horizontalAlignment:4,
location:"358,15",
size:"214,20",
text:"Conteo de pinzas al final:",
transparent:true,
typeid:7,
uuid:"1103A85E-EB40-494D-9F8F-C0B86BC19BFF"
},
{
dataProviderID:"cirgpresmaxpost",
displaysTags:true,
formIndex:5,
format:"|#(3)",
horizontalAlignment:0,
location:"234,15",
name:"lbl_cirgpresmaxpre",
onActionMethodID:"57BD8FEC-344D-41C4-8B91-25A560A5CE15",
selectOnEnter:true,
size:"95,20",
toolTipText:"Seleccione el estado de conciencia del paciente.",
typeid:4,
uuid:"14770592-1E5F-4B19-BDDC-EF497243179F",
valuelistID:"236368FD-DC87-4276-9471-A930D3A8A8F4"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
formIndex:2,
horizontalAlignment:4,
location:"15,95",
size:"187,20",
text:"Pulso:",
transparent:true,
typeid:7,
uuid:"1527819C-50A0-4018-B6CB-920EFB573F65"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
formIndex:2,
horizontalAlignment:4,
location:"15,15",
size:"187,20",
text:"Presión Arterial Máxima:",
transparent:true,
typeid:7,
uuid:"1F4CE803-8879-4A11-A7AB-05A4173D07D5"
},
{
anchors:15,
background:"#dde7f4",
borderType:"LineBorder,1,#000000",
lineSize:1,
location:"0,0",
shapeType:1,
size:"764,232",
typeid:21,
uuid:"1FE86B7D-A19D-4861-B040-1F61A33D98BE"
},
{
height:232,
partType:5,
typeid:19,
uuid:"811EA93C-7683-4FBF-905C-B7144ECA043D"
},
{
dataProviderID:"cirgpulsopost",
displaysTags:true,
formIndex:5,
format:"|#(3)",
horizontalAlignment:0,
location:"234,95",
name:"lbl_cirgpulsopre",
onActionMethodID:"DB1DF0A7-AC99-423D-814F-685B3FA8EFCA",
selectOnEnter:true,
size:"95,20",
toolTipText:"Seleccione el estado de conciencia del paciente.",
typeid:4,
uuid:"8CAEC7CE-29B7-4391-83C7-5DC76EC5B6E1",
valuelistID:"236368FD-DC87-4276-9471-A930D3A8A8F4"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
formIndex:11,
horizontalAlignment:4,
location:"384,52",
size:"183,20",
text:"¿Conteo de Gasas está Ok?",
transparent:true,
typeid:7,
uuid:"90603B50-1DC7-46CC-AC65-589A9885B087"
},
{
dataProviderID:"cirgpresminpost",
displaysTags:true,
formIndex:5,
format:"|#(3)",
horizontalAlignment:0,
location:"234,52",
name:"lbl_cirgpresminpre",
onActionMethodID:"CB19D62A-B67D-4A91-A986-E58E04D1FC3C",
selectOnEnter:true,
size:"95,20",
toolTipText:"Seleccione el estado de conciencia del paciente.",
typeid:4,
uuid:"B7873035-C148-43B7-A4C9-4F5C869C91EB",
valuelistID:"236368FD-DC87-4276-9471-A930D3A8A8F4"
},
{
beanClassName:"javax.swing.JProgressBar",
beanXML:"<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<java version=\"1.8.0_271\" class=\"java.beans.XMLDecoder\">
 <object class=\"javax.swing.JProgressBar\">
  <void property=\"size\">
   <object class=\"java.awt.Dimension\" id=\"Dimension0\">
    <void class=\"java.awt.Dimension\" method=\"getField\">
     <string>width<\/string>
     <void method=\"set\">
      <object idref=\"Dimension0\"/>
      <int>389<\/int>
     <\/void>
    <\/void>
    <void class=\"java.awt.Dimension\" method=\"getField\">
     <string>height<\/string>
     <void method=\"set\">
      <object idref=\"Dimension0\"/>
      <int>27<\/int>
     <\/void>
    <\/void>
   <\/object>
  <\/void>
  <void property=\"focusable\">
   <boolean>false<\/boolean>
  <\/void>
  <void property=\"name\">
   <string>bean_244<\/string>
  <\/void>
  <void property=\"requestFocusEnabled\">
   <boolean>false<\/boolean>
  <\/void>
 <\/object>
<\/java>
",
enabled:false,
formIndex:16,
location:"362,138",
name:"bean_244",
size:"389,27",
typeid:12,
uuid:"CACFBDA3-AF57-4DC5-AA58-F8DAD9552795"
},
{
fontType:"Tahoma,1,14",
foreground:"#000000",
formIndex:14,
location:"249,187",
name:"btn_graba_preparacion",
onActionMethodID:"0D1D7406-ABC6-44F9-A278-EADACDF30829",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"177,30",
text:"Confirma Alta",
typeid:7,
uuid:"D757BC20-A8B5-4DE8-A958-04C2911A7475"
},
{
beanClassName:"javax.swing.JProgressBar",
formIndex:16,
location:"363,96",
name:"bean_243",
size:"389,27",
typeid:12,
uuid:"E29C6DE8-AE35-48F3-917E-800FCE996C17"
},
{
dataProviderID:"cirggasasfinal",
displayType:2,
fontType:"Tahoma,1,12",
foreground:"#000000",
formIndex:16,
horizontalAlignment:0,
location:"577,52",
name:"combo_gasas_final",
onDataChangeMethodID:"F8A79E4B-10B6-49EA-A862-274ADED7251D",
size:"86,20",
typeid:4,
uuid:"EAEF166D-0B9F-4390-8827-1C4E7B8990B2",
valuelistID:"EB9A7B0B-26BD-4B8E-A836-B284BC0BDE87"
},
{
dataProviderID:"cirgpinzasfinal",
formIndex:15,
format:"|#(3)",
horizontalAlignment:0,
location:"577,15",
name:"fld_pinzas_final",
onActionMethodID:"86A00B47-6A91-4144-A6D0-5874553E721A",
selectOnEnter:true,
size:"86,20",
typeid:4,
uuid:"ECCE1110-F508-4469-859B-F864EF223D97"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
formIndex:2,
horizontalAlignment:4,
location:"15,52",
size:"187,20",
text:"Presión Arterial Mínima:",
transparent:true,
typeid:7,
uuid:"FA7D5D4C-E45B-4DAC-B2C9-ECB546BCB7F0"
}
],
name:"protambu_EvaluacionPostquirurgica_Alta",
navigatorID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"D7C1D962-9DB5-4184-A5E1-550B32B983A7",
showInMenu:true,
size:"766,202",
styleName:"Sanatorio",
typeid:3,
uuid:"9D0FE807-BB4A-4357-8DCD-49CE5180C6BA"