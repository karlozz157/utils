export class Utils {
    static isPalindrome(word) {
        let reverseWord = word.split('').reverse().join('');
        return word == reverseWord;
    }
}
