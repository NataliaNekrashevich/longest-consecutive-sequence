module.exports = function longestConsecutiveLength(array) {
  longestStreak = 0;
  numSet = new Set(array);
  for(let num of numSet.values()){
    if(!numSet.has(num - 1)){
      currentNum = num;
      currentStreak = 1;

      while(numSet.has(currentNum + 1)){
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak;
}


/*longest_streak = 0
num_set = set(nums)

for num in num_set:
    if num - 1 not in num_set:
        current_num = num
        current_streak = 1

        while current_num + 1 in num_set:
            current_num += 1
            current_streak += 1

        longest_streak = max(longest_streak, current_streak)

return longest_streak*/