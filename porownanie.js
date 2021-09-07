function wypisz()
{
    var liczba1 = document.getElementById("pole1").value;
    var liczba2 = document.getElementById("pole2").value;
    var napis = "";
    
    //if (liczba1 >= 0 && liczba1 < 0 && liczba2 >= 0 && liczba2 < 0)
    if (Number(liczba1)&& Number(liczba2))
        {
            if (liczba1 < liczba2)
            {
                for (i=liczba1; i<=liczba2; i++)
                {
                    napis = napis + i + " ";
                }
                document.getElementById("wynik").innerHTML = napis;
            }
            else if (liczba1 >= liczba2) document.getElementById("wynik").innerHTML = "Liczba z pola1 jest większa od liczby z pola2";
        }
        
    else document.getElementById("wynik").innerHTML = "Został użyty inny znak niż cyfra"
}