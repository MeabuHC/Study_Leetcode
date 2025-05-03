
/**
 * @param {string} senate - A string representing the senators' party affiliations. 
 *                            'R' represents Radiant and 'D' represents Dire.
 * @return {string} - Returns the party that will announce the victory and change the Dota2 game. 
 *                    It will return "Radiant" if the Radiant party wins, or "Dire" if the Dire party wins.
 * 
 * The function simulates the voting process in rounds:
 * 1. Two queues are used to track the indices of senators from the Radiant and Dire parties.
 * 2. Each round, the senator with the smallest index in the current round bans the opponent's senator.
 * 3. The winner of the round (the senator with the smaller index) is added back to their queue with an updated index (current index + n, where n is the length of the senate).
 * 4. This continues until one party is completely banned, meaning their queue is empty. The party with senators still eligible to vote is declared the winner.
 */

function predictPartyVictory(senate) {
  const n = senate.length;
  const radiant = [];
  const dire = [];

  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") {
      radiant.push(i);
    } else {
      dire.push(i);
    }
  }

  while (radiant.length > 0 && dire.length > 0) {
    const r = radiant.shift();
    const d = dire.shift();

    if (r < d) {
      radiant.push(r + n);
    } else {
      dire.push(d + n);
    }
  }

  return radiant.length > 0 ? "Radiant" : "Dire";
}
