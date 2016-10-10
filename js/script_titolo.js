@charset "utf-8";
/* CSS Document */

html
{
	background-color: white;
  		
}

#testa  /* la striscia in alto */ 
{
	background-color: #FFFFFF;
	height:130px;
	
}

#logotipo{ /* il logotipo LOOP dell'azienda*/
	position:relative; 
	top:-150px; 
	font-size:68px; 
	font-family: 'Raleway', sans-serif;
	font-weight:700;
}


#filetto /* la piccolissima striscia piu scura */ 
{
	background-color:#ffcc99;
	height:5px;
}

#filetto2 /* la piccolissima striscia sotto il titolo */ 
{
	background-color:#ff8000;
	height:1px;
}

body
{
	
	font-family: 'Roboto Slab', serif;
	font-size: 18px;
	line-height: 21px;
	height:100%;
	background:white;

	
	
}
footer{
	
	height:60px;
	font-size: 12px;
	line-height: 14px;
	text-align:center;
 	color:#ff8000;
}

#ridotto{ /* la parte piu stretta del sito*/ 
	
	width:60%;
	margin-top:-70px;
	margin-left:auto;
	margin-right:auto;
	background:transparent;	
	padding-right:0px;		
	min-width:630px;
}


#link  /* il menu di navigazione */ 
{ 

	background-color: transparent;
	font-size: 18px;
	margin-top:-130px;
	text-align:right;
	float:right;
	
					
}

#logo /* dove va l'immagine del logo */ 
{
	
	min-height:125px;
	min-width:125px;
	margin-top:20px;
	margin-left:10px;
	
			
}


#titolo{ /* il titolo della pagina, quello spostato*/ 
	
	float: right;
	text-align:center;
	font-size:35px;
	text-decoration:bold;
	clear:both;	
	font-family: 'Raleway', sans-serif;
	
			
}


.tabella{ /* tabella dove contiene le immagini e le descizione*/ 

	margin-top:50px;
	width: 100%;
	max-width:1320px;
	font-size:12px; 
			
}



.colonna_foto_sx { /* colonna per le foto a sinistra */ 
	
	width:100%;
	margin-left:90%;
	float:left;
	
	
	}
	
.colonna_testo_dx { /* colonna per il testo a destra */ 
	min-width:430px;
	width:96%;
	text-align: left;
	float:right;
	padding-bottom:7px;

	
		
}
	
.colonna_foto_dx { /* colonna per le foto a destraa */ 
	width:100%;
	margin-right:90%;
	float:right;
		
}

.colonna_testo_sx { /* colonna per il testo a sinistra */ 
	min-width:430px;
	width:96%;
	text-align: left;
	float:left;
	padding-bottom:7px;

}

#domande{
	color:#ff8000;
	font-weight:bold;
}

#spacing{
	height:30px;
}


a  /* rimozione sottolineatura e colori dei link */ 
{
    text-decoration: none; 
    color:black;
}

#scrittefoot{
	text-decoration: none; 
    color:#ff8000;
}

#piede{ /* contenitore per le scritte del piede  */
	font-family: 'Roboto', sans-serif;
	color:#ff8000;
	font-size:12px;
	position:relative;
    top: 40%;	
			
}
	



/*___________________________Wrapper per resize immagini in fixed ratio______________________________*/

.wrapper {
  width: 100%;
  display: inline-block;
  position: relative;
  min-height:200px;
  min-width:200px;
}
.wrapper:after {
  padding-top: 100%;
  display: block;
  content: '';
   
}
.main {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
 
}

/*___________________________Javascript per menu______________________________*/
#sse1
{
    /*decorazioni*/
    background-color: transparent;
    height: 38px;
    margin-top:-6px;
    border-radius: 3px;
    box-sizing: content-box;
}
#sses1
{
	float:right;
    /*margin:0 auto;*/
}
#sses1 ul 
{ 
    position: relative;
    list-style-type: none;
    float:left;
    padding:0;margin:0;
    border-bottom:solid 0px #6C0000;
}
#sses1 li
{
    float:left;
    list-style-type: none;
    padding:0;margin:0;background-image:none;
}
/*CSS */
#sses1 li.highlight
{
    background-color:#ff8000;
    top:36px;
    height:2px;
    border-bottom:solid 1px #ff8000;
    z-index: 1;
    position: absolute;
    overflow:hidden;
}
#sses1 li a
{
    box-sizing: content-box;
    height:30px;
    padding-top: 8px;
    margin: 0 20px;/*la distanza dal menu 20+20=40px.*/
    color: #000;
    font: normal 18px roboto;
    text-align: center;
    text-decoration: none;
    float: left;
    display: block;
    position: relative;
    z-index: 2;
}
