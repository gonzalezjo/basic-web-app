export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your andrew id?")) {
    return (
      "good question! I'd prefer not to put my first name on this internet-facing account though."
    );
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "pshufb"
    );
  }
  // Shout out to ChatGPT for the parsing one-liner.
  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    return query.split(/\D+/).filter(Boolean).map(Number).reduce((x, y) => Math.max(x, y)).toString();
  }
  if (query.toLowerCase().includes("what is ") && query.toLowerCase().includes("plus")) {
    const num: number = query.split(/\D+/).filter(Boolean).map(Number).reduce((x, y) => x + y);

    return num.toString();
  }
  // chatgtp code
  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    return query.split(/\D+/).filter(Boolean).map(Number).filter((x) => Math.cbrt(x) === Math.floor(Math.cbrt(x)) && Math.sqrt(x) === Math.floor(Math.sqrt(x))).join(", ");
  }

  // gtp code
  if (query.toLowerCase().includes("what is ") && query.toLowerCase().includes("multiplied by")) {
    const numbers: number[] = query.split(/\D+/).filter(Boolean).map(Number);
    const result: number = numbers.reduce((x, y) => x * y);
    return result.toString();
  }

  // GPT code
  if (query.toLowerCase().includes("what is ") && query.toLowerCase().includes("minus")) {
    const numbers: number[] = query.split(/\D+/).filter(Boolean).map(Number);
    const result: number = numbers.reduce((x, y) => x - y);
    return result.toString();
  }

  // GPT code
  function isPrime(num: number): boolean {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  // GPT code
  if (query.toLowerCase().includes("which of the following numbers are primes:")) {
    const numbers: number[] = query.split(/\D+/).filter(Boolean).map(Number);
    const primes: number[] = numbers.filter((num) => isPrime(num));
    return primes.join(", ");
  }

  // gpt code
  if (query.toLowerCase().includes("what is ") && query.toLowerCase().includes("to the power of")) {
    const numbers: number[] = query.split(/\D+/).filter(Boolean).map(Number);
    const result: number = Math.pow(numbers[0], numbers[1]);
    return result.toLocaleString(undefined, {
      style: 'decimal',
      useGrouping: false
    });
  }

  return "";
}
