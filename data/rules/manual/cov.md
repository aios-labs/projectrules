---
description: "Guidelines for cov"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Mathematics","Data Analysis","Matrix Operations","Statistics","FreeMat"]
__meta__rate: 7
---

 Usage

Computes the covariance of a matrix or a vector. The general
syntax for its use is

    y = cov(x)

where x is a matrix or a vector. If x is a vector then cov
returns the variance of x. If x is a matrix then cov returns
the covariance matrix of the columns of x. You can also call
cov with two arguments to compute the matrix of cross
correlations. The syntax for this mode is

    y = cov(x,z)

where x and z are matrices of the same size. Finally, you
can provide a normalization flag d that is either 0 or 1,
which changes the normalization factor from L-1 (for d=0) to
L (for d=1) where L is the number of rows in the matrix x.
In this case, the syntaxes are

    y = cov(x,z,d)

for the two-argument case, and

    y = cov(x,d)

for the one-argument case.


 Example

The following demonstrates some uses of the cov function

  --> A = [5,1,3;3,2,1;0,3,1]

  A =
   5 1 3
   3 2 1
   0 3 1

  --> B = [4,-2,0;1,5,2;-2,0,1];

We start with the covariance matrix for A

  --> cov(A)

  ans =
      4.2222   -1.6667    1.5556
     -1.6667    0.6667   -0.6667
      1.5556   -0.6667    0.8889

and again with the (biased) normalization

  --> cov(A,1)

  ans =
      4.2222   -1.6667    1.5556
     -1.6667    0.6667   -0.6667
      1.5556   -0.6667    0.8889

Here we compute the cross covariance between A and B

  --> cov(A,B)

  ans =
      2.0988    1.6667
      1.6667    5.1111

and again with biased normalization

  --> cov(A,B,1)

  ans =
      2.0988    1.6667
      1.6667    5.1111


* FreeMat_Documentation
* Elementary_Functions
* Generated on Thu Jul 25 2013 17:17:14 for FreeMat by
  doxygen_ 1.8.1.1

