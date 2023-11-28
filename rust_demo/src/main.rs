use std::collections::HashMap;
use std::io;

fn count_vowels(text: &str) -> HashMap<char, usize> {
    let vowels = "aeiouAEIOU";
    let mut vowel_counts = HashMap::new();

    for c in text.chars() {
        if vowels.contains(c) {
            *vowel_counts.entry(c.to_ascii_lowercase()).or_insert(0) += 1;
        }
    }

    vowel_counts
}

fn main() {
    println!("Enter a string: ");

    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");

    let vowel_counts = count_vowels(&input);
    for (vowel, count) in vowel_counts.iter() {
        println!("Number of {}: {}", vowel, count);
    }
}
