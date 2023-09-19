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
  if (query.toLowerCase().includes("Which of the following numbers is the largest")) {
    return query.split(/\D+/).filter(Boolean).map(Number).reduce((x, y) => Math.max(x, y)).toString();
  }
  if (query.toLowerCase().includes("What is ")) {
    const num: number = query.split(/\D+/).filter(Boolean).map(Number).reduce((x, y) => x + y);

    return num.toString();
  }

  return "";
}
