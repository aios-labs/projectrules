---
description: "Guidelines for mod"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["Mathematics","Array Operations","Programming","Modulus","FreeMat"]
__meta__rate: 7
---

 Usage

Computes the modulus of an array. The syntax for its use is

     y = mod(x,n)

where x is matrix, and n is the base of the modulus. The
effect of the mod operator is to add or subtract multiples
of n to the vector x so that each element x_i is between 0
and n (strictly). Note that n does not have to be an
integer. Also, n can either be a scalar (same base for all
elements of x), or a vector (different base for each element
of x).
Note that the following are defined behaviors:

  1. mod(x,0) = x@
  2. mod(x,x) = 0@
  3. mod(x,n)@ has the same sign as n for all other cases.



 Example

The following examples show some uses of mod arrays.

  --> mod(18,12)

  ans =
   6

  --> mod(6,5)

  ans =
   1

  --> mod(2*pi,pi)

  ans =
   0

Here is an example of using mod to determine if integers are
even or odd:

  --> mod([1,3,5,2],2)

  ans =
   1 1 1 0

Here we use the second form of mod, with each element using
a separate base.

  --> mod([9 3 2 0],[1 0 2 2])

  ans =
   0 3 0 0


* FreeMat_Documentation
* Mathematical_Functions
* Generated on Thu Jul 25 2013 17:17:44 for FreeMat by
  doxygen_ 1.8.1.1

