function LaTeX(latex, sz = "") {
    return `<img class="img-LaTeX" src="https://latex.codecogs.com/svg.image?${sz}&space;${escape(
      latex
    )}">`;
  }

  function urlLaTeX(latex, sz = "") {
    return `https://latex.codecogs.com/svg.image?${sz}&space;${escape(latex)}`;
  
  }
base_preguntas = [
 
  {
    categoria: " Asís pukllay",
    pregunta: "Pregunta 1 Resuelve la siguiente integral",
    respuesta: LaTeX("\frac{1}{4}(1+3sen(x))^{4/3}+C"),
    incorrecta1: LaTeX("\\frac{1}{6}(4-3sen(x))^{4/3}+C"),
    incorrecta2: LaTeX("\\frac{3}{4}(2+5sen(x))^{4/3}+C"),
    incorrecta3: LaTeX("\\frac{15}{4}(1-10sen(x))^{4/5}+C"),
    imagen:  urlLaTeX("\\int \\sqrt[3]{1+3sen(x)}cos(x)\\text{ }dx"),
    objectFit: "contain",
  },
  {
    categoria: " Asís pukllay",
    pregunta: "Pregunta 2 Resuelve la siguiente integral",
    respuesta: LaTeX("\\ln\\left|arctan(x)\\right|+C"),
    incorrecta1: LaTeX("\\ln\\left|arccos(x)\\right|+C"),
    incorrecta2: LaTeX("\\ln\\left|arcsen(x)\\right|+C"),
    incorrecta3: LaTeX("\\ln\\left|arcsec(x)\\right|+C"),
    imagen: urlLaTeX("\\int \\frac{dx}{(x^{2}+1)arctgx}"),
    objectFit: "contain",
  },
  {
    categoria: " Asís pukllay",
    pregunta: "Pregunta 3 Resuelve la siguiente integral",
    respuesta: LaTeX("\\ln\\left|3+xln(x)\\right|+C"),
    incorrecta1: LaTeX("\\ln\\left|5+xln(4x)\\right|+C"),
    incorrecta2: LaTeX("\\ln\\left|8+xln(x)\\right|+C"),
    incorrecta3: LaTeX("\\ln\\left|3+xln(2x)\\right|+C"),
    imagen: urlLaTeX("\\int \\frac{1+lnx}{3+xlnx}dx"),
    objectFit: "contain",
  },
{
    categoria: " Asís pukllay", 
    pregunta: "Pregunta 4 Resuelve la siguiente integral",
    respuesta: LaTeX("\\frac{1}{ab}arctan(\\frac{a}{b}tan(x))+C"),
    incorrecta1: LaTeX("\\frac{1}{ab}arctan(\\frac{a}{2b}tan(x))+C"),
    incorrecta2: LaTeX("\\frac{1}{2ab}arctan(\\frac{a}{b}tan(x))+C"),
    incorrecta3: LaTeX("\\frac{5}{ab}arctan(\\frac{a}{3b}tan(x))+C"),
    imagen: urlLaTeX("\\int\\frac{dx}{a^{2}sen^{2}x+b^{2}cos^{2}x}"),
    objectFit: "contain",

  },
{
    categoria: " Asís pukllay",
    pregunta: "Pregunta 5 Resuelve la siguiente integral",
    respuesta: LaTeX("\\frac{1}{4}x-\\frac{1}{4}\\ln\\left|e^{x}+4\\right|+C"),
    incorrecta1: LaTeX("\\frac{1}{8}x-\\frac{1}{4}\\ln\\left|e^{2x}+4\\right|+C"),
    incorrecta2: LaTeX("\\frac{3}{4}x-\\frac{4}{3}\\ln\\left|e^{x}+4\\right|+C"),
    incorrecta3: LaTeX("\\frac{5}{4}x-\\frac{4}{5}\\ln\\left|e^{x}+4\\right|+C"),
    imagen: urlLaTeX("\\int\\frac{dx}{e^{x}+4}"),
    objectFit: "contain",
  },
{
    categoria: " Asís pukllay",
    pregunta: "Pregunta 6 Resuelve la siguiente integral",
    respuesta: LaTeX("\\ arctan(e^{x})+C"),
    incorrecta1: LaTeX("\\ arcsen(e^{x})+C"),
    incorrecta2: LaTeX("\\ arccos(e^{x})+C"),
    incorrecta3: LaTeX("\\ arcsec(e^{x})+C"),
    imagen: urlLaTeX("\\int\\frac{dx}{e^{-x}+e^{x}}"),
    objectFit: "contain",
  },
{
    categoria: " Asís pukllay",
    pregunta: "Pregunta 7 Resuelve la siguiente integral",
    respuesta: LaTeX("\\frac{2}{3}\\ln^{\\frac{3}{2}}(x+\\sqrt{x^{2}+1})+C"),
    incorrecta1: LaTeX("\\frac{2}{3}\\ln^{\\frac{5}{2}}(x+\\sqrt{x^{2}+1})+C"),
    incorrecta2: LaTeX("\\frac{4}{3}\\ln^{\\frac{3}{8}}(x+\\sqrt{x^{3}+1})+C"),
    incorrecta3: LaTeX("\\frac{2}{5}\\ln^{\\frac{7}{2}}(x+\\sqrt{x^{2}+1})+C"),
    imagen: urlLaTeX("\\int\\sqrt{\\frac{ln(x+\\sqrt{x^{2}+1})}{1+x^{2}}dx}"),
    objectFit: "contain",
  },
{
    categoria: " Asís pukllay",
    pregunta: "Pregunta 8 Resuelve la siguiente integral",
    respuesta: LaTeX("\\frac{1}{2}x^{2x}+C"),
    incorrecta1: LaTeX("\\frac{3}{2}x^{2x}+C"),
    incorrecta2: LaTeX("\\frac{5}{2}x^{2x}+C"),
    incorrecta3: LaTeX("\\frac{1}{4}x^{2x}+C"),
    imagen: urlLaTeX("\\int x^{2x}(lnx+1)dx"),
    objectFit: "contain",
  },
{
    categoria: " Asís pukllay",
    pregunta: "Pregunta 9 Resuelve la siguiente integral",
    respuesta: LaTeX("\\frac{e^{x}sen(x)}{2}+\\frac{e^{x}cos(x)}{2}+C"),
    incorrecta1: LaTeX("\\frac{e^{x}sen(x)}{4}+\\frac{e^{x}cos(x)}{2}+C"),
    incorrecta2: LaTeX("\\frac{e^{x}sen(x)}{2}+\\frac{e^{x}cos(x)}{4}+C"),
    incorrecta3: LaTeX("\\frac{e^{2x}sen(x)}{2}+\\frac{e^{2x}cos(x)}{2}+C"),
    imagen: urlLaTeX("\\int e^{x}cosxdx"),
    objectFit: "contain",
  },
  {
  categoria: " Asís pukllay",
  pregunta: "Pregunta 10 Resuelve la siguiente integral",
  respuesta: LaTeX("x-4ln \\left|x+2 \\right|- \\frac{5}{x+2}+k"),
  incorrecta1: LaTeX("x+4ln \\left|x+2 \\right|+ \\frac{5}{x+2}+k"),
  incorrecta2: LaTeX("x-2ln \\left|x-4 \\right|- \\frac{5}{x-4}+k"),
  incorrecta3: LaTeX("x+2ln \\left|x-4 \\right|- \\frac{\\sqrt{5}}{x-4}+k"),
  imagen: urlLaTeX("\\int\\frac{x^{2}+1}{\\left (x+2\\right)^{2}}dx"),
  objectFit: "contain",
},
{
categoria: " Asís pukllay",
pregunta: "Pregunta 11 Resuelve la siguiente integral",
respuesta: LaTeX("5ln\\left|x+2 \\right|+7\\left ( x+2 \\right )^{-1}+k"),
incorrecta1: LaTeX("5ln\\left|x-2 \\right|+7 \\left ( x+2 \\right) +k"),
incorrecta2: LaTeX("7ln\\left|x+2 \\right|+5\\left ( x+2 \\right )^{-1}+k"),
incorrecta3: LaTeX("7ln\\left|x+2 \\right|-5\\left ( x+2 \\right )^{-1}+k"),
imagen: urlLaTeX("\\int\\frac{5x+3}{x^{2}+4x+4}dx"),
objectFit: "contain",

},

{
categoria: " Asís pukllay",
pregunta: "Pregunta 12 Resuelve la siguiente integral",
respuesta: LaTeX("\\frac{x}{36\\left (x^{2}+9 \\right )^{2}}+\\frac{x}{216\\left(x^{2}+9\\right)}+\\frac{arctan\\frac{x}{3}}{648}+k"),
incorrecta1: LaTeX("\\frac{x}{36\\left (x^{2}+9 \\right )^{2}}-\\frac{x}{216\\left(x^{2}+9\\right)}-\\frac{arctanx}{648}+k"),
incorrecta2: LaTeX("\\frac{x}{16\\left (x^{2}+9 \\right )^{2}}-\\frac{x}{64\\left(x^{2}+9\\right)}-\\frac{arctanx}{256}+k"),
incorrecta3: LaTeX("\\frac{x}{36\\left (x^{2}+3 \\right )^{2}}+\\frac{x}{216\\left(x^{2}+3\\right)}+\\frac{arctanx}{648}+k"),
imagen: urlLaTeX("\\int\\frac{dx}{\\left (x^{2}+9\\right )^{3}}"),
objectFit: "contain",
},

{
categoria: " Asís pukllay",
pregunta: "Pregunta 13 Resuelve la siguiente integral",
respuesta: LaTeX("-\\frac{2}{1+tag\\left ( \\frac{x}{2} \\right )}-ln\\left| 1+senx\\right| +k"),
incorrecta1: LaTeX("-\\frac{2}{1+tagx}-ln\\left| 1-senx\\right| +k"),
incorrecta2: LaTeX("\\frac{2}{1+tagx}-ln\\left| 1+cosx\\right| +k"),
incorrecta3: LaTeX("\\frac{2}{1-cotx}+ln\\left| 1+cosx\\right| +k"),
imagen: urlLaTeX("\\int\\frac{1-cosx}{1+senx}dx"),
objectFit: "contain",

},
{
categoria: " Asís pukllay",
pregunta: "Pregunta 14 Resuelve la siguiente integral",
respuesta: LaTeX("\\frac{1}{2}ln\\left|tag\\frac{x}{2} \\right|-\\frac{1}{2}ln\\left|tag\\frac{x}{2}+2 \\right|+k"),
incorrecta1: LaTeX("\\frac{1}{3}ln\\left|tag\\frac{x}{2} \\right|-\\frac{1}{3}ln\\left|tag\\frac{x}{2}+2 \\right|+k"),
incorrecta2: LaTeX("\\frac{1}{3}ln\\left|cot\\frac{x}{2} \\right|-\\frac{1}{2}ln\\left|tag\\frac{x}{2}-2 \\right|+k"),
incorrecta3: LaTeX("\\frac{1}{3}ln\\left|cot\\frac{x}{2}-2 \\right|+\\frac{1}{2}ln\\left|tag\\frac{x}{2} \\right|+k"),
imagen: urlLaTeX("\\int\\frac{secx}{2tagx+secx-1}dx"),
objectFit: "contain",

},
{
categoria: " Asís pukllay",
pregunta: "Pregunta 15 Resuelve la siguiente integral",
respuesta: LaTeX("\\frac{1}{2ab}\\left ( ln\\left|\\frac{atagx}{b}+1 \\right|+ln\\left|\\frac{atagx}{b}-1 \\right| \\right )"),
incorrecta1: LaTeX("\\frac{1}{2a}\\left ( ln\\left|\\frac{btagx}{a}+1 \\right|+ln\\left|\\frac{btagx}{a}-1 \\right| \\right )"),
incorrecta2: LaTeX("\\frac{1}{2ab}\\left ( ln\\left|\\frac{atagx}{b}+1 \\right|+ln\\left|\\frac{btagx}{a}-1 \\right| \\right )"),
incorrecta3: LaTeX("\\frac{1}{ab}\\left ( ln\\left|\\frac{atagx}{b}-1 \\right|+ln\\left|\\frac{btagx}{a}+1 \\right| \\right )"),
imagen: urlLaTeX("\\int\\frac{1}{a^{2}sen^{2}x-b^{2}cos^{2}x}dx"),
objectFit: "contain",

},
{
categoria: " Asís pukllay", 
pregunta: "Pregunta 16 Resuelve la siguiente integral",
respuesta: LaTeX("\frac{1}{2}secx+\\frac{-1}{2}\\left ( \\frac{ln\\left|cosx+1 \\right|}{2}-\\frac{ln\\left|cosx-1 \\right|}{2} \\right )+k"),
incorrecta1: LaTeX("\\frac{1}{2}\\left (  secx+ \\frac{ln\\left|cosx+1 \\right|}{2}-\\frac{ln\\left|cosx-1 \\right|}{2} \\right )+k"),
incorrecta2: LaTeX("secx+\\frac{-1}{2}\\left ( ln\\left|cosx+1 \\right|-ln\\left|cosx-1 \\right| \\right )+k"),
incorrecta3: LaTeX("\\frac{1}{2}secx+\\frac{-1}{2}\\left ( \\frac{ln\\left|cosx-1 \\right|}{2}-\\frac{ln\\left|cosx+1 \\right|}{2} \\right )+k"),
imagen: urlLaTeX("\\int\\frac{1}{cosx.sen2x}dx "),
objectFit: "contain",

},
{
categoria: " Asís pukllay",
pregunta: "Pregunta 17 Resuelve la siguiente integral",
respuesta: LaTeX("\\frac{4}{\\sqrt{3}}arctan\\left ( \\frac{2tan\\frac{x}{2}-1}{\\sqrt{3}} \\right )-x+k"),
incorrecta1: LaTeX("\\frac{4}{3}arctan\\left ( \\frac{ctn\\frac{x}{2}-1}{\\sqrt{3}} \\right )-x+k"),
incorrecta2: LaTeX("\\frac{4}{3}arctan\\left ( \\frac{2tanx-1}{3} \\right )+x+k"),
incorrecta3: LaTeX("\\frac{4}{3}arctan\\left ( \\frac{2tan\\frac{x}{2}-1}{3} \\right )+x+k"),
imagen: urlLaTeX("\\int\\frac{senx}{2-senx}"),
objectFit: "contain",
},

];
