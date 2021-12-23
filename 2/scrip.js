function calc(){
    let a = formcalc.a.value; let b = formcalc.b.value; let c = formcalc.c.value;

    let solut=b*b-4*a*c;

    if (a == 0) {
        alert("Введен неправильный коэффициент");
        return;
    } else if (solut < 0) {
        alert("Корней нет");
        return;
    } else if (solut == 0) {
        alert("Один корень");
        let x = -b / (2 * a);
        alert(x);
        return;
    } else {
        let x1 = (-b + Math.sqrt(solut)) / (2 * a); let x2 = (-b - Math.sqrt(solut)) / (2 * a);
        alert(`Первый корень= ` + x1 + `\nВторой корень= ` + x2);
    }
}