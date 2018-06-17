describe('test', function() {
  it('returns the given string', function() {
    expect(test('Hello World')).toEqual('Hello World');
  });
})

describe('reverse', function() {
  it('returns a given string reverse', function() {
    expect(reverse('hello')).toEqual('olleh');
  });

  it('returns a given string reverse', function() {
    expect(reverse('this is great')).toEqual('taerg si siht');
  });
})

describe('longest word', function() {
  it('returns the longest word of the given string', function() {
    expect(longestWord('This is the best solution ever')).toEqual('solution');
  });
})

describe('sum numbers', function() {
  it('returns the sum of two given numbers', function() {
    expect(sumNumbers(2, 4)).toEqual(6);
  });

  it('returns the sum of two given numbers', function() {
    expect(sumNumbers('3', '5')).toEqual(8);
  });
})

describe('count vowels', function() {
  it('takes a string and returns the number of vowels in the string', function() {
    expect(countVowels('hello world')).toEqual(3);
  });

  it('takes a string and returns the number of vowels in the string', function() {
    expect(countVowels('This is my nEw I')).toEqual(4);
  });
})

describe('count words', function() {
  it('returns the number of words in a given string', function() {
    expect(countWords('hello')).toEqual(1);
  });

  it('returns the number of words in a given string', function() {
    expect(countWords('let me see the number')).toEqual(5);
  });
})

describe('palindrome', function() {
  it('takes a string and returns true if it is a palindrome', function() {
    expect(palindrome('abba')).toEqual(true);
  });

  it('takes a string and returns true if it is a palindrome', function() {
    expect(palindrome('there')).toEqual(false);
  });
})

describe('factorial', function() {
  it('returns the factorial of a given number (example given number 4 returns 4*3*2*1=24)', function() {
    expect(factorial(8)).toEqual(40320);
  });

  it('returns the factorial of a given number (example given number 4 returns 4*3*2*1=24)', function() {
    expect(factorial(2)).toEqual(2);
  });
})

describe('time convesion', function() {
  it('takes a number of minutes and returns a string that formats the number into `hours:minutes`', function() {
    expect(timeConversion(15)).toEqual('0:15');
  });

  it('takes a number of minutes and returns a string that formats the number into `hours:minutes`', function() {
    expect(timeConversion(150)).toEqual('2:30');
  });

  it('takes a number of minutes and returns a string that formats the number into `hours:minutes`', function() {
    expect(timeConversion(360)).toEqual('6:00');
  });
})

describe('two sum', function() {
  it('takes an array of numbers. If a pair of numbers in the array sums to 10, return the position of those two numbers', function() {
    expect(twoSum([1, 3, 6, 9])).toEqual([0, 3]);
  });

  it('takes an array of numbers. If no pair of numbers sums to 10, return 0', function() {
    expect(twoSum([1, 2, 4, 5, 2])).toEqual(0);
  });
})

describe('third greatest', function() {
  it('returns the third greatest number of an given array', function() {
    expect(thirdGreatest([2, 6, 9, 5])).toEqual(5)
  })

  it('returns the third greatest number of an given array', function() {
    expect(thirdGreatest([5, 3, 7, 12, 45, 89, 89, 76])).toEqual(45)
  })
})