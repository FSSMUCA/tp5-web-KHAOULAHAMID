function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}

function sommeRecursive(n) {
    if (n === 0) return 0;
    return n + sommeRecursive(n - 1);
}

/*
Analyse  :

1. Quel code est le plus lisible ?
   La version itérative est généralement plus lisible pour les débutants
   et pour des opérations simples comme la somme.

2. Quel code est le plus performant ?
   La version itérative est généralement plus performante car :
      Pas d'overhead des appels de fonction
       Pas de risque de dépassement de pile (stack overflow)

3. La récursion peut-elle poser des problèmes ? Pourquoi ?
   Oui, la récursion peut poser des problèmes :
     Stack overflow pour des valeurs élevées
     Consommation mémoire plus importante
     Performance moins bonne pour des calculs simples

4. Dans quels cas privilégier une boucle ?
     Pour des opérations mathématiques simples
     Quand la profondeur de récursion peut être importante
     Pour des raisons de performance
     Pour des problèmes qui se prêtent naturellement à l'itération

5. Dans quels cas privilégier la récursion ?
     Pour des problèmes naturellement récursifs (arbres, graphes)
     Quand la solution récursive est plus élégante et compréhensible
     Pour des problèmes de diviser pour régner
     Quand la profondeur est limitée et connue
*/