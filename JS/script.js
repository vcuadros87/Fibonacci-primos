// ── VERIFICAR SI UN NÚMERO ES PRIMO ──
function esPrimo(n) {
  if (n < 2) return false;
  var contador = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) contador++;
  }
  return contador === 2;
}

// ── SECCIÓN 1: COLMENA DE ABEJAS ──
function calcularAbejas() {
  var input = parseInt(document.getElementById("inputAbejas").value);
  var resultado = document.getElementById("resultadoAbejas");
  if (isNaN(input) || input < 1 || input > 30) {
    resultado.innerHTML = '<div style="color:#b45309;font-weight:600;">⚠ Ingresá un número entre 1 y 30.</div>';
    return;
  }
  var html = '<div class="tabla-wrap"><table><thead><tr><th>Generación</th><th>Ancestros</th></tr></thead><tbody>';
  var a = 1, b = 1, c;
  for (var i = 1; i <= input; i++) {
    html += '<tr><td>' + i + '</td><td>' + a + '</td></tr>';
    c = a + b; a = b; b = c;
  }
  html += '</tbody></table></div>';
  resultado.innerHTML = html;
}

// ── SECCIÓN 2: SEGURIDAD RSA ──
function calcularRSA() {
  var p = parseInt(document.getElementById("inputP").value);
  var q = parseInt(document.getElementById("inputQ").value);
  var resultado = document.getElementById("resultadoRSA");
  if (isNaN(p) || isNaN(q) || p < 2 || q < 2) {
    resultado.innerHTML = '<div style="color:#4338ca;font-weight:600;">⚠ Ingresá dos números mayores a 1.</div>';
    return;
  }
  var pPrimo = esPrimo(p);
  var qPrimo = esPrimo(q);
  var pPill = pPrimo ? '<div class="pill pill-ok">✓ Es primo</div>' : '<div class="pill pill-bad">✗ No es primo</div>';
  var qPill = qPrimo ? '<div class="pill pill-ok">✓ Es primo</div>' : '<div class="pill pill-bad">✗ No es primo</div>';
  var html = '<div class="rsa-result-card"><h4>Análisis de la clave RSA</h4><ul class="rsa-rows">';
  html += '<li><div class="rsa-tag">p = ' + p + '</div>' + pPill + '</li>';
  html += '<li><div class="rsa-tag">q = ' + q + '</div>' + qPill + '</li>';
  if (pPrimo && qPrimo) {
    var n = p * q;
    var phi = (p - 1) * (q - 1);
    html += '<li><div class="rsa-tag">n = p × q</div><div>' + p + ' × ' + q + ' = <strong>' + n + '</strong></div></li>';
    html += '<li><div class="rsa-tag">φ(n)</div><div>(' + p + '−1) × (' + q + '−1) = <strong>' + phi + '</strong></div></li>';
    html += '<li><div class="rsa-tag">Resultado</div><div class="pill pill-ok">✓ Clave RSA válida con n = ' + n + '</div></li>';
  } else {
    html += '<li><div class="rsa-tag">Resultado</div><div class="pill pill-bad">✗ Al menos uno no es primo. No forman una clave RSA válida.</div></li>';
  }
  html += '</ul></div>';
  resultado.innerHTML = html;
}

// ── SECCIÓN 3: CONEJOS + PRIMOS ──
function calcularConejos() {
  var input = parseInt(document.getElementById("inputConejos").value);
  var resultado = document.getElementById("resultadoConejos");
  if (isNaN(input) || input < 1 || input > 30) {
    resultado.innerHTML = '<div style="color:#065f46;font-weight:600;">⚠ Ingresá un número entre 1 y 30.</div>';
    return;
  }
  var html = '<div class="tabla-wrap"><table><thead><tr><th>Mes</th><th>Parejas de conejos</th><th>¿Es primo?</th></tr></thead><tbody>';
  var a = 1, b = 1, c;
  for (var i = 1; i <= input; i++) {
    var primo = esPrimo(a);
    var fila = primo ? ' class="rabbit-primo"' : '';
    var texto = primo ? '✓ Sí <div class="pill-prime">primo</div>' : 'No';
    html += '<tr' + fila + '><td>' + i + '</td><td>' + a + '</td><td>' + texto + '</td></tr>';
    c = a + b; a = b; b = c;
  }
  html += '</tbody></table></div>';
  resultado.innerHTML = html;
}