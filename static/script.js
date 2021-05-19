document.getElementById("compile").onclick = function() {
    var code = document.getElementById("codein").value;
    var leng = code.length;
    var x = -1;
    var out = '';
    var stdin = document.getElementById("stdin").value;
    var inid = 0;
    var nout = '';
    var cnt = 0;
    var rand = 0;
    while (x < leng) {
        x++;
        if (code.charAt(x) == '/') {
            nout = nout + code.charAt(x + 1);
        }
        if (code.charAt(x) == '*') {
            nout = '';
        }
        if (code.charAt(x) == '<') {
            nout = nout + stdin.charAt(inid);
            inid++;
        }
        if (code.charAt(x) == '>') {
            out = out + nout + '<br>';
        }
        if (code.charAt(x) == '#') {
            document.body.style.backgroundColor = nout;
        }
        if (code.charAt(x) == '+') {
            cnt++;
        }
        if (code.charAt(x) == '-') {
            cnt--;
        }
        if (code.charAt(x) == '=') {
            nout = nout + cnt.toString();
        }
        if (code.charAt(x) == '?') {
            rand = Math.round(Math.random() * 100);
            nout = nout + rand.toString();
        }
        if (code.charAt(x) == '&') {
            if(code.charAt(x - 1) != nout){
                x++;
            }
        }
    }
    document.getElementById("output").innerHTML = out;
}