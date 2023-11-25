// 1, 3, 5, 7, 9 숫자를 한번씩 써서 만들 수 있는 두개의 숫자(예를들면 13, 579)중 곱한 값이 가장 큰 조합을 찾아주세요.

/**
 *
 * @param arr : 배열
 * @param K : 숫자를 선택할 수 있는 갯수
 * @returns 곱한 값이 가장 큰 조합의 수
 */

function solution(arr, K) {
  let answer = Number.MIN_SAFE_INTEGER;
  let temp = Array.from({ length: K }, () => 0);

  function DFS(L, s) {
    if (L === K) {
      const multiply = temp[0] * temp[1];
      if (answer < multiply) answer = multiply;
    } else {
      for (let i = s; i < arr.length; i++) {
        temp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

const arr = [1, 3, 5, 7, 9];

console.log(solution(arr, 2));
