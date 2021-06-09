## Tests

#### Describe: pigLatin()

```
Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"
```

```
Test: "It will add 'way' to the end of words that begin with a different vowel."
Code: pigLatin("i");
Expected Output: "iway"
```

```
Test: "It will add 'way' to the end of an entire word that begins with a vowel."
Code: pigLatin("ouch");
Expected Output: "ouchway"
```

```
Test: "It will add 'ay' to the end of words that begin with a consonant"
Code: pigLatin("tea");
Expected Output: "eatay";
```

```
Test: "It will add 'ay' to the end of words that begin with a consonant"
Code: pigLatin("curry");
Expected Output: "urrycay";
```

```
Test: "It will move the consonant and add 'ay' when the word begins with two consonants."
Code: pigLatin("phone");
Expected Output: "onephay";
```

```
Test: "It will move the consonant and add 'ay' when the word begins with three consonants."
Code: pigLatin("splash");
Expected Output: "ashsplay";
```

```
Test: "It will add 'ay' when the word is all consonants."
Code: pigLatin("try");
Expected Output: "tryay";
```

```
Test: "It will move 'qu' to the end of words starting with 'qu' and add 'ay'"
Code: pigLatin("quick");
Expected Output: "ickquay";
```

```
Test: "It will move consonants up to 'qu', and move last, and add 'ay', and leave 'qu' at the beginning of the world"
Code: pigLatin("squeal");
Expected Output: "quealsay";
```
