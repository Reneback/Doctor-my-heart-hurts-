
var text    = document.querySelector(".explain");
var epaule  = document.querySelector("#circleE");

epaule.addEventListener("mouseover", function(){
text.innerHTML = "L'EPAULE :<br><br> L’épaule est examinée le patient debout ou assis torse nu.<br> L’inspection&nbsp;: comparative des 2 côtés à la recherche :<ul> <li>d’une tuméfaction de l’épaule</li> <li>d’une anomalie des reliefs osseux</li> <li>d’une amyotrophie en particulier du sus ou sous épineux de fasciculations</li></ul><br><img src='img/epo.jpg'>. ";
		
});

epaule.addEventListener("mouseout", function(){
text.innerHTML = "";
});

var text    = document.querySelector(".explain");
var coude  = document.querySelector("#circleP");

coude.addEventListener("mouseover", function(){
text.innerHTML = "LE COUDE :<br><br> Le coude (ou articulation olécranienne) est la partie du membre supérieur située entre le bras et l'avant-bras. Cette articulation comprend en avant la région du « pli du coude » (ou fosse cubitale). C'est un complexe articulaire synovial du membre supérieur humain reliant le bras à l'avant-bras. Il unit ainsi trois os entre eux : le radius, l'ulna (cubitus) et l'humérus.<img src='img/schemaC.png'>";
		
});

coude.addEventListener("mouseout", function(){
text.innerHTML = "";
});

var text    = document.querySelector(".explain");
var hanche  = document.querySelector("#circleG");

hanche.addEventListener("mouseover", function(){
text.innerHTML = "LA HANCHE :<br><br>Comme nous venons de la dire, chez l'adulte, la cause la plus fréquente est une arthrose. La douleur se réveille souvent à la marche, ou quand on mobilise la hanche. Cela gêne considérablement la marche. A un stade d'arthrose avancé, la douleur est quasi permanente.<br><img src='img/hanche.png'>";
		
});

hanche.addEventListener("mouseout", function(){
text.innerHTML = "";
});

var text    = document.querySelector(".explain");
var genou  = document.querySelector("#circleH");

genou.addEventListener("mouseover", function(){
text.innerHTML = "LE GENOU :<br><br> Les douleurs du genou peuvent avoir de nombreuses causes, comme l’arthrose ou des Lésions méniscales. Un certain nombre d’examens sont nécessaires pour effectuer un diagnostic précis. De plus en plus de personnes consultent leur médecin pour des douleurs du genou. Le point sur les raisons de cette augmentation constatée depuis ces dix dernières années .<br><br><img src='img/genou.png'>";
		
});

genou.addEventListener("mouseout", function(){
text.innerHTML = "";
});

var text    = document.querySelector(".explain");
var cheville  = document.querySelector("#circleC");

cheville.addEventListener("mouseover", function(){
text.innerHTML = "LA CHEVILLE:<br><br> La cheville, située entre la jambe et le pied, comprend l’extrémité inférieure du tibia, l’extrémité inférieure du péroné et l’astragale.Les mouvements de la cheville ne se font que dans un sens en raison de l’emboitement de l’astragale en forme de demi cylindre dans la pince réalisée par le tibia et le péroné. La combinaison de ces deux articulations permet d’obtenir un effet de Cardan.<br><br><img src='img/cheville.jpg'>";
		
});

cheville.addEventListener("mouseout", function(){
text.innerHTML = "";
});

var text    = document.querySelector(".explain");
var poignet  = document.querySelector("#circlePo");

poignet.addEventListener("mouseover", function(){
text.innerHTML = "LE POIGNET:<br><br> Le poignet est constitué de l’extrémité inférieure du radius et du cubitus (ou ulna), ainsi que du carpe, lui-même composé de deux rangées de quatre petits os. Liés par des ligaments, les os carpiens forment un « tunnel », nommé canal carpien, dans lequel passe le nerf médian et les tendons fléchisseurs des doigts. Le nerf médian est impliqué dans la sensibilité des doigts et dans les mouvements des doigts et de la main.<br><br><img src='img/poignet.png'>";
		
});

poignet.addEventListener("mouseout", function(){
text.innerHTML = "";
});