// 605. Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// У вас есть длинная клумба, в которой некоторые участки уже заняты цветами, а некоторые пусты. Однако цветы нельзя сажать на соседних участках.

// Дан массив целых чисел flowerbed, где 0 означает пустой участок, а 1 — занятый. Также дано число n. Нужно вернуть true, если в клумбе можно посадить n новых цветов, не нарушая правило о том, что на соседних участках цветы сажать нельзя, и false — если это невозможно.

const canPlaceFlowers = (flowerbed, n) => {
    const flowerCount = [...flowerbed].reduce((acc, el, i, arr) => {
        if (!arr[i - 1] && !el && !arr[i + 1]) {
            arr[i] = 1; // ужно садить цветок , занимать место тк без этого такая тема [1,0,0,0,0,1] имеет два места для посадки
            acc += 1;
        }
        return acc;
    }, 0);

    return flowerCount >= n;
};

canPlaceFlowers([1, 0, 0, 0, 1], 1);
