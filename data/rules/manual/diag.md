---
description: "Guidelines for diag"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Matrix Operations","Vector Manipulation","Mathematics","Programming","FreeMat"]
__meta__rate: 7
---

 Usage

The diag function is used to either construct a diagonal
matrix from a vector, or return the diagonal elements of a
matrix as a vector. The general syntax for its use is

    y = diag(x,n)

If x is a matrix, then y returns the n-th diagonal. If n is
omitted, it is assumed to be zero. Conversely, if x is a
vector, then y is a matrix with x set to the n-th diagonal.


 Examples

Here is an example of diag being used to extract a diagonal
from a matrix.

  --> A = int32(10*rand(4,5))

  A =
    5  8  8  3  6
    4  8  4  3  7
    9  5  8  4  2
    1  0 10  0  4

  --> diag(A)

  ans =
   5
   8
   8
   0

  --> diag(A,1)

  ans =
   8
   4
   4
   4

Here is an example of the second form of diag, being used to
construct a diagonal matrix.

  --> x = int32(10*rand(1,3))

  x =
   6 3 9

  --> diag(x)

  ans =
   6 0 0
   0 3 0
   0 0 9

  --> diag(x,-1)

  ans =
   0 0 0 0
   6 0 0 0
   0 3 0 0
   0 0 9 0


* FreeMat_Documentation
* Array_Generation_and_Manipulations
* Generated on Thu Jul 25 2013 17:17:13 for FreeMat by
  doxygen_ 1.8.1.1

