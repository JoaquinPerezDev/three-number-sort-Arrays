# three-number-sort-Arrays

ALGO EXPER MEDIUM

You're given an array of integers and another 
array of three disctinct integers. The first array
is guaranteed to only contain integers in the first
array. For example, a second array of [x, y, z] 
represents a desired order of 
[x, x, ..., x, y, y,..., y, z, z, ..., z] in the 
first array. 

Write a function that sorts the first array 
according to the desired order in the second array.

The function should perform this in place(i.e., 
it should mutate the input array), and it shouldn't
use any auxiliary space(i.e., it should run in 
constant space: O(1) space).

Note that the desired order won't necessarily be
ascending or descending and that the first array wont
necessarily contain all three integers found in
the second array--it might only contain one or two.

Sample input: array = [1, 0, 0, -1, -1, 0, 1, 1]<br>
             order = [0, 1, -1]<br>

Sample output: res = [0, 0, 0, 1, 1, 1, -1, -1]<br>
