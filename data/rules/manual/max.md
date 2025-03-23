---
description: "Guidelines for max"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Array Operations","Numerical Computing","Mathematics","Data Analysis","Programming"]
__meta__rate: 7
---

 Usage

Computes the maximum of an array along a given dimension, or
alternately, computes two arrays (entry-wise) and keeps the
smaller value for each array. As a result, the max function
has a number of syntaxes. The first one computes the maximum
of an array along a given dimension. The first general
syntax for its use is either

     [y,n] = max(x,[],d)

where x is a multidimensional array of numerical type, in
which case the output y is the maximum of x along dimension
d. The second argument n is the index that results in the
maximum. In the event that multiple maxima are present with
the same value, the index of the first maximum is used. The
second general syntax for the use of the max function is

     [y,n] = max(x)

In this case, the maximum is taken along the first non-
singleton dimension of x. For complex data types, the
maximum is based on the magnitude of the numbers. NaNs are
ignored in the calculations. The third general syntax for
the use of the max function is as a comparison function for
pairs of arrays. Here, the general syntax is

     y = max(x,z)

where x and z are either both numerical arrays of the same
dimensions, or one of the two is a scalar. In the first
case, the output is the same size as both arrays, and is
defined elementwise by the smaller of the two arrays. In the
second case, the output is defined elementwise by the
smaller of the array entries and the scalar.


 Internals

In the general version of the max function which is applied
to a single array (using the max(x,[],d) or max(x)
syntaxes), The output is computed via
 \[ y(m_1,\ldots,m_{d-1},1,m_{d+1},\ldots,m_{p}) = \max_{k}
x(m_1,\ldots,m_{d-1},k,m_{d+1},\ldots,m_{p}), \]
and the output array n of indices is calculated via
 \[ n(m_1,\ldots,m_{d-1},1,m_{d+1},\ldots,m_{p}) = \arg
\max_{k} x(m_1,\ldots,m_{d-1},k,m_{d+1},\ldots,m_{p}) \]
In the two-array version (max(x,z)), the single output is
computed as
 \[ y(m_1,\ldots,m_{d-1},1,m_{d+1},\ldots,m_{p}) = \begin
{cases} x(m_1,\ldots,m_{d-1},k,m_{d+1},\ldots,m_{p}) &amp; x
(\cdots) \leq z(\cdots) \\ z(m_1,\ldots,m_{d-1},k,m_
{d+1},\ldots,m_{p}) &amp; z(\cdots) < x(\cdots). \end{cases}
\]


 Example

The following piece of code demonstrates various uses of the
maximum function. We start with the one-array version.

  --> A = [5,1,3;3,2,1;0,3,1]

  A =
   5 1 3
   3 2 1
   0 3 1

We first take the maximum along the columns, resulting in a
row vector.

  --> max(A)

  ans =
   5 3 3

Next, we take the maximum along the rows, resulting in a
column vector.

  --> max(A,[],2)

  ans =
   5
   3
   3

When the dimension argument is not supplied, max acts along
the first non-singular dimension. For a row vector, this is
the column direction:

  --> max([5,3,2,9])

  ans =
   9

For the two-argument version, we can compute the smaller of
two arrays, as in this example:

  --> a = int8(100*randn(4))

  a =
    -16   65  -38  -45
    -33  -46  127  -14
   -110   18  -15  -11
    127 -128 -128 -120

  --> b = int8(100*randn(4))

  b =
    -60  127 -128   91
     71 -128  -36  -53
      8  127 -106 -128
   -128   47  -93  -34

  --> max(a,b)

  ans =
   -16 127 -38  91
    71 -46 127 -14
     8 127 -15 -11
   127  47 -93 -34

Or alternately, we can compare an array with a scalar

  --> a = randn(2)

  a =
     -0.0574    1.1346
     -1.3497   -2.3248

  --> max(a,0)

  ans =
           0    1.1346
           0         0


* FreeMat_Documentation
* Elementary_Functions
* Generated on Thu Jul 25 2013 17:17:14 for FreeMat by
  doxygen_ 1.8.1.1

