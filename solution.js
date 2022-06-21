function solution(n) {
  for (let i = 1; i < n; i++) {
    console.log("L");
  }

  let lastLine = "";
  for (let i = 0; i < n; i++) {
    lastLine += "L";
  }

  console.log(lastLine);
}

solution(6);
