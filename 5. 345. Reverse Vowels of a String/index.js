// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.Дана строка s. Нужно обратить (развернуть порядок) только все гласные буквы в строке и вернуть результат.

// Гласными считаются буквы 'a', 'e', 'i', 'o', 'u' — они могут встречаться как в нижнем, так и в верхнем регистре, и появляться в строке несколько раз.

const reverseVowels = (s) => {
    const vowels = 'aeiouAEIOU';
    const wordVowels = [...s]
        .filter((letter) => vowels.includes(letter))
        .reverse();

    let wordVowelsIterator = 0;
    const result = [...s]
        .map((letter) =>
            vowels.includes(letter) ? wordVowels[wordVowelsIterator++] : letter
        )
        .join('');

    // console.log(result);/
    return result;
};

reverseVowels('IceCreAm');
