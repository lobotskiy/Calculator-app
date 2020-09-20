function insert(num) {
    document.form.textView.value =
        document.form.textView.value + num;
};

function clean() {
    document.form.textView.value = "";
};

function back() {
    var exp = document.form.textView.value;
    document.form.textView.value = exp.substring(0, exp.length - 1);
};

function equal() {
    var exp = document.form.textView.value;
    if (exp) {
        document.form.textView.value = eval(exp);
    }
};