---
description: "Guidelines for all"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Logical Operations","Array Manipulation","Mathematical Functions","FreeMat","Programming"]
__meta__rate: 7
---

 Usage

Reduces a logical array along a given dimension by testing
for all logical 1s. The general syntax for its use is

    y = all(x,d)

where x is an n-dimensions array of logical type. The output
is of logical type. The argument d is optional, and denotes
the dimension along which to operate. The output y is the
same size as x, except that it is singular along the
operated direction. So, for example, if x is a 3 x 3 x 4
array, and we all operation along dimension d=2, then the
output is of size 3 x 1 x 4.


 Internals

The output is computed via
 \[ y(m_1,\ldots,m_{d-1},1,m_{d+1},\ldots,m_{p}) = \min_{k}
x(m_1,\ldots,m_{d-1},k,m_{d+1},\ldots,m_{p}) \]
If d is omitted, then the minimum is taken over all elements
of x.


 Example

The following piece of code demonstrates various uses of the
all function

  --> A = [1,0,0;1,0,0;0,0,1]

  A =
   1 0 0
   1 0 0
   0 0 1

We start by calling all without a dimension argument, in
which case it defaults to testing all values of A

  --> all(A)

  ans =
   0 0 0

The all function is useful in expressions also.

  --> all(A>=0)

  ans =
   1 1 1

Next, we apply the all operation along the rows.

  --> all(A,2)

  ans =
   0
   0
   0


* FreeMat_Documentation
* Elementary_Functions
* Generated on Thu Jul 25 2013 17:17:14 for FreeMat by
  doxygen_ 1.8.1.1

