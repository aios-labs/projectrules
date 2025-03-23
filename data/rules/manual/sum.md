---
description: "Guidelines for sum"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Mathematics","Array Operations","Numerical Computing"]
__meta__rate: 7
---

 Usage

Computes the summation of an array along a given dimension.
The general syntax for its use is

    y = sum(x,d)

where x is an n-dimensions array of numerical type. The
output is of the same numerical type as the input. The
argument d is optional, and denotes the dimension along
which to take the summation. The output y is the same size
as x, except that it is singular along the summation
direction. So, for example, if x is a 3 x 3 x 4 array, and
we compute the summation along dimension d=2, then the
output is of size 3 x 1 x 4.


 Internals

The output is computed via
 \[ y(m_1,\ldots,m_{d-1},1,m_{d+1},\ldots,m_{p}) = \sum_{k}
x(m_1,\ldots,m_{d-1},k,m_{d+1},\ldots,m_{p}) \]
If d is omitted, then the summation is taken along the first
non-singleton dimension of x.


 Example

The following piece of code demonstrates various uses of the
summation function

  --> A = [5,1,3;3,2,1;0,3,1]

  A =
   5 1 3
   3 2 1
   0 3 1

We start by calling sum without a dimension argument, in
which case it defaults to the first nonsingular dimension
(in this case, along the columns or d = 1).

  --> sum(A)

  ans =
   8 6 5

Next, we take the sum along the rows.

  --> sum(A,2)

  ans =
   9
   6
   4


* FreeMat_Documentation
* Elementary_Functions
* Generated on Thu Jul 25 2013 17:17:14 for FreeMat by
  doxygen_ 1.8.1.1

